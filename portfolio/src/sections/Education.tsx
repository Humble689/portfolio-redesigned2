import { motion } from 'framer-motion';
import { education } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="section-padding bg-ink-950">
      <div className="container-max">
        <div ref={ref} className="fade-in-section">
          <div className="mb-16">
            <p className="font-mono text-gold-500 text-sm mb-3 tracking-widest uppercase">05 / Education</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Academic
              <br />
              <span className="text-gradient">background</span>
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-glass p-6 sm:p-8 hover:border-gold-500/20 transition-colors duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-200 transition-colors mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-gold-400 font-medium text-sm">{edu.institution}</p>
                    {edu.location && (
                      <p className="text-slate-500 text-xs font-mono mt-0.5">{edu.location}</p>
                    )}

                    {edu.highlights.length > 0 && (
                      <ul className="mt-4 space-y-1">
                        {edu.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="text-gold-500 shrink-0 mt-0.5 text-xs">▸</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <span className="text-xs font-mono text-slate-500 shrink-0 bg-ink-700 px-3 py-1.5 rounded-lg self-start">
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
