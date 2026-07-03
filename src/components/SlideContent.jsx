import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { GeometricPanel } from './GeometricPanel';
import { StatCard, InfoCard } from './StatCard';
import { ProgramDay, DailyTimeline } from './ProgramDay';
import { BoardroomMechanics, BoardroomDeliverables } from './BoardroomCard';
import logoGabon from '../assets/logo-gabon.png';
import logoAfrika from '../assets/logo-afrika.png';
import logoBenzei from '../assets/logo-benzei.png';
import presidentPhoto from '../assets/president.png';
import logoCamept from '../assets/logo-camept.png';
import roiMaroc from '../assets/roi-maroc.png';
import presidentCI from '../assets/president-ci.png';
import bambaGallery4 from '../assets/bamba-gallery-3.jpg';
import bambaPhotoFinal from '../assets/bamba-trophy.jpg';
import contextEngineer from '../assets/context-engineer.png';
import whyGabonRig from '../assets/why-gabon-rig.jpg';
import visionEngineer from '../assets/vision-engineer.png';
import targetsEnergy from '../assets/targets-energy.png';
import coverPoster from '../assets/visuel-12m2-v1.png';
import heroImg from '../assets/hero.png';
import imgSlide5Pndt from '../assets/slide5-pndt-port.jpg';
import imgSlide7Platform from '../assets/slide7-camept-plenary.jpg';
import imgSlide12Boardrooms from '../assets/slide12-boardrooms-meeting.jpg';
import imgSlide14Program from '../assets/slide14-programme-hall.jpg';
import imgSlide16Day2 from '../assets/slide16-jour2-financement.jpg';

const PALAIS_IMAGES = [
  './palais/DJI_20260303182439_0768_D-scaled.webp',
  './palais/DJI_20260303182451_0770_D-scaled.webp',
  './palais/DJI_20260303182605_0775_D-scaled.webp',
  './palais/DJI_20260303182645_0778_D-scaled.webp',
  './palais/FS5A1774-scaled.webp',
  './palais/FS5A1780-scaled.webp',
  './palais/FS5A2021-scaled.webp',
  './palais/FS5A2024-scaled.webp',
  './palais/FS5A2027-scaled.webp',
  './palais/FS5A2040-scaled.webp'
];

const PalaisBackgroundSlideshow = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PALAIS_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={index}
          src={PALAIS_IMAGES[index]}
          alt="Palais des Congrès Omar Bongo Odimba - Libreville"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ imageRendering: 'high-quality' }}
        />
      </AnimatePresence>
      {/* Overlay blanc élégant sans flou pour une netteté cristalline et une qualité optimale des photos */}
      <div className="absolute inset-0 bg-white/76 transition-all duration-500" />
    </div>
  );
};

export const SlideContent = ({ slide }) => {
  const { type, content } = slide;
  const [galleryTab, setGalleryTab] = React.useState(0);

  // 0. OPENING POSTER SLIDE - FULLSCREEN COVER POSTER WITHOUT CROPPING
  if (type === 'opening_poster') {
    return (
      <div className="relative w-full h-full min-h-full flex items-center justify-center bg-gray-950 overflow-hidden px-4 pt-2 pb-14 sm:px-6 sm:pt-4 sm:pb-16 lg:px-8 lg:pt-4 lg:pb-16">
        <img
          src={content.image && !content.image.startsWith('/') ? content.image : coverPoster}
          alt="Couverture Officielle CAMEPT 2026"
          className="w-full h-full object-contain object-center transition-transform duration-700 hover:scale-[1.01]"
          style={{ imageRendering: 'high-quality' }}
        />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]" />
      </div>
    );
  }

  // 1. COVER SLIDE - EXACT MATCH TO OFFICIAL CAMEPT POSTER
  // 1. COVER SLIDE - ULTRA-OPTIMIZED INSTITUTIONAL MASTERPIECE
  // 1. COVER SLIDE - SENIOR ART DIRECTOR AXIAL SYMMETRICAL MASTERPIECE (GOLDEN VISUAL BALANCE)
  if (type === 'cover') {
    return (
      <div className="w-full h-full relative flex flex-col justify-between bg-white text-[#1f2933] overflow-hidden select-none font-sans p-6 sm:p-10 lg:p-14">
        <PalaisBackgroundSlideshow />
        
        {/* TOP LAYER: Centered Sovereign Presidential Patronage (Vertical arrangement as requested) */}
        <div className="w-full pb-4 sm:pb-5 border-b border-slate-100 flex items-center justify-center flex-shrink-0 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center bg-slate-50/95 border border-slate-200/80 px-6 sm:px-8 py-3 rounded-2xl shadow-xs group transition-all hover:bg-slate-100/90 hover:shadow-md"
          >
            {/* Presidential Portrait Frame */}
            <div className="relative flex-shrink-0 mb-2 sm:mb-2.5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full border-[3px] border-[#f7c400] shadow-md overflow-hidden bg-[#083f63] ring-4 ring-[#083f63]/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={presidentPhoto}
                  alt="SEM Brice Clotaire OLIGUI N'GUEMA" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Tricolore Gabon Accent at bottom center of portrait */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-white px-2 py-0.5 rounded-full shadow-xs border border-slate-200 flex space-x-1">
                <span className="w-2 h-2 bg-[#159b37] rounded-full" />
                <span className="w-2 h-2 bg-[#f7c400] rounded-full" />
                <span className="w-2 h-2 bg-[#00a7c8] rounded-full" />
              </div>
            </div>

            {/* Exact Patronage Text Below Photo */}
            <div className="flex flex-col items-center text-center mt-1 sm:mt-1.5">
              <h3 className="text-xs sm:text-sm md:text-base font-black text-[#083f63] tracking-tight leading-snug">
                SEM Brice Clotaire Oligui N'Guema, Président de la République
              </h3>
              <span className="text-3xs sm:text-2xs md:text-xs font-extrabold uppercase tracking-widest text-[#f05a00] mt-0.5">
                ★ Haut Parrain de l'événement ★
              </span>
            </div>
          </motion.div>
        </div>

        {/* MIDDLE HERO LAYER: Centered Monumental Official Logo, Horizontal Date Pill & Widescreen Theme Box */}
        <div className="flex-1 w-full min-h-0 flex flex-col justify-center items-center my-auto relative z-10 py-4 max-w-6xl mx-auto text-center">
          
          {/* Monumental Official CAMEPT Logo & 2026 Edition Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10 my-2"
          >
            {/* Official Logo (Emblem + Text) */}
            <img 
              src={logoCamept} 
              alt="CAMEPT - Congrès Africain des Mines, des Énergies, du Pétrole et des Transports" 
              className="max-h-28 sm:max-h-36 md:max-h-44 lg:max-h-48 w-auto object-contain mix-blend-multiply bg-transparent transition-transform duration-500 hover:scale-105" 
            />
            
            {/* Monumental Year & Edition Pillar */}
            <div className="flex flex-col items-center sm:items-start justify-center pl-0 sm:pl-6 sm:border-l-4 border-[#f05a00]">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#f05a00] tracking-tighter leading-none font-sans drop-shadow-xs">
                2026
              </span>
              <span className="text-xs sm:text-sm md:text-base font-extrabold text-[#083f63] uppercase tracking-widest mt-2 px-3 py-1 bg-[#083f63]/10 rounded-lg border border-[#083f63]/20">
                1ère Édition
              </span>
            </div>
          </motion.div>

          {/* Centered Date & Venue Horizontal Bar (Visual Anchor) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 sm:mt-4 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-white/95 backdrop-blur-md border border-slate-200 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-sm mx-auto"
          >
            <span className="text-base sm:text-lg md:text-xl font-black text-[#f05a00] font-sans">
              Du 02 au 04 septembre 2026
            </span>
            <span className="hidden sm:inline text-slate-300 font-bold">•</span>
            <span className="text-xs sm:text-sm md:text-base font-black text-[#083f63]">
              Palais des Congrès Omar Bongo Odimba <span className="font-normal text-slate-500">• Libreville, Gabon</span>
            </span>
          </motion.div>

          {/* Centered Widescreen Theme Box (MONUMENTAL & EN GRAND) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 sm:mt-5 w-full max-w-6xl mx-auto bg-white/90 backdrop-blur-md border-2 border-[#083f63]/30 border-l-8 border-r-8 border-l-[#083f63] border-r-[#f05a00] p-5 sm:p-7 rounded-2xl shadow-lg"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-[#083f63] text-white text-xs sm:text-sm font-black uppercase tracking-widest mb-3 shadow-xs">
              ★ Thème Général du Congrès ★
            </div>
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-black text-[#083f63] leading-tight tracking-tight">
              « {content.theme || "Mines, énergies, pétrole, transports : nouvelles niches de croissance pour une souveraineté accrue et un développement équitable et durable."} »
            </p>
          </motion.div>
        </div>

        {/* BOTTOM LAYER: Discreet Centered Signature ONLY */}
        <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-center text-3xs sm:text-2xs font-bold text-slate-400 tracking-widest uppercase flex-shrink-0 relative z-20">
          <span>
            Organisé par <strong className="font-black text-[#083f63]">Benzei Group & Afrika Transtour</strong>
          </span>
        </div>
      </div>
    );
  }

  // 2. OUTLINE SLIDE (PLAN DE LA PRÉSENTATION) - NOUVEAU DESIGN ÉQUILIBRÉ 3-TOP / 2-BOTTOM
  if (type === 'outline') {
    const renderCard = (sec, idx, delayOffset = 0) => (
      <motion.div
        key={sec.num || idx}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: (idx + delayOffset) * 0.1 }}
        className="bg-white/95 border border-slate-200/80 hover:border-[#f05a00] rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group relative overflow-hidden h-full"
      >
        {/* Top Accent line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#083f63] via-[#0b63a3] to-[#f05a00] opacity-90 group-hover:opacity-100 transition-opacity" />
        
        <div>
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#083f63]/20 group-hover:text-[#f05a00] transition-colors font-sans">
              #{sec.num}
            </span>
            <div className="px-3 py-1 rounded-full bg-[#083f63]/5 text-[#083f63] font-bold text-xs uppercase tracking-wider border border-[#083f63]/10 shadow-2xs">
              {sec.slides}
            </div>
          </div>
          <h3 className="text-base sm:text-lg lg:text-xl font-black text-[#083f63] mb-2 leading-tight group-hover:text-[#f05a00] transition-colors">
            {sec.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            {sec.desc}
          </p>
        </div>

        <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-3xs sm:text-2xs font-extrabold uppercase tracking-widest text-[#f05a00] flex items-center gap-1">
            <span>•</span> CAMEPT 2026
          </span>
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-slate-100 group-hover:bg-[#f05a00] group-hover:text-white transition-all flex items-center justify-center text-xs font-bold text-[#083f63] shadow-2xs group-hover:scale-105">
            →
          </div>
        </div>
      </motion.div>
    );

    return (
      <div className="w-full h-full flex flex-col justify-between gap-5 sm:gap-6 py-2">
        {/* Ligne supérieure : 3 piliers (#01, #02, #03) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 flex-1 min-h-0">
          {content.sections?.slice(0, 3).map((sec, idx) => renderCard(sec, idx, 0))}
        </div>

        {/* Ligne inférieure : 2 piliers majeurs (#04, #05) qui bénéficient de plus de largeur */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 flex-1 min-h-0">
          {content.sections?.slice(3, 5).map((sec, idx) => renderCard(sec, idx, 3))}
        </div>
      </div>
    );
  }

  // 3. PARADOX SLIDE (AVEC CADRE D'IMAGE INTÉGRÉ EN 3 COLONNES PLEINE HAUTEUR)
  if (type === 'paradox') {
    return (
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
        {/* Left Column: 2 Big Stat Cards Stacked (30% vs 3,2%) */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-4 lg:gap-5 h-full">
          {content.stats?.map((st, idx) => (
            <StatCard
              key={idx}
              value={st.value}
              label={st.label}
              sublabel={st.sublabel}
              icon={st.icon}
              accent={idx === 0 ? 'blue' : 'orange'}
              delay={idx * 0.15}
              className="flex-1 flex flex-col justify-center"
            />
          ))}
        </div>

        {/* Center Column: PRESTIGIOUS IMAGE FRAME (Cadre d'image institutionnel demandé par le client) */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full h-full bg-slate-900 rounded-2xl border-2 border-[#f7c400] p-2 sm:p-3 shadow-elevated relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Corner architectural accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[#f05a00] rounded-tl-xl z-20" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[#f05a00] rounded-tr-xl z-20" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[#f05a00] rounded-bl-xl z-20" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[#f05a00] rounded-br-xl z-20" />

            {/* Image Container */}
            <div className="w-full flex-1 relative rounded-xl overflow-hidden bg-slate-800">
              <img 
                src={contextEngineer} 
                alt="Transformation industrielle et minière en Afrique" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = logoCamept;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#083f63]/90 via-transparent to-transparent" />
            </div>

            {/* Caption Frame Overlay */}
            <div className="mt-2 sm:mt-3 px-3 py-2.5 bg-[#083f63] rounded-lg border border-white/10 text-center z-10 flex items-center justify-center">
              <p className="text-xs sm:text-sm font-black text-white tracking-tight leading-snug">
                Transformation Industrielle & Souveraineté
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Le Diagnostic Réel & Conviction • full height, no dead space */}
        <div className="lg:col-span-4 flex flex-col h-full">
          <motion.div
            className="p-5 lg:p-6 rounded-2xl bg-white border-l-8 border-[#083f63] shadow-elevated flex flex-col h-full border border-slate-100"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#f05a00]/10 text-[#f05a00] font-black text-xs uppercase tracking-wider mb-4 self-start flex-shrink-0">
              <Icons.AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span>Le Diagnostic Réel</span>
            </div>

            {/* Citation • takes all available space, text grows to fill */}
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-sm lg:text-base xl:text-lg font-black text-[#083f63] leading-snug">
                "{content.coreProblem}"
              </p>
            </div>

            {/* Divider */}
            <div className="h-0.5 bg-gradient-to-r from-[#083f63] via-[#f05a00] to-transparent w-full my-4 flex-shrink-0" />

            {/* Conviction block • anchored to bottom, expands to fill remaining space */}
            <div className="flex-1 flex flex-col justify-center bg-slate-50 p-4 rounded-xl border border-slate-200/80">
              <div className="flex items-center gap-2 mb-2">
                <Icons.Lightbulb className="w-4 h-4 text-[#f05a00] flex-shrink-0" />
                <div className="text-3xs font-extrabold uppercase tracking-widest text-slate-500">
                  Notre Conviction Inébranlable
                </div>
              </div>
              <p className="text-xs lg:text-sm text-slate-700 leading-relaxed font-semibold">
                {content.conviction}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // 3. WHY GABON SLIDE • 2-col layout: large image frame left + cards right
  if (type === 'why-gabon') {
    return (
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">

        {/* ── LEFT: Prestigious image frame ── */}
        <div className="lg:col-span-5 flex flex-col h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full h-full min-h-[220px] rounded-2xl overflow-hidden border-2 border-[#f7c400] shadow-elevated group bg-slate-900 flex flex-col"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-7 h-7 border-t-4 border-l-4 border-[#f05a00] rounded-tl-xl z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-7 h-7 border-t-4 border-r-4 border-[#f05a00] rounded-tr-xl z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-7 h-7 border-b-4 border-l-4 border-[#f05a00] rounded-bl-xl z-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-7 h-7 border-b-4 border-r-4 border-[#f05a00] rounded-br-xl z-20 pointer-events-none" />

            {/* Image fills frame */}
            <div className="flex-1 relative overflow-hidden">
              <img
                src={whyGabonRig}
                alt="Plateforme pétrolière et richesses offshore du Gabon"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.onerror = null; e.target.src = heroImg; }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#083f63]/95 via-[#083f63]/30 to-transparent" />

              {/* Floating badge top */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white font-black text-xs uppercase tracking-widest">
                  🌍 Gabon
                </span>
              </div>
            </div>

            {/* Caption bar at bottom */}
            <div className="flex-shrink-0 px-5 py-3.5 bg-[#083f63] border-t border-[#f7c400]/30 flex items-center justify-center z-10 text-center">
              <p className="text-sm font-black text-white leading-snug">
                Positionnement du Gabon comme Hub Panafricain
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: 4 info cards stacked in 2Õ2 + key message ribbon ── */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4 h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 my-auto">
            {content.blocks.map((block, idx) => (
              <InfoCard
                key={idx}
                title={block.title}
                description={block.description}
                icon={block.icon}
                color={block.color}
                delay={idx * 0.1}
                className="shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 bg-white"
              />
            ))}
          </div>

          {/* Key message ribbon anchored to bottom */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex-shrink-0"
          >
            <GeometricPanel variant="ribbon" color="dark" className="p-4 sm:p-5 rounded-xl text-center shadow-elevated flex items-center justify-center space-x-2.5">
              <Icons.Star className="w-5 h-5 text-camept-yellow flex-shrink-0 fill-current" />
              <p className="text-xs sm:text-sm md:text-base font-extrabold tracking-wide text-white">
                {content.keyMessage}
              </p>
            </GeometricPanel>
          </motion.div>
        </div>

      </div>
    );
  }

  // 4. VISION SLIDE - AVEC CADRE D'IMAGE STRATÉGIQUE ET DESIGN ÉQUILIBRÉ
  if (type === 'vision') {
    return (
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
        {/* ── LEFT: Cadre d'image thématique haut de gamme ── */}
        <div className="lg:col-span-5 flex flex-col h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full h-full min-h-[260px] rounded-3xl overflow-hidden border-2 border-[#f7c400] shadow-elevated group bg-slate-900 flex flex-col justify-between"
          >
            {/* Corner architectural accents */}
            <div className="absolute top-0 left-0 w-7 h-7 border-t-4 border-l-4 border-[#f05a00] rounded-tl-2xl z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-7 h-7 border-t-4 border-r-4 border-[#f05a00] rounded-tr-2xl z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-7 h-7 border-b-4 border-l-4 border-[#f05a00] rounded-bl-2xl z-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-7 h-7 border-b-4 border-r-4 border-[#f05a00] rounded-br-2xl z-20 pointer-events-none" />

            {/* Image fills frame */}
            <div className="flex-1 relative overflow-hidden">
              <img
                src={visionEngineer}
                alt="Leadership et Souveraineté Industrielle en Afrique"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                style={{ imageRendering: 'high-quality' }}
                onError={(e) => { e.target.onerror = null; e.target.src = heroImg; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#083f63]/95 via-[#083f63]/30 to-transparent" />

              {/* Floating badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#f05a00] text-white font-black text-xs uppercase tracking-widest shadow-md border border-white/20">
                  ⚙️ Leadership & Souveraineté
                </span>
              </div>
            </div>

            {/* Caption bar at bottom */}
            <div className="flex-shrink-0 px-5 py-4 bg-[#083f63] border-t border-[#f7c400]/30 flex flex-col justify-center z-10">
              <span className="text-2xs font-extrabold uppercase tracking-widest text-[#f7c400] mb-0.5">
                ★ AMBITION INSTITUTIONNELLE ★
              </span>
              <p className="text-xs sm:text-sm font-black text-white leading-snug">
                L'ingénierie et l'expertise technique au service d'une transformation économique souveraine et durable
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: 4 Piliers en grille 2x2 avec design premium, complet et équilibré + Pilier Humain en bas ── */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4 h-full">
          {/* Top 4 Pillars in symmetrical 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 min-h-0 items-stretch">
            {content.pillars.slice(0, 4).map((pil, idx) => {
              const tags = [
                ["Souveraineté", "Industrialisation"],
                ["Diplomatie", "Attractivité"],
                ["Contrats", "Sécurité"],
                ["Leadership", "Durable"]
              ][idx] || ["CAMEPT", "Gabon 2026"];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white border-l-8 border-[#083f63] shadow-card hover:shadow-elevated transition-all flex flex-col justify-between h-full border-t border-r border-b border-slate-100 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xs font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#083f63]/10 text-[#083f63]">
                        0{idx + 1} • PILIER
                      </span>
                      {Icons[pil.icon] && React.createElement(Icons[pil.icon], {
                        className: "w-5 h-5 text-[#f05a00] group-hover:scale-110 transition-transform flex-shrink-0"
                      })}
                    </div>
                    <h3 className="text-sm sm:text-base font-black text-[#083f63] leading-tight mb-2">
                      {pil.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1.5 flex-wrap">
                    {tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-slate-50 text-slate-500 border border-slate-200/60">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom consolidated 5th Pillar & Key Message Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex-shrink-0 bg-[#083f63] text-white p-4 sm:p-5 rounded-2xl border-l-8 border-[#f05a00] shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icons.Users className="w-5 h-5 text-[#f7c400]" />
              </div>
              <div className="min-w-0">
                <div className="text-2xs font-extrabold text-[#f7c400] uppercase tracking-widest">
                  Pilier 05 • {content.pillars[4]?.title || "Développement Humain Durable"}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white/90 leading-snug mt-0.5">
                  {content.pillars[4]?.desc || "Création d'emplois qualifiés et amélioration des conditions de vie."}
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 self-end sm:self-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f05a00] text-white font-black text-2xs uppercase tracking-wider shadow-xs">
                <Icons.CheckCircle2 className="w-3.5 h-3.5" />
                <span>Projets Bancables</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // 5. PNCD SLIDE - CONSOLIDATED NATIONAL PORTFOLIO & STRATEGIC FOCUS
  // 5. PNCD SLIDE - CONSOLIDATED NATIONAL PORTFOLIO & STRATEGIC FOCUS (2-zone with situational image)
  if (type === 'pncd') {
    return (
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
        {/* LEFT ZONE (~60% width): Stats, 4 Sectors & Key Message */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full gap-4 sm:gap-5">
          {/* Top Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 flex-shrink-0">
            {content.stats?.map((st, idx) => (
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

          {/* 4 Strategic Sector Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 items-stretch w-full flex-1">
            {content.sectors?.map((sec, idx) => {
              const IconComponent = Icons[sec.icon] || Icons.HelpCircle;
              return (
                <motion.div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl bg-white shadow-card hover:shadow-elevated transition-all border-t-4 border-camept-blue flex flex-col justify-between h-full"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + idx * 0.08 }}
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xs sm:text-xs px-2 py-0.5 rounded-full bg-camept-orange/10 text-camept-orange font-bold uppercase tracking-wider">
                        {sec.share}
                      </span>
                      <IconComponent className="w-5 h-5 text-camept-blue flex-shrink-0" />
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold text-camept-dark mb-1 leading-tight">{sec.title}</h3>
                    <p className="text-2xs sm:text-xs text-gray-600 leading-relaxed line-clamp-3">{sec.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Key Message Ribbon */}
          {content.keyMessage && (
            <div className="p-3 sm:p-3.5 bg-gradient-to-r from-camept-yellow/30 via-amber-100/50 to-camept-yellow/30 rounded-xl text-center border border-camept-yellow flex items-center justify-center space-x-2 flex-shrink-0 shadow-2xs">
              <Icons.Zap className="w-4 h-4 text-camept-orange flex-shrink-0 fill-current" />
              <p className="text-2xs sm:text-xs md:text-sm font-extrabold text-camept-darker">
                {content.keyMessage}
              </p>
            </div>
          )}
        </div>

        {/* RIGHT ZONE (~40% width): Image institutionnelle & corridor logistique */}
        <div className="lg:col-span-5 flex flex-col h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full rounded-[24px] shadow-2xl overflow-hidden border-2 border-white/80 min-h-[350px] lg:min-h-[450px]"
          >
            <img
              src={imgSlide5Pndt}
              alt="Projets prioritaires PNDT, infrastructures, port et transformation économique"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#083f63]/95 via-[#083f63]/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-2xs sm:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#f05a00] text-white inline-block mb-2 shadow-md">
                Infrastructures & Corridors
              </span>
              <p className="text-sm sm:text-base font-extrabold leading-snug">
                Projets structurants, modernisation logistique et essor industriel du Gabon.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // 7. PLATFORM SLIDE (2-zone with situational image)
  if (type === 'platform') {
    return (
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
        {/* LEFT ZONE (~60% width): Main Stat, Stakeholders Grid, Key Message */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full gap-4 sm:gap-5">
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-5 bg-gradient-to-r from-camept-blue via-camept-dark to-camept-blue text-white rounded-xl shadow-elevated flex-shrink-0">
            <div className="flex items-baseline space-x-3">
              <span className="text-3xl sm:text-5xl font-black text-camept-yellow font-sans">{content.mainStat.number}</span>
              <span className="text-base sm:text-lg font-bold uppercase tracking-wide">Décideurs & Délégués</span>
            </div>
            <p className="text-2xs sm:text-xs max-w-sm text-gray-200 mt-1 sm:mt-0 font-medium text-center sm:text-right">
              {content.mainStat.label}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 items-stretch w-full flex-1">
            {content.stakeholders.map((stk, idx) => (
              <InfoCard
                key={idx}
                title={stk.title}
                description={stk.desc}
                icon={stk.icon}
                color={idx % 2 === 0 ? 'blue' : 'orange'}
                delay={0.15 + idx * 0.06}
                className="h-full"
              />
            ))}
          </div>

          <div className="p-3.5 bg-gray-100 rounded-xl text-center font-bold text-2xs sm:text-xs text-camept-dark flex items-center justify-center space-x-2 flex-shrink-0 border border-gray-200 shadow-2xs">
            <Icons.ShieldCheck className="w-4 h-4 text-camept-blue flex-shrink-0" />
            <span>{content.keyMessage}</span>
          </div>
        </div>

        {/* RIGHT ZONE (~40% width): Image plénière CAMEPT */}
        <div className="lg:col-span-5 flex flex-col h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full rounded-[24px] shadow-2xl overflow-hidden border-2 border-white/80 min-h-[350px] lg:min-h-[450px]"
          >
            <img
              src={imgSlide7Platform}
              alt="Plénière CAMEPT, networking de haut niveau, délégations et décideurs"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#083f63]/95 via-[#083f63]/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-2xs sm:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#f05a00] text-white inline-block mb-2 shadow-md">
                Hub Panafricain
              </span>
              <p className="text-sm sm:text-base font-extrabold leading-snug">
                Le carrefour exclusif des leaders publics, privés et investisseurs stratégiques.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // 8. IMPACT SLIDE • 2-col: large image left + objective ribbon + 5 target cards right
  if (type === 'impact') {
    const colorMap = {
      blue:   'border-t-4 border-camept-blue bg-white text-camept-dark',
      orange: 'border-t-4 border-camept-orange bg-white text-camept-dark',
      yellow: 'border-t-4 border-camept-yellow bg-camept-dark text-white',
      green:  'border-t-4 border-camept-green bg-white text-camept-dark',
      dark:   'border-t-4 border-camept-orange bg-camept-darker text-white',
    };

    return (
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">

        {/* ── LEFT: Prestigious image frame ── */}
        <div className="lg:col-span-4 flex flex-col h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full h-full min-h-[220px] rounded-2xl overflow-hidden border-2 border-[#f7c400] shadow-elevated group bg-slate-900 flex flex-col"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-7 h-7 border-t-4 border-l-4 border-[#f05a00] rounded-tl-xl z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-7 h-7 border-t-4 border-r-4 border-[#f05a00] rounded-tr-xl z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-7 h-7 border-b-4 border-l-4 border-[#f05a00] rounded-bl-xl z-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-7 h-7 border-b-4 border-r-4 border-[#f05a00] rounded-br-xl z-20 pointer-events-none" />

            {/* Image */}
            <div className="flex-1 relative overflow-hidden">
              <img
                src={targetsEnergy}
                alt="Transformation structurelle et énergies vertes en Afrique"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.onerror = null; e.target.src = heroImg; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#083f63]/95 via-[#083f63]/25 to-transparent" />

              {/* Floating badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white font-black text-xs uppercase tracking-widest">
                  🎯 Impact
                </span>
              </div>

              {/* Stat overlay bottom-left */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <p className="text-white/90 text-xs font-bold leading-snug line-clamp-3">
                  {content.generalObjective}
                </p>
              </div>
            </div>

            {/* Caption bar */}
            <div className="flex-shrink-0 px-5 py-3 bg-[#083f63] border-t border-[#f7c400]/30 flex items-center gap-2 z-10">
              <Icons.Target className="w-4 h-4 text-[#f7c400] flex-shrink-0" />
              <div>
                <span className="text-2xs font-extrabold uppercase tracking-widest text-[#f7c400] block">
                  Objectif Stratégique
                </span>
                <p className="text-xs font-black text-white leading-tight">
                  Transformation Structurelle Panafricaine
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: 5 target cards in spacious grid ── */}
        <div className="lg:col-span-8 flex flex-col h-full justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch h-full">
            {content.impacts.map((imp, idx) => (
              <motion.div
                key={idx}
                className={`p-4 sm:p-5 rounded-2xl shadow-card hover:shadow-elevated transition-all flex flex-col justify-between border border-slate-200/80 ${colorMap[imp.color] || colorMap.blue} h-full ${idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded ${imp.color === 'yellow' || imp.color === 'dark' ? 'bg-white/15 text-white' : 'bg-black/5 text-slate-600'}`}>
                      Cible #{idx + 1}
                    </span>
                    {Icons[imp.icon] && React.createElement(Icons[imp.icon], { className: "w-5 h-5 text-camept-orange flex-shrink-0" })}
                  </div>
                  <h3 className={`text-sm sm:text-base font-black leading-tight border-b pb-2 ${imp.color === 'yellow' || imp.color === 'dark' ? 'border-white/20 text-white' : 'border-gray-200/60 text-[#083f63]'}`}>{imp.target}</h3>
                  <ul className="space-y-2 pt-1">
                    {imp.benefits.map((ben, bIdx) => (
                      <li key={bIdx} className={`text-xs sm:text-sm flex items-start space-x-2 leading-snug font-semibold ${imp.color === 'yellow' || imp.color === 'dark' ? 'text-slate-100' : 'text-slate-700'}`}>
                        <Icons.CheckCircle2 className="w-4 h-4 text-camept-orange flex-shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    );
  }

  // 9. COUNTRIES SLIDE
  if (type === 'countries') {
    const flagImages = {
      "République Gabonaise": "https://flagcdn.com/w160/ga.png",
      "Royaume du Maroc": "https://flagcdn.com/w160/ma.png",
      "République de Côte d'Ivoire": "https://flagcdn.com/w160/ci.png"
    };

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
                  <img src={flagImages[cnt.name] || "https://flagcdn.com/w160/ga.png"} alt={`Drapeau ${cnt.name}`} className="w-8 h-5 object-cover rounded shadow-sm border border-white/30 flex-shrink-0" />
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

  // 10. PARTNERS SLIDE — premium horizontal redesign
  if (type === 'partners') {
    const countryAssets = {
      'Royaume du Maroc': {
        portrait: roiMaroc,
        leader: 'Sa Majesté le Roi Mohammed VI du Maroc',
        flagImg: 'https://flagcdn.com/w160/ma.png',
        borderColor: '#083f63',
        accentColor: '#f7c400',
        bgFrom: '#083f63',
        bgTo: '#0a4d7a',
      },
      "République de Côte d'Ivoire": {
        portrait: presidentCI,
        leader: 'SEM Alassane Ouattara, Président de la République',
        flagImg: 'https://flagcdn.com/w160/ci.png',
        borderColor: '#f05a00',
        accentColor: '#f7c400',
        bgFrom: '#1a1a2e',
        bgTo: '#2d1b00',
      },
    };

    return (
      <div className="w-full h-full flex flex-col gap-4">
        {content.columns.map((col, idx) => {
          const a = countryAssets[col.country] || { borderColor: '#083f63', accentColor: '#f7c400', flagImg: 'https://flagcdn.com/w160/ga.png', bgFrom: '#083f63', bgTo: '#0a4d7a' };

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex-1 min-h-0 rounded-2xl overflow-hidden shadow-elevated flex flex-row"
              style={{ background: `linear-gradient(135deg, ${a.bgFrom} 0%, ${a.bgTo} 100%)`, border: `2px solid ${a.borderColor}` }}
            >

              {/* ── LEFT: Portrait in natural-ratio frame, no upscale ── */}
              <div
                className="flex-shrink-0 relative overflow-hidden"
                style={{ width: '28%', minWidth: '120px', maxWidth: '200px' }}
              >
                {/* Portrait at natural aspect ratio — displayed at its own size, centred */}
                <img
                  src={a.portrait}
                  alt={a.leader}
                  className="w-full h-full object-cover object-top"
                  style={{ imageRendering: 'high-quality' }}
                />
                {/* Colour accent strip on right edge */}
                <div className="absolute top-0 right-0 bottom-0 w-1" style={{ background: a.accentColor }} />
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-4 border-l-4 z-10 pointer-events-none" style={{ borderColor: a.accentColor }} />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-4 border-l-4 z-10 pointer-events-none" style={{ borderColor: a.accentColor }} />
              </div>

              {/* ── RIGHT: Country info + expertise items ── */}
              <div className="flex-1 flex flex-col p-4 sm:p-5 min-w-0">

                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-3 flex-shrink-0">
                  <div>
                    {/* VIP badge */}
                    <span
                      className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full mb-1.5"
                      style={{ background: a.accentColor + '25', color: a.accentColor, border: `1px solid ${a.accentColor}50` }}
                    >
                      ⭐ INVITÉ D'HONNEUR
                    </span>
                    {/* Country name */}
                    <h3 className="text-base sm:text-lg lg:text-xl font-black text-white leading-tight flex items-center gap-2">
                      <img src={a.flagImg} alt={`Drapeau ${col.country}`} className="w-5 h-3.5 object-cover rounded shadow-2xs border border-white/20 flex-shrink-0" />
                      <span>{col.country}</span>
                    </h3>
                    {/* Leader name */}
                    <p className="text-[10px] sm:text-xs mt-0.5 font-semibold" style={{ color: a.accentColor }}>
                      {a.leader}
                    </p>
                    {/* Subtitle */}
                    <p className="text-[10px] sm:text-xs text-white/60 font-medium mt-0.5">
                      {col.subtitle}
                    </p>
                  </div>
                  {/* Large official flag at extreme right */}
                  <div className="flex-shrink-0 pl-2 flex items-center">
                    <img 
                      src={a.flagImg} 
                      alt={`Drapeau officiel ${col.country}`} 
                      className="w-14 sm:w-16 md:w-20 h-9 sm:h-11 md:h-13 object-cover rounded-lg shadow-md border-2 border-white/30 group-hover:scale-105 transition-transform" 
                    />
                  </div>
                </div>

                {/* Accent divider */}
                <div className="h-px mb-3 flex-shrink-0" style={{ background: `linear-gradient(to right, ${a.accentColor}, transparent)` }} />

                {/* Items — compact horizontal chips */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-1.5 content-start overflow-hidden">
                  {col.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="flex items-start gap-2 rounded-lg p-2 transition-colors"
                      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: a.borderColor + '40', border: `1px solid ${a.accentColor}60` }}
                      >
                        <Icons.CheckCircle2 className="w-3 h-3 flex-shrink-0" style={{ color: a.accentColor }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-xs font-black text-white leading-tight truncate">{item.title}</p>
                        <p className="text-[9px] sm:text-[10px] text-white/50 leading-snug mt-0.5 font-medium line-clamp-2">{item.desc}</p>
                      </div>
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

  // 11. SCENOGRAPHY SLIDE - IMMERSIVE 360 VISUAL EXPERIENCE
  if (type === 'scenography') {
    const colorMap = {
      blue: "border-t-8 border-camept-blue bg-white text-camept-dark",
      orange: "border-t-8 border-camept-orange bg-white text-camept-dark",
      dark: "border-t-8 border-camept-yellow bg-camept-dark text-white",
      green: "border-t-8 border-camept-green bg-white text-camept-dark",
      yellow: "border-t-8 border-amber-500 bg-amber-50/40 text-camept-dark border border-amber-200"
    };

    return (
      <div className="flex flex-col justify-start gap-4 sm:gap-5 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch w-full">
          {content.spaces?.slice(0, 3).map((sp, idx) => {
            const IconComponent = Icons[sp.icon] || Icons.Sparkles;
            return (
              <motion.div
                key={idx}
                className={`p-4 sm:p-5 rounded-xl shadow-card hover:shadow-elevated transition-all flex flex-col justify-between h-full ${colorMap[sp.color] || colorMap.blue}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-2xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${sp.color === 'dark' ? 'bg-white/10 text-camept-yellow' : 'bg-slate-100 text-slate-700'}`}>
                      {sp.badge}
                    </span>
                    <IconComponent className={`w-6 h-6 flex-shrink-0 ${sp.color === 'dark' ? 'text-camept-yellow' : 'text-camept-blue'}`} />
                  </div>
                  <h3 className="text-base sm:text-lg font-black mb-1 leading-tight">{sp.title}</h3>
                  <h4 className={`text-xs font-semibold mb-2.5 ${sp.color === 'dark' ? 'text-gray-300' : 'text-camept-orange'}`}>{sp.subtitle}</h4>
                  <p className={`text-xs sm:text-sm leading-relaxed ${sp.color === 'dark' ? 'text-gray-200' : 'text-gray-600'}`}>{sp.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch w-full">
          {content.spaces?.slice(3).map((sp, idx) => {
            const IconComponent = Icons[sp.icon] || Icons.Sparkles;
            return (
              <motion.div
                key={idx + 3}
                className={`p-4 sm:p-5 rounded-xl shadow-card hover:shadow-elevated transition-all flex flex-col justify-between h-full ${colorMap[sp.color] || colorMap.green}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (idx + 3) * 0.1 }}
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-2xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider bg-slate-100 text-slate-700">
                      {sp.badge}
                    </span>
                    <IconComponent className="w-6 h-6 text-camept-blue flex-shrink-0" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black mb-1 leading-tight">{sp.title}</h3>
                  <h4 className="text-xs font-semibold text-camept-orange mb-2.5">{sp.subtitle}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{sp.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {content.keyMessage && (
          <div className="p-3.5 sm:p-4 bg-gradient-to-r from-camept-blue via-camept-dark to-camept-blue rounded-xl text-center text-white flex items-center justify-center space-x-2.5 flex-shrink-0 mt-auto shadow-elevated">
            <Icons.Eye className="w-5 h-5 text-camept-yellow flex-shrink-0" />
            <p className="text-xs sm:text-sm md:text-base font-extrabold tracking-wide">
              {content.keyMessage}
            </p>
          </div>
        )}
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

  // 15. PROGRAM OVERVIEW SLIDE - ARCHITECTURAL MASTERPIECE (2-zone with situational image)
  if (type === 'program-overview') {
    return (
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
        {/* LEFT ZONE (~38% width): Image d'ambiance générale (hall d'accueil & networking) */}
        <div className="lg:col-span-4 flex flex-col h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full rounded-[24px] shadow-2xl overflow-hidden border-2 border-white/80 min-h-[350px] lg:min-h-[450px]"
          >
            <img
              src={imgSlide14Program}
              alt="Hall d'accueil et networking CAMEPT 2026"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#083f63]/95 via-[#083f63]/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-2xs sm:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#f05a00] text-white inline-block mb-2 shadow-md">
                Ambiance Panafricaine
              </span>
              <p className="text-sm sm:text-base font-extrabold leading-snug">
                Accueil VIP, networking de rang ministériel et circulation fluidifiée.
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT ZONE (~62% width): Les 3 journées structurées et très lisibles */}
        <div className="lg:col-span-8 flex flex-col justify-between h-full gap-4 sm:gap-5">
          <div className="flex-1">
            <ProgramDay days={content.days} layout="vertical-stack" />
          </div>
          <div className="p-3.5 sm:p-4 bg-gradient-to-r from-[#083f63] via-[#0b63a3] to-[#083f63] text-white rounded-xl text-center font-bold text-xs sm:text-sm md:text-base flex items-center justify-center space-x-3 flex-shrink-0 border border-white/10 shadow-lg">
            <div className="p-1.5 rounded-full bg-[#f7c400]/20 text-[#f7c400] flex-shrink-0">
              <Icons.Clock className="w-5 h-5" />
            </div>
            <span className="leading-snug">{content.dailyRhythm}</span>
          </div>
        </div>
      </div>
    );
  }

  // 16, 18. DAY 1, 3 SLIDES
  if (type === 'day1' || type === 'day3') {
    return <DailyTimeline timeline={content.timeline} />;
  }

  // 17. DAY 2 SLIDE (2-zone with situational image & structured highlights)
  if (type === 'day2') {
    return (
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
        {/* LEFT ZONE (~60% width): 3 sections structurées et temps forts mis en avant */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full gap-4 sm:gap-5">
          {/* Top banner: Temps forts mis visuellement en avant */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#083f63] to-[#1f2933] text-white shadow-xl border border-white/10 flex flex-col justify-between gap-3 flex-shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-2xs sm:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#f05a00] text-white">
                Focus Opérationnel Jour 2
              </span>
              <span className="text-2xs font-bold text-[#f7c400]">Projets & Financements</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              {[
                { label: 'Business speed dating', icon: 'Clock' },
                { label: 'Boardrooms deal', icon: 'Briefcase' },
                { label: 'Clinique PPP', icon: 'TrendingUp' },
                { label: 'Signature de LoI', icon: 'CheckCircle2' }
              ].map((hf, idx) => {
                const IconC = Icons[hf.icon] || Icons.CheckCircle2;
                return (
                  <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-white/10 border border-white/15 flex flex-col items-center text-center gap-1 hover:bg-white/20 transition-all">
                    <IconC className="w-4 h-4 text-[#f7c400]" />
                    <span className="text-[11px] sm:text-xs font-extrabold leading-tight text-white">{hf.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3 Sections structurées : Énergie, Transports, Financement */}
          <div className="grid grid-cols-1 gap-3 sm:gap-3.5 flex-1">
            {[
              {
                title: '1. Énergie & Transition Énergétique',
                desc: 'Hydroélectricité, mix solaire, sécurisation énergétique des zones industrielles et projets de barrages.',
                color: 'border-l-[#083f63] bg-blue-50/40',
                badge: 'Panel & Boardrooms'
              },
              {
                title: '2. Transports & Infrastructures Stratégiques',
                desc: 'Réhabilitation du Transgabonais, extension du Port en Eau Profonde, logistique multimodale et marine marchande.',
                color: 'border-l-[#f05a00] bg-orange-50/40',
                badge: 'Projets Structurants'
              },
              {
                title: '3. Financement & Partenariats PPP',
                desc: 'Ateliers cliniques PPP, mécanismes de garantie multilatérales, rencontres G2G et cocktail des investisseurs.',
                color: 'border-l-[#159b37] bg-green-50/40',
                badge: 'Clôture Financière'
              }
            ].map((sec, idx) => (
              <motion.div
                key={idx}
                className={`p-3.5 sm:p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all border border-gray-100 border-l-4 ${sec.color} flex flex-col justify-between`}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xs sm:text-sm font-black text-[#1f2933] leading-snug">{sec.title}</h4>
                  <span className="text-[10px] sm:text-2xs font-extrabold uppercase px-2 py-0.5 rounded bg-white border border-gray-200 text-gray-700">{sec.badge}</span>
                </div>
                <p className="text-2xs sm:text-xs text-gray-600 font-medium leading-relaxed">{sec.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between text-2xs sm:text-xs text-[#083f63] font-bold">
            <span className="flex items-center gap-1.5">
              <Icons.Award className="w-4 h-4 text-[#f05a00]" />
              <span>Journée active, concrète et orientée signature de partenariats.</span>
            </span>
            <span className="text-gray-400 font-normal">03 Septembre 2026</span>
          </div>
        </div>

        {/* RIGHT ZONE (~40% width): Grand cadre carré - Financement des infrastructures & partenariats */}
        <div className="lg:col-span-5 flex flex-col h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full rounded-[24px] shadow-2xl overflow-hidden border-2 border-white/80 min-h-[350px] lg:min-h-[450px]"
          >
            <img
              src={imgSlide16Day2}
              alt="Financement des infrastructures et partenariats PPP"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#083f63]/95 via-[#083f63]/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-2xs sm:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#159b37] text-white inline-block mb-2 shadow-md">
                Financement & PPP
              </span>
              <p className="text-sm sm:text-base font-extrabold leading-snug">
                Table de financement des infrastructures, structuration bancaire et accords G2G/B2B.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
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

  // REUSABLE MANDATORY INSTITUTIONAL HEADER (For Organizers & Leader slides if needed independently)
  const renderInstitutionalHeader = () => null;

  // 21. ORGANIZERS SLIDE - NOUVELLE SLIDE ULTRA-ÉPURÉE ET MINIMALISTE (Slide 22)
  if (type === 'organizers') {
    return (
      <div className="w-full h-full flex flex-col justify-between bg-white text-[#1f2933] overflow-hidden p-6 sm:p-10 lg:p-12">

        {/* Titre épuré */}
        <div className="my-auto max-w-5xl">
          <span className="text-xs font-black uppercase tracking-widest text-[#f05a00] block mb-2">• Alliance Stratégique</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#083f63] tracking-tight leading-tight mb-4">
            {slide.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl">
            {slide.subtitle}
          </p>
        </div>

        {/* 2 Colonnes pures (zéro carte, zéro fond gris, zéro bordure lourde) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 my-auto py-6 border-y border-slate-200/80">
          {content.columns?.map((col, idx) => {
            const isOrange = col.color === 'orange';
            const logo = isOrange ? logoAfrika : logoBenzei;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`flex flex-col justify-center ${idx === 1 ? 'md:border-l md:border-slate-200 md:pl-12 lg:pl-20' : ''}`}
              >
                <div className="h-16 lg:h-20 mb-6 flex items-center">
                  <img src={logo} alt={col.name} className="h-full max-w-[200px] lg:max-w-[240px] object-contain object-left" />
                </div>
                <h3 className="text-xl lg:text-2xl font-black text-[#083f63] mb-3">
                  {col.name}
                </h3>
                <p className="text-base lg:text-lg text-slate-700 leading-relaxed font-medium">
                  {col.role}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Phrase de fin discrète */}
        <div className="mt-auto pt-4 text-center">
          <p className="text-xs sm:text-sm font-bold text-slate-500 tracking-wide uppercase">
            • {content.closingSentence}
          </p>
        </div>
      </div>
    );
  }

  // 22. LEADER SLIDE - NOUVELLE SLIDE ULTRA-ÉPURÉE ET MINIMALISTE (Slide 23)
  if (type === 'leader') {
    return (
      <div className="w-full h-full flex flex-col justify-between bg-white text-[#1f2933] overflow-hidden p-6 sm:p-10 lg:p-12">

        {/* Contenu central asymétrique épuré */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center my-auto py-6">
          
          {/* Portrait pur à gauche (40% de l'espace) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[420px] aspect-[1/1] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
              <img
                src={bambaGallery4}
                alt="Magnatié Bamba et S.E.Mme Dominique Ouattara, Première Dame"
                className="w-full h-full object-cover object-top"
                style={{ imageRendering: 'high-quality' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#083f63]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#f05a00] text-white inline-block mb-1 shadow-sm">
                  • Prix d'Excellence 2024 — Palais Présidentiel
                </span>
              </div>
            </div>
          </motion.div>

          {/* Typographie exécutive et biographie à droite (60% de l'espace) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#083f63] tracking-tight leading-none mb-4">
              {slide.title}
            </h1>

            {/* Subtitle / Roles Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-5">
              {content.roles ? (
                content.roles.map((r, rIdx) => (
                  <span key={rIdx} className="px-3.5 py-1.5 rounded-lg bg-[#083f63] text-white text-xs sm:text-sm font-black tracking-wide shadow-sm flex items-center gap-1.5 border border-white/10">
                    <span className="text-[#f7c400] font-extrabold">•</span>
                    <span className="text-[#f7c400]">{r.title}</span>
                    <span className="text-white/95 font-bold">{r.org}</span>
                  </span>
                ))
              ) : (
                <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#f05a00]">
                  {slide.subtitle}
                </h2>
              )}
            </div>

            {/* Bio / Expertise */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 shadow-xs">
              <p className="text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed font-bold">
                {content.bio}
              </p>
            </div>

            {/* 3 repères clés en grille 3 colonnes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2 border-t border-slate-200">
              {content.highlights?.map((item, idx) => (
                <div key={idx} className="p-3 sm:p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="block text-xl lg:text-2xl font-black text-[#083f63] leading-none mb-1">
                      {item.year}
                    </span>
                    <span className="block text-xs font-bold text-[#f05a00] uppercase tracking-tight mb-1">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-snug font-medium mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Pied de page discret */}
        <div className="mt-auto text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            • Sommet CAMEPT 2026 — Libreville, Gabon •
          </p>
        </div>
      </div>
    );
  }

  // 24. FOLLOWUP SLIDE - AIRY, EXECUTIVE 2x2 BALANCED REDESIGN (Slide 24)
  if (type === 'followup') {
    return (
      <div className="flex flex-col justify-between gap-4 w-full h-full text-[#1f2933] overflow-hidden p-2 sm:p-4 bg-slate-50/40">

        {/* Top Title & Subtitle */}
        <div className="flex-shrink-0 mt-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-3 py-1 rounded-full bg-[#083f63]/10 text-[#083f63] font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Icons.ShieldCheck className="w-4 h-4 text-[#f05a00]" />
              <span>{slide.headerCategory || "HÉRITAGE & SUIVI"}</span>
            </span>
            <span className="text-xs font-bold text-[#f05a00] uppercase tracking-wide">• Redevabilité sur 3 ans</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#083f63] tracking-tight leading-tight mb-1">
            {slide.title}
          </h1>
          <p className="text-sm sm:text-base text-[#1f2933]/80 font-medium leading-relaxed max-w-4xl">
            {slide.subtitle}
          </p>
        </div>

        {/* 2x2 Executive Grid - Harmonious & Balanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 flex-1 min-h-0 items-stretch my-auto py-2">
          {content.steps?.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              className="rounded-2xl bg-white border-2 border-slate-200/80 hover:border-[#f05a00]/50 flex flex-row items-stretch transition-all shadow-sm hover:shadow-md group overflow-hidden"
            >
              {/* Left Badge Column */}
              <div className="w-20 sm:w-24 bg-gradient-to-br from-[#083f63] to-[#0a4d7a] text-white flex flex-col items-center justify-center p-3 flex-shrink-0 border-r border-white/10 group-hover:from-[#f05a00] group-hover:to-[#d04a00] transition-colors">
                <span className="text-3xl sm:text-4xl font-black font-mono tracking-tighter leading-none text-[#f7c400] group-hover:text-white transition-colors">
                  {st.step}
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/80 mt-1">
                  Phase
                </span>
              </div>

              {/* Right Content Column */}
              <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 min-w-0">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-2xs font-extrabold uppercase tracking-wider text-[#f05a00] bg-[#f05a00]/10 px-2.5 py-0.5 rounded-full">
                      Jalon Stratégique #{idx + 1}
                    </span>
                    <Icons.CheckCircle2 className="w-4 h-4 text-[#083f63] group-hover:text-[#f05a00] transition-colors flex-shrink-0" />
                  </div>

                  <h4 className="text-base sm:text-lg lg:text-xl font-black text-[#083f63] mb-2 leading-snug group-hover:text-[#f05a00] transition-colors">
                    {st.title}
                  </h4>

                  <p className="text-xs sm:text-sm md:text-base text-slate-600 font-semibold leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                {/* Bottom status indicator */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-2xs font-bold text-slate-400">
                  <span>Mécanisme officiel CAMEPT</span>
                  <span className="text-[#083f63] group-hover:text-[#f05a00] font-black inline-flex items-center gap-1 transition-colors">
                    Action effective <Icons.ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Bottom Banner */}
        <div className="py-2.5 px-6 bg-[#083f63] text-white rounded-xl border-l-4 border-[#f05a00] shadow-md flex items-center justify-center gap-2.5 flex-shrink-0 text-center">
          <Icons.Star className="w-4 h-4 text-[#f7c400] flex-shrink-0 fill-current" />
          <p className="text-xs sm:text-sm font-extrabold tracking-wide">
            {content.finalMessage}
          </p>
        </div>
      </div>
    );
  }

  // 23. GRAND CLOSING SLIDE - REMERCIEMENTS SOLENNELS & CLÔTURE OFFICIELLE
  if (type === 'closing') {
    return (
      <div className="flex flex-col justify-between gap-4 sm:gap-5 w-full h-full text-slate-800 overflow-y-auto custom-scrollbar p-2">
        {/* Top Header Box: Title & Subtitle */}
        <div className="text-center bg-gradient-to-r from-[#083f63] via-[#0a4d7a] to-[#083f63] text-white p-5 sm:p-6 rounded-2xl shadow-elevated flex-shrink-0">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3.5 py-1 rounded-full text-2xs font-extrabold text-camept-yellow uppercase tracking-widest mb-2">
            <Icons.Award className="w-3.5 h-3.5" />
            <span>Gratitude & Reconnaissance Institutionnelle</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-2">
            {content.title}
          </h1>
          <p className="text-xs sm:text-sm text-gray-200 font-medium max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* 4 Thanks Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch w-full flex-shrink-0">
          {content.thanks?.map((th, idx) => {
            const accents = ['border-camept-blue', 'border-camept-orange', 'border-camept-green', 'border-amber-500'];
            const badges = ['bg-camept-blue/10 text-camept-blue', 'bg-camept-orange/10 text-camept-orange', 'bg-camept-green/10 text-camept-green', 'bg-amber-100 text-amber-800'];
            return (
              <motion.div
                key={idx}
                className={`p-4 sm:p-5 rounded-xl bg-white shadow-card hover:shadow-elevated transition-all border-l-4 ${accents[idx % 4]} flex flex-col justify-between`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-2xs font-black px-2.5 py-0.5 rounded uppercase tracking-wider ${badges[idx % 4]}`}>
                      Hommage #{idx + 1}
                    </span>
                    <Icons.Sparkles className="w-4 h-4 text-camept-orange flex-shrink-0" />
                  </div>
                  <h3 className="text-sm sm:text-base font-black text-camept-dark leading-snug mb-1">
                    {th.target}
                  </h3>
                  <h4 className="text-2xs sm:text-xs font-bold text-camept-orange uppercase tracking-wide mb-2">
                    {th.role}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-medium">
                    {th.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Official 3 Logos Showcase with Perfect Transparency (mix-blend-multiply) */}
        <div className="bg-white/95 border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-card flex flex-col items-center justify-center flex-shrink-0">
          <span className="text-2xs sm:text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-4">
            {content.logosTitle || "Une organisation institutionnelle signée par :"}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-20">
            {/* Logo République Gabonaise */}
            <div className="flex flex-col items-center group">
              <img 
                src={logoGabon} 
                alt="République Gabonaise" 
                className="h-16 sm:h-20 md:h-24 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-2xs font-extrabold text-slate-400 mt-2 uppercase tracking-wider">République Gabonaise</span>
            </div>

            {/* Logo Afrika Transtour */}
            <div className="flex flex-col items-center group">
              <img 
                src={logoAfrika} 
                alt="Afrika Transtour" 
                className="h-14 sm:h-18 md:h-22 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-2xs font-extrabold text-slate-400 mt-2 uppercase tracking-wider">Afrika Transtour</span>
            </div>

            {/* Logo Benzei Group */}
            <div className="flex flex-col items-center group">
              <img 
                src={logoBenzei} 
                alt="Benzei Group" 
                className="h-14 sm:h-18 md:h-22 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-2xs font-extrabold text-slate-400 mt-2 uppercase tracking-wider">Benzei Group</span>
            </div>
          </div>
        </div>

        {/* Contact info bar & Final Quote */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-camept-dark via-black to-camept-dark text-white shadow-elevated border border-white/10 flex-shrink-0 mt-auto">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="p-2 rounded-lg bg-camept-yellow/20 text-camept-yellow hidden sm:block">
              <Icons.Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-camept-yellow">{content.contact?.title}</h4>
              <p className="text-2xs sm:text-xs text-gray-300 font-medium">{content.contact?.dates}</p>
            </div>
          </div>
          <div className="text-2xs sm:text-xs font-mono text-gray-300 text-center sm:text-right space-y-0.5">
            {content.contact?.web && <div><span className="text-camept-orange font-bold">Web :</span> {content.contact?.web}</div>}
            <div><span className="text-camept-orange font-bold">Email :</span> {content.contact?.email}</div>
          </div>
        </div>
      </div>
    );
  }

  // 27. FINAL THANKS SLIDE - EXECUTIVE BLUE WITH MME BAMBA TROPHY PHOTO & BALANCED LOGOS
  if (type === 'final_thanks') {
    return (
      <div className="w-full h-full min-h-full flex flex-col justify-between bg-gradient-to-br from-[#041a2f] via-[#083f63] to-[#02101e] text-white p-6 sm:p-8 lg:p-10 relative overflow-hidden font-sans select-none">
        
        {/* Background Decorative Accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#f05a00]/25 via-camept-yellow/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-400/15 via-blue-600/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        {/* Top Equilibrium Bar: All Official Logos Balanced in Symmetric Glory */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-20 w-full max-w-6xl mx-auto bg-white/95 backdrop-blur-md px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-2xl border border-white/30 flex items-center justify-between gap-4 sm:gap-8 flex-shrink-0"
        >
          {/* République Gabonaise */}
          <div className="flex items-center">
            <img src={logoGabon} alt="République Gabonaise" className="h-14 sm:h-18 lg:h-[76px] w-auto object-contain mix-blend-multiply transition-transform hover:scale-105" />
          </div>
          {/* Afrika Transtour */}
          <div className="flex items-center justify-center">
            <img src={logoAfrika} alt="Afrika Transtour" className="h-12 sm:h-16 lg:h-[68px] w-auto object-contain mix-blend-multiply transition-transform hover:scale-105" />
          </div>
          {/* Benzei Group */}
          <div className="flex items-center">
            <img src={logoBenzei} alt="Benzei Group" className="h-14 sm:h-18 lg:h-[76px] w-auto object-contain mix-blend-multiply transition-transform hover:scale-105" />
          </div>
          {/* CAMEPT 2026 */}
          <div className="flex items-center justify-center border-l-2 border-slate-200 pl-4 sm:pl-6">
            <div className="font-sans font-black tracking-tighter text-lg sm:text-xl lg:text-3xl text-[#083f63] flex items-center">
              <span>CAMEPT</span>
              <span className="text-[#f05a00] ml-1">2026</span>
            </div>
          </div>
        </motion.header>

        {/* Center Zone: Mme BAMBA Trophy Showcase & Solennel Gratitude Typography */}
        <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-14 max-w-6xl mx-auto my-auto py-6">
          {/* Left Side: Photo of Mme BAMBA with Prix d'Excellence Trophy */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex-shrink-0 group"
          >
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#f05a00] via-camept-yellow to-white rounded-[2.25rem] blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-[320px] lg:h-[410px] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/50 bg-slate-900 flex flex-col justify-end">
              <img 
                src={bambaPhotoFinal} 
                alt="Magnatié BAMBA - Prix d'Excellence 2024" 
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                style={{ imageRendering: 'high-quality' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041a2f] via-[#041a2f]/40 to-transparent" />
              <div className="relative z-10 p-5 text-center bg-[#041a2f]/85 backdrop-blur-md border-t border-white/20">
                <span className="text-[10px] sm:text-2xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[#f05a00] text-white inline-block mb-2 shadow-md">
                  ★ Prix d'Excellence 2024 ★
                </span>
                <h4 className="text-lg sm:text-xl font-black text-white tracking-wide">Magnatié BAMBA</h4>
                <p className="text-xs font-extrabold text-camept-yellow uppercase tracking-widest mt-0.5">Directrice Générale, Afrika Transtour</p>
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mt-1">Co-Organisatrice CAMEPT 2026</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Typography */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-camept-yellow font-black text-xs sm:text-sm uppercase tracking-widest shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f05a00] animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f05a00] absolute" />
              <span>Clôture Solennelle & Gratitude</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-camept-yellow drop-shadow-2xl">
              JE VOUS REMERCIE
            </h1>

            <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-200 leading-relaxed max-w-xl">
              Pour votre aimable attention, votre confiance institutionnelle et votre engagement solennel envers l’essor d’une Afrique souveraine, industrielle et prospère.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <div className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#f05a00] to-[#d04a00] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#f05a00]/30 border border-white/25 flex items-center space-x-2">
                <span>Rendez-vous à Libreville • 02-04 Sept. 2026</span>
              </div>
              <div className="px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider border border-white/20">
                <span>Palais des Congrès Omar Bongo</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer Bar */}
        <motion.footer 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative z-20 w-full max-w-6xl mx-auto bg-black/40 backdrop-blur-md px-6 sm:px-8 py-3.5 rounded-2xl border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-300 font-semibold flex-shrink-0"
        >
          <div className="flex items-center space-x-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-camept-yellow" />
            <span className="text-white font-extrabold tracking-wide">CAMEPT 2026 • 1Ère ÉDITION • LIBREVILLE, GABON</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-camept-yellow font-bold">Sous le Haut Parrainage de S.E.M. Brice Clotaire OLIGUI N'GUEMA</span>
          </div>
        </motion.footer>
      </div>
    );
  }

  return (
    <div className="p-8 text-center text-gray-500">
      Content for slide type <code className="text-camept-orange">{type}</code> not found.
    </div>
  );
};
