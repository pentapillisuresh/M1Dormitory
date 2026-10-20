
"use client";

import { MapPin, ArrowUpRight, Navigation } from "lucide-react";
import Link from "next/link";

import { BUSINESS } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

export default function LocationSection() {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.2309095218043!2d83.30087152421721!3d17.709812143438615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943f95f48d8d1%3A0x75144e1cf5976e7!2sCURE%20Ayur%20Nature%20wellness%20centre!5e1!3m2!1sen!2sin!4v1792498436374!5m2!1sen!2sin";

  const mapDirectionsUrl =
    "https://www.google.com/maps/search/?api=1&query=CURE+Ayur+Nature+Wellness+Centre+Visakhapatnam";

  return (
    <section className="section-pad overflow-hidden bg-ivory">
      <div className="container-shell">
        {/* Section heading */}
        <Reveal>
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">
                <MapPin size={13} />
                Location
              </p>

              <h2 className="section-title mt-3">
                Find your way
                <br />
                <em>around Vizag.</em>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-stone-600">
              Explore the map below to view the location and plan your
              journey. Contact us if you need directions or more information
              before your stay.
            </p>
          </div>
        </Reveal>

        {/* Location details + Google Map */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-stretch">
          {/* Left: Location information */}
          <Reveal>
            <div className="flex h-full flex-col justify-between border border-black/10 bg-white p-6 sm:p-9 lg:p-10">
              <div>
                <div className="flex h-12 w-12 items-center justify-center bg-ivory text-[#9B7A43]">
                  <MapPin size={23} strokeWidth={1.5} />
                </div>

                <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
                  Explore the location
                </p>

                <h3 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                  Your Vizag plans,
                  <br />
                  with a place to return to.
                </h3>

                <p className="mt-5 text-sm leading-7 text-stone-600">
                  Use Google Maps to explore the area, check directions
                  and plan your route before making a booking enquiry.
                </p>

                {/* Address */}
                <div className="mt-7 border-t border-black/10 pt-6">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={19}
                      className="mt-1 shrink-0 text-[#9B7A43]"
                    />

                    <div>
                      <p className="text-sm font-semibold text-ink">
                        AC Dormitory
                      </p>

                      <p className="mt-2 text-sm leading-6 text-stone-600">
                        {BUSINESS.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location note */}
                <div className="mt-5 flex items-start gap-3 border-t border-black/10 pt-5">
                  <Navigation
                    size={18}
                    className="mt-1 shrink-0 text-primary"
                  />

                  <p className="text-sm leading-6 text-stone-600">
                    Open the interactive map to view directions and
                    available navigation options.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-dark inline-flex items-center justify-center gap-2"
                >
                  Get Directions
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 border border-black/15 px-5 py-3 text-sm font-semibold text-ink transition hover:border-gold hover:bg-ivory"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right: Embedded Google Map */}
          <Reveal delay={0.12}>
            <div className="group relative h-full min-h-[380px] overflow-hidden border border-black/10 bg-white sm:min-h-[480px] lg:min-h-[560px]">
              {/* Map label */}
              <div className="absolute left-4 top-4 z-10 flex items-center gap-3 border border-black/5 bg-ivory/95 px-4 py-3 shadow-sm backdrop-blur-sm sm:left-6 sm:top-6">
                <span className="flex h-9 w-9 items-center justify-center bg-ink text-gold">
                  <MapPin size={18} />
                </span>

                <div>
                  <p className="text-sm font-semibold text-ink">
                    Google Maps
                  </p>
                  <p className="mt-0.5 text-xs text-stone-500">
                    Visakhapatnam, Andhra Pradesh
                  </p>
                </div>
              </div>

              <iframe
                src={mapEmbedUrl}
                title="Google Maps location - CURE Ayur Nature Wellness Centre, Visakhapatnam"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  position: "absolute",
                  inset: 0,
                  minHeight: "380px",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />

              {/* Open map link */}
              <div className="absolute bottom-4 right-4 z-10 sm:bottom-6 sm:right-6">
                <Link
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-ink px-4 py-3 text-xs font-semibold uppercase tracking-wider text-ivory shadow-lg transition hover:bg-gold hover:text-ink"
                >
                  Open in Maps
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
