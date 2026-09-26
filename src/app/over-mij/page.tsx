import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Doorverwezen",
  robots: { index: false, follow: true },
  alternates: { canonical: "/over-ons" },
  other: { refresh: "0; url=/over-ons" },
};

/** Oude URL /over-mij → /over-ons (301 in oorspronkelijke WordPress-site). */
export default function OverMijRedirect() {
  return (
    <section className="section" style={{ paddingTop: "12rem", textAlign: "center" }}>
      <div className="container">
        <p>
          Deze pagina is verhuisd.{" "}
          <Link href="/over-ons">Ga naar Over ons →</Link>
        </p>
      </div>
    </section>
  );
}
