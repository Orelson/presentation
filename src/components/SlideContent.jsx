import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { GeometricPanel } from './GeometricPanel';
import { StatCard, InfoCard } from './StatCard';
import { ProgramDay, DailyTimeline } from './ProgramDay';
import { BoardroomMechanics, BoardroomDeliverables } from './BoardroomCard';

export const SlideContent = ({ slide }) => {
  const { type, content } = slide;

  // 1. COVER SLIDE - MAJESTIC ARCHITECTURAL LAYOUT
  if (type === 'cover') {
    return (
      <div className="w-full h-full relative flex flex-col justify-between bg-camept-dark text-white p-4 sm:p-6 lg:p-8 overflow-hidden select-none">
        {/* Larana Geometric Background Accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-camept-blue/20 via-camept-cyan/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-tl from-camept-orange/15 via-camept-yellow/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-1/4 right-0 w-96 h-32 bg-gradient-to-l from-white/5 to-transparent clip-diagonal-left pointer-events-none" />
        </div>

        {/* 1. TOP TIER: Institutional Presidential Patronage Bar */}
        <motion.header
          className="relative z-10 w-full p-3 sm:p-3.5 lg:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 border-r border-white/20 pr-3">
              <div className="w-3.5 h-3 bg-green-600 rounded-2xs shadow-2xs" />
              <div className="w-3.5 h-3 bg-yellow-400 rounded-2xs -ml-1.5 shadow-2xs" />
              <div className="w-3.5 h-3 bg-blue-600 rounded-2xs -ml-1.5 shadow-2xs" />
              <span className="text-2xs sm:text-xs font-black tracking-widest uppercase text-camept-yellow ml-1">
                République Gabonaise
              </span>
            </div>
            <div className="flex items-center space-x-2 text-white font-semibold text-2xs sm:text-xs">
              <Icons.Award className="w-4 h-4 text-camept-yellow flex-shrink-0" />
              <span className="leading-snug">
                Sous le Haut Parrainage de S.E. Brice Clotaire OLIGUI N'GUEMA
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 text-2xs sm:text-xs font-bold text-gray-200">
            <span className="px-2 py-0.5 rounded bg-camept-orange text-white uppercase tracking-wider text-[10px] sm:text-2xs font-extrabold shadow-2xs">
              Édition 2026
            </span>
            <div className="flex items-center space-x-1">
              <Icons.MapPin className="w-3.5 h-3.5 text-camept-orange" />
              <span>Libreville • Gabon</span>
            </div>
          </div>
        </motion.header>

        {/* 2. CENTER TIER: Hero Title & Presidential Theme Banner */}
        <div className="relative z-10 flex-1 min-h-0 flex flex-col items-center justify-center text-center my-3 sm:my-4 max-w-5xl mx-auto px-2">
          <motion.div
            className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1 rounded-full bg-camept-blue/30 border border-camept-cyan/40 text-camept-yellow text-2xs sm:text-xs font-extrabold uppercase tracking-widest mb-2.5 sm:mb-3 shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Icons.Sparkles className="w-3.5 h-3.5 text-camept-yellow flex-shrink-0 animate-pulse" />
            <span>Congrès Institutionnel Panafricain • Sommet Stratégique</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-white mb-2 sm:mb-3 drop-shadow-lg flex items-center justify-center flex-wrap gap-2 sm:gap-4 font-sans"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>CAMEPT</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-camept-orange via-camept-yellow to-amber-300">
              2026
            </span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-100 max-w-3xl leading-tight mb-4 sm:mb-6 text-shadow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {content.subtitle}
          </motion.p>

          {/* Glowing Theme Box */}
          <motion.div
            className="w-full p-3.5 sm:p-4 lg:p-5 rounded-xl bg-gradient-to-r from-camept-darker/95 via-black/85 to-camept-darker/95 border-t-2 border-b-2 border-camept-yellow/80 shadow-2xl relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-0.5 bg-camept-yellow text-camept-darker font-black text-[10px] sm:text-2xs uppercase tracking-widest rounded shadow-md">
              Thème Central de la Présidence
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white italic leading-relaxed pt-1">
              « {content.theme} »
            </p>
          </motion.div>
        </div>

        {/* 3. BOTTOM TIER: 4 Pillars Grid & Footer Bar */}
        <motion.div
          className="relative z-10 w-full space-y-2.5 sm:space-y-3 flex-shrink-0"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5 lg:gap-3">
            {content.tags.map((tag, idx) => {
              const iconsList = [Icons.ShieldCheck, Icons.Briefcase, Icons.Zap, Icons.Globe];
              const IconComp = iconsList[idx % iconsList.length];
              return (
                <div
                  key={idx}
                  className="p-2 sm:p-2.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all flex items-center space-x-2"
                >
                  <div className="p-1 sm:p-1.5 rounded bg-camept-orange/20 text-camept-orange flex-shrink-0">
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-gray-100 leading-tight truncate">
                    {tag}
                  </span>
                </div>
              );
            })}
          </div>

          <footer className="pt-2 sm:pt-2.5 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-2xs text-gray-300 font-medium">
            <div className="flex items-center space-x-1.5">
              <Icons.Building2 className="w-3.5 h-3.5 text-camept-yellow flex-shrink-0" />
              <span><strong>Lieu :</strong> {content.venue}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Icons.Calendar className="w-3.5 h-3.5 text-camept-orange flex-shrink-0" />
              <span><strong>Dates :</strong> {content.dates}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span><strong>Organisation :</strong> Benzei Group • Afrika Transtour</span>
            </div>
          </footer>
        </motion.div>
      </div>
    );
  }

  // 2. PARADOX SLIDE
  if (type === 'paradox') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch w-full">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {content.stats.map((st, idx) => (
              <StatCard
                key={idx}
                value={st.value}
                label={st.label}
                sublabel={st.sublabel}
                icon={st.icon}
                accent={idx === 0 ? 'blue' : 'orange'}
                delay={idx * 0.15}
                className="h-full"
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            className="p-5 sm:p-6 lg:p-8 rounded-xl bg-white border-l-8 border-camept-dark shadow-elevated flex flex-col justify-between h-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div>
              <div className="flex items-center space-x-2 text-camept-orange font-bold text-xs sm:text-sm uppercase tracking-wider mb-3">
                <Icons.AlertTriangle className="w-5 h-5 flex-shrink-0" />
                <span>Le Diagnostic Réel</span>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-camept-dark leading-relaxed mb-4">
                "{content.coreProblem}"
              </p>
              <div className="h-0.5 bg-gray-100 w-full my-4" />
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                {content.conviction}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // 3. WHY GABON SLIDE
  if (type === 'why-gabon') {
    return (
      <div className="flex flex-col justify-start gap-4 sm:gap-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch w-full">
          {content.blocks.map((block, idx) => (
            <InfoCard
              key={idx}
              title={block.title}
              description={block.description}
              icon={block.icon}
              color={block.color}
              delay={idx * 0.1}
              className="h-full"
            />
          ))}
        </div>

        <GeometricPanel variant="ribbon" color="dark" className="p-4 sm:p-5 rounded-xl text-center shadow-elevated flex items-center justify-center space-x-2.5 flex-shrink-0 mt-auto">
          <Icons.Star className="w-5 h-5 text-camept-yellow flex-shrink-0 fill-current" />
          <p className="text-xs sm:text-sm md:text-base font-extrabold tracking-wide text-white">
            {content.keyMessage}
          </p>
        </GeometricPanel>
      </div>
    );
  }

  // 4. VISION SLIDE
  if (type === 'vision') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch w-full">
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
          {content.pillars.map((pil, idx) => (
            <InfoCard
              key={idx}
              title={pil.title}
              description={pil.desc}
              icon={pil.icon}
              color={idx % 2 === 0 ? 'blue' : 'orange'}
              delay={idx * 0.1}
              className={`${idx === 4 ? 'sm:col-span-2' : ''} h-full`}
            />
          ))}
        </div>

        <div className="lg:col-span-4 flex flex-col justify-center">
          <motion.div
            className="p-5 sm:p-6 rounded-xl bg-camept-dark text-white shadow-elevated relative overflow-hidden h-full flex flex-col justify-between"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-camept-yellow uppercase tracking-wider mb-4 border-b border-white/15 pb-2.5 flex items-center gap-2">
                <Icons.Target className="w-4 h-4 text-camept-orange flex-shrink-0" />
                <span>Secteurs & Priorités Ciblées</span>
              </h3>
              <ul className="space-y-2.5 sm:space-y-3">
                {content.sectorsFocus.map((focus, idx) => (
                  <li key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm font-semibold text-gray-100 p-2 rounded bg-white/5 border border-white/10">
                    <Icons.CheckCircle2 className="w-4 h-4 text-camept-orange flex-shrink-0" />
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-white/15 text-2xs sm:text-xs text-gray-300 italic">
              {content.keyMessage}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // 5. PNDT SLIDE
  if (type === 'pndt') {
    return (
      <div className="flex flex-col justify-start gap-4 sm:gap-5 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 flex-shrink-0">
          {content.stats.map((st, idx) => (
            <StatCard
              key={idx}
              value={st.value}
              unit={st.unit}
              label={st.label}
              accent={st.accent}
              delay={idx * 0.15}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch w-full">
          {content.sectors.map((sec, idx) => (
            <motion.div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-white shadow-card hover:shadow-elevated transition-all border-t-8 border-camept-blue flex flex-col justify-between h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-2xs sm:text-xs px-2.5 py-1 rounded-full bg-camept-orange/10 text-camept-orange font-bold uppercase">
                    {sec.share}
                  </span>
                  {Icons[sec.icon] && React.createElement(Icons[sec.icon], { className: "w-6 h-6 text-camept-blue flex-shrink-0" })}
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-camept-dark mb-2">{sec.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{sec.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-3.5 sm:p-4 bg-gradient-to-r from-camept-yellow/30 via-amber-100/50 to-camept-yellow/30 rounded-xl text-center border border-camept-yellow flex items-center justify-center space-x-2.5 flex-shrink-0 mt-auto shadow-2xs">
          <Icons.Zap className="w-5 h-5 text-camept-orange flex-shrink-0 fill-current" />
          <p className="text-xs sm:text-sm md:text-base font-extrabold text-camept-darker">
            {content.keyMessage}
          </p>
        </div>
      </div>
    );
  }

  // 6. PNCD SLIDE
  if (type === 'pncd') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 items-stretch w-full">
        {content.challenges.map((ch, idx) => (
          <motion.div
            key={idx}
            className={`p-4 sm:p-5 rounded-xl flex flex-col justify-between transition-all duration-300 shadow-card hover:shadow-elevated ${ch.color} h-full`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-2xs font-black uppercase tracking-widest opacity-80">
                  Défi Sectoriel #{idx + 1}
                </span>
                <Icons.Target className="w-4 h-4 text-camept-orange flex-shrink-0" />
              </div>
              <h3 className="text-base sm:text-lg font-black tracking-tight leading-snug">
                {ch.sector}
              </h3>
              <div className="p-2.5 rounded-lg bg-black/5 dark:bg-white/10 font-bold text-2xs sm:text-xs flex items-center space-x-2">
                <Icons.Sparkles className="w-3.5 h-3.5 flex-shrink-0 text-camept-orange" />
                <span>{ch.goal}</span>
              </div>
              <p className="text-xs leading-relaxed opacity-90 pt-1">
                {ch.action}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  // 7. PLATFORM SLIDE
  if (type === 'platform') {
    return (
      <div className="flex flex-col justify-start gap-4 sm:gap-5 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between p-5 sm:p-6 bg-gradient-to-r from-camept-blue via-camept-dark to-camept-blue text-white rounded-xl shadow-elevated flex-shrink-0">
          <div className="flex items-baseline space-x-3">
            <span className="text-4xl sm:text-6xl font-black text-camept-yellow font-sans">{content.mainStat.number}</span>
            <span className="text-lg sm:text-xl font-bold uppercase tracking-wide">Décideurs & Délégués</span>
          </div>
          <p className="text-xs sm:text-sm max-w-md text-gray-200 mt-2 sm:mt-0 font-medium text-center sm:text-right">
            {content.mainStat.label}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch w-full">
          {content.stakeholders.map((stk, idx) => (
            <InfoCard
              key={idx}
              title={stk.title}
              description={stk.desc}
              icon={stk.icon}
              color={idx % 2 === 0 ? 'blue' : 'orange'}
              delay={0.2 + idx * 0.08}
              className="h-full"
            />
          ))}
        </div>

        <div className="p-4 bg-gray-100 rounded-xl text-center font-bold text-xs sm:text-sm text-camept-dark flex items-center justify-center space-x-2 flex-shrink-0 mt-auto border border-gray-200">
          <Icons.ShieldCheck className="w-5 h-5 text-camept-blue flex-shrink-0" />
          <span>{content.keyMessage}</span>
        </div>
      </div>
    );
  }

  // 8. IMPACT SLIDE
  if (type === 'impact') {
    return (
      <div className="flex flex-col justify-start gap-4 w-full">
        <div className="p-4 sm:p-5 bg-camept-dark text-white rounded-xl clip-angled-header shadow-md flex-shrink-0 flex items-center gap-3">
          <div className="p-2 rounded bg-camept-orange/20 text-camept-orange flex-shrink-0">
            <Icons.Target className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] sm:text-2xs text-camept-yellow font-bold uppercase tracking-widest block mb-0.5">
              Objectif Stratégique Général
            </span>
            <p className="text-xs sm:text-sm md:text-base font-bold leading-relaxed text-gray-100">
              {content.generalObjective}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 items-stretch w-full">
          {content.impacts.map((imp, idx) => {
            const colorMap = {
              blue: 'border-t-4 border-camept-blue bg-white text-camept-dark',
              orange: 'border-t-4 border-camept-orange bg-white text-camept-dark',
              yellow: 'border-t-4 border-camept-yellow bg-camept-dark text-white',
              green: 'border-t-4 border-camept-green bg-white text-camept-dark',
              dark: 'border-t-4 border-camept-orange bg-camept-darker text-white',
            };

            return (
              <motion.div
                key={idx}
                className={`p-4 rounded-xl shadow-card hover:shadow-elevated transition-all flex flex-col justify-between ${colorMap[imp.color] || colorMap.blue} h-full`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] sm:text-2xs font-extrabold uppercase tracking-wider opacity-75">
                      Cible #{idx + 1}
                    </span>
                    {Icons[imp.icon] && React.createElement(Icons[imp.icon], { className: "w-5 h-5 text-camept-orange flex-shrink-0" })}
                  </div>
                  <h3 className="text-sm sm:text-base font-black leading-tight border-b border-gray-200/40 pb-2">{imp.target}</h3>
                  <ul className="space-y-2 pt-1">
                    {imp.benefits.map((ben, bIdx) => (
                      <li key={bIdx} className="text-2xs sm:text-xs flex items-start space-x-2 leading-snug p-1.5 rounded bg-black/5 dark:bg-white/5">
                        <Icons.CheckCircle2 className="w-3.5 h-3.5 text-camept-orange flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // 9. COUNTRIES SLIDE
  if (type === 'countries') {
    return (
      <div className="flex flex-col justify-start gap-4 sm:gap-5 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch w-full">
          {content.countries.map((cnt, idx) => (
            <motion.div
              key={idx}
              className={`p-5 sm:p-6 rounded-xl shadow-elevated flex flex-col justify-between transition-all duration-300 ${cnt.color} h-full`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-2xs sm:text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm font-extrabold uppercase tracking-wider">
                    {cnt.badge}
                  </span>
                  <Icons.Globe className="w-6 h-6 opacity-80 flex-shrink-0" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black">{cnt.name}</h3>
                <p className="text-2xs sm:text-xs font-extrabold text-camept-orange uppercase tracking-wider bg-black/10 px-2.5 py-1 rounded inline-block">{cnt.role}</p>
                <p className="text-xs sm:text-sm leading-relaxed opacity-90 pt-1 font-medium">{cnt.desc}</p>
              </div>

              <div className="pt-4 border-t border-current/15 space-y-2 mt-4">
                <span className="text-[10px] sm:text-2xs font-extrabold uppercase tracking-widest opacity-75 block">
                  Piliers de valorisation
                </span>
                <div className="space-y-1.5">
                  {cnt.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center space-x-2 text-2xs sm:text-xs font-bold p-1.5 rounded bg-white/10">
                      <Icons.CheckCircle2 className="w-3.5 h-3.5 text-camept-orange flex-shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <GeometricPanel variant="ribbon" color="blue" className="p-4 rounded-xl text-center font-bold text-xs sm:text-sm md:text-base flex items-center justify-center space-x-2.5 flex-shrink-0 mt-auto shadow-md">
          <Icons.Globe className="w-5 h-5 text-white flex-shrink-0" />
          <span>{content.keyMessage}</span>
        </GeometricPanel>
      </div>
    );
  }

  // 10. PARTNERS SLIDE
  if (type === 'partners') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch w-full">
        {content.columns.map((col, idx) => (
          <motion.div
            key={idx}
            className={`p-5 sm:p-6 rounded-xl bg-white shadow-card hover:shadow-elevated transition-all border-t-8 flex flex-col justify-between h-full ${
              col.color === 'blue' ? 'border-camept-blue' : 'border-camept-orange'
            }`}
            initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-camept-dark">{col.country}</h3>
                  <p className="text-2xs sm:text-xs font-bold text-gray-500 mt-0.5">{col.subtitle}</p>
                </div>
                <span className="text-2xs sm:text-xs px-3 py-1 rounded-full bg-camept-blue/10 font-extrabold text-camept-blue uppercase">Partenaire VIP</span>
              </div>

              <div className="space-y-2.5">
                {col.items.map((item, iIdx) => (
                  <div key={iIdx} className="p-3 rounded-lg bg-camept-bg hover:bg-gray-100/80 transition-colors border border-gray-100">
                    <h4 className="text-xs sm:text-sm font-bold text-camept-dark mb-1 flex items-center space-x-2">
                      <Icons.CheckCircle2 className="w-4 h-4 text-camept-orange flex-shrink-0" />
                      <span>{item.title}</span>
                    </h4>
                    <p className="text-2xs sm:text-xs text-gray-600 leading-relaxed pl-6">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  // 11. ACTIVITIES SLIDE
  if (type === 'activities') {
    return (
      <div className="flex flex-col justify-start gap-4 sm:gap-5 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch w-full">
          {content.activities.map((act, idx) => (
            <InfoCard
              key={idx}
              title={act.title}
              description={act.desc}
              icon={act.icon}
              badge={act.tag}
              color={idx === 4 ? 'dark' : idx === 0 ? 'orange' : 'blue'}
              delay={idx * 0.1}
              className="h-full"
            />
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-5 bg-gradient-to-r from-camept-dark via-black to-camept-dark text-white rounded-xl shadow-elevated flex-shrink-0 mt-auto border border-white/10">
          {content.metrics.map((met, idx) => (
            <div key={idx} className="text-center p-2 border-r last:border-r-0 border-white/15">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-camept-yellow block font-sans drop-shadow-md">
                {met.value}
              </span>
              <span className="text-2xs sm:text-xs md:text-sm text-gray-300 font-bold tracking-wide uppercase mt-1 block">
                {met.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 12. BOARDROOMS MECHANICS SLIDE (1/2)
  if (type === 'boardrooms-mechanics' || type === 'boardrooms') {
    return (
      <BoardroomMechanics
        features={content.features}
        philosophy={content.philosophy}
      />
    );
  }

  // 13. BOARDROOMS DELIVERABLES SLIDE (2/2)
  if (type === 'boardrooms-deliverables') {
    return (
      <BoardroomDeliverables
        deliverables={content.deliverables}
        philosophy={content.philosophy}
      />
    );
  }

  // 14. IFI SLIDE
  if (type === 'ifi') {
    return (
      <div className="flex flex-col justify-start gap-4 sm:gap-5 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 items-stretch w-full">
          {content.categories.map((cat, idx) => {
            const colorStyles = {
              'camept-blue': 'border-camept-blue bg-white text-camept-dark',
              'camept-orange': 'border-camept-orange bg-white text-camept-dark',
              'camept-green': 'border-camept-green bg-white text-camept-dark',
              'camept-dark': 'border-camept-yellow bg-camept-dark text-white',
            };
            const badgeStyles = {
              'camept-blue': 'bg-camept-blue text-white',
              'camept-orange': 'bg-camept-orange text-white',
              'camept-green': 'bg-camept-green text-white',
              'camept-dark': 'bg-camept-yellow text-camept-darker font-extrabold',
            };

            return (
              <motion.div
                key={idx}
                className={`p-5 rounded-xl shadow-card hover:shadow-elevated transition-all border-t-8 flex flex-col justify-between ${colorStyles[cat.color] || colorStyles['camept-blue']} h-full`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`inline-block px-3 py-1 rounded-full text-2xs sm:text-xs uppercase tracking-wider font-extrabold ${badgeStyles[cat.color] || badgeStyles['camept-blue']}`}>
                      Catégorie #{idx + 1}
                    </span>
                    <Icons.Landmark className={`w-5 h-5 ${cat.color === 'camept-dark' ? 'text-camept-yellow' : 'text-camept-orange'}`} />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-extrabold pb-2 border-b border-current/10">
                    {cat.name}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {cat.logos.map((logo, lIdx) => (
                      <div
                        key={lIdx}
                        className={`p-2.5 rounded-lg text-2xs sm:text-xs font-bold flex items-center space-x-2 shadow-2xs ${
                          cat.color === 'camept-dark' ? 'bg-white/10 text-gray-100 hover:bg-white/20' : 'bg-camept-bg text-gray-800 hover:bg-gray-100'
                        } transition-colors`}
                      >
                        <Icons.CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${cat.color === 'camept-dark' ? 'text-camept-yellow' : 'text-camept-orange'}`} />
                        <span className="leading-snug break-words">{logo}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="p-4 bg-gradient-to-r from-camept-orange via-amber-500 to-camept-yellow text-camept-darker rounded-xl text-center font-extrabold text-xs sm:text-sm md:text-base shadow-elevated flex items-center justify-center space-x-2.5 flex-shrink-0 mt-auto">
          <Icons.Landmark className="w-5 h-5 text-camept-darker flex-shrink-0" />
          <span>{content.keyMessage}</span>
        </div>
      </div>
    );
  }

  // 15. PROGRAM OVERVIEW SLIDE - ARCHITECTURAL MASTERPIECE
  if (type === 'program-overview') {
    return (
      <div className="flex flex-col justify-start gap-4 sm:gap-5 w-full">
        <ProgramDay days={content.days} />
        <div className="p-4 bg-gradient-to-r from-camept-dark via-black to-camept-dark text-white rounded-xl text-center font-bold text-xs sm:text-sm md:text-base flex items-center justify-center space-x-3 flex-shrink-0 mt-auto border border-camept-yellow/60 shadow-elevated">
          <div className="p-1.5 rounded-full bg-camept-yellow/20 text-camept-yellow flex-shrink-0">
            <Icons.Clock className="w-4 h-4" />
          </div>
          <span className="leading-snug">{content.dailyRhythm}</span>
        </div>
      </div>
    );
  }

  // 16, 17, 18. DAY 1, 2, 3 SLIDES
  if (type === 'day1' || type === 'day2' || type === 'day3') {
    return <DailyTimeline timeline={content.timeline} />;
  }

  // 19. GABON BENEFITS SLIDE
  if (type === 'gabon-benefits') {
    return (
      <div className="flex flex-col justify-start gap-4 sm:gap-5 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch w-full">
          {content.benefits.map((ben, idx) => (
            <InfoCard
              key={idx}
              title={ben.title}
              description={ben.desc}
              icon={ben.icon}
              badge={ben.value}
              color={idx === 1 ? 'orange' : idx === 4 ? 'dark' : 'blue'}
              delay={idx * 0.1}
              className={`${idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''} h-full`}
            />
          ))}
        </div>

        <GeometricPanel variant="ribbon" color="dark" className="p-4 rounded-xl text-center font-extrabold text-xs sm:text-sm md:text-base text-camept-yellow flex items-center justify-center space-x-2.5 flex-shrink-0 mt-auto shadow-elevated">
          <Icons.Award className="w-5 h-5 text-camept-yellow flex-shrink-0" />
          <span>{content.keyMessage}</span>
        </GeometricPanel>
      </div>
    );
  }

  // 20. CREDIBILITY SLIDE
  if (type === 'credibility') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch w-full">
        {content.columns.map((col, idx) => {
          const colorClasses = {
            'camept-blue': 'border-t-camept-blue bg-white text-camept-dark',
            'camept-orange': 'border-t-camept-orange bg-white text-camept-dark',
            'camept-green': 'border-t-camept-green bg-white text-camept-dark',
          };
          const headerClasses = {
            'camept-blue': 'bg-gradient-to-r from-camept-blue to-camept-dark text-white',
            'camept-orange': 'bg-gradient-to-r from-camept-orange to-amber-600 text-white',
            'camept-green': 'bg-gradient-to-r from-camept-green to-emerald-800 text-white',
          };
          const IconComp = Icons[col.icon] || Icons.CheckCircle2;

          return (
            <motion.div
              key={idx}
              className={`rounded-xl shadow-card hover:shadow-elevated border-t-8 overflow-hidden flex flex-col justify-between transition-all duration-300 ${colorClasses[col.color] || colorClasses['camept-blue']} h-full`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
            >
              <div className="flex-1 flex flex-col justify-start">
                <div className={`p-4 sm:p-5 flex items-center space-x-3 ${headerClasses[col.color] || headerClasses['camept-blue']}`}>
                  <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                    <IconComp className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-black leading-tight tracking-tight">
                    {col.title}
                  </h3>
                </div>

                <div className="p-4 sm:p-5 space-y-2.5 flex-1 flex flex-col justify-start">
                  {col.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="p-3 rounded-lg bg-camept-bg hover:bg-gray-100/80 transition-colors border border-gray-100 flex items-start space-x-2.5 text-2xs sm:text-xs text-gray-800 font-semibold"
                    >
                      <Icons.CheckCircle2 className="w-4 h-4 text-camept-orange flex-shrink-0 mt-0.5" />
                      <span className="leading-snug break-words flex-1">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  }

  // 21. CLOSING SLIDE
  if (type === 'closing') {
    return (
      <div className="w-full h-full relative flex flex-col lg:flex-row items-stretch justify-between bg-camept-dark text-white overflow-y-auto lg:overflow-hidden">
        {/* Left diagonal banner */}
        <div className="lg:w-5/12 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between relative z-10 clip-diagonal-left bg-gradient-to-br from-camept-blue via-camept-dark to-camept-darker flex-shrink-0">
          <div>
            <span className="px-3.5 py-1.5 bg-camept-yellow text-camept-darker font-black text-xs uppercase tracking-widest rounded-full shadow-md inline-flex items-center gap-1.5 mb-6">
              <Icons.ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>Mécanisme Pérenne</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white mb-4">
              Transformer le congrès en engagements suivis
            </h1>
            <p className="text-sm sm:text-base text-gray-200 font-medium leading-relaxed mb-8">
              {content.subtitle}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
            <h4 className="text-xs font-extrabold text-camept-yellow uppercase tracking-wider mb-2 flex items-center space-x-2">
              <Icons.Mail className="w-4 h-4 text-camept-yellow flex-shrink-0" />
              <span>Contact & Participation Officielle</span>
            </h4>
            <p className="text-sm font-black text-white mb-1">
              {content.callToAction.text}
            </p>
            <p className="text-xs text-gray-300 font-mono font-semibold">
              {content.callToAction.contact}
            </p>
          </div>
        </div>

        {/* Right side: 4 steps of follow-up */}
        <div className="lg:w-7/12 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center relative z-0 bg-camept-bg text-camept-dark overflow-y-auto custom-scrollbar flex-1">
          <div className="space-y-3.5 max-w-2xl mx-auto my-auto py-4">
            <h3 className="text-xs sm:text-sm font-extrabold text-camept-orange uppercase tracking-wider mb-3 flex items-center space-x-2">
              <Icons.ListChecks className="w-5 h-5 text-camept-orange flex-shrink-0" />
              <span>Feuille de Route de Suivi et de Redevabilité</span>
            </h3>
            {content.steps.map((st, idx) => (
              <motion.div
                key={idx}
                className="p-4 rounded-xl bg-white shadow-card hover:shadow-elevated border-l-4 border-camept-blue flex items-start space-x-4 transition-all"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-camept-blue/10 text-camept-blue font-black text-base flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                  {st.step}
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-extrabold text-gray-800 mb-1">
                    {st.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                    {st.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-camept-dark via-black to-camept-dark text-white text-center font-extrabold text-xs sm:text-sm flex items-center justify-center space-x-2.5 shadow-elevated border border-white/10">
              <Icons.ShieldCheck className="w-5 h-5 text-camept-yellow flex-shrink-0" />
              <span>"{content.finalMessage}"</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 text-center text-gray-500">
      Content for slide type <code className="text-camept-orange">{type}</code> not found.
    </div>
  );
};
