import React from 'react';
import { motion } from 'framer-motion';

export const GeometricPanel = ({
  children,
  variant = 'header', // 'header', 'ribbon', 'diagonal-left', 'diagonal-right', 'card-header'
  color = 'blue', // 'blue', 'dark', 'orange', 'green', 'yellow'
  className = '',
  animate = true,
  delay = 0
}) => {
  const colorClasses = {
    blue: 'bg-camept-blue text-white',
    'blue-light': 'bg-camept-blue-light text-white',
    dark: 'bg-camept-dark text-white',
    darker: 'bg-camept-darker text-white',
    orange: 'bg-camept-orange text-white',
    green: 'bg-camept-green text-white',
    yellow: 'bg-camept-yellow text-camept-darker',
    cyan: 'bg-camept-cyan text-white',
  };

  const clipClasses = {
    header: 'clip-angled-header py-4 px-6 md:py-6 md:px-8',
    ribbon: 'clip-ribbon py-2 px-6 shadow-md',
    'diagonal-left': 'clip-diagonal-left p-8 md:p-12',
    'diagonal-right': 'clip-diagonal-right p-8 md:p-12',
    'card-header': 'clip-angled-header py-3 px-5',
    chevron: 'clip-chevron py-3 px-8',
    'chevron-start': 'clip-chevron-start py-3 px-8'
  };

  const baseStyle = `${colorClasses[color] || colorClasses.blue} ${clipClasses[variant] || ''} relative overflow-hidden ${className}`;

  if (!animate) {
    return <div className={baseStyle}>{children}</div>;
  }

  const animations = {
    header: {
      initial: { x: -50, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.5, delay, ease: 'easeOut' }
    },
    ribbon: {
      initial: { scaleX: 0, originX: 0, opacity: 0 },
      animate: { scaleX: 1, opacity: 1 },
      transition: { duration: 0.4, delay, ease: 'easeOut' }
    },
    'diagonal-left': {
      initial: { x: -80, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.6, delay, ease: 'easeOut' }
    },
    'diagonal-right': {
      initial: { x: 80, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.6, delay, ease: 'easeOut' }
    },
    default: {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.5, delay }
    }
  };

  const anim = animations[variant] || animations.default;

  const innerFlexClass = className.includes('flex-col') 
    ? 'flex flex-col justify-between h-full' 
    : className.includes('flex') 
      ? 'flex items-center justify-center gap-2.5 flex-wrap sm:flex-nowrap' 
      : '';

  return (
    <motion.div
      className={baseStyle}
      initial={anim.initial}
      animate={anim.animate}
      transition={anim.transition}
    >
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className={`relative z-10 w-full h-full ${innerFlexClass}`}>{children}</div>
    </motion.div>
  );
};

export const GeometricBadge = ({ text, color = 'orange', className = '' }) => {
  const colorMap = {
    orange: 'bg-camept-orange text-white',
    blue: 'bg-camept-blue text-white',
    yellow: 'bg-camept-yellow text-camept-darker font-bold',
    green: 'bg-camept-green text-white',
    dark: 'bg-camept-dark text-white'
  };

  return (
    <span className={`inline-block px-3 py-1 text-xs md:text-sm uppercase tracking-wider font-semibold rounded-none clip-ribbon shadow-sm ${colorMap[color] || colorMap.orange} ${className}`}>
      {text}
    </span>
  );
};
