// ============================================================
// AIRIS PACS — CTA + consultation form
// ============================================================
import { useState } from 'react';
import { Button, Container, Field, Icon, Reveal, SectionTag } from '../components/ui';
import type { NavHandler } from '../types';

interface CTASectionProps {
  onContact: NavHandler;
}

export function CTASection({ onContact }: CTASectionProps) {
  const [form, setForm] = useState({ name: '', email: '', org: '' });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });
  return (
    <section className="relative navy-grad py-24 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-50"></div>
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-500/20 blur-[120px] rounded-full"></div>
      <Container className="relative grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <SectionTag dark>Get Started</SectionTag>
          <h2 className="mt-4 text-white font-extrabold text-[clamp(2rem,4vw,3.2rem)] tracking-tight leading-[1.06] text-balance">
            Ready to Transform Your Hospital's Radiology?
          </h2>
          <p className="mt-5 text-white/70 text-[16px] leading-relaxed max-w-md">
            Discuss your hospital's imaging needs with the AIRIS PACS expert team — free, with no commitment.
          </p>
          <ul className="mt-7 space-y-3">
            {['No-cost needs analysis', 'Live demo tailored to your workflow', 'A clear implementation roadmap'].map(
              (p) => (
                <li key={p} className="flex items-center gap-3 text-white/75 text-[15px]">
                  <span className="w-5 h-5 rounded-full bg-brand/30 grid place-items-center">
                    <Icon name="check" className="w-3 h-3 text-brand-200" stroke={3} />
                  </span>
                  {p}
                </li>
              ),
            )}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-2xl bg-white shadow-glow p-7 sm:p-8">
            <h3 className="font-bold text-ink text-xl">Start a Consultation</h3>
            <p className="text-ink-muted text-[14px] mt-1 mb-6">
              Fill in a few details below and our team will reach out within 24 hours.
            </p>
            <div className="space-y-4">
              <Field label="Full Name" name="name" placeholder="Dr. Your Name" icon="user" value={form.name} onChange={set('name')} />
              <Field
                label="Work Email"
                name="email"
                type="email"
                placeholder="name@hospital.com"
                icon="mail"
                value={form.email}
                onChange={set('email')}
              />
              <Field
                label="Institution"
                name="org"
                placeholder="Hospital / clinic name"
                icon="building"
                value={form.org}
                onChange={set('org')}
              />
            </div>
            <Button variant="primary" size="lg" icon="arrowRight" className="w-full mt-6" onClick={onContact}>
              Talk to an Expert
            </Button>
            <p className="text-center text-[12px] text-ink-faint mt-4 flex items-center justify-center gap-1.5">
              <Icon name="lock" className="w-3.5 h-3.5" />
              Your data is safe &amp; encrypted. No spam.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
