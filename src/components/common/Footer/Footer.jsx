import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h2>🐄 Gaiya Rescue</h2>
                    <p>
                        Helping injured, abandoned and helpless cows by providing
                        rescue, care and support.
                    </p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#rescues">Rescue Cases</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="footer-section">
                    <h3>Get Involved</h3>
                    <a href="#report">Report a Rescue</a>
                    <a href="#volunteer">Become a Volunteer</a>
                    <a href="#donate">Support Us</a>
                </div>

                <div className="footer-section">
                    <h3>Contact & Support</h3>
                    <p>📍 Madhya Pradesh, India</p>
                    <p>📞 Government Helpline: 181</p>
                    <p>🏛️ Proposed Government Initiative</p>
                    <p>🐄 Animal Welfare & Rescue Support</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Gaiya Rescue. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;