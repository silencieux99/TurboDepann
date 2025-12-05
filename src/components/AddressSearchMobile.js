import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Search, Phone, Clock, Car, User, Star, X, Shield, CheckCircle, Loader } from 'lucide-react';
import MapSearchAnimation from './MapSearchAnimation';

const AddressSearchMobile = ({ isMobile }) => {
  const [address, setAddress] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const debounceTimer = useRef(null);

  const getRandomTime = () => Math.floor(Math.random() * 8) + 12;
  const getRandomDistance = () => (Math.random() * 5 + 3.5).toFixed(1);

  // Fonction pour appeler l'API Adresse du gouvernement français
  const fetchAddressSuggestions = async (query) => {
    if (query.length < 3) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setIsLoadingSuggestions(true);
    
    try {
      const response = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}&limit=6`
      );
      const data = await response.json();
      
      if (data.features && data.features.length > 0) {
        const formattedSuggestions = data.features.map(feature => ({
          label: feature.properties.label,
          city: feature.properties.city,
          postcode: feature.properties.postcode,
          context: feature.properties.context,
          coordinates: feature.geometry.coordinates
        }));
        setSuggestions(formattedSuggestions);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    } catch (error) {
      console.error('Erreur lors de la recherche d\'adresse:', error);
      setSuggestions([]);
      setShowSuggestions(false);
    } finally {
      setIsLoadingSuggestions(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!address.trim()) return;

    setIsSearching(true);
  };

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddress(value);

    // Debounce pour éviter trop d'appels API
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      fetchAddressSuggestions(value);
    }, 300); // Attendre 300ms après la dernière frappe
  };

  const handleAddressFocus = () => {
    if (address.length >= 3) {
      fetchAddressSuggestions(address);
    }
  };

  const handleAddressBlur = () => {
    // Délai pour permettre le clic sur les suggestions
    setTimeout(() => {
      setShowSuggestions(false);
    }, 300);
  };

  const selectSuggestion = (suggestion) => {
    setAddress(suggestion.label);
    setShowSuggestions(false);
    setSuggestions([]);
  };

  // Cleanup du timer au démontage
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  const resetSearch = () => {
    setAddress('');
    setSearchResult(null);
    setShowSuggestions(false);
    setSuggestions([]);
  };

  const handleAnimationComplete = () => {
    setSearchResult({
      time: getRandomTime(),
      distance: getRandomDistance(),
      driver: 'Jean-Michel D.',
      vehicle: 'Mercedes Sprinter',
      rating: '4.9',
      interventions: Math.floor(Math.random() * 1000) + 500
    });
    setIsSearching(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!searchResult ? (
          <motion.div
            key="search"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Search Form */}
            <form onSubmit={handleSearch} className="space-y-3 relative">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                  <MapPin className="text-white/70" size={20} />
                </div>
                <input
                  type="text"
                  value={address}
                  onChange={handleAddressChange}
                  onFocus={handleAddressFocus}
                  onBlur={handleAddressBlur}
                  placeholder="Où êtes-vous ? (ex: Paris, Versailles...)"
                  className="w-full pl-12 pr-16 py-4 sm:py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-france-blue focus:border-transparent transition-all text-sm sm:text-base"
                  disabled={isSearching}
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={isSearching || !address.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-gradient-to-r from-france-blue to-france-red text-white rounded-xl hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed z-10"
                >
                  <Search size={20} />
                </button>
              </div>

              {/* Address Suggestions from API */}
              <AnimatePresence>
                {showSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 z-50 mt-2 bg-white rounded-2xl shadow-2xl overflow-hidden max-h-80 overflow-y-auto"
                  >
                    {isLoadingSuggestions ? (
                      <div className="flex items-center justify-center py-4">
                        <Loader className="animate-spin text-france-blue" size={24} />
                        <span className="ml-2 text-gray-600 text-sm">Recherche...</span>
                      </div>
                    ) : suggestions.length > 0 ? (
                      suggestions.map((suggestion, index) => (
                        <button
                          key={`${suggestion.label}-${index}`}
                          type="button"
                          onMouseDown={(e) => {
                            e.preventDefault();
                            selectSuggestion(suggestion);
                          }}
                          className="w-full px-4 py-3 text-left text-gray-800 hover:bg-france-blue/10 active:bg-france-blue/20 transition-colors flex items-start gap-3 border-b border-gray-100 last:border-b-0"
                        >
                          <MapPin size={16} className="text-france-blue flex-shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{suggestion.label}</p>
                            {suggestion.context && (
                              <p className="text-xs text-gray-500 mt-0.5">{suggestion.context}</p>
                            )}
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-center text-gray-500 text-sm">
                        Aucune adresse trouvée
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quick Cities - Hidden when suggestions are shown */}
              {!showSuggestions && (
                <div className="flex flex-wrap gap-2">
                  {['Paris', 'Versailles', 'Créteil', 'Nanterre'].map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => setAddress(city)}
                      className="text-xs sm:text-sm px-3 py-1.5 bg-white/10 text-gray-300 rounded-full hover:bg-white/20 transition-all"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </form>

            {/* Advanced Map Search Animation - 8 seconds */}
            <AnimatePresence>
              {isSearching && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6"
                >
                  <MapSearchAnimation 
                    onComplete={handleAnimationComplete}
                    driverInfo={{
                      name: 'Jean-Michel D.',
                      vehicle: 'Mercedes Sprinter'
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Result Card - Mobile Optimized with Enhanced Animations */
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              stiffness: 100
            }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 relative overflow-hidden"
          >
            {/* Animated background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-france-blue/10 via-transparent to-france-red/10"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            {/* Success Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Trouvé !</span>
              </div>
              <button
                onClick={resetSearch}
                className="text-gray-400 hover:text-white p-1"
              >
                <X size={16} />
              </button>
            </div>

            {/* Main Info - Mobile Layout with Staggered Animations */}
            <div className="space-y-3 mb-4 relative z-10">
              {/* Time & Distance with Counter Animation */}
              <div className="flex gap-3">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex-1 bg-white/5 rounded-xl p-3"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="text-france-blue" size={14} />
                    <span className="text-xs text-gray-400">Arrivée</span>
                  </div>
                  <motion.p 
                    className="text-2xl font-bold text-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    {searchResult.time}min
                  </motion.p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex-1 bg-white/5 rounded-xl p-3"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="text-france-red" size={14} />
                    <span className="text-xs text-gray-400">Distance</span>
                  </div>
                  <motion.p 
                    className="text-2xl font-bold text-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  >
                    {searchResult.distance}km
                  </motion.p>
                </motion.div>
              </div>

              {/* Driver Info - Enhanced with Animations */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/5 rounded-xl p-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ delay: 0.6, type: "spring" }}
                      className="w-10 h-10 bg-gradient-to-br from-france-blue to-france-red rounded-full flex items-center justify-center"
                    >
                      <User size={20} className="text-white" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-white">{searchResult.driver}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + i * 0.05 }}
                          >
                            <Star 
                              size={12} 
                              className={i < Math.floor(parseFloat(searchResult.rating)) ? "text-yellow-400 fill-yellow-400" : "text-gray-600"} 
                            />
                          </motion.div>
                        ))}
                        <span className="text-xs text-gray-400 ml-1">{searchResult.rating}</span>
                        <span className="text-xs text-gray-400">• {searchResult.interventions} interventions</span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Shield className="text-green-400" size={20} />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons - Enhanced with Animations */}
            <div className="space-y-2 relative z-10">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                href="tel:0698282304"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full bg-gradient-to-r from-france-red to-france-red-light text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <Phone size={18} className="animate-pulse relative z-10" />
                <span className="relative z-10">Appeler maintenant</span>
              </motion.a>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                onClick={resetSearch}
                className="w-full bg-gradient-to-r from-france-blue to-france-blue-light text-white py-3 rounded-xl font-medium hover:from-france-blue-light hover:to-france-blue transition-all backdrop-blur-sm shadow-md"
              >
                Nouvelle recherche
              </motion.button>
            </div>

            {/* Live Status with Pulse Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-3 relative"
            >
              <motion.div
                className="absolute inset-0 bg-green-400/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center text-green-400 text-xs relative z-10 flex items-center justify-center gap-2"
              >
                <CheckCircle size={14} />
                Le technicien se prépare • ETA: {searchResult.time} min
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddressSearchMobile;
