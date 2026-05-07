'use client';

import { Code2, Layers3, MonitorSmartphone, Palette, Sparkles, Video } from 'lucide-react';
import SectionReveal from './SectionReveal';

const PRINCIPLES = [
  {
    title: 'Clean Frontend',
    icon: Code2,
    text: 'Reusable components, readable code, and layouts that are simple to maintain.',
    color: '#8B5CF6',
  },
  {
    title: 'Responsive First',
    icon: MonitorSmartphone,
    text: 'Interfaces designed to feel natural across phones, tablets, and desktop screens.',
    color: '#06B6D4',
  },
  {
    title: 'Visual Design',
    icon: Palette,
    text: 'Strong spacing, color, hierarchy, and creative polish for memorable digital experiences.',
    color: '#EC4899',
  },
  {
    title: 'Creative Media',
    icon: Video,
    text: 'Graphic design and video editing skills that make web projects feel more complete.',
    color: '#10B981',
  },
  {
    title: 'AI Assisted',
    icon: Sparkles,
    text: 'Using modern AI tools and prompt engineering to speed up ideation and workflows.',
    color: '#F59E0B',
  },
  {
    title: 'Easy to Edit',
    icon: Layers3,
    text: 'Beginner-friendly project structure with content that can be updated without confusion.',
    color: '#F97316',
  },
];

const DOUBLED = [...PRINCIPLES, ...PRINCIPLES];

function PrincipleCard({ item }: { item: typeof PRINCIPLES[0] }) {
  const Icon = item.icon;

  return (
    <div
      className="flex-shrink-0 w-80 glass rounded-3xl p-6 border border-white/6 mx-3 hover:border-violet-500/25 transition-all duration-300 cursor-default"
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
        style={{ background: `${item.color}14`, border: `1px solid ${item.color}25` }}
      >
        <Icon size={21} style={{ color: item.color }} />
      </div>
      <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ background: 'linear-gradient(to right, transparent, #8B5CF6, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <SectionReveal className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-amber-400 border border-amber-500/25 bg-amber-500/8 mb-4">
            Work Style
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            How I <span className="gradient-text">Build</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The principles behind my frontend, design, media, and AI learning workflow.
          </p>
        </SectionReveal>
      </div>

      <div className="relative mb-5 overflow-hidden">
        <div className="absolute left-0 inset-y-0 w-24 z-10" style={{ background: 'linear-gradient(to right, #050816, transparent)' }} />
        <div className="absolute right-0 inset-y-0 w-24 z-10" style={{ background: 'linear-gradient(to left, #050816, transparent)' }} />
        <div className="flex marquee-track">
          {DOUBLED.map((item, i) => (
            <PrincipleCard key={`${item.title}-${i}`} item={item} />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 inset-y-0 w-24 z-10" style={{ background: 'linear-gradient(to right, #050816, transparent)' }} />
        <div className="absolute right-0 inset-y-0 w-24 z-10" style={{ background: 'linear-gradient(to left, #050816, transparent)' }} />
        <div className="flex" style={{ animation: 'marquee 32s linear infinite reverse' }}>
          {[...DOUBLED].reverse().map((item, i) => (
            <PrincipleCard key={`rev-${item.title}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
