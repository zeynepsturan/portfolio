import { useCallback, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { useDismiss } from "../../hooks/useDismiss";
import StartMenu from "./StartMenu";
import MusicPlayer from "./MusicPlayer";

const formatTime = (date) =>
  date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });

export default function Taskbar({ openWindows, activeWindowId, onSelectWindow, time }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const startButtonRef = useRef(null);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useDismiss({ open: isMenuOpen, onClose: closeMenu, refs: [menuRef, startButtonRef] });

  return (
    <>
      {isMenuOpen && <StartMenu ref={menuRef} />}

      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-700 border-t border-white/20 flex items-center px-3 gap-3 shadow-[0_-4px_20px_rgba(168,85,247,0.4)]">
        <button
          ref={startButtonRef}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-3 py-1 rounded-xl flex items-center gap-2 shadow-md transition-all"
          aria-expanded={isMenuOpen}
          aria-controls="start-menu"
        >
          <Menu className="w-4 h-4" />
          <span className="font-medium">Start</span>
        </button>

        <div className="flex gap-2 flex-1">
          {openWindows.map((win) => (
            <button
              key={win.id}
              title={win.title}
              onClick={() => onSelectWindow?.(win.id)}
              className={`backdrop-blur-md text-white px-3 py-1 rounded-xl shadow-sm truncate max-w-[120px] transition-colors ${
                activeWindowId === win.id
                  ? "bg-white/30 ring-1 ring-white/50"
                  : "bg-white/15 hover:bg-white/25"
              }`}
            >
              {win.title}
            </button>
          ))}
        </div>

        <MusicPlayer />

        <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-xl text-white shadow-md font-medium">
          {formatTime(time)}
        </div>
      </div>
    </>
  );
}
