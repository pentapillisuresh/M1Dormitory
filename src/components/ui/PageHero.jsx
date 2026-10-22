import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PageHero({ eyebrow, title, description, image }) {
  return <section className="bg-ivory"><div className="container-shell grid gap-8 py-14 md:grid-cols-[1fr_.8fr] md:items-center md:py-20"><div><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.1] tracking-[-.04em] sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-5 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">{description}</p><Link href="/booking/" className="button button-dark mt-7">Enquire about a stay <ArrowRight size={16}/></Link></div><div className="image-frame md:aspect-[5/4]"><img src={image || "/images/bed4.png"} alt="Accommodation interior" className="h-full w-full object-cover"/></div></div></section>;
}
