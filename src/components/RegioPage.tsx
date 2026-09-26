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

const defaultUsps = [
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
}: {
  label: string;
  title: ReactNode;
  intro: string;
  cardsTitle: ReactNode;
  cardsIntro?: string;
  cards: RegioCard[];
  usps?: typeof defaultUsps;
  sections?: ContentSection[];
  sectionsKicker?: string;
  sectionsTitle?: ReactNode;
  flexTitle?: string;
  ctaTitle: string;
  ctaText: string;
}) {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ maxWidth: "62rem", textAlign: "center" }}>
          <Reveal>
            <span className="label label--center">{label}</span>
            <h1>{title}</h1>
            <p className="lead" style={{ marginInline: "auto" }}>{intro}</p>
            <div className="hero__actions" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="btn">
                Meld je nu aan
              </Link>
              <a href={site.phoneLink} className="btn btn--outline">
                Bel direct: {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
        <Ornament />
      </section>

      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div className="section__head">
            <span className="label">Werkgebied</span>
            <h2>{cardsTitle}</h2>
            {cardsIntro && <p>{cardsIntro}</p>}
          </div>
          <div
            className={`grid ${cards.length === 3 ? "grid--3" : "grid--2"}`}
            style={
              cards.length === 1
                ? { gridTemplateColumns: "minmax(0, 32rem)", justifyContent: "center" }
                : undefined
            }
          >
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="region-card">
                  {c.count && <span className="region-card__count">{c.count}</span>}
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
                                <span className="regio-steps__num" aria-hidden="true">
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
