/* ─────────────────────────────────────────────
   LENTEN POCKET COOKBOOK · app logic
   Data: recipes.js (RECIPES, CHAPTERS) · fasting.js (Fasting)
   ───────────────────────────────────────────── */
(function () {
'use strict';
const $ = s => document.querySelector(s);
const RECIPES = window.RECIPES, CHAPTERS = window.CHAPTERS;

// ── ICONS (stroke, inherit color) ─────────────
const sv = p => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const I = {
  book: sv('<path d="M4 5.5C4 4.7 4.7 4 5.5 4H11v16H5.5c-.8 0-1.5-.7-1.5-1.5z"/><path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H13v16h5.5c.8 0 1.5-.7 1.5-1.5z"/>'),
  cal: sv('<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/><path d="M12 13v4M10 15h4"/>'),
  ribbon: sv('<path d="M7 3h10v18l-5-4-5 4z"/>'),
  ribbonFill: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10v18l-5-4-5 4z" fill="currentColor"/></svg>',
  search: sv('<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>'),
  list: sv('<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>'),
  back: sv('<path d="M15 5l-7 7 7 7"/>'),
  fwd: sv('<path d="M9 5l7 7-7 7"/>'),
  x: sv('<path d="M6 6l12 12M18 6L6 18"/>'),
  clock: sv('<circle cx="12" cy="13" r="7.5"/><path d="M12 9v4l2.5 2M9.5 2.5h5"/>'),
  flame: sv('<path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5.3 1.6 1.2 2.6 2 3 .2-3 1-5.5 1-8.5z"/>'),
  share: sv('<path d="M12 3v12M7.5 7.5L12 3l4.5 4.5"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/>'),
  plus: sv('<path d="M12 5v14M5 12h14"/>'),
  trash: sv('<path d="M4 7h16M9 7V4h6v3M6.5 7l1 13h9l1-13"/>'),
  bowl: sv('<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 7c-1-1 1-2 0-3M13 7c-1-1 1-2 0-3"/>'),
  pot: sv('<path d="M5 9h14v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"/><path d="M3 9h18M2 12h3M19 12h3M10 6h4"/>'),
  grain: sv('<path d="M12 21V8"/><path d="M12 8c-2-1-3-3-3-5 2 0 3 2 3 5zM12 8c2-1 3-3 3-5-2 0-3 2-3 5z"/><path d="M12 13c-2.5-.5-4-2-4.5-4 2 0 4 1.5 4.5 4zM12 13c2.5-.5 4-2 4.5-4-2 0-4 1.5-4.5 4zM12 18c-2.5-.5-4-2-4.5-4 2 0 4 1.5 4.5 4zM12 18c2.5-.5 4-2 4.5-4-2 0-4 1.5-4.5 4z"/>'),
  oven: sv('<rect x="3" y="9" width="18" height="9" rx="2"/><path d="M1.5 12H3M21 12h1.5"/><path d="M7 9c0-2 2-3 5-3s5 1 5 3"/><path d="M7 13.5c1 .8 2 .8 3 0s2-.8 3 0 2 .8 3 0"/>'),
  leaf: sv('<path d="M5 19C5 10 11 4 20 4c0 9-6 15-15 15z"/><path d="M5 19l8-8"/>'),
  bread: sv('<path d="M4 11a4 4 0 0 1 3-6h10a4 4 0 0 1 3 6v8H4z"/><path d="M9 9l1.5 2M13 9l1.5 2"/>')
};

// ── STORAGE ────────────────────────────────────
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
let checked = store.get('lentenCookbook.checked.v1', {});     // {id:[idx]}
let saved = new Set(store.get('lc.saved', []));
let notes = store.get('lc.notes', {});
let shop = store.get('lc.list', []);                            // [{t, r, done}]
let calStyle = store.get('lc.cal', 'old');
const saveChecked = () => store.set('lentenCookbook.checked.v1', checked);

// ── HELPERS ────────────────────────────────────
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const chapter = k => CHAPTERS.find(c => c.key === k) || CHAPTERS[0];
const byId = id => RECIPES.find(r => r.id === id);
const BOOK = CHAPTERS.flatMap(c => RECIPES.filter(r => r.chapter === c.key)); // book order
const pageOf = r => BOOK.indexOf(r) + 1;
const okToday = (r, info) => info.oilOk || r.oil === 'none' || r.oil === 'swap';
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast.h); toast.h = setTimeout(() => t.classList.remove('show'), 1800); }
function thumb(r, cls = 'thumb') {
  return `<span class="${cls}">${r.photo ? `<img src="${esc(r.photo)}" alt="" loading="lazy">` : I[chapter(r.chapter).icon]}</span>`;
}
function oilLabel(r) { return r.oil === 'none' ? '<span class="ok">No oil</span>' : r.oil === 'swap' ? '<span class="ok">No-oil option</span>' : 'Oil days'; }
function row(r) {
  return `<button class="row" data-open="${r.id}">${thumb(r)}
    <span class="row-main"><span class="row-title">${r.title}</span><span class="row-meta">${r.time} · ${oilLabel(r)}</span></span>
    <span class="row-page">${saved.has(r.id) ? `<span class="rib">${I.ribbonFill}</span>` : ''}p.${pageOf(r)}</span></button>`;
}
const today = () => Fasting.dayInfo(new Date(), calStyle);
const fmtDate = (d, o) => d.toLocaleDateString(undefined, o);

// ── HEADER / TODAY CHIP ────────────────────────
function renderChip() {
  const i = today();
  $('#todayChip').innerHTML = `<span class="dot lv-${i.level}"></span>${i.short}`;
}

// ── VIEWS ──────────────────────────────────────
let view = 'contents', filter = 'all', query = '';
const FILTERS = [
  { k: 'all', l: 'All' }, { k: 'today', l: 'Fits today' }, { k: 'nooil', l: 'No oil' },
  { k: 'quick', l: 'Under 30 min' }, { k: 'greek', l: 'Greek' }
];
function applyFilter(list) {
  const i = today();
  if (filter === 'today') return list.filter(r => okToday(r, i));
  if (filter === 'nooil') return list.filter(r => r.oil === 'none' || r.oil === 'swap');
  if (filter === 'quick') return list.filter(r => r.timeMin <= 30);
  if (filter === 'greek') return list.filter(r => r.isGreek);
  return list;
}
const chipsHTML = () => `<div class="chips">${FILTERS.map(f => `<button class="chip${filter === f.k ? ' on' : ''}" data-filter="${f.k}">${f.l}</button>`).join('')}</div>`;

function todayCard() {
  const i = today(), d = new Date();
  return `<button class="today-card" data-go="today">
    <span class="tc-main"><span class="tc-day">${fmtDate(d, { weekday: 'long', month: 'short', day: 'numeric' })}</span>
    <span class="tc-season" style="display:block">${esc(i.season)}</span>
    <span class="tc-rule" style="display:block"><span class="dot lv-${i.level}"></span> ${i.short}</span></span>
    <span class="tc-go">${RECIPES.filter(r => okToday(r, i)).length} fit today ›</span></button>`;
}

let listContext = BOOK; // the list that prev/next pages through
function renderContents() {
  const list = applyFilter(BOOK);
  listContext = list;
  let h = todayCard() + chipsHTML();
  CHAPTERS.forEach(c => {
    const rs = list.filter(r => r.chapter === c.key);
    if (!rs.length) return;
    h += `<section class="chapter"><div class="ch-head"><span class="ch-ico">${I[c.icon]}</span><span class="ch-title">${c.title}</span><span class="ch-count">${rs.length}</span></div>${rs.map(row).join('')}</section>`;
  });
  if (!list.length) h += `<div class="empty">No recipes match this filter.</div>`;
  $('#v-contents').innerHTML = h;
}

let selDay = 0;
function renderToday() {
  const base = new Date(); base.setHours(12, 0, 0, 0);
  const days = [...Array(7)].map((_, k) => { const d = new Date(base); d.setDate(d.getDate() + k); return d; });
  const d = days[selDay], i = Fasting.dayInfo(d, calStyle);
  const fits = BOOK.filter(r => okToday(r, i));
  let h = `<div class="h-page">Fasting today</div>
  <div class="seg" role="group" aria-label="Church calendar">
    <button class="${calStyle === 'old' ? 'on' : ''}" data-cal="old">Old Calendar</button>
    <button class="${calStyle === 'new' ? 'on' : ''}" data-cal="new">New Calendar</button></div>
  <div class="week">${days.map((x, k) => { const xi = Fasting.dayInfo(x, calStyle); return `<button class="wd${k === selDay ? ' sel' : ''}" data-day="${k}" aria-label="${fmtDate(x, { weekday: 'long' })}: ${xi.short}">${fmtDate(x, { weekday: 'narrow' })}<b>${x.getDate()}</b><span class="dot lv-${xi.level}"></span></button>`; }).join('')}</div>
  <div class="legend"><span><i class="dot lv-strict"></i>No oil</span><span><i class="dot lv-oil"></i>Oil &amp; wine</span><span><i class="dot lv-fish"></i>Fish / dairy</span><span><i class="dot lv-free"></i>No fast</span></div>
  <div class="day-panel"><div class="dp-date">${fmtDate(d, { weekday: 'long', month: 'long', day: 'numeric' })}</div>
    <div class="dp-season">${esc(i.season)}</div>
    <div class="dp-rule"><span class="dot lv-${i.level}"></span><span><b>${i.short}.</b> ${i.rule}</span></div>
    ${i.note ? `<div class="dp-note">${esc(i.note)}</div>` : ''}</div>
  <div class="parish">Customs differ between parishes and families. Follow your priest's guidance.</div>
  <section class="chapter"><div class="ch-head"><span class="ch-ico">${I.book}</span><span class="ch-title">${i.oilOk ? 'All recipes fit this day' : 'Recipes for a no-oil day'}</span><span class="ch-count">${fits.length}</span></div>${fits.map(row).join('')}</section>`;
  listContext = fits;
  $('#v-today').innerHTML = h;
}

function renderSaved() {
  const list = BOOK.filter(r => saved.has(r.id));
  listContext = list;
  $('#v-saved').innerHTML = `<div class="h-page">Bookmarks</div><div class="h-sub">Tap the ribbon on any recipe to keep your place.</div>` +
    (list.length ? `<section class="chapter">${list.map(row).join('')}</section>` : `<div class="empty">No bookmarks yet.</div>`);
}

function renderSearch(keepInput) {
  if (!keepInput) {
    $('#v-search').innerHTML = `<div class="h-page">Find a recipe</div>
      <label class="search"><span class="sr">Search recipes</span>${I.search}<input id="q" type="search" placeholder="Name, ingredient, or chapter…" autocomplete="off" autocorrect="off" spellcheck="false"></label>
      ${chipsHTML()}<div id="results"></div>`;
    const q = $('#q'); q.value = query;
    q.addEventListener('input', e => { query = e.target.value.trim().toLowerCase(); renderSearch(true); });
  }
  let list = applyFilter(BOOK);
  if (query) list = list.filter(r => [r.title, r.tag, chapter(r.chapter).title, ...r.ingredients, ...r.steps].join(' ').toLowerCase().includes(query));
  listContext = list;
  $('#results').innerHTML = list.length ? `<section class="chapter">${list.map(row).join('')}</section>` : `<div class="empty">Nothing found${query ? ` for "${esc(query)}"` : ''}.</div>`;
}

function renderList() {
  const groups = {};
  shop.forEach((it, k) => { (groups[it.r] = groups[it.r] || []).push({ ...it, k }); });
  let h = `<div class="h-page">Shopping list</div><div class="h-sub">Tick what you already have on a recipe, then add the rest here.</div>`;
  if (!shop.length) { $('#v-list').innerHTML = h + `<div class="empty">Your list is empty.</div>`; return; }
  h += `<div class="list-actions"><button class="btn primary" data-act="share">${I.share} Share</button><button class="btn" data-act="clear-done">Clear ticked</button><button class="btn" data-act="clear-all">${I.trash} Clear all</button></div>`;
  Object.keys(groups).forEach(rid => {
    const r = byId(+rid);
    h += `<section class="chapter"><div class="ch-head"><span class="ch-ico">${I[chapter(r ? r.chapter : 'soups').icon]}</span><span class="ch-title">${r ? r.title : 'Other'}</span></div>` +
      groups[rid].map(it => `<button class="li${it.done ? ' done' : ''}" data-li="${it.k}"><span class="box"></span><span class="li-t">${it.t}</span></button>`).join('') + `</section>`;
  });
  $('#v-list').innerHTML = h;
}

function updateBadge() {
  const n = shop.filter(x => !x.done).length;
  $('#listBadge').textContent = n; $('#listBadge').style.display = n ? '' : 'none';
}

function setView(v, keepScroll) {
  view = v;
  document.querySelectorAll('.view').forEach(e => e.classList.toggle('on', e.id === 'v-' + v));
  document.querySelectorAll('.nav button').forEach(b => b.classList.toggle('on', b.dataset.view === v));
  const y = window.scrollY;
  ({ contents: renderContents, today: renderToday, saved: renderSaved, search: () => renderSearch(false), list: renderList })[v]();
  window.scrollTo(0, keepScroll ? y : 0);
}

// ── SCALING ────────────────────────────────────
const FR = { '½': .5, '⅓': 1 / 3, '⅔': 2 / 3, '¼': .25, '¾': .75 };
function parseQ(s) { s = s.trim(); let v = 0; const m = s.match(/^(\d+(?:\.\d+)?)?\s*([½⅓⅔¼¾])?$/); if (!m) return NaN; if (m[1]) v += +m[1]; if (m[2]) v += FR[m[2]]; return v; }
function fmtQ(v) {
  const w = Math.floor(v + 1e-9), f = v - w;
  const opts = [[0, ''], [.25, '¼'], [1 / 3, '⅓'], [.5, '½'], [2 / 3, '⅔'], [.75, '¾'], [1, '']];
  let best = opts[0]; opts.forEach(o => { if (Math.abs(f - o[0]) < Math.abs(f - best[0])) best = o; });
  const whole = best[0] === 1 ? w + 1 : w;
  return (whole ? whole : '') + best[1] || '0';
}
function scaleLine(line, k) {
  if (k === 1) return esc(line);
  const re = /^(\d+(?:\.\d+)?\s*[½⅓⅔¼¾]?|[½⅓⅔¼¾])(\s*[–-]\s*(\d+(?:\.\d+)?\s*[½⅓⅔¼¾]?|[½⅓⅔¼¾]))?/;
  const m = line.match(re);
  if (!m) return esc(line);
  const a = parseQ(m[1]); if (isNaN(a)) return esc(line);
  let q = fmtQ(a * k);
  if (m[3]) { const b = parseQ(m[3]); if (!isNaN(b)) q += '–' + fmtQ(b * k); }
  const rest = line.slice(m[0].length);
  return `<b>${q}</b>` + (/^\s/.test(rest) ? '' : ' ') + esc(rest);
}
const baseServ = r => { const m = String(r.servings).match(/\d+/); return m ? +m[0] : 4; };
const servUnit = r => { const t = String(r.servings).replace(/^[\d\s–-]+/, '').trim(); return t || 'servings'; };

// ── TIMER CHIPS IN STEPS ───────────────────────
function stepHTML(step) {
  let s = esc(step);
  const m = s.match(/^([A-Za-z][A-Za-z &;#0-9'"]+?):\s*/);
  if (m && m[1].length <= 30) s = `<b>${m[1]}:</b> ` + s.slice(m[0].length);
  return s.replace(/(\d+)(?:\s*[–-]\s*(\d+))?\s*(min(?:ute)?s?|hours?|hrs?)\b/gi, (all, a, b, u) => {
    const mult = /^h/i.test(u) ? 3600 : 60;
    return `<button class="tchip" data-timer="${a * mult}" data-tlabel="${esc(all)}">${I.clock}${all}</button>`;
  });
}

// ── RECIPE BOOK ────────────────────────────────
const book = $('#book');
let cur = null, scaleBy = {}, pageEl = $('#pageA'), spareEl = $('#pageB'), turning = false;

function pageHTML(r) {
  const c = chapter(r.chapter), base = baseServ(r), n = scaleBy[r.id] || base, k = n / base;
  const chk = new Set(checked[r.id] || []);
  const idx = listContext.indexOf(r), prev = listContext[idx - 1], next = listContext[idx + 1];
  let b = '';
  if (r.specialBadge) b += `<div class="special">${esc(r.specialBadge)}</div>`;
  if (r.warning) b += `<div class="note-box nb-warn">${esc(r.warning)}</div>`;
  if (r.funFact) b += `<div class="note-box nb-fun">${esc(r.funFact.replace(/^✨\s*/, ''))}</div>`;
  b += r.oil === 'none' ? `<div class="note-box nb-oil"><b>No oil.</b> Good for strict fasting days.</div>`
     : r.oil === 'swap' ? `<div class="note-box nb-oil"><b>No-oil days:</b> ${esc(r.oilSwap)}</div>`
     : `<div class="note-box nb-oil"><b>Olive oil is key to this dish.</b> Save it for days when oil is allowed.</div>`;
  b += `<div class="toolbar"><div class="scaler" aria-label="Servings"><button data-serv="-1" aria-label="Fewer">−</button><span>${n} ${esc(servUnit(r))}</span><button data-serv="1" aria-label="More">+</button></div>
        <button class="btn gold" data-act="cook">${I.flame} Cook mode</button></div>`;
  b += `<div class="sec">Ingredients<small>${chk.size ? `${chk.size} of ${r.ingredients.length} ticked` : 'tick what you have'}</small></div>`;
  b += r.ingredients.map((x, i) => `<button class="ing${chk.has(i) ? ' on' : ''}" data-ing="${i}"><span class="box"></span><span class="ing-t">${scaleLine(x, k)}</span></button>`).join('');
  b += `<div class="addlist"><button class="btn" data-act="addlist">${I.plus} Add ${chk.size ? 'the rest' : 'all'} to shopping list</button></div>`;
  b += `<div class="sec">Method<small>tap a time to start a timer</small></div><ol class="steps">${r.steps.map((s, i) => `<li class="step"><span class="sn">${i + 1}</span><span class="st">${stepHTML(s)}</span></li>`).join('')}</ol>`;
  if (r.tip) b += `<div class="tip"><div class="tip-l">Chef's tip</div><div class="tip-t">${esc(r.tip)}</div></div>`;
  if (r.relatedIds && r.relatedIds.length) b += `<div class="sec">Pairs well with</div><div class="related">${r.relatedIds.map(byId).filter(Boolean).map(x => `<button class="chip" data-open="${x.id}">${x.title}</button>`).join('')}</div>`;
  b += `<div class="sec">My notes<small>saved on this phone</small></div><textarea class="notes" data-notes="${r.id}" placeholder="Jot changes, like &quot;extra lemon&quot;…">${esc(notes[r.id] || '')}</textarea>`;
  b += `<div class="folio"><button data-nav="-1" ${prev ? '' : 'disabled'}>${I.back}<span>${prev ? prev.title : ''}</span></button>
        <span class="pn">page ${pageOf(r)} of ${BOOK.length}</span>
        <button data-nav="1" ${next ? '' : 'disabled'}><span>${next ? next.title : ''}</span>${I.fwd}</button></div>`;
  return `<div class="shade"></div>
  <div class="rp-top"><button class="gbtn" data-act="close" aria-label="Back to contents">${I.back}Contents</button>
    <span class="rp-top-title">${r.title}</span>
    <button class="gbtn${saved.has(r.id) ? ' on' : ''}" data-act="save" aria-label="${saved.has(r.id) ? 'Remove bookmark' : 'Bookmark'}">${saved.has(r.id) ? I.ribbonFill : I.ribbon}</button></div>
  <div class="hero">${r.photo ? `<img src="${esc(r.photo)}" alt="${esc(r.title)}">` : `<div class="hero-ph">${I[c.icon]}<i>Photo coming soon</i></div>`}
    <div class="hero-txt"><div class="hero-ch foil">${c.title}</div><h2 class="hero-title">${r.title}</h2>
    <div class="hero-tags"><span class="tag">${r.time}</span><span class="tag">${esc(String(r.servings))} ${/^\d[\d\s–-]*$/.test(r.servings) ? 'servings' : ''}</span>${r.tag ? `<span class="tag">${r.tag}</span>` : ''}</div></div></div>
  <div class="rp-body">${b}</div>`;
}

function bindPage(el) {
  const top = el.querySelector('.rp-top'), hero = el.querySelector('.hero');
  el.onscroll = () => top.classList.toggle('solid', el.scrollTop > hero.offsetHeight - 70);
}
function renderPage(el, r, keepScroll) {
  const y = el.scrollTop;
  el.innerHTML = pageHTML(r); bindPage(el);
  el.scrollTop = keepScroll ? y : 0; el.onscroll();
}

let historyPushed = false;
function openRecipe(id) {
  const r = byId(id); if (!r) return;
  if (!listContext.includes(r)) listContext = BOOK;
  cur = r; renderPage(pageEl, r);
  pageEl.classList.remove('hidden'); spareEl.classList.add('hidden');
  if (!book.classList.contains('open')) {
    try { history.pushState({ recipe: 1 }, ''); historyPushed = true; } catch (e) {}
    book.classList.add('open'); document.body.style.overflow = 'hidden';
  }
}
function hideBook() {
  book.classList.remove('open'); document.body.style.overflow = '';
  if (view !== 'search') setView(view, true); else renderSearch(true); // refresh ribbons/ticks
}
function closeBook() { if (!book.classList.contains('open')) return; if (historyPushed) history.back(); else hideBook(); }
window.addEventListener('popstate', () => { historyPushed = false; if ($('#cook').classList.contains('open')) closeCook(); hideBook(); });

function turn(dir) {
  if (turning || !cur) return;
  const idx = listContext.indexOf(cur), r = listContext[idx + dir];
  if (!r) return;
  turning = true;
  const out = pageEl, inn = spareEl;
  renderPage(inn, r); inn.classList.remove('hidden');
  const done = () => {
    out.classList.add('hidden'); out.classList.remove('turn-out', 'under', 'turn-in');
    inn.classList.remove('turn-in', 'under', 'turn-out');
    pageEl = inn; spareEl = out; cur = r; turning = false;
  };
  if (dir > 0) { // current page lifts away to the left, revealing the next
    inn.classList.add('under'); out.classList.add('turn-out');
    out.addEventListener('animationend', done, { once: true });
  } else {       // previous page swings back in over the current one
    out.classList.add('under'); inn.classList.add('turn-in');
    inn.addEventListener('animationend', done, { once: true });
  }
  setTimeout(() => { if (turning) done(); }, 900); // safety
}

// swipe to turn pages
(function () {
  let x0 = 0, y0 = 0, horiz = null;
  book.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; horiz = null; }, { passive: true });
  book.addEventListener('touchmove', e => {
    if (horiz !== null) return;
    const dx = e.touches[0].clientX - x0, dy = e.touches[0].clientY - y0;
    if (Math.abs(dx) > 14 || Math.abs(dy) > 14) horiz = Math.abs(dx) > Math.abs(dy) * 1.4;
  }, { passive: true });
  book.addEventListener('touchend', e => {
    if (!horiz || e.target.closest('textarea')) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (dx < -60) turn(1); else if (dx > 60) turn(-1);
  }, { passive: true });
})();

// ── COOK MODE ──────────────────────────────────
let ckStep = 0, wake = null;
async function keepAwake() { try { if ('wakeLock' in navigator) wake = await navigator.wakeLock.request('screen'); } catch (e) { wake = null; } }
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && $('#cook').classList.contains('open')) keepAwake(); });
function renderCook() {
  const r = cur, n = r.steps.length;
  $('#cook').innerHTML = `<div class="ck-top"><span class="ck-title">${r.title}</span><button class="gbtn" data-act="cook-close" aria-label="Exit cook mode">${I.x}</button></div>
    <div class="ck-prog">${r.steps.map((_, i) => `<i class="${i <= ckStep ? 'on' : ''}"></i>`).join('')}</div>
    <div class="ck-step"><div class="ck-n">Step ${ckStep + 1} of ${n}</div><div class="ck-t">${stepHTML(r.steps[ckStep])}</div></div>
    <div class="ck-awake">${wake ? 'Screen will stay on while cooking' : ''}</div>
    <div class="ck-nav"><button data-ck="-1" ${ckStep ? '' : 'disabled'}>Back</button><button class="next" data-ck="1">${ckStep < n - 1 ? 'Next step' : 'Finish'}</button></div>`;
}
async function openCook() { ckStep = 0; await keepAwake(); renderCook(); $('#cook').classList.add('open'); }
function closeCook() { $('#cook').classList.remove('open'); if (wake) { wake.release().catch(() => {}); wake = null; } }

// ── TIMERS ─────────────────────────────────────
let timers = store.get('lc.timers', []).filter(t => t.end > Date.now() - 3600000); // [{id,end,label,done}]
let audio = null;
function beep() {
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    [0, 0.35, 0.7].forEach(off => { const o = audio.createOscillator(), g = audio.createGain(); o.frequency.value = 880; o.connect(g); g.connect(audio.destination);
      g.gain.setValueAtTime(0.0001, audio.currentTime + off); g.gain.exponentialRampToValueAtTime(0.4, audio.currentTime + off + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + off + 0.28);
      o.start(audio.currentTime + off); o.stop(audio.currentTime + off + 0.3); });
  } catch (e) {}
  if (navigator.vibrate) navigator.vibrate([300, 150, 300, 150, 300]);
}
function startTimer(sec, label) {
  try { audio = audio || new (window.AudioContext || window.webkitAudioContext)(); audio.resume(); } catch (e) {}
  timers.push({ id: Date.now(), end: Date.now() + sec * 1000, label: (cur ? cur.title.split('(')[0].trim() + ' · ' : '') + label, done: false });
  store.set('lc.timers', timers); tick(); toast(`Timer started: ${label}`);
}
function tick() {
  const now = Date.now();
  timers.forEach(t => { if (!t.done && t.end <= now) { t.done = true; beep(); store.set('lc.timers', timers); } });
  $('#timers').innerHTML = timers.map(t => {
    const left = Math.max(0, Math.round((t.end - now) / 1000));
    const mm = Math.floor(left / 60), ss = String(left % 60).padStart(2, '0');
    return `<div class="timer${t.done ? ' done' : ''}"><b>${t.done ? 'Done' : `${mm}:${ss}`}</b><span>${esc(t.label)}</span><button data-tstop="${t.id}" aria-label="Dismiss timer">${I.x}</button></div>`;
  }).join('');
}
setInterval(() => { if (timers.length) tick(); }, 1000);

// ── SHOPPING LIST ──────────────────────────────
function addToList(r) {
  const chk = new Set(checked[r.id] || []), base = baseServ(r), k = (scaleBy[r.id] || base) / base;
  let added = 0;
  r.ingredients.forEach((x, i) => {
    if (chk.has(i)) return;
    const t = scaleLine(x, k);
    if (!shop.some(s => s.r === r.id && s.t === t)) { shop.push({ t, r: r.id, done: false }); added++; }
  });
  store.set('lc.list', shop); updateBadge();
  toast(added ? `Added ${added} item${added > 1 ? 's' : ''} to your list` : 'Already on your list');
}
function listText() {
  const tmp = document.createElement('div');
  return 'Shopping list\n' + shop.filter(s => !s.done).map(s => { tmp.innerHTML = s.t; return '• ' + tmp.textContent; }).join('\n');
}

// ── EVENTS (one delegated handler) ─────────────
document.addEventListener('click', e => {
  const t = e.target.closest('button'); if (!t) return;
  const d = t.dataset;
  if (d.view) return setView(d.view);
  if (d.go) return setView(d.go);
  if (d.open) return openRecipe(+d.open);
  if (d.filter) { filter = d.filter; return view === 'search' ? renderSearch(false) : renderContents(); }
  if (d.cal) { calStyle = d.cal; store.set('lc.cal', calStyle); renderChip(); return renderToday(); }
  if (d.day) { selDay = +d.day; return renderToday(); }
  if (d.nav) return turn(+d.nav);
  if (d.ing) {
    const i = +d.ing, s = new Set(checked[cur.id] || []);
    s.has(i) ? s.delete(i) : s.add(i); checked[cur.id] = [...s]; saveChecked();
    return renderPage(pageEl, cur, true);
  }
  if (d.serv) {
    const base = baseServ(cur), n = scaleBy[cur.id] || base;
    const step = base >= 12 ? Math.ceil(base / 4) : 1;
    scaleBy[cur.id] = Math.max(1, n + (+d.serv) * step);
    return renderPage(pageEl, cur, true);
  }
  if (d.timer) { e.stopPropagation(); return startTimer(+d.timer, d.tlabel); }
  if (d.tstop) { timers = timers.filter(x => String(x.id) !== d.tstop); store.set('lc.timers', timers); return tick(); }
  if (d.ck) { const n = cur.steps.length; if (+d.ck > 0 && ckStep >= n - 1) return closeCook(); ckStep = Math.min(n - 1, Math.max(0, ckStep + (+d.ck))); return renderCook(); }
  if (d.li) { const it = shop[+d.li]; it.done = !it.done; store.set('lc.list', shop); updateBadge(); return renderList(); }
  switch (d.act) {
    case 'close': return closeBook();
    case 'save': saved.has(cur.id) ? saved.delete(cur.id) : saved.add(cur.id); store.set('lc.saved', [...saved]); toast(saved.has(cur.id) ? 'Bookmarked' : 'Bookmark removed'); return renderPage(pageEl, cur, true);
    case 'cook': return openCook();
    case 'cook-close': return closeCook();
    case 'addlist': return addToList(cur);
    case 'clear-done': shop = shop.filter(s => !s.done); store.set('lc.list', shop); updateBadge(); return renderList();
    case 'clear-all': if (confirmClear()) { shop = []; store.set('lc.list', shop); updateBadge(); renderList(); } return;
    case 'share': {
      const text = listText();
      if (navigator.share) navigator.share({ title: 'Shopping list', text }).catch(() => {});
      else if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => toast('List copied'), () => {});
      return;
    }
    case 'open-book': return openCover();
  }
});
// two-tap clear instead of a browser dialog
function confirmClear() {
  const b = document.querySelector('[data-act="clear-all"]');
  if (b.dataset.armed) return true;
  b.dataset.armed = '1'; b.textContent = 'Tap again to clear'; setTimeout(() => { if (b.isConnected) { delete b.dataset.armed; b.innerHTML = `${I.trash} Clear all`; } }, 2500);
  return false;
}
document.addEventListener('input', e => {
  const n = e.target.dataset && e.target.dataset.notes;
  if (n) { notes[n] = e.target.value; if (!notes[n]) delete notes[n]; store.set('lc.notes', notes); }
});
document.addEventListener('keydown', e => {
  if (e.target.matches && e.target.matches('input,textarea')) return;
  if ($('#cook').classList.contains('open')) { if (e.key === 'Escape') closeCook(); if (e.key === 'ArrowRight') $('[data-ck="1"]').click(); if (e.key === 'ArrowLeft') $('[data-ck="-1"]').click(); return; }
  if (!book.classList.contains('open')) return;
  if (e.key === 'Escape') closeBook(); if (e.key === 'ArrowRight') turn(1); if (e.key === 'ArrowLeft') turn(-1);
});

// ── COVER ──────────────────────────────────────
function openCover() {
  const c = $('#cover'); c.classList.add('opening');
  setTimeout(() => c.classList.add('gone'), 850);
  try { sessionStorage.setItem('lc.opened', '1'); } catch (e) {}
}
function initCover() {
  let opened = false; try { opened = sessionStorage.getItem('lc.opened'); } catch (e) {}
  if (opened) { $('#cover').classList.add('gone'); return; }
  const i = today();
  $('#coverToday').innerHTML = `<span class="dot lv-${i.level}"></span> ${fmtDate(new Date(), { weekday: 'long' })} · ${esc(i.short)}`;
  $('#cover').addEventListener('touchend', e => { if (!e.target.closest('button')) openCover(); }, { passive: true });
}

// ── NAV ICONS + INIT ───────────────────────────
document.querySelectorAll('.nav [data-icon]').forEach(b => b.insertAdjacentHTML('afterbegin', I[b.dataset.icon]));
$('#todayChip').addEventListener('click', () => setView('today'));
initCover(); renderChip(); updateBadge(); tick(); setView('contents');

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').then(r => r.update()).catch(() => {}); });
}
})();
