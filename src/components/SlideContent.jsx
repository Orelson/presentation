import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { GeometricPanel } from './GeometricPanel';
import { StatCard, InfoCard } from './StatCard';
import { ProgramDay, DailyTimeline } from './ProgramDay';
import { BoardroomMechanics, BoardroomDeliverables } from './BoardroomCard';

export const SlideContent = ({ slide }) => {
  const { type, content } = slide;

  // 1. COVER SLIDE - EXACT MATCH TO OFFICIAL CAMEPT POSTER
  // 1. COVER SLIDE - ULTRA-OPTIMIZED INSTITUTIONAL MASTERPIECE
  if (type === 'cover') {
    return (
      <div className="w-full h-full relative flex flex-col justify-between bg-white text-slate-800 overflow-hidden select-none font-sans">
        {/* 1. TOP TIER: Official Header & Presidential Patronage */}
        <header className="relative z-30 w-full px-4 sm:px-6 lg:px-10 pt-3 sm:pt-4 pb-2 flex flex-col items-center flex-shrink-0 bg-white border-b border-slate-100 shadow-2xs">
          {/* Three Logos Row */}
          <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4 mb-2">
            {/* Left: République Gabonaise */}
            <div className="flex items-center space-x-2.5 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-xl shadow-2xs">
              <div className="flex flex-col space-y-0.5 w-4 overflow-hidden rounded-xs shadow-2xs flex-shrink-0">
                <div className="h-1.5 bg-[#009e60] w-full" />
                <div className="h-1.5 bg-[#fcd116] w-full" />
                <div className="h-1.5 bg-[#3a75c4] w-full" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] sm:text-xs font-black tracking-wider uppercase text-slate-900 leading-none">
                  République Gabonaise
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold tracking-widest uppercase text-[#0B63A3] leading-tight mt-0.5">
                  Union • Travail • Justice
                </span>
              </div>
            </div>

            {/* Center: BENZEI GROUP */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center space-x-1 mb-0.5 text-amber-600">
                <Icons.Triangle className="w-4 h-4 fill-amber-600 stroke-amber-700 -rotate-12 transform" />
                <Icons.Triangle className="w-5 h-5 fill-slate-800 stroke-slate-900 -mt-1 transform" />
                <Icons.Triangle className="w-4 h-4 fill-amber-500 stroke-amber-600 rotate-12 transform" />
              </div>
              <span className="font-serif font-black tracking-tight text-xs sm:text-sm text-slate-900 uppercase leading-none">
                BENZEI GROUP
              </span>
              <span className="text-[7px] sm:text-[8px] font-bold tracking-widest text-slate-500 uppercase mt-0.5">
                Conseil, Lobbying & Ingénierie Stratégique
              </span>
            </div>

            {/* Right: Afrika Transtour */}
            <div className="flex flex-col items-end justify-center">
              <span className="font-serif font-black tracking-tighter text-xl sm:text-2xl text-[#F26E21] leading-none">
                Āfrika
              </span>
              <span className="font-sans font-black tracking-tight text-base sm:text-lg text-[#0B63A3] leading-none -mt-1">
                Transtour
              </span>
            </div>
          </div>

          {/* Patronage Sub-header */}
          <div className="flex flex-col items-center text-center mt-1">
            <span className="text-2xs sm:text-xs font-bold uppercase tracking-widest text-slate-500">
              Sous le Haut Parrainage de
            </span>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-black text-[#0A3A60] tracking-tight mt-0.5">
              SEM Brice Clotaire OLIGUI N'GUEMA, Président de la République
            </span>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#F26E21] via-[#fcd116] to-[#0A3A60] rounded-full mt-1.5" />
          </div>
        </header>

        {/* 2. CENTER TIER: Architectural Triptych Showcase + CAMEPT Emblem Card */}
        <div className="relative flex-1 w-full min-h-0 flex flex-col items-center justify-center p-3 sm:p-4 lg:p-6 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/25 to-white z-10">
          {/* Background Architectural Triptych Grid (No buggy clip-paths) */}
          <div className="absolute inset-0 grid grid-cols-3 gap-1.5 opacity-30 pointer-events-none overflow-hidden">
            <div className="w-full h-full relative overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                alt="Logistique & Transports"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A3A60]/40 to-transparent" />
            </div>
            <div className="w-full h-full relative overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                alt="Ingénierie & Énergies"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
            </div>
            <div className="w-full h-full relative overflow-hidden bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80"
                alt="Mines & Extraction"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#F26E21]/30 to-transparent" />
            </div>
          </div>

          {/* Majestic Center Glassmorphic Emblem Box */}
          <div className="relative z-20 w-full max-w-4xl mx-auto my-auto flex flex-col items-center">
            <motion.div
              className="bg-white/95 backdrop-blur-2xl border border-white/90 shadow-[0_20px_60px_-15px_rgba(10,58,96,0.25)] rounded-3xl p-5 sm:p-7 md:p-9 w-full flex flex-col items-center justify-center text-center relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Top Sector Badges Row */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="bg-green-50 border border-green-200/80 text-green-700 px-3 py-1 rounded-full font-extrabold text-2xs sm:text-xs flex items-center space-x-1.5 shadow-2xs">
                  <Icons.Pickaxe className="w-3.5 h-3.5" />
                  <span>Mines</span>
                </span>
                <span className="bg-amber-50 border border-amber-200/80 text-amber-700 px-3 py-1 rounded-full font-extrabold text-2xs sm:text-xs flex items-center space-x-1.5 shadow-2xs">
                  <Icons.Zap className="w-3.5 h-3.5" />
                  <span>Énergies</span>
                </span>
                <span className="bg-orange-50 border border-orange-200/80 text-orange-700 px-3 py-1 rounded-full font-extrabold text-2xs sm:text-xs flex items-center space-x-1.5 shadow-2xs">
                  <Icons.Flame className="w-3.5 h-3.5" />
                  <span>Pétrole</span>
                </span>
                <span className="bg-blue-50 border border-blue-200/80 text-blue-700 px-3 py-1 rounded-full font-extrabold text-2xs sm:text-xs flex items-center space-x-1.5 shadow-2xs">
                  <Icons.Ship className="w-3.5 h-3.5" />
                  <span>Transports</span>
                </span>
              </div>

              {/* CAMEPT Title */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#0A3A60] tracking-tighter leading-none font-sans drop-shadow-xs">
                CAMEPT <span className="text-[#F26E21]">2026</span>
              </h1>
              
              <p className="text-xs sm:text-sm md:text-base font-extrabold text-slate-700 tracking-wider uppercase mt-2 max-w-2xl leading-snug">
                Congrès Africain des Mines, des Énergies, du Pétrole et des Transports
              </p>

              <div className="inline-flex items-center space-x-1.5 bg-orange-50 border border-orange-200/80 text-[#F26E21] px-3.5 py-0.5 rounded-full font-black text-[10px] sm:text-2xs uppercase tracking-widest mt-2.5 shadow-2xs">
                <span>DÉVELOPPEMENT & PROGRÈS AFRICAIN</span>
              </div>

              {/* Main Banner */}
              <div className="mt-4 sm:mt-6 w-full max-w-2xl">
                <div className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl bg-gradient-to-r from-[#0A3A60] via-[#0E4F84] to-[#0A3A60] text-white font-black text-base sm:text-xl md:text-2xl tracking-tight uppercase shadow-xl border border-blue-300/30">
                  Activités Phares du CAMEPT
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3. THE 5 ACTIVITY CARDS ROW (Floating at Bottom of Hero) */}
          <div className="relative z-30 w-full max-w-7xl mx-auto px-2 sm:px-4 mt-auto pt-4 flex-shrink-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3.5">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-slate-100 p-3 sm:p-3.5 flex items-center space-x-3 transform hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#F26E21] to-[#d8580c] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                  <Icons.Store className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[#F26E21] font-black text-xs sm:text-sm leading-tight">
                  Exposition commerciale
                </span>
              </div>
              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-slate-100 p-3 sm:p-3.5 flex items-center space-x-3 transform hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#108A7E] to-[#0b665d] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                  <Icons.Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[#108A7E] font-black text-xs sm:text-sm leading-tight">
                  Forum de discussion international
                </span>
              </div>
              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-slate-100 p-3 sm:p-3.5 flex items-center space-x-3 transform hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0B63A3] to-[#084877] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                  <Icons.Handshake className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[#0B63A3] font-black text-xs sm:text-sm leading-tight">
                  Rencontres B2B, B2G et G2G
                </span>
              </div>
              {/* Card 4 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-slate-100 p-3 sm:p-3.5 flex items-center space-x-3 transform hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#A6886A] to-[#80664d] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                  <Icons.UsersRound className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[#403025] font-black text-xs sm:text-sm leading-tight">
                  Business Club
                </span>
              </div>
              {/* Card 5 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-slate-100 p-3 sm:p-3.5 flex items-center space-x-3 transform hover:-translate-y-1 transition-all duration-300 group col-span-2 sm:col-span-1">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#2B8C3E] to-[#1e662c] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                  <Icons.Utensils className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[#2B8C3E] font-black text-xs sm:text-sm leading-tight">
                  Banquet officiel
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM TIER: Official Orange Footer Bar */}
        <footer className="relative z-30 w-full bg-[#F26E21] text-white px-4 sm:px-6 lg:px-10 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-xl flex-shrink-0 text-xs sm:text-sm font-bold">
          {/* Left: Sponsor */}
          <div className="flex items-center space-x-2.5">
            <span className="font-extrabold tracking-wider uppercase text-2xs sm:text-xs text-orange-100">SPONSOR</span>
            <div className="bg-white px-3 py-0.5 rounded shadow-sm flex items-center space-x-1.5">
              <Icons.Globe className="w-3.5 h-3.5 text-[#0B63A3]" />
              <span className="font-black tracking-wider text-[#0B63A3] text-xs uppercase">INFRAGROUP</span>
            </div>
          </div>

          {/* Center: Contacts */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-2xs sm:text-xs font-semibold">
            <div className="flex items-center space-x-1.5">
              <div className="w-5 h-5 rounded-full bg-white text-[#F26E21] flex items-center justify-center shadow-2xs">
                <Icons.Mail className="w-3 h-3" />
              </div>
              <span>afrikatranstour@gmail.com</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="w-5 h-5 rounded-full bg-white text-[#F26E21] flex items-center justify-center shadow-2xs">
                <Icons.Phone className="w-3 h-3" />
              </div>
              <span>+225 07 69 00 59 59</span>
            </div>
          </div>

          {/* Right: Social & CAMEPT */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <div className="w-5 h-5 rounded-full bg-white text-[#F26E21] flex items-center justify-center font-black text-[10px] shadow-2xs">f</div>
              <div className="w-5 h-5 rounded-full bg-white text-[#F26E21] flex items-center justify-center font-black text-[10px] shadow-2xs">in</div>
              <div className="w-5 h-5 rounded-full bg-white text-[#F26E21] flex items-center justify-center font-black text-[10px] shadow-2xs">𝕏</div>
            </div>
            <span className="font-black tracking-wider text-sm sm:text-base ml-1">CAMEPT</span>
          </div>
        </footer>
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
