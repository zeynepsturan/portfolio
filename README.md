# Portfolio (Windows masaüstü teması) - düzenlenmiş kaynak

`src/` klasörünü projenin `src/` klasörüyle değiştir. Bağımlılıklar: react, lucide-react, tailwindcss.

```
src/
  App.jsx                 masaüstü: ikonlar + pencereler + taskbar
  data/                   TÜM içerik burada (metin, link, ikon yolu)
    cv.js  about.js  projects.js  contacts.js  skills.js  tools.js
    desktop.js  player.js  assets.js  toolSvgIcons.js
  hooks/
    useDrag.js            mouse/dokunmatik sürükleme (ikon + pencere ortak)
    useWindowManager.js   pencere aç/kapat + klasör -> detay eylemleri
    useClock.js  useAudioPlayer.js  useDismiss.js  useCopyToClipboard.js
  components/
    AppWindow.jsx  DesktopIcon.jsx
    taskbar/              Taskbar, StartMenu, MusicPlayer, scrollbar.css
    ui/                   Tag, FolderGrid (+FolderTile)
    windows/              her pencere türü ayrı dosya + index.js (tür -> bileşen kaydı)
```

Ne nerede değişir:
- Proje / CV / iletişim / yetenek ekleme-düzenleme -> `data/` içindeki ilgili dosya
- Yeni pencere türü -> `components/windows/` altına bileşen yaz, `windows/index.js`'e kaydet
- Skills/Tools detay sayfası -> `data/skills.js` içindeki `SKILL_DETAILS`'e veri ekle

## Görseller

`src/data/assets.js` tüm görselleri `import` ile alır; dosyalar `src/assets/` içinde olmalı.
Beklenen dosya adları (build çıktısındaki hash'ler atılmış hali):

- MsSQL.jpg
- PostgreSQL-Light.svg
- Postman.svg
- Zeynep_Sude_Turan_CV.pdf
- about.png
- album-cover.png
- ardunio.jpg
- ardunio.png
- bg.jpg
- cat1.jpg
- cat2.jpg
- cat3.jpg
- contact.png
- cv.png
- db.png
- de.png
- en.png
- func.png
- hw1.png
- hw2.png
- jira.png
- learning.png
- me.jpg
- object.png
- problem.png
- projects.png
- pyed.jpg
- pyed.png
- skills.png
- song.mp3
- team.png
- testing.png
- tools.png
- vers.png
- visicalc.jpg
- visicalc.png
- website.jpg
- website.png
- wordle.jpg
- wordle.png

Senin dosya adların farklıysa sadece `assets.js`'teki ilgili import satırını düzelt.
