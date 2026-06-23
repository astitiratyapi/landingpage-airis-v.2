// ============================================================
// AIRIS PACS — Events page
// ============================================================
import { useRef, useState } from 'react';
import { Button, Container, Field, Icon, Reveal, SectionTag } from '../components/ui';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { EVENT_PERKS, PAST_EVENTS, UPCOMING_EVENTS, type AirisEvent, type EventTint } from '../data';
import { asset } from '../lib/asset';
import type { NavHandler, PageNavProps } from '../types';

const EV_TINTS: Record<EventTint, string> = {
  brand: 'from-brand-600 to-brand-800',
  navy: 'from-navy-700 to-navy-950',
  accent: 'from-accent to-accent-600',
};

// category pill colour over the cover gradient
function catClass(c: string) {
  const accentCats = ['Workshop', 'Exhibition', 'Talkshow'];
  return accentCats.includes(c) ? 'bg-accent text-white' : 'bg-white/95 text-brand-700';
}

function EventCover({ ev, past }: { ev: AirisEvent; past?: boolean }) {
  return (
    <div
      className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${EV_TINTS[ev.tint]} ${past ? 'opacity-90' : ''}`}
    >
      {ev.image ? (
        <>
          <img
            src={asset(ev.image)}
            alt={ev.title}
            loading="lazy"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25"
            aria-hidden="true"
          ></div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 grid-lines opacity-50" aria-hidden="true"></div>
          <Icon name={ev.icon} className="absolute -right-5 -bottom-5 w-32 h-32 text-white/10" stroke={1.5} />
        </>
      )}
      {past && (
        <span className="absolute top-3 right-3 rounded-full bg-black/35 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-white/90">
          Recap available
        </span>
      )}
      {/* category pills */}
      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
        {ev.categories.map((c) => (
          <span key={c} className={`rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide shadow-sm ${catClass(c)}`}>
            {c}
          </span>
        ))}
      </div>
      {/* date/time badge */}
      <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-lg bg-black/40 backdrop-blur px-2.5 py-1.5 text-white text-[12px] font-semibold">
        <Icon name="calendar" className="w-3.5 h-3.5" />
        {ev.dateBadge}
      </div>
    </div>
  );
}

function EventCard({ ev, variant = 'upcoming' }: { ev: AirisEvent; variant?: 'upcoming' | 'past' }) {
  const past = variant === 'past';
  return (
    <article className="group flex flex-col h-full rounded-2xl border border-line bg-white shadow-card overflow-hidden hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
      <EventCover ev={ev} past={past} />
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-ink text-[16.5px] leading-snug line-clamp-2 text-pretty">{ev.title}</h3>
        {ev.topic && (
          <div className="mt-3 rounded-lg bg-brand-50 border border-brand-100 px-3 py-2 text-ink">
            <span className="text-[12.5px] leading-snug text-pretty">
              <span className="font-semibold">Topik Workshop:</span> {ev.topic}
            </span>
          </div>
        )}
        <div className="mt-3 space-y-2 text-[13px] text-ink-muted">
          <div className="flex items-start gap-2">
            <Icon name="mapPin" className="w-4 h-4 mt-px text-brand shrink-0" />
            <span className="text-pretty">{ev.location}</span>
          </div>
          {ev.capacity && (
            <div className="flex items-center gap-2">
              <Icon name="users" className="w-4 h-4 text-brand shrink-0" />
              {ev.capacity}
            </div>
          )}
        </div>
        {past && (
          <div className="mt-auto pt-4 flex items-center justify-between gap-3 border-t border-line mt-4">
            <span className="text-[12.5px] font-medium text-ink-faint">{ev.date}</span>
            <Button variant="outline" size="sm" iconLeft="play">
              View Recap
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}

function EventsHero({ onContact }: { onContact: NavHandler }) {
  return (
    <section className="relative navy-grad hero-glow overflow-hidden pt-[68px]">
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[560px] rounded-full bg-brand-500/20 blur-[120px] pointer-events-none"></div>
      {/* faint floating event glyphs */}
      <Icon name="calendar" className="hidden md:block absolute right-[8%] top-[28%] w-24 h-24 text-white/[.06]" stroke={1.5} />
      <Icon name="users" className="hidden md:block absolute left-[7%] bottom-[14%] w-20 h-20 text-white/[.06]" stroke={1.5} />
      <Container className="relative py-20 lg:py-24 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-[13px] font-semibold text-white">
            <Icon name="sparkles" className="w-4 h-4 text-brand-300" />
            Boost Your Competency
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 text-white font-extrabold tracking-tight text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.06] text-balance">
            AIRIS Events &amp; Workshops
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 mx-auto max-w-2xl text-[clamp(1rem,1.4vw,1.15rem)] text-white/70 text-pretty">
            Learn hospital digital transformation, operational management, and health technology through webinars,
            workshops, and exclusive training with industry experts.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-9 flex justify-center">
            <Button variant="white" size="lg" icon="arrowRight" onClick={onContact}>
              Contact Marketing Team
            </Button>
          </div>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {EVENT_PERKS.map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 px-4 py-2 text-[13.5px] font-medium text-white/85"
              >
                <Icon name={p.icon} className="w-4 h-4 text-brand-300" />
                {p.label}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

interface FilterValues {
  search: string;
  start: string;
  end: string;
}

interface FilterCardProps {
  values: FilterValues;
  set: (k: keyof FilterValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onApply: () => void;
}

function FilterCard({ values, set, onApply }: FilterCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <aside className="lg:sticky lg:top-[84px] rounded-2xl border border-line bg-white shadow-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 lg:cursor-default"
        aria-expanded={open}
      >
        <span className="inline-flex items-center gap-2 font-bold text-ink text-[15px]">
          <Icon name="search" className="w-[18px] h-[18px] text-brand" />
          Filter Events
        </span>
        <Icon
          name="chevronRight"
          className={`w-5 h-5 text-ink-faint lg:hidden transition-transform ${open ? 'rotate-90' : ''}`}
        />
      </button>
      <div className={`${open ? 'block' : 'hidden'} lg:block px-5 pb-5 space-y-4 border-t border-line pt-4`}>
        <Field label="Search" icon="search" placeholder="Event name…" value={values.search} onChange={set('search')} />
        <Field label="Start Date" type="date" value={values.start} onChange={set('start')} />
        <Field label="End Date" type="date" value={values.end} onChange={set('end')} />
        <Button className="w-full" onClick={onApply}>
          Apply
        </Button>
      </div>
    </aside>
  );
}

function PastEvents() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 380), behavior: 'smooth' });
  };
  return (
    <section className="py-20 lg:py-24 bg-line-soft">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div>
            <SectionTag>Recap</SectionTag>
            <h2 className="mt-3 text-ink font-extrabold tracking-tight text-[clamp(1.7rem,3vw,2.4rem)]">
              Previous Events
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous events"
              className="w-11 h-11 rounded-full border border-line bg-white text-ink grid place-items-center shadow-sm hover:text-brand hover:border-brand-300 active:scale-95 transition-all"
            >
              <Icon name="chevronLeft" className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next events"
              className="w-11 h-11 rounded-full border border-line bg-white text-ink grid place-items-center shadow-sm hover:text-brand hover:border-brand-300 active:scale-95 transition-all"
            >
              <Icon name="chevronRight" className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div ref={ref} className="mt-8 flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-2 -mx-1 px-1">
          {PAST_EVENTS.map((ev, i) => (
            <div key={i} className="snap-start shrink-0 w-[280px] sm:w-[330px]">
              <EventCard ev={ev} variant="past" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function EventsPage({ onHome, onContact, onNavigate }: PageNavProps) {
  const [values, setValues] = useState<FilterValues>({ search: '', start: '', end: '' });
  const [applied, setApplied] = useState<FilterValues>({ search: '', start: '', end: '' });
  const set = (k: keyof FilterValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));
  const onApply = () => setApplied(values);

  const filtered = UPCOMING_EVENTS.filter((ev) => {
    if (applied.search && !ev.title.toLowerCase().includes(applied.search.toLowerCase())) return false;
    if (applied.start && ev.dateISO && ev.dateISO < applied.start) return false;
    if (applied.end && ev.dateISO && ev.dateISO > applied.end) return false;
    return true;
  });

  return (
    <div className="bg-white">
      <Navbar onContact={onContact} onHome={onHome} onNavigate={onNavigate} />
      <EventsHero onContact={onContact} />

      {/* Listing */}
      <section className="py-20 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[320px_1fr] gap-8 lg:gap-10 items-start">
            <FilterCard values={values} set={set} onApply={onApply} />
            <div>
              <SectionTag>Events</SectionTag>
              <h2 className="mt-3 text-ink font-extrabold tracking-tight text-[clamp(1.7rem,3vw,2.4rem)]">
                Upcoming Events
              </h2>
              <p className="mt-2 text-ink-muted text-[15px]">
                {filtered.length} event{filtered.length === 1 ? '' : 's'} available for registration.
              </p>

              {filtered.length > 0 ? (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                  {filtered.map((ev, i) => (
                    <Reveal key={ev.title} delay={i * 70}>
                      <EventCard ev={ev} />
                    </Reveal>
                  ))}
                </div>
              ) : (
                <div className="mt-8 rounded-2xl border border-dashed border-line bg-line-soft px-6 py-16 text-center">
                  <div className="w-12 h-12 rounded-full bg-white border border-line text-ink-faint grid place-items-center mx-auto">
                    <Icon name="search" className="w-5 h-5" />
                  </div>
                  <p className="mt-4 font-semibold text-ink">No events match your filter</p>
                  <p className="mt-1 text-[14px] text-ink-muted">Try a different name or date range.</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <PastEvents />

      <Footer onHome={onHome} onContact={onContact} />
    </div>
  );
}
