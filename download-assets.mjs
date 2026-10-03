// Canli siteden resimleri/pdf/mp3'leri public/assets altina indirir.
// Kullanim:  npm run assets
//   ya da:   node download-assets.mjs https://KULLANICI.github.io/portfolio
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';

const base = (process.argv[2] || 'https://zeynepsturan.github.io/portfolio').replace(/\/$/, '');
const files = JSON.parse(readFileSync(new URL('./assets.json', import.meta.url)));
mkdirSync('public/assets', { recursive: true });

let ok = 0;
for (const f of files) {
  const res = await fetch(`${base}/assets/${f}`);
  if (!res.ok) { console.log('YOK  ', f, res.status); continue; }
  writeFileSync(`public/assets/${f}`, Buffer.from(await res.arrayBuffer()));
  console.log('OK   ', f); ok++;
}

// index.html'deki baslik/favicon bilgisini gormek icin canli sayfayi da kaydet
const idx = await fetch(`${base}/`);
if (idx.ok) writeFileSync('live-index.html', await idx.text());
console.log(`\n${ok}/${files.length} dosya indirildi. live-index.html'e bak: <title> ve favicon'u index.html'e tasi.`);
