// ============================================================
// AIRIS PACS — AI Module flow diagram
// ============================================================
import { Container, Icon, Reveal, SectionTag } from '../components/ui';
import { FLOW } from '../data';
import { asset } from '../lib/asset';
import type { IconName } from '../components/Icon';

export function AIModule() {
  return (
    <section id="ai" className="py-24 bg-line-soft">
      <Container>
        <Reveal className="text-center max-w-2xl mx-auto">
          <SectionTag>AI &amp; Integration</SectionTag>
          <h2 className="mt-4 font-extrabold text-[clamp(1.9rem,3.6vw,2.8rem)] tracking-tight text-ink">
            AI Module &amp; Integration
          </h2>
          <p className="mt-4 text-ink-muted text-[16px]">Seamlessly integrated with your hospital ecosystem.</p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="relative rounded-3xl border border-line bg-gradient-to-b from-brand-50/60 via-white to-white shadow-card p-6 sm:p-12 overflow-hidden">
            {/* soft brand glow — replaces the diagonal-line pattern */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[320px] bg-brand-200/25 blur-[110px] rounded-full pointer-events-none"></div>

            <div className="relative flex justify-center">
              {/* Diagram */}
              <div className="flex-1 max-w-[560px] flex flex-col items-center">
                {/* Inputs */}
                <div className="grid grid-cols-2 gap-3 sm:gap-10 w-full">
                  <FlowBox icon="scan" title="Modalitas" />
                  <FlowBox icon="database" title="SIM RS" />
                </div>
                <MergeConnector />
                {/* Cloud / On-Prem + AI Interface Engine — bracketed by AIRIS Infrastructure */}
                <div className="relative flex flex-col items-center w-full max-w-[290px]">
                  <div className="hidden md:flex absolute right-full top-0 bottom-0 mr-3 items-stretch gap-2">
                    <div className="[writing-mode:vertical-rl] rotate-180 self-center text-[11px] font-bold tracking-[.22em] uppercase text-brand/70 whitespace-nowrap">
                      AIRIS Infrastructure
                    </div>
                    <div className="w-3 border-y-2 border-l-2 border-brand-200 rounded-l-lg"></div>
                  </div>
                  <div className="w-full">
                    <FlowBox icon="cloud" title="Cloud / On-Prem" />
                  </div>
                  <VLine />
                  <div className="w-full">
                    <FlowBox icon="sparkles" title="AI Interface Engine" tone="accent" />
                  </div>
                </div>
                <VLine />
                <SplitConnector />
                {/* Outputs */}
                <div className="grid grid-cols-2 gap-3 sm:gap-10 w-full">
                  <FlowBox
                    icon="monitor"
                    title="Device & Workstation"
                    details={[
                      { label: 'Workstation Rumah Sakit', icon: 'monitor' },
                      { label: 'Device (laptop & mobile)', icon: 'smartphone' },
                    ]}
                  />
                  <FlowBox logo title="Satu Sehat" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

interface FlowBoxProps {
  icon?: IconName;
  title: string;
  tone?: 'accent';
  logo?: boolean;
  details?: { label: string; icon: IconName }[];
}

function FlowBox({ icon, title, tone, logo, details }: FlowBoxProps) {
  const accent = tone === 'accent';
  if (logo) {
    return (
      <div className="flex items-center justify-center rounded-xl border border-line bg-white px-4 shadow-xs h-full min-h-[60px] hover:border-brand-200 hover:shadow-card transition-all">
        <img
          src={asset(FLOW.platformLogo)}
          alt="SatuSehat"
          className="max-h-7 w-auto object-contain"
          draggable={false}
        />
      </div>
    );
  }
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border px-4 py-3 shadow-xs h-full min-h-[60px] transition-all ${accent ? 'bg-brand text-white border-brand shadow-[0_12px_28px_-12px_rgba(27,81,216,.65)]' : 'bg-white border-line text-ink hover:border-brand-200 hover:shadow-card'}`}
    >
      <span
        className={`w-9 h-9 rounded-lg grid place-items-center shrink-0 ${accent ? 'bg-white/15 text-white' : 'bg-brand-50 text-brand'}`}
      >
        {icon && <Icon name={icon} className="w-[18px] h-[18px]" />}
      </span>
      <div className="min-w-0">
        <span className="block font-bold text-[13.5px] leading-tight text-balance">{title}</span>
        {details && (
          <ul className="mt-1.5 space-y-1">
            {details.map((d) => (
              <li key={d.label} className="flex items-start gap-1.5 text-[11.5px] leading-snug text-ink-muted">
                <Icon name={d.icon} className="w-3.5 h-3.5 mt-px text-brand shrink-0" />
                {d.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// 2 inputs merge into 1 (down to Cloud/On-Prem)
function MergeConnector() {
  return (
    <div className="relative w-full h-10">
      <div className="absolute top-0 left-1/4 w-px h-1/2 bg-brand-300"></div>
      <div className="absolute top-0 left-3/4 w-px h-1/2 bg-brand-300"></div>
      <div className="absolute top-1/2 left-1/4 w-1/2 h-px bg-brand-300"></div>
      <div className="absolute top-1/2 left-1/2 w-px h-1/2 bg-brand-300"></div>
    </div>
  );
}

// 1 splits into 2 outputs (Device & Workstation / Satu Sehat)
function SplitConnector() {
  return (
    <div className="relative w-full h-10">
      <div className="absolute top-0 left-1/2 w-px h-1/2 bg-brand-300"></div>
      <div className="absolute top-1/2 left-1/4 w-1/2 h-px bg-brand-300"></div>
      <div className="absolute top-1/2 left-1/4 w-px h-1/2 bg-brand-300"></div>
      <div className="absolute top-1/2 left-3/4 w-px h-1/2 bg-brand-300"></div>
    </div>
  );
}

function VLine() {
  return <div className="w-px h-9 bg-brand-300"></div>;
}
