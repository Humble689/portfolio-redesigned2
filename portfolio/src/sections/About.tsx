import { motion } from 'framer-motion';
import { about } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section-padding bg-ink-950">
      <div className="container-max">
        <div ref={ref} className="fade-in-section">
          {/* Header */}
          <div className="mb-16">
            <p className="font-mono text-gold-500 text-sm mb-3 tracking-widest uppercase">01 / About</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              The person behind
              <br />
              <span className="text-gradient">the keyboard</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bio */}
            <div className="space-y-5">
              {about.bio.split('\n\n').map((para, i) => (
                <p key={i} className="text-slate-300 leading-relaxed text-base">
                  {para}
                </p>
              ))}

              {/* Affiliations */}
              <div className="pt-4 flex flex-wrap gap-3">
                {[
                  { name: 'GitHub', url: 'https://github.com/Humble689' },
                  { name: 'DataCamp', url: 'https://www.datacamp.com/portfolio/marktravis689' },
                  { name: 'Kaggle', url: 'https://www.kaggle.com/marktravis689' },
                  { name: 'Statistics Without Borders', url: 'https://www.statisticswithoutborders.org' },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tag hover:border-gold-500/40 hover:text-gold-300 transition-colors"
                  >
                    {link.name} ↗
                  </a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {about.highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="card-glass p-6 hover:border-gold-500/20 transition-colors duration-300 group"
                >
                  <p className="font-display text-4xl font-black text-gold-400 group-hover:text-gold-300 transition-colors">
                    {h.value}
                  </p>
                  <p className="text-slate-400 text-sm mt-1">{h.label}</p>
                </motion.div>
              ))}

              {/* UCU card */}
              <div className="col-span-2 card-glass p-6 hover:border-gold-500/20 transition-colors duration-300">
                <p className="text-xs font-mono text-gold-500 uppercase tracking-widest mb-2">Education</p>
                <p className="text-white font-semibold">BSc Computer Science</p>
                <p className="text-slate-400 text-sm">Uganda Christian University, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
