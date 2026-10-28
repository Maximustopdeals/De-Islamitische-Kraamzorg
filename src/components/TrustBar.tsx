import type { ReactNode } from "react";

type TrustItem = {
  label: string;
  value?: string;
  icon?: ReactNode;
  isStars?: boolean;
};

const ITEMS: readonly TrustItem[] = [
  { value: "5.0/5", label: "Gemiddelde waardering", icon: <StarIcon /> },
  { value: "5+",    label: "Jaar ervaring",        icon: <CalendarCheckIcon /> },
  { isStars: true,  label: "Tevreden gezinnen" },
  { value: "24/7",  label: "Beschikbaar",          icon: <ClockIcon /> },
];

export default function TrustBar() {
  return (
    <section className="trust" aria-labelledby="trust-heading">
      <h2 id="trust-heading" className="sr-only">
        Vertrouwen en ervaring
      </h2>

      <div className="container">
        <ul className="trust__grid">
          {ITEMS.map((item) => (
            <li key={item.label} className="trust__item">
              {item.isStars ? (
                <span className="trust__stars">
                  <span aria-hidden="true">★★★★★</span>
                  <span className="sr-only">Vijf van vijf sterren</span>
                </span>
              ) : (
                <>
                  <span className="trust__icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="trust__number">{item.value}</span>
                </>
              )}
              <span className="trust__label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --- Iconen (klein, herbruikbaar, geen extra dependency) --- */

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function CalendarCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8"  y1="2" x2="8"  y2="6" />
      <line x1="3"  y1="10" x2="21" y2="10" />
      <polyline points="9 16 11 18 15 14" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
