// ============================================================
// AIRIS PACS — Key Highlights
// ============================================================
import { Container, Icon, Reveal, SectionTag } from '../components/ui';
import { HIGHLIGHTS } from '../data';
import { asset } from '../lib/asset';

export function Highlights() {
  return (
    <section id="highlights" className="py-24 bg-line-soft">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT — heading + description + device mockup */}
          <div>
            <Reveal>
              <SectionTag>Why AIRIS</SectionTag>
              <h2 className="mt-4 font-extrabold text-[clamp(1.9rem,3.4vw,2.6rem)] tracking-tight text-ink">
                Key Highlights of AIRIS PACS
              </h2>
              <p className="mt-4 text-ink-muted text-[15.5px] leading-relaxed">
                AIRIS PACS is designed with a modular and hardware-independent architecture, allowing hospitals to deploy
                the system using existing infrastructure or upgrade gradually based on their needs and scale.
              </p>
            </Reveal>

            {/* device mockup — laptop only */}
            <Reveal delay={120}>
              <div className="relative mt-12 sm:mt-14">
                <div className="absolute -inset-6 bg-brand-100/45 blur-3xl rounded-full pointer-events-none"></div>
                <div className="relative flex items-end justify-center">
                  {/* LAPTOP */}
                  <div className="w-full max-w-[520px]">
                    <div className="relative rounded-t-xl bg-gradient-to-b from-[#2a3142] to-[#10141d] p-[9px] border border-black/20 shadow-lift">
                      <div className="rounded-md overflow-hidden bg-black ring-1 ring-white/10 aspect-[2880/1574]">
                        <img
                          src={asset('assets/airis-viewer-img.png')}
                          alt="AIRIS Viewer on desktop"
                          className="block w-full h-full object-cover object-top select-none"
                          draggable={false}
                        />
                      </div>
                    </div>
                    <div className="relative mx-auto h-[14px] w-[112%] -ml-[6%] rounded-b-xl bg-gradient-to-b from-[#cad0db] to-[#9098a8] shadow-[0_12px_22px_-8px_rgba(0,0,0,.5)]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[6px] rounded-b-lg bg-[#7c8494]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — 7 key highlights */}
          <div className="lg:pt-2 space-y-5">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={i * 70}>
                <div className="flex gap-4">
                  <span className="w-10 h-10 rounded-xl bg-white border border-line text-[#E86A1A] grid place-items-center shrink-0 shadow-xs">
                    <Icon name={h.icon} className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink text-[15.5px]">{h.title}</h3>
                    <p className="text-ink-muted text-[14px] leading-relaxed mt-0.5">{h.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
