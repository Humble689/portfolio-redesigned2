import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personal } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const ref = useScrollReveal();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(personal.formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const socials = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Github, label: 'GitHub', value: 'github.com/Humble689', href: personal.github },
    { icon: Linkedin, label: 'LinkedIn', value: 'Lufene Mark Travis', href: personal.linkedin },
  ];

  return (
    <section id="contact" className="section-padding bg-ink-900">
      <div className="container-max">
        <div ref={ref} className="fade-in-section">
          <div className="mb-16">
            <p className="font-mono text-gold-500 text-sm mb-3 tracking-widest uppercase">06 / Contact</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Let's build
              <br />
              <span className="text-gradient">something together</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left — info */}
            <div className="space-y-8">
              <p className="text-slate-300 leading-relaxed">
                I'm open to full-time roles, internships, freelance work, and collaborative projects — especially
                in full-stack development, cybersecurity, or AI systems. If you have a problem that needs
                solving, let's talk.
              </p>

              <div className="space-y-4">
                {socials.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 card-glass rounded-xl flex items-center justify-center group-hover:border-gold-500/30 transition-colors">
                      <Icon size={16} className="text-gold-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-mono">{label}</p>
                      <p className="text-white text-sm group-hover:text-gold-300 transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Response time note */}
              <div className="card-glass p-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0" />
                <p className="text-slate-400 text-sm">
                  Usually responds within 24 hours
                </p>
              </div>
            </div>

            {/* Right — form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {[
                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-widest">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-3 bg-ink-800 border border-ink-600 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-200 text-sm"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-ink-800 border border-ink-600 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all duration-200 text-sm resize-none"
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle size={16} />
                  Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  Something went wrong. Try emailing me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 text-ink-950 font-semibold rounded-xl hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-ink-900/30 border-t-ink-900 rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
