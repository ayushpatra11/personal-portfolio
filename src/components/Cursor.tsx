'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const dotX = useSpring(0, { stiffness: 2000, damping: 50, restDelta: 0.01 });
  const dotY = useSpring(0, { stiffness: 2000, damping: 50, restDelta: 0.01 });
  const ringX = useSpring(0, { stiffness: 90, damping: 20, restDelta: 0.01 });
  const ringY = useSpring(0, { stiffness: 90, damping: 20, restDelta: 0.01 });

  useEffect(() => {
    const touch = window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(touch);
    if (!touch) document.documentElement.classList.add('custom-cursor');
    return () => document.documentElement.classList.remove('custom-cursor');
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element;
      setHovering(!!t.closest('a, button, [role="button"]'));
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, [isTouch, dotX, dotY, ringX, ringY]);

  if (isTouch) return null;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: hovering ? 2.4 : 1,
          opacity: visible ? (hovering ? 0.5 : 0.3) : 0,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 180, damping: 18 },
          opacity: { duration: 0.3 },
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
      />
      {/* Dot */}
      <motion.div
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: hovering ? 0 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ scale: { duration: 0.15 }, opacity: { duration: 0.3 } }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
      />
    </>
  );
}
