'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
    };

    let rafId: number;
    const follow = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      rafId = requestAnimationFrame(follow);
    };
    follow();

    const onEnter = () => {
      dot.classList.add('scale-[2.5]');
      ring.classList.add('!w-[50px]', '!h-[50px]');
    };
    const onLeave = () => {
      dot.classList.remove('scale-[2.5]');
      ring.classList.remove('!w-[50px]', '!h-[50px]');
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-cursor="hover"]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100"
      />
      <div
        ref={ringRef}
        className="cursor-ring fixed top-0 left-0 w-9 h-9 rounded-full border border-primary/50 pointer-events-none z-[9998] transition-[width,height] duration-200"
      />
    </>
  );
}
