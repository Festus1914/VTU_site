import About from './components/About';
import ExploreSection from './components/Explore';
import FeaturesSection from './components/Features';
import HeroSection from './components/Hero';
import Navbar from './components/navbar';  
import ServicesSection from './components/Services';
import TestimonialSlider from './components/Testimonies';
import Testimonial from './components/Testimonies';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <FeaturesSection />
      <ServicesSection />
      <ExploreSection />
      <TestimonialSlider />
    </div>
  );
}

export default App