import "./Hero.css";
import { useLanguage } from "../../../context/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();

  const content = {
    hi: {
      badge: "🐄 पशु कल्याण एवं बचाव पहल",
      titleFirst: "गायों की रक्षा।",
      titleSecond: "जीवन बचाएँ।",
      description:
        "जरूरतमंद गायों के लिए तेज़, समन्वित और पारदर्शी रेस्क्यू तथा पशु कल्याण सहायता के लिए एक प्रस्तावित डिजिटल प्लेटफ़ॉर्म।",
      reportButton: "🚨 रेस्क्यू की सूचना दें",
      learnButton: "और जानें",
    },

    en: {
      badge: "🐄 Animal Welfare & Rescue Initiative",
      titleFirst: "Protecting Cows.",
      titleSecond: "Saving Lives.",
      description:
        "A proposed digital platform for quick, coordinated and transparent cow rescue and animal welfare support.",
      reportButton: "🚨 Report a Rescue",
      learnButton: "Learn More",
    },
  };

  const text = content[language];

  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">

          <span className="hero-badge">
            {text.badge}
          </span>

          <h1>
            {text.titleFirst}
            <br />
            {text.titleSecond}
          </h1>

          <p>
            {text.description}
          </p>

          <div className="hero-buttons">
            <a
              href="#report-rescue"
              className="hero-btn primary-btn"
            >
              {text.reportButton}
            </a>

            <a
              href="#about"
              className="hero-btn secondary-btn"
            >
              {text.learnButton}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;