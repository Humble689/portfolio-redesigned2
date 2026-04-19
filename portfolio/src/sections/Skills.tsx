import { motion } from 'framer-motion';
import { Braces, BrainCircuit, LockKeyhole, Monitor, ServerCog, Wrench } from 'lucide-react';
import { skills } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skillIcons = {
  languages: Braces,
  frontend: Monitor,
  backend: ServerCog,
  ai: BrainCircuit,
  security: LockKeyhole,
  devops: Wrench,
} as const;

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="section-padding bg-ink-900">
      <div className="container-max">
        <div ref={ref} className="fade-in-section">
          <div className="mb-16">
            <p className="font-mono text-gold-500 text-sm mb-3 tracking-widest uppercase">02 / Skills</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Tools of the
              <br />
              <span className="text-gradient">trade</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, i) => {
              const Icon = skillIcons[group.iconKey as keyof typeof skillIcons] ?? Braces;

              return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-glass p-6 hover:border-gold-500/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gold-500/30 bg-gold-500/10 text-gold-300">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display font-bold text-white text-lg group-hover:text-gold-300 transition-colors">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
