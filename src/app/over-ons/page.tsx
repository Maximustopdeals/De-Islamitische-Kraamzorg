import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Ornament from "@/components/Ornament";
import CTABanner from "@/components/CTABanner";
import { IconMoon, IconUsers, IconShield, IconHeart } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Over Nadia: islamitische kraamverzorgende in Utrecht",
  description:
    "Ontmoet Nadia, gecertificeerd islamitische kraamverzorgende in Utrecht met ruim 5 jaar ervaring. Liefdevolle kraamzorg met diep respect voor islamitische waarden.",
  alternates: { canonical: "/over-ons" },
  openGraph: {
    title: "Over Nadia: islamitische kraamverzorgende in Utrecht",
    description:
      "Ontmoet Nadia, gecertificeerd islamitische kraamverzorgende in Utrecht met ruim 5 jaar ervaring. Liefdevolle kraamzorg met diep respect voor islamitische waarden.",
    url: "/over-ons",
  },
};

const werkwijze = [
  {
    title: "Babyverzorging",
    text: "Ik help bij het baden, verschonen, voeden en observeren van je baby, met aandacht voor hygiëne en comfort.",
  },
  {
    title: "Ondersteuning moeder",
    text: "Ik begeleid jou bij lichamelijk herstel, borstvoeding, rustmomenten en emotionele balans in de kraamtijd.",
  },
  {
    title: "Islamitische rituelen",
    text: "Ik begeleid bij het verrichten van de tahniek, de adhan en andere aanbevolen islamitische zaken.",
  },
  {
    title: "Gezinsgerichte zorg",
    text: "Ook broertjes en zusjes krijgen aandacht. Ik zorg voor harmonie en betrokkenheid binnen het hele gezin.",
  },
  {
    title: "Voorlichting & advies",
    text: "Ik geef voorlichting, advies en instructies over babyverzorging, voeding, veiligheid en alles wat betrekking heeft op moeder en baby.",
  },
  {
    title: "Geregistreerd & gecertificeerd",
    text: "Geregistreerd bij KCKZ en KIWA-gecertificeerd. Jaarlijkse bijscholing hoort voor mij bij goede zorg.",
  },
];

export default function OverOns() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ maxWidth: "62rem", textAlign: "center" }}>
          <Reveal>
            <span className="label label--center">Utrecht &amp; omstreken</span>
            <h1>
              Ontmoet <span className="accent">Nadia</span>
            </h1>
            <p className="lead" style={{ marginInline: "auto" }}>
              Jouw vertrouwde kraamverzorgster in Utrecht. Met liefdevolle
              aandacht, rust en diep respect voor islamitische waarden begeleid
              ik gezinnen tijdens de bijzondere kraamtijd in Utrecht en
              omstreken.
            </p>
          </Reveal>
        </div>
        <Ornament />
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal className="split__media split__media--arch">
              <Image
                src="/images/nadia-aan-het-werk.webp"
                alt="Nadia, islamitische kraamverzorgende in Utrecht"
                width={900}
                height={1201}
                sizes="(max-width: 900px) 100vw, 45vw"
              />
            </Reveal>
            <Reveal delay={0.15}>
              <span className="label">Wie ik ben</span>
              <h2 style={{ margin: "1rem 0 1.25rem" }}>
                Gecertificeerd kraamverzorgende met 5+ jaar ervaring
              </h2>
              <div className="prose">
                <p>
                  Mijn naam is Nadia, gecertificeerd kraamverzorgende en
                  oprichter van De Islamitische Kraamzorg. Met liefde, rust en
                  toewijding begeleid ik gezinnen in een van de meest bijzondere
                  momenten van hun leven: de kraamtijd.
                </p>
                <p>
                  Als moslima en kraamverzorgende in Utrecht begrijp ik hoe
                  belangrijk het is dat zorg aansluit bij jouw waarden, rituelen
                  en levensstijl. Daarom bied ik kraamzorg die niet alleen
                  professioneel is, maar ook spiritueel afgestemd, discreet en
                  hartverwarmend.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="quote" style={{ marginTop: "clamp(3.5rem, 7vw, 5.5rem)" }}>
              <p>“Zorg begint met aandacht. En aandacht begint met luisteren.”</p>
              <footer>Nadia, kraamverzorgende in Utrecht</footer>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="grid grid--3">
            <Reveal>
              <div className="card">
                <span className="card__icon"><IconHeart /></span>
                <h3>Mijn missie</h3>
                <p>
                  Mijn missie is om jou en je gezin een veilige, liefdevolle
                  start te geven met aandacht voor lichaam, ziel en omgeving. Ik
                  geloof dat goede zorg begint met luisteren naar jouw wensen,
                  jouw ritme en jouw geloofsovertuiging.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card">
                <span className="card__icon"><IconMoon /></span>
                <h3>Waarom islamitische kraamzorg?</h3>
                <p>
                  Islamitische kraamzorg biedt rust, herkenning en vertrouwen.
                  Van privacy en bescheidenheid tot rituelen zoals tahniek en
                  adhan. Ik zorg dat jouw kraamtijd in Utrecht volledig aansluit
                  bij jouw islamitische waarden.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="card">
                <span className="card__icon"><IconUsers /></span>
                <h3>Hoe ik werk</h3>
                <p>
                  Ik werk samen met een aantal andere islamitische
                  kraamverzorgenden in Utrecht. Mocht ik zelf door omstandigheden
                  niet beschikbaar zijn, dan word je vooraf geïnformeerd over
                  welke collega de zorg bij jou zal verlenen.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid grid--2" style={{ marginTop: "1.5rem" }}>
            <Reveal>
              <div className="card card--sage">
                <span className="card__icon"><IconShield /></span>
                <h3>Geregistreerd &amp; gecertificeerd</h3>
                <p>
                  Ik ben geregistreerd bij KCKZ en KIWA-gecertificeerd.
                  Jaarlijkse bijscholing hoort voor mij bij goede zorg in
                  Utrecht.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card card--sage">
                <span className="card__icon"><IconMoon /></span>
                <h3>Islamitische zorgvisie</h3>
                <p>
                  Mijn zorg sluit aan op islamitische waarden zoals privacy,
                  bescheidenheid, tawakkul en rituelen zoals tahniek en adhan in
                  Utrecht.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="label">Mijn werkwijze</span>
            <h2>Zorg met aandacht, structuur en respect</h2>
            <p>
              Elke kraamweek is uniek, maar mijn werkwijze is altijd gebaseerd
              op rust, vertrouwen en betrokkenheid. Ik werk volgens een
              duidelijke structuur, afgestemd op jouw gezinssituatie en
              islamitische waarden in Utrecht en omstreken.
            </p>
            <p style={{ marginTop: "0.8rem" }}>
              Ik bied in overleg met mijn kraamvrouwen een vaste dagindeling die
              zorgt voor rust en overzicht in huis.
            </p>
          </div>
          <div className="grid grid--2">
            {werkwijze.map((w, i) => (
              <Reveal key={w.title} delay={(i % 2) * 0.1}>
                <div className="step" style={{ borderBottom: 0, padding: "1.2rem 0" }}>
                  <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Plan een vrijblijvende kennismaking in Utrecht"
        text="Ontdek mijn persoonlijke werkwijze en passie voor het vak tijdens een gesprek bij jou thuis."
      />
    </>
  );
}
