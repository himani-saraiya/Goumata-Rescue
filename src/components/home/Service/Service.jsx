import "./Service.css";
import { useLanguage } from "../../../context/LanguageContext";

function Service() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const services = [
    {
      icon: "🚨",
      title: isHindi ? "आपातकालीन रेस्क्यू" : "Emergency Rescue",
      description: isHindi
        ? "जरूरतमंद गायों के लिए नागरिकों को तुरंत रेस्क्यू सहायता की सूचना देने की सुविधा।"
        : "Enable citizens to report cows that need urgent rescue or assistance.",
    },
    {
      icon: "🏥",
      title: isHindi ? "पशु चिकित्सा सहायता" : "Veterinary Assistance",
      description: isHindi
        ? "रेस्क्यू मामलों को जांच और उपचार के लिए पशु चिकित्सा सहायता से जोड़ना।"
        : "Connect rescue cases with veterinary support for examination and treatment.",
    },
    {
      icon: "🏠",
      title: isHindi ? "आश्रय और देखभाल" : "Shelter & Care",
      description: isHindi
        ? "रेस्क्यू किए गए पशुओं के लिए अस्थायी आश्रय, भोजन और देखभाल की व्यवस्था।"
        : "Coordinate temporary shelter, food and care for rescued animals.",
    },
    {
      icon: "📍",
      title: isHindi ? "लोकेशन ट्रैकिंग" : "Location Tracking",
      description: isHindi
        ? "रेस्क्यू स्थान की जानकारी से टीमों को सही जगह तक जल्दी पहुँचने में सहायता।"
        : "Capture rescue locations to help teams identify and respond efficiently.",
    },
    {
      icon: "📊",
      title: isHindi ? "रेस्क्यू मॉनिटरिंग" : "Rescue Monitoring",
      description: isHindi
        ? "डिजिटल केस रिकॉर्ड के माध्यम से रिपोर्ट से लेकर रेस्क्यू पूरा होने तक प्रगति पर नज़र रखना।"
        : "Maintain digital case records and track rescue progress from report to closure.",
    },
    {
      icon: "🤝",
      title: isHindi ? "स्वयंसेवक समन्वय" : "Volunteer Coordination",
      description: isHindi
        ? "स्थानीय स्वयंसेवकों और सहायता नेटवर्क को रेस्क्यू कार्यों से जोड़ना।"
        : "Create opportunities for volunteers and local support networks to contribute.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">

        <div className="services-header">
          <span className="section-tag">
            {isHindi ? "हमारी सेवाएँ" : "OUR SERVICES"}
          </span>

          <h2>
            {isHindi ? "एक संपूर्ण" : "A Complete"}
            <span>
              {isHindi ? " रेस्क्यू नेटवर्क" : " Rescue Network"}
            </span>
          </h2>

          <p>
            {isHindi
              ? "नागरिकों, रेस्क्यू टीमों, पशु चिकित्सा सहायता और संबंधित अधिकारियों को जोड़ने के लिए प्रस्तावित डिजिटल सेवाएँ।"
              : "Proposed digital services designed to connect citizens, rescue teams, veterinary support and authorities."}
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Service;
