# De Islamitische Kraamzorg — Next.js

Migratie van de WordPress/Divi-website naar **Next.js 16 (App Router)**.
Alle content is 1-op-1 overgenomen uit de Migratik-export, met een nieuw
high-end ontwerp, verbeterde SEO en snelle statische export.

## Stack

- Next.js 16 (App Router, static export via `output: "export"`)
- React 19, TypeScript
- Eigen designsysteem in `src/app/globals.css` (geen CSS-framework)
- Fonts: Playfair Display + Inter via `next/font` (zelf-gehost, geen externe requests)
- Afbeeldingen via `next/image` in `public/images/`

## Pagina's

| Route | Inhoud |
|---|---|
| `/` | Home |
| `/kraamzorg` | Diensten, werkwijze, kosten, FAQ (met FAQPage structured data) |
| `/over-ons` | Over Nadia, missie, werkwijze |
| `/reviews` | Reviews + Elfsight Google Reviews-widget |
| `/contact` | Contactformulier, telefoon, e-mail, WhatsApp |
| `/utrecht`, `/gorinchem`, `/zuid-holland`, `/noord-brabant` | Regiopagina's |
| `/over-mij`, `/utrecht-2` | Redirects van oude WordPress-URL's |

## SEO

- Per pagina titels, descriptions, canonicals en Open Graph (uit de
  Yoast/Rank Math-meta's van de oude site, verduidelijkt waar die
  inconsistent waren)
- `sitemap.xml` en `robots.txt` via de App Router
- JSON-LD structured data: LocalBusiness (sitewide) en FAQPage (`/kraamzorg`)

## Contactformulier

Het formulier werkt zonder backend: het bericht wordt via WhatsApp
(`wa.me/31634426489`) afgeleverd. Wil je in plaats daarvan e-mail gebruiken,
zet dan een omgevingsvariabele `NEXT_PUBLIC_CONTACT_ENDPOINT` (bijv. een
Formspree- of Resend-endpoint) — het formulier post daar dan naartoe met
WhatsApp als fallback.

## Projectstructuur

- `source/` — de volledige Next.js-broncode
- projectroot — de statische export (dit is wat er live gaat)

## Commando's

```bash
cd source
npm install
npm run dev    # ontwikkelen
npm run build  # statische export → out/ én dist/
```

Kopieer na een build de inhoud van `source/out/` naar de projectroot om de
site bij te werken.

## Deploy

De export in `out/` is volledig statisch en kan op elke statische host
(Vercel, Netlify, eigen server) draaien. Let op dat de host `sitemap.xml`,
`robots.txt` en de submappen met `index.html` correct serveert.
