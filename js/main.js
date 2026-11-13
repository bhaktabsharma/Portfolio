/* BHAKTASEC portfolio — vanilla JS, no dependencies.
   Content for dialogs lives in js/content.js (window.SITE). */
(() => {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const html = document.documentElement;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const SITE = window.SITE || { tools: {}, projects: {}, repos: {}, labels: {} };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const EMAIL = 'bhaktabsharma@gmail.com';

  /* ---------------------------------------------------------------- loader */
  function runLoader() {
    const loader = $('#loader');
    const num = $('#loaderNum');
    const ready = () => html.classList.add('is-ready');
    // the intro plays once per browser session; repeat visits go straight to the page
    let seen = false;
    try { seen = sessionStorage.getItem('bs-seen') === '1'; sessionStorage.setItem('bs-seen', '1'); } catch { /* storage blocked */ }
    if (!loader || reduce || seen) { if (loader) loader.remove(); ready(); return; }
    const start = performance.now();
    const dur = 600;
    let loaded = document.readyState === 'complete';
    window.addEventListener('load', () => { loaded = true; }, { once: true });
    const finish = () => {
      num.textContent = '100';
      loader.classList.add('is-done');
      setTimeout(ready, 260);
      setTimeout(() => loader.remove(), 1000);
    };
    (function tick() {
      const p = Math.min((performance.now() - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      num.textContent = String(Math.round(eased * 100)).padStart(3, '0');
      if (p < 1 || (!loaded && performance.now() - start < 1600)) {
        if (p >= 1) num.textContent = '099';
        requestAnimationFrame(tick);
      } else finish();
    })();
  }

  /* ----------------------------------------------------- split + reveal */
  function splitHeadings() {
    $$('[data-split]').forEach((el) => {
      const words = el.textContent.trim().split(/\s+/);
      el.setAttribute('aria-label', words.join(' '));
      el.textContent = '';
      words.forEach((w, i) => {
        const outer = document.createElement('span');
        outer.className = 'w';
        outer.setAttribute('aria-hidden', 'true');
        const inner = document.createElement('span');
        inner.className = 'wi';
        inner.style.setProperty('--i', i);
        inner.textContent = w;
        outer.appendChild(inner);
        el.appendChild(outer);
        if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
      });
    });
  }

  function initReveal() {
    const targets = $$('[data-reveal], [data-split]');
    if (!('IntersectionObserver' in window) || reduce) {
      html.classList.add('reveal-all');
      targets.forEach((t) => t.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      let n = 0;
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.hasAttribute('data-reveal')) {
          const d = Math.min(n * 0.07, 0.4);
          el.style.setProperty('--d', d + 's');
          // after the entrance, drop the attribute so hover transitions behave normally
          setTimeout(() => el.removeAttribute('data-reveal'), 1300 + d * 1000);
        }
        el.classList.add('in');
        io.unobserve(el);
        n++;
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    targets.forEach((t) => io.observe(t));
  }

  function initCounters() {
    const els = $$('[data-count]');
    if (!els.length) return;
    const run = (el) => {
      const target = parseFloat(el.dataset.count);
      const pre = el.dataset.prefix || '';
      const suf = el.dataset.suffix || '';
      if (reduce || target < 10) { el.textContent = pre + target + suf; return; }
      const t0 = performance.now();
      const dur = 1300;
      (function step() {
        const p = Math.min((performance.now() - t0) / dur, 1);
        const v = Math.round((1 - Math.pow(1 - p, 4)) * target);
        el.textContent = pre + v + suf;
        if (p < 1) requestAnimationFrame(step);
      })();
    };
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
    }), { threshold: 0.6 });
    els.forEach((el) => io.observe(el));
  }

  /* -------------------------------------------------------- clock (IST) */
  function initClock() {
    const els = $$('[data-clock]');
    if (!els.length) return;
    let fmt;
    try { fmt = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' }); } catch { return; }
    const tick = () => { const t = fmt.format(new Date()).toUpperCase() + ' IST'; els.forEach((el) => { el.textContent = t; }); };
    tick();
    setInterval(tick, 20000);
  }

  /* ------------------------------------------------------------ nav */
  const NAV_MAP = { hero: 'hero', about: 'about', expertise: 'expertise', tools: 'expertise', projects: 'projects', writeups: 'writeups', tryhackme: 'tryhackme', github: 'github', certifications: 'certifications', contact: 'contact' };
  const sectionEls = Object.keys(NAV_MAP).map((id) => document.getElementById(id)).filter(Boolean);
  let currentNav = '';

  function moveIndicator() {
    const ind = $('#navInd');
    const link = $('#navLinks a.is-active');
    if (!ind) return;
    if (!link || !link.offsetWidth) { ind.classList.remove('is-on'); return; }
    ind.style.setProperty('--x', link.offsetLeft + 'px');
    ind.style.setProperty('--w', link.offsetWidth + 'px');
    ind.classList.add('is-on');
  }

  function setActiveNav(id) {
    if (id === currentNav) return;
    currentNav = id;
    $$('[data-nav]').forEach((a) => {
      const on = a.dataset.nav === id;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
    moveIndicator();
  }

  function initMenu() {
    const burger = $('#burger');
    const menu = $('#menu');
    if (!burger || !menu) return;
    menu.inert = true;
    const set = (open) => {
      menu.classList.toggle('is-open', open);
      menu.inert = !open;
      menu.setAttribute('aria-hidden', String(!open));
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      html.classList.toggle('is-locked', open);
      ['main', '.foot', '#totop'].forEach((s) => { const el = $(s); if (el) el.inert = open; });
      if (open) setTimeout(() => { const f = $('.menu__list a', menu); if (f && menu.classList.contains('is-open')) f.focus({ preventScroll: true }); }, 450);
    };
    burger.addEventListener('click', () => set(!menu.classList.contains('is-open')));
    menu.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (href.charAt(0) === '#' && href.length > 1) {
        // close first, then scroll, so the page is unlocked when the jump happens
        e.preventDefault();
        set(false);
        const target = document.getElementById(href.slice(1));
        setTimeout(() => {
          if (target) target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
          if (window.history && history.replaceState) history.replaceState(null, '', href);
        }, 80);
      } else set(false);
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('is-open')) { set(false); burger.focus(); } });
    window.matchMedia('(min-width: 1181px)').addEventListener('change', (m) => { if (m.matches) set(false); });
  }

  /* ------------------------------------------------ hero terminal card */
  function initTerminal() {
    const body = $('#termBody');
    if (!body) return;
    const PROMPT = 'bhakta@security:~$';
    const kv = (k, v, w) => ({ k, v, w });
    const OUT = {
      whoami: { typed: true, lines: [
        '<span class="hi">bhakta_sharma</span>',
        kv('role', 'aspiring penetration tester · cybersecurity researcher', 6),
        kv('focus', 'web app security · recon · bug bounty · forensics', 6),
        kv('study', 'B.Tech CSE at AGEMC (pursuing)', 6),
        kv('base', 'Siliguri, West Bengal, India', 6),
        kv('status', 'working toward CEH v12 and CHFI · open to opportunities', 6),
      ] },
      skills: { lines: [
        kv('web', 'Burp Suite · SQLMap · OWASP ZAP · Nikto · Gobuster', 9),
        kv('pentest', 'Nmap · Metasploit · Hydra · BloodHound · Hashcat', 9),
        kv('recon', 'Recon-ng · Maltego · subfinder · httpx · ffuf', 9),
        kv('forensics', 'Autopsy · Volatility · FTK Imager · Wireshark', 9),
        kv('malware', 'Ghidra · YARA', 9),
        kv('automate', 'Python · Bash', 9),
      ] },
      projects: { lines: [
        '<span class="hi">01</span> Bug Bounty Recon Engine <span class="k">· main project</span>',
        '<span class="hi">02</span> Automated Recon &amp; Enumeration Toolkit',
        '<span class="hi">03</span> SQL Injection Practice Lab <span class="k">· 53 labs</span>',
        '<span class="hi">04</span> Faultline, local web hacking lab <span class="k">· 36 labs</span>',
        '<span class="hi">05</span> ReconQL <span class="k">· 91 queries</span>',
        '<span class="hi">06</span> Crawlspace <span class="k">· 72 categories</span>',
        '<span class="hi">07</span> CaseFile <span class="k">· 979 topics</span>',
        '<span class="hi">08</span> XSS Bugs Lab <span class="k">· 72 labs</span>',
        '<span class="cmt"># scroll to Projects for the full breakdown</span>',
      ] },
      contact: { lines: [
        kv('email', '<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>', 9),
        kv('github', '<a href="https://github.com/bhaktabsharma" target="_blank" rel="noopener">github.com/bhaktabsharma</a>', 9),
        kv('tryhackme', '<a href="https://tryhackme.com/p/bhaktabsharma" target="_blank" rel="noopener">tryhackme.com/p/bhaktabsharma</a>', 9),
        kv('linkedin', '<a href="https://www.linkedin.com/in/bhaktabsharma/" target="_blank" rel="noopener">linkedin.com/in/bhaktabsharma</a>', 9),
      ] },
      help: { lines: [
        kv('whoami', 'who I am', 8), kv('skills', 'tools by area', 8), kv('projects', 'what I have built', 8),
        kv('contact', 'how to reach me', 8), kv('clear', 'clean the screen', 8),
      ] },
    };

    let queue = Promise.resolve();
    let touched = false;
    let scrollQueued = false;
    const scroll = () => { if (scrollQueued) return; scrollQueued = true; requestAnimationFrame(() => { scrollQueued = false; body.scrollTop = body.scrollHeight; }); };
    const strip = (h) => { const d = document.createElement('div'); d.innerHTML = h; return d.textContent; };

    const newPrompt = () => {
      const ln = document.createElement('span');
      ln.className = 'ln';
      ln.innerHTML = '<span class="pr">' + PROMPT + '</span> <span class="typed"></span><i class="caret"></i>';
      body.appendChild(ln);
      scroll();
      return ln;
    };

    async function typeInto(el, text, speed, jitter) {
      if (reduce) { el.textContent = text; return; }
      for (const ch of text) { el.textContent += ch; scroll(); await wait(speed + Math.random() * jitter); }
    }

    async function run(cmd) {
      let ln = body.querySelector('.ln:last-child');
      if (!ln || !ln.querySelector('.caret')) ln = newPrompt();
      await typeInto(ln.querySelector('.typed'), cmd, 75, 40);
      await wait(reduce ? 0 : 220);
      ln.querySelector('.caret').remove();
      if (cmd === 'clear') { body.textContent = ''; newPrompt(); return; }
      const def = OUT[cmd];
      for (const line of def.lines) {
        const o = document.createElement('span');
        o.className = 'ln';
        let markup = line;
        let plain = null;
        if (typeof line === 'object') {
          o.className = 'ln kv';
          o.style.setProperty('--w', line.w + 'ch');
          markup = '<span class="k">' + line.k.padEnd(line.w) + '</span> : ' + line.v;
          plain = line.k.padEnd(line.w) + ' : ' + strip(line.v);
        } else plain = strip(line);
        body.appendChild(o);
        if (def.typed && !reduce && !touched) {
          await typeInto(o, plain, 5, 7);
          o.innerHTML = markup;
        } else {
          o.innerHTML = markup;
          await wait(reduce ? 0 : 55);
        }
        scroll();
      }
      newPrompt();
    }

    $$('.term__cmds button').forEach((b) => b.addEventListener('click', () => {
      touched = true;
      body.setAttribute('aria-live', 'polite');
      queue = queue.then(() => run(b.dataset.cmd));
    }));

    // greeting: type `whoami` once the page entrance has finished
    const start = () => { queue = queue.then(() => wait(reduce ? 0 : 700)).then(() => (touched ? null : run('whoami'))); };
    if (html.classList.contains('is-ready')) start();
    else new MutationObserver((_, obs) => { if (html.classList.contains('is-ready')) { obs.disconnect(); start(); } }).observe(html, { attributes: true, attributeFilter: ['class'] });
    newPrompt();

    // gentle pointer tilt on the card
    const card = $('#idcard');
    if (card && finePointer && !reduce) {
      let raf = 0;
      const host = card.parentElement;
      host.addEventListener('pointermove', (e) => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width;
          const y = (e.clientY - r.top) / r.height;
          card.style.setProperty('--ry', ((x - 0.5) * 8).toFixed(2) + 'deg');
          card.style.setProperty('--rx', ((0.5 - y) * 7).toFixed(2) + 'deg');
          card.style.setProperty('--gx', (x * 100).toFixed(0) + '%');
          card.style.setProperty('--gy', (y * 100).toFixed(0) + '%');
        });
      });
      host.addEventListener('pointerleave', () => { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); });
    }
  }

  /* ----------------------------------------------------------- doors */
  function initDoors() {
    const doors = $$('.door');
    if (!doors.length) return;
    const strip = window.matchMedia('(max-width: 899px)');
    const hoverMode = window.matchMedia('(hover: hover) and (min-width: 900px)');
    let touched = false;
    let hoverTimer = 0;

    function setOpen(door, open, opts = {}) {
      const leaf = $('.door__leaf', door);
      const room = $('.door__room', door);
      door.classList.toggle('is-open', open);
      leaf.setAttribute('aria-expanded', String(open));
      room.inert = !open;
      if (open) {
        doors.forEach((d) => { if (d !== door && d.classList.contains('is-open')) setOpen(d, false); });
        if (strip.matches && !opts.auto) {
          // centre the door inside the swipeable track only; never move the page itself
          const track = door.parentElement;
          const to = () => track.scrollTo({ left: Math.max(0, door.offsetLeft - (track.clientWidth - door.offsetWidth) / 2), behavior: reduce ? 'auto' : 'smooth' });
          setTimeout(to, 120); setTimeout(to, 980);
        }
        if (opts.focus) setTimeout(() => { const c = $('.door__close', door); if (c) c.focus({ preventScroll: true }); }, reduce ? 0 : 600);
      } else if (opts.focus) leaf.focus({ preventScroll: true });
    }

    doors.forEach((door) => {
      const leaf = $('.door__leaf', door);
      $('.door__room', door).inert = true;
      leaf.addEventListener('click', () => { touched = true; setOpen(door, true, { focus: true }); });
      $('.door__close', door).addEventListener('click', () => { touched = true; setOpen(door, false, { focus: true }); });
      door.addEventListener('keydown', (e) => { if (e.key === 'Escape' && door.classList.contains('is-open')) { e.stopPropagation(); setOpen(door, false, { focus: true }); } });
      door.addEventListener('pointerenter', (e) => {
        if (!hoverMode.matches || e.pointerType !== 'mouse' || door.classList.contains('is-open')) return;
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(() => { touched = true; setOpen(door, true); }, 140);
      });
      door.addEventListener('pointerleave', () => clearTimeout(hoverTimer));
    });

    // first visit: open the first door once the wall comes into view
    const wall = $('#wall');
    if (wall && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          setTimeout(() => {
            const r = wall.getBoundingClientRect();
            const stillHere = r.top < window.innerHeight * 0.7 && r.bottom > window.innerHeight * 0.3;
            if (stillHere && !touched && !doors.some((d) => d.classList.contains('is-open'))) setOpen(doors[0], true, { auto: true });
          }, reduce ? 0 : 900);
        }
      }, { threshold: 0.45 });
      io.observe(wall);
    }
  }

  /* ----------------------------------------------------------- story */
  const story = (() => {
    const items = $$('.story__item');
    if (!items.length) return { set() {} };
    const dateEl = $('#storyDate');
    const idxEl = $('#storyIdx');
    const barEl = $('#storyBar');
    const prev = $('#storyPrev');
    const next = $('#storyNext');
    $('#storyTotal').textContent = String(items.length).padStart(2, '0');
    let active = -1;

    function setActive(i) {
      if (i === active) return;
      active = i;
      items.forEach((it, n) => it.classList.toggle('is-active', n === i));
      idxEl.textContent = String(i + 1).padStart(2, '0');
      barEl.style.setProperty('--p', ((i + 1) / items.length).toFixed(3));
      prev.disabled = i === 0;
      next.disabled = i === items.length - 1;
      const text = items[i].dataset.when;
      dateEl.textContent = '';
      Array.from(text).forEach((ch, n) => {
        const m = document.createElement('span');
        m.className = 'dm';
        const c = document.createElement('i');
        c.textContent = ch;
        c.style.setProperty('--i', n);
        if (reduce) c.style.animation = 'none';
        m.appendChild(c);
        dateEl.appendChild(m);
      });
    }
    const go = (i) => { const t = items[Math.max(0, Math.min(items.length - 1, i))]; t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' }); };
    prev.addEventListener('click', () => go(active - 1));
    next.addEventListener('click', () => go(active + 1));
    items.forEach((it, i) => it.addEventListener('click', () => { if (i !== active) go(i); }));
    setActive(0);
    return { set: setActive };
  })();

  /* ------------------------------------------------- data-driven sections */
  const fmtDate = (iso) => {
    try { return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(iso + 'T00:00:00')); } catch { return iso; }
  };

  // statuses come from js/content.js, so one edit updates cards and dialogs
  function applyStatuses() {
    const labels = SITE.statuses || {};
    $$('[data-status-for]').forEach((el) => {
      const id = el.dataset.statusFor;
      const rec = SITE.projects[id] || SITE.repos[id];
      const key = rec && rec.state && labels[rec.state] ? rec.state : 'public';
      el.dataset.status = key;
      const b = $('b', el);
      if (b) b.textContent = labels[key] || key;
    });
  }

  function renderThm() {
    const t = SITE.thm;
    if (!t) return;
    const stats = $('#thmStats');
    if (stats && t.stats) {
      stats.innerHTML = t.stats.map((s) => '<div><dt>' + esc(s.label) + '</dt><dd data-count="' + esc(s.value) + '"' +
        (s.prefix ? ' data-prefix="' + esc(s.prefix) + '"' : '') + (s.suffix ? ' data-suffix="' + esc(s.suffix) + '"' : '') + '>' +
        esc((s.prefix || '') + s.value + (s.suffix || '')) + '</dd></div>').join('');
    }
    const paths = $('#thmPaths');
    if (paths && t.paths) {
      paths.innerHTML = t.paths.map((p) => '<li class="path path--' + (p.state === 'done' ? 'done' : 'wip') + '"><span class="path__mark" aria-hidden="true"></span><span class="path__name">' +
        esc(p.name) + '</span><span class="path__state">' + (p.state === 'done' ? 'Completed' : 'In progress') + '</span></li>').join('');
    }
    const v = $('#thmVerified');
    if (v && t.lastVerified) { v.setAttribute('datetime', t.lastVerified); v.textContent = fmtDate(t.lastVerified); }
    const user = $('.abcard__user');
    if (user && t.username) user.textContent = t.username;
    const link = $('.abcard__foot a.btn');
    if (link && t.profileUrl) link.href = t.profileUrl;
  }

  const CERT_STATE = { completed: ['done', 'Completed', 'stamp--done'], pursuing: ['wip', 'In progress', 'stamp--wip'], planned: ['wip', 'Planned', 'stamp--plan'] };

  function renderCerts() {
    const grid = $('#certGrid');
    const certs = SITE.certs || [];
    if (!grid || !certs.length) return;
    grid.innerHTML = certs.map((c) => {
      const st = CERT_STATE[c.status] || CERT_STATE.planned;
      const meta = [];
      if (c.dateLabel) meta.push(['Issued', c.dateLabel]);
      if (c.validUntil) meta.push(['Valid until', c.validUntil]);
      if (c.credentialId) meta.push([c.credentialLabel || 'Credential ID', c.credentialId]);
      if (c.status !== 'completed') meta.push(['Status', c.status === 'pursuing' ? 'Currently pursuing, not yet earned' : 'Planned']);
      const openAttr = c.file ? 'data-cert="' + esc(c.id) + '"' : 'data-writeup="' + esc(c.detail) + '"';
      const actions = (c.file ? '<button class="more" type="button" data-cert="' + esc(c.id) + '">Preview <span aria-hidden="true">→</span></button>' +
          '<a class="link" href="' + esc(c.file) + '" download="' + esc(c.download || '') + '">Download<span class="sr-only"> ' + esc(c.title) + ' certificate (PDF)</span></a>'
        : '<button class="more" type="button" data-writeup="' + esc(c.detail) + '">Details <span aria-hidden="true">→</span></button>') +
        (c.profile ? '<a class="link" href="' + esc((SITE.thm && SITE.thm.profileUrl) || '#') + '" target="_blank" rel="noopener">Profile ↗</a>' : '');
      return '<article class="cert cert--' + st[0] + '" data-reveal><div class="cert__frame">' +
        '<div class="cert__seal" aria-hidden="true"><span>' + esc(c.seal) + '</span></div>' +
        '<p class="cert__issuer">' + esc(c.issuer) + '</p><h3 class="cert__title">' + esc(c.title) + '</h3><p class="cert__sub">' + esc(c.subtitle || '') + '</p>' +
        (c.thumb ? '<div class="cert__thumb"><img src="' + esc(c.thumb) + '" alt="" width="643" height="454" loading="lazy" decoding="async"></div>' : '') +
        '<dl class="cert__meta">' + meta.map((r) => '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>').join('') + '</dl>' +
        '<div class="cert__foot"><span class="stamp ' + st[2] + '">' + st[1] + '</span><span class="cert__actions">' + actions + '</span></div></div>' +
        '<button class="cert__open" type="button" ' + openAttr + ' aria-label="' + (c.file ? 'Preview certificate: ' : 'Open details: ') + esc(c.title) + '"></button></article>';
    }).join('');
  }

  /* ---------------------------------------------------------- dialog */
  const modal = $('#modal');
  const mBody = $('#modalBody');
  const mCrumb = $('#modalCrumb');
  const mPanel = $('#modalPanel');
  let lastFocus = null;

  const statusLabel = (rec) => (SITE.statuses || {})[rec && rec.state] || 'Public repository';
  const feat = (list) => (list || []).map((f) => '<li>' + (f.text || f.desc || '') + '</li>').join('');
  const tags = (arr) => '<div class="m-tags">' + (arr || []).map((t) => '<span class="tag">' + esc(t) + '</span>').join('') + '</div>';
  const code = (c) => c ? '<div class="m-code"><div class="m-code__bar"><span>' + esc(c.label || '') + '</span></div><pre>' + (c.body || c.code || '') + '</pre></div>' : '';
  const ghBtn = (url, label) => '<a class="btn btn--gold" href="' + esc(url) + '" target="_blank" rel="noopener">' + label + ' <span aria-hidden="true">↗</span></a>';
  const demoBtn = (url) => url ? '<a class="btn btn--outline" href="' + esc(url) + '" target="_blank" rel="noopener">Live demo <span aria-hidden="true">↗</span></a>' : '';

  function render(kind, id) {
    if (kind === 'tool') {
      const t = SITE.tools[id]; if (!t) return null;
      const ev = (t.evidence || []).map((e) => '<button type="button" ' + (e.type === 'project' ? 'data-project' : 'data-writeup') + '="' + esc(e.id) + '">' + esc(e.label) + '</button>').join('');
      return { crumb: 'Toolkit / ' + t.name, html:
        '<span class="m-eyebrow">' + esc(t.group || '') + ' · ' + esc(t.cat) + '</span><h2 id="modalTitle">' + esc(t.name) + '</h2>' +
        '<p class="m-sub">' + t.summary + '</p>' + tags(t.tags) +
        '<span class="m-label">What it does</span><div class="m-feat">' + (t.features || []).map((f) => '<div><p>' + f.desc + '</p></div>').join('') + '</div>' +
        '<span class="m-label">Where it appears in my work</span>' +
        (ev ? '<div class="m-evidence">' + ev + '</div><p class="m-note">Writeups, rooms and projects on this site that mention ' + esc(t.name) + '.</p>'
            : '<p class="m-note">No writeup or project on this site mentions ' + esc(t.name) + ' yet. It sits in my study toolkit.</p>') +
        '<span class="m-label">Usage example</span>' + code(t.usage) +
        '<div class="m-actions"><a class="btn btn--outline" href="' + esc(t.docs) + '" target="_blank" rel="noopener">Official documentation <span aria-hidden="true">↗</span></a></div>' };
    }
    if (kind === 'project') {
      const p = SITE.projects[id]; if (!p) return null;
      return { crumb: 'Projects / ' + p.name, html:
        '<span class="m-eyebrow">' + esc(p.type) + ' · ' + esc(statusLabel(p)) + '</span><h2 id="modalTitle">' + esc(p.name) + '</h2>' +
        '<p class="m-sub">' + p.overview + '</p>' +
        '<span class="m-label">What it does</span><ul>' + feat(p.features) + '</ul>' +
        '<span class="m-label">Example output</span>' + code(p.code) +
        '<span class="m-label">Tech stack</span>' + tags(p.stack) +
        '<div class="m-actions">' + ghBtn(p.github, 'View on GitHub') + demoBtn(p.demo) + '</div>' };
    }
    if (kind === 'repo') {
      const r = SITE.repos[id] || Object.values(SITE.repos).find((x) => x.name === id || (x.aliases || []).includes(id));
      if (!r) return null;
      const live = (window.PORTFOLIO_GH && window.PORTFOLIO_GH[r.name]) || {};
      const stars = live.stars != null ? live.stars : r.stars;
      const forks = live.forks != null ? live.forks : r.forks;
      return { crumb: 'GitHub / ' + r.name, html:
        '<span class="m-eyebrow">' + esc(live.language || r.lang) + ' · ' + esc(statusLabel(r)) + '</span><h2 id="modalTitle">' + esc(r.name) + '</h2>' +
        '<p class="m-sub">' + (live.description ? esc(live.description) : r.desc) + '</p>' +
        '<div class="m-stats"><div><b>' + esc(stars) + '</b><span>Stars</span></div><div><b>' + esc(forks) + '</b><span>Forks</span></div><div><b>' + esc(live.language || r.lang) + '</b><span>Language</span></div></div>' +
        (live.stars == null ? '<p class="m-note">Star and fork counts are from the saved snapshot, taken ' + esc(fmtDate((SITE.github || {}).snapshotDate || '')) + '.</p>' : '') +
        (r.features ? '<span class="m-label">Highlights</span><ul>' + feat(r.features) + '</ul>' : '') +
        (r.code ? '<span class="m-label">Example</span>' + code(r.code) : '') +
        (r.tags ? '<span class="m-label">Topics</span>' + tags(r.tags) : '') +
        '<div class="m-actions">' + ghBtn(r.github, 'Open repository') + demoBtn(r.demo) + '</div>' };
    }
    if (kind === 'cert') {
      const c = (SITE.certs || []).find((x) => x.id === id); if (!c) return null;
      const rows = [['Issuer', c.issuer]];
      if (c.dateLabel) rows.push(['Issued', c.dateLabel]);
      if (c.validUntil) rows.push(['Valid until', c.validUntil]);
      if (c.credentialId) rows.push([c.credentialLabel || 'Credential ID', c.credentialId]);
      rows.push(['Status', (CERT_STATE[c.status] || CERT_STATE.planned)[1]]);
      return { crumb: 'Certificates / ' + c.title, html:
        '<span class="m-eyebrow">' + esc(c.issuer) + ' · ' + esc((CERT_STATE[c.status] || [])[1] || '') + '</span><h2 id="modalTitle">' + esc(c.title) + '</h2>' +
        '<div class="cprev"><figure class="cprev__img"><img src="' + esc(c.preview) + '" alt="Preview of the ' + esc(c.title) + ' certificate from ' + esc(c.issuer) + ', issued ' + esc(c.dateLabel || '') + '" width="1286" height="909" decoding="async"></figure>' +
        '<dl class="cprev__meta">' + rows.map((r) => '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>').join('') + '</dl></div>' +
        '<div class="m-actions"><a class="btn btn--gold" href="' + esc(c.file) + '" target="_blank" rel="noopener">View certificate (PDF) <span aria-hidden="true">↗</span></a>' +
        '<a class="btn btn--outline" href="' + esc(c.file) + '" download="' + esc(c.download || '') + '">Download</a>' +
        (c.detail ? '<button class="btn btn--dark" type="button" data-writeup="' + esc(c.detail) + '">Read the details</button>' : '') + '</div>' +
        '<p class="m-note">The preview is an image rendered from the original PDF. The PDF is the authoritative copy.</p>' };
    }
    if (kind === 'writeup') {
      const tpl = document.getElementById('wp-' + id);
      if (!tpl) return null;
      return { crumb: SITE.labels[id] || 'Writeup', template: tpl };
    }
    return null;
  }

  function openDialog(kind, id) {
    const out = render(kind, id);
    if (!out || !modal) return;
    if (!modal.open) lastFocus = document.activeElement;
    mBody.textContent = '';
    if (out.template) {
      mBody.appendChild(out.template.content.cloneNode(true));
      const h = $('.wmodal-title', mBody);
      if (h) { h.id = 'modalTitle'; h.textContent = h.textContent.replace(/^[\p{Extended_Pictographic}\uFE0F\u200D\s]+/u, ''); }
      const c = (SITE.certs || []).find((x) => x.id === id);
      if (c && c.file) {
        const wrap = document.createElement('div');
        wrap.className = 'm-actions';
        wrap.innerHTML = '<button class="btn btn--gold" type="button" data-cert="' + esc(c.id) + '">Preview certificate</button><a class="btn btn--outline" href="' + esc(c.file) + '" download="' + esc(c.download || '') + '">Download certificate</a>';
        mBody.appendChild(wrap);
      }
    } else mBody.innerHTML = out.html;
    mCrumb.textContent = out.crumb;
    if (!modal.open) {
      if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
      html.classList.add('is-locked');
    }
    mPanel.scrollTop = 0;
    const first = $('#modalClose');
    if (first) first.focus({ preventScroll: true });
  }

  function closeDialog() { if (modal && modal.open) { if (typeof modal.close === 'function') modal.close(); else modal.removeAttribute('open'); } }

  function initDialog() {
    if (!modal) return;
    $('#modalClose').addEventListener('click', closeDialog);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeDialog(); });
    modal.addEventListener('close', () => {
      if (modal.open) return; // a new dialog was opened in the same tick
      html.classList.remove('is-locked');
      mBody.textContent = '';
      if (lastFocus && document.contains(lastFocus) && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    });
    document.addEventListener('click', (e) => {
      if (e.target.closest('a[href]')) return;
      const el = e.target.closest('[data-tool], [data-project], [data-repo], [data-writeup], [data-cert]');
      if (!el) return;
      if (el.dataset.tool) openDialog('tool', el.dataset.tool);
      else if (el.dataset.project) openDialog('project', el.dataset.project);
      else if (el.dataset.repo) openDialog('repo', el.dataset.repo);
      else if (el.dataset.cert) openDialog('cert', el.dataset.cert);
      else if (el.dataset.writeup) openDialog('writeup', el.dataset.writeup);
    });
  }

  /* ------------------------------------------- tool search + project filter */
  function initToolCatalog() {
    const input = $('#toolSearch');
    if (!input) return;
    const clear = $('#toolClear');
    const count = $('#toolCount');
    const empty = $('#toolEmpty');
    const chips = $$('[data-tfilter]');
    const groups = $$('.tgroup');
    let group = 'all';
    let q = '';
    let timer = 0;
    function apply() {
      const tokens = q.toLowerCase().split(/\s+/).filter(Boolean);
      let n = 0;
      groups.forEach((g) => {
        const inGroup = group === 'all' || g.dataset.group === group;
        let any = 0;
        $$('[data-tool-item]', g).forEach((li) => {
          const ok = inGroup && tokens.every((t) => li.dataset.hay.includes(t));
          li.hidden = !ok;
          if (ok) any++;
        });
        g.hidden = !any;
        n += any;
      });
      count.textContent = n + (n === 1 ? ' tool' : ' tools') + (q ? ' matching “' + q + '”' : '') + (group !== 'all' ? ' in ' + group : '');
      empty.hidden = n > 0;
      clear.hidden = !q;
    }
    input.addEventListener('input', () => { q = input.value.trim(); clearTimeout(timer); timer = setTimeout(apply, 80); });
    input.addEventListener('keydown', (e) => { if (e.key === 'Escape' && input.value) { input.value = ''; q = ''; apply(); } });
    clear.addEventListener('click', () => { input.value = ''; q = ''; apply(); input.focus(); });
    chips.forEach((c) => c.addEventListener('click', () => {
      group = c.dataset.tfilter;
      chips.forEach((x) => { const on = x === c; x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', String(on)); });
      apply();
    }));
  }

  function initProjectFilter() {
    const grid = $('#projGrid');
    if (!grid) return;
    const chips = $$('[data-pfilter]');
    const count = $('#projCount');
    const cards = $$('[data-cat]', grid);
    function set(cat) {
      let n = 0;
      cards.forEach((c) => { const ok = cat === 'all' || c.dataset.cat === cat; c.hidden = !ok; if (ok) n++; });
      chips.forEach((x) => { const on = x.dataset.pfilter === cat; x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', String(on)); });
      count.textContent = n + (n === 1 ? ' project' : ' projects');
    }
    chips.forEach((c) => c.addEventListener('click', () => set(c.dataset.pfilter)));
    // a link to a hidden project (from the expertise doors) resets the filter first
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#project-"]');
      if (!a) return;
      const target = document.getElementById(a.getAttribute('href').slice(1));
      if (target && target.hidden) set('all');
    });
  }

  /* ------------------------------------------------------- contact form */
  function initForm() {
    const form = $('#contactForm');
    if (!form) return;
    const done = $('#formDone');
    const err = $('#formError');
    const btn = $('#cf-btn');
    const label = $('.btn__label', btn);
    const notice = $('#formNotice');
    const counter = $('#cf-count');
    let lastMessage = '';
    const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    const say = (msg) => { notice.textContent = msg; notice.hidden = !msg; };
    const fail = (msg, field) => {
      err.textContent = msg; err.hidden = false;
      $$('#contactForm [aria-invalid]').forEach((f) => f.removeAttribute('aria-invalid'));
      if (field) { field.setAttribute('aria-invalid', 'true'); field.focus(); }
    };
    const copy = async (text) => {
      try { await navigator.clipboard.writeText(text); return true; } catch { /* fall through */ }
      try {
        const ta = document.createElement('textarea');
        ta.value = text; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;left:-9999px;top:0';
        document.body.appendChild(ta); ta.select();
        const ok = document.execCommand('copy'); ta.remove(); return ok;
      } catch { return false; }
    };
    $('#cf-message').addEventListener('input', (e) => { counter.textContent = e.target.value.length + ' / 1500'; });
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const f = form.elements;
      const name = f.name.value.trim();
      const email = f.email.value.trim();
      const subject = f.subject.value;
      const message = f.message.value.trim();
      if (!name) return fail('Please add your name.', f.name);
      if (!emailOk(email)) return fail('Please enter a valid email address.', f.email);
      if (message.length < 10) return fail('Please write a short message (at least 10 characters).', f.message);
      err.hidden = true;
      lastMessage = 'Subject: [Portfolio] ' + subject + '\nFrom: ' + name + ' <' + email + '>\n\n' + message;
      const href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('[Portfolio] ' + subject + ' — from ' + name) + '&body=' + encodeURIComponent('From: ' + name + '\nEmail: ' + email + '\n\n' + message);
      btn.disabled = true; btn.classList.add('is-busy'); label.textContent = 'Opening your email app';
      // some email apps cut off very long mailto links, so copy the text as a safety net
      const long = href.length > 1900;
      if (long) await copy(lastMessage);
      window.location.href = href;
      setTimeout(() => {
        btn.disabled = false; btn.classList.remove('is-busy'); label.textContent = 'Send message';
        form.hidden = true; done.hidden = false;
        say(long ? 'Your message is long, so some email apps may shorten it. It has been copied to your clipboard: paste it into the email if anything is missing.' : '');
        done.focus();
      }, reduce ? 0 : 900);
    });
    $('#copyMsg').addEventListener('click', async () => say((await copy(lastMessage)) ? 'Message copied. Paste it into an email to ' + EMAIL + '.' : 'Copying was blocked by your browser. Select the text in your email app instead.'));
    $('#copyEmail').addEventListener('click', async () => say((await copy(EMAIL)) ? 'Email address copied.' : 'Copying was blocked by your browser. The address is ' + EMAIL + '.'));
    $('#formAgain').addEventListener('click', () => { done.hidden = true; form.hidden = false; form.reset(); counter.textContent = '0 / 1500'; say(''); $('#cf-name').focus(); });
  }

  /* ------------------------------------------------ pointer-driven bits */
  function initPointerFx() {
    if (!finePointer) return;
    $$('.pcard').forEach((c) => c.addEventListener('pointermove', (e) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      c.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }));
    if (reduce) return;
    const cur = $('#cursor');
    if (!cur) return;
    let tx = -100, ty = -100, x = -100, y = -100;
    window.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      tx = e.clientX; ty = e.clientY; cur.classList.add('is-on');
      cur.classList.toggle('is-hover', !!e.target.closest('a, button, .tool, .pcard, .wrow, .repo, .cert, .door__leaf, input, select, textarea'));
    }, { passive: true });
    document.addEventListener('pointerleave', () => cur.classList.remove('is-on'));
    (function loop() {
      x += (tx - x) * 0.2; y += (ty - y) * 0.2;
      cur.style.setProperty('--cx', x.toFixed(1) + 'px');
      cur.style.setProperty('--cy', y.toFixed(1) + 'px');
      requestAnimationFrame(loop);
    })();
  }

  /* --------------------------------------------- scroll (one rAF loop) */
  function initScroll() {
    const bar = $('#progress');
    const top = $('#totop');
    const nav = $('#nav');
    const par = $$('[data-parallax]').map((el) => ({ el, f: parseFloat(el.dataset.parallax), on: false }));
    const storyItems = $$('.story__item');
    let ticking = false;
    let tops = [];          // cached page offsets, re-measured on resize / content changes
    let storyTops = [];
    let docMax = 1;

    function measure() {
      const y = window.scrollY;
      tops = sectionEls.map((s) => ({ top: s.getBoundingClientRect().top + y, nav: NAV_MAP[s.id] }));
      storyTops = storyItems.map((it) => it.getBoundingClientRect().top + y);
      docMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      moveIndicator();
    }

    // only animate parallax elements that are near the viewport
    if ('IntersectionObserver' in window && !reduce) {
      const io = new IntersectionObserver((entries) => entries.forEach((en) => {
        const rec = par.find((p) => p.el.parentElement === en.target);
        if (rec) rec.on = en.isIntersecting;
      }), { rootMargin: '200px 0px' });
      par.forEach((p) => io.observe(p.el.parentElement));
    }

    function frame() {
      ticking = false;
      const y = window.scrollY;
      const p = Math.min(1, y / docMax);
      bar.style.setProperty('--p', p.toFixed(4));
      top.style.setProperty('--p', p.toFixed(4));
      top.classList.toggle('is-on', y > 700);
      nav.classList.toggle('is-solid', y > 24);

      const probe = y + window.innerHeight * 0.35;
      let cur = 'hero';
      for (let i = 0; i < tops.length; i++) if (tops[i].top <= probe) cur = tops[i].nav;
      setActiveNav(cur);

      if (storyTops.length) {
        const mid = y + window.innerHeight * 0.5;
        let a = 0;
        for (let i = 0; i < storyTops.length; i++) if (storyTops[i] < mid) a = i;
        story.set(a);
      }

      if (!reduce) {
        const vh = window.innerHeight;
        for (const rec of par) {
          if (!rec.on) continue;
          const r = rec.el.parentElement.getBoundingClientRect();
          rec.el.style.transform = 'translate3d(0,' + ((r.top + r.height / 2 - vh / 2) * rec.f).toFixed(1) + 'px,0)';
        }
      }
    }
    const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
    let resizeTimer = 0;
    const remeasure = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => { measure(); req(); }, 120); };
    window.addEventListener('scroll', req, { passive: true });
    window.addEventListener('resize', remeasure, { passive: true });
    window.addEventListener('load', remeasure, { once: true });
    if ('ResizeObserver' in window) new ResizeObserver(remeasure).observe(document.body); // dynamic content (GitHub, certificates)
    top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));
    measure();
    frame();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { measure(); frame(); });
  }

  /* ----------------------------------------------------------- start */
  applyStatuses();
  renderThm();
  renderCerts();
  runLoader();
  splitHeadings();
  initReveal();
  initCounters();
  initClock();
  initMenu();
  initTerminal();
  initDoors();
  initDialog();
  initToolCatalog();
  initProjectFilter();
  initForm();
  initPointerFx();
  initScroll();
})();
