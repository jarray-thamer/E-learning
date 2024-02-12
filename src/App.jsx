import BlogSection from "./components/BlogSection-component";
import ContactSection from "./components/ContactSection-component";
import ExpertiseSection from "./components/ExpertiseSection-component";
import Footer from "./components/Footer-component";
import HeroSection from "./components/HeroSection-components";
import OurPartner from "./components/OurPartner-component";
import ServicesSection from "./components/ServicesSection-component";
import WelcomeToGCL from "./components/WelcomeToGCL-component";
import WhyChoose from "./components/WhyChoose";

const App = () => {
  return (
    <div>
      <HeroSection />
      <OurPartner />
      <ExpertiseSection />
      <WelcomeToGCL />
      <WhyChoose />
      <ServicesSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
