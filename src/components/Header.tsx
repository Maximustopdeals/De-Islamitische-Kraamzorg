"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Scroll detection (SSR-veilig)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sluit mobile menu bij navigatie
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Body scroll lock bij open mobile menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Sluit menu bij Escape-toets
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`}>
        <div className="container header__inner">
          <Link href="/" className="brand" aria-label={site.name}>
            <Image
              src="/images/logo.webp"
              alt="Logo De Islamitische Kraamzorg"
              width={44}
              height={44}
              priority
            />
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
                  aria-current={pathname === item.href ? "page" : undefined}
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
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            <span />
          </button>
        </div>
      </header>

      <nav
        id="mobile-nav"
        className={`mobile-nav${open ? " open" : ""}`}
        aria-label="Mobiel menu"
        aria-hidden={!open}
      >
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
