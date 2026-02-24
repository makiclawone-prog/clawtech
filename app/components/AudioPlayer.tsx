"use client";

import { useState, useRef, useEffect } from "react";

export default function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      setDuration(audio.duration);
      setIsLoaded(true);
    };
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const value = Number(e.target.value);
    audio.currentTime = value;
    setCurrentTime(value);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const value = Number(e.target.value);
    audio.volume = value;
    setVolume(value);
  };

  const skip = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min(duration, audio.currentTime + seconds));
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00";
    const m = Math.floor(time / 60).toString().padStart(2, "0");
    const s = Math.floor(time % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="relative">
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Player container */}
      <div className="relative bg-[#0a0a1e] border border-[#1a1a3e] rounded-2xl p-5 md:p-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00ff9410] via-transparent to-[#0af0ff08] pointer-events-none" />

        {/* Top bar */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            {/* Animated equalizer bars */}
            <div className="flex items-end gap-[3px] h-6">
              {[4, 7, 3, 6, 5, 8, 2, 7, 4, 6].map((h, i) => (
                <div
                  key={i}
                  className="w-[3px] rounded-sm"
                  style={{
                    height: `${isPlaying ? h * 3 : 6}px`,
                    backgroundColor: "#00ff94",
                    transition: "height 0.1s ease",
                    animation: isPlaying ? `equalizerBar${i % 3} ${0.4 + i * 0.05}s ease-in-out infinite alternate` : "none",
                    boxShadow: isPlaying ? "0 0 6px rgba(0,255,148,0.8)" : "none",
                  }}
                />
              ))}
            </div>
            <span className="font-mono text-xs text-[#8892b0] tracking-widest uppercase">
              Áudio · Ed. 23/02/2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: isPlaying ? "#00ff94" : "#4a5278",
                boxShadow: isPlaying ? "0 0 8px #00ff94" : "none",
                transition: "all 0.3s",
              }}
            />
            <span className="font-mono text-xs" style={{ color: isPlaying ? "#00ff94" : "#4a5278" }}>
              {isPlaying ? "AO VIVO" : "PAUSADO"}
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-5">
          <h3
            className="font-orbitron text-base md:text-lg font-bold text-white leading-tight"
          >
            Jornal Tech do Claw
          </h3>
          <p className="font-mono text-xs text-[#8892b0] mt-1">
            Edição Especial · Segunda-feira · 23 fev 2026
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-4 relative">
          <div className="relative h-2 bg-[#1a1a3e] rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full rounded-full transition-all duration-100"
              style={{
                width: `${progressPercent}%`,
                background: "linear-gradient(90deg, #00ff94, #0af0ff)",
                boxShadow: "0 0 8px rgba(0,255,148,0.6)",
              }}
            />
          </div>
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
          />
        </div>

        {/* Time */}
        <div className="flex justify-between mb-5">
          <span className="font-mono text-xs text-[#8892b0]">{formatTime(currentTime)}</span>
          <span className="font-mono text-xs text-[#8892b0]">{formatTime(duration)}</span>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Skip back */}
            <button
              onClick={() => skip(-15)}
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-[#1a1a3e] text-[#8892b0] hover:text-[#0af0ff] hover:border-[#0af0ff] transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
                <text x="9" y="15" fontSize="5" fontFamily="monospace" fill="currentColor">15</text>
              </svg>
            </button>

            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="flex items-center justify-center w-14 h-14 rounded-full transition-all duration-200"
              style={{
                background: isPlaying
                  ? "linear-gradient(135deg, #00ff94, #0af0ff)"
                  : "linear-gradient(135deg, #00ff94, #0af0ff)",
                boxShadow: "0 0 20px rgba(0,255,148,0.4), 0 0 40px rgba(0,255,148,0.2)",
              }}
            >
              {isPlaying ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#04040f">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#04040f" style={{ marginLeft: "2px" }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Skip forward */}
            <button
              onClick={() => skip(30)}
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-[#1a1a3e] text-[#8892b0] hover:text-[#0af0ff] hover:border-[#0af0ff] transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z"/>
                <text x="9" y="15" fontSize="5" fontFamily="monospace" fill="currentColor">30</text>
              </svg>
            </button>
          </div>

          {/* Volume */}
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#8892b0">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
            </svg>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={volume}
              onChange={handleVolume}
              className="w-20 h-1 cursor-pointer accent-[#00ff94]"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes equalizerBar0 {
          0% { height: 4px; }
          100% { height: 18px; }
        }
        @keyframes equalizerBar1 {
          0% { height: 8px; }
          100% { height: 22px; }
        }
        @keyframes equalizerBar2 {
          0% { height: 6px; }
          100% { height: 14px; }
        }
      `}</style>
    </div>
  );
}
