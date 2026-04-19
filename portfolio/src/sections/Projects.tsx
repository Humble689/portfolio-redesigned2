import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import { projects } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Filter = 'all' | 'featured';

export default function Projects() {
  const ref = useScrollReveal();
  const [filter, setFilter] = useState<Filter>('all');

  const filtered = filter === 'featured' ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="section-padding bg-ink-950">
      <div className="container-max">
        <div ref={ref} className="fade-in-section">
          {/* Header */}
          <div className="mb-12">
            <p className="font-mono text-gold-500 text-sm mb-3 tracking-widest uppercase">03 / Projects</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
                Things I've
                <br />
                <span className="text-gradient">built</span>
              </h2>

              {/* Filter tabs */}
              <div className="flex gap-2 self-start sm:self-auto">
                {(['all', 'featured'] as Filter[]).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
                      filter === f
                        ? 'bg-gold-500 text-ink-950'
                        : 'bg-ink-800 text-slate-400 border border-ink-600 hover:border-gold-500/30 hover:text-white'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects grid */}
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid md:grid-cols-2 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className={`card-glass p-6 hover:border-gold-500/25 transition-all duration-300 group flex flex-col ${
                    project.featured ? 'ring-1 ring-gold-500/10' : ''
                  }`}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="flex items-center gap-1 px-2 py-0.5 bg-gold-500/10 border border-gold-500/20 rounded-full text-xs text-gold-400 font-mono">
                          <Star size={10} fill="currentColor" />
                          Featured
                        </span>
                      )}
                      <span className="px-2 py-0.5 bg-ink-700 rounded-full text-xs text-slate-400 font-mono">
                        {project.status}
                      </span>
                    </div>

                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-gold-400 transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-gold-400 transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold-200 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights.length > 0 && (
                    <ul className="mb-4 space-y-1">
                      {project.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs text-slate-500">
                          <span className="text-gold-500 mt-0.5 shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-ink-700">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-slate-500 mb-4 text-sm">More work available on GitHub</p>
            <a
              href="https://github.com/Humble689"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-ink-600 text-slate-300 rounded-xl hover:border-gold-500/40 hover:text-gold-300 transition-all duration-200 text-sm font-medium"
            >
              <Github size={16} />
              View all 54 repositories
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
