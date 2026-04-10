import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Lightbulb, School, Sparkles, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-stem.jpg";
import realityImg from "@/assets/reality-section.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Watoto STEM | STEM Education for Children in Tanzania" },
      { name: "description", content: "Watoto STEM introduces children in Tanzania to science and technology through hands-on learning and early exposure initiatives." },
      { name: "keywords", content: "STEM education in Tanzania, STEM for children Africa, Education charity Tanzania, Technology education Africa" },
      { property: "og:title", content: "Watoto STEM | STEM Education for Children in Tanzania" },
      { property: "og:description", content: "Watoto STEM introduces children in Tanzania to science and technology through hands-on learning and early exposure initiatives." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="African children learning STEM" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 gradient-purple opacity-85" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
        </div>
        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary-foreground/5 blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-pink-soft/10 blur-3xl animate-pulse-soft" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block mb-6 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground/80 bg-primary-foreground/10 rounded-full border border-primary-foreground/20 backdrop-blur-sm">
              STEM Education in Tanzania
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight tracking-tight">
              Raising Africa's Next Generation of Thinkers, Builders, and Problem Solvers Through STEM.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              We introduce children to science and technology at a young age through simple, hands-on STEM kits that spark curiosity and open possibilities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/get-involved">
                <Button variant="hero" size="xl">
                  Support a Child <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Reality */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <SectionHeading
                label="The Reality"
                title="Access, Not Ability, Is the Barrier"
              />
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed -mt-8">
                Many children across Africa grow up without early exposure to science and technology — not because they lack ability, but because they lack access. By the time they encounter it, it often feels distant or difficult to engage with.
              </p>
            </div>
            <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={realityImg} alt="Children learning with STEM kits in Tanzania" className="w-full h-auto object-cover" loading="lazy" width={1280} height={720} />
                <div className="absolute inset-0 gradient-purple opacity-20 rounded-2xl" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl gradient-purple-soft opacity-60 -z-10" />
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-2xl gradient-purple-soft opacity-40 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding gradient-purple-soft">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="What We Do"
            title="Simple Tools. Big Possibilities."
            description="Watoto STEM introduces children to science, technology, engineering, and mathematics through simple, practical tools and guided experiences. We focus on early exposure — creating familiarity, confidence, and curiosity from a young age."
          />
          <div className="mt-8">
            <Link to="/what-we-do" className="flex items-center justify-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Learn more about our approach <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="How We Do It"
            title="Three Pillars of Impact"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: "STEM Kits", desc: "Hands-on learning tools designed to spark curiosity and let children experiment with science and technology." },
              { icon: School, title: "School Engagements", desc: "We work directly with schools to reach children where they are, making STEM accessible in familiar environments." },
              { icon: Sparkles, title: "Early Exposure", desc: "We introduce concepts in a simple, relatable way — building familiarity and confidence from a young age." },
            ].map((item, i) => (
              <div key={item.title} className="glass-card-purple rounded-2xl p-8 hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl gradient-purple mb-6">
                  <item.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 gradient-purple" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-pink-soft/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <SectionHeading
            label="Why It Matters"
            title="The Future Is Being Shaped by Technology"
            description="When children are exposed to it early, they don't just adapt to it — they grow into it with confidence. Technology education in Africa starts with early, meaningful access."
            light
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            If We Want to Prepare the Next Generation, We Have to Start Earlier.
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join us in introducing STEM education for children across Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-involved">
              <Button size="xl">Get Involved</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="xl">Support the Initiative</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
