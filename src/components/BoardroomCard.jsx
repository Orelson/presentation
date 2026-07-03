import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import imgSlide12Boardrooms from '../assets/slide12-boardrooms-meeting.jpg';

// SLIDE 12: BOARDROOMS MECHANICS & PHILOSOPHY (Part 1/2)
export const BoardroomMechanics = ({ features, philosophy }) => {
  const iconsList = ['Building2', 'Mail', 'Clock', 'Lock'];

  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
      {/* ── LEFT ZONE (~40% width): Image de réunion technique & négociation ── */}
      <div className="lg:col-span-5 flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full rounded-[24px] shadow-2xl overflow-hidden border-2 border-white/80 min-h-[350px] lg:min-h-[450px]"
        >
          <img
            src={imgSlide12Boardrooms}
            alt="Réunion technique en Boardroom, négociation et structuration de deal"
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#083f63]/95 via-[#083f63]/30 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <span className="text-2xs sm:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#f05a00] text-white inline-block mb-2 shadow-md">
              Innovation Transactionnelle
            </span>
            <p className="text-sm sm:text-base font-extrabold leading-snug">
              12 salles de négociation à huis clos sous la règle absolue de Chatham House.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── RIGHT ZONE (~60% width): Structuration claire (Ce que c'est, Format, Livrables) ── */}
      <div className="lg:col-span-7 flex flex-col justify-between h-full gap-4 sm:gap-5">
        {/* 1. Ce que sont les boardrooms & Donnée visuelle principale : 12 SALLES FERMÉES */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#083f63] to-[#0b63a3] text-white shadow-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
          <div className="flex items-center space-x-4">
            <div className="p-3.5 rounded-2xl bg-[#f05a00] text-white font-black text-2xl sm:text-3xl shadow-md flex-shrink-0">
              12
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#f7c400] block">
                Salles Fermées de Deal
              </span>
              <h3 className="text-base sm:text-lg font-black leading-tight">
                Négociation directe sur projets audités
              </h3>
            </div>
          </div>
          <span className="text-2xs sm:text-xs font-bold px-3 py-1.5 rounded-full bg-white/10 text-gray-100 border border-white/20 whitespace-nowrap">
            10 à 15 décideurs max
          </span>
        </div>

        {/* 2. Format & Règles Opérationnelles (Grid 2x2 compacte mais respirante) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 flex-1">
          {features.map((feat, idx) => {
            const iconName = iconsList[idx % iconsList.length];
            const IconComp = Icons[iconName] || Icons.CheckCircle2;
            return (
              <motion.div
                key={idx}
                className="p-3.5 sm:p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all border border-gray-100 border-l-4 border-[#083f63] flex flex-col justify-between"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
              >
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <div className="p-1.5 rounded-lg bg-blue-50 text-[#083f63]">
                    <IconComp className="w-4 h-4 flex-shrink-0" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#1f2933] leading-snug">
                    {feat.label}
                  </h4>
                </div>
                <p className="text-2xs sm:text-xs text-gray-600 leading-relaxed font-medium line-clamp-2">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* 3. Bloc spécial pour les livrables */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-gray-50 border border-gray-200 shadow-2xs flex-shrink-0">
          <div className="flex items-center space-x-2 mb-2">
            <Icons.CheckSquare className="w-4 h-4 text-[#159b37] flex-shrink-0" />
            <span className="text-2xs sm:text-xs font-extrabold uppercase tracking-widest text-[#083f63]">
              Livrables contractuels exigés en clôture :
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {['Lettre d’intention', 'Accord de principe', 'MoU', 'Mandat signé', 'Feuille de route'].map((liv, i) => (
              <span
                key={i}
                className="text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-lg bg-white text-[#1f2933] border border-gray-200 shadow-2xs flex items-center gap-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#f05a00]" />
                {liv}
              </span>
            ))}
          </div>
        </div>

        {/* Philosophie / Règle d'Or */}
        <div className="p-3.5 sm:p-4 bg-gradient-to-r from-[#1f2933] to-[#083f63] text-white rounded-xl shadow-md border-l-4 border-[#f7c400] flex items-center justify-between gap-3 flex-shrink-0">
          <Icons.ShieldAlert className="w-5 h-5 text-[#f7c400] flex-shrink-0" />
          <p className="text-2xs sm:text-xs font-extrabold italic text-gray-100 leading-snug">
            "{philosophy}"
          </p>
        </div>
      </div>
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
