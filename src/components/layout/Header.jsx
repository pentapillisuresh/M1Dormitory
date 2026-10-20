
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  ["Home", "/"],
  ["About", "/about/"],
  ["Rooms", "/rooms/"],
  ["Facilities", "/facilities/"],
  ["Pricing", "/pricing/"],
  ["Gallery", "/gallery/"],
  ["Journal", "/blog/"],
  ["Contact", "/contact/"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Premium announcement bar */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative overflow-hidden bg-ink px-4 py-2.5 text-center text-[11px] font-medium tracking-[0.2em] text-white sm:text-xs"
      >
        <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span className="text-gold">✦</span>
          <span>A MORE COMFORTABLE WAY TO STAY</span>
          <span className="text-gold">•</span>
          <span className="text-gold">VISAKHAPATNAM</span>
        </span>
      </motion.div>

      {/* Main navigation */}
      <header className="sticky top-0 z-50 border-b border-black/[0.07] bg-ivory/95 shadow-[0_4px_24px_rgba(32,37,34,0.035)] backdrop-blur-xl">
        <div className="container-shell flex h-[82px] items-center justify-between gap-4 sm:h-[96px] lg:h-[104px]">
          {/* Animated logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0"
          >
            <Link
              href="/"
              className="group flex items-center"
              aria-label="AC Dormitory home"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/images/logo.png"
                alt="AC Dormitory Visakhapatnam"
                width={280}
                height={100}
                priority
                className="h-[62px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-[76px] lg:h-[84px]"
              />
            </Link>
          </motion.div>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-6 2xl:gap-7">
            {links.map(([label, href], index) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.08 + index * 0.055,
                }}
              >
                <Link
                  href={href}
                  className="group relative whitespace-nowrap py-3 text-[14px] font-medium tracking-[0.015em] text-ink/80 transition-colors duration-300 hover:text-primary xl:text-[15px]"
                >
                  {label}

                  {/* Gold animated underline */}
                  <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-gold transition-all duration-300 ease-out group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop booking button */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="hidden shrink-0 lg:block"
          >
            <Link
              href="/booking/"
              className="group inline-flex items-center justify-center gap-3 border border-ink bg-ink px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-ivory transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink xl:px-6"
            >
              Book Your Stay
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.92 }}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-black/10 text-ink transition-colors duration-300 hover:border-gold hover:bg-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.18 }}
                className="flex items-center justify-center"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Animated mobile navigation */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              id="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.3, ease: "easeInOut" },
                opacity: { duration: 0.2 },
              }}
              className="overflow-hidden border-t border-black/[0.07] bg-ivory lg:hidden"
            >
              <div className="container-shell flex flex-col py-3">
                {links.map(([label, href], index) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{
                      duration: 0.22,
                      delay: index * 0.035,
                    }}
                  >
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between border-b border-black/[0.06] py-3.5 text-[15px] font-medium text-ink transition-colors duration-200 hover:text-primary"
                    >
                      {label}

                      <ArrowUpRight
                        size={15}
                        className="text-gold opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Link
                    href="/booking/"
                    onClick={() => setOpen(false)}
                    className="group mt-5 inline-flex w-full items-center justify-center gap-3 bg-ink px-5 py-4 text-sm font-semibold text-ivory transition-colors duration-300 hover:bg-gold hover:text-ink"
                  >
                    Book Your Stay
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
