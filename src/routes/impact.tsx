import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Users, School, BookOpen, Target, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Watoto STEM" },
      { name: "description", content: "See the impact Watoto STEM is making in Tanzania with STEM education for children." },
      { property: "og:title", content: "Our Impact — Watoto STEM" },
      { property: "og:description", content: "Building meaningful, measurable impact — one school, one group of children at a time." },
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
        <div className="absolute inset-0 gradient-purple opacity-90" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl animate-float" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground/80 bg-primary-foreground/10 rounded-full border border-primary-foreground/20">
            Our Impact
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Our Impact
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We are in the early stages of our journey, but every step we take is intentional. Our focus is to build meaningful, measurable impact — one school, one group of children at a time.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label="By the Numbers" title="Growing Impact" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className="glass-card-purple rounded-2xl p-6 text-center hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
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
      <section className="section-padding gradient-purple-soft">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label="Gallery" title="Moments That Matter" description="Photos, videos, and stories from our work in schools across Tanzania." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-video rounded-2xl bg-primary/10 flex items-center justify-center hover-lift">
                <span className="text-primary/30 text-sm font-medium">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 gradient-purple" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Help Us Reach More Children
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Every contribution brings STEM education closer to another child.
          </p>
          <Link to="/get-involved">
            <Button variant="hero-outline" size="xl">
              Support the Initiative <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
