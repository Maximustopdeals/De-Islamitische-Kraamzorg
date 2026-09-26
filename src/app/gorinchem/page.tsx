import type { Metadata } from "next";
import RegioPage from "@/components/RegioPage";

export const metadata: Metadata = {
  title: "Islamitische kraamzorg Gorinchem | 24/7 bereikbaar",
  description:
    "Zoekt u islamitische kraamzorg in Gorinchem? Wij bieden persoonlijke, gediplomeerde kraamzorg met respect voor uw geloof, cultuur en gezin.",
  alternates: { canonical: "/gorinchem" },
  openGraph: {
    title: "Islamitische kraamzorg Gorinchem | 24/7 bereikbaar",
    description:
      "Zoekt u islamitische kraamzorg in Gorinchem? Wij bieden persoonlijke, gediplomeerde kraamzorg met respect voor uw geloof, cultuur en gezin.",
    url: "/gorinchem",
  },
};

export default function Gorinchem() {
  return (
    <RegioPage
      label="Gorinchem & omgeving"
      title={
        <>
          Islamitische <span className="accent">kraamzorg</span> in Gorinchem,
          Hardinxveld en Arkel
        </>
      }
      intro="In de historische stad Gorinchem bied ik persoonlijke islamitische kraamzorg aan gezinnen. Liefdevolle, professionele zorg bij jou thuis, volledig afgestemd op jouw islamitische waarden en 24/7 bereikbaar, ook in het weekend."
      cardsTitle={
        <>
          Onze werkgebieden in <span className="accent">Gorinchem</span> en
          omgeving
        </>
      }
      cardsIntro="Wij komen bij je thuis in Gorinchem en de omliggende plaatsen."
      cards={[
        {
          count: "3+ plaatsen",
          title: "Gorinchem & omgeving",
          text: "Actief in Gorinchem, Hardinxveld, Arkel en omliggende plaatsen.",
          places: ["Gorinchem", "Hardinxveld", "Arkel"],
        },
      ]}
      sectionsTitle={
        <>
          Alles over islamitische <span className="accent">kraamzorg</span> in Gorinchem
        </>
      }
      sections={[
        {
          title: "Islamitische kraamzorg in Gorinchem: zorg met hart voor geloof en gezin",
          paragraphs: [
            "Bent u zwanger en zoekt u islamitische kraamzorg in Gorinchem? Bij De Islamitische Kraamzorg krijgt u in de eerste week na de bevalling liefdevolle, professionele ondersteuning thuis. Onze kraamverzorgenden zijn gediplomeerd, ervaren en werken met aandacht voor islamitische waarden, uw gezinssituatie en persoonlijke wensen.",
            "In Gorinchem en omgeving begeleiden wij moeders, baby's en gezinnen met rust, ruimte en praktische hulp. Wij weten hoe belangrijk het is dat uw kraamverzorgende begrijpt wat voor u belangrijk is: van gebedsmomenten tot voeding, en van tradities rond de geboorte tot de dagelijkse verzorging van uw baby.",
          ],
        },
        {
          title: "Wat betekent islamitische kraamzorg in Gorinchem concreet?",
          paragraphs: [
            "Tijdens uw kraamweek komt een vaste kraamverzorgende dagelijks bij u thuis. Samen werken we aan herstel, bonding en een goede start voor uw baby. Onze zorg is praktisch, persoonlijk en met kennis van islamitische gebruiken.",
            "Denk hierbij aan:",
          ],
          bullets: [
            "Begeleiding van moeder en partner, met respect voor uw geloof en cultuur",
            "Ondersteuning bij borstvoeding of flesvoeding, afgestemd op uw keuze en situatie",
            "Praktische hulp in huis: lichte huishoudelijke taken, maaltijden, wasjes en verzorging van de baby",
            "Voorlichting over de verzorging van de pasgeborene, signalen, slaapritme en hechting",
            "Aandacht voor islamitische tradities, zoals de adhan bij de geboorte en bismillah bij het oppakken",
            "Ruimte voor gebed en rust, zodat u zich kunt richten op herstel en bonding",
          ],
          paragraphsAfter: [
            "Wij werken volgens de landelijke richtlijnen voor kraamzorg, maar vullen dit aan met begrip voor uw religieuze en culturele achtergrond.",
          ],
        },
        {
          title: "Voor wie is islamitische kraamzorg in Gorinchem bedoeld?",
          paragraphs: [
            "Onze kraamzorg is er voor gezinnen in Gorinchem die waarde hechten aan:",
          ],
          bullets: [
            "Een vrouwelijke kraamverzorgende",
            "Zorg die rekening houdt met islamitische voorschriften en gewoonten",
            "Een persoonlijke, rustige aanpak in uw eigen huis",
            "Duidelijke communicatie in een vertrouwde sfeer",
          ],
          paragraphsAfter: [
            "Of u nu voor het eerst ouder wordt, al kinderen heeft, of extra ondersteuning nodig heeft: wij denken graag met u mee.",
          ],
        },
        {
          title: "Waarom kiezen gezinnen in Gorinchem voor De Islamitische Kraamzorg?",
          bullets: [
            "Gediplomeerde kraamverzorgenden met ervaring in islamitische gezinnen",
            "Vaste verzorgende gedurende uw kraamweek, waar mogelijk",
            "Flexibele intakes: thuis of telefonisch, op een moment dat u uitkomt",
            "Samenwerking met verloskundigen en andere zorgverleners in de regio Gorinchem",
            "Aandacht voor het hele gezin, inclusief broertjes en zusjes",
          ],
          paragraphsAfter: [
            "Wij geloven dat een goede start in het kraambed bijdraagt aan een zelfverzekerde start als ouder. Daarom luisteren we goed naar uw wensen en stemmen we de zorg daarop af.",
          ],
        },
        {
          title: "Hoe meldt u zich aan voor islamitische kraamzorg in Gorinchem?",
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
      flexTitle="Komt u buiten Gorinchem?"
      ctaTitle="Woon je in Gorinchem, Hardinxveld of Arkel?"
      ctaText="Maak vrijblijvend kennis. Wij komen bij jou thuis voor een persoonlijk gesprek."
    />
  );
}
