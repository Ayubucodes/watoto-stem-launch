import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryVideo } from "@/components/GalleryVideo";

const founderVideo = "https://res.cloudinary.com/dx0ycahag/video/upload/v1777469988/VID-20260429-WA0000_rsriqp.mp4";

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
        <div className="absolute inset-0 bg-gradient-to-br from-[#4347c7]/92 via-[#6367FF]/80 to-[#8ba1ff]/72" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171a46]/55 via-transparent to-[#4a4ecc]/28" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.16),_transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,190,255,0.30),_transparent_48%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_45%)]" />
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl animate-float" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground/80 bg-primary-foreground/10 rounded-full border border-primary-foreground/20">
            About Us
          </span> */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            About Watoto STEM
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            An initiative focused on early STEM exposure for children in Africa.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Who We Are" title="Our Mission" />
          <p className="text-muted-foreground text-lg leading-relaxed text-center -mt-8" dangerouslySetInnerHTML={{ __html: 'Watoto STEM is an initiative focused on introducing children across Tanzania and Africa to science and technology in a <strong>simple, accessible, and engaging</strong> way.' }} />
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 md:py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative animate-fade-up">
              <div className="relative aspect-[8/7] rounded-2xl overflow-hidden shadow-2xl bg-black">
                <GalleryVideo src={founderVideo} />
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
                  I grew up in a home where I was given the freedom to choose what I wanted to pursue in
                  school. From an early age, I was introduced to reading, and naturally, I gravitated toward books
                  and arts based subjects. That path eventually led me to study law.
                </p>
                <p>
                  At the same time, I was fortunate to attend good schools in Tanzania that promoted science and
                  had well equipped laboratories. The exposure was there but by then, I had already chosen my
                  direction.
                </p>
                <p dangerouslySetInnerHTML={{ __html: 'My career later took a different direction into banking, over time, I shifted towards <strong>innovation and technology in the finance sector.</strong> Along the way, I was also influenced by friends I encountered, who had passion for science and technology, which further shaped my perspective. And that\'s when the realization became clear.' }} />
                <p dangerouslySetInnerHTML={{ __html: '<em>If I had been introduced to STEM in a more engaging and practical way earlier, I might have explored it differently.</em>' }} />
                <p dangerouslySetInnerHTML={{ __html: 'Watoto STEM was created from that reflection. The goal is simple: to give African children the opportunity to <strong>experience STEM early</strong>, explore it freely, and grow into it with confidence.' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      {/* <section className="relative section-padding overflow-hidden">
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
      </section> */}
    </div>
  );
}
