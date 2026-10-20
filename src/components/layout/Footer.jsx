import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ArrowUpRight,
  Navigation,
  Instagram,
  Phone,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const footerLinks = [
  { name: "About Us", href: "/about/" },
  { name: "Accommodation", href: "/rooms/" },
  { name: "Facilities", href: "/facilities/" },
  { name: "Pricing", href: "/pricing/" },
  { name: "Gallery", href: "/gallery/" },
  { name: "Contact", href: "/contact/" },
];

const fullAddress =
  "Door No. 18-1-70, Third Floor, Maharani Peta, KGH Down Road, Opp. Medi Cover, Beside Ambar Showroom, Jagadamba Junction, Visakhapatnam, Andhra Pradesh 530002.";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(fullAddress);

/* ─────────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────────── */

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#141816] text-white">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1758193783649-13371d7fb8dd?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      {/* Overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#141816]/95 via-[#141816]/92 to-[#0E1210]/97"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(197,164,109,0.06),transparent_60%)]"
      />

      <div className="container-shell relative py-14 sm:py-16 lg:py-20">
        {/* ── 4-Column Grid ── */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          
          {/* Column 1 — Logo */}
          <div className="flex flex-col items-start gap-4">
            <Link
              href="/"
              aria-label="M1 Dormitory AC home"
              className="group inline-flex transition-all duration-500 hover:opacity-80"
            >
              <div className="relative flex h-20 w-40 shrink-0 items-center justify-start">
                <Image
                  src="/images/logo.png"
                  alt="M1 Dormitory AC logo"
                  width={160}
                  height={80}
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            <p className="max-w-[240px] text-xs leading-6 text-white/90">
              Air conditioned accommodation in the heart of Visakhapatnam.
            </p>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center border border-white/20 text-white transition-all duration-300 hover:border-[#C5A46D] hover:text-[#C5A46D]"
            >
              <Instagram size={15} />
            </a>
          </div>

          {/* Column 2 — Explore */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C5A46D]">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-white transition-colors duration-300 hover:text-[#C5A46D]"
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#C5A46D] transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Visit Us */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C5A46D]">
              Visit Us
            </h3>
            <div className="mt-5 flex items-start gap-2.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#C5A46D]/30 bg-[#C5A46D]/[0.1]">
                <MapPin size={13} className="text-[#C5A46D]" />
              </div>
              <address className="text-sm not-italic leading-6 text-white">
                Door No. 18-1-70, Third Floor,
                <br />
                Maharani Peta, KGH Down Road,
                <br />
                Jagadamba Junction,
                <br />
                Visakhapatnam, AP 530002.
              </address>
            </div>

            {/* Phone Number */}
            <div className="mt-4 flex items-start gap-2.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#C5A46D]/30 bg-[#C5A46D]/[0.1]">
                <Phone size={13} className="text-[#C5A46D]" />
              </div>
              <a
                href="tel:+918331838383"
                className="text-sm text-white transition-colors duration-300 hover:text-[#C5A46D]"
              >
                +91 8331838383
              </a>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-1.5 border border-[#C5A46D]/30 bg-[#C5A46D]/[0.1] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#C5A46D] transition-all duration-300 hover:border-[#C5A46D] hover:bg-[#C5A46D]/20 hover:text-white"
            >
              <Navigation size={12} />
              Get Directions
              <ArrowUpRight
                size={11}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Column 4 — Plan Your Stay */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C5A46D]">
              Plan Your Stay
            </h3>
            <p className="mt-5 text-sm leading-6 text-white">
              Your stay in Vizag starts here. Comfortable accommodation and a
              convenient location await.
            </p>

            <div className="mt-5 flex flex-col gap-2.5">
              <Link
                href="/booking/"
                className="group/btn relative inline-flex min-h-[42px] items-center justify-center gap-2 overflow-hidden bg-[#C5A46D] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#141816] transition-all duration-300 hover:shadow-[0_0_20px_rgba(197,164,109,0.3)]"
              >
                <span className="relative z-10">Enquire Now</span>
                <ArrowUpRight
                  size={14}
                  className="relative z-10 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                />
                <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 group-hover/btn:translate-x-0" />
              </Link>

              <Link
                href="/contact/"
                className="group/btn2 inline-flex min-h-[42px] items-center justify-center gap-2 border border-white/30 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:border-[#C5A46D] hover:text-[#C5A46D]"
              >
                Contact Us
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover/btn2:-translate-y-0.5 group-hover/btn2:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

      

        {/* ── Bottom Bar ── */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-5 text-xs text-white sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} M1 Dormitory AC. All rights reserved.
          </p>

          <p className="flex items-center tracking-wide">
            <span>Comfort</span>
            <span className="mx-2 inline-block h-1 w-1 rounded-full bg-[#C5A46D]" />
            <span>Convenience</span>
            <span className="mx-2 inline-block h-1 w-1 rounded-full bg-[#C5A46D]" />
            <span>Visakhapatnam</span>
          </p>

          <p>
            Developed by{" "}
            <a
              href="https://enfynex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#C5A46D] transition-colors duration-300 hover:text-white"
            >
              enfynex.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}