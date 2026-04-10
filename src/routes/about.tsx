import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import founderImg from "@/assets/founder.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Watoto STEM" },
      { name: "description", content: "Learn about Watoto STEM, our mission to introduce children in Tanzania to science and technology." },
      { property: "og:title", content: "About Watoto STEM" },
      { property: "og:description", content: "Watoto STEM focuses on introducing children across Tanzania and Africa to STEM in a simple, accessible, and engaging way." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-purple opacity-90" />
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl animate-float" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground/80 bg-primary-foreground/10 rounded-full border border-primary-foreground/20">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            About Watoto STEM
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            An initiative focused on early STEM exposure for children in Africa.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-4xl">
          <SectionHeading label="Who We Are" title="Our Mission" />
          <p className="text-muted-foreground text-lg leading-relaxed text-center -mt-8">
            Watoto STEM is an initiative focused on introducing children across Tanzania and Africa to science and technology in a simple, accessible, and engaging way. We believe that every child deserves the opportunity to explore, experiment, and discover the world of STEM — regardless of their background or location.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding gradient-purple-soft">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative animate-fade-up">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={founderImg} alt="Founder of Watoto STEM" className="w-full h-auto object-cover" loading="lazy" width={800} height={1024} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl gradient-purple opacity-30 -z-10" />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">Founder Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Vision Born From Experience
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The idea behind Watoto STEM was born from a simple observation — that many children across Africa grow up without any early interaction with science and technology. Not because they lack curiosity or ability, but because the opportunity never reaches them.
                </p>
                <p>
                  Our founder saw this gap firsthand and believed that if children were introduced to STEM concepts early, in ways that are simple, relatable, and hands-on, it could change the trajectory of their thinking and their futures.
                </p>
                <p>
                  Watoto STEM started with a vision to make that introduction possible — one child, one school, one community at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 gradient-purple" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <SectionHeading
            label="What We Believe"
            title="Exposure Shapes Confidence"
            description="When children are introduced to something early, they are more likely to explore it, understand it, and see themselves in it. We believe that early STEM exposure is the foundation for future innovation across Africa."
            light
          />
        </div>
      </section>
    </div>
  );
}
