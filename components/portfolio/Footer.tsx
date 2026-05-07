'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const EMAIL = 'ganeshhetkar1985@gmail.com';
const GITHUB = 'https://github.com/Ganeshhetkar22';
const LINKEDIN = 'https://www.linkedin.com/in/ganeshhetkar23/';

const LINKS = {
  Navigate: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Journey', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
  Services: [
    { label: 'Frontend Development', href: '#services' },
    { label: 'Responsive Design', href: '#services' },
    { label: 'Graphic Design', href: '#services' },
    { label: 'Video Editing', href: '#services' },
    { label: 'Resume / CV', href: '/resume' },
  ],
};

const SOCIALS = [
  { icon: Mail, href: `mailto:${EMAIL}`, label: 'Email' },
  { icon: Github, href: GITHUB, label: 'GitHub' },
  { icon: Linkedin, href: LINKEDIN, label: 'LinkedIn' },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNav = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative border-t border-white/5 pt-20 pb-10 overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ background: 'linear-gradient(to top, rgba(139,92,246,0.1), transparent)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-16">
            <div className="lg:col-span-2">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-3 mb-5 group"
              >
                <div className="relative w-11 h-11 rounded-full p-[2px] shimmer-btn overflow-hidden group-hover:scale-110 transition-transform">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900">
                    <Image
                      src="/images/ganesh-profile.jpeg"
                      alt="Ganesh Hetkar logo"
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <span className="text-2xl font-black text-white">Ganesh Hetkar</span>
              </button>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                Frontend Developer, Graphic Designer, Video Editor, and AI Learning Enthusiast
                crafting modern digital experiences with a creative edge.
              </p>
              <div className="flex gap-3">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === 'Email' ? undefined : '_blank'}
                    rel={label === 'Email' ? undefined : 'noreferrer'}
                    aria-label={label}
                    className="w-9 h-9 rounded-xl glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/30 transition-all duration-300 hover:scale-110 hover:shadow-glow-purple"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(LINKS).map(([title, items]) => (
              <div key={title}>
                <h4 className="text-white font-bold text-sm mb-4 tracking-wide">{title}</h4>
                <ul className="flex flex-col gap-3">
                  {items.map(({ label, href }) => (
                    <li key={label}>
                      <button
                        onClick={() => handleNav(href)}
                        className="text-slate-400 text-sm hover:text-violet-400 transition-colors duration-200 text-left"
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 Ganesh Hetkar. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-500 text-xs">Portfolio ready for Netlify</span>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[100] w-12 h-12 rounded-2xl shimmer-btn flex items-center justify-center text-white shadow-glow-purple hover:scale-110 transition-transform duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
