import { Pause, Play } from "lucide-react";
import { useAudioPlayer } from "../../hooks/useAudioPlayer";
import { CURRENT_TRACK as track } from "../../data/player";

export default function MusicPlayer() {
  const { isPlaying, toggle } = useAudioPlayer(track.src);

  return (
    <div className="flex items-center gap-3 bg-white/25 backdrop-blur-lg px-3 py-1 rounded-2xl shadow-lg hover:bg-white/30 transition-all">
      <div className="w-10 h-10 flex-shrink-0 overflow-hidden rounded-xl shadow">
        <img src={track.cover} alt="cover" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-white text-sm font-semibold">{track.title}</span>
        <span className="text-white/80 text-xs">{track.artist}</span>
      </div>
      <button
        onClick={toggle}
        className="text-white ml-2 hover:scale-110 transition-transform"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>
    </div>
  );
}
