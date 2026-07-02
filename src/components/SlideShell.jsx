import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SlideShell = ({ slide, children }) => {
  const isSpecialSlide = slide.type === 'cover' || slide.type === 'closing';

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
    <div className="w-full min-h-screen bg-gray-950 flex items-center justify-center p-0 lg:p-3 xl:p-6 overflow-y-auto lg:overflow-hidden">
      {/* 
        Responsive Slide Container:
        - Mobile & Tablet (< lg): Full width, auto height, natural vertical flow
        - Desktop Projection (>= lg): Centered 16:9 ratio, responsive max height
      */}
      <div className="slide-container w-full min-h-screen lg:min-h-0 lg:h-full lg:max-w-[1778px] lg:max-h-[calc(100vh-1.5rem)] lg:aspect-[16/9] bg-camept-bg relative lg:overflow-hidden lg:shadow-2xl lg:rounded-xl border-0 lg:border lg:border-white/10 flex flex-col justify-between pb-20 lg:pb-0">
        
        {/* Larana-inspired Geometric Background Polygons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top-right slanted background accent */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-camept-blue/5 to-camept-cyan/10 transform rotate-12 rounded-full blur-3xl" />
          
          {/* Bottom-left geometric polygonal ribbon graphic */}
          <div className="absolute bottom-0 left-0 w-80 h-32 bg-gradient-to-tr from-camept-dark/5 to-transparent clip-diagonal-right pointer-events-none hidden lg:block" />

          {/* Subtle grid texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0B63A3_1px,transparent_1px),linear-gradient(to_bottom,#0B63A3_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        {/* Institutional Top Bar (for internal slides) */}
        {!isSpecialSlide && (
          <header className="relative z-20 px-4 sm:px-6 lg:px-8 py-2.5 bg-white/95 backdrop-blur-md border-b border-gray-200/80 flex items-center justify-between flex-wrap gap-2 flex-shrink-0 shadow-2xs">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1.5 border-r border-gray-300 pr-3">
                <div className="w-3.5 h-2.5 bg-green-600 rounded-2xs" />
                <div className="w-3.5 h-2.5 bg-yellow-400 rounded-2xs -ml-2" />
                <div className="w-3.5 h-2.5 bg-blue-600 rounded-2xs -ml-2" />
                <span className="text-2xs sm:text-xs font-bold text-gray-700 tracking-wider uppercase ml-1">
                  République Gabonaise
                </span>
              </div>
              <span className="text-2xs sm:text-xs font-semibold text-gray-500 uppercase tracking-widest hidden sm:inline">
                Benzei Group • Afrika Transtour
              </span>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <span className="text-2xs sm:text-xs font-extrabold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-camept-blue/10 text-camept-blue tracking-wider uppercase">
                {slide.headerCategory}
              </span>
              <div className="flex items-center font-sans font-extrabold tracking-tighter text-xs sm:text-sm lg:text-base text-camept-dark">
                <span>CAMEPT</span>
                <span className="text-camept-orange ml-0.5">2026</span>
              </div>
            </div>
          </header>
        )}

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
                    <div className="w-8 sm:w-12 lg:w-16 h-1 sm:h-1.5 bg-camept-orange rounded-full" />
                  </div>
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-camept-dark tracking-tight leading-tight">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="text-xs sm:text-sm md:text-base font-medium text-gray-600 mt-0.5 max-w-4xl leading-snug">
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

        {/* Footer Bar for internal slides */}
        {!isSpecialSlide && (
          <footer className="relative z-20 px-4 sm:px-6 lg:px-8 py-1.5 bg-gray-100/95 border-t border-gray-200/80 flex items-center justify-between text-2xs sm:text-xs text-gray-500 font-medium flex-shrink-0 hidden sm:flex">
            <span>Palais des Congrès Omar Bongo Odimba • Libreville (02-04 Sept. 2026)</span>
            <span className="hidden md:inline font-semibold text-camept-blue">www.camept-gabon.com</span>
            <span>Document Institutionnel • 16:9 Webapp</span>
          </footer>
        )}
      </div>
    </div>
  );
};
