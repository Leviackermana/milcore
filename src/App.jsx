import React from "react";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import { motion, AnimatePresence } from "framer-motion";
import bg from "./assets/Nova slika.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Hausbetreuung from "./Hausbetreuung";
import Gartenpflege from "./Gartenpflege";
import Winterdienst from "./Winterdienst";
import Entrumpelung from "./Entrumpelung";

const resources = {
  sk: {
    translation: {
      hero_title: "Profesionálne služby údržby budov",
      hero_sub: "Správa Budov, Údržba Záhrady, Zimná Údržba a Vypratávanie.",
      cta_more: "Zistiť viac",
      contact: "Kontaktujte nás",
      services: "Naše služby",
      srv_cleaning: "Správa Budov",
      srv_garden: "Údržba Záhrady",
      srv_winter: "Zimná údržba",
      srv_disposal: "Vypratávanie",
      contact_title: "Kontakt",
      contact_send: "Odoslať",
      form_name: "Meno",
      form_email: "Email",
      form_message: "Správa",
      form_name_required: "Prosím, zadajte meno.",
      form_email_required: "Prosím, zadajte email.",
      form_email_invalid: "Prosím, zadajte platný email.",
      form_message_required: "Prosím, zadajte správu.",
      form_success:
        "Váš emailový klient sa otvoril s pripravenou správou.",
      nav_home: "Úvod",
      nav_services: "Služby",
      nav_contact: "Kontakt",
      menu: "Menu",
      close: "Zavrieť",
      about_title: "Spoľahlivý partner pre vaše objekty",
      about_text:
        "Zabezpečujeme komplexnú starostlivosť o budovy, exteriéry a okolie s dôrazom na kvalitu, rýchlosť a profesionálny prístup.",

      haus_title: "MilCore s.r.o – Spoľahlivý partner pre správu budov",
      haus_intro1:
        "Hľadáte spoľahlivú a profesionálnu starostlivosť o vašu nehnuteľnosť? MilCore s.r.o ponúka komplexné služby správy budov s najvyššou zodpovednosťou, kvalitou a flexibilitou.",
      haus_intro2:
        "Náš tím sa stará o to, aby vaša budova vždy zanechala bezchybný prvý dojem – či už ide o pravidelné čistenie alebo technickú údržbu. Vieme, aké dôležité je, aby všetko prebiehalo hladko, a preto pracujeme presne, rýchlo a efektívne.",
      haus_services_title: "Naše služby zahŕňajú:",
      haus_service1: "Pravidelné čistenie spoločných priestorov a schodísk",
      haus_service2: "Drobné opravy a technická údržba",
      haus_service3: "Kontrola a dohľad nad nehnuteľnosťou",
      haus_why_title: "Prečo zvoliť MilCore s.r.o.?",
      haus_why1: "Spoľahlivý a kvalifikovaný tím",
      haus_why2: "Individuálny prístup ku každému zákazníkovi",
      haus_why3: "Rýchla reakcia a dostupnosť",
      haus_why4: "Viditeľná kvalita",
      haus_conclusion:
        "Zverte starostlivosť o vašu nehnuteľnosť profesionálom a užívajte si čisté a bezpečné prostredie.",
      haus_final:
        "MilCore s.r.o – Staráme sa o vašu nehnuteľnosť, ako keby bola naša vlastná.",

      garden_title:
        "Starostlivosť o záhradu – Perfektne upravená záhrada s MilCore s.r.o",
      garden_intro1:
        "Krásna záhrada je viac než len vonkajší priestor – je to vaša osobná oáza pokoja a oddychu. So spoločnosťou MilCore s.r.o máte spoľahlivého partnera, ktorý sa o vašu záhradu postará profesionálne počas celého roka.",
      garden_intro2:
        "Náš skúsený tím vám ponúka komplexné služby v oblasti starostlivosti o záhradu, prispôsobené vašim požiadavkám a potrebám vašich zelených plôch.",
      garden_services_title: "Naše služby zahŕňajú:",
      garden_service1: "Pravidelné kosenie a starostlivosť o trávnik",
      garden_service2: "Strihanie a tvarovanie živých plotov",
      garden_service3: "Starostlivosť o kvety a rastliny",
      garden_service4: "Odstraňovanie buriny a úprava pôdy",
      garden_service5: "Zber a odvoz lístia, sezónne práce",
      garden_service6: "Príprava záhrady na jar a zimu",
      garden_why_title: "Prečo MilCore s.r.o.?",
      garden_why1: "Profesionálny a skúsený tím",
      garden_why2: "Flexibilné termíny a individuálny prístup",
      garden_why3: "Kvalitné vybavenie a precízna práca",
      garden_why4: "Férové ceny a transparentné ponuky",
      garden_conclusion:
        "Pracujeme efektívne, spoľahlivo a s dôrazom na detail. Či už ide o súkromnú záhradu alebo firemný areál – zabezpečíme, aby vaše zelené plochy vždy vyzerali upravene a reprezentatívne.",
      garden_final:
        "Spoľahnite sa na kvalitu a skúsenosti – zverte starostlivosť o svoju záhradu profesionálom z MilCore s.r.o.",
      garden_cta:
        "👉 Kontaktujte nás ešte dnes a doprajte svojej záhrade nový vzhľad!",

      winter_title:
        "Zimná údržba – Bezpečnosť a spoľahlivosť s MilCore s.r.o",
      winter_intro1:
        "Zima prináša sneh, ľad a náročné podmienky, ktoré môžu ohroziť bezpečnosť vašich plôch. So spoločnosťou MilCore s.r.o sa nemusíte obávať – zabezpečíme spoľahlivú a včasnú zimnú údržbu.",
      winter_intro2:
        "Náš tím je pripravený rýchlo a efektívne reagovať bez ohľadu na počasie, aby boli vaše priestory vždy bezpečné a priechodné.",
      winter_services_title: "Naše služby zahŕňajú:",
      winter_service1:
        "Odstraňovanie snehu z chodníkov, príjazdových ciest a parkovísk",
      winter_service2: "Posyp soľou a protišmykovým materiálom",
      winter_service3: "Odstraňovanie ľadu a prevencia pošmyknutia",
      winter_service4: "Pravidelné kontroly a zásahy počas sneženia",
      winter_service5: "Údržba súkromných aj komerčných objektov",
      winter_why_title: "Prečo MilCore s.r.o.?",
      winter_why1: "Rýchla reakcia a dostupnosť 24/7",
      winter_why2: "Spoľahlivý a skúsený tím",
      winter_why3: "Profesionálne vybavenie pre všetky podmienky",
      winter_why4: "Flexibilné zmluvy a férové ceny",
      winter_conclusion:
        "Pracujeme zodpovedne a organizovane, s neustálym sledovaním poveternostných podmienok, aby sme zasiahli včas.",
      winter_final:
        "Zverte zimnú údržbu profesionálom a zabezpečte bezpečnosť pre seba, zamestnancov aj klientov s MilCore s.r.o.",
      winter_cta:
        "👉 Kontaktujte nás ešte dnes a pripravte sa na zimu bez stresu!",

      disposal_title:
        "Vypratávanie – Rýchlo, čisto a spoľahlivo s MilCore s.r.o",
      disposal_intro1:
        "Potrebujete vypratať byt, dom, kanceláriu alebo pivnicu? MilCore s.r.o vám ponúka profesionálne vypratávacie služby, vďaka ktorým sa rýchlo a bez starostí zbavíte nepotrebných vecí.",
      disposal_intro2:
        "Či už ide o starý nábytok, spotrebiče, odpad po rekonštrukcii alebo kompletné vypratanie priestorov – náš tím pracuje efektívne, diskrétne a s dôrazom na čistotu a poriadok.",
      disposal_services_title: "Naše služby zahŕňajú:",
      disposal_service1:
        "Vypratávanie bytov, domov, pivníc a kancelárií",
      disposal_service2:
        "Odvoz starého nábytku a elektrospotrebičov",
      disposal_service3:
        "Likvidácia objemného a zmiešaného odpadu",
      disposal_service4:
        "Vypratávanie po sťahovaní, rekonštrukcii alebo dedičskom konaní",
      disposal_service5:
        "Ekologická likvidácia a triedenie odpadu",
      disposal_why_title: "Prečo MilCore s.r.o.?",
      disposal_why1: "Rýchle termíny a spoľahlivé vykonanie",
      disposal_why2: "Skúsený tím a profesionálny prístup",
      disposal_why3: "Čistá a efektívna práca",
      disposal_why4: "Transparentné ceny bez skrytých poplatkov",
      disposal_conclusion:
        "Postaráme sa o kompletné vypratanie priestoru od začiatku až do konca, aby ste sa vy nemuseli o nič starať.",
      disposal_final:
        "Osloboďte sa od zbytočností jednoducho a bez stresu – s MilCore s.r.o.",
      disposal_cta:
        "👉 Kontaktujte nás ešte dnes a my sa postaráme o rýchle a profesionálne vypratanie!",

      back_button: "Späť na úvod",
    },
  },

  de: {
    translation: {
      hero_title: "Professionelle Gebäudedienstleistungen",
      hero_sub:
        "Hausbetreuung, Gartenpflege, Winterdienst und Entrümpelung.",
      cta_more: "Mehr erfahren",
      contact: "Kontaktieren Sie uns",
      services: "Unsere Dienstleistungen",
      srv_cleaning: "Hausbetreuung",
      srv_garden: "Gartenpflege",
      srv_winter: "Winterdienst",
      srv_disposal: "Entrümpelung",
      contact_title: "Kontakt",
      contact_send: "Senden",
      form_name: "Name",
      form_email: "E-Mail",
      form_message: "Nachricht",
      form_name_required: "Bitte geben Sie Ihren Namen ein.",
      form_email_required: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
      form_email_invalid:
        "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      form_message_required: "Bitte geben Sie Ihre Nachricht ein.",
      form_success:
        "Ihr E-Mail-Programm wurde mit einer vorbereiteten Nachricht geöffnet.",
      nav_home: "Start",
      nav_services: "Leistungen",
      nav_contact: "Kontakt",
      menu: "Menü",
      close: "Schließen",
      about_title: "Zuverlässiger Partner für Ihre Objekte",
      about_text:
        "Wir bieten umfassende Betreuung von Gebäuden, Außenflächen und Anlagen mit Fokus auf Qualität, Schnelligkeit und Professionalität.",

      haus_title:
        "MilCore s.r.o – Ihr zuverlässiger Partner für Hausbetreuung",
      haus_intro1:
        "Suchen Sie eine zuverlässige und professionelle Betreuung Ihrer Immobilie? MilCore s.r.o bietet umfassende Hausbetreuungsleistungen mit höchster Verantwortung, Qualität und Flexibilität.",
      haus_intro2:
        "Unser Team sorgt dafür, dass Ihr Gebäude stets einen einwandfreien ersten Eindruck hinterlässt – egal, ob es sich um regelmäßige Reinigung oder technische Betreuung handelt. Wir wissen, wie wichtig ein reibungsloser Ablauf ist, deshalb arbeiten wir präzise, schnell und effizient.",
      haus_services_title: "Unsere Leistungen umfassen:",
      haus_service1:
        "Regelmäßige Reinigung von Stiegenhäusern und Gemeinschaftsräumen",
      haus_service2: "Kleinreparaturen und technische Wartung",
      haus_service3: "Kontrolle und Überwachung der Immobilie",
      haus_why_title: "Warum MilCore s.r.o. wählen?",
      haus_why1: "Zuverlässiges und kompetentes Team",
      haus_why2: "Individueller Ansatz für jeden Kunden",
      haus_why3: "Schnelle Reaktionszeit und Verfügbarkeit",
      haus_why4: "Sichtbare Qualität",
      haus_conclusion:
        "Überlassen Sie die Betreuung Ihrer Immobilie den Profis und genießen Sie eine saubere und sichere Umgebung.",
      haus_final:
        "MilCore s.r.o – Wir kümmern uns um Ihre Immobilie, als wäre es unsere eigene.",

      garden_title:
        "Gartenpflege – Perfekt gepflegter Garten mit MilCore s.r.o",
      garden_intro1:
        "Ein schöner Garten ist mehr als nur ein Außenbereich – er ist Ihre persönliche Oase der Entspannung. Mit MilCore s.r.o haben Sie einen zuverlässigen Partner an Ihrer Seite, der Ihren Garten das ganze Jahr über professionell pflegt und verschönert.",
      garden_intro2:
        "Unser erfahrenes Team bietet Ihnen umfassende Leistungen im Bereich Gartenpflege – individuell abgestimmt auf Ihre Wünsche und die Bedürfnisse Ihrer Grünflächen.",
      garden_services_title: "Unsere Leistungen im Überblick:",
      garden_service1: "Regelmäßiges Rasenmähen und Rasenpflege",
      garden_service2: "Heckenschnitt und Formschnitt",
      garden_service3: "Pflege von Blumenbeeten und Pflanzen",
      garden_service4: "Unkrautentfernung und Bodenpflege",
      garden_service5: "Laubentsorgung und saisonale Arbeiten",
      garden_service6:
        "Vorbereitung Ihres Gartens für Frühling und Winter",
      garden_why_title: "Warum MilCore s.r.o.?",
      garden_why1: "Professionelle und erfahrene Mitarbeiter",
      garden_why2: "Flexible Termine und individuelle Betreuung",
      garden_why3: "Hochwertige Ausrüstung und saubere Arbeit",
      garden_why4: "Faire Preise und transparente Angebote",
      garden_conclusion:
        "Wir arbeiten effizient, zuverlässig und mit viel Liebe zum Detail. Egal ob privater Garten oder gewerbliche Anlage – wir sorgen dafür, dass Ihre Grünflächen immer gepflegt und einladend aussehen.",
      garden_final:
        "Vertrauen Sie auf Qualität und Erfahrung – überlassen Sie Ihre Gartenpflege den Profis von MilCore s.r.o.",
      garden_cta:
        "👉 Kontaktieren Sie uns noch heute und lassen Sie Ihren Garten in neuem Glanz erstrahlen!",

      winter_title:
        "Winterdienst – Sicherheit und Zuverlässigkeit mit MilCore s.r.o",
      winter_intro1:
        "Der Winter bringt Schnee, Eis und anspruchsvolle Bedingungen mit sich, die die Sicherheit Ihrer Flächen gefährden können. Mit MilCore s.r.o müssen Sie sich keine Sorgen machen – wir sorgen für einen zuverlässigen und rechtzeitigen Winterdienst.",
      winter_intro2:
        "Unser Team ist bereit, schnell und effizient zu reagieren – unabhängig vom Wetter –, damit Ihre Flächen jederzeit sicher und begehbar bleiben.",
      winter_services_title: "Unsere Leistungen im Überblick:",
      winter_service1:
        "Schneeräumung von Gehwegen, Einfahrten und Parkplätzen",
      winter_service2:
        "Streuen mit Salz und abstumpfendem Material",
      winter_service3: "Eisbeseitigung und Rutschprävention",
      winter_service4:
        "Regelmäßige Kontrollen und Einsätze während des Schneefalls",
      winter_service5:
        "Betreuung von privaten und gewerblichen Objekten",
      winter_why_title: "Warum MilCore s.r.o.?",
      winter_why1: "Schnelle Reaktion und Erreichbarkeit 24/7",
      winter_why2: "Zuverlässiges und erfahrenes Team",
      winter_why3:
        "Professionelle Ausrüstung für alle Bedingungen",
      winter_why4: "Flexible Verträge und faire Preise",
      winter_conclusion:
        "Wir arbeiten verantwortungsbewusst und organisiert, mit laufender Beobachtung der Wetterbedingungen, damit wir rechtzeitig eingreifen können.",
      winter_final:
        "Vertrauen Sie den Winterdienst den Profis an und sorgen Sie für Sicherheit für sich, Ihre Mitarbeiter und Kunden mit MilCore s.r.o.",
      winter_cta:
        "👉 Kontaktieren Sie uns noch heute und bereiten Sie sich stressfrei auf den Winter vor!",

      disposal_title:
        "Entrümpelung – Schnell, sauber und zuverlässig mit MilCore s.r.o",
      disposal_intro1:
        "Müssen Sie eine Wohnung, ein Haus, ein Büro oder einen Keller räumen? MilCore s.r.o bietet Ihnen professionelle Entrümpelungsdienste, damit Sie unnötige Dinge schnell und ohne Aufwand loswerden.",
      disposal_intro2:
        "Ob alte Möbel, Elektrogeräte, Abfälle nach einer Renovierung oder eine komplette Räumung von Räumen – unser Team arbeitet effizient, diskret und mit besonderem Augenmerk auf Sauberkeit und Ordnung.",
      disposal_services_title: "Unsere Leistungen im Überblick:",
      disposal_service1:
        "Entrümpelung von Wohnungen, Häusern, Kellern und Büros",
      disposal_service2:
        "Abtransport von alten Möbeln und Elektrogeräten",
      disposal_service3:
        "Entsorgung von Sperrmüll und gemischtem Abfall",
      disposal_service4:
        "Entrümpelung nach Umzug, Renovierung oder Nachlassfällen",
      disposal_service5:
        "Umweltgerechte Entsorgung und Mülltrennung",
      disposal_why_title: "Warum MilCore s.r.o.?",
      disposal_why1:
        "Schnelle Termine und zuverlässige Durchführung",
      disposal_why2:
        "Erfahrenes Team und professioneller Ansatz",
      disposal_why3: "Saubere und effiziente Arbeit",
      disposal_why4:
        "Transparente Preise ohne versteckte Kosten",
      disposal_conclusion:
        "Wir kümmern uns von Anfang bis Ende um die komplette Räumung, damit Sie sich um nichts kümmern müssen.",
      disposal_final:
        "Befreien Sie sich einfach und stressfrei von Überflüssigem – mit MilCore s.r.o.",
      disposal_cta:
        "👉 Kontaktieren Sie uns noch heute und wir kümmern uns um eine schnelle und professionelle Entrümpelung!",

      back_button: "Zurück zur Startseite",
    },
  },

  en: {
    translation: {
      hero_title: "Professional Building Maintenance Services",
      hero_sub:
        "Property maintenance, Garden Maintenance, Winter Service and Decluttering.",
      cta_more: "Learn more",
      contact: "Contact Us",
      services: "Our Services",
      srv_cleaning: "Property maintenance",
      srv_garden: "Garden Maintenance",
      srv_winter: "Winter Service",
      srv_disposal: "Decluttering",
      contact_title: "Contact",
      contact_send: "Send",
      form_name: "Name",
      form_email: "Email",
      form_message: "Message",
      form_name_required: "Please enter your name.",
      form_email_required: "Please enter your email.",
      form_email_invalid: "Please enter a valid email address.",
      form_message_required: "Please enter your message.",
      form_success:
        "Your email client has been opened with a prepared message.",
      nav_home: "Home",
      nav_services: "Services",
      nav_contact: "Contact",
      menu: "Menu",
      close: "Close",
      about_title: "A reliable partner for your properties",
      about_text:
        "We provide complete care for buildings, outdoor areas and surroundings with a focus on quality, speed and professional service.",

      haus_title:
        "MilCore s.r.o – Your reliable partner for property maintenance",
      haus_intro1:
        "Looking for reliable and professional building management? MilCore s.r.o provides comprehensive property maintenance services with responsibility, quality, and flexibility.",
      haus_intro2:
        "Our team ensures your property always leaves a perfect impression—whether it’s regular cleaning or technical maintenance. We understand how important smooth operation is, so we work precisely, quickly, and efficiently.",
      haus_services_title: "Our services include:",
      haus_service1: "Regular cleaning of stairways and common areas",
      haus_service2: "Minor repairs and technical maintenance",
      haus_service3: "Control and inspection of the property",
      haus_why_title: "Why choose MilCore s.r.o.?",
      haus_why1: "Reliable and skilled team",
      haus_why2: "Individual approach to every client",
      haus_why3: "Quick response and availability",
      haus_why4: "Visible quality",
      haus_conclusion:
        "Trust your property to professionals and enjoy a clean and safe environment.",
      haus_final:
        "MilCore s.r.o – We care for your property as if it were our own.",

      garden_title:
        "Garden Maintenance – Perfectly maintained garden with MilCore s.r.o",
      garden_intro1:
        "A beautiful garden is more than just an outdoor space – it is your personal oasis of peace and relaxation. With MilCore s.r.o, you have a reliable partner who will take professional care of your garden all year round.",
      garden_intro2:
        "Our experienced team offers comprehensive garden maintenance services tailored to your wishes and the needs of your green areas.",
      garden_services_title: "Our services include:",
      garden_service1: "Regular lawn mowing and lawn care",
      garden_service2: "Hedge trimming and shaping",
      garden_service3: "Care of flower beds and plants",
      garden_service4: "Weed removal and soil care",
      garden_service5: "Leaf removal and seasonal work",
      garden_service6:
        "Preparing your garden for spring and winter",
      garden_why_title: "Why MilCore s.r.o.?",
      garden_why1: "Professional and experienced staff",
      garden_why2:
        "Flexible appointments and individual support",
      garden_why3:
        "High-quality equipment and clean work",
      garden_why4: "Fair prices and transparent offers",
      garden_conclusion:
        "We work efficiently, reliably, and with great attention to detail. Whether it is a private garden or a commercial property, we make sure your green areas always look neat and inviting.",
      garden_final:
        "Trust in quality and experience – leave your garden maintenance to the professionals at MilCore s.r.o.",
      garden_cta:
        "👉 Contact us today and let your garden shine in new splendor!",

      winter_title:
        "Winter Service – Safety and reliability with MilCore s.r.o",
      winter_intro1:
        "Winter brings snow, ice, and demanding conditions that can endanger the safety of your areas. With MilCore s.r.o, you do not have to worry – we provide reliable and timely winter service.",
      winter_intro2:
        "Our team is ready to respond quickly and efficiently regardless of the weather, so your areas remain safe and accessible at all times.",
      winter_services_title: "Our services include:",
      winter_service1:
        "Snow removal from sidewalks, driveways, and parking lots",
      winter_service2:
        "Spreading salt and anti-slip material",
      winter_service3: "Ice removal and slip prevention",
      winter_service4:
        "Regular inspections and interventions during snowfall",
      winter_service5:
        "Maintenance of private and commercial properties",
      winter_why_title: "Why MilCore s.r.o.?",
      winter_why1: "Fast response and 24/7 availability",
      winter_why2: "Reliable and experienced team",
      winter_why3:
        "Professional equipment for all conditions",
      winter_why4: "Flexible contracts and fair prices",
      winter_conclusion:
        "We work responsibly and in an organized way, with constant monitoring of weather conditions so that we can act in time.",
      winter_final:
        "Leave winter maintenance to professionals and ensure safety for yourself, your employees, and your clients with MilCore s.r.o.",
      winter_cta:
        "👉 Contact us today and get ready for winter without stress!",

      disposal_title:
        "Decluttering – Fast, clean and reliable with MilCore s.r.o",
      disposal_intro1:
        "Do you need to clear out an apartment, house, office, or basement? MilCore s.r.o offers professional decluttering services so you can get rid of unnecessary items quickly and without hassle.",
      disposal_intro2:
        "Whether it is old furniture, appliances, renovation waste, or a complete property clearance, our team works efficiently, discreetly, and with a strong focus on cleanliness and order.",
      disposal_services_title: "Our services include:",
      disposal_service1:
        "Clearing apartments, houses, basements, and offices",
      disposal_service2:
        "Removal of old furniture and electrical appliances",
      disposal_service3:
        "Disposal of bulky and mixed waste",
      disposal_service4:
        "Clearance after moving, renovation, or inheritance cases",
      disposal_service5:
        "Eco-friendly disposal and waste sorting",
      disposal_why_title: "Why MilCore s.r.o.?",
      disposal_why1:
        "Fast appointments and reliable execution",
      disposal_why2:
        "Experienced team and professional approach",
      disposal_why3: "Clean and efficient work",
      disposal_why4:
        "Transparent prices with no hidden costs",
      disposal_conclusion:
        "We take care of the complete clearance from start to finish so you do not have to worry about anything.",
      disposal_final:
        "Free yourself from unnecessary clutter easily and without stress – with MilCore s.r.o.",
      disposal_cta:
        "👉 Contact us today and we will take care of a fast and professional clearance!",

      back_button: "Back to Home",
    },
  },
};

const savedLanguage =
  typeof window !== "undefined"
    ? localStorage.getItem("milcore_language")
    : null;

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage || "sk",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
}

function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth <= 900 : false
  );
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const handleResize = () => {
      const mobile = window.innerWidth <= 900;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
      }
    };

    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = menuOpen && isMobile ? "hidden" : "";
    }

    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [menuOpen, isMobile]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("milcore_language", lang);
    document.documentElement.lang = lang;
  };

  const closeMenu = () => setMenuOpen(false);

  const scrollOrGo = (targetId) => {
    closeMenu();

    if (location.pathname !== "/") {
      window.location.href = `/#${targetId}`;
      return;
    }

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const serviceLinks = [
    { to: "/hausbetreuung", label: t("srv_cleaning") },
    { to: "/gartenpflege", label: t("srv_garden") },
    { to: "/winterdienst", label: t("srv_winter") },
    { to: "/entrumpelung", label: t("srv_disposal") },
  ];

  return (
    <>
      <header
        style={{
          ...styles.nav,
          padding: scrolled ? "8px 20px" : "12px 24px",
          background: scrolled ? "rgba(10,10,10,0.82)" : "rgba(0,0,0,0.18)",
          backdropFilter: "blur(14px)",
          boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.35)" : "none",
        }}
      >
        <div style={styles.logoWrap}>
          <Link to="/" aria-label="MilCore home" style={styles.logoLink}>
            <img
              src="/logo_clean.png"
              alt="MilCore logo"
              style={styles.logo}
            />
          </Link>
        </div>

        {!isMobile ? (
          <div style={styles.desktopRight}>
            <nav style={styles.desktopNav} aria-label="Primary navigation">
              <button
                type="button"
                style={styles.navTextBtn}
                onClick={() => scrollOrGo("services")}
              >
                {t("nav_services")}
              </button>
              <button
                type="button"
                style={styles.navTextBtn}
                onClick={() => scrollOrGo("contact")}
              >
                {t("nav_contact")}
              </button>
            </nav>

            <div style={styles.langs}>
              {["sk", "de", "en"].map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => handleLanguageChange(lang)}
                  style={{
                    ...styles.langBtn,
                    background:
                      i18n.language === lang
                        ? "linear-gradient(135deg, #ff6a00, #ff8f3d)"
                        : "rgba(255,255,255,0.18)",
                    boxShadow:
                      i18n.language === lang
                        ? "0 0 18px rgba(255,106,0,0.35)"
                        : "0 0 6px rgba(0,0,0,0.3)",
                  }}
                  aria-pressed={i18n.language === lang}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <button
            type="button"
            aria-label={menuOpen ? t("close") : t("menu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            style={styles.menuButton}
          >
            <span
              style={{
                ...styles.menuBar,
                transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                ...styles.menuBar,
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                ...styles.menuBar,
                transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        )}
      </header>

      <AnimatePresence>
        {isMobile && menuOpen && (
          <>
            <motion.div
              style={styles.mobileOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.aside
              id="mobile-menu"
              style={styles.mobileMenu}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <div style={styles.mobileMenuTop}>
                <span style={styles.mobileMenuTitle}>MilCore</span>
                <button
                  type="button"
                  onClick={closeMenu}
                  style={styles.mobileCloseBtn}
                  aria-label={t("close")}
                >
                  ×
                </button>
              </div>

              <div style={styles.mobileMenuSection}>
                <Link to="/" style={styles.mobileLink} onClick={closeMenu}>
                  {t("nav_home")}
                </Link>

                <button
                  type="button"
                  style={styles.mobileLinkBtn}
                  onClick={() => scrollOrGo("services")}
                >
                  {t("nav_services")}
                </button>

                <button
                  type="button"
                  style={styles.mobileLinkBtn}
                  onClick={() => scrollOrGo("contact")}
                >
                  {t("nav_contact")}
                </button>
              </div>

              <div style={styles.mobileMenuSection}>
                {serviceLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    style={styles.mobileSubLink}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div style={styles.mobileLangWrap}>
                {["sk", "de", "en"].map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => {
                      handleLanguageChange(lang);
                      closeMenu();
                    }}
                    style={{
                      ...styles.mobileLangBtn,
                      background:
                        i18n.language === lang
                          ? "linear-gradient(135deg, #ff6a00, #ff8f3d)"
                          : "rgba(255,255,255,0.08)",
                      border:
                        i18n.language === lang
                          ? "1px solid rgba(255,143,61,0.35)"
                          : "1px solid rgba(255,255,255,0.08)",
                    }}
                    aria-pressed={i18n.language === lang}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const { t } = useTranslation();

  return (
    <section style={styles.hero}>
      <div style={styles.heroOverlay} />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.heroInner}
      >
        <div style={styles.heroBadge}>MilCore s.r.o</div>

        <h1 style={styles.title}>{t("hero_title")}</h1>
        <p style={styles.subtitle}>{t("hero_sub")}</p>

        <div style={styles.buttons}>
          <a href="#contact" style={styles.primaryBtn}>
            {t("contact")}
          </a>

          <a href="#services" style={styles.secondaryBtn}>
            {t("cta_more")}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Services() {
  const { t } = useTranslation();

  const icons = [
    (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21h18" stroke="#ff7a1f" strokeWidth="2" />
        <path d="M8 17h8l1-10H7l1 10z" stroke="#ff7a1f" strokeWidth="2" />
        <path d="M10 7V3h4v4" stroke="#ff7a1f" strokeWidth="2" />
      </svg>
    ),
    (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 22V12C12 6 8 3 4 2c0 4 2 10 8 10"
          stroke="#ff7a1f"
          strokeWidth="2"
        />
        <path
          d="M12 22V12c0-6 4-9 8-10 0 4-2 10-8 10"
          stroke="#ff7a1f"
          strokeWidth="2"
        />
      </svg>
    ),
    (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2v20" stroke="#ff7a1f" strokeWidth="2" />
        <path d="M4 7l16 10M20 7L4 17" stroke="#ff7a1f" strokeWidth="2" />
      </svg>
    ),
    (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 6h18" stroke="#ff7a1f" strokeWidth="2" />
        <path
          d="M8 6v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6"
          stroke="#ff7a1f"
          strokeWidth="2"
        />
        <path d="M10 6V4h4v2" stroke="#ff7a1f" strokeWidth="2" />
      </svg>
    ),
  ];

  const items = [
    t("srv_cleaning"),
    t("srv_garden"),
    t("srv_winter"),
    t("srv_disposal"),
  ];

  const paths = [
    "/hausbetreuung",
    "/gartenpflege",
    "/winterdienst",
    "/entrumpelung",
  ];

  return (
    <section id="services" style={styles.sectionDark}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div style={styles.container}>
          <h2 style={styles.sectionTitleCenter}>{t("services")}</h2>

          <div style={styles.grid}>
            {items.map((item, index) => (
              <Link
                key={paths[index]}
                to={paths[index]}
                style={styles.cardLink}
                aria-label={item}
              >
                <motion.div
                  style={styles.card}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    boxShadow: "0 0 30px rgba(255,106,0,0.3)",
                    border: "1px solid rgba(255,143,61,0.35)",
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <div style={styles.cardIconWrap}>{icons[index]}</div>
                  <h3 style={styles.cardTitle}>{item}</h3>
                  <p style={styles.cardText}>MilCore s.r.o.</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Contact() {
  const { t } = useTranslation();

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = React.useState("");
  const [errors, setErrors] = React.useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = t("form_name_required");
    }

    if (!form.email.trim()) {
      newErrors.email = t("form_email_required");
    } else if (!validateEmail(form.email)) {
      newErrors.email = t("form_email_invalid");
    }

    if (!form.message.trim()) {
      newErrors.message = t("form_message_required");
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("");
      return;
    }

    const subject = encodeURIComponent(`Website contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:office@milcore.sk?subject=${subject}&body=${body}`;
    setStatus(t("form_success"));

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <section id="contact" style={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div style={styles.container}>
          <h2 style={styles.sectionTitleCenter}>{t("contact_title")}</h2>

          <div style={styles.contactCard}>
            <form style={styles.form} onSubmit={handleSubmit} noValidate>
              <div style={styles.fieldWrap}>
                <label htmlFor="name" style={styles.label}>
                  {t("form_name")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("form_name")}
                  style={{
                    ...styles.input,
                    ...(errors.name ? styles.inputError : {}),
                  }}
                  autoComplete="name"
                  required
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span id="name-error" style={styles.errorText}>
                    {errors.name}
                  </span>
                )}
              </div>

              <div style={styles.fieldWrap}>
                <label htmlFor="email" style={styles.label}>
                  {t("form_email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("form_email")}
                  style={{
                    ...styles.input,
                    ...(errors.email ? styles.inputError : {}),
                  }}
                  autoComplete="email"
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span id="email-error" style={styles.errorText}>
                    {errors.email}
                  </span>
                )}
              </div>

              <div style={styles.fieldWrap}>
                <label htmlFor="message" style={styles.label}>
                  {t("form_message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("form_message")}
                  style={{
                    ...styles.input,
                    ...styles.textarea,
                    ...(errors.message ? styles.inputError : {}),
                  }}
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <span id="message-error" style={styles.errorText}>
                    {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" style={styles.primaryBtn}>
                {t("contact_send")}
              </button>

              {status && (
                <p style={styles.successText} role="status" aria-live="polite">
                  {status}
                </p>
              )}
            </form>

            <a href="mailto:office@milcore.sk" style={styles.contactInfoLink}>
              office@milcore.sk
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function App() {
  React.useEffect(() => {
    document.documentElement.lang = i18n.language || "sk";
  }, []);

  return (
    <Router>
      <div style={styles.app}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Contact />
              </>
            }
          />
          <Route path="/hausbetreuung" element={<Hausbetreuung />} />
          <Route path="/gartenpflege" element={<Gartenpflege />} />
          <Route path="/winterdienst" element={<Winterdienst />} />
          <Route path="/entrumpelung" element={<Entrumpelung />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  app: {
    fontFamily: "Inter, Arial, sans-serif",
    background: "#0B0B0D",
    color: "#fff",
    overflowX: "hidden",
    backgroundImage:
      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.02), transparent)",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    background: "rgba(0,0,0,0.15)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
  },

  logoLink: {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
  },

  logo: {
    height: "clamp(46px, 6vw, 70px)",
    filter: "drop-shadow(0 0 10px rgba(255,106,0,0.4))",
    transition: "all 0.35s ease",
    cursor: "pointer",
  },

  desktopRight: {
    display: "flex",
    alignItems: "center",
    gap: 20,
  },

  desktopNav: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },

  navTextBtn: {
    background: "transparent",
    border: "none",
    color: "rgba(255,255,255,0.92)",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    padding: "10px 12px",
    borderRadius: 10,
    transition: "all 0.25s ease",
  },

  langs: {
    display: "flex",
    gap: 10,
    flexShrink: 0,
  },

  langBtn: {
    padding: "8px 16px",
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: 10,
    background: "rgba(255,255,255,0.15)",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.25s ease",
    boxShadow: "0 0 6px rgba(0,0,0,0.3)",
  },

  menuButton: {
    width: 48,
    height: 48,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 12,
    background: "rgba(255,255,255,0.06)",
    cursor: "pointer",
    padding: "0 11px",
  },

  menuBar: {
    display: "block",
    width: "100%",
    height: 2,
    background: "#fff",
    borderRadius: 999,
    transition: "all 0.28s ease",
  },

  mobileOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.55)",
    zIndex: 1200,
  },

  mobileMenu: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    width: "min(88vw, 360px)",
    background: "linear-gradient(180deg, #111114 0%, #0B0B0D 100%)",
    zIndex: 1300,
    boxShadow: "-18px 0 40px rgba(0,0,0,0.35)",
    padding: "22px 20px 28px",
    display: "flex",
    flexDirection: "column",
    gap: 22,
    boxSizing: "border-box",
  },

  mobileMenuTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 4,
  },

  mobileMenuTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: "#fff",
  },

  mobileCloseBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    color: "#fff",
    fontSize: 24,
    lineHeight: 1,
    cursor: "pointer",
  },

  mobileMenuSection: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    paddingBottom: 4,
    borderBottom: "1px solid rgba(255,255,255,0.07)",
  },

  mobileLink: {
    display: "block",
    textDecoration: "none",
    color: "#fff",
    fontWeight: 600,
    fontSize: 18,
    padding: "12px 6px",
    borderRadius: 10,
  },

  mobileLinkBtn: {
    textAlign: "left",
    background: "transparent",
    border: "none",
    color: "#fff",
    fontWeight: 600,
    fontSize: 18,
    padding: "12px 6px",
    borderRadius: 10,
    cursor: "pointer",
  },

  mobileSubLink: {
    display: "block",
    textDecoration: "none",
    color: "rgba(255,255,255,0.86)",
    fontWeight: 500,
    fontSize: 16,
    padding: "10px 6px",
    borderRadius: 10,
  },

  mobileLangWrap: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: "auto",
    paddingTop: 10,
  },

  mobileLangBtn: {
    minWidth: 70,
    padding: "10px 14px",
    borderRadius: 10,
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
  },

  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    paddingTop: 80,
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.68) 0%, rgba(10,10,10,0.96) 100%)",
    backdropFilter: "blur(2px)",
  },

  heroInner: {
    position: "relative",
    zIndex: 2,
    maxWidth: 860,
    padding: "0 20px",
  },

  heroBadge: {
    display: "inline-block",
    padding: "9px 16px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.05)",
    color: "rgba(255,255,255,0.9)",
    fontSize: 13,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    marginBottom: 22,
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
  },

  title: {
    fontSize: "clamp(42px, 6vw, 78px)",
    lineHeight: 1.05,
    marginBottom: 20,
    fontWeight: 700,
    color: "#ffffff",
    textShadow: "0 0 18px rgba(0,0,0,0.8)",
  },

  subtitle: {
    fontSize: 20,
    opacity: 0.92,
    marginBottom: 40,
    maxWidth: 760,
    marginInline: "auto",
  },

  buttons: {
    display: "flex",
    gap: 16,
    justifyContent: "center",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "linear-gradient(135deg, #ff6a00, #ff8f3d)",
    color: "white",
    border: "none",
    borderRadius: 12,
    padding: "14px 24px",
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 28px rgba(255,106,0,0.25)",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryBtn: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 12,
    color: "white",
    padding: "14px 24px",
    fontWeight: 600,
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
    backdropFilter: "blur(8px)",
  },

  section: {
    padding: "100px 20px",
    background: "#0B0B0D",
    scrollMarginTop: 100,
  },

  sectionDark: {
    padding: "100px 20px",
    background: "linear-gradient(180deg, #0B0B0D 0%, #131316 100%)",
    scrollMarginTop: 100,
  },

  container: {
    width: "min(1100px, 100%)",
    margin: "0 auto",
  },

  sectionTitleCenter: {
    fontSize: "clamp(30px, 4vw, 46px)",
    textAlign: "center",
    fontWeight: 600,
    marginBottom: 54,
    color: "#ff7a1f",
    textShadow: "0 0 18px rgba(255,122,31,0.16)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 26,
  },

  cardLink: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  },

  card: {
    padding: 32,
    borderRadius: 20,
    background: `
      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.04), transparent),
      rgba(255,255,255,0.03)
    `,
    border: "1px solid rgba(255,255,255,0.08)",
    textAlign: "center",
    transition: "all 0.35s ease",
    backdropFilter: "blur(6px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    cursor: "pointer",
    height: "100%",
  },

  cardIconWrap: {
    marginBottom: 15,
    filter: "drop-shadow(0 0 10px rgba(255,122,31,0.18))",
  },

  cardTitle: {
    margin: "0 0 10px",
    fontSize: 20,
    fontWeight: 600,
    color: "#fff",
  },

  cardText: {
    color: "rgba(255,255,255,0.6)",
  },

  contactCard: {
    maxWidth: 620,
    margin: "0 auto",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 20,
    padding: "32px",
    backdropFilter: "blur(8px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: 16,
    maxWidth: 520,
    margin: "0 auto",
  },

  fieldWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    width: "100%",
  },

  label: {
    fontSize: 14,
    fontWeight: 600,
    color: "rgba(255,255,255,0.86)",
  },

  input: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "#141416",
    color: "white",
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.25s ease",
  },

  textarea: {
    minHeight: 120,
    resize: "vertical",
  },

  inputError: {
    border: "1px solid rgba(255,106,106,0.75)",
    boxShadow: "0 0 0 3px rgba(255,106,106,0.08)",
  },

  errorText: {
    color: "#ff9a9a",
    fontSize: 14,
  },

  successText: {
    textAlign: "center",
    color: "#8bffb0",
    fontSize: 14,
    margin: 0,
  },

  contactInfoLink: {
    display: "block",
    marginTop: 22,
    opacity: 0.85,
    textAlign: "center",
    fontSize: 16,
    color: "#ffffff",
    textDecoration: "none",
  },
};