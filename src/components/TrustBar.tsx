export default function TrustBar() {
  return (
    <section className="trust" aria-label="Vertrouwen en ervaring">
      <div className="container">
        <div className="trust__grid">
          <div className="trust__item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="trust__number">5.0/5</span>
            <span className="trust__label">Gemiddelde waardering</span>
          </div>

          <div className="trust__item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <polyline points="9 16 11 18 15 14" />
            </svg>
            <span className="trust__number">5+</span>
            <span className="trust__label">Jaar ervaring</span>
          </div>

          <div className="trust__item">
            <span className="trust__stars" aria-label="5 van 5 sterren">★★★★★</span>
            <span className="trust__label">Tevreden gezinnen</span>
          </div>

          <div className="trust__item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="trust__number">24/7</span>
            <span className="trust__label">Beschikbaar</span>
          </div>
        </div>
      </div>
    </section>
  );
}
