import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-ink-950">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ink-700/30 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(251,191,36,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.8) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Floating accent elements */}
      <motion.div
        className="absolute top-32 right-16 w-2 h-2 bg-gold-400 rounded-full hidden lg:block"
        animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-48 left-20 w-1 h-1 bg-gold-300 rounded-full hidden lg:block"
        animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute top-1/3 left-12 hidden lg:flex items-center gap-2 opacity-20"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="font-mono text-xs text-gold-400">{'// init()'}</span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={stagger.item} className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-ink-800 border border-gold-500/20 rounded-full text-sm font-mono text-gold-400">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={stagger.item}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-none tracking-tight"
          >
            <span className="text-white">Lufene</span>{' '}
            <br className="sm:hidden" />
            <span className="text-gradient">Mark Travis</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={stagger.item}
            className="text-xl sm:text-2xl text-slate-400 font-light mb-4 tracking-wide"
          >
            Software Developer &amp; CS Graduate
          </motion.p>

          {/* Location */}
          <motion.p variants={stagger.item} className="text-slate-500 font-mono text-sm mb-8">
            📍 Kampala, Uganda
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
            className="flex flex-wrap gap-3 justify-center mb-16"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-gold-500 text-ink-950 font-semibold rounded-xl hover:bg-gold-400 transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/20 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-ink-800 text-white font-semibold rounded-xl border border-ink-600 hover:border-gold-500/40 hover:bg-ink-700 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={stagger.item} className="flex items-center justify-center gap-6">
            <div className="h-px w-16 bg-ink-700" />
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
                className="text-slate-500 hover:text-gold-400 transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
            <div className="h-px w-16 bg-ink-700" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
}
