import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export const StatCard = ({
  value,
  unit = '',
  label,
  sublabel = '',
  icon,
  accent = 'blue', // 'blue', 'orange', 'green', 'yellow', 'dark'
  delay = 0,
  className = ''
}) => {
  const IconComponent = icon && Icons[icon] ? Icons[icon] : null;

  const accentStyles = {
    blue: 'border-t-camept-blue bg-gradient-to-br from-white via-white to-blue-50/30 text-camept-dark',
    orange: 'border-t-camept-orange bg-gradient-to-br from-white via-white to-orange-50/30 text-camept-dark',
    green: 'border-t-camept-green bg-gradient-to-br from-white via-white to-green-50/30 text-camept-dark',
    yellow: 'border-t-camept-yellow bg-gradient-to-br from-camept-dark via-black to-camept-darker text-white',
    dark: 'border-t-camept-orange bg-gradient-to-br from-camept-dark via-black to-camept-darker text-white',
  };

  const iconBgStyles = {
    blue: 'bg-camept-blue/10 text-camept-blue border-camept-blue/20',
    orange: 'bg-camept-orange/10 text-camept-orange border-camept-orange/20',
    green: 'bg-camept-green/10 text-camept-green border-camept-green/20',
    yellow: 'bg-camept-yellow/20 text-camept-yellow border-camept-yellow/30',
    dark: 'bg-white/10 text-camept-orange border-white/15',
  };

  const barStyles = {
    blue: 'bg-gradient-to-r from-camept-blue to-camept-cyan',
    orange: 'bg-gradient-to-r from-camept-orange to-amber-500',
    green: 'bg-gradient-to-r from-camept-green to-emerald-500',
    yellow: 'bg-gradient-to-r from-camept-yellow to-amber-300',
    dark: 'bg-gradient-to-r from-camept-orange to-camept-yellow',
  };

  return (
    <motion.div
      className={`p-5 sm:p-6 lg:p-7 rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 border border-gray-100 border-t-8 relative overflow-hidden flex flex-col justify-center ${accentStyles[accent] || accentStyles.blue} ${className}`}
      initial={{ opacity: 0, scale: 0.96, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top right floating icon badge */}
      {IconComponent && (
        <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center border shadow-2xs ${iconBgStyles[accent] || iconBgStyles.blue}`}>
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>
      )}

      {/* Structured Content Block - Perfectly grouped in center without empty voids */}
      <div className="my-auto pr-12">
        {/* Number & Unit */}
        <div className="flex items-baseline space-x-1.5 flex-wrap mb-2 sm:mb-2.5">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-sans drop-shadow-2xs">
            {value}
          </span>
          {unit && (
            <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-wider px-2 py-0.5 rounded ${accent === 'dark' || accent === 'yellow' ? 'bg-white/10 text-camept-yellow' : 'bg-gray-100 text-camept-orange'}`}>
              {unit}
            </span>
          )}
        </div>

        {/* Architectural divider bar */}
        <div className={`w-12 sm:w-16 h-1.5 rounded-full mb-3 sm:mb-4 shadow-2xs ${barStyles[accent] || barStyles.blue}`} />

        {/* Labels */}
        <div>
          <h4 className="text-sm sm:text-base md:text-lg font-extrabold leading-snug mb-1">
            {label}
          </h4>
          {sublabel && (
            <p className={`text-xs sm:text-sm leading-relaxed font-medium ${accent === 'dark' || accent === 'yellow' ? 'text-gray-300' : 'text-gray-600'}`}>
              {sublabel}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const InfoCard = ({
  title,
  description,
  icon,
  color = 'blue',
  badge = '',
  delay = 0,
  className = ''
}) => {
  const IconComponent = icon && Icons[icon] ? Icons[icon] : null;

  const colorStyles = {
    blue: 'border-l-8 border-camept-blue bg-white text-camept-dark shadow-card hover:shadow-elevated',
    orange: 'border-l-8 border-camept-orange bg-white text-camept-dark shadow-card hover:shadow-elevated',
    green: 'border-l-8 border-camept-green bg-white text-camept-dark shadow-card hover:shadow-elevated',
    yellow: 'border-l-8 border-camept-yellow bg-camept-bg-alt text-camept-dark shadow-card hover:shadow-elevated',
    dark: 'border-l-8 border-camept-orange bg-gradient-to-br from-camept-dark via-black to-camept-dark text-white shadow-elevated',
  };

  const iconColors = {
    blue: 'text-camept-blue bg-blue-50 border-blue-100',
    orange: 'text-camept-orange bg-orange-50 border-orange-100',
    green: 'text-camept-green bg-green-50 border-green-100',
    yellow: 'text-camept-darker bg-yellow-100 border-yellow-200',
    dark: 'text-camept-yellow bg-white/10 border-white/15',
  };

  return (
    <motion.div
      className={`p-4 sm:p-5 rounded-xl transition-all duration-300 border border-gray-100/80 flex flex-col justify-between ${colorStyles[color] || colorStyles.blue} ${className}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex-1 flex flex-col justify-start">
        {/* Top row: Icon badge & optional Tag */}
        <div className="flex items-center justify-between mb-3 gap-2">
          {IconComponent ? (
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-2xs ${iconColors[color] || iconColors.blue}`}>
              <IconComponent className="w-5 h-5 flex-shrink-0" />
            </div>
          ) : <div />}

          {badge && (
            <span className={`text-[10px] sm:text-2xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${color === 'dark' ? 'bg-camept-orange text-white shadow-2xs' : 'bg-camept-orange/10 text-camept-orange border border-camept-orange/20'}`}>
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h4 className="text-sm sm:text-base font-black leading-snug break-words mb-2">
          {title}
        </h4>

        {/* Subtle accent divider */}
        <div className={`w-8 h-1 rounded-full mb-2.5 opacity-60 ${color === 'dark' ? 'bg-camept-yellow' : 'bg-current'}`} />

        {/* Description */}
        <p className={`text-xs sm:text-sm leading-relaxed font-medium ${color === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};
