import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Quel est votre temps d'intervention moyen ?",
      answer: "Notre temps d'intervention moyen est de 30 minutes en Île-de-France. Nous disposons d'une flotte de véhicules répartis stratégiquement pour garantir une arrivée rapide sur les lieux, 24h/24 et 7j/7."
    },
    {
      question: "Êtes-vous agréé par les assurances ?",
      answer: "Oui, Turbo'Depann est agréé par toutes les compagnies d'assurance. Nous travaillons en partenariat avec elles pour faciliter vos démarches et la prise en charge de votre dépannage ou remorquage."
    },
    {
      question: "Quels types de véhicules prenez-vous en charge ?",
      answer: "Nous intervenons sur tous types de véhicules : voitures (VL), poids lourds, motos, scooters, camping-cars, utilitaires, et même les engins de chantier. Notre équipement est adapté à chaque situation."
    },
    {
      question: "Comment sont calculés vos tarifs ?",
      answer: "Nos tarifs sont transparents et calculés selon plusieurs critères : type d'intervention, distance à parcourir, type de véhicule, et horaire (jour/nuit, semaine/week-end). Nous fournissons toujours un devis gratuit avant intervention."
    },
    {
      question: "Que faire en cas de panne sur l'autoroute ?",
      answer: "En cas de panne sur l'autoroute, mettez-vous en sécurité sur la bande d'arrêt d'urgence, sortez du véhicule côté passager, placez-vous derrière la barrière de sécurité et appelez-nous immédiatement. Nous sommes habilités à intervenir sur autoroute."
    },
    {
      question: "Proposez-vous un service d'enlèvement d'épave ?",
      answer: "Oui, nous proposons un service GRATUIT d'enlèvement d'épave pour les véhicules destinés à la destruction. Nous nous occupons de toutes les démarches administratives et vous fournissons un certificat de destruction conforme."
    },
    {
      question: "Puis-je choisir le garage de destination ?",
      answer: "Absolument ! Vous pouvez choisir le garage de votre choix pour le remorquage de votre véhicule. Nous pouvons également vous conseiller des garages partenaires de confiance si vous le souhaitez."
    },
    {
      question: "Acceptez-vous tous les moyens de paiement ?",
      answer: "Oui, nous acceptons tous les moyens de paiement pour votre confort : espèces, carte bancaire, chèque, et virement bancaire. Le paiement s'effectue après l'intervention."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-france-blue">Questions</span>{' '}
            <span className="text-france-red">Fréquentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full px-6 py-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all text-left ${
                  activeIndex === index ? 'ring-2 ring-france-blue' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <HelpCircle className="text-france-blue mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-france-red" size={24} />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
                      <p className="text-gray-600 ml-8">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Vous ne trouvez pas la réponse à votre question ?</p>
          <a
            href="tel:0123456789"
            className="inline-flex items-center space-x-2 text-france-blue hover:text-france-blue-light font-semibold text-lg transition-colors"
          >
            <HelpCircle size={24} />
            <span>Contactez-nous directement</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
