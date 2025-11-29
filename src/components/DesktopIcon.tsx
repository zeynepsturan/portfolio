import { useState, useEffect } from 'react';

interface DesktopIconProps {
  icon: string; // URL olacak
  title: string;
  onClick: () => void;
  position: { x: number; y: number };
  onPositionChange: (position: { x: number; y: number }) => void;
}

export function DesktopIcon({ icon, title, onClick, position, onPositionChange }: DesktopIconProps) {
  const [isSelected, setIsSelected] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [clickTime, setClickTime] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSelected(true);
    setIsDragging(true);

    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });

    const now = Date.now();
    if (now - clickTime < 300) {
      onClick();
      setClickTime(0);
    } else {
      setClickTime(now);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      onPositionChange({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  return (
    <div
      className={`absolute flex flex-col items-center gap-1 p-2 rounded transition-colors cursor-pointer select-none ${
        isSelected ? 'bg-white/20' : 'hover:bg-white/10'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '80px'
      }}
      onMouseDown={handleMouseDown}
      onMouseLeave={() => !isDragging && setIsSelected(false)}
    >
      <div className="pointer-events-none">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"   // aynı boyut
        />
      </div>

      <span className="text-white text-xs text-center drop-shadow-lg leading-tight pointer-events-none">
        {title}
      </span>
    </div>
  );
}
