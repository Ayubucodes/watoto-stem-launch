import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Heart, Handshake, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Watoto STEM" },
      { name: "description", content: "Support Watoto STEM through donations, partnerships, and volunteering for STEM education in Tanzania." },
      { property: "og:title", content: "Get Involved — Watoto STEM" },
      { property: "og:description", content: "Contribute to STEM education for children in Africa." },
    ],
  }),
  component: GetInvolvedPage,
});

function GetInvolvedPage() {
  const cards = [
    {
      icon: Heart,
      title: "Support the Initiative",
      description: "Contribute toward STEM kits and school programs. Every donation helps us reach more children with hands on learning tools.",
      cta: "Donate Now",
    },
    {
      icon: Handshake,
      title: "Partner With Us",
      description: "Collaborate with us to expand our reach and impact. Whether you're an organization, school, or individual there's a role for you.",
      cta: "Become a Partner",
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Be part of our work on the ground. Help us deliver STEM kits, facilitate school sessions, and inspire the next generation.",
      cta: "Join as Volunteer",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-purple opacity-90" />
        <div className="absolute top-10 left-20 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl animate-float" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Get Involved
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Join us in shaping the future of STEM education for children across Africa.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, i) => (
              <div key={card.title} className="glass-card-purple rounded-2xl p-8 flex flex-col hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl gradient-purple mb-6">
                  <card.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">{card.description}</p>
                <div className="mt-6">
                  <Link to="/contact">
                    <Button className="w-full">
                      {card.cta} <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
