// ==UserScript==
// @name        Roll20 "Radiant Damage" presenter
// @namespace   Violentmonkey Scripts
// @match       https://app.roll20.net/editor/*
// @icon        data:image/x-icon;base64,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
// @grant       none
// @version     1.4
// @author      abe
// @require     https://cdn.jsdelivr.net/npm/obs-websocket-js@5/dist/obs-ws.min.js
// @description Roll20 interface tweaks for the presenter side (the person recording the video) to improve the viewer's experience
// ==/UserScript==

(function () {
  'use strict';

  // ── CSS ──────────────────────────────────────────────────────────────────
  const css = `
    .message.system {
      display: none;
    }
    #avatarContainer {
      display: none;
    }
    #vm-master-toolbar {
      display: none;
    }
    .parentContainer {
      display: none !important;
    }
    #sidebarcontrol {
      opacity: 0.01;
    }
    #r20-chat-overlay .tstamp {
      display: none;
    }

    #r20-chat-overlay .sheet-rolltemplate-atk,
    #r20-chat-overlay .sheet-rolltemplate-simple,
    #r20-chat-overlay .sheet-rolltemplate-dmg  {
      width: min(100%, calc(27rem * var(--message-font-size)));
      /*! height: 400px; */
      margin: 0 auto;
    }
    #r20-chat-overlay .sheet-result,
    #r20-chat-overlay .sheet-desc span {
      font-size: calc(2rem * var(--message-font-size));
      line-height: 1;
    }
    #r20-chat-overlay .sheet-desc span span {
      margin-top: calc(1rem * var(--message-font-size));
      font-size: 1.4em;
    }
    #r20-chat-overlay .sheet-sublabel span {
      font-size: calc(1rem * var(--message-font-size));
    }
    #r20-chat-overlay .sheet-label {
      margin: calc(0.5rem * var(--message-font-size));
    }
    #r20-chat-overlay .sheet-label span,
    #r20-chat-overlay .sheet-savedc span,
    #r20-chat-overlay .sheet-desc .sheet-sublabel,
    #r20-chat-overlay .sheet-solo .sheet-sublabel {
      line-height: 1;
      font-size: calc(1.5rem * var(--message-font-size));
      color: black;
    }

    #r20-chat-overlay .sheet-spelldesc-link {
      opacity: 0;
    }

    #r20-chat-overlay .sheet-container,
    #r20-chat-overlay .sheet-desc,
    #r20-chat-overlay .sheet-save {
      background-size: 100% 100%;
    }

    #r20-chat-overlay .sheet-rolltemplate-spell,
    #r20-chat-overlay .sheet-rolltemplate-spelloutput {
      display: flex;
    }
    #r20-chat-overlay .sheet-rolltemplate-spell .sheet-container,
    #r20-chat-overlay .sheet-rolltemplate-spelloutput .sheet-container {
      margin-left: 0;
      flex-grow: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    #r20-chat-overlay .sheet-container .sheet-title,
    #r20-chat-overlay .sheet-container .sheet-italics,
    #r20-chat-overlay .sheet-container .sheet-spellsavedc,
    #r20-chat-overlay .sheet-container .sheet-row:nth-child(2) {
      flex-basis: 100%;
    }
    #r20-chat-overlay .sheet-container .sheet-row {
      font-size: 90%;
    }
    #r20-chat-overlay .sheet-container .sheet-row.sheet-desconly {
      display: none;
    }
    #r20-chat-overlay .sheet-container .sheet-spacer {
      display: none;
    }
    #r20-chat-overlay .message.general .by {
      margin-right: 1rem;
    }
    .initiativedialog {
      display: none !important;
    }

    /* ── STICKERS / CHAT IMAGES ── */
    .r20-sticker {
      position: fixed;
      z-index: 10000;
      pointer-events: none;
      transform: translate(-50%, -50%);
      /* slot redistribution happens with a smooth transition */
      transition: left 0.6s cubic-bezier(0.3, 1.15, 0.4, 1), top 0.6s cubic-bezier(0.3, 1.15, 0.4, 1);
    }
    .r20-sticker .r20-sticker-pop {
      position: relative;
      /* The "resting" rotation lives here, not only in the entry animation's fill:
         that way when the exit animation starts there's no snap back to 0°. */
      transform: rotate(var(--stk-rot, 0deg));
    }
    .r20-sticker .r20-sticker-burst {
      position: absolute;
      inset: -18%;
      border-radius: 50%;
      background: radial-gradient(closest-side, rgba(255,255,255,0.85), rgba(255,255,255,0) 72%);
      animation: r20-burst 0.7s ease-out both;
    }
    .r20-sticker img {
      display: block;
      position: relative;
      transition: max-width 0.6s ease, max-height 0.6s ease;
    }
    /* PNG & co. (transparency): glow that follows the outline */
    .r20-sticker.png img {
      filter: drop-shadow(0 0 16px rgba(255,255,255,0.35)) drop-shadow(0 16px 28px rgba(0,0,0,0.55));
    }
    /* Photos (JPEG etc.): polaroid style */
    .r20-sticker.photo img {
      border: 10px solid #fff;
      border-radius: 6px;
      background: #fff;
      box-shadow: 0 18px 48px rgba(0,0,0,0.65);
    }

    /* Entry animations (STK.animIn: random | slam | drop | spin) */
    .r20-sticker.in-slam .r20-sticker-pop {
      animation: r20-in-slam 0.55s cubic-bezier(0.2, 1.4, 0.4, 1) both;
    }
    .r20-sticker.in-drop .r20-sticker-pop {
      animation: r20-in-drop 0.7s cubic-bezier(0.5, 0, 0.5, 1) both;
    }
    .r20-sticker.in-drop .r20-sticker-burst {
      animation-delay: 0.4s; /* the flash triggers on landing, not on departure */
    }
    .r20-sticker.in-spin .r20-sticker-pop {
      animation: r20-in-spin 0.6s cubic-bezier(0.2, 1.2, 0.4, 1) both;
    }
    /* Exit animations (STK.animOut: random | fly | fall | fade) — after the entry ones, so they take precedence */
    .r20-sticker.out-fly .r20-sticker-pop {
      animation: r20-out-fly 0.5s ease-in both;
    }
    .r20-sticker.out-fall .r20-sticker-pop {
      animation: r20-out-fall 0.6s cubic-bezier(0.5, 0, 0.9, 0.4) both;
    }
    .r20-sticker.out-fade .r20-sticker-pop {
      animation: r20-out-fade 0.5s ease both;
    }

    @keyframes r20-in-slam {
      0%   { transform: scale(0.1) rotate(-20deg); opacity: 0; }
      55%  { transform: scale(1.14) rotate(5deg); opacity: 1; }
      78%  { transform: scale(0.95) rotate(calc(var(--stk-rot, 0deg) - 2deg)); }
      100% { transform: scale(1) rotate(var(--stk-rot, 0deg)); opacity: 1; }
    }
    @keyframes r20-in-drop {
      0%   { transform: translateY(-120vh) rotate(-14deg); }
      50%  { transform: translateY(0) rotate(var(--stk-rot, 0deg)); }
      70%  { transform: translateY(-4%) rotate(var(--stk-rot, 0deg)); }
      100% { transform: translateY(0) rotate(var(--stk-rot, 0deg)); }
    }
    @keyframes r20-in-spin {
      0%   { transform: scale(0.05) rotate(-540deg); opacity: 0; }
      100% { transform: scale(1) rotate(var(--stk-rot, 0deg)); opacity: 1; }
    }
    @keyframes r20-out-fly {
      to { transform: scale(0.55) rotate(calc(var(--stk-rot, 0deg) + 12deg)) translateY(-30px); opacity: 0; }
    }
    @keyframes r20-out-fall {
      to { transform: translateY(120vh) rotate(calc(var(--stk-rot, 0deg) + 24deg)); }
    }
    @keyframes r20-out-fade {
      to { transform: scale(0.92) rotate(var(--stk-rot, 0deg)); opacity: 0; }
    }
    @keyframes r20-burst {
      from { transform: scale(0.3); opacity: 0.9; }
      to   { transform: scale(1.5); opacity: 0; }
    }
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ── BLOCK SELECTION OF CONTROLLABLE TOKENS ─────────────────────────────────
  function blockSelectOnControllableTokens() {
    const scene = window.MeshScene;
    if (!scene) {
      setTimeout(blockSelectOnControllableTokens, 500);
      return;
    }

    const canvas = document.getElementById('babylonCanvas');
    if (!canvas) {
      setTimeout(blockSelectOnControllableTokens, 500);
      return;
    }

    canvas.addEventListener('pointerdown', function (e) {
      if (e.button === 1) return;

      const pickResult = scene.pick(e.offsetX, e.offsetY);
      if (!pickResult?.hit) return;

      const mesh = pickResult.pickedMesh;
      if (!mesh) return;

      if (!mesh.name.startsWith('image-instance--')) return;

      // The value is undefined but the key exists — use has() not get()
      if (!mesh.metadata?.pickableIds?.has('selectable')) return;

      e.stopImmediatePropagation();
      e.preventDefault();

    }, true);

    console.log('[Roll20 Custom UI] Token-selection block active.');
  }

  blockSelectOnControllableTokens();

  // ── CHAT MESSAGE OVERLAY ────────────────────────────────────────────────

  function initChatOverlay() {
    const chatContent = document.querySelector('#textchat .content');
    if (!chatContent) {
      setTimeout(initChatOverlay, 500);
      return;
    }

    let fadeTimer = null;
    let truncateTimer = null;
    let messageCount = 0;
    let pause = false;

    function getFontSize(count) {
      if (count === 1) return '2';
      if (count === 2) return '1.6';
      if (count === 3) return '1.3';
      return '1.1';
    }

    // Overlay container
    const overlay = document.createElement('div');
    overlay.id = 'r20-chat-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      gap: 12px;
      pointer-events: none;
      width: 90vw;
      max-height: 90vh;
      overflow-y: auto;
      overflow-x: hidden;
      transition: opacity 2.5s ease;
      opacity: 0;
      scrollbar-width: none;
        --message-font-size: ${getFontSize(messageCount)};
    `;
    document.body.appendChild(overlay);

    // ── SAFE AREA DIV ───────────────────────────────────────────────────────
    const safeArea = document.createElement('div');
    safeArea.id = 'r20-safe-area';
    safeArea.style.cssText = `
      position: fixed;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.55);
      pointer-events: none;
      z-index: 9998;
      transition: width 0.5s ease, height 0.5s ease, opacity 0.5s ease, margin-left 0.5s ease;
      opacity: 0;
    `;
    document.body.appendChild(safeArea);

    function updateSafeArea(sceneName) {
      switch (sceneName) {
        case SCENE_BASE:
          safeArea.style.width = '100%';
          safeArea.style.height = '33.5%';
          safeArea.style.opacity = '1';
          safeArea.style.marginLeft = '0';
          break;
        case SCENE_MED:
          safeArea.style.width = '68%';
          safeArea.style.height = '23%';
          safeArea.style.opacity = '1';
          safeArea.style.marginLeft = '16%';
          break;
        case SCENE_TALL:
        default:
          safeArea.style.width = '68%';
          safeArea.style.height = '0';
          safeArea.style.opacity = '1';
          safeArea.style.marginLeft = '16%';
          break;
      }
    }

    function refreshFontSizes() {
      const messages = overlay.querySelectorAll('.overlay-message');
      const count = messages.length;
      overlay.style.setProperty('--message-font-size', getFontSize(count));
    }

    function showMessage(msgEl) {
      messageCount++;

      const clone = msgEl.cloneNode(true);
      clone.classList.add('overlay-message');
      clone.style.cssText = `
        background: rgba(0, 0, 0, 0.82);
        color: #fff;
        padding: 20px 32px;
        border-radius: 12px;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
        word-break: break-word;
        box-shadow: 0 6px 32px rgba(0,0,0,0.6);
        flex-shrink: 0;
        font-size: calc(0.8rem * var(--message-font-size));
      `;
      overlay.appendChild(clone);

      // Scroll down to show the most recent message
      overlay.scrollTop = overlay.scrollHeight;

      // Update the size of all messages
      refreshFontSizes();
      checkOverlayHeight();

      // Make it visible
      overlay.style.opacity = '1';

      // (Re)arm the disappearance countdown
      armOverlayTimers();
    }

    // (Re)starts the message disappearance countdown. It does NOT start if we're
    // paused or if there's a sticker on screen: in that case it will restart from scratch (full 8s)
    // when the last sticker leaves (see dismissSticker).
    function armOverlayTimers() {
      if (fadeTimer) { clearTimeout(fadeTimer); fadeTimer = null; }
      if (truncateTimer) { clearTimeout(truncateTimer); truncateTimer = null; }
      if (pause || liveStickers.length || !messageCount) return;
      fadeTimer = setTimeout(() => {
        overlay.style.opacity = '0';
        truncateTimer = setTimeout(() => {
          overlay.innerHTML = '';
          messageCount = 0;
          obsSetScene(SCENE_BASE);
        }, 2600);
      }, 8000);
    }

    // ── STICKERS / CHAT IMAGES ────────────────────────────────────────────────
    // Images sent in chat appear centered with a "sticker" effect:
    // impact flash, bouncy rotated entry, outline glow (PNG),
    // floating. Photos (JPEG) instead get a polaroid style.
    const STK = {
      durationMs: 12000,  // time on screen before exiting
      maxConcurrent: 3,   // max visible stickers (the oldest one is removed)
      widthFrac: 0.86,    // max width: fraction of the available horizontal slot
      heightFrac: 0.9,    // max height: fraction of screen height
      maxUpscale: 2,      // never upscale beyond N times the native resolution
      animIn: 'random',   // entry: 'random' | 'slam' | 'drop' | 'spin'
      animOut: 'random',  // exit: 'random' | 'fly' | 'fall' | 'fade'
    };
    window.__stickerCfg = STK;
    const liveStickers = [];

    // Formats with transparency → sticker style; everything else → photo style
    function isStickerish(src) {
      const p = (src.split('?')[0] || '').toLowerCase();
      return /\.(png|gif|webp|avif)$/.test(p);
    }

    // The message's "real" images: excludes sender avatar and roll templates
    function chatImagesOf(node) {
      return [...node.querySelectorAll('img')].filter(img => {
        if (!img.getAttribute('src') || img.src.startsWith('data:')) return false;
        if (img.closest('.avatar')) return false;
        if (img.closest('[class*="sheet-"]')) return false;
        return true;
      });
    }

    const ANIM_IN = ['slam', 'drop', 'spin'];
    const ANIM_OUT = ['fly', 'fall', 'fade'];
    function pickAnim(pool, want) {
      return pool.includes(want) ? want : pool[Math.floor(Math.random() * pool.length)];
    }

    // With a sticker on screen we switch to the "Map" scene (SCENE_TALL, no safe area):
    // all the space is for the image. When the last one leaves, we go back to the previous scene.
    let stickerPrevScene = null;
    function enterStickerScene() {
      try {
        if (currentObsScene !== SCENE_TALL) {
          if (stickerPrevScene == null) stickerPrevScene = currentObsScene;
          obsSetScene(SCENE_TALL, true);
        }
      } catch (e) {} // OBS not configured: stickers still work
    }
    function exitStickerScene() {
      try {
        if (stickerPrevScene != null && currentObsScene === SCENE_TALL) obsSetScene(stickerPrevScene, true);
      } catch (e) {}
      stickerPrevScene = null;
    }

    // Distributes stickers into equally spaced horizontal slots, without overlaps.
    // CSS transitions on left/top and max-width/height make the movement smooth.
    function relayoutStickers() {
      const n = liveStickers.length;
      if (!n) return;
      const vw = window.innerWidth, vh = window.innerHeight;
      liveStickers.forEach((s, i) => {
        const slotW = (vw / n) * STK.widthFrac;
        const maxH = vh * STK.heightFrac;
        s.img.style.maxWidth = Math.min(slotW, (s.nw || slotW) * STK.maxUpscale) + 'px';
        s.img.style.maxHeight = Math.min(maxH, (s.nh || maxH) * STK.maxUpscale) + 'px';
        s.holder.style.left = (vw * (i + 1) / (n + 1)) + 'px';
        // with multiple stickers, slight alternating vertical offset ("collage" effect)
        s.holder.style.top = (vh * (n > 1 ? 0.5 + (i % 2 ? 0.04 : -0.04) : 0.5)) + 'px';
      });
    }

    function dismissSticker(entry, fast) {
      if (entry.dead) return;
      entry.dead = true;
      clearTimeout(entry.tOut);
      const i = liveStickers.indexOf(entry);
      if (i >= 0) liveStickers.splice(i, 1);
      entry.holder.classList.add('out-' + pickAnim(ANIM_OUT, STK.animOut));
      setTimeout(() => entry.holder.remove(), fast ? 250 : 700);
      relayoutStickers();                          // the others redistribute
      if (!liveStickers.length) {
        exitStickerScene();
        armOverlayTimers();   // the text-message countdown restarts only now
      }
    }

    function showSticker(src) {
      const sticker = isStickerish(src);
      const holder = document.createElement('div');
      holder.className = 'r20-sticker ' + (sticker ? 'png' : 'photo') + ' in-' + pickAnim(ANIM_IN, STK.animIn);
      // random tilt, stronger for stickers
      const rot = (Math.random() * 2 - 1) * (sticker ? 7 : 3);
      holder.style.setProperty('--stk-rot', rot.toFixed(1) + 'deg');
      const pop = document.createElement('div');
      pop.className = 'r20-sticker-pop';
      if (sticker) {
        const burst = document.createElement('div');
        burst.className = 'r20-sticker-burst';
        pop.appendChild(burst);
      }
      const img = document.createElement('img');
      const entry = { holder, img, tOut: null, dead: false, nw: 0, nh: 0 };

      img.onload = () => {
        if (entry.dead) return;
        while (liveStickers.length >= STK.maxConcurrent) dismissSticker(liveStickers[0], true);
        enterStickerScene();
        entry.nw = img.naturalWidth;
        entry.nh = img.naturalHeight;
        const vw = window.innerWidth, vh = window.innerHeight;
        img.style.maxWidth = Math.min(vw * STK.widthFrac, (entry.nw || vw) * STK.maxUpscale) + 'px';
        img.style.maxHeight = Math.min(vh * STK.heightFrac, (entry.nh || vh) * STK.maxUpscale) + 'px';
        // enters at the center of the screen; then the redistribution arranges everyone into slots
        holder.style.left = (vw / 2) + 'px';
        holder.style.top = (vh / 2) + 'px';
        document.body.appendChild(holder);
        liveStickers.push(entry);
        armOverlayTimers();                        // freezes the text-message countdown
        setTimeout(relayoutStickers, 700);         // after the entry animation
        if (!pause) entry.tOut = setTimeout(() => dismissSticker(entry), STK.durationMs);
      };
      img.onerror = () => { entry.dead = true; holder.remove(); };

      pop.appendChild(img);
      holder.appendChild(pop);
      img.src = src;
    }

    // ── KEYBOARD SHORTCUTS ───────────────────────────────────────────────────
    document.addEventListener('keydown', function (e) {
      // Cmd + Ctrl + P → Pause (cancels the timers, the overlay stays visible)
      if (e.metaKey && e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        if (fadeTimer) { clearTimeout(fadeTimer); fadeTimer = null; }
        if (truncateTimer) { clearTimeout(truncateTimer); truncateTimer = null; }
        liveStickers.forEach(s => clearTimeout(s.tOut));   // also freezes the stickers
        overlay.style.opacity = '1';
        pause = true;
        console.log('[Roll20 Custom UI] Overlay paused.');
      }

      // Cmd + Ctrl + O → Clear (hides and empties the overlay)
      if (e.metaKey && e.ctrlKey && e.key === 'o') {
        e.preventDefault();
        [...liveStickers].forEach(s => dismissSticker(s, true));  // stickers first (re-arms the timers)…
        if (fadeTimer) { clearTimeout(fadeTimer); fadeTimer = null; }  // …then reset the timers
        if (truncateTimer) { clearTimeout(truncateTimer); truncateTimer = null; }
        overlay.style.opacity = '0';
        setTimeout(() => {
          overlay.innerHTML = '';
          messageCount = 0;
          obsSetScene(SCENE_BASE);
        }, 2600);
        pause = false;
        console.log('[Roll20 Custom UI] Overlay cleared.');
      }

      // Cmd + Ctrl + 1 → Main scene
      if (e.metaKey && e.ctrlKey && e.key === '1') {
        e.preventDefault();
        obsSetScene(SCENE_MED, true);
      }

      // Cmd + Ctrl + 2 → Meet full width scene
      if (e.metaKey && e.ctrlKey && e.key === '2') {
        e.preventDefault();
        obsSetScene(SCENE_BASE, true);
      }

      // Cmd + Ctrl + 4 → Map scene
      if (e.metaKey && e.ctrlKey && e.key === '4') {
        e.preventDefault();
        obsSetScene(SCENE_TALL, true);
      }
    });

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === 1 && node.classList.contains('message')) {
            if (node.classList.contains('system')) continue;
            const imgs = chatImagesOf(node);
            if (!imgs.length) { showMessage(node); continue; }

            // Images become stickers…
            imgs.slice(0, STK.maxConcurrent).forEach(im => showSticker(im.src));

            // …and in the text box show only any remaining text.
            const textClone = node.cloneNode(true);
            chatImagesOf(textClone).forEach(i => (i.closest('a') || i).remove());
            const probe = textClone.cloneNode(true);
            probe.querySelectorAll('.avatar, .tstamp, .by').forEach(el => el.remove());
            if (probe.textContent.trim()) showMessage(textClone);
          }
        }
      }
    });

    observer.observe(chatContent, { childList: true });
    console.log('[Roll20 Custom UI] Chat overlay active.');

    // ── OBS WEBSOCKET ─────────────────────────────────────────────────────────
    // Check whether the password is saved in localStorage, otherwise ask the user for it
    const OBS_PASSWORD_KEY = 'r20custom.obs.websocket.password';
    let savedObsPassword = localStorage.getItem(OBS_PASSWORD_KEY);

    if (!savedObsPassword) {
      savedObsPassword = window.prompt('Enter the OBS WebSocket password:')?.trim() || '';
      if (savedObsPassword) {
        localStorage.setItem(OBS_PASSWORD_KEY, savedObsPassword);
      }
    }

    if (!savedObsPassword) {
      console.warn('[Roll20 Custom UI] OBS password not provided: connection disabled.');
      return;
    }

    const OBS_WS = 'ws://localhost:4455';
    const OBS_PASSWORD = savedObsPassword;
    const SCENE_BASE = 'Meet full width';
    const SCENE_MED  = 'Main';          // overlay > 66% of screen height
    const SCENE_TALL = 'Map';           // overlay > 75% of screen height

    const obs = new OBSWebSocket();
    let obsConnected = false;
    let currentObsScene = SCENE_BASE;

    let obsReconnecting = false;

    async function obsConnect() {
      if (obsReconnecting) return; // ← avoid overlapping calls
      obsReconnecting = true;
      try {
        await obs.connect(OBS_WS, OBS_PASSWORD);
        obsConnected = true;
        obsReconnecting = false;
        const { currentProgramSceneName } = await obs.call('GetCurrentProgramScene');
        currentObsScene = currentProgramSceneName;
        updateSafeArea(currentObsScene);
        console.log(`[Roll20 Custom UI] OBS connected. Active scene: ${currentObsScene}`);
      } catch (err) {
        obsConnected = false;
        obsReconnecting = false;
        console.warn('[Roll20 Custom UI] OBS unreachable, retrying in 10s.');
        setTimeout(obsConnect, 10000);
      }
    }

    // Keep currentObsScene in sync if the scene is changed manually in OBS
    obs.on('CurrentProgramSceneChanged', ({ sceneName }) => {
      currentObsScene = sceneName;
      updateSafeArea(sceneName);
      console.log(`[Roll20 Custom UI] Scene changed externally → ${sceneName}`);
    });

    obs.on('ConnectionClosed', () => {
      obsConnected = false;
      if (!obsReconnecting) { // ← avoid scheduling if already in progress
        console.warn('[Roll20 Custom UI] OBS disconnected, retrying in 10s.');
        setTimeout(obsConnect, 10000);
      }
    });

    async function obsSetScene(sceneName, force) {
      // with a sticker on screen the scene stays "Map": ignore automatic changes (not forced ones)
      if (!force && liveStickers.length && sceneName !== SCENE_TALL) return;
      if (!obsConnected || sceneName === currentObsScene) return;
      try {
        await obs.call('SetCurrentProgramScene', { sceneName });
        currentObsScene = sceneName;
        updateSafeArea(sceneName);
        console.log(`[Roll20 Custom UI] OBS → ${sceneName}`);
      } catch (err) {
        console.warn('[Roll20 Custom UI] Error changing OBS scene:', err);
      }
    }

    function checkOverlayHeight() {
      if (!obsConnected) return;
      const overlayHeight = overlay.scrollHeight;
      const screenHeight = window.innerHeight;
      const ratio = overlayHeight / screenHeight;

      if (ratio >= (window.tall_limit || 0.55)) {
        obsSetScene(SCENE_TALL);
      } else if (ratio >= (window.med_limit || 0.35)) {
        obsSetScene(SCENE_MED);
      } else if (parseFloat(overlay.style.opacity) > 0) {
        //obsSetScene(SCENE_MED); // overlay visible but small
      } else {
        obsSetScene(SCENE_BASE);
      }
    }

    obsConnect();

  }

  initChatOverlay();

    // ── CAMERA FOLLOW ──────────────────────────────────────────────────────────
  // Follows the token that moves, if controllable by the player (selectable mesh
  // + rendered → excludes GM-layer/hidden ones). Moves the view by SCROLLING the
  // native Roll20 wrapper (#vtt-scroll-wrapper), so map, tokens, fog, darkness and
  // HP bars stay aligned. Do NOT use cam-transform: it only moves map+tokens.
  // Toggle on/off: Cmd + Ctrl + B.   Runtime tuning: window.__cameraFollowCfg
  function initCameraFollow() {
    const scene = window.MeshScene;
    if (!scene) { setTimeout(initCameraFollow, 500); return; }
    const camTransform = (scene.transformNodes || []).find(n => n.name === 'cam-transform');
    const scroller = document.getElementById('vtt-scroll-wrapper');
    const canvas = scene.getEngine && scene.getEngine().getRenderingCanvas();
    if (!camTransform || !scroller || !canvas) { setTimeout(initCameraFollow, 500); return; }

    const CFG = {
      enabled: true,      // enable/disable follow (toggle: Cmd+Ctrl+B)
      lerp: 0.15,         // smoothness: fraction of the error corrected each frame
      deadzonePx: 0,      // px from center within which NOT to follow (0 = always center; e.g. 250 = "dead" zone)
      minMovePx: 2,       // px: ignore errors below this threshold (anti-jitter)
      moveEpsilon: 3,     // world-units: threshold to consider a token "moving"
      releaseMs: 700,     // ms of stillness after which it RELEASES the token → manual pan becomes free again
      manualPanPx: 6,     // px: if you pan by hand more than this, the camera yields immediately (Infinity to disable)
      honorSafeArea: true,// center in the area ABOVE the safe area (OBS band at the bottom), not screen-center
      verticalOffsetPx: 0,// extra vertical tweak in px (negative = higher up)
      debug: false,       // logs the follow error to the console
    };
    window.__cameraFollowCfg = CFG;

    let targetMesh = null;        // the mesh currently being followed
    let lastMoveT = 0;            // timestamp (ms) of the last detected token movement
    let expScrollL = scroller.scrollLeft, expScrollT = scroller.scrollTop; // scroll "expected" as left by us
    const lastPos = new Map();    // mesh.uniqueId -> {x, y} world position from the previous frame

    function selectableTokens() {
      return scene.meshes.filter(m => {
        if (!m.name || !m.name.startsWith('image-instance--')) return false;
        if (m.isEnabled && !m.isEnabled()) return false;       // gm-layer/hidden ones not rendered
        const p = m.metadata && m.metadata.pickableIds;
        try { return !!(p && p.has && p.has('selectable')); } catch (e) { return false; }
      });
    }

    // Projects a world point into the canvas's screen coordinates (px) (current camera = current scroll).
    function worldToScreen(wx, wy) {
      const cam = scene.activeCamera;
      const u = (wx - (camTransform.position.x + cam.orthoLeft)) / (cam.orthoRight - cam.orthoLeft);
      const v = (wy - (camTransform.position.y + cam.orthoBottom)) / (cam.orthoTop - cam.orthoBottom);
      return { x: u * canvas.clientWidth, y: (1 - v) * canvas.clientHeight };
    }

    // The "useful" center of the frame: half width, but vertically half of the area
    // ABOVE the safe area (the OBS band at the bottom), so the token doesn't end up covered/too low.
    function viewportCenter() {
      const cx = canvas.clientWidth / 2;
      let safeH = 0;
      if (CFG.honorSafeArea) {
        const safeEl = document.getElementById('r20-safe-area');
        if (safeEl) {
          const op = parseFloat(getComputedStyle(safeEl).opacity) || 0;
          if (op > 0.01) safeH = safeEl.offsetHeight || 0;
        }
      }
      const cy = (canvas.clientHeight - safeH) / 2 + (CFG.verticalOffsetPx || 0);
      return { x: cx, y: cy };
    }

    // Follow via SCROLL of the native wrapper: map, tokens, fog, darkness and HP bars move together.
    scene.onBeforeRenderObservable.add(() => {
      // 1) which token moved the most in this frame?
      let mover = null, best = CFG.moveEpsilon;
      for (const m of selectableTokens()) {
        const a = m.getAbsolutePosition();
        const prev = lastPos.get(m.uniqueId);
        lastPos.set(m.uniqueId, { x: a.x, y: a.y });
        if (!prev) continue;
        const d = Math.hypot(a.x - prev.x, a.y - prev.y);
        if (d > best) { best = d; mover = m; }
      }
      // 2) latch on when a token moves; record the moment and reset the scroll baseline.
      if (CFG.enabled && mover) {
        targetMesh = mover;
        lastMoveT = performance.now();
        expScrollL = scroller.scrollLeft; expScrollT = scroller.scrollTop;
      }

      // 3) if not following, manual pan is completely free.
      if (!CFG.enabled || !targetMesh) {
        expScrollL = scroller.scrollLeft; expScrollT = scroller.scrollTop;
        return;
      }

      // 4) MANUAL OVERRIDE: if the scroll differs from what I had left,
      //    you're panning by hand → release the token immediately.
      if (Math.abs(scroller.scrollLeft - expScrollL) > CFG.manualPanPx ||
          Math.abs(scroller.scrollTop  - expScrollT) > CFG.manualPanPx) {
        targetMesh = null;
        expScrollL = scroller.scrollLeft; expScrollT = scroller.scrollTop;
        return;
      }

      // 5) TIMED RELEASE: token still for releaseMs → release it (so it NEVER stays
      //    stuck, not even at the map edge or due to scroll rounding).
      if (performance.now() - lastMoveT > CFG.releaseMs) {
        targetMesh = null;
        return;
      }

      // 6) follow: scroll toward the "useful" center (above the safe area).
      const a = targetMesh.getAbsolutePosition();
      const s = worldToScreen(a.x, a.y);
      const c = viewportCenter();
      const ex = s.x - c.x;
      const ey = s.y - c.y;
      if (Math.hypot(ex, ey) > Math.max(CFG.minMovePx, CFG.deadzonePx)) {
        scroller.scrollLeft += ex * CFG.lerp;
        scroller.scrollTop  += ey * CFG.lerp;
        if (CFG.debug) console.log('[Roll20 Custom UI] follow err', Math.round(ex), Math.round(ey));
      }
      // remember the scroll I leave behind, to distinguish manual pan next frame.
      expScrollL = scroller.scrollLeft; expScrollT = scroller.scrollTop;
    });

    document.addEventListener('keydown', (e) => {
      if (e.metaKey && e.ctrlKey && (e.key === 'b' || e.key === 'B')) {
        e.preventDefault();
        CFG.enabled = !CFG.enabled;
        if (!CFG.enabled) targetMesh = null;
        console.log('[Roll20 Custom UI] Camera-follow ' + (CFG.enabled ? 'ACTIVE' : 'disabled'));
      }
    });

    console.log('[Roll20 Custom UI] Camera-follow (scroll-based) initialized (toggle: Cmd+Ctrl+B).');
  }

  initCameraFollow();

})();
