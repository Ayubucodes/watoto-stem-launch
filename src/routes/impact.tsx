import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Users, School, BookOpen, Target, ArrowRight } from "lucide-react";
import pic1 from "@/assets/pic1.jpeg";
import pic2 from "@/assets/pic2.jpeg";
import video1 from "@/assets/video1.mp4";

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
      {/* Heero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-purple opacity-90" />
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
              { type: "image", src: pic2 },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative aspect-video rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-black"
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster={pic1}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt="Watoto STEM gallery"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
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
