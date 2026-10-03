import { useRef, useState } from "react";
import { useDrag } from "../hooks/useDrag";

const DOUBLE_CLICK_MS = 300;

export default function DesktopIcon({ icon, title, position, onPositionChange, onOpen }) {
  const [isSelected, setIsSelected] = useState(false);
  const lastClickAt = useRef(0);

  const { isDragging, startDrag, startTouchDrag } = useDrag({
    position,
    onDrag: onPositionChange,
  });

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsSelected(true);
    startDrag(e.clientX, e.clientY);

    const now = Date.now();
    if (now - lastClickAt.current < DOUBLE_CLICK_MS) {
      onOpen();
      lastClickAt.current = 0;
    } else {
      lastClickAt.current = now;
    }
  };

  return (
    <div
      className={`absolute flex flex-col items-center gap-1 p-2 rounded transition-colors cursor-pointer select-none ${
        isSelected ? "bg-white/20" : "hover:bg-white/10"
      }`}
      style={{ left: position.x, top: position.y, width: "80px", touchAction: "none" }}
      onMouseDown={handleMouseDown}
      onTouchStart={startTouchDrag}
      onMouseLeave={() => !isDragging && setIsSelected(false)}
    >
      <div className="pointer-events-none">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      </div>
      <span className="text-white text-xs text-center drop-shadow-lg leading-tight pointer-events-none">
        {title}
      </span>
    </div>
  );
}
