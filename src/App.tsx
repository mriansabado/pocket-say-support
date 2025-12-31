import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import HowItWorks from './components/HowItWorks';
import Tips from './components/Tips';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  if (showPrivacyPolicy) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <PrivacyPolicy onBack={() => setShowPrivacyPolicy(false)} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Screenshots />
      <HowItWorks />
      <Tips />
      <FAQ />
      <Contact />
      <Footer onPrivacyClick={() => setShowPrivacyPolicy(true)} />
    </div>
  );
}

export default App;
