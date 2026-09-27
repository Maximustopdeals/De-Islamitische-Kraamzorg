import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Ornament from "@/components/Ornament";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import { IconPhone, IconMail, IconChat } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact islamitische kraamzorg Utrecht | Vrijblijvend kennismaken",
  description:
    "Neem contact op voor islamitische kraamzorg in Utrecht en Gorinchem. Vul het aanmeldformulier in voor een vrijblijvend kennismakingsgesprek of persoonlijk advies.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact islamitische kraamzorg Utrecht | Vrijblijvend kennismaken",
    description:
      "Neem contact op voor islamitische kraamzorg in Utrecht en Gorinchem. Vul het aanmeldformulier in voor een vrijblijvend kennismakingsgesprek of persoonlijk advies.",
    url: "/contact",
  },
};

// ContactPage schema voor SEO
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact De Islamitische Kraamzorg",
  url: `${site.url}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: site.name,
    telephone: site.phoneIntl,
    email: site.email,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneIntl,
      contactType: "customer service",
      availableLanguage: ["nl", "ar"],
      areaServed: "NL",
    },
  },
};

export default function Contact() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Hero */}
      <section className="hero hero--compact">
        <div className="container container--narrow text-center">
          <Reveal>
            <span className="label label--center">Utrecht &amp; omstreken</span>
            <h1>
              Neem <span className="accent">contact</span> op
            </h1>
            <p className="lead lead--center">
              Neem contact op voor islamitische kraamzorg in Utrecht en
              omgeving. Vul het formulier in voor een vrijblijvend
              kennismakingsgesprek of persoonlijk advies. Uw gegevens worden
              altijd vertrouwelijk behandeld.
            </p>
          </Reveal>
        </div>
        <Ornament />
      </section>

      {/* Contact & formulier */}
      <section className="section section--compact-top" id="contact">
        <div className="container contact-grid">
          <Reveal>
            <div className="contact-methods">
              <a
                href={site.phoneLink}
                className="contact-method"
                aria-label={`Bel ${site.phone}`}
              >
                <span className="contact-method__icon"><IconPhone /></span>
                <span className="contact-method__body">
                  <span className="contact-method__label">Telefoon</span>
                  <strong className="contact-method__value">{site.phone}</strong>
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="contact-method"
                aria-label={`E-mail naar ${site.email}`}
              >
                <span className="contact-method__icon"><IconMail /></span>
                <span className="contact-method__body">
                  <span className="contact-method__label">E-mail</span>
                  <strong className="contact-method__value contact-method__value--email">
                    {site.email}
                  </strong>
                </span>
              </a>

              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
                aria-label="Stuur een WhatsApp bericht"
              >
                <span className="contact-method__icon"><IconChat /></span>
                <span className="contact-method__body">
                  <span className="contact-method__label">WhatsApp</span>
                  <strong className="contact-method__value">{site.phone}</strong>
                </span>
              </a>
            </div>

            <div className="contact-side">
              <div className="quote quote--left">
                <p className="quote__text quote__text--small">
                  &ldquo;Ik voelde me vanaf het eerste contactmoment écht gezien
                  en gehoord.&rdquo;
                </p>
                <footer className="quote__footer--left">
                  Amina uit Utrecht
                </footer>
              </div>
              <p className="note note--flat">
                <strong>24/7 beschikbaar</strong>, ook in het weekend en op
                feestdagen.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
