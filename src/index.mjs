import assert from 'node:assert/strict';
import { parsePackageSpec, normalizeManifest } from '@x12i/pagenti-core';

const spec = parsePackageSpec('@demo/knowledge@1.0.0');
assert.equal(spec.packageName, '@demo/knowledge');
assert.equal(spec.version, '1.0.0');
const manifest = normalizeManifest({ schemaVersion: 'pagenti.package.v1', name: spec.packageName, version: spec.version, title: 'Demo knowledge' });
assert.equal(manifest.name, '@demo/knowledge');
assert.equal(manifest.schemaVersion, 'pagenti.package.v1');
console.log({ spec, manifest });
// This prepares local metadata only; no package is installed or published.
