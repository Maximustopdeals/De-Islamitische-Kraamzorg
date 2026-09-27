import type { Metadata } from "next";
import Script from "next/script";
import Reveal from "@/components/Reveal";
import Ornament from "@/components/Ornament";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Reviews islamitische kraamzorg Utrecht | Ervaringen van gezinnen",
  description:
    "Lees de ervaringen van gezinnen met islamitische kraamzorg in Utrecht. Warme, persoonlijke en professionele kraamzorg, gemiddeld beoordeeld met een 5.0 uit 5.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Reviews islamitische kraamzorg Utrecht | Ervaringen van gezinnen",
    description:
      "Lees de ervaringen van gezinnen met islamitische kraamzorg in Utrecht. Warme, persoonlijke en professionele kraamzorg, gemiddeld beoordeeld met een 5.0 uit 5.",
    url: "/reviews",
  },
};

// AggregateRating schema voor SEO
const ratingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "De Islamitische Kraamzorg",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "5",
  },
};

export default function Reviews() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />

      {/* Hero */}
      <section className="hero">
        <div className="container container--narrow text-center">
          <Reveal>
            <span className="label label--center">Reviews</span>
            <h1>
              Deel uw ervaring met{" "}
              <span className="accent">De Islamitische Kraamzorg</span> in
              Utrecht
            </h1>
            <div className="stars stars--spaced" aria-label="Vijf sterren">
              ★★★★★
            </div>
            <p className="lead lead--center">
              Als toegewijde kraamverzorgende ben ik, Nadia, dankbaar voor het
              vertrouwen dat zoveel gezinnen mij hebben gegeven tijdens de
              bijzondere kraamtijd. Uw review helpt niet alleen mij om te blijven
              groeien, maar biedt ook waardevolle inzichten aan toekomstige
              ouders die op zoek zijn naar warme, persoonlijke en professionele
              kraamzorg.
            </p>
          </Reveal>
        </div>
        <Ornament />
      </section>

      {/* Reviews widget */}
      <section className="section section--no-top" id="reviews">
        <div className="container">
          <Reveal>
            {/* Google Reviews-widget van de klant (Elfsight) */}
            <div
              className="elfsight-app-64efc1e1-f57a-407e-b0b4-91674dfb3df4"
              data-elfsight-app-lazy
            />
          </Reveal>
        </div>
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="afterInteractive"
        />
      </section>

      <CTABanner
        title="Zelf een bijzondere kraamtijd beleven?"
        text="Maak vrijblijvend kennis met De Islamitische Kraamzorg. Wij komen bij jou thuis voor een persoonlijk gesprek."
      />
    </>
  );
}
