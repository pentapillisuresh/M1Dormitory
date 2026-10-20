import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const plans = [
  { name: "Dormitory bed", price: "₹699", unit: "sample rate / bed / night", note: "For travellers seeking a practical shared stay", items: ["AC accommodation", "Bedding details on enquiry", "Confirm availability"], featured: false },
  { name: "Private room", price: "₹1,499", unit: "sample rate / room / night", note: "For guests who prefer more privacy", items: ["Private room enquiry", "Occupancy confirmation", "Direct booking discussion"], featured: true },
  { name: "Group stay", price: "Ask us", unit: "custom quote", note: "For friends, teams, and group travel", items: ["Share group size", "Discuss dates", "Request a tailored quote"], featured: false }
];
export default function PricingSection() {
  return <section className="section-pad bg-ivory"><div className="container-shell"><SectionHeading eyebrow="Simple pricing" title="Know what to ask before you book." description="The prices shown are illustrative placeholders. Confirm current rates, taxes, occupancy, and cancellation terms with the property." align="center"/><div className="mt-10 grid gap-5 lg:grid-cols-3">{plans.map((p,i)=><Reveal key={p.name} delay={i*.06}><article className={`h-full border p-7 sm:p-8 ${p.featured?"border-ink bg-ink text-white":"border-black/10 bg-white text-ink"}`}><p className={`text-xs uppercase tracking-[.16em] ${p.featured?"text-gold":"text-stone-500"}`}>{p.name}</p><div className="mt-5 font-serif text-4xl">{p.price}</div><p className={`mt-2 text-xs ${p.featured?"text-white/55":"text-stone-500"}`}>{p.unit}</p><p className={`mt-5 min-h-12 text-sm leading-6 ${p.featured?"text-white/70":"text-stone-600"}`}>{p.note}</p><ul className="mt-6 space-y-3 border-t border-current/15 pt-6">{p.items.map(item=><li key={item} className="flex gap-3 text-sm"><Check size={16} className="mt-0.5 shrink-0 text-[#B89A66]"/>{item}</li>)}</ul><Link href="/booking/" className={`mt-8 flex items-center justify-between px-4 py-3 text-sm font-medium ${p.featured?"bg-gold text-ink hover:bg-[#D7BD8C]":"border border-ink hover:bg-ink hover:text-white"} transition`}>Enquire for rates <ArrowUpRight size={16}/></Link></article></Reveal>)}</div></div></section>;
}
