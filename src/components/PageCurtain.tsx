'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageCurtain() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 650);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="curtain"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-ink-900 z-[9990] flex items-center justify-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="font-display italic text-cream-100 text-2xl tracking-wide select-none"
          >
            Ayush Patra.
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
