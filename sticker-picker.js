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

  // UI and initialization are added in the next task.
})();
