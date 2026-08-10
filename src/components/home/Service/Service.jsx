import "./Service.css";

function Service() {
  const services = [
    {
      icon: "🚨",
      title: "Emergency Rescue",
      description:
        "Enable citizens to report cows that need urgent rescue or assistance.",
    },
    {
      icon: "🏥",
      title: "Veterinary Assistance",
      description:
        "Connect rescue cases with veterinary support for examination and treatment.",
    },
    {
      icon: "🏠",
      title: "Shelter & Care",
      description:
        "Coordinate temporary shelter, food and care for rescued animals.",
    },
    {
      icon: "📍",
      title: "Location Tracking",
      description:
        "Capture rescue locations to help teams identify and respond to cases efficiently.",
    },
    {
      icon: "📊",
      title: "Rescue Monitoring",
      description:
        "Maintain digital case records and track rescue progress from report to closure.",
    },
    {
      icon: "🤝",
      title: "Volunteer Coordination",
      description:
        "Create opportunities for volunteers and local support networks to contribute.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">

        <div className="services-header">
          <span className="section-tag">OUR SERVICES</span>

          <h2>
            A Complete
            <span> Rescue Network</span>
          </h2>

          <p>
            Proposed digital services designed to connect citizens, rescue
            teams, veterinary support and authorities.
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