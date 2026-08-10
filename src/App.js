import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/common/Navbar/Navbar";
import Hero from "./components/home/Hero/Hero";
import Footer from "./components/common/Footer/Footer";
import About from "./pages/About/About";
import HowItWorks from "./components/home/HowItWorks/HowItWorks";
import RescueCases from "./pages/RescueCases/RescueCases";
import Service from "./components/home/Service/Service";
import GovernmentSupport from "./components/home/GovernmentSupport/GovernmentSupport";
import ReportRescue from "./pages/ReportRescue/ReportRescue";

const App = () => {
  return (
    <LanguageProvider>
      <div className="App">

        <Navbar />

        <Hero />

        <About />

        <HowItWorks />

        <RescueCases />

        <ReportRescue />

        <Service />

        <GovernmentSupport />

        <Footer />

      </div>
    </LanguageProvider>
  );
};

export default App;