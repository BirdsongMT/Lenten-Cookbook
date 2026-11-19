// ─────────────────────────────────────────────────────────────
// ORTHODOX FASTING CALENDAR
// Follows the general fasting guidance of the Typikon. Parishes and
// jurisdictions differ, so the app always says "follow your parish".
//
// style: "old" (Julian / Old Calendar) or "new" (Revised Julian).
// Pascha and everything tied to it falls on the same day for both.
// Fixed feasts (Nativity, Annunciation, the Nativity / Apostles' /
// Dormition fasts) fall 13 days later on the Old Calendar (1900–2099).
// ─────────────────────────────────────────────────────────────
(function () {
  const DAY = 86400000;
  const JULIAN_OFFSET = 13; // valid 1900-03-14 through 2100-02-28

  // Levels, from strictest to none
  const LEVELS = {
    total:  { short: 'Strict fast',   rule: 'Abstain from food as you are able. No oil or wine.', oil: false },
    strict: { short: 'No oil',        rule: 'No meat, dairy, fish, oil or wine.',                  oil: false },
    oil:    { short: 'Oil & wine',    rule: 'Oil and wine allowed. No meat, dairy or fish.',        oil: true  },
    roe:    { short: 'Fish roe',      rule: 'Fish roe (caviar), oil and wine allowed.',             oil: true  },
    fish:   { short: 'Fish allowed',  rule: 'Fish, oil and wine allowed. No meat or dairy.',        oil: true  },
    dairy:  { short: 'No meat',       rule: 'Dairy, eggs and fish allowed. No meat.',               oil: true  },
    free:   { short: 'No fast',       rule: 'A fast-free day.',                                      oil: true  }
  };

  function utc(y, m, d) { return Date.UTC(y, m - 1, d); }
  function toUTC(date) { return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()); }

  // Orthodox Pascha (Julian computus), returned as a Gregorian UTC timestamp
  function pascha(year) {
    const a = year % 4, b = year % 7, c = year % 19;
    const d = (19 * c + 15) % 30;
    const e = (2 * a + 4 * b - d + 34) % 7;
    const month = Math.floor((d + e + 114) / 31);
    const day = ((d + e + 114) % 31) + 1;
    return utc(year, month, day) + JULIAN_OFFSET * DAY;
  }

  // Month/day as the chosen calendar sees it ("fixed" feasts)
  function fixedMD(t, style) {
    const f = new Date(style === 'old' ? t - JULIAN_OFFSET * DAY : t);
    return { m: f.getUTCMonth() + 1, d: f.getUTCDate() };
  }
  const md = (m, d) => m * 100 + d; // 1225 = Dec 25

  const GREAT_FEASTS = {
    [md(1, 6)]: 'Theophany', [md(2, 2)]: 'Meeting of the Lord', [md(3, 25)]: 'Annunciation',
    [md(6, 24)]: 'Nativity of St John the Baptist', [md(6, 29)]: 'Sts Peter & Paul',
    [md(8, 6)]: 'Transfiguration', [md(8, 15)]: 'Dormition', [md(9, 8)]: 'Nativity of the Theotokos',
    [md(11, 21)]: 'Entry of the Theotokos', [md(12, 25)]: 'Nativity of Christ'
  };

  function dayInfo(date, style) {
    style = style === 'new' ? 'new' : 'old';
    const t = toUTC(date);
    const dow = new Date(t).getUTCDay(); // 0 Sun … 6 Sat
    const weekend = dow === 0 || dow === 6;
    const wedFri = dow === 3 || dow === 5;
    const f = fixedMD(t, style), fx = md(f.m, f.d);
    const feast = GREAT_FEASTS[fx] || null;

    // Pascha of this year, or next year's for dates late in the year
    const year = new Date(t).getUTCFullYear();
    const p = pascha(year);
    const n = Math.round((t - p) / DAY); // days from Pascha (negative = before)

    let season = null, level = null, note = '';

    // ── Pascha cycle
    if (n >= -70 && n <= -64) { season = 'Week of the Publican & Pharisee'; level = 'free'; }
    else if (n >= -55 && n <= -49) { season = 'Cheesefare Week'; level = 'dairy'; }
    else if (n >= -48 && n <= -1) {
      season = n >= -6 ? 'Holy Week' : 'Great Lent';
      if (n === -2) { level = 'total'; season = 'Holy Friday'; }
      else if (n === -3) { level = 'oil'; season = 'Holy Thursday'; }
      else if (n === -1) { level = 'strict'; season = 'Holy Saturday'; note = 'Wine is traditionally allowed.'; }
      else if (n >= -6) level = 'strict';
      else if (n === -8) { level = 'roe'; season = 'Lazarus Saturday'; }
      else if (n === -7) { level = 'fish'; season = 'Palm Sunday'; }
      else if (n >= -48 && n <= -44) { level = 'strict'; note = 'Clean Week: many keep a stricter fast.'; }
      else level = weekend ? 'oil' : 'strict';
      if (fx === md(3, 25) && n < -1) { level = n === -2 ? level : 'fish'; season = 'Annunciation'; }
    }
    else if (n >= 0 && n <= 6) { season = 'Bright Week'; level = 'free'; }
    else if (n >= 50 && n <= 56) { season = 'Week after Pentecost'; level = 'free'; }
    else if (n >= 57 && fx <= md(6, 28) && fx >= md(5, 1)) {
      season = "Apostles' Fast";
      level = weekend ? 'fish' : (dow === 2 || dow === 4) ? 'oil' : 'strict';
      if (fx === md(6, 24)) level = 'fish';
    }

    // ── Fixed fasts (only if the Pascha cycle didn't decide the day)
    if (!level) {
      if (fx >= md(8, 1) && fx <= md(8, 14)) {
        season = 'Dormition Fast';
        level = fx === md(8, 6) ? 'fish' : weekend ? 'oil' : 'strict';
      } else if (fx >= md(11, 15) && fx <= md(12, 24)) {
        season = 'Nativity Fast';
        if (fx === md(11, 21)) level = 'fish';
        else if (fx >= md(12, 20)) level = fx === md(12, 24) ? 'strict' : weekend ? 'oil' : 'strict';
        else level = weekend ? 'fish' : (dow === 2 || dow === 4) ? 'oil' : 'strict';
      } else if (fx >= md(12, 25) || fx <= md(1, 4)) {
        season = 'Twelve Days of Christmas'; level = 'free';
      } else if (fx === md(1, 5)) { season = 'Eve of Theophany'; level = 'oil'; }
      else if (fx === md(1, 6)) { season = 'Theophany'; level = 'free'; }
      else if (fx === md(8, 29)) { season = 'Beheading of St John'; level = 'oil'; }
      else if (fx === md(9, 14)) { season = 'Exaltation of the Cross'; level = 'oil'; }
      else if (wedFri) {
        season = dow === 3 ? 'Wednesday fast' : 'Friday fast';
        level = feast ? 'fish' : 'strict';
      } else { level = 'free'; season = feast || 'Ordinary day'; }
    }

    if (feast && !season.includes(feast)) season += ' · ' + feast;

    const L = LEVELS[level];
    return { level, season: season || (feast || ''), short: L.short, rule: L.rule, oilOk: L.oil, note, style };
  }

  window.Fasting = { dayInfo, pascha: y => new Date(pascha(y)), LEVELS };
})();
