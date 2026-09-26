import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Doorverwezen",
  robots: { index: false, follow: true },
  alternates: { canonical: "/utrecht" },
  other: { refresh: "0; url=/utrecht" },
};

/** Oude URL /utrecht-2 → /utrecht (301 in oorspronkelijke WordPress-site). */
export default function Utrecht2Redirect() {
  return (
    <section className="section" style={{ paddingTop: "12rem", textAlign: "center" }}>
      <div className="container">
        <p>
          Deze pagina is verhuisd.{" "}
          <Link href="/utrecht">Ga naar Utrecht →</Link>
        </p>
      </div>
    </section>
  );
}
