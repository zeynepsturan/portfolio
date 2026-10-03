import { useEffect, useRef, useState } from "react";

/**
 * Mouse + dokunmatik sürükleme.
 * `position` mevcut konum, `onDrag({x, y})` yeni konumu bildirir.
 * Kullanım: onMouseDown -> startDrag(x, y), onTouchStart -> startTouchDrag(e)
 */
export function useDrag({ position, onDrag, disabled = false }) {
  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });
  const onDragRef = useRef(onDrag);
  onDragRef.current = onDrag;

  const startDrag = (clientX, clientY) => {
    if (disabled) return;
    offset.current = { x: clientX - position.x, y: clientY - position.y };
    setIsDragging(true);
  };

  const startTouchDrag = (e) => {
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);
  };

  useEffect(() => {
    if (!isDragging) return;

    const moveTo = (clientX, clientY) =>
      onDragRef.current({ x: clientX - offset.current.x, y: clientY - offset.current.y });
    const handleMouseMove = (e) => moveTo(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      moveTo(touch.clientX, touch.clientY);
    };
    const stop = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stop);
    };
  }, [isDragging]);

  return { isDragging, startDrag, startTouchDrag };
}
