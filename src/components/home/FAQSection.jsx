"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  { q: "How do I enquire about a booking?", a: "Complete the booking form with your dates and guest details. It opens a prefilled WhatsApp message; press Send in WhatsApp and wait for the property to confirm availability." },
  { q: "Are the listed prices final?", a: "No. The displayed rates are sample placeholders. Confirm the current rate, taxes, occupancy, and any additional charges directly with the property." },
  { q: "What time are check-in and check-out?", a: "The sample times are 12:00 PM check-in and 11:00 AM check-out. Confirm the actual timings before your arrival." },
  { q: "Are all facilities available in every room?", a: "Facilities can vary. Please ask the team to confirm the exact amenities included with your selected room or bed." },
  { q: "Does submitting the form confirm my reservation?", a: "No. The form creates an enquiry only. Your stay is confirmed after the property verifies availability and confirms booking terms." }
];
export default function FAQSection() {
  const [active, setActive] = useState(0);
  return <section className="section-pad bg-ivory"><div className="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><SectionHeading eyebrow="Good to know" title="A few helpful answers." description="Have another question? Send us your dates and we’ll help clarify the details."/><div className="border-t border-black/10">{faqs.map((f,i)=><div key={f.q} className="border-b border-black/10"><button onClick={()=>setActive(active===i?-1:i)} aria-expanded={active===i} className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-semibold"><span>{f.q}</span><ChevronDown size={18} className={`shrink-0 transition-transform ${active===i?"rotate-180 text-[#9B7A43]":""}`}/></button><AnimatePresence initial={false}>{active===i&&<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden"><p className="max-w-2xl pb-5 text-sm leading-7 text-stone-600">{f.a}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>;
}
