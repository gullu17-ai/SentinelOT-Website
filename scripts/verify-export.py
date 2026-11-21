from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
from xml.etree import ElementTree as ET
import json
import os
import sys

ROOT = Path(__file__).resolve().parents[1] / 'out'
ROUTES = ['/', '/product/', '/research/', '/about/']
ORIGIN = os.environ.get('NEXT_PUBLIC_SITE_URL', 'https://sentinel-ot-website-test.vercel.app').rstrip('/')
PREVIEW = '--preview' in sys.argv
class Page(HTMLParser):
    def __init__(self, file):
        super().__init__()
        self.ids, self.links, self.sources, self.meta = set(), [], [], {}
        self.h1 = self.main = 0
        self.canonical = None
        self.structured = []
        self._json = None
        self._script = False
        self.text = []
        self.feed(file.read_text())
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'script':
            self._script = True
            if a.get('type') == 'application/ld+json': self._json = []
        if 'id' in a: self.ids.add(a['id'])
        if tag == 'h1': self.h1 += 1
        if tag == 'main': self.main += 1
        if tag == 'a' and 'href' in a: self.links.append(a['href'])
        if tag in ('img', 'script', 'source', 'track') and 'src' in a: self.sources.append(a['src'])
        if tag == 'link' and a.get('rel') == 'stylesheet': self.sources.append(a['href'])
        if tag == 'meta': self.meta[a.get('property') or a.get('name')] = a.get('content')
        if tag == 'link' and a.get('rel') == 'canonical': self.canonical = a.get('href')
    def handle_data(self, data):
        if self._json is not None: self._json.append(data)
        if not self._script: self.text.append(data)
    def handle_endtag(self, tag):
        if tag == 'script':
            if self._json is not None: self.structured.append(json.loads(''.join(self._json)))
            self._json = None
            self._script = False

pages = {route: Page(ROOT / route.lstrip('/') / 'index.html') for route in ROUTES}
errors = []
checked = 0
for route, page in pages.items():
    if page.h1 != 1 or page.main != 1: errors.append(f'{route}: expected one h1 and one main')
    for attr in ['description', 'og:title', 'og:description', 'og:image', 'twitter:card', 'robots']:
        if not page.meta.get(attr): errors.append(f'{route}: missing metadata {attr}')
    if page.canonical != ORIGIN + route:
        errors.append(f'{route}: wrong canonical')
    directives = [value.strip() for value in page.meta.get('robots', '').split(',')]
    if PREVIEW and 'noindex' not in directives: errors.append(f'{route}: preview must remain noindex')
    if not PREVIEW and ('noindex' in directives or 'index' not in directives or 'follow' not in directives): errors.append(f'{route}: production indexing is blocked')
    entities = [entity for block in page.structured for entity in block.get('@graph', [block])]
    types = {entity.get('@type') for entity in entities}
    for required in ['Organization', 'WebSite', 'SoftwareApplication', 'WebPage'] + ([] if route == '/' else ['BreadcrumbList']):
        if required not in types: errors.append(f'{route}: missing {required} structured data')
    if route == '/product/':
        faqs = [entity for entity in entities if entity.get('@type') == 'FAQPage']
        if not faqs: errors.append('Product: missing FAQ structured data')
        for faq in faqs:
            visible = ' '.join(page.text)
            for question in faq['mainEntity']:
                if question['name'] not in visible or question['acceptedAnswer']['text'] not in visible:
                    errors.append('Product: structured FAQ differs from visible answers')
    for value in page.links + page.sources:
        url = urlsplit(value)
        if url.scheme or url.netloc: continue
        path = unquote(url.path) or route
        if not path.startswith('/'): errors.append(f'{route}: unexpected relative URL {value}'); continue
        target = ROOT / path.lstrip('/')
        if target.is_dir(): target /= 'index.html'
        if not target.is_file(): errors.append(f'{route}: missing target {value}')
        if url.fragment and path in pages and unquote(url.fragment) not in pages[path].ids:
            errors.append(f'{route}: missing anchor {value}')
        checked += 1
tree=ET.parse(ROOT/'sitemap.xml')
urls={el.text for el in tree.iter() if el.tag.endswith('}loc')}
if len(urls)!=4: errors.append('Sitemap must contain four public pages')
if urls != {ORIGIN + route for route in ROUTES}: errors.append('Sitemap points to an unexpected origin')
if (ROOT / 'robots.txt').exists(): errors.append('robots.txt should be removed as requested')
facts = ROOT / 'llms.txt'
if not facts.is_file() or ORIGIN + '/research/' not in facts.read_text(): errors.append('Missing or incorrectly linked plain-text project facts')
if errors:
    raise SystemExit('\n'.join(errors))
print(f'PASS: {len(pages)} pages; {checked} local references; indexing, canonical origin, JSON-LD, visible FAQs, project facts and sitemap.')
