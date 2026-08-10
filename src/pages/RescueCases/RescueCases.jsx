import "./RescueCases.css";

function RescueCases() {
  const rescueCases = [
    {
      id: "RC-001",
      title: "Injured Cow",
      location: "Indore, Madhya Pradesh",
      status: "Rescued",
      description:
        "An injured cow reported by a citizen and successfully taken for veterinary assistance.",
      icon: "🐄",
    },
    {
      id: "RC-002",
      title: "Abandoned Cow",
      location: "Ujjain, Madhya Pradesh",
      status: "Under Treatment",
      description:
        "A distressed cow reported in an urban area and referred for medical care and shelter support.",
      icon: "🐄",
    },
    {
      id: "RC-003",
      title: "Roadside Rescue",
      location: "Bhopal, Madhya Pradesh",
      status: "Monitoring",
      description:
        "A cow found near a busy road was rescued and placed under observation.",
      icon: "🐄",
    },
  ];

  return (
    <section className="rescue-cases" id="rescues">
      <div className="rescue-container">

        <div className="rescue-header">
          <span className="section-tag">RESCUE CASES</span>

          <h2>
            Every Rescue
            <span> Matters</span>
          </h2>

          <p>
            A transparent digital record of rescue cases can help monitor
            response, treatment and recovery.
          </p>
        </div>

        <div className="rescue-grid">
          {rescueCases.map((rescueCase) => (
            <div className="rescue-card" key={rescueCase.id}>

              <div className="rescue-image">
                <span>{rescueCase.icon}</span>
              </div>

              <div className="rescue-content">

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

                <h3>{rescueCase.title}</h3>

                <p className="rescue-location">
                  📍 {rescueCase.location}
                </p>

                <p className="rescue-description">
                  {rescueCase.description}
                </p>

                <button className="view-case-btn">
                  View Case
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