// ============================================================
// AIRIS PACS — Hero + screenshot collage
// ============================================================
import { Button, Container, Reveal } from '../components/ui';
import { asset } from '../lib/asset';
import type { NavHandler } from '../types';

interface HeroProps {
  onContact: NavHandler;
}

export function Hero({ onContact }: HeroProps) {
  return (
    <section className="relative navy-grad hero-glow overflow-hidden pt-[68px]">
      <div className="absolute inset-0 grid-lines opacity-60"></div>
      {/* faint radiology watermark */}
      <img
        src={asset('assets/hero/anatomy.png')}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="pointer-events-none select-none absolute left-[-2%] bottom-0 h-[80%] w-auto object-contain opacity-50 mix-blend-screen hidden md:block"
        style={{
          WebkitMaskImage: 'radial-gradient(65% 75% at 40% 60%, #000 30%, transparent 80%)',
          maskImage: 'radial-gradient(65% 75% at 40% 60%, #000 30%, transparent 80%)',
        }}
      />
      <div className="absolute -top-24 left-[15%] w-[720px] h-[720px] rounded-full bg-brand-500/20 blur-[120px] pointer-events-none"></div>
      <Container className="relative">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-10 items-center py-16 lg:py-20">
          {/* LEFT — copy */}
          <div className="max-w-xl">
            <Reveal delay={60}>
              <h1 className="text-white font-extrabold tracking-tight text-[clamp(2.3rem,4.6vw,3.9rem)] leading-[1.05] text-balance">
                AI for Radiology and Imaging Suite
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-[clamp(1rem,1.5vw,1.2rem)] text-white/70 text-pretty">
                A modern, AI-powered{' '}
                <span className="text-white font-semibold">Picture Archiving &amp; Communication System</span> — built
                for the radiology workflows of Indonesian hospitals.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button variant="white" size="lg" icon="arrowRight" onClick={onContact}>
                  Talk to our Expert
                </Button>
              </div>
            </Reveal>
          </div>
          {/* RIGHT — screenshot collage */}
          <Reveal delay={220} className="relative">
            <HeroCollage />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function HeroCollage() {
  const colA = ['worklist', 'crosshairs', 'segmentation'];
  const colB = ['scan3d', 'matching', 'ai-analytics'];
  const Card = ({ src }: { src: string }) => (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-[0_22px_44px_-18px_rgba(0,0,0,.7)]">
      <img
        src={asset(`assets/hero/${src}.png`)}
        alt="AIRIS PACS interface"
        className="block w-full select-none"
        draggable={false}
      />
    </div>
  );
  return (
    <div className="relative">
      <div className="absolute -inset-8 bg-brand-500/15 blur-[90px] rounded-full pointer-events-none"></div>
      <div
        className="relative h-[480px] sm:h-[560px] overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, #000 13%, #000 87%, transparent 100%)',
          maskImage: 'linear-gradient(180deg, transparent 0%, #000 13%, #000 87%, transparent 100%)',
        }}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4 hero-mq-up">
            {[...colA, ...colA].map((s, i) => (
              <Card key={i} src={s} />
            ))}
          </div>
          <div className="flex flex-col gap-4 hero-mq-down -mt-16">
            {[...colB, ...colB].map((s, i) => (
              <Card key={i} src={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
