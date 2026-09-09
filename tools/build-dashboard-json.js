#!/usr/bin/env node
/*
 * data/dashboard.json'u dashboard/index.html + dashboard/yokak-data.js icindeki
 * verilerden yeniden uretir.
 *
 * NEDEN: dashboard/index.html acilirken ../data/dashboard.json dosyasini cekip
 * gomulu verinin uzerine yazar. Iki kaynak ayrisirsa sitede ESKI veri gorunur.
 * dashboard/index.html icindeki veriyi degistirdikten sonra bu betigi calistirin:
 *
 *     node tools/build-dashboard-json.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'dashboard/index.html'), 'utf8');
const yokakSrc = fs.readFileSync(path.join(root, 'dashboard/yokak-data.js'), 'utf8');

function slice(start, end, label) {
  const a = html.indexOf(start);
  const b = html.indexOf(end, a);
  if (a === -1 || b === -1) throw new Error(`${label} bloku bulunamadi (isaretci degismis olabilir)`);
  return html.slice(a, b);
}

const sayilarla = slice("const Y9  = [", "/* ── Toggle grafik bileşeni ── */", 'SAYILARLA');
const dash      = slice("let DASH = {", "function normalizeDash()", 'DASH');

// const/let bildirimleri vm baglaminin global nesnesine yapismaz; acikca disari veriyoruz.
const ctx = vm.createContext({});
vm.runInContext(
  `${yokakSrc}\n${sayilarla}\n${dash}\n;globalThis.__data = { YOKAK, SAYILARLA, DASH };`,
  ctx
);
const { YOKAK, SAYILARLA, DASH } = ctx.__data;

const out = {
  _uyari: 'Bu dosya otomatik uretilir: node tools/build-dashboard-json.js. Elle duzenlemeyin; kaynak dashboard/index.html ve dashboard/yokak-data.js.',
  _uretim: new Date().toISOString(),
  groups: SAYILARLA,
  yokak: { years: YOKAK.years, sections: YOKAK.sections },
  dash: DASH,
};

const dest = path.join(root, 'data/dashboard.json');
fs.writeFileSync(dest, JSON.stringify(out, null, 1) + '\n', 'utf8');

const kb = (fs.statSync(dest).size / 1024).toFixed(1);
console.log(`✓ data/dashboard.json yazildi (${kb} KB)`);
console.log(`  grafik grubu : ${out.groups.length}`);
console.log(`  YOKAK bolumu : ${out.yokak.sections.length}  (${out.yokak.years[0]}-${out.yokak.years.at(-1)})`);
console.log(`  fakulte/birim: ${out.dash.faculties.length}  donem ${out.dash.donem}`);
