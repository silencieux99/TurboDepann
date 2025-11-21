import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Phone, Menu, X, Car, MapPin, Clock, Shield } from 'lucide-react';

const HeaderModern = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Accueil', to: 'hero' },
    { name: 'Services', to: 'services' },
    { name: 'Tarifs', to: 'pricing' },
    { name: 'Zones', to: 'zones' },
    { name: 'FAQ', to: 'faq' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      {/* Top Bar - Animated & Mobile Responsive */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-gradient-to-r from-france-blue via-france-blue to-france-red text-white py-1.5 sm:py-2 px-2 sm:px-4"
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            {/* Left side - Status indicators */}
            <div className="flex items-center gap-3 sm:gap-4">
              <motion.div 
                className="flex items-center"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                <span className="font-medium">24/7</span>
              </motion.div>
              
              <div className="hidden xs:flex items-center">
                <MapPin size={12} className="mr-0.5 sm:mr-1" />
                <span className="font-medium">IDF</span>
              </div>
              
              <div className="flex items-center">
                <Clock size={12} className="mr-0.5 sm:mr-1" />
                <span className="font-medium">30min</span>
              </div>
            </div>
            
            {/* Right side - Phone */}
            <motion.a 
              href="tel:0123456789" 
              className="flex items-center gap-1 sm:gap-2 font-bold bg-white/10 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={12} className="animate-pulse" />
              <span className="hidden xs:inline">01 23 45 67 89</span>
              <span className="xs:hidden">Urgence</span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Main Header with Glassmorphism */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-7 sm:top-10 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'backdrop-blur-xl bg-gray-900/80 shadow-2xl border-b border-white/10' 
            : 'backdrop-blur-md bg-gray-900/40'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo - Animated & Responsive */}
            <motion.div 
              className="flex items-center space-x-2 sm:space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-france-blue to-france-red rounded-full blur-md opacity-50"
                />
                <div className="relative bg-gradient-to-br from-france-blue to-france-red p-1.5 sm:p-2 rounded-full">
                  <Car className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold">
                  <span className="text-white">Turbo'</span>
                  <span className="bg-gradient-to-r from-france-red to-france-red-light bg-clip-text text-transparent">Depann</span>
                </h1>
                <p className="hidden xs:block text-xs text-gray-400">Excellence en dépannage</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="relative cursor-pointer text-gray-300 hover:text-white transition-colors font-medium group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-france-blue to-france-red rounded-full opacity-0 group-hover:opacity-20 blur-xl"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-france-blue to-france-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  />
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-white border border-white/20 rounded-full font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Devis Gratuit
              </motion.button>
              
              <motion.a
                href="tel:0123456789"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(237, 41, 57, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-3 bg-gradient-to-r from-france-red to-france-red-light text-white rounded-full font-bold flex items-center space-x-2 overflow-hidden group"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                <Phone size={18} className="relative z-10 animate-pulse" />
                <span className="relative z-10">Urgence</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/10 backdrop-blur-xl bg-gray-900/90"
            >
              <nav className="container mx-auto px-4 py-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-gray-300 hover:text-white transition-colors font-medium cursor-pointer hover:pl-4"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  href="tel:0123456789"
                  className="mt-6 w-full bg-gradient-to-r from-france-red to-france-red-light text-white px-6 py-3 rounded-full font-bold flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Appeler Maintenant</span>
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default HeaderModern;
