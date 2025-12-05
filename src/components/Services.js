import React from 'react';
import { motion } from 'framer-motion';
import { Car, Truck, Bike, Wrench, Battery, AlertTriangle, Phone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import useIsMobile from '../hooks/useIsMobile';

const Services = () => {
  const { isMobile } = useIsMobile();
  const services = [
    {
      icon: <Car size={40} />,
      title: "Dépannage Voiture (VL)",
      description: "Intervention rapide pour tous types de véhicules légers en panne, accident ou immobilisation.",
      features: ["Panne mécanique", "Crevaison", "Batterie", "Clés perdues"],
      color: "france-blue"
    },
    {
      icon: <Bike size={40} />,
      title: "Dépannage Moto",
      description: "Service dédié aux deux-roues avec équipement adapté et sécurisé.",
      features: ["Motos", "Scooters", "Quads", "Transport sécurisé"],
      color: "france-blue"
    },
    {
      icon: <Wrench size={40} />,
      title: "Engin de Chantier",
      description: "Remorquage et dépannage d'engins de chantier et véhicules spéciaux.",
      features: ["Pelleteuses", "Chargeuses", "Nacelles", "Compacteurs"],
      color: "france-red"
    },
    {
      icon: <Battery size={40} />,
      title: "Assistance Batterie",
      description: "Démarrage, remplacement et diagnostic de batterie sur place.",
      features: ["Démarrage", "Remplacement", "Diagnostic", "Conseils"],
      color: "france-blue"
    },
    {
      icon: <AlertTriangle size={40} />,
      title: "Enlèvement d'Épave",
      description: "Service gratuit d'enlèvement de véhicules destinés à la destruction.",
      features: ["Gratuit", "Certificat", "Recyclage", "Écologique"],
      color: "france-red"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-france-blue">Nos</span>{' '}
            <span className="text-france-red">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de services de dépannage et remorquage pour tous types de véhicules
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.05}
              className=""
            >
              <motion.div
                whileHover={!isMobile ? { y: -10 } : {}}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full"
              >
              <div className={`bg-${service.color} text-white p-6`}>
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  <span className="text-xs font-semibold bg-white bg-opacity-20 px-3 py-1 rounded-full">
                    24/7
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className={`w-2 h-2 bg-${service.color} rounded-full mr-2`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:0698282304"
                  className={`w-full bg-${service.color} hover:opacity-90 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all`}
                >
                  <Phone size={18} />
                  <span>Appeler Maintenant</span>
                </a>
              </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Emergency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-france-blue to-france-red rounded-3xl p-8 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Urgence ? Nous sommes là !</h3>
          <p className="text-lg mb-6">Intervention rapide en 30 minutes partout en Île-de-France</p>
          <a
            href="tel:0698282304"
            className="inline-flex items-center space-x-2 bg-white text-france-blue hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
          >
            <Phone size={24} />
            <span>06 98 28 23 04</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
