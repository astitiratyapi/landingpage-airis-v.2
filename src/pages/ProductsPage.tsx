// ============================================================
// AIRIS PACS — Products page (Core Modules)
// ============================================================
import { Fragment } from 'react';
import { Button, Container, Icon, Reveal, SectionTag } from '../components/ui';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { CTASection } from '../sections/CTASection';
import { MODULE_DETAILS, type ModuleDetail } from '../data';
import { asset } from '../lib/asset';
import type { IconName } from '../components/Icon';
import type { NavHandler, PageNavProps } from '../types';

// Browser-style frame for product screenshots
function ScreenFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative rounded-2xl bg-gradient-to-b from-[#2a3142] to-[#10141d] p-2.5 border border-black/20 shadow-lift">
      <div className="flex items-center gap-1.5 px-2 pb-2.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
      </div>
      <div className="rounded-lg overflow-hidden bg-black ring-1 ring-white/10 aspect-[2880/1574]">
        <img
          src={asset(src)}
          alt={alt}
          className="block w-full h-full object-cover object-top select-none"
          draggable={false}
          loading="lazy"
        />
      </div>
    </div>
  );
}

function ProductsHero({ onContact }: { onContact: NavHandler }) {
  return (
    <section className="relative navy-grad hero-glow overflow-hidden pt-[68px]">
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[560px] rounded-full bg-brand-500/20 blur-[120px] pointer-events-none"></div>
      <Container className="relative py-20 lg:py-24 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[13px] font-semibold text-white">
            <Icon name="layers" className="w-4 h-4 text-brand-300" />
            Core Modules
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 text-white font-extrabold tracking-tight text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.06] text-balance">
            Three Modules, One Platform
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 mx-auto max-w-2xl text-[clamp(1rem,1.4vw,1.15rem)] text-white/70 text-pretty">
            AIRIS PACS brings the radiology worklist, AI-driven operations, and a web-based diagnostic viewer together
            into a single, interoperable system — built for the workflows of Indonesian hospitals.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {MODULE_DETAILS.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 px-4 py-2 text-[13.5px] font-medium text-white/85 hover:bg-white/10 hover:border-white/30 transition-colors"
              >
                <Icon name={m.icon} className="w-4 h-4 text-brand-300" />
                {m.name}
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-9 flex justify-center">
            <Button variant="white" size="lg" icon="arrowRight" onClick={onContact}>
              Talk to our Expert
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ModuleSection({ m, index }: { m: ModuleDetail; index: number }) {
  const flip = index % 2 === 1;
  const num = String(index + 1).padStart(2, '0');
  const alt = index % 2 === 1;
  return (
    <section id={m.id} className={`scroll-mt-[84px] py-20 lg:py-28 ${alt ? 'bg-line-soft' : 'bg-white'}`}>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <Reveal className={flip ? 'lg:order-2' : ''}>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[13px] font-semibold text-brand">Module {num}</span>
              <span className="h-px w-8 bg-brand/30"></span>
              <span className="text-[10px] font-bold tracking-[.14em] uppercase text-accent bg-accent-soft px-2.5 py-1 rounded-full">
                {m.badge}
              </span>
            </div>
            <h2 className="mt-5 font-extrabold text-[clamp(1.8rem,3.2vw,2.6rem)] tracking-tight text-ink">{m.name}</h2>
            <p className="mt-4 text-ink-muted text-[16px] leading-relaxed text-pretty max-w-xl">{m.summary}</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-6">
              {m.capabilities.map((c) => (
                <div key={c.title} className="flex gap-3">
                  <span className="mt-0.5 w-7 h-7 rounded-lg bg-brand-50 grid place-items-center shrink-0">
                    <Icon name="check" className="w-3.5 h-3.5 text-brand" stroke={3} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink text-[14.5px] leading-snug">{c.title}</h3>
                    <p className="mt-1 text-ink-muted text-[13px] leading-relaxed text-pretty">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          {/* Screenshot */}
          <Reveal delay={120} className={flip ? 'lg:order-1' : ''}>
            <ScreenFrame src={m.image} alt={m.imageAlt} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ProductsFlow() {
  const steps: { icon: IconName; label: string; detail: string }[] = [
    { icon: 'scan', label: 'Modalities', detail: 'CT · MRI · X-Ray · USG' },
    { icon: 'database', label: 'AIRIS PACS Core', detail: 'Centralized & DICOM-compliant' },
    { icon: 'sparkles', label: 'AI Engine', detail: 'Urgency scoring & segmentation' },
    { icon: 'monitor', label: 'Worklist & Viewer', detail: 'Prioritized reading anywhere' },
  ];
  return (
    <section className="relative navy-grad-soft py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true"></div>
      <Container className="relative">
        <Reveal className="text-center max-w-2xl mx-auto">
          <SectionTag dark>How they work together</SectionTag>
          <h2 className="mt-4 text-white font-extrabold text-[clamp(1.7rem,3vw,2.4rem)] tracking-tight">
            From acquisition to diagnosis
          </h2>
          <p className="mt-4 text-white/65 text-[15.5px] leading-relaxed text-pretty">
            Images flow from your modalities into the AIRIS PACS core, where the AI engine enriches every study before it
            reaches the worklist and viewer.
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            {steps.map((s, i, arr) => (
              <Fragment key={s.label}>
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-5 py-6 text-center">
                  <span className="w-11 h-11 rounded-xl bg-brand/25 grid place-items-center mx-auto">
                    <Icon name={s.icon} className="w-5 h-5 text-brand-200" />
                  </span>
                  <h3 className="mt-3 font-bold text-white text-[15px]">{s.label}</h3>
                  <p className="mt-1 text-white/55 text-[12.5px]">{s.detail}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden md:flex items-center text-white/30">
                    <Icon name="arrowRight" className="w-5 h-5" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function ProductsPage({ onHome, onContact, onNavigate }: PageNavProps) {
  return (
    <div className="bg-white">
      <Navbar onContact={onContact} onHome={onHome} onNavigate={onNavigate} />
      <ProductsHero onContact={onContact} />
      {MODULE_DETAILS.map((m, i) => (
        <ModuleSection key={m.id} m={m} index={i} />
      ))}
      <ProductsFlow />
      <CTASection onContact={onContact} />
      <Footer onHome={onHome} onContact={onContact} />
    </div>
  );
}
