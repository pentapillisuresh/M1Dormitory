import PageHero from "@/components/ui/PageHero";
import PricingSection from "@/components/home/PricingSection";
import BookingCTA from "@/components/home/BookingCTA";
export const metadata = { title: "Pricing & Rates", description: "View illustrative AC dormitory pricing and enquire for current rates, availability, and booking terms in Visakhapatnam." };
export default function PricingPage() { return <><PageHero eyebrow="Pricing" title="Clear questions lead to a better booking." description="The example rates are placeholders. Please contact the property to confirm actual pricing, taxes, occupancy, and cancellation terms."/><PricingSection/><BookingCTA/></>; }
