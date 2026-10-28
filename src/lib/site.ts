/**
 * Centrale instellingen voor De Islamitische Kraamzorg.
 * Alles op één plek, zodat we het makkelijk kunnen aanpassen.
 */

export type NavItem = {
  label: string;
  href: string;
  // Voor het dropdown menu in de header
  children?: readonly NavItem[];
};

/* Jouw bedrijfsgegevens */
export const site = {
  name: "De Islamitische Kraamzorg",
  url: "https://deislamitischekraamzorg.nl",
  description:
    "Islamitische kraamzorg in Utrecht, Zeist, Nieuwegein, Houten en Gorinchem. Liefdevolle kraamzorg afgestemd op uw geloof. 24/7 bereikbaar.",
  phone: "06-34426489",
  phoneIntl: "+31634426489",
  phoneLink: "tel:+31634426489",
  whatsapp: "https://wa.me/31634426489",
  email: "info@deislamitischekraamzorg.nl",
  facebook: "https://www.facebook.com/share/1Ef8FCwy7t/",
  location: "Utrecht",
  address: {
    locality: "Utrecht",
    country: "NL",
  },
  openingHours: "Ma-Zo 00:00-23:59",
} as const;

/* Menu bovenaan de website */
export const nav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Werkgebied", href: "/utrecht" },
  { label: "Kraamzorg", href: "/kraamzorg" },
  { label: "Contact", href: "/contact" },
] as const;

/* Links onderaan de website */
export const footerNav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Werkgebied Utrecht", href: "/utrecht" },
  { label: "Werkgebied Gorinchem", href: "/gorinchem" },
  { label: "Contact", href: "/contact" },
] as const;
