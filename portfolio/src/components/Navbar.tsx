import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Download, } from 'lucide-react';
import type { Theme } from '../hooks/useTheme';

// components/icons/BatIcon.tsx
export const BatIcon = ({ size = 15 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 3c.6 1.1 1.1 1.9 2.2 2.4.3-.9.9-1.6 1.8-2 .1 1 .1 1.8-.2 2.7 1.8-.3 3.3-1.1 4.7-2.4-.3 2.1-1.5 3.7-3.2 4.9 1.6.1 2.9.7 4.2 1.6-1.9.5-3.5.5-5.3.1.9.9 1.4 1.9 1.6 3.1-1.3-.7-2.4-1.4-3.2-2.6-.2 1.5-.7 2.7-1.7 3.9-.2-1.3-.5-2.3-1.1-3.4-.6 1.1-.9 2.1-1.1 3.4-1-1.2-1.5-2.4-1.7-3.9-.8 1.2-1.9 1.9-3.2 2.6.2-1.2.7-2.2 1.6-3.1-1.8.4-3.4.4-5.3-.1 1.3-.9 2.6-1.5 4.2-1.6-1.7-1.2-2.9-2.8-3.2-4.9 1.4 1.3 2.9 2.1 4.7 2.4-.3-.9-.3-1.7-.2-2.7.9.4 1.5 1.1 1.8 2C10.9 4.9 11.4 4.1 12 3z" />
  </svg>
);

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

type NavbarProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollActive = () => {
      // Pick the last section whose top has crossed a viewport threshold.
      const threshold = window.scrollY + window.innerHeight * 0.35;
      let current = '';

      for (const link of links) {
        const sectionId = link.href.slice(1);
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= threshold) {
          current = link.href;
        }
      }

      setActive(current);
    };

    handleScrollActive();
    window.addEventListener('scroll', handleScrollActive, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-ink-950/90 backdrop-blur-md border-b border-ink-700/50'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-[0_6px_24px_rgba(15,23,42,0.06)]'
          : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`group inline-flex items-center gap-2 font-display font-bold text-lg transition-colors ${
            theme === 'dark' ? 'text-white hover:text-gold-300' : 'text-slate-900 hover:text-gold-700'
          }`}
          aria-label="LMT home"
        >

          
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg border">
            <BatIcon size={15} />
          </span>
          <span>
            LMT<span className="text-gold-400">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-sm font-body font-medium transition-colors hover-underline ${
                  active === link.href
                    ? 'text-gold-500'
                    : theme === 'dark'
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 ${
                theme === 'dark'
                  ? 'border-ink-600 bg-ink-800 text-gold-300 hover:border-gold-500/40 hover:bg-ink-700'
                  : 'border-slate-300 bg-white text-slate-700 hover:border-gold-500/40 hover:text-gold-700'
              }`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </li>
          <li>
            <a
              href="/Lufene_Mark_Travis_Resume.pdf"
              download="Lufene_Mark_Travis_Resume.pdf"
              className={`inline-flex items-center gap-2 px-4 py-2 border text-sm font-medium rounded-lg transition-all duration-200 ${
                theme === 'dark'
                  ? 'border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-gold-500/40'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-gold-500/40'
              }`}
            >
              <Download size={16} />
              CV
            </a>
          </li>
          <li>
            <a
              href="mailto:marktravis689@gmail.com"
              className="px-4 py-2 border border-gold-500/50 text-gold-400 text-sm font-medium rounded-lg hover:bg-gold-500/10 transition-all duration-200"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-1.5">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
              theme === 'dark'
                ? 'border-ink-600 bg-ink-800 text-gold-300'
                : 'border-slate-300 bg-white text-slate-700'
            }`}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 transition-all duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-slate-800'} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 transition-all duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-slate-800'} ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 transition-all duration-300 ${theme === 'dark' ? 'bg-white' : 'bg-slate-800'} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden backdrop-blur-md border-b ${
              theme === 'dark' ? 'bg-ink-900/95 border-ink-700' : 'bg-white/95 border-slate-200'
            }`}
          >
            <ul className="px-6 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleNav(link.href)}
                    className={`block rounded-lg px-2.5 py-2 font-medium transition-colors ${
                      active === link.href
                        ? 'text-gold-500 bg-gold-500/10'
                        : theme === 'dark'
                          ? 'text-slate-300 hover:text-gold-400'
                          : 'text-slate-700 hover:text-gold-700'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-1 grid grid-cols-2 gap-2">
                <a
                  href="/Lufene_Mark_Travis_Resume.pdf"
                  download="Lufene_Mark_Travis_Resume.pdf"
                  className={`inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    theme === 'dark'
                      ? 'border border-ink-600 bg-ink-800 text-slate-200 hover:border-gold-500/40'
                      : 'border border-slate-300 bg-white text-slate-700 hover:border-gold-500/40'
                  }`}
                >
                  <Download size={15} />
                  CV
                </a>
                <a
                  href="mailto:marktravis689@gmail.com"
                  className="inline-flex items-center justify-center rounded-lg border border-gold-500/50 px-3 py-2.5 text-sm font-medium text-gold-400 hover:bg-gold-500/10 transition-colors"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
