import { ShieldCheck, MapPin, CalendarDays, MessageCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const items = [
  { icon: ShieldCheck, title: "Clear information", text: "Ask about facilities and house rules before you book." },
  { icon: MapPin, title: "Vizag location", text: "Plan your stay around your destinations." },
  { icon: CalendarDays, title: "Date-led enquiry", text: "Share your dates and guest count in one place." },
  { icon: MessageCircle, title: "Direct conversation", text: "Discuss availability and terms on WhatsApp." }
];
export default function TrustSection() {
  return <section className="border-b border-black/5 bg-white"><div className="container-shell grid gap-7 py-8 sm:grid-cols-2 lg:grid-cols-4">{items.map(({icon:Icon,title,text},i)=><Reveal key={title} delay={i*.06}><div className="flex gap-4"><Icon className="mt-1 shrink-0 text-[#9B7A43]" size={21} strokeWidth={1.5}/><div><h3 className="text-sm font-semibold">{title}</h3><p className="mt-1 text-xs leading-5 text-stone-500">{text}</p></div></div></Reveal>)}</div></section>;
}
