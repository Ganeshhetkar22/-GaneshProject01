'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import SectionReveal from './SectionReveal';

const GITHUB = 'https://github.com/Ganeshhetkar22';

const CATEGORIES = ['All', 'Frontend', 'Education', 'Design', 'Creative'];

const PROJECTS = [
  {
    title: 'Personal Portfolio Website',
    desc: 'A premium dark portfolio built to present frontend skills, creative services, projects, and contact links in one polished experience.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    category: 'Frontend',
    featured: true,
    color: '#8B5CF6',
    live: '#',
    github: GITHUB,
  },
  {
    title: 'StudyMitra Educational Platform',
    desc: 'A student-focused learning platform concept designed to make study resources, guidance, and academic support easier to access.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['React', 'Education', 'Responsive UI', 'UX'],
    category: 'Education',
    featured: true,
    color: '#06B6D4',
    live: '#',
    github: GITHUB,
  },
  {
    title: 'Blogger Theme Customization Project',
    desc: 'Customized Blogger themes with cleaner layouts, better visual hierarchy, responsive sections, and creator-friendly styling.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['HTML', 'CSS', 'Blogger', 'Theme Customization'],
    category: 'Frontend',
    featured: false,
    color: '#EC4899',
    live: '#',
    github: GITHUB,
  },
  {
    title: 'Landing Page UI Designs',
    desc: 'Modern landing page concepts focused on strong hero sections, clear CTAs, glassmorphism cards, and responsive design systems.',
    image: 'https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['UI Design', 'Tailwind CSS', 'Landing Pages'],
    category: 'Design',
    featured: false,
    color: '#10B981',
    live: '#',
    github: GITHUB,
  },
  {
    title: 'Graphics Design Projects',
    desc: 'A collection of social media creatives, thumbnails, posters, and visual assets created for digital storytelling and personal branding.',
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=900',
    tags: ['Canva', 'Graphic Design', 'Content Creation'],
    category: 'Creative',
    featured: false,
    color: '#F59E0B',
    live: '#',
    github: GITHUB,
  },
];

function ProjectCard({ project, featured }: { project: typeof PROJECTS[0]; featured?: boolean }) {
  const [hovered, setHovered] = useState(false);

  const imageHeight = featured ? 'h-64' : 'h-48';
  const wrapperClass = featured
    ? 'relative group rounded-3xl overflow-hidden glass border border-white/5 hover:border-violet-500/25 transition-all duration-500 cursor-default'
    : 'relative group rounded-3xl overflow-hidden glass border border-white/5 hover:border-violet-500/25 transition-all duration-500 cursor-default flex flex-col';

  return (
    <div
      className={wrapperClass}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`relative ${imageHeight} overflow-hidden`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={featured ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'}
          className={`object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
        <span
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
          style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}30` }}
        >
          {project.category}
        </span>
      </div>

      <div className={`${featured ? 'p-6' : 'p-5 flex flex-col flex-1'}`}>
        <div className="flex items-start justify-between mb-3">
          <h3 className={`${featured ? 'text-xl' : ''} text-white font-bold group-hover:text-violet-300 transition-colors`}>
            {project.title}
          </h3>
          <ArrowUpRight size={featured ? 18 : 16} className="text-slate-500 group-hover:text-violet-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <p className={`text-slate-400 text-sm leading-relaxed mb-4 ${featured ? '' : 'flex-1'}`}>{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/60 text-slate-300 border border-slate-700/50">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white glass-light border border-violet-500/25 hover:border-violet-500/50 hover:shadow-glow-purple transition-all duration-300"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href={project.live}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white glass-light border border-cyan-500/25 hover:border-cyan-500/50 hover:shadow-glow-cyan transition-all duration-300"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter);
  const featured = filtered.filter(p => p.featured);
  const rest = filtered.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] opacity-8 blur-3xl"
        style={{ background: 'radial-gradient(circle, #EC4899, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-pink-400 border border-pink-500/25 bg-pink-500/8 mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Selected work across frontend development, educational ideas, UI design, and creative digital media.
          </p>
        </SectionReveal>

        <SectionReveal className="flex flex-wrap justify-center gap-3 mb-14">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'shimmer-btn text-white shadow-glow-purple'
                  : 'glass-light text-slate-400 border border-white/8 hover:border-violet-500/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </SectionReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {featured.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {featured.map((p) => (
                  <ProjectCard key={p.title} project={p} featured />
                ))}
              </div>
            )}
            {rest.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((p) => (
                  <ProjectCard key={p.title} project={p} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <SectionReveal className="text-center mt-14">
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-white font-semibold glass-light border border-violet-500/25 hover:border-violet-500/50 hover:bg-violet-500/8 transition-all duration-300 hover:scale-105"
          >
            Explore GitHub
            <ArrowUpRight size={16} />
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
