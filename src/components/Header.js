import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Phone, Menu, X, Car, MapPin } from 'lucide-react';

const Header = () => {
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
      {/* Top Bar */}
      <div className="bg-france-blue text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <MapPin size={16} className="mr-1" />
              Île-de-France
            </span>
            <span className="hidden sm:inline">Service 24h/24 - 7j/7</span>
          </div>
          <a href="tel:0698282304" className="flex items-center hover:text-france-red transition-colors">
            <Phone size={16} className="mr-1" />
            <span className="font-bold">06 98 28 23 04</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-lg py-2' : 'py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Car className="text-france-blue" size={32} />
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="text-france-blue">Turbo'</span>
                  <span className="text-france-red">Depann</span>
                </h1>
                <p className="text-xs text-gray-600">Dépannage Auto Île-de-France</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer text-gray-700 hover:text-france-blue transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="tel:0698282304"
                className="bg-france-red hover:bg-france-red-light text-white px-6 py-3 rounded-full font-bold flex items-center space-x-2 transition-all hover-lift"
              >
                <Phone size={20} />
                <span>Urgence 24/7</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-france-blue"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
          className="lg:hidden overflow-hidden bg-white border-t"
        >
          <nav className="container mx-auto px-4 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-gray-700 hover:text-france-blue transition-colors font-medium cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:0698282304"
              className="mt-4 bg-france-red hover:bg-france-red-light text-white px-6 py-3 rounded-full font-bold flex items-center justify-center space-x-2 transition-all"
            >
              <Phone size={20} />
              <span>Appeler Maintenant</span>
            </a>
          </nav>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header;
