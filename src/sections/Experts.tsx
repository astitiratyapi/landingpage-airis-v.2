// ============================================================
// AIRIS PACS — Meet Our Experts
// ============================================================
import { Container, Reveal, SectionTag } from '../components/ui';
import { EXPERTS } from '../data';
import { asset } from '../lib/asset';

export function Experts() {
  return (
    <section id="experts" className="py-24 bg-line-soft">
      <Container>
        <Reveal className="text-center max-w-2xl mx-auto">
          <SectionTag>Our Team</SectionTag>
          <h2 className="mt-4 font-extrabold text-[clamp(1.9rem,3.6vw,2.8rem)] tracking-tight text-ink">
            Meet Our Experts
          </h2>
          <p className="mt-4 text-ink-muted text-[16px]">
            Behind every great innovation is a team with vision. Our experts bring together clinical excellence,
            cutting-edge AI research, and product leadership to deliver imaging solutions that truly understand the needs
            of Indonesian healthcare.
          </p>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {EXPERTS.map((e, i) => (
            <Reveal key={e.name} delay={i * 90}>
              <article className="group flex flex-col items-center text-center h-full rounded-2xl bg-white border border-line shadow-card hover:shadow-lift hover:-translate-y-1 transition-all duration-300 p-8">
                {/* circular portrait */}
                <div className="relative w-36 h-36 rounded-full overflow-hidden ring-4 ring-brand-50 shadow-sm">
                  <img
                    src={asset(e.photo)}
                    alt={e.name}
                    className="absolute inset-0 w-full h-full object-cover object-center select-none transition-transform duration-500 group-hover:scale-[1.04]"
                    draggable={false}
                  />
                </div>
                {/* text block */}
                <h3 className="text-ink font-bold text-[18px] leading-snug mt-6">{e.name}</h3>
                <p className="text-brand-500 text-[13px] font-semibold mt-1.5">{e.tag}</p>
                <p className="text-ink-muted text-[13.5px] leading-relaxed mt-4">{e.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
