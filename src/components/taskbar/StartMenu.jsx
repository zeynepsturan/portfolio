import { forwardRef } from "react";
import { catPhotos } from "../../data/assets";
import "./scrollbar.css";

const StartMenu = forwardRef(function StartMenu(_props, ref) {
  return (
    <div
      ref={ref}
      id="start-menu"
      role="dialog"
      aria-label="Start menu"
      className="absolute bottom-14 left-3 w-64 h-80 bg-white/30 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-fade-in flex flex-col gap-3 overflow-y-auto custom-scrollbar"
    >
      <h3 className="text-white font-semibold text-lg">🐱 Secret Cat Corner</h3>
      <h1 className="text-white font-semibold mb-1">A few pics of my cats</h1>
      {catPhotos.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`cute cat ${i + 1}`}
          className="rounded-lg shadow h-40 w-full object-cover"
        />
      ))}
    </div>
  );
});

export default StartMenu;
