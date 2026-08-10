import "./GovernmentSupport.css";

function GovernmentSupport() {
  return (
    <section className="government-support" id="government-support">
      <div className="government-container">

        <div className="government-content">
          <span className="government-tag">
            PROPOSED FOR GOVERNMENT SUPPORT
          </span>

          <h2>
            A Digital Step Towards
            <span> Better Cow Rescue Management</span>
          </h2>

          <p>
            This proposed platform can help government authorities,
            local rescue teams, veterinary services and citizens work
            together through a transparent digital rescue system.
          </p>

          <div className="government-points">

            <div className="government-point">
              <div className="point-icon">🏛️</div>
              <div>
                <h3>Government Coordination</h3>
                <p>
                  Provide authorities with organized rescue case information
                  for better coordination and monitoring.
                </p>
              </div>
            </div>

            <div className="government-point">
              <div className="point-icon">📋</div>
              <div>
                <h3>Digital Case Records</h3>
                <p>
                  Maintain structured records of reported, rescued and
                  completed cases.
                </p>
              </div>
            </div>

            <div className="government-point">
              <div className="point-icon">📍</div>
              <div>
                <h3>Location-Based Response</h3>
                <p>
                  Use rescue locations to help identify cases and coordinate
                  response teams efficiently.
                </p>
              </div>
            </div>

            <div className="government-point">
              <div className="point-icon">🤝</div>
              <div>
                <h3>Public Participation</h3>
                <p>
                  Give citizens and volunteers a simple way to contribute
                  to animal rescue efforts.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="government-box">
          <div className="government-box-icon">🐄</div>

          <h3>Our Vision</h3>

          <p>
            To build a transparent and coordinated digital network where
            every reported rescue case can be tracked from reporting to
            resolution.
          </p>

          <div className="vision-line"></div>

          <strong>
            Technology + People + Government
          </strong>

          <span>
            Working together for better animal welfare.
          </span>
        </div>

      </div>
    </section>
  );
}

export default GovernmentSupport;