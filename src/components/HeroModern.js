import React, { useCallback, useMemo, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Clock, MapPin, Shield, Star, ChevronDown, Zap, Award, Users } from 'lucide-react';
import { Link } from 'react-scroll';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Tilt } from 'react-tilt';
import { ReactTyped as Typed } from 'react-typed';
import useIsMobile from '../hooks/useIsMobile';
import AddressSearchMobile from './AddressSearchMobile';

const HeroModern = () => {
  const [particlesLoaded, setParticlesLoaded] = useState(false);
  const { isMobile, isTablet } = useIsMobile();
  const [showAddressSearch, setShowAddressSearch] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#002395", "#ED2939", "#ffffff"],
        },
        links: {
          color: "#002395",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const stats = [
    { icon: <Zap />, value: "30min", label: "Intervention" },
    { icon: <Users />, value: "5000+", label: "Clients satisfaits" },
    { icon: <Award />, value: "15ans", label: "D'expérience" },
    { icon: <Star />, value: "4.9/5", label: "Satisfaction" }
  ];

  return (
    <section id="hero" className="relative min-h-screen overflow-x-hidden overflow-y-visible bg-gradient-to-br from-gray-900 via-france-blue to-gray-900 pt-20 sm:pt-24">
      {/* Animated Background Gradient - Simplified for mobile */}
      {!isMobile ? (
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #002395 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, #ED2939 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #002395 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-france-blue/20 to-france-red/20 opacity-30" />
      )}

      {/* Particles Background - Disabled on mobile */}
      {!isMobile && !isTablet && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0"
        />
      )}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
            
            {/* Left Content - Text */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? -20 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: isMobile ? 0.4 : 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center px-4 py-2 bg-france-red/20 border border-france-red/30 rounded-full mb-6 backdrop-blur-sm"
              >
                <span className="w-2 h-2 bg-france-red rounded-full animate-pulse mr-2"></span>
                <span className="text-white text-sm font-medium">Service disponible 24/7</span>
              </motion.div>

              {/* Main Title with Gradient */}
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <motion.span
                  className="block text-white mb-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Dépannage
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-france-blue via-white to-france-red bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Typed
                    strings={['Ultra Rapide', 'Professionnel', 'Garanti']}
                    typeSpeed={100}
                    backSpeed={50}
                    loop
                  />
                </motion.span>
                <motion.span
                  className="block text-white text-3xl lg:text-5xl mt-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  en Île-de-France
                </motion.span>
              </h1>

              {/* Description */}
              <motion.p
                className="text-xl text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Votre véhicule en panne ? <strong className="text-white">Turbo'Depann</strong> intervient 
                en <strong className="text-france-red">30 minutes chrono</strong>. 
                Service premium avec les meilleurs techniciens d'Île-de-France.
              </motion.p>

              {/* Address Search - Always visible */}
              <motion.div
                className="mb-6 mt-6"
                initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: isMobile ? 0.3 : 0.5 }}
              >
                <AddressSearchMobile isMobile={isMobile} />
              </motion.div>
              
              {/* Quick Call Button */}
              <motion.div
                className="flex justify-center sm:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <motion.a
                  href="tel:0698282304"
                  whileHover={!isMobile ? { scale: 1.05 } : {}}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone size={16} className="animate-pulse" />
                  <span className="text-sm">Appel direct: 06 98 28 23 04</span>
                </motion.a>
              </motion.div>

              {/* Features Grid - Mobile Optimized */}
              {isMobile ? (
                <motion.div
                  className="grid grid-cols-2 gap-2 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center">
                    <Clock className="text-france-blue mx-auto mb-1" size={24} />
                    <span className="text-xs text-gray-300 block">30min</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center">
                    <Shield className="text-france-red mx-auto mb-1" size={24} />
                    <span className="text-xs text-gray-300 block">Agréé</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center">
                    <MapPin className="text-france-blue mx-auto mb-1" size={24} />
                    <span className="text-xs text-gray-300 block">Île-de-France</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center">
                    <Star className="text-france-red mx-auto mb-1" size={24} />
                    <span className="text-xs text-gray-300 block">4.9/5</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="grid grid-cols-2 gap-4 mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                >
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="p-2 bg-france-blue/20 rounded-lg backdrop-blur-sm">
                      <Clock className="text-france-blue" size={20} />
                    </div>
                    <span className="text-sm">Intervention 30 min</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="p-2 bg-france-blue/20 rounded-lg backdrop-blur-sm">
                      <Shield className="text-france-blue" size={20} />
                    </div>
                    <span className="text-sm">Agréé Assurances</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="p-2 bg-france-blue/20 rounded-lg backdrop-blur-sm">
                      <MapPin className="text-france-blue" size={20} />
                    </div>
                    <span className="text-sm">Toute l'Île-de-France</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <div className="p-2 bg-france-blue/20 rounded-lg backdrop-blur-sm">
                      <Star className="text-france-blue" size={20} />
                    </div>
                    <span className="text-sm">4.9/5 Satisfaction</span>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Right Content - 3D Card - Hidden on mobile for better UX */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Tilt
                  className="Tilt"
                  options={{ 
                    max: 15,
                    perspective: 1500,
                    scale: 1.02,
                    speed: 2000,
                    transition: true,
                    axis: null,
                    reset: true,
                    easing: "cubic-bezier(.03,.98,.52,.99)"
                  }}
                >
                  <div className="relative">
                    {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-france-blue via-white to-france-red rounded-3xl opacity-30 blur-2xl animate-pulse"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                    {/* Animated Circle Background */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        className="w-64 h-64 bg-gradient-to-r from-france-blue to-france-red rounded-full opacity-20 blur-3xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-center mb-8">
                        <motion.div
                          animate={{ 
                            rotateY: [0, 360],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="inline-block mb-4"
                        >
                          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-france-blue to-france-red rounded-full flex items-center justify-center">
                            <Shield className="text-white" size={48} />
                          </div>
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-2">Service Premium</h3>
                        <p className="text-gray-400">Excellence & Rapidité</p>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 + index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
                          >
                            <div className="text-france-blue mb-2">{stat.icon}</div>
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                            <div className="text-xs text-gray-400">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Live Status */}
                      <motion.div
                        className="mt-6 flex items-center justify-center gap-2 text-green-400"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span className="text-sm">3 équipes disponibles maintenant</span>
                      </motion.div>
                    </div>
                  </div>
                  </div>
                </Tilt>

              {/* Floating Elements - Hidden on mobile to prevent overflow */}
              {!isMobile && !isTablet && (
                <>
                  <motion.div
                    animate={{ 
                      y: [-10, 10, -10],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-0 right-0 bg-gradient-to-r from-france-red to-france-red-light text-white px-6 py-3 rounded-full font-bold shadow-xl hidden lg:block"
                  >
                    URGENCE 24/7
                  </motion.div>

                  <motion.div
                    animate={{ 
                      y: [10, -10, 10],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-4 left-0 bg-gradient-to-r from-france-blue to-france-blue-light text-white px-4 py-2 rounded-full text-sm font-medium shadow-xl hidden lg:block"
                  >
                    ⚡ Intervention Express
                  </motion.div>
                </>
              )}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link to="services" smooth={true} duration={500}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
          >
            <ChevronDown className="text-white/50 hover:text-white transition-colors" size={32} />
          </motion.div>
        </Link>
      </motion.div>

      {/* Custom CSS for Grid Pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default HeroModern;
