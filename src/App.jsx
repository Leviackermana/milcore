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
import "./App.css";

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
      form_success: "Váš emailový klient sa otvoril s pripravenou správou.",
      nav_home: "Úvod",
      nav_services: "Služby",
      nav_contact: "Kontakt",
      menu: "Menu",
      close: "Zavrieť",
      language: "Jazyk",

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
      disposal_service1: "Vypratávanie bytov, domov, pivníc a kancelárií",
      disposal_service2: "Odvoz starého nábytku a elektrospotrebičov",
      disposal_service3: "Likvidácia objemného a zmiešaného odpadu",
      disposal_service4:
        "Vypratávanie po sťahovaní, rekonštrukcii alebo dedičskom konaní",
      disposal_service5: "Ekologická likvidácia a triedenie odpadu",
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
      language: "Sprache",

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
      language: "Language",

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

function useOutsideClick(refs, handler) {
  React.useEffect(() => {
    const listener = (event) => {
      const clickedInside = refs.some(
        (ref) => ref.current && ref.current.contains(event.target)
      );

      if (!clickedInside) {
        handler();
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);
}

function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [scrolled, setScrolled] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth <= 900 : false
  );
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [langOpen, setLangOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");

  const langRef = React.useRef(null);
  const menuRef = React.useRef(null);

  useOutsideClick([langRef], () => setLangOpen(false));
  useOutsideClick([menuRef], () => {
    if (isMobile) setMenuOpen(false);
  });

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      if (location.pathname !== "/") return;

      const sections = ["services", "contact"];
      const scrollPosition = window.scrollY + 140;

      let current = "home";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          current = sectionId;
        }
      }

      setActiveSection(current);
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
  }, [location.pathname]);

  React.useEffect(() => {
    setMenuOpen(false);
    setLangOpen(false);
    setActiveSection(location.pathname === "/" ? "home" : "");
  }, [location.pathname]);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen && isMobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, isMobile]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("milcore_language", lang);
    document.documentElement.lang = lang;
    setLangOpen(false);
  };

  const scrollOrGo = (targetId) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      window.location.href = `/#${targetId}`;
      return;
    }

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "home", label: t("nav_home") },
    { id: "services", label: t("nav_services") },
    { id: "contact", label: t("nav_contact") },
  ];

  const serviceLinks = [
    { to: "/hausbetreuung", label: t("srv_cleaning") },
    { to: "/gartenpflege", label: t("srv_garden") },
    { to: "/winterdienst", label: t("srv_winter") },
    { to: "/entrumpelung", label: t("srv_disposal") },
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__logoLink" aria-label="MilCore home">
            <img
              src="/logo_clean.png"
              alt="MilCore logo"
              className="navbar__logo"
            />
          </Link>

          {!isMobile ? (
            <div className="navbar__right">
              <nav className="navbar__nav" aria-label="Primary navigation">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollOrGo(item.id)}
                    className={`navbar__navBtn ${
                      location.pathname === "/" && activeSection === item.id
                        ? "navbar__navBtn--active"
                        : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="lang" ref={langRef}>
                <button
                  type="button"
                  className="lang__trigger"
                  onClick={() => setLangOpen((prev) => !prev)}
                  aria-expanded={langOpen}
                >
                  {i18n.language.toUpperCase()}
                  <span className={`lang__arrow ${langOpen ? "open" : ""}`}>
                    ▾
                  </span>
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      className="lang__menu"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                    >
                      {["sk", "de", "en"].map((lang) => (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => changeLanguage(lang)}
                          className={`lang__option ${
                            i18n.language === lang ? "lang__option--active" : ""
                          }`}
                        >
                          {lang.toUpperCase()}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ) : (
            <button
              type="button"
              className="menuButton"
              aria-label={menuOpen ? t("close") : t("menu")}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className={`menuButton__bar ${menuOpen ? "open1" : ""}`} />
              <span className={`menuButton__bar ${menuOpen ? "open2" : ""}`} />
              <span className={`menuButton__bar ${menuOpen ? "open3" : ""}`} />
            </button>
          )}
        </div>
      </header>

      <AnimatePresence>
        {isMobile && menuOpen && (
          <>
            <motion.div
              className="mobileOverlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.aside
              ref={menuRef}
              className="mobileMenu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <div className="mobileMenu__top">
                <span className="mobileMenu__title">MilCore</span>
                <button
                  type="button"
                  className="mobileMenu__close"
                  onClick={() => setMenuOpen(false)}
                >
                  ×
                </button>
              </div>

              <div className="mobileMenu__section">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`mobileMenu__link ${
                      location.pathname === "/" && activeSection === item.id
                        ? "mobileMenu__link--active"
                        : ""
                    }`}
                    onClick={() => scrollOrGo(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mobileMenu__section">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="mobileMenu__subLink"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mobileMenu__bottom">
                <p className="mobileMenu__label">{t("language")}</p>
                <div className="mobileMenu__langs">
                  {["sk", "de", "en"].map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        changeLanguage(lang);
                        setMenuOpen(false);
                      }}
                      className={`mobileMenu__langBtn ${
                        i18n.language === lang
                          ? "mobileMenu__langBtn--active"
                          : ""
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
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
    <section
      className="hero"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="hero__overlay" />

      <motion.div
        className="hero__inner"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero__badge">MilCore s.r.o</div>
        <h1 className="hero__title">{t("hero_title")}</h1>
        <p className="hero__subtitle">{t("hero_sub")}</p>

        <div className="hero__buttons">
          <a href="#contact" className="btn btn--primary">
            {t("contact")}
          </a>
          <a href="#services" className="btn btn--secondary">
            {t("cta_more")}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Services() {
  const { t } = useTranslation();

  const items = [
    {
      title: t("srv_cleaning"),
      path: "/hausbetreuung",
      icon: (
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 21h18" stroke="#ff7a1f" strokeWidth="2" />
          <path d="M8 17h8l1-10H7l1 10z" stroke="#ff7a1f" strokeWidth="2" />
          <path d="M10 7V3h4v4" stroke="#ff7a1f" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: t("srv_garden"),
      path: "/gartenpflege",
      icon: (
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
    },
    {
      title: t("srv_winter"),
      path: "/winterdienst",
      icon: (
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2v20" stroke="#ff7a1f" strokeWidth="2" />
          <path d="M4 7l16 10M20 7L4 17" stroke="#ff7a1f" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: t("srv_disposal"),
      path: "/entrumpelung",
      icon: (
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
    },
  ];

  return (
    <section id="services" className="section section--dark">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="section__title">{t("services")}</h2>

        <div className="servicesGrid">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="serviceCard"
              aria-label={item.title}
            >
              <div className="serviceCard__icon">{item.icon}</div>
              <h3 className="serviceCard__title">{item.title}</h3>
              <p className="serviceCard__text">MilCore s.r.o.</p>
            </Link>
          ))}
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

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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

    if (!form.name.trim()) newErrors.name = t("form_name_required");
    if (!form.email.trim()) {
      newErrors.email = t("form_email_required");
    } else if (!validateEmail(form.email)) {
      newErrors.email = t("form_email_invalid");
    }
    if (!form.message.trim()) newErrors.message = t("form_message_required");

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
    <section id="contact" className="section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="section__title">{t("contact_title")}</h2>

        <div className="contactCard">
          <form className="contactForm" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="name" className="field__label">
                {t("form_name")}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder={t("form_name")}
                className={`field__input ${errors.name ? "field__input--error" : ""}`}
                autoComplete="name"
                required
              />
              {errors.name && <span className="field__error">{errors.name}</span>}
            </div>

            <div className="field">
              <label htmlFor="email" className="field__label">
                {t("form_email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("form_email")}
                className={`field__input ${errors.email ? "field__input--error" : ""}`}
                autoComplete="email"
                required
              />
              {errors.email && <span className="field__error">{errors.email}</span>}
            </div>

            <div className="field">
              <label htmlFor="message" className="field__label">
                {t("form_message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t("form_message")}
                className={`field__input field__textarea ${
                  errors.message ? "field__input--error" : ""
                }`}
                required
              />
              {errors.message && (
                <span className="field__error">{errors.message}</span>
              )}
            </div>

            <button type="submit" className="btn btn--primary btn--full">
              {t("contact_send")}
            </button>

            {status && <p className="contactForm__success">{status}</p>}
          </form>

          <a href="mailto:office@milcore.sk" className="contactCard__mail">
            office@milcore.sk
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function AppContent() {
  React.useEffect(() => {
    document.documentElement.lang = i18n.language || "sk";
  }, []);

  return (
    <div className="app">
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
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}