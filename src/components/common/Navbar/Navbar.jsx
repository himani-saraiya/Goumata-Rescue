import "./Navbar.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-icon">🐄</span>
          <span className="logo-text">Gaiya Rescue</span>
        </div>

        {/* Navigation */}
        <nav className="navbar-menu">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#rescues">Rescue Cases</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Right Side */}
        <div className="navbar-actions">
          <LanguageSwitcher />

          <button type="button" className="rescue-button">
            Report a Rescue
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;