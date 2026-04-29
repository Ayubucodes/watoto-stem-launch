import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Users, School, BookOpen, Target, ArrowRight, Play, Pause, Rewind, FastForward, Maximize } from "lucide-react";
import pic1 from "@/assets/pic1.jpeg";
import pic2 from "@/assets/pic2.jpeg";

const video1 = "https://res.cloudinary.com/dx0ycahag/video/upload/v1776938707/video1_w7phbr.mp4";
const video2 = "https://res.cloudinary.com/dx0ycahag/video/upload/v1777469988/VID-20260429-WA0000_rsriqp.mp4";

function GalleryVideo({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  function toggle() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setHasStarted(true);
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
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

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Watoto STEM" },
      { name: "description", content: "See the impact Watoto STEM is making in Tanzania with STEM education for children." },
      { property: "og:title", content: "Our Impact — Watoto STEM" },
      { property: "og:description", content: "Building meaningful, measurable impact one school, one group of children at a time." },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  const stats = [
    { icon: Users, label: "Children Reached", value: "500+", desc: "and growing" },
    { icon: School, label: "Schools Visited", value: "10+", desc: "across Tanzania" },
    { icon: BookOpen, label: "STEM Kits Donated", value: "200+", desc: "hands-on tools" },
    { icon: Target, label: "Programs Run", value: "15+", desc: "engagements" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4347c7]/92 via-[#6367FF]/80 to-[#8ba1ff]/72" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171a46]/55 via-transparent to-[#4a4ecc]/28" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.16),_transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,190,255,0.30),_transparent_48%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_45%)]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl animate-float" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Our Impact
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We are in the early stages of our journey, but every step we take is intentional. Our focus is to build meaningful, measurable impact one school, one group of children at a time.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="By the Numbers" title="Growing Impact" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className="glass-card-purple rounded-2xl p-6 text-cupenter hover-lift animate-fade-" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-purple mx-auto mb-4">
                  <stat.icon size={22} className="text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient-purple">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground mt-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Gallery" title="Moments That Matter" description="Photos, videos, and stories from our work in schools across Tanzania." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { type: "image", src: pic1 },
              { type: "video", src: video1 },
              { type: "image", src: pic2 },
              { type: "image", src: pic2 },
              { type: "image", src: pic1 },
              { type: "video", src: video2 },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative aspect-video rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-black"
              >
                {item.type === "video" ? (
                  <GalleryVideo src={item.src} />
                ) : (
                  <img
                    src={item.src}
                    alt="Watoto STEM gallery"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
