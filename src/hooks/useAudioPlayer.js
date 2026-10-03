import { useEffect, useRef, useState } from "react";

export function useAudioPlayer(src) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audioRef.current = audio;
    return () => audio.pause();
  }, [src]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  return { isPlaying, toggle };
}
