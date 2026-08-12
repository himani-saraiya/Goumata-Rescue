import "./GovernmentSupport.css";
import { useLanguage } from "../../../context/LanguageContext";

function GovernmentSupport() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  return (
    <section className="government-support" id="government-support">
      <div className="government-container">

        <div className="government-content">

          <span className="government-tag">
            {isHindi
              ? "सरकारी सहयोग के लिए प्रस्तावित"
              : "PROPOSED FOR GOVERNMENT SUPPORT"}
          </span>

          <h2>
            {isHindi
              ? "बेहतर गाय रेस्क्यू प्रबंधन की ओर"
              : "A Digital Step Towards"}

            <span>
              {isHindi
                ? " एक डिजिटल कदम"
                : " Better Cow Rescue Management"}
            </span>
          </h2>

          <p>
            {isHindi
              ? "यह प्रस्तावित प्लेटफॉर्म सरकारी अधिकारियों, स्थानीय रेस्क्यू टीमों, पशु चिकित्सा सेवाओं और नागरिकों को एक पारदर्शी डिजिटल रेस्क्यू सिस्टम के माध्यम से साथ काम करने में सहायता कर सकता है।"
              : "This proposed platform can help government authorities, local rescue teams, veterinary services and citizens work together through a transparent digital rescue system."}
          </p>

          <div className="government-points">

            {/* Government Coordination */}
            <div className="government-point">
              <div className="point-icon">🏛️</div>

              <div>
                <h3>
                  {isHindi
                    ? "सरकारी समन्वय"
                    : "Government Coordination"}
                </h3>

                <p>
                  {isHindi
                    ? "बेहतर समन्वय और निगरानी के लिए अधिकारियों को व्यवस्थित रेस्क्यू केस की जानकारी उपलब्ध कराना।"
                    : "Provide authorities with organized rescue case information for better coordination and monitoring."}
                </p>
              </div>
            </div>

            {/* Digital Case Records */}
            <div className="government-point">
              <div className="point-icon">📋</div>

              <div>
                <h3>
                  {isHindi
                    ? "डिजिटल केस रिकॉर्ड"
                    : "Digital Case Records"}
                </h3>

                <p>
                  {isHindi
                    ? "रिपोर्ट किए गए, रेस्क्यू किए गए और पूर्ण किए गए मामलों का व्यवस्थित डिजिटल रिकॉर्ड रखना।"
                    : "Maintain structured records of reported, rescued and completed cases."}
                </p>
              </div>
            </div>

            {/* Location Based Response */}
            <div className="government-point">
              <div className="point-icon">📍</div>

              <div>
                <h3>
                  {isHindi
                    ? "लोकेशन आधारित प्रतिक्रिया"
                    : "Location-Based Response"}
                </h3>

                <p>
                  {isHindi
                    ? "रेस्क्यू लोकेशन के आधार पर मामलों की पहचान और संबंधित टीमों को प्रभावी ढंग से समन्वित करने में सहायता।"
                    : "Use rescue locations to help identify cases and coordinate response teams efficiently."}
                </p>
              </div>
            </div>

            {/* Public Participation */}
            <div className="government-point">
              <div className="point-icon">🤝</div>

              <div>
                <h3>
                  {isHindi
                    ? "जनभागीदारी"
                    : "Public Participation"}
                </h3>

                <p>
                  {isHindi
                    ? "नागरिकों और स्वयंसेवकों को पशु रेस्क्यू प्रयासों में आसानी से योगदान देने का अवसर प्रदान करना।"
                    : "Give citizens and volunteers a simple way to contribute to animal rescue efforts."}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Vision Box */}
        <div className="government-box">

          <div className="government-box-icon">
            🐄
          </div>

          <h3>
            {isHindi ? "हमारा विज़न" : "Our Vision"}
          </h3>

          <p>
            {isHindi
              ? "एक ऐसा पारदर्शी और समन्वित डिजिटल नेटवर्क बनाना, जहाँ हर रिपोर्ट किए गए रेस्क्यू केस को सूचना से समाधान तक ट्रैक किया जा सके।"
              : "To build a transparent and coordinated digital network where every reported rescue case can be tracked from reporting to resolution."}
          </p>

          <div className="vision-line"></div>

          <strong>
            {isHindi
              ? "तकनीक + लोग + सरकार"
              : "Technology + People + Government"}
          </strong>

          <span>
            {isHindi
              ? "बेहतर पशु कल्याण के लिए मिलकर काम करना।"
              : "Working together for better animal welfare."}
          </span>

        </div>

      </div>
    </section>
  );
}

export default GovernmentSupport;
