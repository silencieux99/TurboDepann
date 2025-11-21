import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, ThumbsUp, CreditCard, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import useIsMobile from '../hooks/useIsMobile';

const WhyChooseUs = () => {
  const { isMobile } = useIsMobile();
  const reasons = [
    {
      icon: <Clock size={32} />,
      title: "Rapidité d'Intervention",
      description: "Arrivée sur place en moins de 30 minutes, 24h/24 et 7j/7"
    },
    {
      icon: <Shield size={32} />,
      title: "Agréé Assurances",
      description: "Partenaire agréé de toutes les compagnies d'assurance"
    },
    {
      icon: <Users size={32} />,
      title: "Équipe Expérimentée",
      description: "Des techniciens qualifiés avec plus de 15 ans d'expérience"
    },
    {
      icon: <CreditCard size={32} />,
      title: "Prix Transparents",
      description: "Devis gratuit et tarifs clairs sans frais cachés"
    },
    {
      icon: <Zap size={32} />,
      title: "Équipement Moderne",
      description: "Véhicules et matériel de dernière génération"
    },
    {
      icon: <ThumbsUp size={32} />,
      title: "Satisfaction Garantie",
      description: "98% de clients satisfaits nous recommandent"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Pourquoi Choisir{' '}
            <span className="text-france-blue">Turbo'</span>
            <span className="text-france-red">Depann</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quand la route vous joue des tours, vous méritez un service de dépannage qui ne vous laisse jamais en plan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.05}
              className="text-center group"
            >
              <motion.div
                whileHover={!isMobile ? { rotate: 360 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-france-blue to-france-red text-white rounded-full mb-4 group-hover:shadow-lg transition-all"
              >
                {reason.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-france-blue via-white to-france-red p-1 rounded-3xl"
        >
          <div className="bg-white rounded-3xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-france-blue mb-2"
                >
                  15+
                </motion.div>
                <p className="text-gray-600">Années d'expérience</p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-france-red mb-2"
                >
                  5000+
                </motion.div>
                <p className="text-gray-600">Clients satisfaits</p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-france-blue mb-2"
                >
                  30min
                </motion.div>
                <p className="text-gray-600">Temps d'intervention</p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-france-red mb-2"
                >
                  24/7
                </motion.div>
                <p className="text-gray-600">Disponibilité</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
