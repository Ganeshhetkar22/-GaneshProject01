'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let raf: number;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
    };

    const animate = () => {
      followerPos.current.x += (pos.current.x - followerPos.current.x) * 0.1;
      followerPos.current.y += (pos.current.y - followerPos.current.y) * 0.1;
      follower.style.transform = `translate(${followerPos.current.x - 20}px, ${followerPos.current.y - 20}px)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const onEnter = () => {
      cursor.style.transform += ' scale(2)';
      follower.style.transform += ' scale(1.5)';
    };
    const onLeave = () => {
      cursor.style.transform = cursor.style.transform.replace(' scale(2)', '');
      follower.style.transform = follower.style.transform.replace(' scale(1.5)', '');
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-violet-400 pointer-events-none z-[99999] transition-transform duration-75"
        style={{ mixBlendMode: 'difference' }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-violet-400/40 pointer-events-none z-[99998] transition-none"
        style={{ mixBlendMode: 'difference' }}
      />
    </>
  );
}
