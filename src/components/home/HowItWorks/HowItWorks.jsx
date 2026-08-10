import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "🚨",
      title: "Report",
      description:
        "A citizen can report an injured, abandoned or distressed cow through the platform.",
    },
    {
      number: "02",
      icon: "🔍",
      title: "Verification",
      description:
        "The reported case can be reviewed and verified by the concerned rescue team.",
    },
    {
      number: "03",
      icon: "🐄",
      title: "Rescue & Treatment",
      description:
        "The rescue team can coordinate transportation, shelter and veterinary assistance.",
    },
    {
      number: "04",
      icon: "📊",
      title: "Monitoring",
      description:
        "The rescue case can be digitally tracked until treatment, recovery or closure.",
    },
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-container">

        <div className="how-header">
          <span className="section-tag">HOW IT WORKS</span>

          <h2>
            From Reporting to
            <span> Rescue</span>
          </h2>

          <p>
            A simple digital workflow designed to improve coordination,
            response time and transparency in animal rescue.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>

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