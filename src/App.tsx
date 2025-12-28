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

function App() {
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
      <Footer />
    </div>
  );
}

export default App;
