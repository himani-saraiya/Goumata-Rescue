import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-content">
          <span className="section-tag">ABOUT THE INITIATIVE</span>

          <h2>
            A Smarter Approach to
            <span> Cow Rescue</span>
          </h2>

          <p>
            Gaiya Rescue is a proposed digital platform designed to improve
            the way injured, abandoned and distressed cows are reported,
            rescued and supported.
          </p>

          <p>
            The platform aims to connect citizens, rescue teams, veterinary
            services and government departments through a transparent and
            coordinated system.
          </p>

          <p>
            Our goal is to make animal rescue faster, more organized and
            easier to monitor while creating a reliable digital record of
            rescue cases.
          </p>
        </div>

        <div className="about-cards">

          <div className="about-card">
            <div className="about-icon">🚨</div>
            <h3>Quick Reporting</h3>
            <p>
              Citizens can report animals that need immediate assistance.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">🏥</div>
            <h3>Veterinary Support</h3>
            <p>
              Rescue cases can be connected with appropriate veterinary care.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">📊</div>
            <h3>Transparent Records</h3>
            <p>
              Rescue cases can be digitally recorded and monitored.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">🤝</div>
            <h3>Better Coordination</h3>
            <p>
              Citizens, rescue teams and authorities can work together.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;