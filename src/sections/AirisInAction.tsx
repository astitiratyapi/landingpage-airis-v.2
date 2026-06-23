// ============================================================
// AIRIS PACS — AIRIS in Action (documentation photo grid)
// ============================================================
import { Container, Reveal, SectionTag } from '../components/ui';
import { asset } from '../lib/asset';

export function AirisInAction() {
  const photos = [
    { src: 'assets/action/1.jpg', alt: 'Healthcare professionals gathered around a workstation during an AIRIS PACS hospital trial.' },
    { src: 'assets/action/2.jpg', alt: 'AIRIS team reviewing CT studies on diagnostic monitors with a radiology staff member.' },
    { src: 'assets/action/3.jpg', alt: 'Audience attending an AIRIS PACS benchmarking and demo session.' },
    { src: 'assets/action/4.jpg', alt: 'Engineer configuring AIRIS PACS connectivity beside a hospital CT scanner.' },
    { src: 'assets/action/5.jpg', alt: 'Radiographers and the AIRIS team collaborating at a CT control console.' },
    { src: 'assets/action/6.jpg', alt: 'On-site implementation discussion with hospital radiology staff using AIRIS PACS.' },
  ];
  return (
    <section id="in-action" className="py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
          {/* LEFT — heading + description */}
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <SectionTag>On the Ground</SectionTag>
              <h2 className="mt-4 font-extrabold text-[clamp(1.9rem,3.4vw,2.6rem)] tracking-tight text-ink">
                AIRIS in Action
              </h2>
              <p className="mt-4 text-ink-muted text-[15.5px] leading-relaxed text-pretty">
                Real-world implementation, hospital trials, benchmarking sessions, and collaboration with healthcare
                professionals to continuously improve radiology workflows.
              </p>
            </Reveal>
          </div>
          {/* RIGHT — uniform documentation photo grid */}
          <Reveal delay={120}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {photos.map((p, i) => (
                <figure
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-line-soft shadow-xs group"
                >
                  <img
                    src={asset(p.src)}
                    alt={p.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                  />
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
