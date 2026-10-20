import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { articles } from "@/data/blog";
import BookingCTA from "@/components/home/BookingCTA";

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  return article ? { title: article.title, description: article.excerpt } : {};
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  return <><section className="bg-ivory py-16 sm:py-24"><div className="container-shell max-w-3xl"><Link href="/blog/" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-ink"><ArrowLeft size={16}/> Back to journal</Link><p className="eyebrow mt-9">{article.category}</p><h1 className="mt-4 font-serif text-4xl leading-tight tracking-[-.04em] sm:text-6xl">{article.title}</h1><p className="mt-5 text-sm text-stone-500">{article.date}</p></div></section><article className="section-pad bg-white"><div className="container-shell prose-copy max-w-3xl">{article.body.map((p,i)=><p key={i}>{p}</p>)}<div className="mt-10 border-t border-black/10 pt-7"><Link href="/booking/" className="button button-dark">Make a booking enquiry</Link></div></div></article><BookingCTA/></>;
}
