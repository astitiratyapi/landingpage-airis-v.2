// ============================================================
// AIRIS PACS — App shell + hash routing with fade transition
// ============================================================
import { useEffect, useState, type MouseEvent } from 'react';
import { HomePage } from './pages/HomePage';
import { EventsPage } from './pages/EventsPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import type { PageKey } from './data';

const pageFromHash = (): PageKey => {
  const h = window.location.hash.replace('#', '');
  return h === 'contact' || h === 'events' || h === 'products' ? h : 'home';
};

export default function App() {
  const [page, setPage] = useState<PageKey>(pageFromHash);
  const [transitioning, setTransitioning] = useState(false);

  const navigate = (next: PageKey) => {
    if (next === page) return;
    setTransitioning(true);
    setTimeout(() => {
      setPage(next);
      window.location.hash = next === 'home' ? '' : next;
      window.scrollTo({ top: 0, behavior: 'instant' in document.documentElement.style ? 'instant' : 'auto' });
      requestAnimationFrame(() => setTransitioning(false));
    }, 280);
  };

  const toContact = (e?: MouseEvent) => {
    if (e && e.preventDefault) e.preventDefault();
    navigate('contact');
  };
  const toHome = (e?: MouseEvent) => {
    if (e && e.preventDefault) e.preventDefault();
    navigate('home');
  };

  useEffect(() => {
    const fn = () => setPage(pageFromHash());
    window.addEventListener('hashchange', fn);
    return () => window.removeEventListener('hashchange', fn);
  }, []);

  return (
    <div className={`transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
      {page === 'home' ? (
        <HomePage onHome={toHome} onContact={toContact} onNavigate={navigate} />
      ) : page === 'events' ? (
        <EventsPage onHome={toHome} onContact={toContact} onNavigate={navigate} />
      ) : page === 'products' ? (
        <ProductsPage onHome={toHome} onContact={toContact} onNavigate={navigate} />
      ) : (
        <ContactPage onHome={toHome} />
      )}
    </div>
  );
}
