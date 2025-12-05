import React from 'react';
import { Link } from 'react-scroll';
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="text-france-red" size={32} />
              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-france-blue">Turbo'</span>
                  <span className="text-france-red">Depann</span>
                </h3>
                <p className="text-xs text-gray-400">Votre partenaire dépannage</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Service professionnel de dépannage et remorquage automobile disponible 24h/24 et 7j/7 
              dans toute l'Île-de-France.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-france-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-france-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-france-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-france-blue">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm"
                >
                  Nos Services
                </Link>
              </li>
              <li>
                <Link
                  to="pricing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  to="zones"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm"
                >
                  Zones d'intervention
                </Link>
              </li>
              <li>
                <Link
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-france-red">Nos Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Dépannage auto</li>
              <li className="text-gray-400">Remorquage véhicule</li>
              <li className="text-gray-400">Assistance batterie</li>
              <li className="text-gray-400">Changement de roue</li>
              <li className="text-gray-400">Ouverture de véhicule</li>
              <li className="text-gray-400">Enlèvement d'épave</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-france-blue">Contact Urgence</h4>
            <div className="space-y-3">
              <a href="tel:0698282304" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Phone size={16} />
                <span className="text-sm">06 98 28 23 04</span>
              </a>
              <a href="mailto:Turbodepann@gmail.com" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Mail size={16} />
                <span className="text-sm">Turbodepann@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2 text-gray-400">
                <MapPin size={16} className="mt-0.5" />
                <span className="text-sm">Intervention dans toute l'Île-de-France</span>
              </div>
            </div>

            {/* Emergency Button */}
            <a
              href="tel:0698282304"
              className="mt-4 inline-flex items-center space-x-2 bg-france-red hover:bg-france-red-light text-white px-4 py-2 rounded-full text-sm font-semibold transition-all"
            >
              <Phone size={16} />
              <span>Urgence 24/7</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Turbo'Depann. Tous droits réservés.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="fixed bottom-8 right-8 bg-france-blue hover:bg-france-blue-light text-white p-3 rounded-full shadow-lg cursor-pointer transition-all hover-lift"
      >
        <ChevronUp size={24} />
      </Link>
    </footer>
  );
};

export default Footer;
