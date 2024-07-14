import About from './components/About';
import ExploreSection from './components/Explore';
import FAQ from './components/Faq';
import FeaturesSection from './components/Features';
import Footer from './components/Footer';
import HeroSection from './components/Hero';
import Navbar from './components/navbar';  
import ServicesSection from './components/Services';
import TestimonialCarousel from './components/Testimonies';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <FeaturesSection />
      <ServicesSection />
      <ExploreSection />
      <TestimonialCarousel />
      <FAQ />
      <Footer />
      
    </div>
  );
}

export default App