// ============================================================
// AIRIS PACS — Benefits
// ============================================================
import { Container, Icon, Reveal, SectionTag } from '../components/ui';
import { BENEFITS } from '../data';

export function Benefits() {
  return (
    <section id="benefits" className="relative navy-grad py-24 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-50"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/15 blur-[120px] rounded-full"></div>
      <Container className="relative">
        <Reveal className="text-center max-w-2xl mx-auto">
          <SectionTag dark>Benefits</SectionTag>
          <h2 className="mt-4 text-white font-extrabold text-[clamp(1.9rem,3.6vw,2.8rem)] tracking-tight">
            Tangible Benefits of AIRIS PACS
          </h2>
          <p className="mt-3 text-white/65 text-[16px]">Future-Proof. AI-Ready. Designed for Impact.</p>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="group h-full rounded-2xl bg-white/[.04] border border-white/10 p-6 hover:bg-white/[.07] hover:border-brand-400/40 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#E86A1A]/15 border border-[#E86A1A]/30 text-[#E86A1A] grid place-items-center mb-5 group-hover:bg-[#E86A1A]/25 transition-colors">
                  <Icon name={b.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold text-[16px] mb-2">{b.title}</h3>
                <p className="text-white/55 text-[13.5px] leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
