import Link from "next/link";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

interface CTAButton {
  href: string;
  label: string;
}

interface CTABannerProps {
  title: string;
  text: string;
  primary?: CTAButton;
  secondary?: CTAButton;
  label?: string;
  className?: string;
}

export default function CTABanner({
  title,
  text,
  primary = { href: "/contact", label: "Plan een kennismaking" },
  secondary,
  label = "Vrijblijvend kennismaken",
  className = "",
}: CTABannerProps) {
  return (
    <section className={`section ${className}`.trim()}>
      <div className="container">
        <Reveal>
          <div className="cta">
            {label && <span className="label label--center">{label}</span>}
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="cta__actions">
              <Link href={primary.href} className="btn">
                {primary.label}
              </Link>
              {secondary ? (
                <Link href={secondary.href} className="btn btn--outline">
                  {secondary.label}
                </Link>
              ) : (
                <a
                  href={site.phoneLink}
                  className="btn btn--outline"
                  aria-label={`Bel ${site.phone}`}
                >
                  Bel {site.phone}
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
