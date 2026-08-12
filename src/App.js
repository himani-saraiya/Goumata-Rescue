import { LanguageProvider } from "./context/LanguageContext";

import Navbar from "./components/common/Navbar/Navbar";
import Hero from "./components/home/Hero/Hero";
import About from "./pages/About/About";
import HowItWorks from "./components/home/HowItWorks/HowItWorks";
import RescueCases from "./pages/RescueCases/RescueCases";
import ReportRescue from "./pages/ReportRescue/ReportRescue";
import Service from "./components/home/Service/Service";
import GovernmentSupport from "./components/home/GovernmentSupport/GovernmentSupport";
import Footer from "./components/common/Footer/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className="app">

        {/* Navbar */}
        <Navbar />

        {/* Home */}
        <section id="home">
          <Hero />
        </section>

        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* How It Works */}
        <HowItWorks />

        {/* Rescue Cases */}
        <section id="rescues">
          <RescueCases />
        </section>

        {/* Report Rescue */}
        <section id="report-rescue">
          <ReportRescue />
        </section>

        {/* Services */}
        <section id="services">
          <Service />
        </section>

        {/* Government Support */}
        <GovernmentSupport />

        {/* Footer / Contact */}
        <section id="contact">
          <Footer />
        </section>

      </div>
    </LanguageProvider>
  );
}

export default App;