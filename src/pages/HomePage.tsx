// ============================================================
// AIRIS PACS — Home page composition
// ============================================================
import { Navbar } from '../sections/Navbar';
import { Hero } from '../sections/Hero';
import { IntroAiris } from '../sections/IntroAiris';
import { Modules, AISolutions } from '../sections/Modules';
import { AIModule } from '../sections/AIModule';
import { Highlights } from '../sections/Highlights';
import { Benefits } from '../sections/Benefits';
import { AirisInAction } from '../sections/AirisInAction';
import { Testimonials } from '../sections/Testimonials';
import { Experts } from '../sections/Experts';
import { CTASection } from '../sections/CTASection';
import { Footer } from '../sections/Footer';
import type { PageNavProps } from '../types';

export function HomePage({ onHome, onContact, onNavigate }: PageNavProps) {
  return (
    <main>
      <Navbar onContact={onContact} onHome={onHome} onNavigate={onNavigate} />
      <Hero onContact={onContact} />
      <IntroAiris />
      <Modules />
      <AISolutions />
      <AIModule />
      <Highlights />
      <Benefits />
      <AirisInAction />
      <Testimonials />
      <Experts />
      <CTASection onContact={onContact} />
      <Footer onHome={onHome} onContact={onContact} />
    </main>
  );
}
