import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-[#0A0A0F] flex items-center justify-center"
        >
          <div className="flex flex-col items-center">
            
            {/* Glow */}
            <div className="absolute w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full" />

            {/* Logo */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="
                relative
                w-28
                h-28
                rounded-3xl
                bg-gradient-to-br
                from-cyan-500
                via-blue-500
                to-indigo-600
                flex
                items-center
                justify-center
                text-white
                text-4xl
                font-black
                shadow-[0_0_50px_rgba(6,182,212,0.5)]
              "
            >
              DN
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-3xl font-bold text-white"
            >
              Devansh Negi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-slate-400 mt-2"
            >
              Backend & AI Engineer
            </motion.p>

            {/* Progress Bar */}
            <div className="mt-10 w-72 h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                }}
                className="
                  h-full
                  bg-gradient-to-r
                  from-cyan-500
                  via-blue-500
                  to-indigo-500
                  rounded-full
                "
              />
            </div>

            {/* Loading text */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="mt-4 text-sm text-slate-500 tracking-widest uppercase"
            >
              Loading Portfolio...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}