import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import ExploreSection from './components/Explore';
import FAQ from './components/Faq';
import FeaturesSection from './components/Features';
import Footer from './components/Footer';
import HeroSection from './components/Hero';
import Navbar from './components/navbar';  
import ServicesSection from './components/Services';
import TestimonialCarousel from './components/Testimonies';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Forgot from './components/Auth/Forgot';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
         <Routes>
          <Route path="/" element={<>
            <Navbar />
            <HeroSection />
            <About />
            <FeaturesSection />
            <ServicesSection />
            <ExploreSection />
            <TestimonialCarousel />
            <FAQ />
            <Footer />
          </>} />
          <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/forgot" element={<Forgot />} />
         <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
