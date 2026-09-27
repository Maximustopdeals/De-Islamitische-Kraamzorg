"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { IconChat } from "./Icons";

/** Sticky actiebalk onderaan op mobiel. */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="sticky-cta"
      role="complementary"
      aria-label="Snelle acties"
    >
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--sage"
        aria-label="Stuur een WhatsApp bericht"
      >
        <IconChat /> WhatsApp
      </a>
      <Link
        href="/contact"
        className="btn"
        aria-label="Meld je aan voor kraamzorg"
      >
        Aanmelden
      </Link>
    </div>
  );
}
