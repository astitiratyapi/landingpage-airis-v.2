// ============================================================
// AIRIS PACS — Footer
// ============================================================
import { Container, Icon, Logo } from '../components/ui';
import { asset } from '../lib/asset';
import type { NavHandler } from '../types';

interface FooterProps {
  onHome?: NavHandler;
  onContact?: NavHandler;
}

export function Footer(_props: FooterProps) {
  return (
    <footer id="resources" className="navy-grad-soft text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30"></div>
      <Container className="relative pt-16 pb-10">
        <div className="grid lg:grid-cols-[1.7fr_1fr] gap-12">
          <div>
            <Logo dark />
            <p className="mt-4 text-white/55 text-[14px] leading-relaxed max-w-xs">
              AI for Radiology and Imaging Suite with Picture Archiving Communication System.
            </p>
            <div className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-6 max-w-xl">
              <div className="flex items-start gap-2.5 text-white/55 text-[13px] leading-relaxed">
                <Icon name="mapPin" className="w-4 h-4 mt-0.5 shrink-0 text-brand-300" />
                <span>
                  <span className="block font-semibold text-white/85 mb-0.5">Marketing Office</span>
                  AD Premier Lt. 5 Suite 6, Jl. TB Simatupang No. 5, RT 005, RW 007, Kel. Ragunan, Kec. Pasar Minggu,
                  Jakarta Selatan 12550.
                </span>
              </div>
              {/* Contact Us — phone, email, social */}
              <div className="text-white/55 text-[13px] leading-relaxed">
                <span className="block font-semibold text-white/85 mb-2">Contact Us</span>
                <div className="space-y-2">
                  <a href="tel:+6281288167422" className="flex items-center gap-2.5 hover:text-white transition-colors">
                    <Icon name="phone" className="w-4 h-4 shrink-0 text-brand-300" />
                    (+62) 812-8816-7422
                  </a>
                  <a
                    href="mailto:hello@badr-interactive.com"
                    className="flex items-center gap-2.5 hover:text-white transition-colors"
                  >
                    <Icon name="mail" className="w-4 h-4 shrink-0 text-brand-300" />
                    hello@badr-interactive.com
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-2.5 hover:text-white transition-colors"
                  >
                    <Icon name="instagram" className="w-4 h-4 shrink-0 text-brand-300" />
                    @airispacs
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-white/55 text-[13px] leading-relaxed">
                <Icon name="mapPin" className="w-4 h-4 mt-0.5 shrink-0 text-brand-300" />
                <span>
                  <span className="block font-semibold text-white/85 mb-0.5">Operational Office</span>
                  Pesona Khayangan Blok CK No 50. Jl. Pesona Khayangan, Mekar Jaya, Kec. Sukmajaya, Kota Depok, Jawa
                  Barat 16411.
                </span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="h-10 rounded-lg bg-white px-3 grid place-items-center shadow-xs">
                <img src={asset('assets/logo-iso27001.png')} alt="ISO 27001 Certified" className="max-h-6 w-auto" draggable={false} />
              </div>
              <div className="h-10 rounded-lg bg-white px-3 grid place-items-center shadow-xs">
                <img src={asset('assets/logo-satusehat.png')} alt="SatuSehat Integrated" className="max-h-6 w-auto" draggable={false} />
              </div>
            </div>
          </div>
          <div className="lg:justify-self-end">
            <div className="text-[12px] font-bold tracking-[.14em] uppercase text-white/40 mb-4">E-Catalogue</div>
            <div className="inline-flex rounded-xl bg-white px-4 py-2.5 shadow-card">
              <img src={asset('assets/ekatalog-logo.png')} alt="e-Catalogue LKPP" className="h-8 w-auto" draggable={false} />
            </div>
            <div className="mt-4 w-36 h-36 rounded-xl bg-white p-3 shadow-card">
              <img
                src={asset('assets/ekatalog-qr.png')}
                alt="AIRIS PACS e-Catalogue QR"
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>
            <p className="mt-3 text-white/45 text-[12px]">Scan to view our e-Catalogue</p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/45 text-[13px]">© 2026 AIRIS PACS. All rights reserved.</p>
          <div className="flex gap-6 text-white/45 text-[13px]">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
