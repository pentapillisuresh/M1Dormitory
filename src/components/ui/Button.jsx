import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Button({ href = "/booking/", children, variant = "dark", arrow = true, className = "" }) {
  return (
    <Link href={href} className={`button ${variant === "gold" ? "button-gold" : variant === "light" ? "button-light" : "button-dark"} ${className}`}>
      <span>{children}</span>{arrow && <ArrowRight size={16} strokeWidth={1.8} />}
    </Link>
  );
}
