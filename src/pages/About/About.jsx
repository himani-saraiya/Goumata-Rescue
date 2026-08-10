import "./About.css";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  const content = {
    hi: {
      tag: "इस पहल के बारे में",

      titleFirst: "गायों के बचाव का",
      titleSecond: "एक बेहतर तरीका",

      paragraph1:
        "गौमाता एक प्रस्तावित डिजिटल प्लेटफ़ॉर्म है, जिसका उद्देश्य घायल, बीमार, बेसहारा और संकट में पड़ी गायों की सूचना, रेस्क्यू और सहायता प्रक्रिया को बेहतर बनाना है।",

      paragraph2:
        "यह प्लेटफ़ॉर्म नागरिकों, रेस्क्यू टीमों, पशु चिकित्सा सेवाओं और संबंधित सरकारी विभागों के बीच बेहतर समन्वय स्थापित करने की दिशा में काम करेगा।",

      paragraph3:
        "हमारा लक्ष्य पशु रेस्क्यू को तेज़, व्यवस्थित और पारदर्शी बनाना है, ताकि प्रत्येक रेस्क्यू केस का विश्वसनीय डिजिटल रिकॉर्ड तैयार किया जा सके।",

      cards: [
        {
          icon: "🚨",
          title: "त्वरित सूचना",
          description:
            "नागरिक जरूरतमंद गाय की जानकारी तुरंत साझा कर सकते हैं।",
        },
        {
          icon: "🏥",
          title: "पशु चिकित्सा सहायता",
          description:
            "रेस्क्यू किए गए मामलों को उचित चिकित्सा जांच और उपचार से जोड़ा जा सकता है।",
        },
        {
          icon: "📊",
          title: "पारदर्शी रिकॉर्ड",
          description:
            "रेस्क्यू मामलों का डिजिटल रिकॉर्ड तैयार कर उनकी प्रगति को देखा जा सकता है।",
        },
        {
          icon: "🤝",
          title: "बेहतर समन्वय",
          description:
            "नागरिक, रेस्क्यू टीम और संबंधित संस्थाएं मिलकर बेहतर सहायता प्रदान कर सकती हैं।",
        },
      ],
    },

    en: {
      tag: "ABOUT THE INITIATIVE",

      titleFirst: "A Smarter Approach to",
      titleSecond: "Cow Rescue",

      paragraph1:
        "Gaiya is a proposed digital platform designed to improve the way injured, abandoned and distressed cows are reported, rescued and supported.",

      paragraph2:
        "The platform aims to connect citizens, rescue teams, veterinary services and relevant government departments through better coordination.",

      paragraph3:
        "Our goal is to make animal rescue faster, more organized and transparent while creating a reliable digital record of rescue cases.",

      cards: [
        {
          icon: "🚨",
          title: "Quick Reporting",
          description:
            "Citizens can report animals that need immediate assistance.",
        },
        {
          icon: "🏥",
          title: "Veterinary Support",
          description:
            "Rescue cases can be connected with appropriate veterinary care.",
        },
        {
          icon: "📊",
          title: "Transparent Records",
          description:
            "Rescue cases can be digitally recorded and monitored.",
        },
        {
          icon: "🤝",
          title: "Better Coordination",
          description:
            "Citizens, rescue teams and authorities can work together.",
        },
      ],
    },
  };

  const text = content[language];

  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-content">
          <span className="section-tag">
            {text.tag}
          </span>

          <h2>
            {text.titleFirst}
            <span> {text.titleSecond}</span>
          </h2>

          <p>{text.paragraph1}</p>

          <p>{text.paragraph2}</p>

          <p>{text.paragraph3}</p>
        </div>

        <div className="about-cards">
          {text.cards.map((card, index) => (
            <div className="about-card" key={index}>
              <div className="about-icon">
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <p>{card.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;