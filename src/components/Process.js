import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Truck, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: "1",
      icon: <Phone size={40} />,
      title: "Appelez-nous",
      description: "Contactez notre service d'urgence disponible 24h/24 et 7j/7 au 06 98 28 23 04"
    },
    {
      number: "2",
      icon: <MapPin size={40} />,
      title: "Indiquez votre position",
      description: "Donnez-nous votre localisation précise et décrivez le problème rencontré"
    },
    {
      number: "3",
      icon: <Truck size={40} />,
      title: "Nous intervenons",
      description: "Notre équipe arrive sur place en moins de 30 minutes avec l'équipement nécessaire"
    },
    {
      number: "4",
      icon: <CheckCircle size={40} />,
      title: "Problème résolu",
      description: "Dépannage sur place ou remorquage vers le garage de votre choix"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-france-blue">Comment</span>{' '}
            <span className="text-france-red">ça marche ?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus simple et rapide pour vous dépanner en toute sérénité
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-france-blue to-france-red transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-white rounded-full w-32 h-32 mx-auto mb-6 shadow-lg flex items-center justify-center relative"
                >
                  <div className="absolute -top-2 -right-2 bg-france-red text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="text-france-blue">
                    {step.icon}
                  </div>
                </motion.div>
                
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="tel:0698282304"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-france-blue to-france-red hover:from-france-blue-light hover:to-france-red-light text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover-lift"
          >
            <Phone size={24} />
            <span>Besoin d'aide ? Appelez-nous !</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
