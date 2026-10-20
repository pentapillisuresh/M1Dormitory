
import { ArrowRight, ArrowUpRight, BedDouble, Users } from "lucide-react";
import Link from "next/link";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { rooms } from "@/data/rooms";

const stayRates = [
  { days: 1, price: 300 },
  { days: 2, price: 500 },
];

export default function RoomsSection({ preview = true }) {
  const shown = preview ? rooms.slice(0, 2) : rooms;

  return (
    <section className="relative overflow-hidden bg-ivory py-14 sm:py-16 lg:py-20">
      <div className="container-shell relative">
        {/* Section heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Accommodation"
            title="Find Your Perfect Stay"
            description="Comfortable AC dormitory accommodation in Vizag at affordable prices."
          />

          {preview && (
            <Link
              href="/rooms/"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition hover:text-primaryDark"
            >
              View all rooms
              <ArrowUpRight size={17} />
            </Link>
          )}
        </div>

        {/* Room cards and promotional panel */}
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {/* Room cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {shown.map((room, index) => (
              <Reveal key={room.id} delay={index * 0.08}>
                <article className="group h-full overflow-hidden rounded-none border border-black/5 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {/* Room image */}
                  <div className="relative h-[210px] overflow-hidden sm:h-[220px]">
                    <img
                      src={room.image}
                      alt={room.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Image badge */}
                    <span className="absolute left-3 top-3 rounded bg-ivory px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-ink shadow-sm">
                      AC Dormitory
                    </span>

                    {/* Price badge */}
                    <div className="absolute bottom-3 right-0 rounded-l-md bg-white px-4 py-2 shadow-sm">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[25px] font-bold leading-none text-ink">
                          ₹300
                        </span>
                        <span className="text-xs text-stone-600">
                          / 1 day
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Room details */}
                  <div className="p-5 sm:p-6">
                    <h3 className="min-h-[52px] font-serif text-xl font-semibold leading-6 text-ink">
                      {room.title}
                    </h3>

                    {/* Bed information */}
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-stone-600">
                      <span className="inline-flex items-center gap-1.5">
                        <Users size={17} className="text-primary" />
                        Shared stay
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <BedDouble size={17} className="text-primary" />
                        {room.bedLabel || "Iron bunk bed"}
                      </span>
                    </div>

                    {/* Short description */}
                    <p className="mt-3 text-sm leading-5 text-stone-600">
                      AC • Comfortable bed • Charging access
                    </p>

                    {/* Stay rates */}
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {stayRates.map((rate) => (
                        <div
                          key={rate.days}
                          className="rounded-none border border-black/10 bg-ivory px-3 py-2"
                        >
                          <p className="text-xs text-stone-500">
                            {rate.days} {rate.days === 1 ? "day" : "days"}
                          </p>

                          <p className="mt-0.5 text-lg font-bold text-ink">
                            ₹{rate.price.toLocaleString("en-IN")}
                          </p>

                          <p className="text-[10px] text-stone-500">
                            Per person
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Booking link */}
                    <Link
                      href={`/booking/?type=${encodeURIComponent(room.title)}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3 hover:text-primaryDark"
                    >
                      Check availability
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Promotional panel */}
          <Reveal delay={0.15}>
            <aside className="flex h-full min-h-[320px] flex-col justify-center rounded-none bg-ink p-7 text-white sm:p-9 lg:min-h-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                Affordable Accommodation
              </p>

              <h3 className="mt-4 max-w-xs font-serif text-3xl font-bold leading-tight sm:text-4xl">
                Stay Longer,
                <br />
                Save More
              </h3>

              <p className="mt-4 text-base leading-6 text-white/80">
                Enjoy a comfortable AC dormitory stay at budget-friendly
                prices.
              </p>

              {/* Prices */}
              <div className="mt-6 space-y-5 border-l-2 border-gold pl-4">
                <div>
                  <p className="text-sm font-semibold">1 Day Stay</p>
                  <p className="mt-1 text-2xl font-bold text-gold">₹300</p>
                  <p className="text-sm text-white/70">Per person</p>
                </div>

                <div>
                  <p className="text-sm font-semibold">2 Days Stay</p>
                  <p className="mt-1 text-2xl font-bold text-gold">₹500</p>
                  <p className="text-sm text-white/70">Per person</p>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/booking/"
                className="mt-7 inline-flex w-fit items-center gap-2  bg-gold px-5 py-3 text-sm font-bold text-ink transition hover:bg-white"
              >
                Choose Your Stay
                <ArrowUpRight size={16} />
              </Link>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
