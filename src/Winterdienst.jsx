import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import bg from "./assets/winter.png";

const pageStyles = {
  section: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff",
    position: "relative",
    padding: "100px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.72), rgba(0,0,0,0.92))",
    backdropFilter: "blur(4px)",
  },
  card: {
    position: "relative",
    zIndex: 2,
    maxWidth: 900,
    width: "100%",
    lineHeight: 1.75,
    textAlign: "left",
    background: "rgba(20,20,25,0.55)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 18px 50px rgba(0,0,0,0.45)",
    padding: "44px",
    borderRadius: 20,
    transition: "all 0.4s ease",
  },
  title: {
    color: "#ff7a1f",
    textShadow: "0 0 20px rgba(255,122,31,0.35)",
    marginBottom: 20,
    fontSize: "clamp(30px, 4vw, 46px)",
    lineHeight: 1.15,
  },
  subtitle: {
    color: "#ff8f3d",
    textShadow: "0 0 14px rgba(255,143,61,0.28)",
    marginTop: 24,
    marginBottom: 14,
    fontSize: 24,
  },
  paragraph: {
    marginBottom: 12,
    color: "rgba(255,255,255,0.92)",
  },
  list: {
    listStyle: "disc",
    paddingLeft: 22,
    marginBottom: 22,
    color: "rgba(255,255,255,0.9)",
  },
  listItem: {
    marginBottom: 8,
  },
  highlight: {
    color: "#ff7a1f",
    textShadow: "0 0 20px rgba(255,122,31,0.35)",
    marginTop: 30,
    marginBottom: 12,
    fontSize: 26,
    lineHeight: 1.3,
  },
  button: {
    marginTop: 20,
    background: "linear-gradient(135deg, #ff6a00, #ff8f3d)",
    color: "#fff",
    border: "none",
    borderRadius: 12,
    padding: "12px 22px",
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 28px rgba(255,106,0,0.22)",
  },
};

export default function Winterdienst() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCardEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-4px) scale(1.015)";
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
  };

  const handleButtonEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.06)";
    e.currentTarget.style.boxShadow = "0 0 24px rgba(255,106,0,0.45)";
  };

  const handleButtonLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 10px 28px rgba(255,106,0,0.22)";
  };

  return (
    <section
      style={{
        ...pageStyles.section,
        backgroundImage: `url(${bg})`,
      }}
    >
      <div style={pageStyles.overlay} />

      <div
        style={pageStyles.card}
        onMouseEnter={handleCardEnter}
        onMouseLeave={handleCardLeave}
      >
        <h1 style={pageStyles.title}>{t("winter_title")}</h1>

        <p style={pageStyles.paragraph}>{t("winter_intro1")}</p>
        <p style={pageStyles.paragraph}>{t("winter_intro2")}</p>

        <h3 style={pageStyles.subtitle}>{t("winter_services_title")}</h3>
        <ul style={pageStyles.list}>
          <li style={pageStyles.listItem}>{t("winter_service1")}</li>
          <li style={pageStyles.listItem}>{t("winter_service2")}</li>
          <li style={pageStyles.listItem}>{t("winter_service3")}</li>
          <li style={pageStyles.listItem}>{t("winter_service4")}</li>
          <li style={pageStyles.listItem}>{t("winter_service5")}</li>
        </ul>

        <h3 style={pageStyles.subtitle}>{t("winter_why_title")}</h3>
        <ul style={pageStyles.list}>
          <li style={pageStyles.listItem}>{t("winter_why1")}</li>
          <li style={pageStyles.listItem}>{t("winter_why2")}</li>
          <li style={pageStyles.listItem}>{t("winter_why3")}</li>
          <li style={pageStyles.listItem}>{t("winter_why4")}</li>
        </ul>

        <p style={{ ...pageStyles.paragraph, marginTop: 20 }}>
          {t("winter_conclusion")}
        </p>

        <h3 style={pageStyles.highlight}>{t("winter_final")}</h3>

        <p style={pageStyles.paragraph}>{t("winter_cta")}</p>

        <button
          type="button"
          onClick={() => navigate("/")}
          style={pageStyles.button}
          onMouseEnter={handleButtonEnter}
          onMouseLeave={handleButtonLeave}
        >
          {t("back_button")}
        </button>
      </div>
    </section>
  );
}