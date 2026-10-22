import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const photos = [
  ["/images/bed1.png","A calm guest room"],
  ["/images/bed2.png","Comfortable bed and room"],
  ["/images/bed3.png","A bright, minimal room"],
  ["/images/bed4.png","Warm contemporary interior"]
];
export default function GallerySection({ preview = true }) {
  return <section className="section-pad bg-white"><div className="container-shell"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionHeading eyebrow="A visual preview" title="Spaces that make room to unwind." description="These are illustrative photos. Replace them with accurate photographs of your actual property before publishing."/>{preview && <Link href="/gallery/" className="inline-flex items-center gap-2 text-sm font-semibold">Explore gallery <ArrowUpRight size={16}/></Link>}</div><div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">{photos.map(([src,alt],i)=><Reveal key={src} delay={i*.05}><div className={`image-frame ${i===0?"md:col-span-1":""}`}><img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-[1.04]"/></div></Reveal>)}</div></div></section>;
}
