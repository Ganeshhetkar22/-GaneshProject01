'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Palette, PenTool, Smartphone, Video } from 'lucide-react';
import SectionReveal from './SectionReveal';

const SERVICES = [
  {
    icon: Code2,
    title: 'Frontend Website Development',
    desc: 'Modern websites and frontend interfaces built with clean structure, responsive layouts, and reusable React components.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    color: '#8B5CF6',
    gradient: 'from-violet-500/20 to-violet-500/5',
  },
  {
    icon: Smartphone,
    title: 'Responsive Website Design',
    desc: 'Mobile-first page layouts that look sharp on phones, tablets, laptops, and large desktop screens.',
    tags: ['Responsive UI', 'CSS', 'Accessibility'],
    color: '#06B6D4',
    gradient: 'from-cyan-500/20 to-cyan-500/5',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    desc: 'Creative visuals for social media, digital brands, thumbnails, posters, and content-focused campaigns.',
    tags: ['Canva', 'Branding', 'Social Media'],
    color: '#EC4899',
    gradient: 'from-pink-500/20 to-pink-500/5',
  },
  {
    icon: Video,
    title: 'Video Editing',
    desc: 'Clean edits, short-form content, reels, and visual storytelling for creators, students, and small brands.',
    tags: ['Reels', 'Cuts', 'Storytelling'],
    color: '#10B981',
    gradient: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    desc: 'User-focused interface concepts, landing pages, wireframes, and design systems with a modern premium feel.',
    tags: ['UI Design', 'UX Flow', 'Landing Pages'],
    color: '#F59E0B',
    gradient: 'from-amber-500/20 to-amber-500/5',
  },
  {
    icon: PenTool,
    title: 'Content Creation',
    desc: 'Digital content ideas, visual assets, and AI-assisted creative workflows for better online presentation.',
    tags: ['Content', 'AI Tools', 'Prompting'],
    color: '#F97316',
    gradient: 'from-orange-500/20 to-orange-500/5',
  },
];

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const Icon = service.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 12;
    setTilt({ x, y });
  };

  return (
    <SectionReveal delay={index * 0.08}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative group glass rounded-3xl p-7 border border-white/5 cursor-default h-full"
      >
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}15 0%, transparent 70%)` }}
        />
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: `0 0 0 1px ${service.color}30, 0 0 30px ${service.color}10` }}
        />

        <div className="relative z-10">
          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
            style={{ border: `1px solid ${service.color}25` }}
          >
            <Icon size={24} style={{ color: service.color }} />
          </div>

          <h3 className="text-white font-bold text-xl mb-3 group-hover:text-violet-200 transition-colors">
            {service.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.desc}</p>

          <div className="flex flex-wrap gap-2">
            {service.tags.map(tag => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-medium"
                style={{
                  background: `${service.color}10`,
                  color: service.color,
                  border: `1px solid ${service.color}20`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionReveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] opacity-8 blur-3xl"
        style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-cyan-400 border border-cyan-500/25 bg-cyan-500/8 mb-4">
            What I Do
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Services That{' '}
            <span className="gradient-text">Shape Digital Presence</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Practical creative services for websites, visuals, videos, and modern online branding.
          </p>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
