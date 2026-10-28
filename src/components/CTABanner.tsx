import Link from "next/link";

type Props = {
  title: string;
  text: string;
  href?: string;
  ctaLabel?: string;
};

export default function CTABanner({
  title,
  text,
  href = "/contact",
  ctaLabel = "Plan een kennismaking",
}: Props) {
  return (
    <section className="cta-banner">
      <h2>{title}</h2>
      <p>{text}</p>
      <Link href={href} className="btn">
        {ctaLabel}
      </Link>
    </section>
  );
}
