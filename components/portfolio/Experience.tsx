'use client';

import { motion } from 'framer-motion';
import { BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import SectionReveal from './SectionReveal';

const JOURNEY = [
  {
    period: 'Current',
    title: 'BTech CSE Student',
    org: 'Computer Science & Engineering',
    type: 'Education',
    desc: 'Building a strong foundation in computer science while learning modern frontend development and digital product thinking.',
    achievements: ['Programming fundamentals', 'Web development practice', 'Project-based learning'],
    color: '#8B5CF6',
  },
  {
    period: 'Learning Now',
    title: 'Frontend Development',
    org: 'React, Next.js & Tailwind CSS',
    type: 'Skill Track',
    desc: 'Practicing responsive interfaces, reusable components, animations, dark UI systems, and beginner-friendly production code.',
    achievements: ['React components', 'Responsive layouts', 'Modern UI polish'],
    color: '#06B6D4',
  },
  {
    period: 'Creative Work',
    title: 'Graphic Design & Video Editing',
    org: 'Digital Media Creation',
    type: 'Creative',
    desc: 'Creating graphics, social content, thumbnails, and edited videos with a focus on visual clarity and audience engagement.',
    achievements: ['Canva workflows', 'Content design', 'Short-form editing'],
    color: '#EC4899',
  },
  {
    period: 'Exploring',
    title: 'AI Tools & Prompt Engineering',
    org: 'Modern Productivity',
    type: 'AI Learning',
    desc: 'Learning how AI tools can support ideation, design, coding, content creation, and faster creative development workflows.',
    achievements: ['Prompt writing', 'AI-assisted design', 'Creative automation'],
    color: '#10B981',
  },
];

const EDUCATION = [
  {
    period: 'Current',
    title: 'BTech in Computer Science Engineering',
    org: 'CSE Student',
    desc: 'Focused on programming, web development, modern technology, and building practical digital projects.',
    color: '#F59E0B',
  },
  {
    period: 'Ongoing',
    title: 'Frontend & Creative Technology Learning',
    org: 'Self-Learning Track',
    desc: 'Learning React, Next.js, Tailwind CSS, responsive UI/UX, AI tools, prompt engineering, and creative workflows.',
    color: '#F97316',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] opacity-8 blur-3xl"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-violet-400 border border-violet-500/25 bg-violet-500/8 mb-4">
            Journey
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Growth, Learning & <span className="gradient-text">Creative Practice</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A clear snapshot of my current learning path, creative strengths, and practical development focus.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <SectionReveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center border border-violet-500/25">
                  <Briefcase size={18} className="text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Current Focus</h3>
              </div>
            </SectionReveal>

            <div className="relative">
              <div
                className="absolute left-5 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, #8B5CF6, #06B6D4, rgba(6,182,212,0.1))' }}
              />
              <div className="flex flex-col gap-8 pl-14">
                {JOURNEY.map((item, i) => (
                  <SectionReveal key={item.title} delay={i * 0.1} direction="left">
                    <div className="relative group">
                      <div
                        className="absolute -left-[52px] top-5 w-4 h-4 rounded-full border-2"
                        style={{
                          borderColor: item.color,
                          background: '#050816',
                          boxShadow: `0 0 10px ${item.color}50`,
                        }}
                      />
                      <div className="glass rounded-3xl p-6 border border-white/5 group-hover:border-violet-500/20 transition-all duration-300">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <div>
                            <h4 className="text-white font-bold text-lg group-hover:text-violet-300 transition-colors">
                              {item.title}
                            </h4>
                            <p className="font-semibold text-sm" style={{ color: item.color }}>
                              {item.org}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-slate-400 text-xs">{item.period}</span>
                            <span
                              className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                              style={{ background: `${item.color}12`, color: item.color, border: `1px solid ${item.color}25` }}
                            >
                              {item.type}
                            </span>
                          </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map(a => (
                            <span key={a} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50">
                              <span className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>

          <div>
            <SectionReveal delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center border border-amber-500/25">
                  <GraduationCap size={18} className="text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="flex flex-col gap-5">
                {EDUCATION.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="glass rounded-2xl p-5 border border-white/5 hover:border-amber-500/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs text-slate-500">{item.period}</span>
                      <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                    </div>
                    <h4 className="text-white font-bold group-hover:text-amber-300 transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm font-semibold mb-2" style={{ color: item.color }}>{item.org}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 rounded-3xl p-6 border border-emerald-500/25 relative overflow-hidden"
                style={{ background: 'rgba(16,185,129,0.05)' }}
              >
                <div className="absolute inset-0 opacity-30"
                  style={{ background: 'radial-gradient(circle at top right, rgba(16,185,129,0.2), transparent 70%)' }} />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen size={16} className="text-emerald-400" />
                    <span className="text-emerald-400 font-bold text-sm">Always Learning</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Focused on improving every week through frontend projects, design practice, and AI-assisted workflows.
                  </p>
                  <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="mt-4 w-full py-2.5 rounded-xl text-sm font-semibold text-white text-center shimmer-btn hover:scale-105 transition-transform duration-300"
                  >
                    Get in Touch
                  </button>
                </div>
              </motion.div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
