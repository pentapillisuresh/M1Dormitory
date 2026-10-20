
import Link from "next/link";
import {
  ArrowUpRight,
  Snowflake,
  Droplets,
  Zap,
  Sparkles,
  ShieldCheck,
  BedDouble,
  Wifi,
  Bath,
  Wind,
  Clock3,
  WashingMachine,
  Brush,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { facilities } from "@/data/facilities";

const premiumFacilities = [
  {
    icon: Snowflake,
    title: "Air-Conditioned Comfort",
    description:
      "A cool and comfortable indoor environment for your stay.",
  },
  {
    icon: Droplets,
    title: "Water Availability",
    description:
      "Water availability for everyday needs. Confirm the current supply arrangements with us.",
  },
  {
    icon: Zap,
    title: "Power & Backup",
    description:
      "Ask us about electricity availability and backup arrangements.",
  },
  {
    icon: Sparkles,
    title: "Clean Environment",
    description:
      "Clean and well-maintained shared spaces for a comfortable stay.",
  },
  {
    icon: ShieldCheck,
    title: "Guest Safety",
    description:
      "Guest safety and responsible property management are important to us.",
  },
  {
    icon: BedDouble,
    title: "Comfortable Bedding",
    description:
      "A dedicated dormitory bed with comfortable bedding for resting.",
  },
  {
    icon: Bath,
    title: "Washroom Facilities",
    description:
      "Access to shared washroom facilities. Ask about the available setup.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Availability",
    description:
      "Ask our team whether Wi-Fi is available during your intended stay.",
  },
  {
    icon: Clock3,
    title: "Stay Assistance",
    description:
      "Contact us to confirm check-in arrangements and stay-related queries.",
  },
  {
    icon: Brush,
    title: "Regular Maintenance",
    description:
      "Maintenance-focused shared spaces to help keep the property comfortable.",
  },
  {
    icon: Wind,
    title: "Ventilated Spaces",
    description:
      "Comfortable indoor spaces designed with everyday usability in mind.",
  },
  {
    icon: WashingMachine,
    title: "Laundry Information",
    description:
      "Contact us to confirm laundry availability and any additional charges.",
  },
];

export default function FacilitiesSection({ preview = true }) {
  const items = premiumFacilities;

  return (
    <section className="section-pad bg-muted">
      <div className="container-shell">
        {/* Premium section heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Facilities & Amenities"
            title="The essentials for a comfortable stay."
            description="Discover the facilities designed around everyday comfort, cleanliness and convenience at our AC dormitory in Visakhapatnam."
          />

          {preview && (
            <Link
              href="/facilities/"
              className="inline-flex shrink-0 items-center gap-2 border border-ink px-5 py-3 text-sm font-semibold text-ink transition duration-300 hover:bg-ink hover:text-white"
            >
              Explore Facilities
              <ArrowUpRight size={16} />
            </Link>
          )}
        </div>

        {/* Premium facilities grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <Reveal key={facility.title} delay={index * 0.04}>
                <article className="group relative h-full min-h-[225px] overflow-hidden border border-black/[0.08] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A46D]/60 hover:shadow-soft sm:p-7">
                  {/* Decorative corner detail */}
                  <div className="absolute right-0 top-0 h-12 w-12 border-b border-l border-[#C5A46D]/20 transition-colors duration-300 group-hover:bg-[#C5A46D]/10" />

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center border border-[#C5A46D]/50 bg-[#F8F6F0] text-[#9B7A43] transition-colors duration-300 group-hover:bg-ink group-hover:text-[#C5A46D]">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  {/* Text */}
                  <h3 className="mt-6 text-base font-semibold tracking-tight text-ink">
                    {facility.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-stone-500">
                    {facility.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C5A46D] transition-all duration-500 group-hover:w-full" />
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom enquiry banner */}
        <div className="mt-10 flex flex-col gap-5 bg-ink p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A46D]">
              Plan Your Stay
            </p>

            <h3 className="mt-3 font-serif text-2xl leading-tight text-[#F8F6F0] sm:text-3xl">
              Want to know more about our facilities?
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Contact us to confirm amenities, availability, and
              accommodation details before booking.
            </p>
          </div>

          <Link
            href="/contact/"
            className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#C5A46D] px-6 py-4 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-[#F8F6F0]"
          >
            Contact Us
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
