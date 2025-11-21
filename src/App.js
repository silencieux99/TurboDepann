import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeaderModern from './components/HeaderModern';
import HeroModern from './components/HeroModern';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Zones from './components/Zones';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-france-blue via-white to-france-red">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-france-blue border-t-transparent rounded-full"
            />
            <h1 className="text-4xl font-bold text-france-blue">Turbo'Depann</h1>
          </div>
          <p className="mt-4 text-france-blue-light">Chargement...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="App overflow-x-hidden">
      <HeaderModern />
      <HeroModern />
      <Services />
      <WhyChooseUs />
      <Process />
      <Zones />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
