import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoGabon from '../assets/logo-gabon.png';
import logoAfrika from '../assets/logo-afrika.png';
import logoBenzei from '../assets/logo-benzei.png';

export const SlideShell = ({ slide, children, totalSlides = 24 }) => {
  const isSpecialSlide = slide.type === 'cover' || slide.type === 'followup' || slide.type === 'closing';

  // Animation variants for smooth slide transitions (350 - 600 ms)
  const slideVariants = {
    initial: {
      opacity: 0,
      scale: 0.99,
      y: 8
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 1.01,
      y: -8,
      transition: {
        duration: 0.25,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className="w-full h-full min-h-screen bg-gray-950 flex items-center justify-center p-0 lg:p-3 xl:p-6 overflow-hidden">
      {/* 
        Responsive Slide Container:
        - Mobile & Tablet (< lg): Full width, auto height, natural vertical flow
        - Desktop Projection (>= lg): Centered 16:9 ratio, responsive max height
      */}
      <div className="slide-container w-full min-h-screen lg:min-h-0 lg:h-full lg:max-w-[calc((100vh-1.5rem)*16/9)] lg:max-h-[calc(100vh-1.5rem)] lg:aspect-[16/9] bg-camept-bg relative lg:overflow-hidden lg:shadow-2xl lg:rounded-xl border-0 lg:border lg:border-white/10 flex flex-col justify-between pb-20 lg:pb-0 mx-auto my-auto">
        
        {/* Larana-inspired Geometric Background Polygons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top-right slanted background accent */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-camept-blue/5 to-camept-cyan/10 transform rotate-12 rounded-full blur-3xl" />
          
          {/* Bottom-left geometric polygonal ribbon graphic */}
          <div className="absolute bottom-0 left-0 w-80 h-32 bg-gradient-to-tr from-camept-dark/5 to-transparent clip-diagonal-right pointer-events-none hidden lg:block" />

          {/* Subtle grid texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0B63A3_1px,transparent_1px),linear-gradient(to_bottom,#0B63A3_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        {/* Mandatory Institutional Top Bar on ALL slides (Increased height, larger logos, pure transparent backgrounds) */}
        <header className="relative z-20 w-full px-6 sm:px-8 lg:px-12 py-3 sm:py-3.5 bg-white/98 backdrop-blur-md border-b-2 border-[#083f63] flex items-center justify-between gap-6 flex-shrink-0 shadow-xs min-h-[90px] max-h-[135px]">
          {/* Extreme Left: République Gabonaise */}
          <div className="flex items-center space-x-4 sm:space-x-5">
            <img src={logoGabon} alt="République Gabonaise" className="h-16 sm:h-20 lg:h-[96px] w-auto object-contain bg-transparent mix-blend-multiply transition-transform duration-300 hover:scale-105" />
            {slide.headerCategory && slide.type !== 'cover' && (
              <span className="hidden sm:inline-block text-[11px] sm:text-xs font-extrabold px-3.5 py-1.5 rounded bg-[#083f63]/10 text-[#083f63] tracking-wider uppercase border border-[#083f63]/20">
                {slide.headerCategory}
              </span>
            )}
          </div>

          {/* Middle: Afrika Transtour */}
          <div className="flex items-center justify-center">
            <img src={logoAfrika} alt="Afrika Transtour" className="h-14 sm:h-[72px] lg:h-[88px] w-auto object-contain bg-transparent mix-blend-multiply transition-transform duration-300 hover:scale-105" />
          </div>

          {/* Right: Benzei Group + CAMEPT 2026 Badge */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <img src={logoBenzei} alt="Benzei Group" className="h-16 sm:h-20 lg:h-[96px] w-auto object-contain bg-transparent mix-blend-multiply transition-transform duration-300 hover:scale-105" />
            <div className="hidden md:flex items-center font-sans font-black tracking-tighter text-base sm:text-lg lg:text-2xl text-[#083f63] border-l-2 border-gray-300 pl-4 sm:pl-5">
              <span>CAMEPT</span>
              <span className="text-[#f05a00] ml-0.5">2026</span>
            </div>
          </div>
        </header>

        {/* Main Slide Content Area - Robust Scrollable with justify-start to NEVER push title under header */}
        <div className={`relative z-10 flex-1 min-h-0 flex flex-col justify-start px-4 sm:px-6 lg:px-8 ${isSpecialSlide ? 'p-0 overflow-hidden' : 'pt-3 sm:pt-4 pb-12 sm:pb-14 overflow-y-auto custom-scrollbar'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex-1 flex flex-col justify-start my-auto"
            >
              {/* Internal slide header with title - Strictly pinned at top */}
              {!isSpecialSlide && (
                <div className="mb-3 sm:mb-4 flex-shrink-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-8 sm:w-12 lg:w-16 h-1 sm:h-1.5 bg-[#f05a00] rounded-full" />
                  </div>
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[#083f63] tracking-tight leading-tight">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="text-xs sm:text-sm md:text-base font-medium text-[#1f2933] mt-0.5 max-w-4xl leading-snug">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
              )}

              {/* Render dynamic child content */}
              <div className="flex-1 min-h-0 flex flex-col justify-center">
                {children}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Discrete Footer Bar for internal slides */}
        {!isSpecialSlide && (
          <footer className="relative z-20 px-4 sm:px-8 lg:px-10 py-2 bg-white border-t border-gray-200 flex items-center justify-between text-[11px] sm:text-xs text-[#1f2933] font-medium flex-shrink-0 hidden sm:flex">
            <div className="flex items-center space-x-2.5">
              <div className="w-2 h-2 rounded-full bg-[#f05a00]" />
              <span className="font-extrabold text-[#083f63]">CAMEPT 2026</span>
              <span className="text-gray-300">•</span>
              <span>Palais des Congrès Omar Bongo Odimba • Libreville (02 • 04 Septembre 2026)</span>
            </div>
            <div className="flex items-center space-x-4 font-semibold">
              <span className="font-extrabold px-2 py-0.5 bg-[#083f63]/10 text-[#083f63] rounded border border-[#083f63]/20">
                Slide {slide.id} / {totalSlides}
              </span>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
};
