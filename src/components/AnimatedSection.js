import React from 'react';
import { motion } from 'framer-motion';
import useIsMobile from '../hooks/useIsMobile';

const AnimatedSection = ({ children, delay = 0, className = '' }) => {
  const { isMobile } = useIsMobile();

  if (isMobile) {
    // Simplified animation for mobile - no viewport tracking
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: delay * 0.5 }}
        viewport={{ once: true, amount: 0.1 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  // Full animation for desktop
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
