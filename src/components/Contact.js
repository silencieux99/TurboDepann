import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    vehicleType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        vehicleType: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Téléphone",
      content: "06 98 28 23 04",
      link: "tel:0698282304"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "contact@turbodepann.fr",
      link: "mailto:contact@turbodepann.fr"
    },
    {
      icon: <MapPin size={24} />,
      title: "Zone d'intervention",
      content: "Toute l'Île-de-France",
      link: null
    },
    {
      icon: <Clock size={24} />,
      title: "Disponibilité",
      content: "24h/24, 7j/7",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-france-blue">Contactez</span>-<span className="text-france-red">nous</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Besoin d'assistance ? Notre équipe est disponible 24h/24 pour répondre à vos urgences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Demande de devis gratuit</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="mx-auto text-green-500 mb-4" size={60} />
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Message envoyé !</h4>
                  <p className="text-gray-600">Nous vous recontacterons dans les plus brefs délais.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-france-blue focus:border-transparent transition-all"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-france-blue focus:border-transparent transition-all"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-france-blue focus:border-transparent transition-all"
                      placeholder="jean.dupont@email.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Localisation actuelle
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-france-blue focus:border-transparent transition-all"
                        placeholder="Paris, 75001"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type de véhicule
                      </label>
                      <select
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-france-blue focus:border-transparent transition-all"
                      >
                        <option value="">Sélectionner...</option>
                        <option value="voiture">Voiture</option>
                        <option value="moto">Moto/Scooter</option>
                        <option value="utilitaire">Utilitaire</option>
                        <option value="poids-lourd">Poids lourd</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description du problème
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-france-blue focus:border-transparent transition-all"
                      placeholder="Décrivez votre situation..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-france-blue to-france-red hover:from-france-blue-light hover:to-france-red-light text-white py-3 rounded-lg font-bold flex items-center justify-center space-x-2 transition-all shadow-lg hover-lift"
                  >
                    <Send size={20} />
                    <span>Envoyer la demande</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-france-blue to-france-red rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Urgence ? Appelez-nous !</h3>
              <p className="text-lg mb-6">
                Pour une intervention immédiate, contactez-nous directement par téléphone. 
                Notre équipe est prête à intervenir en moins de 30 minutes.
              </p>
              <a
                href="tel:0698282304"
                className="inline-flex items-center space-x-2 bg-white text-france-blue hover:bg-gray-100 px-6 py-3 rounded-full font-bold transition-all"
              >
                <Phone size={24} />
                <span className="text-xl">06 98 28 23 04</span>
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-france-blue">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="text-gray-600 hover:text-france-blue transition-colors">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h4 className="font-bold text-gray-800 mb-4">Nos garanties</h4>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Intervention en 30 minutes
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Agréé toutes assurances
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Devis gratuit et transparent
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Professionnels certifiés
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
