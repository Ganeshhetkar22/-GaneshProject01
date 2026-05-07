'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FileText, Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setActive(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-9 h-9 rounded-full p-[2px] shimmer-btn overflow-hidden">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/ganesh-profile.jpeg"
                  alt="Ganesh Hetkar logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
            </div>
            <span className="font-bold text-white tracking-tight hidden sm:block">
              Ganesh Hetkar
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-300 group-hover:w-full rounded-full" />
              </button>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <a
              href="/resume"
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-slate-200 glass-light border border-white/10 hover:border-cyan-500/40 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <FileText size={15} />
              Resume
            </a>
            <button
              onClick={() => handleClick('#contact')}
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white shimmer-btn transition-all duration-300 hover:shadow-glow-purple hover:scale-105"
            >
              Contact Me
            </button>
            <button
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-[999] glass border-b border-white/5 px-4 sm:px-6 py-4 flex flex-col gap-1"
          >
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-left py-3 px-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick('#contact')}
              className="mt-2 py-3 px-4 rounded-xl text-white font-semibold shimmer-btn text-center"
            >
              Contact Me
            </button>
            <a
              href="/resume"
              className="py-3 px-4 rounded-xl text-slate-200 font-semibold glass-light border border-white/10 text-center"
            >
              Resume / CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
