'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, FileText, Github, Linkedin, Mail, Sparkles, Zap } from 'lucide-react';

const EMAIL = 'ganeshhetkar1985@gmail.com';
const GITHUB = 'https://github.com/Ganeshhetkar22';
const LINKEDIN = 'https://www.linkedin.com/in/ganeshhetkar23/';

const ROLES = ['Frontend Developer', 'Graphic Designer', 'Video Editor', 'AI Learning Enthusiast'];

const TECH_STACK = ['React', 'Next.js', 'Tailwind CSS', 'Canva'];

const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 0.5,
  delay: Math.random() * 5,
  duration: Math.random() * 8 + 6,
}));

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="blob absolute w-[600px] h-[600px] opacity-20 -top-32 -left-32"
          style={{
            background: 'radial-gradient(circle, #8B5CF6, transparent 70%)',
            transform: `translate(${(mousePos.x - 50) * 0.1}px, ${(mousePos.y - 50) * 0.1}px)`,
            transition: 'transform 2s ease-out',
          }}
        />
        <div
          className="blob absolute w-[500px] h-[500px] opacity-15 -bottom-32 -right-32"
          style={{
            background: 'radial-gradient(circle, #06B6D4, transparent 70%)',
            animationDelay: '-3s',
            transform: `translate(${(mousePos.x - 50) * -0.08}px, ${(mousePos.y - 50) * -0.08}px)`,
            transition: 'transform 2s ease-out',
          }}
        />
        <div
          className="blob absolute w-96 h-96 opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, #EC4899, transparent 70%)', animationDelay: '-6s' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-violet-400/30"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size * 2, height: p.size * 2 }}
            animate={{ y: [-15, 15, -15], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(139,92,246,0.06) 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full glass-light border border-violet-500/20 text-sm text-violet-300"
          >
            <Sparkles size={14} className="text-violet-400" />
            <span>Creative developer portfolio</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              <span className="text-white block">Hi, I&apos;m</span>
              <span className="gradient-text block">Ganesh Hetkar</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-3"
          >
            <Zap size={16} className="text-cyan-400 flex-shrink-0" />
            <p className="text-xl sm:text-2xl font-semibold text-slate-300">
              {displayed}
              <span className="cursor-blink text-violet-400 ml-0.5">|</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-slate-400 text-lg leading-relaxed max-w-xl"
          >
            Frontend Developer, Graphic Designer, Video Editor, and AI Learning Enthusiast
            passionate about building modern digital experiences and creative user interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          >
            <a
              href={`mailto:${EMAIL}`}
              className="group relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl font-semibold text-white overflow-hidden shimmer-btn transition-all duration-300 hover:scale-105 hover:shadow-glow-purple flex-1 sm:flex-none text-center"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail size={16} />
                Contact Me
              </span>
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl font-semibold text-white glass-light border border-cyan-500/25 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/5 flex-1 sm:flex-none text-center"
            >
              <span className="flex items-center gap-2">
                <Linkedin size={16} />
                LinkedIn
              </span>
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl font-semibold text-white glass-light border border-violet-500/25 hover:border-violet-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/5 flex-1 sm:flex-none text-center"
            >
              <span className="flex items-center gap-2">
                <Github size={16} />
                GitHub
              </span>
            </a>
            <a
              href="/resume"
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl font-semibold text-white glass-light border border-pink-500/25 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/5 flex-1 sm:flex-none text-center"
            >
              <span className="flex items-center gap-2">
                <FileText size={16} />
                Resume / CV
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap items-center gap-4 pt-2 text-sm text-slate-400"
          >
            <span><strong className="text-white font-bold">BTech CSE</strong> Student</span>
            <span className="hidden sm:block h-4 w-px bg-white/10" />
            <span><strong className="text-white font-bold">Frontend</strong> Focused</span>
            <span className="hidden sm:block h-4 w-px bg-white/10" />
            <span><strong className="text-white font-bold">Creative</strong> Media Skills</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full spin-slow opacity-30"
            style={{ border: '1px dashed rgba(139,92,246,0.4)' }} />
          <div className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full spin-reverse opacity-20"
            style={{ border: '1px dashed rgba(6,182,212,0.4)' }} />

          <div className="relative w-56 h-56 lg:w-72 lg:h-72 float-slow">
            <div className="absolute inset-[-4px] rounded-full shimmer-btn opacity-70 blur-sm" />
            <div className="absolute inset-[-2px] rounded-full"
              style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4, #EC4899)' }} />
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0F172A]">
              <Image
                src="/images/ganesh-profile.jpeg"
                alt="Ganesh Hetkar profile illustration"
                fill
                priority
                sizes="(min-width: 1024px) 288px, 224px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/20 via-transparent to-white/5" />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-violet-500/30 pulse-ring" />
            <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 pulse-ring" style={{ animationDelay: '1s' }} />
          </div>

          <motion.div
            className="absolute -bottom-4 -left-4 lg:left-0 glass rounded-2xl p-3 border border-violet-500/20"
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-slate-400 text-xs mb-2 font-medium">Core Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {TECH_STACK.map(t => (
                <span key={t} className="px-2 py-0.5 rounded-lg bg-violet-500/15 text-violet-300 text-xs font-medium border border-violet-500/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="absolute -top-4 -right-4 lg:right-0 glass rounded-2xl px-4 py-2.5 border border-emerald-500/20"
            animate={{ y: [6, -6, 6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-semibold">Open to Learn & Build</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="scroll-indicator" />
      </motion.button>
    </section>
  );
}
