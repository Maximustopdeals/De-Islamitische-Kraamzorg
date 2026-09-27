import type { Metadata } from "next";
import RegioPage from "@/components/RegioPage";

export const metadata: Metadata = {
  title: "Islamitische kraamzorg Utrecht | 24/7 bereikbaar",
  description:
    "Zoekt u islamitische kraamzorg in Utrecht? Wij bieden persoonlijke, gediplomeerde kraamzorg met aandacht voor uw geloof, cultuur en gezin.",
  alternates: { canonical: "/utrecht" },
  openGraph: {
    title: "Islamitische kraamzorg Utrecht | 24/7 bereikbaar",
    description:
      "Zoekt u islamitische kraamzorg in Utrecht? Wij bieden persoonlijke, gediplomeerde kraamzorg met aandacht voor uw geloof, cultuur en gezin.",
    url: "/utrecht",
  },
};

// Structured data voor de regiopagina
const regioSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "De Islamitische Kraamzorg — Utrecht",
  areaServed: {
    "@type": "City",
    name: "Utrecht",
    containedInPlace: {
      "@type": "State",
      name: "Utrecht",
    },
  },
  serviceType: "Islamitische kraamzorg",
  provider: {
    "@type": "Organization",
    name: "De Islamitische Kraamzorg",
    url: "https://deislamitischekraamzorg.nl",
  },
};

// Breadcrumb schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://deislamitischekraamzorg.nl",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Werkgebied",
      item: "https://deislamitischekraamzorg.nl/utrecht",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Utrecht",
      item: "https://deislamitischekraamzorg.nl/utrecht",
    },
  ],
};

export default function Utrecht() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(regioSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <RegioPage
        label="Utrecht & omstreken"
        title={
          <>
            Islamitische <span className="accent">kraamzorg</span> in Utrecht
          </>
        }
        intro="Een zorgeloze start in jouw eigen regio. Woon je in Utrecht of omstreken en zoek je een kraamverzorgster die jouw cultuur en geloof écht begrijpt? Wij bieden hoogwaardige, gecertificeerde zorg bij jou thuis. Of je nu bevalt in het Diakonessenhuis, het UMCU of thuis: wij staan 24/7 met liefdevolle rust voor je klaar."
        cardsTitle={
          <>
            Onze werkgebieden in <span className="accent">Utrecht</span>
          </>
        }
        cardsIntro="Wij komen bij je thuis in de hele provincie Utrecht en omliggende gemeenten. Bekijk hieronder of wij ook in jouw plaats actief zijn."
        cards={[
          {
            count: "8+ plaatsen",
            title: "Utrecht & Regio",
            text: "De binnenstad, Overvecht, Leidsche Rijn, Lunetten, Kanaleneiland, Vleuten, De Meern en meer.",
            places: ["Utrecht", "Vleuten", "De Meern", "Leidsche Rijn"],
          },
          {
            count: "10+ plaatsen",
            title: "Omliggende gemeenten",
            text: "Ook in Zeist, Nieuwegein, Houten, IJsselstein, Leusden, Woerden, Montfoort en meer.",
            places: ["Zeist", "Nieuwegein", "Houten", "IJsselstein", "Leusden", "Woerden"],
          },
        ]}
        sectionsTitle={
          <>
            Alles over islamitische <span className="accent">kraamzorg</span> in Utrecht
          </>
        }
        sections={[
          {
            title: "Islamitische kraamzorg in Utrecht: zorg die aansluit bij uw geloof en gezin",
            paragraphs: [
              "Bent u zwanger en zoekt u islamitische kraamzorg in Utrecht? Bij De Islamitische Kraamzorg staat de eerste week na de bevalling centraal: rust, herstel, borstvoeding, bonding en praktische ondersteuning, volledig afgestemd op islamitische waarden en uw persoonlijke wensen.",
              "Onze kraamverzorgenden zijn gediplomeerd, ervaren en werken dagelijks met gezinnen in Utrecht en omgeving. Wij begrijpen hoe belangrijk het is dat uw zorgverlener respect heeft voor uw geloof, gebedsmomenten, voeding en gewoonten rond de geboorte.",
            ],
          },
          {
            title: "Wat mag u verwachten van onze islamitische kraamzorg in Utrecht?",
            paragraphs: [
              "Tijdens uw kraamweek komt een vaste kraamverzorgende dagelijks bij u thuis. Samen zorgen we voor een veilige, rustige start voor moeder, baby en gezin. Onze zorg is persoonlijk, praktisch en met kennis van islamitische tradities.",
              "U kunt denken aan:",
            ],
            bullets: [
              "Persoonlijke begeleiding van moeder en partner, met aandacht voor uw religieuze en culturele achtergrond",
              "Ondersteuning bij borstvoeding of flesvoeding, met respect voor uw keuze",
              "Praktische hulp in huis: lichte huishoudelijke taken, maaltijden, wasjes en verzorging van de baby",
              "Voorlichting over verzorging van de pasgeborene, signalen van de baby, slaapritme en hechting",
              "Aandacht voor islamitische gewoonten, zoals de adhan in het oor van de baby en bismillah bij het oppakken",
              "Ruimte voor gebed en rust, zodat u zich kunt richten op herstel en bonding",
            ],
          },
          {
            title: "Voor wie is islamitische kraamzorg in Utrecht bedoeld?",
            paragraphs: [
              "Onze kraamzorg is er voor alle gezinnen in Utrecht die waarde hechten aan:",
            ],
            bullets: [
              "Een vrouwelijke kraamverzorgende",
              "Zorg die rekening houdt met islamitische voorschriften en tradities",
              "Een persoonlijke benadering in uw eigen thuisomgeving",
              "Duidelijke communicatie in een vertrouwde sfeer",
            ],
          },
          {
            title: "Waarom kiezen gezinnen in Utrecht voor De Islamitische Kraamzorg?",
            bullets: [
              "Gediplomeerde kraamverzorgenden met ervaring in islamitische gezinnen",
              "Vaste verzorgende gedurende uw kraamweek, waar mogelijk",
              "Flexibele intakes: thuis of telefonisch, op een moment dat u uitkomt",
              "Samenwerking met verloskundigen en andere zorgverleners in Utrecht",
              "Aandacht voor het hele gezin, inclusief broertjes en zusjes",
            ],
            paragraphsAfter: [
              "Wij geloven dat een goede start in het kraambed bijdraagt aan een zelfverzekerde start als ouder. Daarom luisteren we goed naar uw wensen en stemmen we de zorg daarop af.",
            ],
          },
          {
            title: "Hoe meldt u zich aan voor islamitische kraamzorg in Utrecht?",
            variant: "steps" as const,
            paragraphs: [
              "Schrijf u op tijd in, idealiter zodra u weet dat u zwanger bent.",
            ],
            bullets: [
              "Vul het contactformulier op deze website in of neem telefonisch contact op.",
              "Wij plannen een intakegesprek (thuis of telefonisch) rond de 28e tot 32e zwangerschapsweek.",
              "Tijdens de intake bespreken we uw situatie, wensen en eventuele extra zorgbehoeften.",
              "Na de bevalling neemt uw kraamverzorgende contact op om de eerste zorgdag in te plannen.",
            ],
            paragraphsAfter: [
              "Voor de meeste gezinnen wordt kraamzorg vergoed vanuit de basisverzekering, met een eigen bijdrage per dag. Wij helpen u graag met informatie over vergoedingen en eventuele aanvullende verzekeringen.",
            ],
          },
        ]}
        flexTitle="Komt u buiten Utrecht?"
        ctaTitle="Woon je in Utrecht of omstreken?"
        ctaText="Maak vrijblijvend kennis. Wij komen bij jou thuis voor een persoonlijk gesprek."
      />
    </>
  );
}
