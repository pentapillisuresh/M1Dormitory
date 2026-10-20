
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  BedDouble,
  Building2,
  CheckCircle2,
  Droplets,
  Headset,
  MapPin,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Waves,
  Zap,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Air-conditioned",
    highlight: "comfort.",
    description:
      "A shared AC dormitory designed for a comfortable and relaxing stay.",
    icon: Snowflake,
    tag: "EVERYDAY COMFORT",
  },
  {
    number: "02",
    title: "Discover the",
    highlight: "coastline.",
    description:
      "Make time to explore Visakhapatnam's beaches, attractions and local experiences.",
    icon: Waves,
    tag: "EXPLORE VIZAG",
  },
  {
    number: "03",
    title: "Your city,",
    highlight: "your way.",
    description:
      "Plan your visit around shopping areas, local destinations and city attractions.",
    icon: Building2,
    tag: "CITY CONVENIENCE",
  },
  {
    number: "04",
    title: "Here when you",
    highlight: "need help.",
    description:
      "Contact our team for accommodation enquiries and assistance with your stay.",
    icon: Headset,
    tag: "GUEST ASSISTANCE",
  },
  {
    number: "05",
    title: "A clean space.",
    highlight: "A better stay.",
    description:
      "Cleanliness, maintenance and comfortable bedding matter in shared accommodation.",
    icon: Sparkles,
    tag: "CARE & COMFORT",
  },
  {
    number: "06",
    title: "The essentials,",
    highlight: "covered.",
    description:
      "Ask us about washrooms, water availability, electricity and other facilities before booking.",
    icon: Droplets,
    tag: "DAILY ESSENTIALS",
  },
];

const highlights = [
  { value: "AC", label: "Air-conditioned stay" },
  { value: "₹300", label: "Starting price per person / day" },
  { value: "Vizag", label: "Explore Visakhapatnam" },
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.04]);

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="relative overflow-hidden bg-[#202522] text-[#F8F6F0]"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full border border-[#C5A46D]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-36 h-[300px] w-[300px] rounded-full border border-[#C5A46D]/10"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#C5A46D]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C5A46D] sm:text-xs">
                The AC Dormitory Experience
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
              Stay comfortably.
              <br />
              <span className="font-serif italic text-[#C5A46D]">
                Experience Vizag.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="lg:pb-2">
            <p className="max-w-md text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              A practical place to stay while you explore Visakhapatnam.
              Discover our shared AC accommodation, check available
              facilities and plan your stay with confidence.
            </p>

            <Link
              href="/rooms/"
              className="group mt-6 inline-flex items-center gap-3 border-b border-[#C5A46D]/60 pb-2 text-sm font-semibold text-[#F8F6F0] transition-colors hover:text-[#C5A46D]"
            >
              Explore our accommodation
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </Reveal>
        </div>

        {/* Large editorial image section */}
        <div className="relative mt-14 grid gap-0 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="relative min-h-[300px] overflow-hidden sm:min-h-[420px] lg:min-h-[520px]">
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="absolute inset-0"
            >
              <img
                src="/images/room1.png"
                alt="AC dormitory accommodation in Visakhapatnam"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#202522]/75 via-transparent to-[#202522]/10" />

            <div className="absolute bottom-0 left-0 p-6 sm:p-9 lg:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C5A46D]">
                Your stay in Vizag
              </p>
              <h3 className="mt-3 max-w-sm font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                Comfort in the details.
              </h3>
            </div>

            <div className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center border border-white/50 bg-[#202522]/30 text-white backdrop-blur-sm sm:right-7 sm:top-7 sm:h-16 sm:w-16">
              <BedDouble size={25} strokeWidth={1.3} />
            </div>
          </Reveal>

          {/* Editorial highlights instead of cards */}
          <div className="flex flex-col justify-center bg-[#292E2A] px-6 py-9 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <Reveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C5A46D]">
                Thoughtful essentials
              </p>
              <h3 className="mt-4 max-w-sm text-3xl font-medium leading-tight sm:text-4xl">
                The essentials for a better stay.
              </h3>
            </Reveal>

            <div className="mt-8">
              {[
                {
                  icon: Snowflake,
                  title: "Air-conditioned accommodation",
                  detail: "Comfortable shared dormitory space",
                },
                {
                  icon: BedDouble,
                  title: "Bedding & charging access",
                  detail: "Practical essentials for everyday stays",
                },
                {
                  icon: ShieldCheck,
                  title: "Guest assistance",
                  detail: "Contact us about your stay and facilities",
                },
                {
                  icon: Zap,
                  title: "Essential facilities",
                  detail: "Confirm amenities and availability before booking",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.1,
                    }}
                    className="group flex gap-4 border-b border-white/10 py-5 first:border-t"
                  >
                    <div className="mt-1 shrink-0 text-[#C5A46D] transition-transform duration-300 group-hover:scale-110">
                      <Icon size={21} strokeWidth={1.5} />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-[#F8F6F0] sm:text-base">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs leading-6 text-white/50 sm:text-sm">
                        {item.detail}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="ml-auto mt-1 shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C5A46D]"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Animated key facts */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.12}
              className="border-b border-white/10 py-6 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
            >
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="font-serif text-4xl text-[#C5A46D] sm:text-5xl"
              >
                {item.value}
              </motion.p>

              <p className="mt-3 text-xs uppercase tracking-[0.13em] text-white/50 sm:text-sm">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Feature list — no cards */}
        <div className="mt-24 lg:mt-32">
          <Reveal>
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C5A46D]">
                  Why stay with us
                </p>
                <h3 className="mt-3 text-3xl font-medium sm:text-4xl">
                  A stay that keeps it simple.
                </h3>
              </div>

              <p className="max-w-sm text-sm leading-7 text-white/50">
                Practical accommodation, everyday comfort and the freedom
                to explore the city at your own pace.
              </p>
            </div>
          </Reveal>

          <div className="border-t border-white/15">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: (index % 2) * 0.08,
                  }}
                  className="group grid gap-4 border-b border-white/15 py-7 transition-colors duration-300 hover:bg-white/[0.025] sm:grid-cols-[60px_1fr_1fr_40px] sm:items-center sm:gap-6 sm:py-8"
                >
                  <span className="text-xs tracking-[0.2em] text-[#C5A46D]">
                    {feature.number}
                  </span>

                  <div className="flex items-start gap-3">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-[#C5A46D]"
                    />

                    <h4 className="text-xl font-medium leading-snug text-[#F8F6F0] sm:text-2xl">
                      {feature.title}{" "}
                      <span className="font-serif italic text-[#C5A46D]">
                        {feature.highlight}
                      </span>
                    </h4>
                  </div>

                  <p className="max-w-lg text-sm leading-7 text-white/50 sm:pl-3">
                    {feature.description}
                  </p>

                  <ArrowUpRight
                    size={19}
                    className="hidden text-[#C5A46D] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Location feature */}
        <div className="relative mt-20 overflow-hidden border-y border-[#C5A46D]/30 py-10 sm:mt-24 sm:py-14">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="flex items-start gap-5">
                <div className="mt-1 shrink-0 text-[#C5A46D]">
                  <MapPin size={28} strokeWidth={1.3} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C5A46D]">
                    Discover Visakhapatnam
                  </p>

                  <h3 className="mt-3 max-w-2xl text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
                    Make your Vizag visit memorable.
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">
                    Explore beaches, local attractions and city destinations.
                    Contact us for directions and information about places
                    around the dormitory.
                  </p>
                </div>
              </div>

              <Link
                href="/contact/"
                className="group inline-flex w-fit items-center gap-4 border border-[#C5A46D]/60 px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#F8F6F0] transition-colors duration-300 hover:bg-[#C5A46D] hover:text-[#202522]"
              >
                Get in touch
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Bottom CTA */}
        <Reveal>
          <div className="flex flex-col gap-6 pt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-14">
            <div className="flex items-center gap-3">
              <CheckCircle2
                size={20}
                strokeWidth={1.5}
                className="shrink-0 text-[#C5A46D]"
              />
              <p className="text-sm leading-6 text-white/55">
                Need help choosing your stay? Contact our team.
              </p>
            </div>

            <Link
              href="/booking/"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-[#C5A46D] transition-colors hover:text-[#F8F6F0]"
            >
              Enquire about availability
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}