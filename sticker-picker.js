/**
 * Roll20 Sticker Picker
 * A panel to send image "stickers" into the Roll20 chat, designed as the
 * companion of presenter.user.js (which displays chat images full-screen).
 *
 * Loaded on demand by a bookmarklet (fetch + eval — Roll20's CSP blocks
 * external <script src> but allows fetch and 'unsafe-eval'):
 *
 *   javascript:fetch('https://raw.githubusercontent.com/abe-siticompulsi/roll20-presenter-tools/main/sticker-picker.js?'+Date.now()).then(r=>r.text()).then(eval).catch(e=>alert('Sticker picker: '+e.message));
 *
 * Set window.__r20spLang='it' before the fetch for the Italian UI.
 * Repo: https://github.com/abe-siticompulsi/roll20-presenter-tools
 */
(function () {
  'use strict';

  // ── Pure helpers (unit-tested under Node via the export guard below) ──

  const STORAGE_KEY = 'r20-sticker-picker.custom';
  const RAW_BASE = 'https://raw.githubusercontent.com/abe-siticompulsi/roll20-presenter-tools/main/';
  const IMAGE_EXT_RE = /\.(png|gif|webp|avif|jpe?g)$/i;

  // Roll20 renders a chat message like "[name](url)" as an inline image as
  // long as the URL looks like an image file; a "#.png" fragment is enough
  // of a hint, and also makes presenter.user.js style it as a sticker.
  function chatMessageFor(name, url) {
    const path = url.split(/[?#]/)[0];
    const hasImageHint = IMAGE_EXT_RE.test(path) || /#\.\w+$/.test(url);
    return '[' + name + '](' + url + (hasImageHint ? '' : '#.png') + ')';
  }

  function pickLang(raw) {
    return raw === 'it' ? 'it' : 'en';
  }

  const I18N = {
    en: {
      title: 'Stickers',
      addTile: 'Add sticker',
      promptUrl: 'Image URL (must be publicly reachable):',
      promptName: 'Sticker name (shown as the chat link text):',
      chatNotFound: 'Sticker picker: Roll20 chat input not found — cannot send.',
      removeTip: 'Remove this sticker',
      launcherTip: 'Open the sticker picker (Shift+click a sticker to send several)',
      badImage: 'preview failed',
    },
    it: {
      title: 'Sticker',
      addTile: 'Aggiungi sticker',
      promptUrl: 'URL dell\'immagine (deve essere raggiungibile pubblicamente):',
      promptName: 'Nome dello sticker (sarà il testo del link in chat):',
      chatNotFound: 'Sticker picker: campo chat di Roll20 non trovato — invio impossibile.',
      removeTip: 'Rimuovi questo sticker',
      launcherTip: 'Apri il selettore di sticker (Shift+clic su uno sticker per inviarne più di uno)',
      badImage: 'anteprima non caricata',
    },
  };

  function builtinStickers(lang) {
    return [{
      name: lang === 'it' ? 'Giocare spietato' : 'Play to win',
      url: RAW_BASE + 'assets/stickers/example-' + lang + '.png',
      builtin: true,
    }];
  }

  function loadCustom(storage) {
    try {
      const parsed = JSON.parse(storage.getItem(STORAGE_KEY) || '[]');
      if (!Array.isArray(parsed)) return [];
      return parsed.filter((s) => s && typeof s.name === 'string' && typeof s.url === 'string');
    } catch (e) {
      return [];
    }
  }

  function saveCustom(storage, list) {
    storage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  // ── Node export guard: under `node --test` export the pure helpers and
  //    stop before touching any DOM. In the browser `module` is undefined. ──
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { chatMessageFor, pickLang, I18N, loadCustom, saveCustom, builtinStickers, STORAGE_KEY };
    return;
  }

  // ── Browser-only section ──

  const lang = pickLang(window.__r20spLang);
  const t = I18N[lang];

  // Self-replacement: a fresh eval of this file tears down the previous
  // instance (panel, launcher, listeners) so the bookmarklet always runs
  // the latest pushed code without leaking DOM nodes.
  if (window.__r20StickerPicker && typeof window.__r20StickerPicker.destroy === 'function') {
    window.__r20StickerPicker.destroy();
  }

  const PANEL_ID = 'r20-sticker-picker-panel';
  const LAUNCHER_ID = 'r20-sticker-picker-launcher';

  function findChat() {
    const ta = document.querySelector('#textchat-input textarea')
      || document.querySelector('#textchat-input [contenteditable="true"]');
    const btn = document.querySelector('#chatSendBtn')
      || document.querySelector('#textchat-input button');
    return ta && btn ? { ta, btn } : null;
  }

  function sendSticker(sticker) {
    const chat = findChat();
    if (!chat) { alert(t.chatNotFound); return; }
    const draft = chat.ta.value;           // preserve whatever the user was typing
    chat.ta.value = chatMessageFor(sticker.name, sticker.url);
    chat.btn.click();
    chat.ta.value = draft;
  }

  const style = document.createElement('style');
  style.textContent = [
    '#' + PANEL_ID + ' { position: fixed; right: 16px; bottom: 64px; z-index: 100000;',
    '  width: 340px; max-height: 60vh; overflow-y: auto; background: #1e1f24; color: #eee;',
    '  border: 1px solid #444; border-radius: 10px; box-shadow: 0 10px 40px rgba(0,0,0,.5);',
    '  font: 13px/1.3 sans-serif; padding: 10px; }',
    '#' + PANEL_ID + ' .sp-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }',
    '#' + PANEL_ID + ' .sp-title { font-weight: 700; font-size: 14px; }',
    '#' + PANEL_ID + ' .sp-close { cursor: pointer; border: 0; background: none; color: #aaa; font-size: 16px; }',
    '#' + PANEL_ID + ' .sp-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }',
    '#' + PANEL_ID + ' .sp-tile { position: relative; background: #2a2b31; border: 1px solid #3a3b42;',
    '  border-radius: 8px; cursor: pointer; aspect-ratio: 1; display: flex; align-items: center;',
    '  justify-content: center; overflow: hidden; }',
    '#' + PANEL_ID + ' .sp-tile:hover { border-color: #7c5cff; }',
    '#' + PANEL_ID + ' .sp-tile img { max-width: 92%; max-height: 92%; object-fit: contain; }',
    '#' + PANEL_ID + ' .sp-tile .sp-broken { padding: 4px; color: #c66; font-size: 11px; word-break: break-all; text-align: center; }',
    '#' + PANEL_ID + ' .sp-remove { position: absolute; top: 2px; right: 2px; border: 0; border-radius: 50%;',
    '  width: 18px; height: 18px; line-height: 16px; background: #000a; color: #ccc; cursor: pointer; font-size: 11px; }',
    '#' + PANEL_ID + ' .sp-add { font-size: 26px; color: #9a9; border-style: dashed; }',
    '#' + LAUNCHER_ID + ' { cursor: pointer; border: 0; background: none; font-size: 18px;',
    '  vertical-align: middle; margin-left: 4px; }',
  ].join('\n');

  let customList = loadCustom(window.localStorage);
  let panel = null;

  function buildTile(sticker, isCustom) {
    const tile = document.createElement('div');
    tile.className = 'sp-tile';
    tile.title = sticker.name;
    const img = document.createElement('img');
    img.src = sticker.url;
    img.alt = sticker.name;
    img.onerror = function () {
      // Broken preview: show name + truncated URL so dead links are obvious.
      // The sticker stays clickable (the URL might work for other viewers).
      const broken = document.createElement('div');
      broken.className = 'sp-broken';
      broken.textContent = sticker.name + ' (' + t.badImage + ') ' + sticker.url.slice(0, 40) + '…';
      tile.replaceChildren(broken);
      if (isCustom) tile.appendChild(removeBtn);
    };
    tile.appendChild(img);
    let removeBtn = null;
    if (isCustom) {
      removeBtn = document.createElement('button');
      removeBtn.className = 'sp-remove';
      removeBtn.textContent = '×';
      removeBtn.title = t.removeTip;
      removeBtn.addEventListener('click', function (ev) {
        ev.stopPropagation();
        customList = customList.filter(function (s) { return s !== sticker; });
        saveCustom(window.localStorage, customList);
        renderGrid();
      });
      tile.appendChild(removeBtn);
    }
    tile.addEventListener('click', function (ev) {
      sendSticker(sticker);
      if (!ev.shiftKey) closePanel();   // Shift+click keeps the panel open
    });
    return tile;
  }

  function renderGrid() {
    const grid = panel.querySelector('.sp-grid');
    grid.replaceChildren();
    builtinStickers(lang).forEach(function (s) { grid.appendChild(buildTile(s, false)); });
    customList.forEach(function (s) { grid.appendChild(buildTile(s, true)); });
    const add = document.createElement('div');
    add.className = 'sp-tile sp-add';
    add.textContent = '+';
    add.title = t.addTile;
    add.addEventListener('click', function () {
      const url = (window.prompt(t.promptUrl) || '').trim();
      if (!url) return;
      const name = (window.prompt(t.promptName) || '').trim() || 'sticker';
      customList.push({ name: name, url: url });
      saveCustom(window.localStorage, customList);
      renderGrid();
    });
    grid.appendChild(add);
  }

  function buildPanel() {
    panel = document.createElement('div');
    panel.id = PANEL_ID;
    const head = document.createElement('div');
    head.className = 'sp-head';
    const title = document.createElement('span');
    title.className = 'sp-title';
    title.textContent = t.title;
    const close = document.createElement('button');
    close.className = 'sp-close';
    close.textContent = '✕';
    close.addEventListener('click', closePanel);
    head.appendChild(title);
    head.appendChild(close);
    panel.appendChild(head);
    const grid = document.createElement('div');
    grid.className = 'sp-grid';
    panel.appendChild(grid);
    panel.style.display = 'none';
    document.body.appendChild(panel);
    renderGrid();
  }

  function openPanel() { panel.style.display = 'block'; }
  function closePanel() { panel.style.display = 'none'; }
  function togglePanel() {
    if (panel.style.display === 'none') openPanel(); else closePanel();
  }

  function onKeyDown(ev) {
    if (ev.key === 'Escape') closePanel();
  }

  function onPointerDown(ev) {
    // Click outside the panel (and not on the launcher) closes it.
    if (panel.style.display === 'none') return;
    if (panel.contains(ev.target)) return;
    const launcher = document.getElementById(LAUNCHER_ID);
    if (launcher && launcher.contains(ev.target)) return;
    closePanel();
  }

  // Launcher button next to Roll20's chat Send button; if the chat markup
  // is not found the launcher is simply skipped (the bookmarklet still works).
  function injectLauncher() {
    const chat = findChat();
    if (!chat) return;
    const btn = document.createElement('button');
    btn.id = LAUNCHER_ID;
    btn.textContent = '🎴';   // 🎴
    btn.title = t.launcherTip;
    btn.addEventListener('click', togglePanel);
    chat.btn.insertAdjacentElement('afterend', btn);
  }

  function destroy() {
    document.removeEventListener('keydown', onKeyDown, true);
    document.removeEventListener('pointerdown', onPointerDown, true);
    const oldPanel = document.getElementById(PANEL_ID);
    if (oldPanel) oldPanel.remove();
    const oldLauncher = document.getElementById(LAUNCHER_ID);
    if (oldLauncher) oldLauncher.remove();
    style.remove();
    delete window.__r20StickerPicker;
  }

  document.head.appendChild(style);
  buildPanel();
  injectLauncher();
  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  window.__r20StickerPicker = { destroy: destroy, open: openPanel, close: closePanel };
  openPanel();
})();
