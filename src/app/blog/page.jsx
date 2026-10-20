import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { articles } from "@/data/blog";
import BookingCTA from "@/components/home/BookingCTA";
export const metadata = { title: "Journal & Stay Guides", description: "Read practical guides about choosing a dormitory in Vizag, booking AC accommodation, and planning a short stay in Visakhapatnam." };
export default function BlogPage() {
  return <><PageHero eyebrow="The journal" title="Useful notes for a smoother stay." description="Practical checklists and planning tips for choosing accommodation and preparing for a visit to Visakhapatnam."/><section className="section-pad bg-white"><div className="container-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">{articles.map((a,i)=><Reveal key={a.slug} delay={i*.06}><article className="flex h-full flex-col border border-black/10 bg-ivory p-7"><p className="eyebrow">{a.category}</p><h2 className="mt-4 font-serif text-2xl leading-tight">{a.title}</h2><p className="mt-4 flex-1 text-sm leading-7 text-stone-600">{a.excerpt}</p><Link href={`/blog/${a.slug}/`} className="mt-7 flex items-center justify-between border-t border-black/10 pt-4 text-sm font-semibold">Read guide <ArrowUpRight size={16}/></Link></article></Reveal>)}</div></section><BookingCTA/></>;
}
