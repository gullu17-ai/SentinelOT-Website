from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1] / 'out'
ROUTES = ['/', '/product/', '/research/', '/about/']
class Page(HTMLParser):
    def __init__(self, file):
        super().__init__()
        self.ids, self.links, self.sources, self.meta = set(), [], [], {}
        self.h1 = self.main = 0
        self.canonical = None
        self.feed(file.read_text())
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a: self.ids.add(a['id'])
        if tag == 'h1': self.h1 += 1
        if tag == 'main': self.main += 1
        if tag == 'a' and 'href' in a: self.links.append(a['href'])
        if tag in ('img', 'script', 'source', 'track') and 'src' in a: self.sources.append(a['src'])
        if tag == 'link' and a.get('rel') == 'stylesheet': self.sources.append(a['href'])
        if tag == 'meta': self.meta[a.get('property') or a.get('name')] = a.get('content')
        if tag == 'link' and a.get('rel') == 'canonical': self.canonical = a.get('href')

pages = {route: Page(ROOT / route.lstrip('/') / 'index.html') for route in ROUTES}
errors = []
checked = 0
for route, page in pages.items():
    if page.h1 != 1 or page.main != 1: errors.append(f'{route}: expected one h1 and one main')
    for attr in ['description', 'og:title', 'og:description', 'og:image', 'twitter:card', 'robots']:
        if not page.meta.get(attr): errors.append(f'{route}: missing metadata {attr}')
    if not page.canonical or urlsplit(page.canonical).path != route:
        errors.append(f'{route}: wrong canonical')
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
if errors:
    raise SystemExit('\n'.join(errors))
print(f'PASS: {len(pages)} pages; {checked} local link/asset references; canonical, social metadata, landmarks and sitemap.')
