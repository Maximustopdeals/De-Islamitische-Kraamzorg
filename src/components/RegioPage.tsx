import Link from "next/link";
import { type ReactNode } from "react";
import Reveal from "./Reveal";
import Ornament from "./Ornament";
import CTABanner from "./CTABanner";
import { site } from "@/lib/site";
import { IconMoon, IconClock, IconHeart, IconCheck } from "./Icons";

export interface RegioCard {
  count?: string;
  title: string;
  text: string;
  places: string[];
}

export interface ContentSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  paragraphsAfter?: string[];
  /** "steps" toont bullets als genummerde tijdlijn i.p.v. kaartjes */
  variant?: "default" | "steps";
}

export interface USP {
  icon: ReactNode;
  title: string;
  text: string;
}

const defaultUsps: USP[] = [
  {
    icon: <IconMoon />,
    title: "Afgestemd op islamitische waarden",
    text: "Zorg volgens islamitische waarden met respect voor gebed, reinheid en voorschriften.",
  },
  {
    icon: <IconClock />,
    title: "24/7 beschikbaar",
    text: "Dag en nacht, ook in het weekend. Jouw rust en herstel staan voorop.",
  },
  {
    icon: <IconHeart />,
    title: "Ervaren & liefdevol",
    text: "Gediplomeerde kraamverzorgenden met kennis van de islamitische cultuur.",
  },
];

interface RegioPageProps {
  label: string;
  title: ReactNode;
  intro: string;
  cardsTitle: ReactNode;
  cardsIntro?: string;
  cards: RegioCard[];
  usps?: USP[];
  sections?: ContentSection[];
  sectionsKicker?: string;
  sectionsTitle?: ReactNode;
  flexTitle?: string;
  ctaTitle: string;
  ctaText: string;
}

export default function RegioPage({
  label,
  title,
  intro,
  cardsTitle,
  cardsIntro,
  cards,
  usps = defaultUsps,
  sections = [],
  sectionsKicker = "Goed om te weten",
  sectionsTitle,
  flexTitle,
  ctaTitle,
  ctaText,
}: RegioPageProps) {
  // Bepaal de grid-klasse op basis van het aantal cards
  const gridClass =
    cards.length === 1
      ? "grid grid--1"
      : cards.length === 2
        ? "grid grid--2"
        : "grid grid--3";

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container container--narrow text-center">
          <Reveal>
            <span className="label label--center">{label}</span>
            <h1>{title}</h1>
            <p className="lead lead--center">{intro}</p>
            <div className="hero__actions hero__actions--center">
              <Link href="/contact" className="btn">
                Meld je nu aan
              </Link>
              <a
                href={site.phoneLink}
                className="btn btn--outline"
                aria-label={`Bel ${site.phone}`}
              >
                Bel direct: {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
        <Ornament />
      </section>

      {/* Werkgebied cards */}
      <section className="section section--compact-top">
        <div className="container">
          <div className="section__head">
            <span className="label">Werkgebied</span>
            <h2>{cardsTitle}</h2>
            {cardsIntro && <p>{cardsIntro}</p>}
          </div>
          <div className={gridClass}>
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="region-card">
                  {c.count && (
                    <span className="region-card__count">{c.count}</span>
                  )}
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <ul>
                    {c.places.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="section section--alt">
        <div className="container">
          <div className="grid grid--3">
            {usps.map((u, i) => (
              <Reveal key={u.title} delay={i * 0.1}>
                <div className="card">
                  <span className="card__icon">{u.icon}</span>
                  <h3>{u.title}</h3>
                  <p>{u.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {flexTitle && (
            <Reveal>
              <p className="note">
                <strong>{flexTitle}</strong> Wij zijn flexibel. Neem contact op,
                ook als u net buiten onze regio woont.
              </p>
            </Reveal>
          )}
        </div>
      </section>

      <CTABanner title={ctaTitle} text={ctaText} />

      {/* Content sections */}
      {sections.length > 0 && (
        <div className="regio-sections">
          {sectionsTitle && (
            <div className="container">
              <div className="section__head center">
                <span className="label label--center">{sectionsKicker}</span>
                <h2>{sectionsTitle}</h2>
              </div>
            </div>
          )}
          {sections.map((s, i) => (
            <section
              key={s.title}
              className={`regio-band${i % 2 === 1 ? " regio-band--alt" : ""}`}
            >
              <div className="container">
                <Reveal>
                  <div className="regio-block">
                    <span className="regio-block__num" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="regio-block__body">
                      <h2>{s.title}</h2>
                      {s.paragraphs?.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                      {s.bullets &&
                        (s.variant === "steps" ? (
                          <ol className="regio-steps">
                            {s.bullets.map((b, j) => (
                              <li key={b}>
                                <span
                                  className="regio-steps__num"
                                  aria-hidden="true"
                                >
                                  {j + 1}
                                </span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ol>
                        ) : (
                          <ul className="regio-points">
                            {s.bullets.map((b) => (
                              <li key={b}>
                                <span className="regio-points__icon">
                                  <IconCheck />
                                </span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        ))}
                      {s.paragraphsAfter?.map((p, j) => (
                        <div key={`after-${j}`} className="regio-note">
                          <p>{p}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  );
}
