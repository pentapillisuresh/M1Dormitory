import PageHero from "@/components/ui/PageHero";
import RoomsSection from "@/components/home/RoomsSection";
import BookingCTA from "@/components/home/BookingCTA";
export const metadata = { title: "Rooms & Accommodation", description: "Explore AC dormitory beds, private room enquiries, and group accommodation options in Visakhapatnam." };
export default function RoomsPage() { return <><PageHero eyebrow="Rooms & accommodation" title="Choose your kind of stay." description="Explore illustrative accommodation options and enquire about availability, occupancy, and current pricing."/><RoomsSection preview={false}/><BookingCTA/></>; }
