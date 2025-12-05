import React from 'react';
import { motion } from 'framer-motion';
import { Check, Phone, AlertCircle } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Dépannage Simple",
      subtitle: "Intervention sur place",
      price: "À partir de 89€",
      features: [
        "Diagnostic sur place",
        "Petites réparations",
        "Changement de roue",
        "Démarrage batterie",
        "Ouverture de véhicule",
        "Appoint carburant"
      ],
      popular: false
    },
    {
      title: "Remorquage",
      subtitle: "Transport sécurisé",
      price: "À partir de 120€",
      features: [
        "Remorquage toutes distances",
        "Transport sécurisé",
        "Véhicule adapté",
        "Destination au choix",
        "Prise en charge rapide",
        "Agréé assurances"
      ],
      popular: true
    },
    {
      title: "Enlèvement Épave",
      subtitle: "Service écologique",
      price: "GRATUIT",
      features: [
        "Enlèvement gratuit",
        "Certificat de destruction",
        "Démarches administratives",
        "Recyclage écologique",
        "Service rapide",
        "Conforme aux normes"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
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
            <span className="text-france-red">Tarifs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des prix transparents et compétitifs, sans frais cachés
          </p>
        </motion.div>

        {/* Alert Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-blue-50 border-l-4 border-france-blue rounded-lg p-4 mb-12 max-w-3xl mx-auto"
        >
          <div className="flex items-center">
            <AlertCircle className="text-france-blue mr-3" size={24} />
            <div>
              <p className="text-sm text-gray-700">
                <strong>Information importante :</strong> Les tarifs affichés sont indicatifs. 
                Le prix final dépend de la distance, du type de véhicule et de l'intervention nécessaire. 
                Devis gratuit par téléphone.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all ${
                plan.popular ? 'ring-2 ring-france-red transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-france-red text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Plus populaire
                </div>
              )}

              <div className="p-6 text-center border-b">
                <h3 className="text-2xl font-bold text-gray-800">{plan.title}</h3>
                <p className="text-gray-600 mt-1">{plan.subtitle}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-france-blue">{plan.price}</span>
                  {plan.price !== "GRATUIT" && <span className="text-gray-600 text-sm"> TTC</span>}
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="tel:0698282304"
                  className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all ${
                    plan.popular
                      ? 'bg-france-red hover:bg-france-red-light text-white'
                      : 'bg-france-blue hover:bg-france-blue-light text-white'
                  }`}
                >
                  <Phone size={18} />
                  <span>Obtenir un devis</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Paiement accepté : Espèces, CB, Chèque, Virement
          </p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <span className="block text-2xl font-bold text-france-blue">100%</span>
              <span className="text-sm text-gray-600">Transparent</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-france-red">0€</span>
              <span className="text-sm text-gray-600">Devis gratuit</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-france-blue">24/7</span>
              <span className="text-sm text-gray-600">Disponible</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
