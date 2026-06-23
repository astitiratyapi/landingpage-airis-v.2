// ============================================================
// AIRIS PACS — Core Modules bento + AI Solutions
// ============================================================
import { Container, Icon, Reveal, SectionTag } from '../components/ui';
import { MODULES, type Module } from '../data';
import { asset } from '../lib/asset';

export function Modules() {
  return (
    <section id="modules" className="py-24 bg-white">
      <Container>
        <Reveal className="text-center max-w-2xl mx-auto">
          <SectionTag>Our Modules</SectionTag>
          <h2 className="mt-4 font-extrabold text-[clamp(1.9rem,3.6vw,2.8rem)] tracking-tight text-ink">Core Modules</h2>
          <p className="mt-4 text-ink-muted text-[16px] leading-relaxed">
            Three modules working as one to modernize your hospital's radiology.
          </p>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-5 auto-rows-[1fr]">
          {MODULES.map((m, i) => (
            <Reveal key={m.name} delay={i * 80} className={m.span === 'lg' ? 'md:col-span-2' : 'md:col-span-1'}>
              <ModuleCard m={m} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ModuleCard({ m }: { m: Module }) {
  const wide = m.span === 'lg';
  return (
    <article className="group relative h-full rounded-2xl border border-line bg-white p-7 shadow-card hover:shadow-lift hover:border-brand-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* faint module illustration — anchored bottom-right, away from text */}
      {m.img && (
        <img
          src={asset(m.img)}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none select-none absolute bottom-0 right-0 w-[60%] h-[64%] object-cover opacity-[0.42] group-hover:opacity-[0.6] transition-opacity duration-500"
          style={{
            WebkitMaskImage: 'linear-gradient(135deg, transparent 34%, #000 92%)',
            maskImage: 'linear-gradient(135deg, transparent 34%, #000 92%)',
          }}
        />
      )}
      <div className="relative flex items-center justify-between mb-6">
        <span className="text-[10px] font-bold tracking-[.14em] uppercase text-accent bg-accent-soft px-2.5 py-1 rounded-full">
          {m.badge}
        </span>
      </div>
      <h3 className="relative font-bold text-xl text-ink mb-2">{m.name}</h3>
      <p className="relative text-ink-muted text-[14.5px] leading-relaxed mb-5 max-w-md">{m.desc}</p>
      <ul className={`relative grid gap-x-6 gap-y-2.5 ${wide ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
        {m.points.map((p) => (
          <li key={p} className="flex items-center gap-2.5 text-[13.5px] text-ink-muted">
            <span className="w-5 h-5 rounded-full bg-brand-50 grid place-items-center shrink-0">
              <Icon name="check" className="w-3 h-3 text-brand" stroke={3} />
            </span>
            {p}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function AISolutions() {
  return (
    <section id="ai-solutions" className="py-24 bg-line-soft">
      <Container>
        <Reveal className="text-center max-w-2xl mx-auto">
          <SectionTag>AI Solutions</SectionTag>
          <h2 className="mt-4 font-extrabold text-[clamp(1.9rem,3.6vw,2.8rem)] tracking-tight text-ink">
            AI Solutions for Medical Imaging
          </h2>
          <p className="mt-4 text-ink-muted text-[16px] leading-relaxed text-pretty">
            Advanced AI models designed to assist radiologists with faster prioritization, automated measurements, and
            intelligent clinical insights across multiple imaging modalities.
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-12 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden">
            <img
              src={asset('assets/ai-solutions.png')}
              alt="AIRIS AI Solutions for medical imaging: Brain CT, Chest X-Ray, Thorax CT, and Abdomen CT with auto segmentation and urgency scoring, developed with Universitas Indonesia."
              className="block w-full h-auto select-none"
              draggable={false}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
