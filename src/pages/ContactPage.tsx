// ============================================================
// AIRIS PACS — Contact Page
// ============================================================
import { useState } from 'react';
import { Button, Container, Field, Icon, Logo, SectionTag } from '../components/ui';
import type { NavHandler } from '../types';

interface ContactPageProps {
  onHome: NavHandler;
}

export function ContactPage({ onHome }: ContactPageProps) {
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [k]: e.target.value });
    setErrors({ ...errors, [k]: '' });
  };

  const submit = () => {
    const err: Record<string, string> = {};
    if (!form.name.trim()) err.name = 'Name is required';
    if (!form.org.trim()) err.org = 'Institution is required';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = 'Invalid email';
    if (!form.phone.trim()) err.phone = 'Phone number is required';
    if (!form.message.trim()) err.message = 'Message is required';
    setErrors(err);
    if (Object.keys(err).length === 0) setSent(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* slim header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-line">
        <Container className="flex items-center justify-between h-[68px]">
          <button onClick={onHome} className="cursor-pointer">
            <Logo />
          </button>
          <button
            onClick={onHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-muted hover:text-brand transition-colors"
          >
            <span className="rotate-180">
              <Icon name="arrowRight" className="w-4 h-4" />
            </span>
            Back to Home
          </button>
        </Container>
      </header>

      {/* hero strip */}
      <div className="navy-grad relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-50"></div>
        <Container className="relative py-16 text-center">
          <SectionTag dark>Contact Us</SectionTag>
          <h1 className="mt-4 text-white font-extrabold text-[clamp(2rem,4vw,3rem)] tracking-tight">Let's Talk Further</h1>
          <p className="mt-4 text-white/70 text-[16px] max-w-xl mx-auto">
            Our expert team is ready to help design the right imaging solution for your hospital.
          </p>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-8 -mt-28 relative">
          {/* form card */}
          <div className="rounded-2xl bg-white border border-line shadow-lift p-7 sm:p-9">
            {sent ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 grid place-items-center mx-auto mb-5">
                  <Icon name="check" className="w-8 h-8" stroke={2.5} />
                </div>
                <h3 className="font-bold text-ink text-2xl">Thank you, {form.name.split(' ')[0] || 'Doctor'}!</h3>
                <p className="text-ink-muted mt-2 max-w-sm mx-auto">
                  We've received your consultation request. The AIRIS PACS team will contact you within 24 business
                  hours.
                </p>
                <Button variant="outline" size="md" className="mt-7" onClick={onHome} iconLeft="arrowRight">
                  Back to Home
                </Button>
              </div>
            ) : (
              <>
                <h2 className="font-bold text-ink text-2xl">Send a Message</h2>
                <p className="text-ink-muted text-[14.5px] mt-1 mb-7">
                  Complete the form below and we'll respond shortly.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name" name="name" placeholder="Dr. Your Name" icon="user" value={form.name} onChange={set('name')} error={errors.name} />
                  <Field label="Institution" name="org" placeholder="Hospital / clinic" icon="building" value={form.org} onChange={set('org')} error={errors.org} />
                  <Field label="Work Email" name="email" type="email" placeholder="name@hospital.com" icon="mail" value={form.email} onChange={set('email')} error={errors.email} />
                  <Field label="Phone Number" name="phone" placeholder="+62 ___ ____ ____" icon="phone" value={form.phone} onChange={set('phone')} error={errors.phone} />
                </div>
                <div className="mt-4">
                  <Field
                    label="Message"
                    name="message"
                    textarea
                    placeholder="Tell us about your hospital's radiology needs..."
                    value={form.message}
                    onChange={set('message')}
                    error={errors.message}
                  />
                </div>
                <Button variant="primary" size="lg" icon="arrowRight" className="w-full mt-6" onClick={submit}>
                  Send Consultation Request
                </Button>
                <p className="text-center text-[12px] text-ink-faint mt-4 flex items-center justify-center gap-1.5">
                  <Icon name="lock" className="w-3.5 h-3.5" />
                  Your information is kept confidential.
                </p>
              </>
            )}
          </div>

          {/* office details + map */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-line bg-white shadow-card p-6 space-y-5">
              {[
                {
                  icon: 'mapPin' as const,
                  label: 'Operational Office',
                  value:
                    'Pesona Khayangan Blok CK No 50. Jl. Pesona Khayangan, Mekar Jaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16411.',
                },
                { icon: 'phone' as const, label: 'Contact Us', value: '(+62) 812-8816-7422' },
                { icon: 'mail' as const, label: 'Email', value: 'hello@badr-interactive.com' },
              ].map((d) => (
                <div key={d.label} className="flex gap-4">
                  <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand grid place-items-center shrink-0">
                    <Icon name={d.icon} className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-[12px] font-bold tracking-[.1em] uppercase text-ink-faint">{d.label}</div>
                    <div className="text-ink text-[14.5px] mt-1 leading-relaxed">{d.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-line overflow-hidden shadow-card">
              <iframe
                title="AIRIS PACS Operational Office Location"
                src="https://www.google.com/maps?q=Pesona+Khayangan+Blok+CK+No+50+Jl+Pesona+Khayangan+Depok&z=16&output=embed"
                className="w-full h-56 block border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
              <div className="flex items-center justify-between px-5 py-4 bg-white border-t border-line">
                <div className="flex items-center gap-2 text-ink text-[14px] font-semibold">
                  <Icon name="mapPin" className="w-4 h-4 text-brand" />
                  Depok, Jawa Barat
                </div>
                <a
                  href="https://maps.app.goo.gl/vXGBn2s3vqJA518m8"
                  target="_blank"
                  rel="noopener"
                  className="text-brand text-[13px] font-semibold inline-flex items-center gap-1 hover:underline"
                >
                  Open in Maps
                  <Icon name="arrowUpRight" className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="rounded-2xl navy-grad p-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent" style={{ animation: 'pulseDot 2s infinite' }}></span>
              <p className="text-white/80 text-[13.5px]">
                Average response within <span className="font-bold text-white">24 business hours</span>.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
