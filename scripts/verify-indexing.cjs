const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

const source = ts.transpileModule(fs.readFileSync('lib/content.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;

function config(env) {
  const context = { exports: {}, process: { env }, URL };
  vm.runInNewContext(source, context);
  return context.exports;
}

const production = config({ NODE_ENV: 'production' });
assert.equal(production.siteUrl, 'https://sentinel-ot-website-test.vercel.app');
assert.equal(production.isPublicSite, true);
assert.equal(config({ NODE_ENV: 'production', VERCEL_ENV: 'production' }).isPublicSite, true);
assert.equal(config({ NODE_ENV: 'production', VERCEL_ENV: 'preview' }).isPublicSite, false);
assert.equal(config({ NODE_ENV: 'development' }).isPublicSite, false);
assert.equal(config({ NODE_ENV: 'production', SENTINELOT_NOINDEX: '1' }).isPublicSite, false);
assert.equal(config({ NEXT_PUBLIC_SITE_URL: 'https://example.org/' }).siteUrl, 'https://example.org');
assert.throws(() => config({ NEXT_PUBLIC_SITE_URL: 'not-a-url' }));
console.log('PASS: production indexing, preview/development opt-out, domain override and invalid-domain checks.');
