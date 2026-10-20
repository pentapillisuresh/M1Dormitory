import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function AboutSection() {
  return <section className="section-pad bg-ivory"><div className="container-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
    <Reveal><div className="relative"><img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85" alt="A calm, neatly arranged guest room" className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"/><div className="absolute -bottom-5 right-0 bg-gold px-6 py-5 text-ink sm:-right-5"><p className="font-serif text-2xl italic">Stay simply.</p><p className="mt-1 text-[10px] uppercase tracking-[.16em]">Travel comfortably</p></div></div></Reveal>
    <Reveal delay={.1}><SectionHeading eyebrow="A little about us" title="A comfortable pause between where you are and where you’re going." description="AC Dormitory is designed around the essentials of a good stay: a welcoming space, clear information, and an easy way to enquire before you arrive."/><p className="mt-5 text-sm leading-7 text-stone-600">Whether you are passing through Visakhapatnam or planning a short visit, let us know what you need. Our team can discuss room options, dates, and the details that matter for your stay.</p><div className="mt-8"><Button href="/about/">Discover our approach</Button></div></Reveal>
  </div></section>;
}
