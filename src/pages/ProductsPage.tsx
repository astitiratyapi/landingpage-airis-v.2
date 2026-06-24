// ============================================================
// AIRIS PACS — Products page (Core Modules)
// ============================================================
import { Fragment, type ReactNode } from 'react';
import { Container, Icon, Reveal, SectionTag } from '../components/ui';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { CTASection } from '../sections/CTASection';
import { MODULE_DETAILS, type ModuleDetail } from '../data';
import { asset } from '../lib/asset';
import type { IconName } from '../components/Icon';
import type { PageNavProps } from '../types';

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

function ProductsHero() {
  return (
    <section className="relative navy-grad hero-glow overflow-hidden pt-[68px]">
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[560px] rounded-full bg-brand-500/20 blur-[120px] pointer-events-none"></div>
      <Container className="relative py-24 lg:py-32 text-center">
        <Reveal>
          <h1 className="text-white font-extrabold tracking-tight text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.06] text-balance">
            Three Modules, One Platform
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 mx-auto max-w-2xl text-[clamp(1rem,1.4vw,1.15rem)] text-white/70 text-pretty">
            AIRIS PACS brings the radiology worklist, AI-driven operations, and a web-based diagnostic viewer together
            into a single, interoperable system — built for the workflows of Indonesian hospitals.
          </p>
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

// Shared mono uppercase eyebrow for the new AI sections
function Eyebrow({ children }: { children: string }) {
  return (
    <span className="font-mono text-[11px] font-semibold tracking-[.18em] uppercase text-brand">{children}</span>
  );
}

function AIRoadmap() {
  return (
    <section id="ai-roadmap" className="scroll-mt-[84px] py-20 lg:py-28 bg-white">
      <Container>
        <Reveal className="text-center max-w-2xl mx-auto">
          <Eyebrow>Roadmap</Eyebrow>
          <h2 className="mt-4 font-extrabold text-[clamp(1.9rem,3.6vw,2.8rem)] tracking-tight text-ink">
            AI Module Roadmap
          </h2>
          <p className="mt-4 text-ink-muted text-[16px] leading-relaxed text-pretty">
            The phased rollout of AIRIS AI capabilities — from today's triage and segmentation models toward an
            increasingly comprehensive clinical decision-support suite.
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-12 max-w-5xl mx-auto">
          <figure className="rounded-2xl border border-line bg-white shadow-card overflow-hidden">
            <img
              src={asset('assets/roadmap.png')}
              alt="AIRIS AI module roadmap showing the phased rollout of AI capabilities across the platform over time."
              className="block w-full h-auto max-w-full select-none"
              draggable={false}
              loading="lazy"
            />
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}

// One AI-module block: image on one side, content on the other (stacked on mobile).
function AIBlock({
  image,
  alt,
  title,
  flip = false,
  children,
}: {
  image: string;
  alt: string;
  title: string;
  flip?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white shadow-card overflow-hidden">
      <div className="grid md:grid-cols-2 items-center">
        {/* Image */}
        <div className={`bg-line-soft ${flip ? 'md:order-2' : ''}`}>
          <img
            src={asset(image)}
            alt={alt}
            className="block w-full h-auto max-w-full select-none"
            draggable={false}
            loading="lazy"
          />
        </div>
        {/* Content */}
        <div className={`p-6 sm:p-8 ${flip ? 'md:order-1' : ''}`}>
          <h3 className="font-bold text-ink text-[clamp(1.05rem,1.8vw,1.35rem)] leading-snug text-balance">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
}

function AIModuleInfo() {
  const keyFeatures: [string, string][] = [
    ['Urgency Scoring', "Displayed on the radiologist's worklist as a numerical score ranging from 0 (normal) to 3 (urgent)."],
    ['Text-Based Explanation', 'Provided as text, detailing the reasoning behind a specific urgency score for a CXR case, complete with probability and uncertainty values.'],
    ['Image-Based Explanation', 'Highlights critical areas of interest on the CXR image.'],
    ['Automated Routine CXR Segmentation and Measurement', 'Automatically segments objects within the CXR image and measures the cardiothoracic ratio (CTR).'],
  ];
  return (
    <section id="ai-module" className="scroll-mt-[84px] py-20 lg:py-28 bg-line-soft">
      <Container>
        <Reveal className="text-center max-w-2xl mx-auto">
          <Eyebrow>AI Module</Eyebrow>
          <h2 className="mt-4 font-extrabold text-[clamp(1.9rem,3.6vw,2.8rem)] tracking-tight text-ink">
            Inside the AI Module
          </h2>
          <p className="mt-4 text-ink-muted text-[16px] leading-relaxed text-pretty">
            A closer look at how the AIRIS AI module enriches every study — scoring urgency and rendering AI insight
            directly into the radiologist's workflow.
          </p>
        </Reveal>

        <div className="mt-12 max-w-5xl mx-auto space-y-6">
          {/* Block 1 — CXR urgency scoring (image left, content right) */}
          <Reveal>
            <AIBlock
              image="assets/aimodule_1.png"
              alt="AIRIS AI module — CXR urgency scoring with text and image-based explanations and automated cardiothoracic-ratio segmentation."
              title="CXR Urgency Scoring & Explainable Triage"
            >
              <div className="mt-5 space-y-4 text-[14px] leading-relaxed text-ink-muted">
                <div>
                  <div className="text-[11px] font-bold tracking-[.14em] uppercase text-ink-faint mb-1">Positive Impact</div>
                  <p>
                    Significant time savings, as urgent studies are flagged immediately upon receipt instead of awaiting
                    periodic human triage, reducing the average time to first read by up to 20 minutes (in addition to
                    eliminating manual sorting and human annotation review).
                  </p>
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-[.14em] uppercase text-ink-faint mb-1">
                    Estimated Processing Time
                  </div>
                  <p>
                    Approximately 2 minutes per CXR scan using a standard CPU (without the need for additional GPU
                    accelerators).
                  </p>
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-[.14em] uppercase text-ink-faint mb-2">Key Features:</div>
                  <ul className="space-y-2">
                    {keyFeatures.map(([term, desc]) => (
                      <li key={term} className="flex gap-2.5">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand shrink-0"></span>
                        <span>
                          <span className="font-semibold text-ink">{term}:</span> {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AIBlock>
          </Reveal>

          {/* Block 2 — Abdomen CT (image right, title only) */}
          <Reveal delay={80}>
            <AIBlock
              image="assets/aimodule_2.png"
              alt="AIRIS AI module — abdomen CT for quantification and detection of kidney stones."
              title="Abdomen CT for Quantification and Detection of Kidney Stones"
              flip
            />
          </Reveal>

          {/* Block 3 — Brain CT (image left, title only) */}
          <Reveal delay={80}>
            <AIBlock
              image="assets/aimodule_3.png"
              alt="AIRIS AI module — brain CT for quantification and detection of brain hemorrhage."
              title="Brain CT for Quantification and Detection of Brain Hemorrhage"
            />
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-8 text-center text-[13px] text-ink-faint">
            Note that certain AI modules may require additional licensing and GPU.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export function ProductsPage({ onHome, onContact, onNavigate }: PageNavProps) {
  return (
    <div className="bg-white">
      <Navbar onContact={onContact} onHome={onHome} onNavigate={onNavigate} />
      <ProductsHero />
      {MODULE_DETAILS.map((m, i) => (
        <ModuleSection key={m.id} m={m} index={i} />
      ))}
      <ProductsFlow />
      <AIRoadmap />
      <AIModuleInfo />
      <CTASection onContact={onContact} />
      <Footer onHome={onHome} onContact={onContact} />
    </div>
  );
}
