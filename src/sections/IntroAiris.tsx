// ============================================================
// AIRIS PACS — Intro + Partners strip
// ============================================================
import { Container, Reveal, SectionTag } from '../components/ui';
import { PARTNERS } from '../data';
import { asset } from '../lib/asset';

export function IntroAiris() {
  return (
    <section id="intro" className="relative navy-grad-soft pt-24 pb-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[.28] pointer-events-none"
        style={{ backgroundImage: `url(${asset('assets/xray-pattern.png')})` }}
      ></div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(72% 82% at 50% 45%, rgba(9,22,64,.9) 0%, rgba(9,22,64,.72) 52%, rgba(9,22,64,.5) 100%)',
        }}
      ></div>
      <div className="absolute inset-0 grid-lines opacity-40"></div>
      <Container className="relative">
        <Reveal className="max-w-2xl mx-auto text-center">
          <SectionTag dark>What is AIRIS PACS</SectionTag>
          <h2 className="mt-4 text-white font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-tight">AIRIS PACS</h2>
          <p className="mt-2 text-brand-200 font-semibold text-lg">One Platform for All Digital Radiology Needs</p>
          <p className="mt-5 text-white/65 text-[15px] leading-relaxed text-pretty">
            AIRIS PACS is a modern, scalable, web-based AI-ready PACS system (including RIS, worklist, and viewer)
            designed for seamless integration with Indonesian hospital radiology devices (modalities) and Hospital
            Information Systems (SIMRS).
          </p>
          <p className="mt-4 text-white/80 text-[15.5px] leading-relaxed text-pretty">
            Built on open-source technology, it offers long-term cost efficiency and flexibility for ongoing and future
            developments.
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-14 max-w-2xl mx-auto text-center">
          <p className="text-brand-200 font-bold text-[12px] uppercase tracking-[.18em]">Our Partners</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="h-24 w-56 rounded-2xl border border-white/10 bg-white grid place-items-center px-8 shadow-card"
              >
                <img
                  src={asset(p.logo)}
                  alt={p.name}
                  className="max-h-12 max-w-[80%] w-auto object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
