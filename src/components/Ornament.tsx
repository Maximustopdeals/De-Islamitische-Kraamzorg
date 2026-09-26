"use client";

import { useEffect, useRef } from "react";

/** Handgetekende halve maan-ornament; lijn wordt getekend zodra hij in beeld komt. */
export default function Ornament() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("drawn");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className="ornament"
      viewBox="0 0 160 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M8 28 H58" />
      <path d="M102 28 H152" />
      <path d="M92 12a18 18 0 1 0 0 32 14 14 0 1 1 0-32Z" />
      <path d="M86 20l1.8 4.2L92 26l-4.2 1.8L86 32l-1.8-4.2L80 26l4.2-1.8L86 20Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
