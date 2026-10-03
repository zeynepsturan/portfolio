import { useState } from "react";
import { DESKTOP_ICONS } from "./data/desktop";
import { wallpaper } from "./data/assets";
import { useClock } from "./hooks/useClock";
import { useWindowManager } from "./hooks/useWindowManager";
import DesktopIcon from "./components/DesktopIcon";
import AppWindow from "./components/AppWindow";
import Taskbar from "./components/taskbar/Taskbar";

const initialIconPositions = Object.fromEntries(
  DESKTOP_ICONS.map(({ id, position }) => [id, position]),
);

function WelcomeBanner() {
  return (
    <div className="absolute inset-0 bg-black/30 pointer-events-none">
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-5xl md:text-6xl font-bold animate-bounce">
          This is my Portfolio
        </h1>
        <p className="text-white/80 mt-4 text-lg md:text-2xl max-w-xl">
          Explore my Windows desktop inspired website where you can open projects, check my
          coding experiments, and find out more about my programming journey. Enjoy!
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const now = useClock();
  const { windows, openWindow, closeWindow, actions } = useWindowManager();
  const [iconPositions, setIconPositions] = useState(initialIconPositions);
  const [activeWindowId, setActiveWindowId] = useState(null);

  const moveIcon = (id, position) =>
    setIconPositions((positions) => ({ ...positions, [id]: position }));

  const handleOpenWindow = (windowData) => {
    openWindow(windowData);
    setActiveWindowId(windowData.id);
  };

  const handleCloseWindow = (id) => {
    closeWindow(id);
    setActiveWindowId((current) => (current === id ? null : current));
  };

  const handleSelectWindow = (id) => {
    setActiveWindowId(id);
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden bg-cover bg-center relative"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <WelcomeBanner />

      {DESKTOP_ICONS.map(({ id, title, icon, windowType }) => (
        <DesktopIcon
          key={id}
          icon={icon}
          title={title}
          position={iconPositions[id]}
          onPositionChange={(position) => moveIcon(id, position)}
          onOpen={() => handleOpenWindow({ id, title, type: windowType })}
        />
      ))}

      {windows.map((win, index) => (
        <AppWindow
          key={win.id}
          index={index}
          title={win.title}
          type={win.type}
          data={win.data}
          actions={actions}
          isActive={activeWindowId === win.id}
          onFocus={() => setActiveWindowId(win.id)}
          onClose={() => handleCloseWindow(win.id)}
        />
      ))}

      <Taskbar
        openWindows={windows}
        activeWindowId={activeWindowId}
        onSelectWindow={handleSelectWindow}
        time={now}
      />
    </div>
  );
}
