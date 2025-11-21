import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, MapPin, Shield, Truck, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-france-blue via-white to-france-red">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-france-blue">Dépannage</span>{' '}
              <span className="text-france-red">Express</span>
              <br />
              <span className="text-gray-800">en Île-de-France</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              Votre véhicule en panne ? <strong>Turbo'Depann</strong> intervient en <strong>30 minutes</strong> partout en Île-de-France. 
              Service professionnel disponible 24h/24, 7j/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:0123456789"
                className="bg-france-red hover:bg-france-red-light text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 shadow-lg transition-all"
              >
                <Phone size={24} />
                <span>01 23 45 67 89</span>
              </motion.a>
              
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-france-blue text-france-blue hover:bg-france-blue hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg cursor-pointer"
                >
                  Devis Gratuit
                </motion.button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <Clock className="text-france-blue" size={20} />
                <span>Intervention 30 min</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Shield className="text-france-blue" size={20} />
                <span>Agréé Assurances</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <MapPin className="text-france-blue" size={20} />
                <span>Toute l'Île-de-France</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Truck className="text-france-blue" size={20} />
                <span>Tous véhicules</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-france-blue to-france-red opacity-20 rounded-3xl"></div>
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="text-center">
                  <Truck size={120} className="mx-auto text-france-blue mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Service Premium</h3>
                  <p className="text-gray-600 mb-4">Dépannage professionnel rapide et efficace</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                    <div>
                      <p className="text-3xl font-bold text-france-blue">24/7</p>
                      <p className="text-sm text-gray-600">Disponibilité</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-france-red">30min</p>
                      <p className="text-sm text-gray-600">Intervention</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-france-blue">100%</p>
                      <p className="text-sm text-gray-600">Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-france-red text-white rounded-full px-4 py-2 font-bold shadow-lg"
            >
              Urgence 24/7
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ChevronDown size={32} className="text-france-blue cursor-pointer" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
