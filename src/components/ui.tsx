// ============================================================
// AIRIS PACS — shared UI primitives
// ============================================================
import {
  useEffect,
  useRef,
  type ButtonHTMLAttributes,
  type ChangeEventHandler,
  type ElementType,
  type ReactNode,
} from 'react';
import { Icon, type IconName } from './Icon';
import { asset } from '../lib/asset';

// ---- Logo ----
interface LogoProps {
  dark?: boolean;
  className?: string;
}

export function Logo({ dark = false, className = 'h-8' }: LogoProps) {
  const src = asset(dark ? 'assets/airis-logo-white.png' : 'assets/airis-logo-color.png');
  return <img src={src} alt="AIRIS PACS" className={`w-auto select-none ${className}`} draggable={false} />;
}

// ---- Buttons ----
type ButtonVariant = 'primary' | 'accent' | 'outline' | 'outline-light' | 'ghost' | 'white';
type ButtonSize = 'lg' | 'md' | 'sm';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconName;
  iconLeft?: IconName;
}

export function Button({
  children,
  variant = 'primary',
  size = 'lg',
  icon,
  iconLeft,
  className = '',
  ...rest
}: ButtonProps) {
  const sizes: Record<ButtonSize, string> = {
    lg: 'h-12 px-6 text-[15px]',
    md: 'h-11 px-5 text-sm',
    sm: 'h-9 px-4 text-sm',
  };
  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-brand text-white border border-brand hover:bg-brand-600 hover:border-brand-600 shadow-[0_8px_20px_-6px_rgba(27,81,216,.5)] hover:shadow-[0_10px_26px_-6px_rgba(27,81,216,.6)]',
    accent:
      'bg-accent text-white border border-accent hover:bg-accent-600 hover:border-accent-600 shadow-[0_8px_20px_-6px_rgba(232,106,26,.5)]',
    outline: 'bg-white text-ink border border-line hover:border-brand-300 hover:text-brand',
    'outline-light':
      'bg-white/5 text-white border border-white/25 hover:bg-white/10 hover:border-white/40 backdrop-blur',
    ghost: 'bg-transparent text-ink-muted hover:text-brand hover:bg-brand-50',
    white: 'bg-white text-brand border border-white hover:bg-brand-50 shadow-lift',
  };
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 active:scale-[.98] ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {iconLeft && <Icon name={iconLeft} className="w-[18px] h-[18px]" />}
      {children}
      {icon && <Icon name={icon} className="w-[18px] h-[18px]" />}
    </button>
  );
}

// ---- Section tag (eyebrow) ----
interface SectionTagProps {
  children: ReactNode;
  dark?: boolean;
}

export function SectionTag({ children, dark = false }: SectionTagProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-bold tracking-[.18em] uppercase ${dark ? 'text-brand-300' : 'text-brand'}`}
    >
      <span className={`w-5 h-px ${dark ? 'bg-brand-400/60' : 'bg-brand/50'}`}></span>
      {children}
    </span>
  );
}

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return <div className={`w-full max-w-[1180px] mx-auto px-6 sm:px-8 ${className}`}>{children}</div>;
}

// ---- Reveal on scroll ----
interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}

export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add('in'), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <Tag ref={ref} className={`fade-up ${className}`}>
      {children}
    </Tag>
  );
}

// ---- Image placeholder ----
interface ImagePlaceholderProps {
  label: string;
  className?: string;
  dark?: boolean;
}

export function ImagePlaceholder({ label, className = '', dark = false }: ImagePlaceholderProps) {
  return (
    <div className={`relative grid place-items-center overflow-hidden ${dark ? 'ph-stripe' : 'ph-stripe-dark'} ${className}`}>
      <span
        className={`font-mono text-[11px] tracking-wide uppercase px-3 py-1 rounded-full ${dark ? 'text-white/55 bg-white/5' : 'text-ink-faint bg-black/[.03]'}`}
      >
        {label}
      </span>
    </div>
  );
}

// ---- Form field ----
interface FieldProps {
  label: string;
  type?: string;
  icon?: IconName;
  textarea?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error?: string;
  placeholder?: string;
  name?: string;
}

export function Field({ label, type = 'text', icon, textarea, value, onChange, error, placeholder, name }: FieldProps) {
  const base =
    'w-full rounded-lg border bg-white text-[15px] text-ink placeholder:text-ink-faint transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand';
  return (
    <label className="block">
      <span className="block text-[13px] font-semibold text-ink-muted mb-1.5">{label}</span>
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-faint">
            <Icon name={icon} className="w-[18px] h-[18px]" />
          </span>
        )}
        {textarea ? (
          <textarea
            name={name}
            rows={4}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${base} ${icon ? 'pl-11' : 'px-3.5'} py-3 resize-none ${error ? 'border-red-400' : 'border-line'}`}
          />
        ) : (
          <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${base} ${icon ? 'pl-11' : 'px-3.5'} h-12 ${error ? 'border-red-400' : 'border-line'}`}
          />
        )}
      </div>
      {error && <span className="block text-[12px] text-red-500 mt-1">{error}</span>}
    </label>
  );
}

export { Icon };
export type { IconName };
