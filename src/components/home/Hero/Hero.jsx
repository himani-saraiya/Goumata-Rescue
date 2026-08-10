import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">

          <span className="hero-badge">
            🐄 Animal Welfare & Rescue Initiative
          </span>

          <h1>
            Protecting Cows.
            <br />
            Saving Lives.
          </h1>

          <p>
            A proposed digital platform for quick, coordinated and
            transparent cow rescue and animal welfare support.
          </p>

          <div className="hero-buttons">
            <a href="#report" className="hero-btn primary-btn">
              Report a Rescue
            </a>

            <a href="#about" className="hero-btn secondary-btn">
              Learn More
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;