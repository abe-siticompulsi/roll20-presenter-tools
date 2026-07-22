const { test } = require('node:test');
const assert = require('node:assert');
const {
  chatMessageFor, pickLang, columnsFor, loadCustom, saveCustom, builtinStickers, STORAGE_KEY,
} = require('../sticker-picker.js');

function fakeStorage(initial = {}) {
  const map = new Map(Object.entries(initial));
  return {
    getItem: (k) => (map.has(k) ? map.get(k) : null),
    setItem: (k, v) => map.set(k, String(v)),
  };
}

test('chatMessageFor appends #.png when the URL has no image extension', () => {
  assert.strictEqual(
    chatMessageFor('Fireball', 'https://cloud.example.org/s/AbC123/preview'),
    '[Fireball](https://cloud.example.org/s/AbC123/preview#.png)'
  );
});

test('chatMessageFor leaves URLs that already end with an image extension', () => {
  assert.strictEqual(
    chatMessageFor('Play to win', 'https://x.example/stickers/example-en.png'),
    '[Play to win](https://x.example/stickers/example-en.png)'
  );
  assert.strictEqual(
    chatMessageFor('n', 'https://x.example/a.WEBP'),
    '[n](https://x.example/a.WEBP)'
  );
});

test('chatMessageFor appends after a query string', () => {
  assert.strictEqual(
    chatMessageFor('n', 'https://x.example/img?id=9'),
    '[n](https://x.example/img?id=9#.png)'
  );
});

test('chatMessageFor does not double an existing image-extension fragment', () => {
  assert.strictEqual(
    chatMessageFor('n', 'https://x.example/s/T0k/preview#.png'),
    '[n](https://x.example/s/T0k/preview#.png)'
  );
});

test('pickLang defaults to en and only accepts it', () => {
  assert.strictEqual(pickLang(undefined), 'en');
  assert.strictEqual(pickLang('fr'), 'en');
  assert.strictEqual(pickLang('it'), 'it');
});

test('loadCustom returns [] for empty, corrupt, or non-array storage', () => {
  assert.deepStrictEqual(loadCustom(fakeStorage()), []);
  assert.deepStrictEqual(loadCustom(fakeStorage({ [STORAGE_KEY]: '{oops' })), []);
  assert.deepStrictEqual(loadCustom(fakeStorage({ [STORAGE_KEY]: '{"a":1}' })), []);
});

test('loadCustom filters malformed entries', () => {
  const s = fakeStorage({ [STORAGE_KEY]: JSON.stringify([{ name: 'ok', url: 'https://x/y' }, { name: 42 }, null]) });
  assert.deepStrictEqual(loadCustom(s), [{ name: 'ok', url: 'https://x/y' }]);
});

test('saveCustom / loadCustom round-trip', () => {
  const s = fakeStorage();
  saveCustom(s, [{ name: 'a', url: 'https://x/a' }]);
  assert.deepStrictEqual(loadCustom(s), [{ name: 'a', url: 'https://x/a' }]);
});

test('builtinStickers picks the example for the language', () => {
  assert.strictEqual(builtinStickers('en')[0].name, 'Play to win');
  assert.ok(builtinStickers('en')[0].url.endsWith('/assets/stickers/example-en.png'));
  assert.strictEqual(builtinStickers('it')[0].name, 'Giocare spietato');
  assert.ok(builtinStickers('it')[0].url.endsWith('/assets/stickers/example-it.png'));
  assert.strictEqual(builtinStickers('en')[0].builtin, true);
});

test('columnsFor switches to 4 columns from the 13th tile (12 stickers + add tile)', () => {
  assert.strictEqual(columnsFor(1), 3);
  assert.strictEqual(columnsFor(12), 3);
  assert.strictEqual(columnsFor(13), 4);
  assert.strictEqual(columnsFor(40), 4);
});
