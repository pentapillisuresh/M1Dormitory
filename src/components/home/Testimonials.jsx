
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Quote,
  Star,
} from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "The accommodation was comfortable and suited my needs. The air-conditioned setting was a welcome feature during my stay.",
    name: "Guest Review",
    detail: "Comfort & Accommodation",
  },
  {
    quote:
      "I was looking for a practical place to stay in Visakhapatnam. The enquiry process was simple and straightforward.",
    name: "Guest Review",
    detail: "Booking Enquiry",
  },
  {
    quote:
      "A useful option for travellers looking for dormitory accommodation and essential facilities in Vizag.",
    name: "Guest Review",
    detail: "Stay Experience",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const showPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-ivory px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end lg:mb-14"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary sm:text-xs">
                Guest Experiences
              </p>
            </div>

            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-6xl">
              A stay that feels
              <span className="mt-1 block font-serif font-normal italic text-[#9B7A43]">
                right from the start.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-stone-600 sm:text-base">
            Discover comfortable AC dormitory accommodation in
            Visakhapatnam. Have questions? Our team can help you understand
            the facilities, prices and availability.
          </p>
        </motion.div>

        {/* Main editorial layout */}
        <div className="grid overflow-hidden border border-black/10 bg-white lg:grid-cols-[1fr_1fr]">
          {/* Left: Large accommodation image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative min-h-[330px] overflow-hidden sm:min-h-[430px] lg:min-h-[570px]"
          >
            <motion.img
              src="/images/room1.png"
              alt="AC dormitory accommodation in Visakhapatnam"
              loading="lazy"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />

            {/* Subtle image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

            {/* Image caption */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9 lg:p-10">
              <span className="inline-flex items-center gap-2 border border-white/30 bg-ink/30 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                AC Dormitory · Visakhapatnam
              </span>

              <h3 className="mt-5 max-w-sm font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                Comfort in every part of your stay.
              </h3>

              <Link
                href="/rooms/"
                className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-gold"
              >
                Explore accommodation
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Right: Automatically rotating testimonial */}
          <div className="flex min-h-[430px] flex-col justify-between p-6 sm:p-9 lg:min-h-[570px] lg:p-12 xl:p-14">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center bg-ivory text-[#9B7A43]">
                <Quote size={25} strokeWidth={1.4} />
              </div>

              <span className="text-xs font-medium tracking-[0.16em] text-stone-400">
                {String(activeIndex + 1).padStart(2, "0")}{" "}
                <span className="mx-1 text-gold">/</span>{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            <div className="py-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
                What guests say
              </p>

              <div className="mt-6 min-h-[180px] sm:min-h-[195px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <blockquote className="font-serif text-2xl leading-relaxed text-ink sm:text-3xl lg:text-[32px]">
                      “{activeTestimonial.quote}”
                    </blockquote>

                    <div className="mt-7">
                      <p className="text-sm font-semibold text-ink">
                        {activeTestimonial.name}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.13em] text-stone-500">
                        {activeTestimonial.detail}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Slider progress and controls */}
            <div className="border-t border-black/10 pt-6">
              <div className="mb-6 flex gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.detail}
                    type="button"
                    aria-label={`Show review ${index + 1}`}
                    aria-pressed={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                    className="group h-8 flex-1 py-3"
                  >
                    <span
                      className={`block h-1 w-full transition-colors duration-300 ${
                        activeIndex === index ? "bg-gold" : "bg-stone-200"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4">
                <p className="text-xs leading-5 text-stone-500">
                  Guest experiences
                  <span className="block text-stone-400">
                    Discover our accommodation
                  </span>
                </p>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Previous review"
                    className="flex h-11 w-11 items-center justify-center border border-black/10 text-ink transition-colors hover:border-gold hover:bg-ivory"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next review"
                    className="flex h-11 w-11 items-center justify-center bg-ink text-white transition-colors hover:bg-gold hover:text-ink"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom information strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col justify-between gap-5 border-t border-black/10 pt-7 sm:flex-row sm:items-center"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2
              size={19}
              className="mt-0.5 shrink-0 text-primary"
              strokeWidth={1.6}
            />

            <p className="max-w-lg text-sm leading-6 text-stone-600">
              Looking for a comfortable stay in Vizag? Contact us to check
              room availability and current rates.
            </p>
          </div>

          <Link
            href="/contact/"
            className="group inline-flex shrink-0 items-center gap-3 bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-ivory transition-colors hover:bg-gold hover:text-ink"
          >
            Contact Us
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
