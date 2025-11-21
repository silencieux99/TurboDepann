import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation, Activity, Car } from 'lucide-react';

const MapSearchAnimation = ({ onComplete, driverInfo }) => {
  const [phase, setPhase] = useState(0);
  const [radarRotation, setRadarRotation] = useState(0);

  useEffect(() => {
    // Phase timeline sur 8 secondes
    const timeline = [
      { delay: 0, phase: 1 },      // Start scanning
      { delay: 2000, phase: 2 },   // Points appearing
      { delay: 4000, phase: 3 },   // Connecting lines
      { delay: 6000, phase: 4 },   // Route drawing
      { delay: 7500, phase: 5 },   // Found
    ];

    timeline.forEach(({ delay, phase }) => {
      setTimeout(() => setPhase(phase), delay);
    });

    // Radar rotation
    const radarInterval = setInterval(() => {
      setRadarRotation(prev => prev + 45);
    }, 500);

    // Complete after 8 seconds
    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 8000);

    return () => {
      clearInterval(radarInterval);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  // Generate random points for the map
  const mapPoints = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
    delay: Math.random() * 0.5,
    isTarget: i === 5
  }));

  const phaseTexts = {
    0: "Initialisation...",
    1: "Scan satellites GPS...",
    2: "Localisation des dépanneurs...",
    3: "Analyse des trajets...",
    4: "Calcul de l'itinéraire optimal...",
    5: "Dépanneur trouvé !"
  };

  return (
    <div className="relative w-full h-64 sm:h-80 bg-gradient-to-br from-gray-900/95 via-france-blue/20 to-gray-900/95 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl">
      
      {/* Grid background effect */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Radar scanner effect */}
      <AnimatePresence>
        {phase >= 1 && phase <= 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: radarRotation }}
              transition={{ duration: 0.5, ease: "linear" }}
              className="relative w-48 h-48 sm:w-64 sm:h-64"
            >
              {/* Radar circles */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: ring * 0.2, duration: 0.5 }}
                  className={`absolute inset-0 border border-france-blue/30 rounded-full`}
                  style={{
                    width: `${ring * 33}%`,
                    height: `${ring * 33}%`,
                    top: `${50 - (ring * 33) / 2}%`,
                    left: `${50 - (ring * 33) / 2}%`,
                  }}
                />
              ))}
              
              {/* Radar sweep */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `conic-gradient(from 0deg, transparent, rgba(0, 35, 149, 0.5) 30deg, transparent 90deg)`,
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Map points appearing */}
      <AnimatePresence>
        {phase >= 2 && (
          <div className="absolute inset-0">
            {mapPoints.map((point) => (
              <motion.div
                key={point.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: point.isTarget ? [1, 1.3, 1] : 1, 
                  opacity: 1 
                }}
                transition={{
                  delay: point.delay,
                  duration: 0.5,
                  scale: point.isTarget ? {
                    repeat: Infinity,
                    duration: 1.5
                  } : undefined
                }}
                className="absolute"
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
              >
                <div className={`relative ${point.isTarget ? 'z-20' : 'z-10'}`}>
                  {/* Pulse effect for points */}
                  {phase >= 3 && (
                    <motion.div
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        delay: point.delay 
                      }}
                      className={`absolute inset-0 ${
                        point.isTarget ? 'bg-france-red' : 'bg-france-blue'
                      } rounded-full`}
                      style={{ width: 20, height: 20, marginLeft: -10, marginTop: -10 }}
                    />
                  )}
                  
                  {/* Main point */}
                  <div className={`relative w-3 h-3 ${
                    point.isTarget ? 'bg-france-red' : 'bg-france-blue'
                  } rounded-full shadow-lg`}>
                    {point.isTarget && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Car className="text-white absolute -top-2 -left-2" size={20} />
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Connecting lines */}
      <AnimatePresence>
        {phase >= 3 && (
          <svg className="absolute inset-0 w-full h-full z-0">
            {mapPoints.slice(0, 5).map((point, i) => {
              const nextPoint = mapPoints[i + 1];
              if (!nextPoint) return null;
              
              return (
                <motion.line
                  key={`line-${i}`}
                  x1={`${point.x}%`}
                  y1={`${point.y}%`}
                  x2={`${nextPoint.x}%`}
                  y2={`${nextPoint.y}%`}
                  stroke="rgba(0, 35, 149, 0.5)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  strokeDasharray="5 5"
                />
              );
            })}
          </svg>
        )}
      </AnimatePresence>

      {/* Route drawing */}
      <AnimatePresence>
        {phase >= 4 && (
          <svg className="absolute inset-0 w-full h-full z-5">
            <motion.path
              d={`M ${mapPoints[0].x}% ${mapPoints[0].y}% Q 50% 50% ${mapPoints[5].x}% ${mapPoints[5].y}%`}
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#002395" />
                <stop offset="100%" stopColor="#ED2939" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </AnimatePresence>

      {/* Success indicator */}
      <AnimatePresence>
        {phase === 5 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center z-30"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, repeat: 2 }}
              className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-md rounded-full p-8"
            >
              <Navigation className="text-green-400" size={48} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Data stream effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-france-blue to-transparent opacity-30"
            style={{ top: `${20 + i * 10}%` }}
            animate={{ 
              x: ['-100%', '100%'],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Status text with typing effect */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: phase < 5 ? 360 : 0 }}
              transition={{ duration: 1, repeat: phase < 5 ? Infinity : 0, ease: "linear" }}
            >
              <Activity className={`${phase === 5 ? 'text-green-400' : 'text-france-blue'}`} size={20} />
            </motion.div>
            
            <motion.p
              key={phase}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white font-medium text-sm sm:text-base"
            >
              {phaseTexts[phase]}
            </motion.p>
          </div>

          {/* Progress indicators */}
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((step) => (
              <motion.div
                key={step}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: phase >= step ? 1 : 0.5,
                  backgroundColor: phase >= step ? '#ED2939' : '#002395'
                }}
                className="w-2 h-2 rounded-full"
                transition={{ delay: step * 0.1 }}
              />
            ))}
          </div>
        </div>

        {/* Tech info display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="mt-2 flex gap-4 text-xs text-gray-400 font-mono"
        >
          <span>GPS: 48.8566° N</span>
          <span>Signal: {95 - phase * 5}%</span>
          <span>Satellites: {8 + phase}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default MapSearchAnimation;
