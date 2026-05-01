import { useRef, useState } from "react";
import { Play, Pause, Rewind, FastForward, Maximize } from "lucide-react";

export function GalleryVideo({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  function toggle() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      if (!hasStarted) {
        v.currentTime = 0;
      }
      v.play();
      setHasStarted(true);
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  function handleLoadedMetadata() {
    const v = videoRef.current;
    if (!v || hasStarted) return;
    if (v.duration && isFinite(v.duration)) {
      try {
        v.currentTime = v.duration / 2;
      } catch {
        // ignore if seeking not yet available
      }
    }
  }

  function seekBy(seconds: number) {
    const v = videoRef.current;
    if (!v) return;
    const nextTime = Math.max(0, Math.min(v.duration || Infinity, v.currentTime + seconds));
    v.currentTime = nextTime;
  }

  async function toggleFullscreen() {
    const container = containerRef.current;
    if (!container) return;

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    if (container.requestFullscreen) {
      await container.requestFullscreen();
    }
  }

  return (
    <div ref={containerRef} className="relative h-full w-full">
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full object-cover"
        playsInline
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={() => {
          setPlaying(true);
          setHasStarted(true);
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      {/* Overlay: visible when paused */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing ? "opacity-0 pointer-events-none" : "opacity-100 bg-black/30"}`}>
        <div className="flex h-16 w-16 items-center justify-center rounded-full gradient-purple shadow-2xl shadow-primary/50 ring-4 ring-primary-foreground/30 transition-transform duration-200 hover:scale-110">
          <button
            type="button"
            aria-label="Play video"
            onClick={toggle}
            className="flex h-full w-full items-center justify-center"
          >
            <Play size={28} className="text-primary-foreground ml-1" />
          </button>
        </div>
      </div>

      <div
        className={`pointer-events-none absolute bottom-3 right-3 z-10 flex items-center gap-2 transition-opacity duration-300 ${hasStarted ? "opacity-100" : "opacity-0"
          }`}
      >
        <button
          type="button"
          aria-label={playing ? "Pause video" : "Play video"}
          onClick={toggle}
          className="pointer-events-auto rounded-full bg-black/55 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
        >
          {playing ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <button
          type="button"
          aria-label="Rewind 10 seconds"
          onClick={() => seekBy(-10)}
          className="pointer-events-auto rounded-full bg-black/55 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
        >
          <Rewind size={16} />
        </button>
        <button
          type="button"
          aria-label="Forward 10 seconds"
          onClick={() => seekBy(10)}
          className="pointer-events-auto rounded-full bg-black/55 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
        >
          <FastForward size={16} />
        </button>
        <button
          type="button"
          aria-label="Toggle fullscreen"
          onClick={toggleFullscreen}
          className="pointer-events-auto rounded-full bg-black/55 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
        >
          <Maximize size={16} />
        </button>
      </div>
    </div>
  );
}
