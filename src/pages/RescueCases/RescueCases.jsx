import "./RescueCases.css";
import { useLanguage } from "../../context/LanguageContext";

function RescueCases() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const rescueCases = [
    {
      id: "RC-001",
      title: isHindi ? "घायल गाय" : "Injured Cow",
      location: isHindi
        ? "इंदौर, मध्य प्रदेश"
        : "Indore, Madhya Pradesh",
      status: isHindi ? "रेस्क्यू पूर्ण" : "Rescued",
      description: isHindi
        ? "एक नागरिक द्वारा घायल गाय की सूचना दी गई, जिसके बाद उसे पशु चिकित्सा सहायता के लिए सुरक्षित पहुँचाया गया।"
        : "An injured cow was reported by a citizen and safely taken for veterinary assistance.",
      icon: "🐄",
    },
    {
      id: "RC-002",
      title: isHindi ? "बेसहारा गाय" : "Abandoned Cow",
      location: isHindi
        ? "उज्जैन, मध्य प्रदेश"
        : "Ujjain, Madhya Pradesh",
      status: isHindi ? "उपचार जारी" : "Under Treatment",
      description: isHindi
        ? "शहरी क्षेत्र में बेसहारा गाय की सूचना मिलने के बाद उसे चिकित्सा सहायता और आश्रय के लिए भेजा गया।"
        : "A distressed cow was reported in an urban area and referred for medical care and shelter support.",
      icon: "🐄",
    },
    {
      id: "RC-003",
      title: isHindi ? "सड़क से रेस्क्यू" : "Roadside Rescue",
      location: isHindi
        ? "भोपाल, मध्य प्रदेश"
        : "Bhopal, Madhya Pradesh",
      status: isHindi ? "निगरानी में" : "Monitoring",
      description: isHindi
        ? "व्यस्त सड़क के पास मिली गाय को सुरक्षित रेस्क्यू करके निगरानी में रखा गया।"
        : "A cow found near a busy road was rescued and placed under observation.",
      icon: "🐄",
    },
  ];

  const text = {
    tag: isHindi ? "रेस्क्यू केस" : "RESCUE CASES",

    title: isHindi ? "हर रेस्क्यू" : "Every Rescue",

    titleHighlight: isHindi ? "महत्वपूर्ण है" : "Matters",

    description: isHindi
      ? "रेस्क्यू मामलों का पारदर्शी डिजिटल रिकॉर्ड सहायता, उपचार और रिकवरी की निगरानी में मदद कर सकता है।"
      : "A transparent digital record of rescue cases can help monitor response, treatment and recovery.",

    viewCase: isHindi ? "केस देखें" : "View Case",

    locationLabel: isHindi ? "स्थान" : "Location",
  };

  return (
    <section className="rescue-cases" id="rescues">
      <div className="rescue-container">

        {/* Header */}
        <div className="rescue-header">
          <span className="section-tag">
            {text.tag}
          </span>

          <h2>
            {text.title}
            <span>{text.titleHighlight}</span>
          </h2>

          <p>
            {text.description}
          </p>
        </div>

        {/* Rescue Cards */}
        <div className="rescue-grid">
          {rescueCases.map((rescueCase) => (
            <div
              className="rescue-card"
              key={rescueCase.id}
            >

              {/* Image / Icon */}
              <div className="rescue-image">
                <span>{rescueCase.icon}</span>
              </div>

              <div className="rescue-content">

                {/* Case ID + Status */}
                <div className="rescue-top">

                  <span className="case-id">
                    {rescueCase.id}
                  </span>

                  <span
                    className={`status ${rescueCase.status
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    {rescueCase.status}
                  </span>

                </div>

                {/* Title */}
                <h3>
                  {rescueCase.title}
                </h3>

                {/* Location */}
                <p className="rescue-location">
                  📍 {rescueCase.location}
                </p>

                {/* Description */}
                <p className="rescue-description">
                  {rescueCase.description}
                </p>

                {/* Button */}
                <button
                  type="button"
                  className="view-case-btn"
                >
                  {text.viewCase}
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default RescueCases;