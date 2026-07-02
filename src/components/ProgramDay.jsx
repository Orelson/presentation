import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, Award, Briefcase, Mic2, Coffee, ArrowRight, Calendar, Sparkles, ChevronRight } from 'lucide-react';

export const ProgramDay = ({ days }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 min-h-full items-stretch">
      {days.map((day, idx) => {
        const colorStyles = {
          'camept-blue': 'border-t-camept-blue bg-white hover:border-t-camept-blue-light',
          'camept-orange': 'border-t-camept-orange bg-white hover:border-t-camept-orange-light',
          'camept-green': 'border-t-camept-green bg-white hover:border-t-camept-green-light',
        };
        const headerStyles = {
          'camept-blue': 'bg-gradient-to-r from-camept-blue to-camept-dark text-white',
          'camept-orange': 'bg-gradient-to-r from-camept-orange to-amber-600 text-white',
          'camept-green': 'bg-gradient-to-r from-camept-green to-emerald-800 text-white',
        };
        const badgeStyles = {
          'camept-blue': 'bg-blue-50 text-camept-blue border-blue-200',
          'camept-orange': 'bg-orange-50 text-camept-orange border-orange-200',
          'camept-green': 'bg-green-50 text-camept-green border-green-200',
        };
        const iconColors = {
          'camept-blue': 'text-camept-blue bg-blue-100/60',
          'camept-orange': 'text-camept-orange bg-orange-100/60',
          'camept-green': 'text-camept-green bg-green-100/60',
        };

        return (
          <motion.div
            key={day.dayNumber}
            className={`border-t-8 rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden flex flex-col justify-between bg-white ${colorStyles[day.color] || colorStyles['camept-blue']}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.12 }}
          >
            <div className="flex-1 flex flex-col justify-start">
              {/* Header with geometric angle */}
              <div className={`p-4 sm:p-5 ${headerStyles[day.color] || headerStyles['camept-blue']}`}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-camept-yellow flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{day.dayNumber}</span>
                  </span>
                  <span className="text-2xs sm:text-xs px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold">
                    {day.date}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-extrabold leading-tight tracking-tight">
                  {day.title}
                </h3>
              </div>

              {/* Full Theme Box (NO TRUNCATION!) */}
              <div className="p-3 sm:p-4 bg-gray-50/80 border-b border-gray-100">
                <div className={`p-2.5 rounded-lg border text-2xs sm:text-xs font-semibold leading-relaxed ${badgeStyles[day.color] || badgeStyles['camept-blue']}`}>
                  <span className="font-extrabold uppercase tracking-wider block text-[10px] sm:text-2xs opacity-75 mb-0.5">
                    Thème Directeur :
                  </span>
                  <p className="text-gray-800 font-bold italic">
                    « {day.theme} »
                  </p>
                </div>
              </div>

              {/* Highlights - Formatted as structured rows to eliminate empty voids */}
              <div className="p-4 sm:p-5 space-y-2.5 flex-1 flex flex-col justify-start">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-1">
                  <span className="text-2xs sm:text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-camept-orange flex-shrink-0" />
                    <span>Temps Forts du Jour</span>
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                    4 sessions clés
                  </span>
                </div>

                {day.highlights.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-2.5 sm:p-3 rounded-lg bg-camept-bg hover:bg-gray-100/80 transition-colors border border-gray-100 flex items-start space-x-2.5 text-2xs sm:text-xs text-gray-800 font-medium"
                  >
                    <div className={`p-1 rounded flex-shrink-0 mt-0.5 ${iconColors[day.color] || iconColors['camept-blue']}`}>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-snug break-words flex-1 font-semibold text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom clickable action bar */}
            <div className="p-3 sm:p-3.5 bg-gray-50 border-t border-gray-200/80 text-right flex items-center justify-between text-camept-blue hover:text-camept-orange font-bold text-2xs sm:text-xs transition-colors cursor-pointer group">
              <span className="text-gray-500 font-medium group-hover:text-gray-700">Découvrir le déroulé</span>
              <span className="inline-flex items-center gap-1">
                <span>Agendas détaillés</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export const DailyTimeline = ({ timeline }) => {
  const getTypeBadge = (type) => {
    switch (type) {
      case 'plenary':
        return { label: 'Plénière VIP', color: 'bg-camept-blue text-white shadow-2xs', icon: Mic2, border: 'border-l-camept-blue' };
      case 'panel':
        return { label: 'Panel Sectoriel', color: 'bg-camept-green text-white shadow-2xs', icon: Mic2, border: 'border-l-camept-green' };
      case 'boardroom':
        return { label: 'Boardroom Deal', color: 'bg-gradient-to-r from-camept-orange to-amber-600 text-white font-extrabold shadow-sm', icon: Briefcase, border: 'border-l-camept-orange' };
      case 'networking':
        return { label: 'Networking', color: 'bg-camept-yellow text-camept-darker font-extrabold shadow-2xs', icon: Coffee, border: 'border-l-camept-yellow' };
      default:
        return { label: 'Officiel', color: 'bg-gray-200 text-gray-800', icon: Award, border: 'border-l-gray-400' };
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 lg:gap-3.5 items-stretch w-full">
      {timeline.map((item, idx) => {
        const badge = getTypeBadge(item.type);
        const IconComp = badge.icon;

        return (
          <motion.div
            key={idx}
            className={`flex flex-col justify-between p-3 sm:p-3.5 bg-white rounded-xl shadow-2xs hover:shadow-md border border-gray-100 border-l-4 ${badge.border} transition-all duration-200 gap-2 h-full`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: idx * 0.04 }}
          >
            {/* Top row: Time + Badge */}
            <div className="flex items-center justify-between gap-2 border-b border-gray-100 pb-2">
              <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded bg-camept-bg text-camept-dark font-mono font-bold text-2xs sm:text-xs">
                <Clock className="w-3 h-3 text-camept-blue flex-shrink-0" />
                <span>{item.time}</span>
              </div>

              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] sm:text-2xs uppercase tracking-wider font-bold ${badge.color}`}>
                <IconComp className="w-3 h-3 flex-shrink-0" />
                <span className="truncate max-w-[100px] sm:max-w-none">{badge.label}</span>
              </span>
            </div>

            {/* Middle: Title + Desc */}
            <div className="flex-1 flex flex-col justify-start py-0.5">
              <h4 className="text-xs sm:text-sm lg:text-base font-extrabold text-gray-800 leading-snug break-words mb-1">
                {item.title}
              </h4>
              {item.desc && (
                <p className="text-2xs sm:text-xs text-gray-600 leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
