import { Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 border-t border-ink-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-lg text-white">
              LMT<span className="text-gold-400">.</span>
            </p>
            <p className="text-slate-500 text-xs mt-1">
              © {year} Lufene Mark Travis. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-500 hover:text-gold-400 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 hover:text-gold-400 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="text-slate-500 hover:text-gold-400 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-slate-600 text-xs font-mono text-center sm:text-right">
            Built with React + Tailwind CSS
            <br />
            Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
