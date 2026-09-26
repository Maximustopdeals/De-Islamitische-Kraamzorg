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

export default function Contact() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: "2rem" }}>
        <div className="container" style={{ maxWidth: "62rem", textAlign: "center" }}>
          <Reveal>
            <span className="label label--center">Utrecht &amp; omstreken</span>
            <h1>
              Neem <span className="accent">contact</span> op
            </h1>
            <p className="lead" style={{ marginInline: "auto" }}>
              Neem contact op voor islamitische kraamzorg in Utrecht en
              omgeving. Vul het formulier in voor een vrijblijvend
              kennismakingsgesprek of persoonlijk advies. Uw gegevens worden
              altijd vertrouwelijk behandeld.
            </p>
          </Reveal>
        </div>
        <Ornament />
      </section>

      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container contact-grid">
          <Reveal>
            <div className="contact-methods">
              <a href={site.phoneLink} className="contact-method">
                <span className="contact-method__icon"><IconPhone /></span>
                <span>
                  <span>Telefoon</span>
                  <strong>{site.phone}</strong>
                </span>
              </a>
              <a href={`mailto:${site.email}`} className="contact-method">
                <span className="contact-method__icon"><IconMail /></span>
                <span>
                  <span>E-mail</span>
                  <strong className="contact-method__email">info@<br />deislamitischekraamzorg.nl</strong>
                </span>
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <span className="contact-method__icon"><IconChat /></span>
                <span>
                  <span>WhatsApp</span>
                  <strong>{site.phone}</strong>
                </span>
              </a>
            </div>

            <div className="contact-side">
              <div className="quote" style={{ textAlign: "left", margin: 0 }}>
                <p style={{ fontSize: "1.2rem" }}>
                  “Ik voelde me vanaf het eerste contactmoment écht gezien en
                  gehoord.”
                </p>
                <footer style={{ textAlign: "left", marginTop: "0.9rem" }}>
                  Amina uit Utrecht
                </footer>
              </div>
              <p className="note" style={{ margin: 0 }}>
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
