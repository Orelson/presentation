import React from 'react';
import { motion } from 'framer-motion';

export const ProgressBar = ({ currentSlide, totalSlides }) => {
  const percentage = (currentSlide / totalSlides) * 100;

  return (
    <div className="no-print absolute top-0 left-0 right-0 h-1.5 bg-gray-200/80 z-50 overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-camept-blue via-camept-orange to-camept-yellow shadow-sm"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />
    </div>
  );
};
