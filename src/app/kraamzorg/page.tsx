import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Ornament from "@/components/Ornament";
import TrustBar from "@/components/TrustBar";
import CTABanner from "@/components/CTABanner";
import { site } from "@/lib/site";
import { IconHeart, IconMoon, IconHome } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Islamitische kraamzorg met persoonlijke aandacht | Utrecht",
  description:
    "Liefdevolle islamitische kraamzorg in Utrecht met persoonlijke aandacht. Professionele begeleiding afgestemd op jouw wensen, islamitische waarden en de behoeften van moeder en baby.",
  alternates: { canonical: "/kraamzorg" },
  openGraph: {
    title: "Islamitische kraamzorg met persoonlijke aandacht | Utrecht",
    description:
      "Liefdevolle islamitische kraamzorg in Utrecht met persoonlijke aandacht. Professionele begeleiding afgestemd op jouw wensen en islamitische waarden.",
    url: "/kraamzorg",
  },
};

const kernpunten = [
  {
    icon: <IconHeart />,
    title: "Persoonlijke begeleiding",
    text: "Ik neem de tijd voor jou. Van lichamelijk herstel en borstvoeding tot emotionele steun. Ik ben er voor jou.",
  },
  {
    icon: <IconMoon />,
    title: "Respect voor jouw geloof",
    text: "Jouw islamitische waarden staan centraal. Van gebedsondersteuning en halal voeding tot de adhan voor je baby.",
  },
  {
    icon: <IconHome />,
    title: "Zorg in je eigen thuis",
    text: "Alle zorg vindt plaats in de vertrouwde omgeving van je eigen huis. Zo voel jij je helemaal op je gemak.",
  },
];

const stappen = [
  {
    title: "Kennismaken",
    text: "Vrijblijvend gesprek bij jou thuis. We bespreken jouw wensen, situatie en wat je van mij kunt verwachten.",
  },
  {
    title: "Zorg op maat",
    text: "Ik stem de zorg volledig af op jouw gezin, geloof en persoonlijke behoeften. Jij bepaalt de koers.",
  },
  {
    title: "Genieten",
    text: "Jij kunt je volledig richten op je baby en je herstel. Ik zorg voor rust, structuur en een veilige omgeving.",
  },
];

const faqs = [
  {
    q: "Wordt jouw zorg vergoed door de verzekering?",
    a: "Ja, kraamzorg wordt standaard vergoed vanuit de basisverzekering. Je betaalt alleen een eigen bijdrage van €5,70 per uur voor zorg thuis. Met een aanvullende verzekering kan deze eigen bijdrage (gedeeltelijk) worden vergoed.",
  },
  {
    q: "Hoe weet ik of ik bij jou kan aanmelden?",
    a: "Je kunt vanaf de 16e week van je zwangerschap contact met me opnemen. We plannen dan een vrijblijvend kennismakingsgesprek om te kijken of het klikt.",
  },
  {
    q: "Wat is het verschil met reguliere kraamzorg?",
    a: "Mijn zorg is volledig afgestemd op islamitische waarden: gebedsondersteuning, halal voeding, adhan en rituele reinheid. Ik ben zelf moslima en begrijp wat voor jou belangrijk is.",
  },
  {
    q: "Kun je ook in mijn plaats in Utrecht komen?",
    a: "Ja, ik ben actief in de hele provincie Utrecht, inclusief Zeist, Nieuwegein, Houten, IJsselstein, Leusden, Woerden en meer. Neem contact op en ik vertel je of ik bij jou kan komen.",
  },
  {
    q: "Wat als ik toch nog vragen heb?",
    a: "Je kunt me altijd bellen, appen of mailen. Ik ben 24/7 bereikbaar voor je vragen. Zelfs als je nog niet zeker weet of je bij mij wilt aanmelden.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Kraamzorg() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="hero">
        <div className="container" style={{ maxWidth: "62rem", textAlign: "center" }}>
          <Reveal>
            <span className="label label--center">Utrecht &amp; omstreken</span>
            <h1>
              Islamitische <span className="accent">kraamzorg</span>: een
              onbezorgde en gezegende kraamtijd
            </h1>
            <p className="lead" style={{ marginInline: "auto" }}>
              Professionele en liefdevolle begeleiding tijdens de belangrijkste
              eerste week van jouw baby. Wij bieden zorg op maat met volledig
              respect voor jouw islamitische geloofsovertuiging. Dag en nacht
              staan we klaar voor de gezondheid van moeder en kind.
            </p>
            <div className="hero__actions" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="btn">
                Vrijblijvend kennismaken
              </Link>
              <a href={site.phoneLink} className="btn btn--outline">
                Bel {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
        <Ornament />
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal className="split__media split__media--arch">
              <Image
                src="/images/baby-vinger-moeder.webp"
                alt="Pasgeboren baby houdt de vinger van haar moeder vast tijdens islamitische kraamzorg"
                width={1100}
                height={733}
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </Reveal>
            <Reveal delay={0.15}>
              <span className="label">Intro</span>
              <h2 style={{ margin: "1rem 0 1.25rem" }}>Wat mijn islamitische kraamzorg voor jou betekent</h2>
              <div className="prose">
                <p>
                  Ik ben Nadia, je eigen kraamverzorgende in Utrecht. Geen
                  wisselende gezichten, maar één vertrouwd persoon die jou en je
                  baby begeleidt in de eerste dagen na de geboorte.
                </p>
                <p>
                  Of je nu voor het eerst moeder wordt of al ervaring hebt, ik
                  sta naast je met liefde, rust en professionele zorg, volledig
                  afgestemd op jouw wensen en islamitische waarden.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__head center">
            <span className="label label--center">Waar je op kunt rekenen</span>
            <h2>Zorg die bij jou past</h2>
            <p>
              Ik combineer professionele deskundigheid met aandacht voor jouw
              persoonlijke situatie en geloof.
            </p>
          </div>
          <div className="grid grid--3">
            {kernpunten.map((k, i) => (
              <Reveal key={k.title} delay={i * 0.1}>
                <div className="card">
                  <span className="card__icon">{k.icon}</span>
                  <h3>{k.title}</h3>
                  <p>{k.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head center">
            <span className="label label--center">Hoe het werkt</span>
            <h2>In drie stappen naar een zorgeloze kraamtijd</h2>
          </div>
          <div className="steps" style={{ marginInline: "auto" }}>
            {stappen.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="step">
                  <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__head center">
            <span className="label label--center">Wat kost het?</span>
            <h2>Kraamzorg wordt vergoed</h2>
            <p>
              Kraamzorg valt onder de basisverzekering. Je betaalt alleen een
              kleine eigen bijdrage van €5,70 per uur voor zorg thuis. Met een
              aanvullende verzekering wordt dit vaak (gedeeltelijk) vergoed.
            </p>
          </div>
          <div className="price-row">
            <Reveal>
              <div className="price-card">
                <strong>Basisverzekering</strong>
                <p>Vergoed uit basisverzekering. Geen eigen risico. De verzekering dekt de kern van de kraamzorg.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="price-card">
                <strong>€5,70 / uur</strong>
                <p>Een kleine eigen bijdrage voor zorg thuis. Aanvullende verzekering kan dit dekken.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="price-card">
                <strong>Persoonlijk advies</strong>
                <p>Vragen? Ik help je graag. Ik kijk samen met je naar jouw situatie en verzekering.</p>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <p className="note">
              <strong>Geen verrassingen:</strong> ik geef je vooraf een
              duidelijke indicatie van de kosten, zodat je weet waar je aan toe
              bent.
            </p>
          </Reveal>
        </div>
      </section>

      <TrustBar />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="quote">
              <div className="stars" aria-label="Vijf sterren">★★★★★</div>
              <p style={{ marginTop: "1.25rem" }}>
                “Hele fijne kraamtijd gehad met Nadia. Ze is professioneel,
                vriendelijk, zorgzaam en liefdevol met je baby.”
              </p>
              <footer>Firdaouss uit Utrecht</footer>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__head center">
            <span className="label label--center">Veelgestelde vragen</span>
            <h2>Antwoorden op de vragen die ik het vaakst krijg</h2>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Klaar voor een zorgeloze kraamtijd?"
        text="Plan een vrijblijvend kennismakingsgesprek bij jou thuis. We bespreken jouw wensen en wat je van mij kunt verwachten."
        primary={{ href: "/contact", label: "Vrijblijvend kennismaken" }}
      />
    </>
  );
}
