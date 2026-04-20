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

const techLogoMap: Record<string, string> = {
  Python: 'https://cdn.simpleicons.org/python/3776AB',
  JavaScript: 'https://cdn.simpleicons.org/javascript/F7DF1E',
  SQL: 'https://cdn.simpleicons.org/mysql/4479A1',
  C: 'https://cdn.simpleicons.org/c/A8B9CC',
  'HTML/CSS': 'https://cdn.simpleicons.org/html5/E34F26',
  LaTeX: 'https://cdn.simpleicons.org/latex/008080',
  React: 'https://cdn.simpleicons.org/react/61DAFB',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs/5FA04E',
  Express: 'https://cdn.simpleicons.org/express/111111',
  MongoDB: 'https://cdn.simpleicons.org/mongodb/47A248',
  PostgreSQL: 'https://cdn.simpleicons.org/postgresql/4169E1',
  'Scikit-learn': 'https://cdn.simpleicons.org/scikitlearn/F7931E',
  TensorFlow: 'https://cdn.simpleicons.org/tensorflow/FF6F00',
  Pandas: 'https://cdn.simpleicons.org/pandas/150458',
  Wireshark: 'https://cdn.simpleicons.org/wireshark/1679A7',
  Git: 'https://cdn.simpleicons.org/git/F05032',
  GitHub: 'https://cdn.simpleicons.org/github/181717',
  'VS Code': 'https://cdn.simpleicons.org/visualstudiocode/007ACC',
  Docker: 'https://cdn.simpleicons.org/docker/2496ED',
  Linux: 'https://cdn.simpleicons.org/linux/FCC624',
  Firebase: 'https://cdn.simpleicons.org/firebase/DD2C00',
  Vite: 'https://cdn.simpleicons.org/vite/646CFF',
};

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
                    <span key={item} className="tag text-xs inline-flex items-center gap-1.5">
                      {techLogoMap[item] ? (
                        <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] bg-black/10 dark:bg-white/5">
                          <img
                            src={techLogoMap[item]}
                            alt={`${item} logo`}
                            className="h-3.5 w-3.5"
                            loading="lazy"
                          />
                        </span>
                      ) : null}
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
