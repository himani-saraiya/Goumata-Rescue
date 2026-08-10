import "./LanguageSwitcher.css";
import { useLanguage } from "../../../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        type="button"
        className={`language-option ${
          language === "en" ? "active" : ""
        }`}
        onClick={() => changeLanguage("en")}
      >
        English
      </button>

      <span className="language-divider">|</span>

      <button
        type="button"
        className={`language-option ${
          language === "hi" ? "active" : ""
        }`}
        onClick={() => changeLanguage("hi")}
      >
        हिंदी
      </button>
    </div>
  );
};

export default LanguageSwitcher;