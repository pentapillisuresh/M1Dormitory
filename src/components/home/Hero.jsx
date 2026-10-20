
"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Sparkles,
  MoveDown,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduceMotion ? "0%" : "5%"]
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : [1.02, 1.08]
  );

  const fadeIn = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.8,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section
      ref={heroRef}
      className="relative isolate min-h-[650px] overflow-hidden bg-ink text-white sm:min-h-[720px] lg:min-h-[790px]"
    >
      {/* Full-width dormitory background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src="/images/banner.png"
          alt="Premium AC dormitory accommodation in Visakhapatnam"
          initial={false}
          animate={
            reduceMotion
              ? { scale: 1 }
              : { scale: [1.02, 1.06, 1.02] }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: 28,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{
            y: imageY,
            scale: imageScale,
            willChange: "transform",
          }}
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      </div>

      {/* Dark on the left, gradually clear towards the right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#202522]/85 via-[#202522]/55 to-[#202522]/5"
      />

      {/* Light lower overlay to keep the background visible */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#202522]/40 via-transparent to-[#202522]/10"
      />

      {/* Main content — left side only */}
      <div className="container-shell relative z-10 flex min-h-[650px] items-center py-24 sm:min-h-[720px] sm:py-28 lg:min-h-[790px] lg:py-32">
        <div className="w-full max-w-3xl">
          <motion.div {...fadeIn(0.15)}>
            <p className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D9C39C] sm:text-xs">
              <span className="h-px w-10 bg-[#C5A46D]" />
              A considered stay in Vizag
              <Sparkles size={14} strokeWidth={1.5} />
            </p>
          </motion.div>

          <motion.h1
            {...fadeIn(0.3)}
            className="mt-7 font-serif text-[48px] font-medium leading-[1.04] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[82px] xl:text-[92px]"
          >
            Rest well.
            <br />
            <span className="relative inline-block italic text-[#D9C39C]">
              Go further.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: reduceMotion ? 0 : 1,
                  delay: reduceMotion ? 0 : 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -bottom-2 left-0 h-px w-full origin-left bg-[#C5A46D]/80"
              />
            </span>
          </motion.h1>

          <motion.p
            {...fadeIn(0.45)}
            className="mt-8 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8 lg:text-lg"
          >
            Comfortable AC dormitory accommodation for travellers who value
            thoughtful essentials, a welcoming space, and a simpler stay in
            Visakhapatnam.
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.div
            {...fadeIn(0.6)}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <Link
              href="/booking/"
              className="group inline-flex min-h-[54px] items-center justify-center gap-3 bg-[#C5A46D] px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#202522] transition-colors duration-300 hover:bg-white"
            >
              Enquire About a Stay
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/rooms/"
              className="group inline-flex min-h-[54px] items-center justify-center gap-3 border border-white/50 bg-[#202522]/15 px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-[#C5A46D] hover:bg-[#202522]/35"
            >
              Explore Accommodation
              <ArrowDownRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </Link>
          </motion.div>

          {/* Brand signature */}
          <motion.div
            {...fadeIn(0.75)}
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-[9px] font-medium uppercase tracking-[0.2em] text-white/75 sm:mt-14 sm:text-[10px]"
          >
            <span>Comfort</span>
            <span className="text-[#C5A46D]">•</span>
            <span>Simplicity</span>
            <span className="text-[#C5A46D]">•</span>
            <span>Visakhapatnam</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[0.24em] text-white/70 md:flex"
      >
        <span className="h-px w-8 bg-[#C5A46D]/80" />
        Scroll to discover
        <motion.span
          animate={reduceMotion ? {} : { y: [0, 5, 0] }}
          transition={{
            duration: 1.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <MoveDown size={14} className="text-[#C5A46D]" />
        </motion.span>
      </motion.div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#C5A46D]/70" />
    </section>
  );
}
