
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Call from "@/components/layout/Call";

import IntroScreen from "@/components/layout/IntroScreen";

import { BUSINESS } from "@/lib/constants";

export const metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),

  title: {
    default:
      "AC Dormitory in Vizag, Visakhapatnam | Comfortable Stay",
    template: "%s | AC Dormitory Vizag",
  },

  description:
    "Looking for AC dormitory accommodation in Vizag? Explore room options, facilities, pricing and comfortable stay options in Visakhapatnam, Andhra Pradesh. Enquire directly on WhatsApp.",

  applicationName: BUSINESS.name,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "AC Dormitory in Vizag, Visakhapatnam | Comfortable Stay",
    description:
      "Explore AC dormitory accommodation, room options, facilities and pricing in Visakhapatnam. Contact us for availability and booking enquiries.",
    url: BUSINESS.siteUrl,
    siteName: BUSINESS.name,
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AC Dormitory in Vizag | Visakhapatnam",
    description:
      "Explore dormitory accommodation, facilities and stay options in Vizag. Enquire directly on WhatsApp.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: BUSINESS.name,
    description:
      "AC dormitory accommodation in Visakhapatnam, Andhra Pradesh, with room options and facilities for guests.",

    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address,
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },

    url: BUSINESS.siteUrl,

    telephone: BUSINESS.phoneDisplay.includes("X")
      ? undefined
      : BUSINESS.phoneDisplay,
  };

  return (
    <html lang="en-IN">
      <body>
        {/* Local business structured data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {/* Opening doors intro animation */}
        <IntroScreen />

        {/* Website header */}
        <Header />

        {/* Current page content */}
        <main>{children}</main>

        {/* Website footer */}
        <Footer />

        {/* WhatsApp enquiry button */}
        <WhatsAppButton />
        {/* Call enquiry button */}
        <Call />
      </body>
    </html>
  );
}
