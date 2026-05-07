'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: '#050816' }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Background blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="blob absolute w-96 h-96 top-1/4 left-1/4 opacity-20"
              style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }} />
            <div className="blob absolute w-80 h-80 bottom-1/4 right-1/4 opacity-15"
              style={{ background: 'radial-gradient(circle, #06B6D4, transparent)', animationDelay: '-4s' }} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center gap-8"
          >
            {/* Logo mark */}
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-2xl shimmer-btn opacity-80" />
              <div className="absolute inset-[2px] rounded-2xl bg-[#050816] flex items-center justify-center">
                <span className="text-3xl font-black gradient-text">GH</span>
              </div>
              <div className="absolute inset-0 rounded-2xl animate-ping opacity-20"
                style={{ background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)' }} />
            </div>

            {/* Progress text */}
            <div className="text-center">
              <p className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-3">
                Loading Portfolio
              </p>
              <div className="w-64 h-0.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #8B5CF6, #06B6D4, #EC4899)',
                    width: `${Math.min(progress, 100)}%`,
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <p className="text-slate-500 text-xs mt-2">{Math.min(Math.round(progress), 100)}%</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
