import { motion } from 'framer-motion';
import { BrainCircuit, Globe, Users } from 'lucide-react';
import { experience, certifications } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

const certificationIcons = {
  networking: Globe,
  ai: BrainCircuit,
  collaboration: Users,
} as const;

const typeColors: Record<string, string> = {
  Internship: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Volunteer: 'text-green-400 bg-green-400/10 border-green-400/20',
  'Full-time': 'text-purple-400 bg-purple-400/10 border-purple-400/20',
};

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="section-padding bg-ink-900">
      <div className="container-max">
        <div ref={ref} className="fade-in-section">
          <div className="mb-16">
            <p className="font-mono text-gold-500 text-sm mb-3 tracking-widest uppercase">04 / Experience</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Where I've
              <br />
              <span className="text-gradient">worked</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-ink-600 hidden sm:block" />

            <div className="space-y-10">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative sm:pl-16 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-6 top-6 w-2.5 h-2.5 rounded-full bg-gold-500 -translate-x-[4.5px] hidden sm:block ring-4 ring-ink-900" />

                  <div className="card-glass p-6 hover:border-gold-500/20 transition-colors duration-300 group">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-200 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-gold-400 font-medium text-sm mt-0.5">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-mono border ${
                            typeColors[exp.type] || 'text-slate-400 bg-ink-700 border-ink-600'
                          }`}
                        >
                          {exp.type}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                    <ul className="space-y-1.5">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="text-gold-500 mt-0.5 shrink-0 text-xs">▸</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-20">
            <h3 className="font-display text-2xl font-bold text-white mb-8">
              Certifications
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {certifications.map((cert, i) => {
                const Icon = certificationIcons[cert.iconKey as keyof typeof certificationIcons] ?? Globe;

                return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="card-glass p-5 flex items-center gap-4 hover:border-gold-500/20 transition-colors duration-300"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-300">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm">{cert.name}</p>
                    <p className="text-slate-500 text-xs font-mono">{cert.issuer}</p>
                  </div>
                </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
