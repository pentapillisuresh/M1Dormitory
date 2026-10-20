export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="mt-4 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">{description}</p>}
    </div>
  );
}
