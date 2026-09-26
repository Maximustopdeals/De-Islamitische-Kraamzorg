import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import BackToTop from "@/components/BackToTop";
import { site } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Islamitische kraamzorg Utrecht | Kraamzorg op maat, 24/7",
    template: "%s | De Islamitische Kraamzorg",
  },
  description:
    "Islamitische kraamzorg in Utrecht, Zeist, Nieuwegein, Houten en Gorinchem. Liefdevolle kraamzorg afgestemd op uw geloof. 24/7 bereikbaar. Plan een vrijblijvende kennismaking.",
  openGraph: {
    siteName: site.name,
    locale: "nl_NL",
    type: "website",
  },
  robots: { index: true, follow: true },
  verification: {
    google: "G4xXTFzHfHpDXup5YT4xUhJTtXx5-tKeZplUiVPF0Ts",
  },
  icons: { icon: "/images/logo.webp", apple: "/images/logo.webp" },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness", "HealthAndBeautyBusiness"],
  name: site.name,
  alternateName: "Islamitische kraamzorg Utrecht",
  description: site.description,
  url: site.url,
  telephone: site.phoneIntl,
  email: site.email,
  image: `${site.url}/images/trotse-moeder-baby.webp`,
  logo: `${site.url}/images/logo.webp`,
  priceRange: "€",
  openingHours: "Mo-Su 00:00-23:59",
  knowsAbout: [
    "islamitische kraamzorg",
    "kraamzorg Utrecht",
    "kraamzorg Gorinchem",
    "kraamverzorgende",
  ],
  areaServed: [
    "Utrecht",
    "Zeist",
    "Nieuwegein",
    "Houten",
    "IJsselstein",
    "Gorinchem",
    "Hardinxveld",
    "Arkel",
  ],
  sameAs: [site.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`no-js ${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js')`,
          }}
        />
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KJ76485D');`}
        </Script>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MJ79FGGLFK"
          strategy="lazyOnload"
        />
        <Script id="ga4" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-MJ79FGGLFK');`}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KJ76485D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
        <WhatsAppWidget />
        <BackToTop />
      </body>
    </html>
  );
}
