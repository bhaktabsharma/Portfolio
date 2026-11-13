/* Live GitHub data for the repositories section.
   Uses the public REST API with no token and no backend:
   https://api.github.com/users/<user>/repos?sort=updated&per_page=100
   If the request fails (offline, rate limit, error) the saved snapshot in index.html stays on screen
   and the status line says so. Settings live in js/content.js (SITE.github). */
(() => {
  'use strict';

  const SITE = window.SITE || {};
  const cfg = SITE.github;
  const list = document.getElementById('ghList');
  if (!cfg || !cfg.api || !list) return;

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const bar = $('.ghbar');
  const statusText = $('#ghStatusText');
  const retry = $('#ghRetry');
  const feat = $('#ghFeatured');
  const chipsEl = $('#ghChips');
  const forksBox = $('#ghForks');
  const count = $('#ghCount');
  const more = $('#ghMore');
  const empty = $('#ghEmpty');
  const barEl = $('#ghBar');
  const keyEl = $('#ghKey');

  const CACHE_KEY = 'bs-gh-v1';
  const TTL = (cfg.cacheMinutes || 30) * 60000;
  const PAGE = cfg.pageSize || 8;

  // curated repositories from js/content.js, matched by current name or an old (renamed) name
  const curated = {};
  Object.entries(SITE.repos || {}).forEach(([id, r]) => {
    [r.name].concat(r.aliases || []).forEach((n) => { curated[n.toLowerCase()] = { id, rec: r }; });
  });
  const colors = { JavaScript: '#f1e05a', TypeScript: '#3178c6', Python: '#3572A5', Shell: '#89e051', HTML: '#e34c26', CSS: '#563d7c', Go: '#00ADD8', Java: '#b07219', 'C++': '#f34b7d', C: '#555555', PHP: '#4F5D95', Ruby: '#701516', Rust: '#dea584', Jupyter: '#DA5B0B' };
  Object.values(SITE.repos || {}).forEach((r) => { if (r.lang && r.dot) colors[r.lang] = r.dot; });
  const colorOf = (l) => colors[l] || '#8a8178';

  let repos = null;
  let lang = 'all';
  let showForks = false;
  let visible = PAGE;
  window.PORTFOLIO_GH = {};

  /* ---------------------------------------------------------- helpers */
  const rtf = (() => { try { return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }); } catch { return null; } })();
  function ago(iso) {
    const t = new Date(iso).getTime();
    if (!t || !rtf) return iso ? iso.slice(0, 10) : '';
    const s = (t - Date.now()) / 1000;
    const units = [['year', 31536000], ['month', 2592000], ['week', 604800], ['day', 86400], ['hour', 3600], ['minute', 60]];
    for (const [u, sec] of units) if (Math.abs(s) >= sec) return rtf.format(Math.round(s / sec), u);
    return 'just now';
  }
  const dateOf = (iso) => { try { return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }); } catch { return iso; } };
  const timeOf = (d) => { try { return d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }); } catch { return ''; } };
  const snapshotDate = () => (cfg.snapshotDate ? dateOf(cfg.snapshotDate + 'T00:00:00') : 'an earlier visit');

  function setStatus(state, msg, canRetry) {
    bar.dataset.state = state;
    statusText.textContent = msg;
    retry.hidden = !canRetry;
    const busy = state === 'loading' ? 'true' : 'false';
    list.setAttribute('aria-busy', busy);
    feat.setAttribute('aria-busy', busy);
  }

  const slim = (r) => ({
    name: r.name, description: r.description || '', url: r.html_url, language: r.language || '',
    stars: r.stargazers_count || 0, forks: r.forks_count || 0, issues: r.open_issues_count || 0,
    updated: r.pushed_at || r.updated_at, archived: !!r.archived, fork: !!r.fork,
  });

  /* ------------------------------------------------------------ cache */
  function readCache() {
    try { const o = JSON.parse(localStorage.getItem(CACHE_KEY)); if (o && Array.isArray(o.data) && o.t) return o; } catch { /* storage unavailable */ }
    return null;
  }
  function writeCache(data) { try { localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), data })); } catch { /* ignore */ } }

  /* ------------------------------------------------------------ fetch */
  async function fetchLive() {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 9000);
    try {
      const res = await fetch(cfg.api, { headers: { Accept: 'application/vnd.github+json' }, signal: ctrl.signal });
      if (res.status === 403 || res.status === 429) {
        const reset = Number(res.headers.get('x-ratelimit-reset'));
        throw Object.assign(new Error('rate limit'), { kind: 'rate', reset: reset ? new Date(reset * 1000) : null });
      }
      if (!res.ok) throw Object.assign(new Error('HTTP ' + res.status), { kind: 'http', status: res.status });
      const json = await res.json();
      if (!Array.isArray(json)) throw Object.assign(new Error('unexpected response'), { kind: 'shape' });
      return json.map(slim).sort((a, b) => new Date(b.updated) - new Date(a.updated));
    } catch (e) {
      if (e.kind) throw e;
      throw Object.assign(e, { kind: e.name === 'AbortError' ? 'timeout' : 'network' });
    } finally { clearTimeout(timer); }
  }

  /* ---------------------------------------------------------- render */
  function lookup(name) {
    if (!repos) return null;
    const key = name.toLowerCase();
    const alias = curated[key];
    const names = [key].concat(alias ? [alias.rec.name.toLowerCase()].concat((alias.rec.aliases || []).map((n) => n.toLowerCase())) : []);
    return repos.find((r) => names.includes(r.name.toLowerCase())) || null;
  }

  function updateFeatured() {
    $$('.frepo[data-gh]', feat).forEach((card) => {
      const r = lookup(card.dataset.gh);
      if (!r) return;
      $('.js-stars', card).textContent = r.stars;
      $('.js-forks', card).textContent = r.forks;
      if (r.language) { $('.js-lang', card).textContent = r.language; const dot = $('.repo__lang i', card); if (dot) dot.style.background = colorOf(r.language); }
      if (r.description) $('.js-desc', card).textContent = r.description;
      let meta = $('.frepo__meta', card);
      if (!meta) { meta = document.createElement('p'); meta.className = 'frepo__meta'; $('.frepo__desc', card).after(meta); }
      meta.textContent = 'Updated ' + ago(r.updated) + (r.archived ? ' · archived' : '');
      const link = $('.frepo__foot a', card);
      if (link) link.href = r.url;
    });
  }

  function filtered() {
    return (repos || []).filter((r) => (showForks || !r.fork) && (lang === 'all' || r.language === lang));
  }

  function renderChips() {
    const base = (repos || []).filter((r) => showForks || !r.fork);
    const tally = {};
    base.forEach((r) => { const l = r.language || 'Other'; tally[l] = (tally[l] || 0) + 1; });
    const langs = Object.keys(tally).sort((a, b) => tally[b] - tally[a]);
    chipsEl.hidden = langs.length < 2;
    if (lang !== 'all' && !tally[lang]) lang = 'all';
    chipsEl.innerHTML = ['all'].concat(langs).map((l) => {
      const on = l === lang;
      return '<button type="button" class="fchip' + (on ? ' is-on' : '') + '" data-lang="' + esc(l) + '" aria-pressed="' + on + '">' +
        (l === 'all' ? 'All' : '<span class="dotc" style="background:' + colorOf(l) + '" aria-hidden="true"></span>' + esc(l)) + ' <i>' + (l === 'all' ? base.length : tally[l]) + '</i></button>';
    }).join('');
  }

  function renderLangBar() {
    if (!barEl || !keyEl) return;
    const tally = {};
    repos.filter((r) => !r.fork).forEach((r) => { if (r.language) tally[r.language] = (tally[r.language] || 0) + 1; });
    const langs = Object.keys(tally).sort((a, b) => tally[b] - tally[a]);
    if (!langs.length) return;
    barEl.setAttribute('aria-label', 'Languages across public repositories: ' + langs.map((l) => l + ' ' + tally[l]).join(', '));
    barEl.innerHTML = langs.map((l) => '<i style="flex:' + tally[l] + ';background:' + colorOf(l) + '"></i>').join('');
    keyEl.innerHTML = langs.map((l) => '<li><i style="background:' + colorOf(l) + '" aria-hidden="true"></i>' + esc(l) + ' <b>' + tally[l] + '</b></li>').join('');
  }

  function renderList() {
    const all = filtered();
    const shown = all.slice(0, visible);
    list.innerHTML = shown.map((r, i) => {
      const c = curated[r.name.toLowerCase()];
      const state = c ? c.rec.state : '';
      const label = state ? (SITE.statuses || {})[state] || 'Public repository' : '';
      const name = c
        ? '<button type="button" data-repo="' + esc(c.id) + '">' + esc(r.name) + '</button>'
        : '<a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + esc(r.name) + '</a>';
      const badges = (r.fork ? '<span class="badge badge--fork">Fork</span>' : '') + (r.archived ? '<span class="badge badge--archived">Archived</span>' : '');
      return '<li class="repo is-new" style="--n:' + i + '"' + (c ? ' data-repo="' + esc(c.id) + '"' : '') + '>' +
        '<span class="repo__lang"><i style="background:' + colorOf(r.language) + '" aria-hidden="true"></i>' + esc(r.language || 'No language') + '</span>' +
        '<div class="repo__main"><h4 class="repo__name">' + name + '</h4><p class="repo__desc">' + (r.description ? esc(r.description) : '<em>No description provided.</em>') + '</p>' +
        '<p class="repo__meta"><span title="' + esc(dateOf(r.updated)) + '">Updated ' + esc(ago(r.updated)) + '</span>' +
        (r.issues ? '<span>' + r.issues + ' open ' + (r.issues === 1 ? 'issue' : 'issues') + '</span>' : '') + badges + '</p></div>' +
        '<div class="repo__stats"><span><span class="sr-only">Stars </span>★ ' + r.stars + '</span><span><span class="sr-only">Forks </span>⑂ ' + r.forks + '</span>' +
        (label ? '<span class="status" data-status="' + esc(state) + '"><i aria-hidden="true"></i><b>' + esc(label) + '</b></span>' : '') + '</div>' +
        '<a class="repo__go" href="' + esc(r.url) + '" target="_blank" rel="noopener" aria-label="View ' + esc(r.name) + ' on GitHub"><span aria-hidden="true">↗</span></a></li>';
    }).join('');
    empty.hidden = all.length > 0;
    more.hidden = all.length <= visible;
    count.textContent = all.length ? 'Showing ' + shown.length + ' of ' + all.length + ' ' + (all.length === 1 ? 'repository' : 'repositories') + (showForks ? '' : ' (forks hidden)') : '';
  }

  function renderAll() {
    (repos || []).forEach((r) => { window.PORTFOLIO_GH[r.name] = r; });
    updateFeatured();
    renderChips();
    renderList();
    renderLangBar();
  }

  /* ------------------------------------------------------------- flow */
  function failMessage(e, cache) {
    const fallback = cache ? 'Showing data cached on ' + dateOf(new Date(cache.t).toISOString()) + '.' : 'Showing the saved snapshot from ' + snapshotDate() + '.';
    if (e.kind === 'rate') return 'GitHub’s limit for anonymous visitors was reached' + (e.reset ? ' (it resets around ' + timeOf(e.reset) + ')' : '') + '. ' + fallback;
    if (e.kind === 'timeout') return 'GitHub took too long to respond. ' + fallback;
    if (e.kind === 'http') return 'GitHub returned an error (HTTP ' + e.status + '). ' + fallback;
    if (e.kind === 'shape') return 'GitHub sent an unexpected response. ' + fallback;
    return 'Couldn’t reach GitHub from this connection. ' + fallback;
  }

  async function load(force) {
    setStatus('loading', 'Loading live data from GitHub…', false);
    const cache = readCache();
    if (!force && cache && Date.now() - cache.t < TTL) {
      repos = cache.data;
      renderAll();
      setStatus('live', 'Live data from GitHub · synced ' + timeOf(new Date(cache.t)) + ' (cached for ' + (cfg.cacheMinutes || 30) + ' minutes)', false);
      return;
    }
    try {
      repos = await fetchLive();
      writeCache(repos);
      renderAll();
      setStatus('live', 'Live data from GitHub · synced ' + timeOf(new Date()), false);
    } catch (e) {
      if (cache) { repos = cache.data; renderAll(); }
      setStatus(e.kind === 'rate' ? 'limited' : 'error', failMessage(e, cache), true);
    }
  }

  chipsEl.addEventListener('click', (e) => {
    const b = e.target.closest('[data-lang]');
    if (!b) return;
    lang = b.dataset.lang; visible = PAGE;
    renderChips(); renderList();
    const again = $('[data-lang][aria-pressed="true"]', chipsEl); if (again) again.focus({ preventScroll: true });
  });
  forksBox.addEventListener('change', () => { showForks = forksBox.checked; visible = PAGE; if (repos) { renderChips(); renderList(); } });
  more.addEventListener('click', () => { visible += PAGE; renderList(); });
  retry.addEventListener('click', () => load(true));

  load(false);
})();
