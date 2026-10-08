import type { Metadata } from "next"; 
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Ornament from "@/components/Ornament";
import TrustBar from "@/components/TrustBar";
import CTABanner from "@/components/CTABanner";
import { site } from "@/lib/site";
import { IconHeart, IconMoon, IconUsers } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Islamitische kraamzorg Utrecht | Kraamzorg op maat, 24/7",
  description:
    "Islamitische kraamzorg in Utrecht, Zeist, Nieuwegein, Houten en Gorinchem. Liefdevolle kraamzorg afgestemd op uw geloof. 24/7 bereikbaar. Plan een vrijblijvende kennismaking.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Islamitische kraamzorg Utrecht | Kraamzorg op maat, 24/7",
    description:
      "Islamitische kraamzorg in Utrecht, Zeist, Nieuwegein, Houten en Gorinchem. Liefdevolle kraamzorg afgestemd op uw geloof. 24/7 bereikbaar.",
    url: "/",
    images: [{ url: "/images/trotse-moeder-baby.webp", width: 1536, height: 1024 }],
  },
};

const pluspunten = [
  {
    icon: <IconMoon />,
    title: "Zorg afgestemd op islamitische waarden",
    text: "Extra aandacht voor gebedstijden, reinheid, voeding en islamitische gewoonten. Islamitische kraamzorg die volledig past bij uw geloof en levensstijl.",
  },
  {
    icon: <IconHeart />,
    title: "Ervaren & cultuursensitief",
    text: "Gediplomeerd en ervaren in het begeleiden van moslimgezinnen in Utrecht. Persoonlijke kraamzorg op maat, met oog voor uw specifieke wensen.",
  },
  {
    icon: <IconUsers />,
    title: "Ondersteuning voor het hele gezin",
    text: "Niet alleen voor moeder en baby, maar ook steun aan partner en gezin. Rust en vertrouwen in uw eigen thuisomgeving in Utrecht.",
  },
];

const regios = [
  {
    count: "8+ plaatsen",
    title: "Utrecht & Regio",
    text: "De binnenstad, Overvecht, Leidsche Rijn, Lunetten, Kanaleneiland, Vleuten, De Meern en meer.",
    places: ["Utrecht", "Vleuten", "De Meern", "Leidsche Rijn"],
  },
  {
    count: "10+ plaatsen",
    title: "Omliggende gemeenten",
    text: "Ook in Zeist, Nieuwegein, Houten, IJsselstein, Leusden, Woerden, Montfoort en meer.",
    places: ["Zeist", "Nieuwegein", "Houten", "IJsselstein", "Leusden", "Woerden"],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <span className="hero__vertical" aria-hidden="true">
          Assalamu alaykum, welkom
        </span>
        <div className="container hero__grid">
          <Reveal>
            <span className="label">Utrecht &amp; omstreken</span>
            <h1>
              Islamitische <span className="accent">kraamzorg</span> in Utrecht
            </h1>
            <p className="lead">
              De Islamitische Kraamzorg biedt liefdevolle islamitische
              kraamzorg in Utrecht, Zeist, Nieuwegein, Houten, IJsselstein en
              omstreken. <strong>24/7 beschikbaar</strong>, ook in het weekend.
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="btn">
                Meld je nu aan
              </Link>
              <a href={site.phoneLink} className="btn btn--outline">
                Bel {site.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="hero__media">
            <div className="frame">
              <Image
                src="/images/trotse-moeder-baby.webp"
                alt="Trotse moeder met haar pasgeboren baby"
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 100vw, 45vw"
                priority
              />
            </div>
            <div className="hero__badge">
              <strong>24/7</strong>
              bereikbaar, ook in het weekend
            </div>
          </Reveal>
        </div>
        <Ornament />
      </section>

      {/* Intro */}
      <section className="section" id="welkom">
        <div className="container">
          <div className="split">
            <Reveal>
              <span className="label">Welkom</span>
              <h2 className="section__title">
                Liefdevolle islamitische kraamzorg in Utrecht, afgestemd op uw
                geloof
              </h2>
              <div className="prose">
                <p>
                  De Islamitische Kraamzorg Utrecht verwelkomt u met{" "}
                  <em>Assalamu alaykum</em>. De komst van een baby is een uniek
                  en onvergetelijk moment. Juist in deze bijzondere periode is
                  het belangrijk dat moeder en kind omringd worden met rust,
                  warmte en de beste zorg.
                </p>
                <p>
                  Bij De Islamitische Kraamzorg in Utrecht staat niet alleen de
                  gezondheid centraal, maar ook respect voor uw geloof en
                  culturele achtergrond. Wij zien ieder kind als een kostbaar
                  geschenk van Allah (subhana wa ta3ala).
                </p>
                <p>
                  De Islamitische Kraamzorg combineert de bewezen protocollen
                  van reguliere kraamzorg in Utrecht met extra aandacht voor
                  islamitische normen en waarden. Van gebedsondersteuning en
                  reinheidsvoorschriften tot voeding en omgangsvormen, alles
                  wordt afgestemd op uw wensen. Zo ervaart u de islamitische
                  kraamzorg in Utrecht zoals het hoort: vertrouwd, respectvol en
                  in harmonie met uw geloof.
                </p>
              </div>
              <div className="section__actions">
                <Link href="/contact" className="btn">
                  Vrijblijvend kennismakingsgesprek
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="split__media split__media--arch">
              <Image
                src="/images/nadia-baby-bad.webp"
                alt="Islamitische kraamverzorgende doet een pasgeboren baby in bad"
                width={900}
                height={1200}
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pluspunten */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__head center">
            <span className="label label--center">Waarom wij</span>
            <h2>Zorg die verder gaat dan zorg alleen</h2>
          </div>
          <div className="grid grid--3">
            {pluspunten.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="card">
                  <span className="card__icon">{p.icon}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="section__actions center">
            <Link href="/contact" className="btn btn--outline">
              Plan een vrijblijvende kennismaking
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Werkgebieden */}
      <section className="section" id="werkgebied">
        <div className="container">
          <div className="section__head">
            <span className="label">Werkgebied</span>
            <h2>
              Onze werkgebieden in <span className="accent">Utrecht</span>
            </h2>
            <p>
              Wij komen bij je thuis in de hele provincie Utrecht en omliggende
              gemeenten, maar ook in{" "}
              <Link href="/gorinchem">Gorinchem, Hardinxveld en Arkel</Link>.
            </p>
          </div>
          <div className="grid grid--2">
            {regios.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.1}>
                <div className="region-card">
                  <span className="region-card__count">{r.count}</span>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                  <ul>
                    {r.places.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="section__actions">
            <Link href="/utrecht" className="btn btn--outline">
              Bekijk alle plaatsen in Utrecht →
            </Link>
          </div>
        </div>
      </section>

      {/* Flexibiliteit */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <span className="label">Flexibel</span>
            <h2>Komt u buiten Utrecht?</h2>
            <p>
              De Islamitische Kraamzorg is flexibel. Neem contact op, ook als u
              net buiten onze regio woont.
            </p>
          </div>
          <div className="grid grid--2">
            <Reveal>
              <div className="card">
                <span className="card__icon"><IconHeart /></span>
                <h3>Flexibele planning</h3>
                <p>
                  Wij denken graag met je mee, ook bij bijzondere situaties.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card">
                <span className="card__icon"><IconMoon /></span>
                <h3>Afgestemd op islamitische waarden</h3>
                <p>
                  Onze zorg blijft 100% afgestemd op islamitische waarden, waar
                  je ook woont.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner
        title="Woon je in Utrecht of omstreken?"
        text="Maak vrijblijvend kennis met De Islamitische Kraamzorg. Wij komen bij jou thuis voor een persoonlijk gesprek."
      />
    </>
  );
}
