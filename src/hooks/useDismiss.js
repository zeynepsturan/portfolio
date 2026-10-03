import { useEffect } from "react";

/** `open` iken, ref'lerin dışına tıklanınca veya Escape'e basılınca `onClose` çağırır. */
export function useDismiss({ open, onClose, refs }) {
  useEffect(() => {
    const handleMouseDown = (e) => {
      if (!open) return;
      const insideAny = refs.some((ref) => ref.current?.contains(e.target));
      if (!insideAny) onClose();
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose, refs]);
}
