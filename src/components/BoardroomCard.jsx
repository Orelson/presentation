import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

// SLIDE 12: BOARDROOMS MECHANICS & PHILOSOPHY (Part 1/2)
export const BoardroomMechanics = ({ features, philosophy }) => {
  const iconsList = ['Building2', 'Mail', 'Clock', 'Lock'];

  return (
    <div className="flex flex-col justify-start gap-5 sm:gap-6 w-full h-full">
      {/* 2x2 Grid of Operational Rules - Spacious, Aerated, Executive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 items-stretch w-full flex-1">
        {features.map((feat, idx) => {
          const iconName = iconsList[idx % iconsList.length];
          const IconComp = Icons[iconName] || Icons.CheckCircle2;

          return (
            <motion.div
              key={idx}
              className="p-6 sm:p-7 lg:p-8 rounded-xl bg-white shadow-card hover:shadow-elevated transition-all duration-300 border border-gray-100 border-l-8 border-camept-blue flex flex-col justify-start relative group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xs sm:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-camept-blue/10 text-camept-blue border border-camept-blue/20">
                  Règle Opérationnelle #{idx + 1}
                </span>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-camept-blue group-hover:scale-110 group-hover:bg-camept-blue group-hover:text-white transition-all duration-300 shadow-2xs">
                  <IconComp className="w-6 h-6 flex-shrink-0" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-camept-dark tracking-tight leading-tight mb-2.5">
                {feat.label}
              </h3>

              <div className="w-12 h-1 rounded-full bg-camept-orange mb-3 opacity-80 group-hover:w-20 transition-all duration-300" />

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                {feat.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Prominent Presidential Philosophy Banner */}
      <motion.div
        className="p-5 sm:p-6 lg:p-7 bg-gradient-to-r from-camept-dark via-black to-camept-darker text-white rounded-xl shadow-elevated border-l-8 border-camept-yellow flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0 mt-auto"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="p-3 rounded-xl bg-camept-yellow/20 text-camept-yellow border border-camept-yellow/30 flex-shrink-0 shadow-sm">
            <Icons.ShieldAlert className="w-7 h-7 flex-shrink-0" />
          </div>
          <div>
            <span className="text-2xs sm:text-xs font-black uppercase tracking-widest text-camept-yellow block mb-1">
              Règle d'Or Transactionnelle du CAMEPT
            </span>
            <p className="text-sm sm:text-base md:text-lg font-extrabold italic text-gray-100 leading-snug">
              "{philosophy}"
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// SLIDE 13: BOARDROOMS DELIVERABLES (Part 2/2)
export const BoardroomDeliverables = ({ deliverables, philosophy }) => {
  return (
    <div className="flex flex-col justify-start gap-4 sm:gap-5 w-full h-full">
      {/* Top row: First 3 Deliverables */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch w-full">
        {deliverables.slice(0, 3).map((deliv, idx) => {
          const IconComp = deliv.icon && Icons[deliv.icon] ? Icons[deliv.icon] : Icons.FileText;
          return (
            <motion.div
              key={idx}
              className="p-5 sm:p-6 rounded-xl bg-white shadow-card hover:shadow-elevated transition-all duration-300 border border-gray-100 border-t-8 border-camept-orange flex flex-col justify-between h-full group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xs sm:text-xs font-black px-3 py-1 rounded-full bg-orange-50 text-camept-orange border border-orange-200 uppercase tracking-wider">
                    Livrable #{idx + 1}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-camept-bg text-camept-blue flex items-center justify-center group-hover:bg-camept-orange group-hover:text-white transition-all shadow-2xs">
                    <IconComp className="w-5 h-5 flex-shrink-0" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-black text-camept-dark mb-2 leading-tight">
                  {deliv.name}
                </h3>

                <div className="w-10 h-1 rounded-full bg-camept-blue mb-2.5 opacity-60 group-hover:w-16 transition-all duration-300" />

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                  {deliv.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom row: Next 2 Deliverables (Wide architectural cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-stretch w-full">
        {deliverables.slice(3, 5).map((deliv, idx) => {
          const actualIdx = idx + 3;
          const IconComp = deliv.icon && Icons[deliv.icon] ? Icons[deliv.icon] : Icons.CheckCircle2;
          return (
            <motion.div
              key={actualIdx}
              className="p-5 sm:p-6 rounded-xl bg-white shadow-card hover:shadow-elevated transition-all duration-300 border border-gray-100 border-t-8 border-camept-blue flex flex-col justify-between h-full group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.36 + idx * 0.12 }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xs sm:text-xs font-black px-3 py-1 rounded-full bg-blue-50 text-camept-blue border border-blue-200 uppercase tracking-wider">
                    Livrable #{actualIdx + 1}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-camept-bg text-camept-orange flex items-center justify-center group-hover:bg-camept-blue group-hover:text-white transition-all shadow-2xs">
                    <IconComp className="w-5 h-5 flex-shrink-0" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-black text-camept-dark mb-2 leading-tight">
                  {deliv.name}
                </h3>

                <div className="w-10 h-1 rounded-full bg-camept-orange mb-2.5 opacity-60 group-hover:w-16 transition-all duration-300" />

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                  {deliv.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom anchor badge */}
      <div className="p-3.5 sm:p-4 bg-gray-100/90 rounded-xl text-center border border-gray-200 text-xs sm:text-sm font-extrabold text-camept-dark flex items-center justify-center space-x-2 flex-shrink-0 mt-auto">
        <Icons.Award className="w-5 h-5 text-camept-blue flex-shrink-0" />
        <span>Exigence formelle : Aucun colloque théorique sans suite contractuelle actée par écrit en fin de session.</span>
      </div>
    </div>
  );
};
