import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Lightbulb, School, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — Watoto STEM" },
      { name: "description", content: "Learn how Watoto STEM introduces children to STEM through kits, school visits, and early exposure." },
      { property: "og:title", content: "What We Do — Watoto STEM" },
      { property: "og:description", content: "STEM kits, school visits, and early exposure approach for children in Tanzania." },
    ],
  }),
  component: WhatWeDoPage,
});

function WhatWeDoPage() {
  const services = [
    {
      icon: Lightbulb,
      title: "STEM Kits",
      description: "We donate simple, hands-on STEM kits with advanced technology that allow children to experiment and learn by doing. Each kit is designed to introduce fundamental science and technology concepts in an engaging, accessible way.",
    },
    {
      icon: School,
      title: "School Visits",
      description: "We visit and nurture schools to introduce these kits directly to students in a familiar learning environment. By bringing STEM into the classroom, we meet children where they already are.",
    },
    {
      icon: Sparkles,
      title: "Early Exposure Approach",
      description: "Our focus is not complexity — it is introduction. We aim to spark curiosity that can grow over time. By starting simple, we build familiarity and confidence that lasts.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-purple opacity-90" />
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary-foreground/5 blur-3xl animate-float" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground/80 bg-primary-foreground/10 rounded-full border border-primary-foreground/20">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            What We Do
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Watoto STEM focuses on making STEM simple, accessible, and engaging for children across Tanzania and Africa.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div key={service.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl gradient-purple mb-6">
                    <service.icon size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
                </div>
                <div className={`glass-card-purple rounded-2xl p-12 flex items-center justify-center min-h-[250px] ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <service.icon size={80} className="text-primary/30" />
                </div>
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
            Want to Be Part of This?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Partner with us to expand STEM education across Africa.
          </p>
          <Link to="/get-involved">
            <Button variant="hero-outline" size="xl">
              Get Involved <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
