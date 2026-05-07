'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Brain, Code2, GraduationCap, Palette, PlaySquare, Smartphone } from 'lucide-react';
import SectionReveal from './SectionReveal';

const HIGHLIGHTS = [
  { label: 'BTech CSE Student', icon: GraduationCap, color: '#8B5CF6' },
  { label: 'Frontend Development', icon: Code2, color: '#06B6D4' },
  { label: 'Responsive UI/UX', icon: Smartphone, color: '#EC4899' },
  { label: 'AI & Modern Tech', icon: Brain, color: '#10B981' },
];

const FOCUS_AREAS = [
  'React and modern frontend technologies',
  'Responsive layouts and clean user interfaces',
  'Graphic design, branding, and creative media',
  'Video editing, content creation, and AI tools',
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10 blur-3xl rounded-full"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-violet-400 border border-violet-500/25 bg-violet-500/8 mb-4">
            About Me
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Creative Mindset,{' '}
            <span className="gradient-text">Developer Focus</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I am building a portfolio at the intersection of frontend engineering, visual design,
            creative content, and AI-assisted workflows.
          </p>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-20">
          <SectionReveal direction="left">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-sm mx-auto border border-violet-500/20 bg-[#0F172A] shadow-card-dark">
                <Image
                  src="/images/ganesh-profile.jpeg"
                  alt="Ganesh Hetkar profile illustration"
                  fill
                  sizes="(min-width: 1024px) 384px, 90vw"
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-xl">Ganesh Hetkar</p>
                  <p className="text-slate-300 text-sm">Frontend Developer | Designer | Creator</p>
                </div>
              </div>

              <motion.div
                className="absolute -right-4 top-12 glass rounded-2xl p-4 border border-cyan-500/20 max-w-[170px]"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Palette size={20} className="text-cyan-400 mb-2" />
                <p className="text-white text-sm font-bold">Design Sense</p>
                <p className="text-slate-400 text-xs">Visual-first interfaces</p>
              </motion.div>

              <motion.div
                className="absolute -left-4 bottom-16 glass rounded-2xl p-4 border border-pink-500/20 max-w-[170px]"
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <PlaySquare size={20} className="text-pink-400 mb-2" />
                <p className="text-white text-sm font-bold">Creative Media</p>
                <p className="text-slate-400 text-xs">Editing and content</p>
              </motion.div>
            </div>
          </SectionReveal>

          <SectionReveal direction="right" delay={0.15}>
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-black text-white leading-tight">
                Learning, designing, and building{' '}
                <span className="gradient-text">modern web experiences</span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I am Ganesh Hetkar, a BTech CSE student passionate about frontend development,
                responsive UI/UX design, and modern digital products. I enjoy turning ideas into
                clean interfaces that feel polished, useful, and easy to interact with.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Along with coding, I bring experience in graphic design, video editing, and content
                creation. That creative background helps me think beyond layouts and build websites
                with stronger visuals, better storytelling, and a more memorable user experience.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I am actively learning React, Next.js, Tailwind CSS, AI tools, and prompt engineering
                so I can create faster, smarter, and more expressive digital experiences.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {FOCUS_AREAS.map((area) => (
                  <div key={area} className="flex items-start gap-3 rounded-2xl bg-slate-900/50 border border-white/5 p-4">
                    <span className="mt-1 w-2 h-2 rounded-full bg-cyan-400 shadow-glow-cyan flex-shrink-0" />
                    <span className="text-sm text-slate-300">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map(({ label, icon: Icon, color }, i) => (
            <SectionReveal key={label} delay={i * 0.08}>
              <div className="glass rounded-3xl p-6 text-center border border-white/5 hover:border-violet-500/25 transition-all duration-300 group hover:shadow-glow-purple h-full">
                <div
                  className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ background: `${color}18`, border: `1px solid ${color}28` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <p className="text-white font-bold">{label}</p>
                <p className="text-slate-500 text-sm mt-2">Growing every project</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
