"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { IconChat } from "./Icons";

/** Sticky actiebalk onderaan op mobiel. */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-cta">
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--sage"
      >
        <IconChat /> WhatsApp
      </a>
      <Link href="/contact" className="btn">
        Aanmelden
      </Link>
    </div>
  );
}
