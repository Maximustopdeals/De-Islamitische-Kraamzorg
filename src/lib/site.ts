export const site = {
  name: "De Islamitische Kraamzorg",
  shortName: "De Islamitische Kraamzorg Utrecht",
  description:
    "Islamitische kraamzorg in Utrecht en Gorinchem: warme, persoonlijke kraamzorg volledig afgestemd op islamitische waarden",
  url: "https://deislamitischekraamzorg.nl",
  phone: "06-34426489",
  phoneIntl: "+31634426489",
  phoneLink: "tel:+31634426489",
  whatsapp: "https://wa.me/31634426489",
  email: "info@deislamitischekraamzorg.nl",
  facebook: "https://www.facebook.com/people/De-Islamitische-Kraamzorg/100089960233370/",
  location: "Utrecht",
  kvk: "73038180",
  kckz: "217968",
  agb: "33330985",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/kraamzorg", label: "Kraamzorg" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/reviews", label: "Reviews" },
  {
    href: "/utrecht",
    label: "Werkgebied",
    children: [
      { href: "/utrecht", label: "Utrecht" },
      { href: "/gorinchem", label: "Gorinchem" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export const trustStats = [
  { value: "5.0/5", label: "Gemiddelde waardering" },
  { value: "5+", label: "Jaar ervaring" },
  { value: "★★★★★", label: "Tevreden gezinnen" },
  { value: "24/7", label: "Beschikbaar" },
];
