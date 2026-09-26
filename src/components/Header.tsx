"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="container header__inner">
          <Link href="/" className="brand" aria-label={site.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.webp" alt="" width={44} height={44} />
            <span>
              De Islamitische Kraamzorg
              <small>Utrecht &amp; omstreken</small>
            </span>
          </Link>

          <nav className="nav" aria-label="Hoofdmenu">
            {nav.map((item) =>
              item.children ? (
                <div className="nav__group" key={item.href}>
                  <span
                    className={`nav__label${
                      item.children.some((c) => c.href === pathname)
                        ? " active"
                        : ""
                    }`}
                  >
                    {item.label}
                  </span>
                  <div className="nav__dropdown">
                    <div className="nav__dropdown-inner">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={pathname === item.href ? "active" : ""}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <Link href="/contact" className="btn header__cta">
            Plan kennismaking
          </Link>

          <button
            className="menu-toggle"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
          </button>
        </div>
      </header>

      <nav className={`mobile-nav${open ? " open" : ""}`} aria-label="Mobiel menu">
        {nav.map((item) =>
          item.children ? (
            <div key={item.href}>
              <span className="mobile-nav__label">{item.label}</span>
              <div className="mobile-nav__sub">
                {item.children.map((child) => (
                  <Link key={child.href} href={child.href}>
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          )
        )}
        <Link href="/contact" className="btn">
          Plan een kennismaking
        </Link>
      </nav>
    </>
  );
}
