
import Hero from "@/components/home/Hero";
import TrustSection from "@/components/home/TrustSection";
import AboutSection from "@/components/home/AboutSection";
import RoomsSection from "@/components/home/RoomsSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import GallerySection from "@/components/home/GallerySection";
import LocationSection from "@/components/home/LocationSection";
import FAQSection from "@/components/home/FAQSection";
import BookingCTA from "@/components/home/BookingCTA";
import BookingForm from "@/components/booking/BookingForm";

export const metadata = {
  title: "AC Dormitory in Visakhapatnam | Comfortable Stay in Vizag",
  description:
    "Explore AC dormitory beds, room options, facilities, and booking enquiries in Visakhapatnam. Contact AC Dormitory through WhatsApp.",
};

export default function HomePage() {
  return (
    <>
      {/* Main hero banner */}
      <Hero />

      {/* Trust indicators */}
      <TrustSection />

      {/* About the dormitory */}
      <AboutSection />

      {/* Room options */}
      <RoomsSection />

      {/* Facilities */}
      <FacilitiesSection />

      {/* Why guests should choose us */}
      <WhyChooseUs />

      {/* Guest testimonials */}
      <Testimonials />

      {/* Property photo gallery */}
      <GallerySection />

      {/* Location and directions */}
      <LocationSection />

      {/* Frequently asked questions */}
      <FAQSection />

      {/* Quick booking enquiry: image left, form right */}
      <section
        id="quick-booking"
        className="bg-ivory px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
      >
        <div className="container-shell">
          {/* Section heading */}
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">Start with your dates</p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              Make your stay
              <span className="block italic text-[#9B7A43]">
                a little simpler.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
              Share your stay details and send us an enquiry through
              WhatsApp. Our team can help you check availability and rates.
            </p>
          </div>

          {/* Two-column booking layout */}
          <div className="grid overflow-hidden border border-black/10 bg-white lg:grid-cols-2">
            {/* Left: Dormitory image */}
            <div className="group relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-[560px]">
              <img
                src="/images/bed5.png"
                alt="AC dormitory accommodation in Visakhapatnam"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* Dark overlay for readable text */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#202522]/90 via-[#202522]/20 to-transparent" />

              {/* Image content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9 lg:p-10">
                <span className="inline-flex items-center gap-2 border border-white/30 bg-[#202522]/30 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 bg-[#C5A46D]" />
                  AC Dormitory · Vizag
                </span>

                <h3 className="mt-5 max-w-md font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Your next stay starts here.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
                  Comfortable shared accommodation with affordable stay
                  options in Visakhapatnam.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/20 pt-5">
                  <div>
                    <p className="font-serif text-3xl text-[#C5A46D]">
                      ₹300
                    </p>
                    <p className="mt-1 text-xs text-white/70">
                      Per person / day
                    </p>
                  </div>

                  <div className="h-10 w-px bg-white/20" />

                  <div>
                    <p className="font-serif text-3xl text-white">₹500</p>
                    <p className="mt-1 text-xs text-white/70">
                      Per person / 2 days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Existing booking form */}
            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-10 xl:p-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
                Booking enquiry
              </p>

              <h3 className="mt-3 font-serif text-2xl text-ink sm:text-3xl">
                Tell us about your stay.
              </h3>

              <p className="mt-3 mb-7 text-sm leading-6 text-stone-500">
                Fill in your details below to start your enquiry.
              </p>

              <BookingForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Final booking call to action */}
      <BookingCTA />
    </>
  );
}
