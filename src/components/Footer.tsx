import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/site";
import { IconFacebook } from "@/components/Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  const regions = nav.find((i) => i.children)?.children ?? [];

  // Structured data voor de footer (Organization)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/images/logo.webp`,
    email: site.email,
    telephone: site.phoneIntl,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location,
      addressCountry: "NL",
    },
    sameAs: [site.facebook],
    identifier: [
      { "@type": "PropertyValue", name: "KvK", value: site.kvk },
      { "@type": "PropertyValue", name: "KCKZ", value: site.kckz },
      { "@type": "PropertyValue", name: "AGB", value: site.agb },
    ],
  };

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link href="/" className="brand">
            <Image
              src="/images/logo.webp"
              alt="Logo De Islamitische Kraamzorg"
              width={44}
              height={44}
            />
            <span>De Islamitische Kraamzorg</span>
          </Link>
          <p>
            Liefdevolle, professionele kraamzorg volledig afgestemd op
            islamitische waarden. 24/7 beschikbaar, ook in het weekend en op
            feestdagen.
          </p>
          <div className="footer__social">
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Volg De Islamitische Kraamzorg op Facebook"
            >
              <IconFacebook />
            </a>
          </div>
        </div>

        <div>
          <h4>Navigatie</h4>
          <ul>
            {nav
              .filter((i) => !i.children)
              .map((i) => (
                <li key={i.href}>
                  <Link href={i.href}>{i.label}</Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h4>Werkgebied</h4>
          <ul>
            {regions.map((r) => (
              <li key={r.href}>
                <Link href={r.href}>{r.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Bedrijfsgegevens</h4>
          <ul className="footer__legal">
            <li>KvK: {site.kvk}</li>
            <li>KCKZ: {site.kckz}</li>
            <li>AGB-code: {site.agb}</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={site.phoneLink} aria-label={`Bel ${site.phone}`}>
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                aria-label={`E-mail naar ${site.email}`}
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stuur een WhatsApp bericht"
              >
                WhatsApp {site.phone}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {year} {site.name}. Alle rechten voorbehouden.
        </span>
        <span>KIWA-gecertificeerd</span>
        <span>
          Webdesign door{" "}
          <a
            href="https://www.webboostpartner.nl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Webboostpartner
          </a>
        </span>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </footer>
  );
}
