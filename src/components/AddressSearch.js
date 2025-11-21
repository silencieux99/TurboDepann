import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Search, Navigation, Phone, Clock, CheckCircle, Car, X } from 'lucide-react';

const AddressSearch = ({ isMobile }) => {
  const [address, setAddress] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [showMap, setShowMap] = useState(false);

  const getRandomTime = () => {
    // Générer un temps aléatoire entre 12 et 19 minutes
    return Math.floor(Math.random() * 8) + 12;
  };

  const getRandomDistance = () => {
    // Générer une distance aléatoire entre 3.5 et 8.5 km
    return (Math.random() * 5 + 3.5).toFixed(1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!address.trim()) return;

    setIsSearching(true);
    setShowMap(true);

    // Simuler une recherche
    setTimeout(() => {
      setSearchResult({
        time: getRandomTime(),
        distance: getRandomDistance(),
        driver: 'Jean-Michel',
        vehicle: 'Mercedes Sprinter',
        rating: '4.9',
        interventions: '1847'
      });
      setIsSearching(false);
    }, 2500);
  };

  const resetSearch = () => {
    setAddress('');
    setSearchResult(null);
    setShowMap(false);
  };

  return (
    <div className="w-full">
      {!searchResult ? (
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-france-blue">
              <MapPin size={20} />
            </div>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Entrez votre adresse (ex: 15 rue de la Paix, Paris)"
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-france-blue focus:border-transparent transition-all"
              disabled={isSearching}
            />
            <button
              type="submit"
              disabled={isSearching || !address.trim()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-france-blue to-france-red text-white p-3 rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Villes suggérées */}
          <div className="flex flex-wrap gap-2">
            <span className="text-gray-400 text-sm">Suggestion:</span>
            {['Paris', 'Versailles', 'Créteil', 'Nanterre'].map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => setAddress(city)}
                className="text-sm px-3 py-1 bg-white/10 text-gray-300 rounded-full hover:bg-white/20 transition-all"
              >
                {city}
              </button>
            ))}
          </div>
        </form>
      ) : null}

      {/* Animation de recherche */}
      <AnimatePresence>
        {isSearching && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-6 text-center"
          >
            <div className="inline-flex items-center justify-center w-full">
              <div className="relative w-full max-w-md h-48 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden">
                {/* Effet de carte animé */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-32 h-32 bg-gradient-to-r from-france-blue to-france-red rounded-full opacity-20"
                  />
                </div>
                
                {/* Points animés sur la carte */}
                <motion.div
                  animate={{ 
                    x: [0, 50, -30, 20, 0],
                    y: [0, -20, 30, -10, 0]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-4 h-4 bg-france-red rounded-full animate-pulse" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    x: [0, -40, 30, -20, 0],
                    y: [0, 30, -20, 10, 0]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2"
                >
                  <div className="w-3 h-3 bg-france-blue rounded-full animate-pulse" />
                </motion.div>

                {/* Texte de recherche */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-white text-sm font-medium"
                  >
                    <Navigation className="inline mr-2" size={16} />
                    Recherche du dépanneur le plus proche...
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Résultat de recherche */}
      <AnimatePresence>
        {searchResult && !isSearching && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/20">
              {/* En-tête avec succès */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={24} />
                  <span className="text-green-400 font-semibold">Dépanneur trouvé !</span>
                </div>
                <button
                  onClick={resetSearch}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Nouvelle recherche
                </button>
              </div>

              {/* Informations principales */}
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Temps d'arrivée</span>
                    <Clock className="text-france-blue" size={16} />
                  </div>
                  <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="text-3xl font-bold text-white"
                  >
                    {searchResult.time} min
                  </motion.p>
                  <p className="text-gray-400 text-xs mt-1">Distance: {searchResult.distance} km</p>
                </div>

                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Technicien</span>
                    <Car className="text-france-red" size={16} />
                  </div>
                  <p className="text-xl font-bold text-white">{searchResult.driver}</p>
                  <p className="text-gray-400 text-xs mt-1">
                    ⭐ {searchResult.rating} • {searchResult.interventions} interventions
                  </p>
                </div>
              </div>

              {/* Véhicule */}
              <div className="bg-white/5 rounded-xl p-3 mb-4">
                <p className="text-gray-400 text-sm">
                  Véhicule: <span className="text-white font-medium">{searchResult.vehicle}</span>
                </p>
              </div>

              {/* Boutons d'action */}
              <div className="grid md:grid-cols-2 gap-4">
                <motion.a
                  href="tel:0123456789"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-france-red to-france-red-light text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <Phone className="animate-pulse" size={20} />
                  <span>Appeler maintenant</span>
                </motion.a>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white py-4 rounded-full font-bold hover:bg-white/20 transition-all"
                >
                  Confirmer l'intervention
                </motion.button>
              </div>

              {/* Indicateur live */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-4 text-center"
              >
                <p className="text-green-400 text-sm flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Le technicien se prépare pour l'intervention
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddressSearch;
