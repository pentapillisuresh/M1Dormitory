"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function IntroScreen() {
  const [showIntro, setShowIntro] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("ac-intro-played");

    if (!hasPlayed && !reduceMotion) {
      setShowIntro(true);

      const timer = setTimeout(() => {
        sessionStorage.setItem("ac-intro-played", "true");
        setShowIntro(false);
      }, 2600);

      return () => clearTimeout(timer);
    }
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-[100] flex overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          aria-label="Welcome to AC Dormitory"
        >
          {/* Left door */}
          <motion.div
            className="relative flex h-full w-1/2 items-center justify-end border-r border-[#C5A46D]/50 bg-[#202522]"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              delay: 1.25,
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div className="absolute right-5 top-0 h-full w-px bg-white/10 sm:right-10" />
            <span className="absolute right-5 top-1/2 h-14 w-1.5 rounded-full bg-[#C5A46D] sm:right-10" />
          </motion.div>

          {/* Right door */}
          <motion.div
            className="relative flex h-full w-1/2 items-center justify-start border-l border-[#C5A46D]/50 bg-[#202522]"
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{
              delay: 1.25,
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div className="absolute left-5 top-0 h-full w-px bg-white/10 sm:left-10" />
            <span className="absolute left-5 top-1/2 h-14 w-1.5 rounded-full bg-[#C5A46D] sm:left-10" />
          </motion.div>

          {/* Logo stays above both doors */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex h-20 w-20 items-center justify-center border border-[#C5A46D] text-3xl font-semibold tracking-tight text-[#F8F6F0]">
              AC<span className="text-[#C5A46D]">.</span>
            </div>

            <h1 className="mt-6 text-center text-sm font-medium tracking-[0.28em] text-white sm:text-base">
              AC DORMITORY
            </h1>

            <p className="mt-3 text-[10px] tracking-[0.25em] text-[#C5A46D]">
              VISAKHAPATNAM
            </p>

            <motion.div
              className="mt-8 h-px bg-[#C5A46D]"
              initial={{ width: 0 }}
              animate={{ width: 90 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}