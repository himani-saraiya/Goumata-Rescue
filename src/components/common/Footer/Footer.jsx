import "./Footer.css";
import { useLanguage } from "../../../context/LanguageContext";

function Footer() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h2>🐄 Gaiya Rescue</h2>

          <p>
            {isHindi
              ? "घायल, बेसहारा और जरूरतमंद गायों को रेस्क्यू, देखभाल और सहायता प्रदान करने में मदद करना।"
              : "Helping injured, abandoned and helpless cows by providing rescue, care and support."}
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>
            {isHindi ? "त्वरित लिंक" : "Quick Links"}
          </h3>

          <a href="#home">
            {isHindi ? "होम" : "Home"}
          </a>

          <a href="#about">
            {isHindi ? "हमारे बारे में" : "About Us"}
          </a>

          <a href="#rescues">
            {isHindi ? "रेस्क्यू केस" : "Rescue Cases"}
          </a>

          <a href="#services">
            {isHindi ? "सेवाएं" : "Services"}
          </a>

          <a href="#contact">
            {isHindi ? "संपर्क" : "Contact"}
          </a>
        </div>

        {/* Get Involved */}
        <div className="footer-section">
          <h3>
            {isHindi ? "हमसे जुड़ें" : "Get Involved"}
          </h3>

          <a href="#report-rescue">
            {isHindi
              ? "रेस्क्यू की सूचना दें"
              : "Report a Rescue"}
          </a>

          <a href="#volunteer">
            {isHindi
              ? "स्वयंसेवक बनें"
              : "Become a Volunteer"}
          </a>

          <a href="#donate">
            {isHindi
              ? "हमारा सहयोग करें"
              : "Support Us"}
          </a>
        </div>

        {/* Contact & Support */}
        <div className="footer-section">
          <h3>
            {isHindi
              ? "संपर्क और सहायता"
              : "Contact & Support"}
          </h3>

          <p>
            📍{" "}
            {isHindi
              ? "पूरे भारत में सेवा"
              : "Serving Across India"}
          </p>

          <p>
            📞{" "}
            {isHindi
              ? "सरकारी हेल्पलाइन: 181"
              : "Government Helpline: 181"}
          </p>

          <p>
            🏛️{" "}
            {isHindi
              ? "प्रस्तावित सरकारी पहल"
              : "Proposed Government Initiative"}
          </p>

          <p>
            🐄{" "}
            {isHindi
              ? "पशु कल्याण और रेस्क्यू सहायता"
              : "Animal Welfare & Rescue Support"}
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Gaiya Rescue.{" "}
          {isHindi
            ? "सर्वाधिकार सुरक्षित।"
            : "All Rights Reserved."}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
