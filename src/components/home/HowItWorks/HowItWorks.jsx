import "./HowItWorks.css";
import { useLanguage } from "../../../context/LanguageContext";

function HowItWorks() {
    const { language } = useLanguage();
    const isHindi = language === "hi";

    const text = {
        tag: isHindi ? "यह कैसे काम करता है" : "HOW IT WORKS",

        title: isHindi ? "रिपोर्ट से" : "From Reporting to",

        rescue: isHindi ? "बचाव तक" : "Rescue",

        description: isHindi
            ? "पशु बचाव में बेहतर समन्वय, तेज़ प्रतिक्रिया और पारदर्शिता के लिए डिज़ाइन की गई एक सरल डिजिटल प्रक्रिया।"
            : "A simple digital workflow designed to improve coordination, response time and transparency in animal rescue.",

        steps: [
            {
                number: "01",
                icon: "🚨",
                title: isHindi ? "रिपोर्ट करें" : "Report",
                description: isHindi
                    ? "कोई भी नागरिक इस प्लेटफॉर्म के माध्यम से घायल, परित्यक्त या परेशान गाय की सूचना दे सकता है।"
                    : "A citizen can report an injured, abandoned or distressed cow through the platform.",
            },
            {
                number: "02",
                icon: "🔍",
                title: isHindi ? "सत्यापन" : "Verification",
                description: isHindi
                    ? "रिपोर्ट किए गए मामले की संबंधित रेस्क्यू टीम द्वारा समीक्षा और सत्यापन किया जा सकता है।"
                    : "The reported case can be reviewed and verified by the concerned rescue team.",
            },
            {
                number: "03",
                icon: "🐄",
                title: isHindi ? "बचाव एवं उपचार" : "Rescue & Treatment",
                description: isHindi
                    ? "रेस्क्यू टीम परिवहन, आश्रय और पशु चिकित्सा सहायता का समन्वय कर सकती है।"
                    : "The rescue team can coordinate transportation, shelter and veterinary assistance.",
            },
            {
                number: "04",
                icon: "📊",
                title: isHindi ? "निगरानी" : "Monitoring",
                description: isHindi
                    ? "रेस्क्यू केस को उपचार, स्वस्थ होने या केस बंद होने तक डिजिटल रूप से ट्रैक किया जा सकता है।"
                    : "The rescue case can be digitally tracked until treatment, recovery or closure.",
            },
        ],
    };

    return (
        <section className="how-it-works" id="how-it-works">
            <div className="how-container">

                <div className="how-header">
                    <span className="section-tag">
                        {text.tag}
                    </span>

                    <h2>
                        {text.title}
                        <span> {text.rescue}</span>
                    </h2>

                    <p>
                        {text.description}
                    </p>
                </div>

                <div className="steps-container">
                    {text.steps.map((step) => (
                        <div
                            className="step-card"
                            key={step.number}
                        >
                            <div className="step-number">
                                {step.number}
                            </div>

                            <div className="step-icon">
                                {step.icon}
                            </div>

                            <h3>{step.title}</h3>

                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default HowItWorks;