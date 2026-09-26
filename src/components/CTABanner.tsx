import Link from "next/link";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function CTABanner({
  title,
  text,
  primary = { href: "/contact", label: "Plan een kennismaking" },
}: {
  title: string;
  text: string;
  primary?: { href: string; label: string };
}) {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="cta">
            <span className="label label--center">Vrijblijvend kennismaken</span>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="cta__actions">
              <Link href={primary.href} className="btn">
                {primary.label}
              </Link>
              <a href={site.phoneLink} className="btn btn--outline">
                Bel {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
