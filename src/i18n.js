import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  sk: {
    translation: {
      hero_title: "Profesionálne služby údržby budov",
      hero_sub: "Čistenie objektov, údržba zelene a zimná služba.",
      cta_more: "Zistiť viac",
      contact: "Kontaktujte nás",
      services: "Naše služby",
      srv_cleaning: "Čistenie budov",
      srv_garden: "Údržba zelene",
      srv_winter: "Zimná údržba",
      srv_disposal: "Odvoz a vypratávanie",
      contact_title: "Kontakt",
      contact_send: "Odoslať",
      form_name: "Meno",
      form_email: "Email",
      form_message: "Správa",
      about_title: "Spoľahlivý partner pre vaše objekty",
      about_text:
        "Zabezpečujeme komplexnú starostlivosť o budovy, exteriéry a okolie s dôrazom na kvalitu, rýchlosť a profesionálny prístup.",
    },
  },
  de: {
    translation: {
      hero_title: "Professionelle Gebäudedienstleistungen",
      hero_sub: "Objektreinigung, Grünpflege und Winterdienst.",
      cta_more: "Mehr erfahren",
      contact: "Kontaktieren Sie uns",
      services: "Unsere Dienstleistungen",
      srv_cleaning: "Gebäudereinigung",
      srv_garden: "Gartenpflege",
      srv_winter: "Winterdienst",
      srv_disposal: "Entrümpelung",
      contact_title: "Kontakt",
      contact_send: "Senden",
      form_name: "Name",
      form_email: "E-Mail",
      form_message: "Nachricht",
      about_title: "Zuverlässiger Partner für Ihre Objekte",
      about_text:
        "Wir bieten umfassende Betreuung von Gebäuden, Außenflächen und Anlagen mit Fokus auf Qualität, Schnelligkeit und Professionalität.",
    },
  },
  en: {
    translation: {
      hero_title: "Professional Building Maintenance Services",
      hero_sub:
        "Building cleaning, greenery maintenance and winter service.",
      cta_more: "Learn more",
      contact: "Contact Us",
      services: "Our Services",
      srv_cleaning: "Building Cleaning",
      srv_garden: "Greenery Care",
      srv_winter: "Winter Service",
      srv_disposal: "Disposal & Clearing",
      contact_title: "Contact",
      contact_send: "Send",
      form_name: "Name",
      form_email: "Email",
      form_message: "Message",
      about_title: "A reliable partner for your properties",
      about_text:
        "We provide complete care for buildings, outdoor areas and surroundings with a focus on quality, speed and professional service.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "sk",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
