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
      form_email_invalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      form_message_required: "Bitte geben Sie Ihre Nachricht ein.",
      form_success:
        "Ihr E-Mail-Programm wurde mit einer vorbereiteten Nachricht geöffnet.",
      nav_home: "Start",
      nav_services: "Leistungen",
      nav_contact: "Kontakt",
      menu: "Menü",
      close: "Schließen",
      language: "Sprache",
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
                      onClick={() => changeLanguage(lang)}
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