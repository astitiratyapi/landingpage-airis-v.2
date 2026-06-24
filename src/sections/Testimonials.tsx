// ============================================================
// AIRIS PACS — Testimonials carousel
// ============================================================
import { useEffect, useRef } from 'react';
import { Container, Icon, Reveal, SectionTag } from '../components/ui';
import { TESTIMONIALS } from '../data';

function Stars({ value = 0, total = 5 }: { value?: number; total?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5" aria-label={`${value} out of ${total}`}>
        {Array.from({ length: total }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className="w-4 h-4"
            aria-hidden="true"
            fill={i < value ? '#E86A1A' : 'none'}
            stroke="#E86A1A"
            strokeWidth="1.6"
            strokeLinejoin="round"
          >
            <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.6 1.1 6.5L12 17.9 6.2 21l1.1-6.5L2.6 9.85l6.5-.95L12 2.5Z" />
          </svg>
        ))}
      </div>
      <span className="text-[12.5px] font-bold text-ink-muted tabular-nums">
        {value}/{total}
      </span>
    </div>
  );
}

export function Testimonials() {
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf: number;
    const half = () => el.scrollWidth / 2;
    const step = () => {
      if (!pausedRef.current) {
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= half()) el.scrollLeft -= half();
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const nudge = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    // advance by one card (card width + the flex gap) so it steps to the next item
    const card = el.querySelector('figure');
    const step = card ? card.getBoundingClientRect().width + 24 : 420;
    // pause auto-scroll so it doesn't override the native smooth scroll mid-animation
    pausedRef.current = true;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
    // keep within the first copy so looping stays seamless, then resume auto-scroll
    setTimeout(() => {
      if (el.scrollLeft >= half) el.scrollLeft -= half;
      if (el.scrollLeft < 0) el.scrollLeft += half;
      pausedRef.current = false;
    }, 450);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <Reveal className="text-center max-w-2xl mx-auto">
          <SectionTag>Testimonials</SectionTag>
          <h2 className="mt-4 font-extrabold text-[clamp(1.9rem,3.6vw,2.8rem)] tracking-tight text-ink">What They Say</h2>
          <p className="mt-4 text-ink-muted text-[16px]">
            Real experiences from healthcare institutions already running AIRIS PACS.
          </p>
        </Reveal>
      </Container>
      {/* auto-scrolling horizontal track — pauses on hover, manual arrows */}
      <Reveal delay={120} className="mt-14 relative">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto scrollbar-none px-6 sm:px-10"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
        >
          {loop.map((t, n) => (
            <figure
              key={n}
              className="w-[340px] sm:w-[400px] shrink-0 flex flex-col rounded-2xl border border-line bg-line-soft p-7 hover:border-brand-200 hover:shadow-card transition-all duration-300"
            >
              <Stars value={t.rating} />
              {t.bullets ? (
                <ul className="mt-4 flex-1 space-y-1.5">
                  {t.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="flex gap-2.5 text-[15.5px] leading-relaxed text-ink font-medium text-pretty"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#E86A1A] shrink-0"></span>
                      {b}
                    </li>
                  ))}
                </ul>
              ) : (
                <blockquote className="mt-4 flex-1 text-[15.5px] leading-relaxed text-ink font-medium text-pretty">
                  {t.quote}
                </blockquote>
              )}
              <figcaption className="mt-6 pt-5 border-t border-line flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full ph-stripe-dark border border-line grid place-items-center overflow-hidden shrink-0">
                  <Icon name="user" className="w-5 h-5 text-ink-faint" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-ink text-[14px] truncate">{t.name}</div>
                  <div className="text-[12.5px] text-ink-muted truncate">
                    {t.role} · {t.org}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        {/* manual nav */}
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => nudge(-1)}
            aria-label="Previous"
            className="w-11 h-11 rounded-full border border-line bg-white grid place-items-center text-ink-muted hover:text-brand hover:border-brand-200 shadow-xs transition-colors rotate-180"
          >
            <Icon name="arrowRight" className="w-4 h-4" />
          </button>
          <button
            onClick={() => nudge(1)}
            aria-label="Next"
            className="w-11 h-11 rounded-full border border-line bg-white grid place-items-center text-ink-muted hover:text-brand hover:border-brand-200 shadow-xs transition-colors"
          >
            <Icon name="arrowRight" className="w-4 h-4" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
