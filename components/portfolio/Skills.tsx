'use client';

import { motion } from 'framer-motion';
import {
  Bot,
  Brush,
  Code2,
  FileCode2,
  Github,
  Globe2,
  Image,
  Layout,
  MonitorSmartphone,
  Palette,
  PenTool,
  Sparkles,
  Terminal,
  Type,
  Video,
  Wand2,
} from 'lucide-react';
import SectionReveal from './SectionReveal';

const SKILLS = [
  { name: 'HTML', icon: FileCode2, color: '#F97316' },
  { name: 'CSS', icon: Palette, color: '#38BDF8' },
  { name: 'JavaScript', icon: Code2, color: '#FACC15' },
  { name: 'TypeScript', icon: Type, color: '#3178C6' },
  { name: 'React', icon: Code2, color: '#61DAFB' },
  { name: 'Next.js', icon: Terminal, color: '#FFFFFF' },
  { name: 'Tailwind CSS', icon: Wand2, color: '#38BDF8' },
  { name: 'Frontend Development', icon: MonitorSmartphone, color: '#8B5CF6' },
  { name: 'Responsive Design', icon: Layout, color: '#06B6D4' },
  { name: 'UI Design', icon: Sparkles, color: '#EC4899' },
  { name: 'Graphic Design', icon: Brush, color: '#F472B6' },
  { name: 'Video Editing', icon: Video, color: '#10B981' },
  { name: 'Content Creation', icon: PenTool, color: '#F59E0B' },
  { name: 'GitHub', icon: Github, color: '#E2E8F0' },
  { name: 'Canva', icon: Image, color: '#00C4CC' },
  { name: 'AI Tools', icon: Bot, color: '#A78BFA' },
  { name: 'Prompt Engineering', icon: Sparkles, color: '#EC4899' },
  { name: 'Blogger Theme Customization', icon: Globe2, color: '#F97316' },
];

const PROFICIENCIES = [
  { name: 'Frontend Development', level: 86, color: '#8B5CF6' },
  { name: 'Responsive UI Design', level: 84, color: '#06B6D4' },
  { name: 'Graphic Design', level: 88, color: '#EC4899' },
  { name: 'Video Editing', level: 82, color: '#10B981' },
  { name: 'AI Tools & Prompting', level: 78, color: '#F59E0B' },
];

const MARQUEE_ITEMS = [...SKILLS, ...SKILLS];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(ellipse, #8B5CF6, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-emerald-400 border border-emerald-500/25 bg-emerald-500/8 mb-4">
            Skills & Tools
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Creative <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A growing toolkit across frontend development, visual design, creative media, and AI-powered workflows.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 items-start">
          <SectionReveal direction="left" className="lg:col-span-2">
            <div className="glass rounded-3xl p-7 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Core Proficiencies</h3>
              <div className="flex flex-col gap-6">
                {PROFICIENCIES.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-300">{skill.name}</span>
                      <span className="text-sm font-bold" style={{ color: skill.color }}>{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-slate-800/80 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="right" delay={0.1} className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SKILLS.map(({ name, icon: Icon, color }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="group flex items-center gap-3 p-4 rounded-2xl border cursor-default transition-all duration-300 bg-slate-900/45 hover:bg-slate-900/75"
                  style={{ borderColor: `${color}22` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${color}14`, color, border: `1px solid ${color}22` }}
                  >
                    <Icon size={18} />
                  </div>
                  <span className="text-sm font-semibold text-slate-300 leading-tight">{name}</span>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>

      <div className="mt-24 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10"
          style={{ background: 'linear-gradient(to right, #050816, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10"
          style={{ background: 'linear-gradient(to left, #050816, transparent)' }} />
        <div className="flex whitespace-nowrap marquee-track gap-4">
          {MARQUEE_ITEMS.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border flex-shrink-0"
              style={{ background: `${item.color}10`, borderColor: `${item.color}20` }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: item.color, boxShadow: `0 0 6px ${item.color}` }}
              />
              <span className="text-sm font-semibold" style={{ color: item.color }}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
