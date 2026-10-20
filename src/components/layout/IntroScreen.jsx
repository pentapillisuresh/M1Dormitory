"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function IntroScreen() {
  const [showIntro, setShowIntro] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setShowIntro(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-[100] flex overflow-hidden bg-[#141816]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="Welcome to M1 Dormitory"
        >
          {/* Left door */}
          <motion.div
            className="relative flex h-full w-1/2 items-center justify-end border-r border-[#C5A46D]/40 bg-[#1A1F1C]"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              delay: 1.8, // Slightly increased delay to let the logo animation finish nicely
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div className="absolute right-8 top-0 h-full w-px bg-white/5 sm:right-12" />
            <span className="absolute right-8 top-1/2 h-16 w-1 -translate-y-1/2 rounded-full bg-[#C5A46D] sm:right-12" />
          </motion.div>

          {/* Right door */}
          <motion.div
            className="relative flex h-full w-1/2 items-center justify-start border-l border-[#C5A46D]/40 bg-[#1A1F1C]"
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{
              delay: 1.8,
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div className="absolute left-8 top-0 h-full w-px bg-white/5 sm:left-12" />
            <span className="absolute left-8 top-1/2 h-16 w-1 -translate-y-1/2 rounded-full bg-[#C5A46D] sm:left-12" />
          </motion.div>

          {/* Center Content (Logo Only) */}
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              {/* Increased logo size, no border, no background */}
              <Image
                src="/images/logo.png"
                alt="M1 Dormitory"
                width={400}
                height={200}
                priority
                className="h-32 w-auto object-contain sm:h-44 md:h-56"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}