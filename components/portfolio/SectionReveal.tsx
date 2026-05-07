'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
}

export default function SectionReveal({ children, delay = 0, direction = 'up', className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const controls = useAnimation();

  const initial = {
    up: { opacity: 0, y: 40 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
    none: { opacity: 0 },
  }[direction];

  const animate = { opacity: 1, y: 0, x: 0 };

  useEffect(() => {
    if (inView) controls.start(animate);
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
