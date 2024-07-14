import About from './components/About';
import FeaturesSection from './components/Features';
import HeroSection from './components/Hero';
import Navbar from './components/navbar';  
import ServicesSection from './components/Services';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <FeaturesSection />
      <ServicesSection />
    </div>
  );
}

export default App