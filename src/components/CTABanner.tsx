import type { ReactNode } from "react";
import Link from "next/link";

type Props = {
  title: ReactNode;
  text: ReactNode;
  // De nieuwe stijl (zoals op de kraamzorg pagina)
  primary?: {
    href: string;
    label: string;
  };
  // De oude stijl (voor de homepagina)
  href?: string;
  ctaLabel?: string;
  className?: string;
};

export default function CTABanner({
  title,
  text,
  primary,
  href = "/contact",
  ctaLabel = "Plan een kennismaking",
  className = "",
}: Props) {
  // We pakken de primary waarden als ze er zijn, anders de standaard waarden
  const finalHref = primary?.href || href;
  const finalLabel = primary?.label || ctaLabel;

  return (
    <section className={`cta-banner ${className}`.trim()}>
      <h2>{title}</h2>
      <p>{text}</p>
      <Link href={finalHref} className="btn">
        {finalLabel}
      </Link>
    </section>
  );
}
