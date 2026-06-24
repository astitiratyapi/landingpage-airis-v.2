// ============================================================
// AIRIS PACS — Navbar
// ============================================================
import { useEffect, useState, type MouseEvent } from 'react';
import { Button, Container, Icon, Logo } from '../components/ui';
import { NAV_LINKS, type NavLink } from '../data';
import type { NavHandler, Navigate } from '../types';

interface NavbarProps {
  onContact: NavHandler;
  onHome: NavHandler;
  onNavigate: Navigate;
}

export function Navbar({ onContact, onHome, onNavigate }: NavbarProps) {
  const handleLink = (l: NavLink) => (e: MouseEvent) => {
    if (l.page && onNavigate) {
      e.preventDefault();
      onNavigate(l.page);
    }
  };
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-line shadow-sm' : 'bg-transparent border-b border-transparent'}`}
    >
      <Container className="flex items-center justify-between h-[68px]">
        <button
          onClick={(e) => {
            onHome(e);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="AIRIS PACS — go to home"
          className="cursor-pointer"
        >
          <Logo dark={!scrolled} />
        </button>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={handleLink(l)}
              className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${scrolled ? 'text-ink-muted hover:text-brand hover:bg-brand-50' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Button variant={scrolled ? 'ghost' : 'outline-light'} size="md" onClick={onContact}>
            Contact Us
          </Button>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? 'text-ink' : 'text-white'}`}
        >
          <Icon name={open ? 'x' : 'menu'} className="w-6 h-6" />
        </button>
      </Container>
      {open && (
        <div className="lg:hidden bg-white border-b border-line shadow-lift">
          <Container className="py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => {
                  handleLink(l)(e);
                  setOpen(false);
                }}
                className="px-3 py-3 rounded-md text-ink-muted font-medium hover:bg-brand-50 hover:text-brand"
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-line">
              <Button variant="outline" size="md" onClick={onContact}>
                Contact Us
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
