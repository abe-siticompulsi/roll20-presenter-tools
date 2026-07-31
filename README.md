# Roll20 Presenter Tools

Two companion scripts to run a Roll20 game as a live "TV show":

- **`presenter.user.js`** — a Tampermonkey userscript for the *presenter* browser
  (the one being screen-captured/streamed). It restyles the Roll20 editor, shows
  chat messages as broadcast-style overlays, displays images sent in chat as
  animated full-screen **stickers**, drives OBS scene switching over
  obs-websocket, and more.
- **`sticker-picker.js`** — a bookmarklet-loaded panel for *players* (or the
  stream director) to send those stickers into the Roll20 chat with one click.

## Sticker picker

### Install

Roll20's Content-Security-Policy blocks external `<script src>` tags, but allows
`fetch` and `eval`. The picker is therefore loaded by a bookmarklet that fetches
the script from this repo and evaluates it — each click always runs the latest
pushed version.

Create a bookmark with this URL (English UI, the default):

```
javascript:fetch('https://raw.githubusercontent.com/abe-siticompulsi/roll20-presenter-tools/main/sticker-picker.js?'+Date.now()).then(r=>r.text()).then(eval).catch(e=>alert('Sticker picker: '+e.message));
```

Italian UI variant:

```
javascript:(window.__r20spLang='it',fetch('https://raw.githubusercontent.com/abe-siticompulsi/roll20-presenter-tools/main/sticker-picker.js?'+Date.now()).then(r=>r.text()).then(eval).catch(e=>alert('Sticker picker: '+e.message)));
```

### Use

1. Open your Roll20 game, click the bookmarklet once: the panel opens and a 🎴
   button appears next to the chat **Send** button (use it to reopen the panel —
   the bookmarklet is only needed again after a page reload).
2. Click a sticker to send it to chat (Shift+click to send several without
   closing). The message format is `[name](url#.png)` — the `#.png` fragment
   makes Roll20 render the link as an inline image.
3. Add your own stickers with the **+** tile (any publicly reachable image URL).
   They are stored in your browser's localStorage only — private to you.
4. **Back up or share your collection** with the 📤 / 📥 buttons in the panel
   header: 📤 downloads `sticker-collection.json`, 📥 imports such a file and
   merges it into your collection (already-present URLs are kept unchanged).
5. **Animated stickers** (Lottie, Telegram-style): host two files side by
   side — `<name>.lottie.png` (a static preview frame) and
   `<name>.lottie.json` (the Lottie animation) — and add the `.png` URL as a
   normal sticker. Chat shows the static preview to everyone; the presenter
   fetches the JSON twin and plays the vector animation full-screen (falling
   back to the preview if the JSON is unreachable). The JSON's host must
   allow cross-origin reads (GitHub raw does; a plain Nextcloud does not),
   and tiles with a ▶ badge play their animation on hover.

## Presenter userscript

Install [Tampermonkey](https://www.tampermonkey.net/), then add
`presenter.user.js`. It activates on `https://app.roll20.net/editor/`. On first
run it asks for your obs-websocket password (stored in localStorage); leave it
empty to run without OBS integration.

## Development

```
node --test test/sticker-picker.test.js
node --check sticker-picker.js
```

`test/fixture.html` is a fake Roll20 chat to exercise the panel locally.
