import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Shield, Truck } from 'lucide-react';

const Zones = () => {
  const departments = [
    { code: "75", name: "Paris", cities: ["Tous arrondissements"] },
    { code: "77", name: "Seine-et-Marne", cities: ["Meaux", "Melun", "Fontainebleau", "Provins"] },
    { code: "78", name: "Yvelines", cities: ["Versailles", "Saint-Germain-en-Laye", "Mantes-la-Jolie", "Rambouillet"] },
    { code: "91", name: "Essonne", cities: ["Évry", "Massy", "Étampes", "Corbeil-Essonnes"] },
    { code: "92", name: "Hauts-de-Seine", cities: ["Nanterre", "Boulogne-Billancourt", "Neuilly", "Courbevoie"] },
    { code: "93", name: "Seine-Saint-Denis", cities: ["Bobigny", "Saint-Denis", "Montreuil", "Pantin"] },
    { code: "94", name: "Val-de-Marne", cities: ["Créteil", "Vitry-sur-Seine", "Saint-Maur", "Vincennes"] },
    { code: "95", name: "Val-d'Oise", cities: ["Cergy", "Argenteuil", "Sarcelles", "Pontoise"] }
  ];

  return (
    <section id="zones" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-france-blue">Zones</span>{' '}
            <span className="text-france-red">d'Intervention</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous intervenons rapidement dans toute l'Île-de-France, 24h/24 et 7j/7
          </p>
        </motion.div>

        {/* Map Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-france-blue/10 to-france-red/10 rounded-3xl p-8 mb-12"
        >
          <div className="text-center mb-8">
            <MapPin className="inline-block text-france-blue mb-4" size={60} />
            <h3 className="text-2xl font-bold mb-2">Intervention en 30 minutes</h3>
            <p className="text-gray-600">Partout en Île-de-France</p>
          </div>

          {/* Departments Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl font-bold text-france-blue mr-2">{dept.code}</span>
                  <h4 className="font-semibold">{dept.name}</h4>
                </div>
                <ul className="text-sm text-gray-600">
                  {dept.cities.map((city, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1 h-1 bg-france-red rounded-full mr-2"></span>
                      {city}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Clock className="inline-block text-france-blue mb-4" size={48} />
            <h3 className="text-xl font-bold mb-2">Service 24/7</h3>
            <p className="text-gray-600">
              Disponible jour et nuit, week-ends et jours fériés
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Truck className="inline-block text-france-red mb-4" size={48} />
            <h3 className="text-xl font-bold mb-2">Flotte Moderne</h3>
            <p className="text-gray-600">
              Véhicules équipés pour tout type d'intervention
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Shield className="inline-block text-france-blue mb-4" size={48} />
            <h3 className="text-xl font-bold mb-2">Intervention Garantie</h3>
            <p className="text-gray-600">
              Service professionnel agréé toutes assurances
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Zones;
