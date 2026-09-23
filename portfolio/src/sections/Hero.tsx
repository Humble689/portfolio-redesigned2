import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personal } from '../data/content';

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-ink-950">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(175,146,87,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(175,146,87,0.8) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={stagger.item} className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/85 px-4 py-1.5 dark:border-ink-600 dark:bg-ink-800/60">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-gold-200">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={stagger.item}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-none tracking-tight"
          >
            <span className="text-white">Lufene</span>{' '}
            <br className="sm:hidden" />
            <span className="text-gold-400">Mark Travis</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={stagger.item}
            className="text-xl sm:text-2xl text-slate-400 font-light mb-4 tracking-wide"
          >
            Software Developer &amp; CS Graduate
          </motion.p>

          {/* Location */}
          <motion.p variants={stagger.item} className="text-slate-500 font-mono text-sm mb-8 inline-flex items-center gap-2">
            <MapPin size={14} className="text-gold-400" />
            <span>Kampala, Uganda</span>
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={stagger.item}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {personal.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={stagger.item}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            <a
              href="#projects"
              className="order-1 inline-flex items-center justify-center px-6 py-3 bg-gold-500 text-ink-950 font-semibold rounded-xl hover:bg-gold-400 transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/20 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="/Lufene_Mark_Travis_Resume.pdf"
              download="Lufene_Mark_Travis_Resume.pdf"
              className="order-2 inline-flex items-center justify-center gap-2 px-6 py-3 bg-ink-800 text-white font-semibold rounded-xl border border-ink-600 hover:border-gold-500/40 hover:bg-ink-700 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#contact"
              className="order-3 inline-flex items-center justify-center px-6 py-3 bg-ink-800 text-white font-semibold rounded-xl border border-ink-600 hover:border-gold-500/40 hover:bg-ink-700 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={stagger.item} className="mb-12 sm:mb-0 flex items-center justify-center gap-3 sm:gap-6 px-4">
            <div className="hidden sm:block h-px w-16 bg-ink-700" />
            {[
              { icon: Github, href: personal.github, label: 'GitHub' },
              { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:text-gold-400 hover:bg-ink-800/60 transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
            <div className="hidden sm:block h-px w-16 bg-ink-700" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
