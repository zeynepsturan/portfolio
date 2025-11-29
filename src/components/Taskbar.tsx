import { Menu, Play, Pause } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import albumCover from "../components/images/album-cover.png";
import song from "../components/music/song.mp3"
import cat1 from "../components/images/cat1.jpg";
import cat2 from "../components/images/cat2.jpg";
import cat3 from "../components/images/cat3.jpg";

interface TaskbarProps {
  openWindows: Array<{ id: string; title: string }>;
  time: Date;
}

export function Taskbar({ openWindows, time }: TaskbarProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(song));

  const [isStartOpen, setIsStartOpen] = useState(false); // ⭐ START MENU STATE
  const startMenuRef = useRef<HTMLDivElement | null>(null);
  const startButtonRef = useRef<HTMLButtonElement | null>(null);

  const toggleStartMenu = () => setIsStartOpen((prev) => !prev);

  const [currentSong] = useState({
    title: 'imperfect ',
    artist: 'Lofiru',
    cover: albumCover,
  });

  useEffect(() => {
    return () => audio.pause();
  }, [audio]);

  const togglePlay = () => {
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  // KAPATMA: dış tıklama ve Escape tuşu ile
  const handleDocumentClick = useCallback((e: MouseEvent) => {
    const target = e.target as Node;
    if (isStartOpen) {
      if (
        startMenuRef.current &&
        !startMenuRef.current.contains(target) &&
        startButtonRef.current &&
        !startButtonRef.current.contains(target)
      ) {
        setIsStartOpen(false);
      }
    }
  }, [isStartOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);
    return () => document.removeEventListener('mousedown', handleDocumentClick);
  }, [handleDocumentClick]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsStartOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {/* Stil: özel scrollbar (WebKit + Firefox) */}
      <style>{`
        /* WebKit */
        .custom-scrollbar::-webkit-scrollbar { width: 10px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.06));
          border-radius: 999px;
          border: 2px solid rgba(255,255,255,0.06);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.08));
        }

        /* Firefox */
        .custom-scrollbar { scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.16) transparent; }
      `}</style>

      {/* START MENU — açılır kapanır */}
      {isStartOpen && (
        <div
          ref={startMenuRef}
          className="
            absolute bottom-14 left-3
            w-64 h-80
            bg-white/30 backdrop-blur-xl
            border border-white/30
            rounded-2xl p-4
            shadow-[0_0_20px_rgba(255,255,255,0.3)]
            animate-fade-in
            flex flex-col gap-3
            overflow-y-auto
            custom-scrollbar
          "
          role="dialog"
          aria-label="Start menu"
        >
          <h3 className="text-white font-semibold text-lg">🐱 Secret Cat Corner</h3>
          <h1 className="text-white font-semibold mb-1">A few pics of my cats</h1>

          {/* resimlerin yüksekliğini büyüttüm ki overflow oluşsun ve scrollbar belirsin */}
          <img src={cat1} alt="cute cat 1" className="rounded-lg shadow h-40 w-full object-cover" />
          <img src={cat2} alt="cute cat 2" className="rounded-lg shadow h-40 w-full object-cover" />
          <img src={cat3} alt="cute cat 3" className="rounded-lg shadow h-40 w-full object-cover" />
        </div>
      )}

      {/* TASKBAR */}
      <div className="
        absolute bottom-0 left-0 right-0 h-14 
        bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-700
        border-t border-white/20
        flex items-center px-3 gap-3
        shadow-[0_-4px_20px_rgba(168,85,247,0.4)]
      ">
        {/* Start Button */}
        <button
          ref={startButtonRef}
          onClick={toggleStartMenu}   // ⭐ START MENU AÇ/KAPAT
          className="
            bg-white/20 hover:bg-white/30
            backdrop-blur-md
            text-white px-3 py-1 rounded-xl
            flex items-center gap-2
            shadow-md transition-all
          "
          aria-expanded={isStartOpen}
          aria-controls="start-menu"
        >
          <Menu className="w-4 h-4" />
          <span className="font-medium">Start</span>
        </button>

        {/* Open Windows */}
        <div className="flex gap-2 flex-1">
          {openWindows.map(window => (
            <button
              key={window.id}
              className="
                bg-white/15 hover:bg-white/25
                backdrop-blur-md
                text-white px-3 py-1 rounded-xl
                shadow-sm truncate max-w-[120px]
                transition-colors
              "
              title={window.title}
            >
              {window.title}
            </button>
          ))}
        </div>

        {/* Music Player */}
        <div className="
          flex items-center gap-3
          bg-white/25 backdrop-blur-lg
          px-3 py-1 rounded-2xl
          shadow-lg hover:bg-white/30
          transition-all
        ">
          <div className="w-10 h-10 flex-shrink-0 overflow-hidden rounded-xl shadow">
            <img src={currentSong.cover} alt="cover" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-white text-sm font-semibold">{currentSong.title}</span>
            <span className="text-white/80 text-xs">{currentSong.artist}</span>
          </div>

          <button onClick={togglePlay} className="text-white ml-2 hover:scale-110 transition-transform" aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
        </div>

        {/* Clock */}
        <div className="
          bg-white/20 backdrop-blur-md
          px-3 py-1 rounded-xl
          text-white shadow-md
          font-medium
        ">
          {formatTime(time)}
        </div>
      </div>
    </>
  );
}
