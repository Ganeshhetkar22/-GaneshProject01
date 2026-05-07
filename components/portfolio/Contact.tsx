'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, FileText, Github, Linkedin, Loader2, Mail, Send } from 'lucide-react';
import SectionReveal from './SectionReveal';

const EMAIL = 'ganeshhetkar1985@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/ganeshhetkar23/';
const GITHUB = 'https://github.com/Ganeshhetkar22';

const CONTACT_LINKS = [
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, color: '#8B5CF6' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/ganeshhetkar23', href: LINKEDIN, color: '#06B6D4' },
  { icon: Github, label: 'GitHub', value: 'github.com/Ganeshhetkar22', href: GITHUB, color: '#EC4899' },
  { icon: FileText, label: 'Resume', value: 'View CV / Resume', href: '/resume', color: '#F59E0B' },
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const subject = encodeURIComponent(form.subject || 'Portfolio enquiry');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus('sent'), 700);
  };

  const Field = ({
    name,
    label,
    type = 'text',
    textarea = false,
  }: {
    name: keyof typeof form;
    label: string;
    type?: string;
    textarea?: boolean;
  }) => {
    const isFocused = focused === name;
    const hasValue = form[name].length > 0;
    const Tag = textarea ? 'textarea' : 'input';

    return (
      <div className="relative">
        <label
          className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
            isFocused || hasValue
              ? 'top-2 text-xs font-semibold text-violet-400'
              : 'top-1/2 -translate-y-1/2 text-sm text-slate-400'
          } ${textarea && !isFocused && !hasValue ? '!top-4 !-translate-y-0' : ''}`}
        >
          {label}
        </label>
        <Tag
          name={name}
          type={type}
          value={form[name]}
          onChange={e => setForm(f => ({ ...f, [name]: e.target.value }))}
          onFocus={() => setFocused(name)}
          onBlur={() => setFocused(null)}
          required={name !== 'subject'}
          className={`w-full bg-slate-900/60 border border-slate-700/60 rounded-2xl px-4 text-white text-sm input-glow transition-all duration-300 resize-none ${
            textarea ? 'pt-7 pb-4 min-h-[140px]' : 'pt-7 pb-3'
          } ${isFocused ? 'border-violet-500/50' : 'hover:border-slate-600/80'}`}
          style={{ outline: 'none' }}
          {...(textarea ? { rows: 5 } : {})}
        />
      </div>
    );
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-96 opacity-8 blur-3xl"
        style={{ background: 'radial-gradient(ellipse, #8B5CF6, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mb-20">
          <div
            className="relative rounded-3xl p-8 sm:p-12 text-center overflow-hidden border border-violet-500/20"
            style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(6,182,212,0.08) 50%, rgba(236,72,153,0.1) 100%)' }}
          >
            <div className="absolute inset-0 opacity-20"
              style={{ background: 'radial-gradient(circle at 30% 50%, rgba(139,92,246,0.3), transparent 60%), radial-gradient(circle at 70% 50%, rgba(6,182,212,0.2), transparent 60%)' }} />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
                Let&apos;s Build Something{' '}
                <span className="gradient-text">Modern</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Have a website idea, design request, video editing project, or collaboration in mind?
                Reach out and I will be happy to connect.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {CONTACT_LINKS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === 'Email' || label === 'Resume' ? undefined : '_blank'}
                    rel={label === 'Email' || label === 'Resume' ? undefined : 'noreferrer'}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-semibold shimmer-btn hover:scale-105 hover:shadow-glow-purple transition-all duration-300"
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        <div id="contact-form" className="grid lg:grid-cols-5 gap-8 sm:gap-12">
          <SectionReveal direction="left" className="lg:col-span-2">
            <div className="flex flex-col gap-8 h-full">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-violet-400 border border-violet-500/25 bg-violet-500/8 mb-4">
                  Contact
                </span>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                  Connect With{' '}
                  <span className="gradient-text">Ganesh</span>
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  I am open to frontend projects, creative design work, video editing, and learning-focused
                  collaborations around AI and modern web technologies.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {CONTACT_LINKS.map(({ icon: Icon, label, value, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === 'Email' || label === 'Resume' ? undefined : '_blank'}
                    rel={label === 'Email' || label === 'Resume' ? undefined : 'noreferrer'}
                    className="glass rounded-2xl p-4 border border-white/5 flex items-center gap-4 hover:border-violet-500/20 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                      <Icon size={18} style={{ color }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-slate-500 text-xs">{label}</p>
                      <p className="text-white text-sm font-semibold break-words group-hover:text-violet-300 transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="right" delay={0.15} className="lg:col-span-3">
            <div className="glass rounded-3xl p-8 border border-white/5">
              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-80 text-center gap-4"
                >
                  <CheckCircle size={48} className="text-emerald-400" />
                  <h3 className="text-2xl font-black text-white">Email Draft Opened</h3>
                  <p className="text-slate-400">Your mail app should now have the message ready to send.</p>
                  <button
                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="mt-2 px-6 py-2.5 rounded-xl shimmer-btn text-white font-semibold hover:scale-105 transition-transform"
                  >
                    Write Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field name="name" label="Your Name" />
                    <Field name="email" label="Email Address" type="email" />
                  </div>
                  <Field name="subject" label="Subject" />
                  <Field name="message" label="Your Message" textarea />

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="flex items-center justify-center gap-3 py-4 rounded-2xl text-white font-bold shimmer-btn hover:scale-105 hover:shadow-glow-purple transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Opening Mail...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
