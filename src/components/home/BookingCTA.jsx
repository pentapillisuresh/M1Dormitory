import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function BookingCTA() {
  return <section className="bg-gold"><div className="container-shell flex flex-col justify-between gap-7 py-12 sm:py-16 md:flex-row md:items-center"><div><p className="eyebrow !text-ink/65">Your next step</p><h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight tracking-[-.03em] text-ink sm:text-4xl">Have your dates in mind?<br/>Let’s talk through your stay.</h2></div><div className="flex flex-wrap gap-3"><Link href="/booking/" className="button button-dark">Enquire now <ArrowUpRight size={16}/></Link><Link href="/contact/" className="button border border-ink/30 text-ink hover:bg-ink hover:text-white"><MessageCircle size={16}/> Contact us</Link></div></div></section>;
}
