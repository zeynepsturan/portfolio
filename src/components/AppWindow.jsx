import { useState } from "react";
import { Minus, Square, X } from "lucide-react";
import { useDrag } from "../hooks/useDrag";
import { WINDOW_VIEWS } from "./windows";

const MOBILE_BREAKPOINT = 768;

const CONTROL_BUTTON = "w-6 h-6 rounded flex items-center justify-center";

export default function AppWindow({
  title,
  type,
  data,
  index,
  actions,
  isActive,
  onFocus,
  onClose,
}) {
  const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({
    x: isMobile ? 10 : 120 + index * 40,
    y: isMobile ? 10 : 80 + index * 40,
  });

  const clampPosition = (nextPosition) => {
    const width = isMobile ? window.innerWidth * 0.92 : 700;
    const height = isMobile ? window.innerHeight * 0.8 : 500;
    const visibleOffset = 120;
    const minX = -(width - visibleOffset);
    const maxX = window.innerWidth - visibleOffset;
    const minY = -(height - visibleOffset);
    const maxY = window.innerHeight - 56 - visibleOffset;

    return {
      x: Math.min(Math.max(nextPosition.x, minX), maxX),
      y: Math.min(Math.max(nextPosition.y, minY), maxY),
    };
  };

  const { startDrag, startTouchDrag } = useDrag({
    position,
    onDrag: (nextPosition) => setPosition(clampPosition(nextPosition)),
    disabled: isMaximized,
  });

  const beginDragFromWindow = (clientX, clientY) => {
    onFocus?.();
    startDrag(clientX, clientY);
  };

  const beginTouchDragFromWindow = (event) => {
    onFocus?.();
    startTouchDrag(event);
  };

  const View = WINDOW_VIEWS[type];

  const frameStyle = isMaximized
    ? {}
    : {
        left: position.x,
        top: position.y,
        width: isMobile ? "92vw" : "700px",
        height: isMobile ? "80vh" : "500px",
        maxWidth: "95vw",
        maxHeight: "85vh",
        zIndex: isActive ? 50 : 10 + index,
      };

  return (
    <div
      className={`absolute bg-gray-100 rounded-lg shadow-2xl overflow-hidden border-2 border-gray-300 ${
        isMaximized ? "inset-4 bottom-16" : ""
      }`}
      style={frameStyle}
      onMouseDown={(e) => {
        if (e.target.closest("button")) return;
        beginDragFromWindow(e.clientX, e.clientY);
      }}
      onTouchStart={(e) => {
        if (e.target.closest("button")) return;
        beginTouchDragFromWindow(e);
      }}
    >
      <div
        className="bg-gradient-to-r from-purple-500 to-purple-600 px-2 py-1 flex items-center justify-between cursor-move select-none"
        style={{ touchAction: "none" }}
      >
        <span className="text-white ml-2">{title}</span>
        <div className="flex gap-1">
          <button className={`${CONTROL_BUTTON} bg-gray-300`}>
            <Minus className="w-4 h-4" />
          </button>
          <button
            className={`${CONTROL_BUTTON} bg-gray-300`}
            onClick={() => {
              onFocus?.();
              setIsMaximized(!isMaximized);
            }}
          >
            <Square className="w-3 h-3" />
          </button>
          <button
            className={`${CONTROL_BUTTON} bg-fuchsia-500 hover:bg-red-600`}
            onClick={onClose}
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      <div className="h-full overflow-auto pb-12 bg-white">
        {View && <View data={data} actions={actions} />}
      </div>
    </div>
  );
}
