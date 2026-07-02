import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Printer, Grid, X } from 'lucide-react';
import { slidesData } from '../data/slides';

export const Navigation = ({ currentSlide, onNavigate, onJump }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showOverview, setShowOverview] = useState(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showOverview) {
        if (e.key === 'Escape') setShowOverview(false);
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        if (currentSlide < slidesData.length) {
          onNavigate(currentSlide + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSlide > 1) {
          onNavigate(currentSlide - 1);
        }
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'g' || e.key === 'G' || e.key === 'm' || e.key === 'M') {
        setShowOverview(!showOverview);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, showOverview, onNavigate]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Footer Navigation Bar (No Print) */}
      <div className="no-print fixed bottom-3 left-3 right-3 sm:left-6 sm:right-6 md:bottom-4 md:left-10 md:right-10 flex items-center justify-between z-40 pointer-events-none">
        {/* Left Controls: Overview & Print */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 pointer-events-auto bg-white/80 backdrop-blur-md p-1.5 rounded-xl shadow-lg border border-gray-200/80">
          <button
            onClick={() => setShowOverview(true)}
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-white hover:bg-camept-blue hover:text-white text-camept-dark shadow-sm border border-gray-100 flex items-center space-x-1.5 transition-all duration-200 text-xs font-semibold uppercase tracking-wider"
            aria-label="Aperçu des 20 slides"
            title="Aperçu des slides (G)"
          >
            <Grid className="w-4 h-4 text-camept-blue group-hover:text-white" />
            <span className="hidden sm:inline">Sommaire</span>
          </button>

          <button
            onClick={handlePrint}
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-white hover:bg-gray-100 text-gray-700 shadow-sm border border-gray-100 flex items-center space-x-1.5 transition-all duration-200 text-xs font-medium"
            aria-label="Exporter en PDF ou Imprimer"
            title="Imprimer / PDF"
          >
            <Printer className="w-4 h-4 text-camept-orange" />
            <span className="hidden lg:inline">PDF</span>
          </button>
        </div>

        {/* Center: Slide Number Indicator */}
        <div className="pointer-events-auto bg-camept-darker/95 backdrop-blur-md text-white px-3.5 py-2 sm:px-5 sm:py-2 rounded-full shadow-xl border border-white/15 flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm font-bold tracking-widest font-sans">
          <span className="text-camept-yellow">{String(currentSlide).padStart(2, '0')}</span>
          <span className="text-gray-400">/</span>
          <span>{String(slidesData.length).padStart(2, '0')}</span>
        </div>

        {/* Right Controls: Prev, Next, Fullscreen */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 pointer-events-auto bg-white/80 backdrop-blur-md p-1.5 rounded-xl shadow-lg border border-gray-200/80">
          <button
            onClick={() => currentSlide > 1 && onNavigate(currentSlide - 1)}
            disabled={currentSlide === 1}
            className={`p-2 sm:p-2 rounded-lg shadow-sm border border-gray-100 transition-all duration-200 ${
              currentSlide === 1
                ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                : 'bg-white hover:bg-camept-blue hover:text-white text-camept-dark'
            }`}
            aria-label="Slide précédente (Flèche gauche)"
            title="Précédent"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={() => currentSlide < slidesData.length && onNavigate(currentSlide + 1)}
            disabled={currentSlide === slidesData.length}
            className={`p-2 sm:p-2 rounded-lg shadow-sm border border-gray-100 transition-all duration-200 ${
              currentSlide === slidesData.length
                ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                : 'bg-camept-orange hover:bg-camept-orange-light text-white'
            }`}
            aria-label="Slide suivante (Flèche droite)"
            title="Suivant"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 sm:p-2 rounded-lg bg-white hover:bg-gray-100 text-camept-dark shadow-sm border border-gray-100 transition-all duration-200 hidden sm:block"
            aria-label="Basculer en plein écran"
            title="Plein écran (F)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5" /> : <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      {/* Slide Overview Modal Drawer */}
      {showOverview && (
        <div className="no-print fixed inset-0 bg-camept-darker/90 backdrop-blur-md z-50 flex flex-col justify-between p-4 sm:p-8 lg:p-12 animate-fadeIn overflow-y-auto">
          <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 border-b border-white/20 flex-shrink-0">
            <div>
              <h2 className="text-lg sm:text-2xl font-extrabold text-white">
                Sommaire Exécutif • CAMEPT 2026
              </h2>
              <p className="text-2xs sm:text-xs text-camept-yellow font-medium">
                Sélectionnez une slide pour y accéder directement
              </p>
            </div>
            <button
              onClick={() => setShowOverview(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Fermer le sommaire"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4 overflow-y-auto flex-1 pr-1 sm:pr-2 custom-scrollbar">
            {slidesData.map((slide) => (
              <div
                key={slide.id}
                onClick={() => {
                  onJump(slide.id);
                  setShowOverview(false);
                }}
                className={`p-3 sm:p-4 rounded-lg cursor-pointer transition-all duration-200 border flex flex-col justify-between h-24 sm:h-28 lg:h-32 ${
                  currentSlide === slide.id
                    ? 'bg-camept-blue text-white border-camept-yellow ring-2 ring-camept-yellow shadow-xl scale-102 sm:scale-105'
                    : 'bg-white/95 text-camept-dark hover:bg-white border-transparent hover:scale-102 shadow-md'
                }`}
              >
                <div className="flex justify-between items-start gap-1">
                  <span className={`text-2xs sm:text-xs font-bold px-1.5 py-0.5 rounded ${currentSlide === slide.id ? 'bg-camept-yellow text-camept-darker' : 'bg-camept-bg text-camept-blue'}`}>
                    #{String(slide.id).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-semibold opacity-75 truncate max-w-[80px]">
                    {slide.headerCategory.split(' ')[0]}
                  </span>
                </div>
                <h4 className="text-2xs sm:text-xs font-bold leading-snug line-clamp-2 mt-1 sm:mt-2">
                  {slide.title}
                </h4>
              </div>
            ))}
          </div>

          <div className="mt-4 sm:mt-6 pt-3 border-t border-white/10 text-center text-2xs sm:text-xs text-gray-400 flex-shrink-0">
            Raccourcis clavier : <span className="text-white font-mono bg-white/10 px-1.5 py-0.5 rounded">➔ / Espace</span> Suivant • <span className="text-white font-mono bg-white/10 px-1.5 py-0.5 rounded">⬅</span> Précédent • <span className="text-white font-mono bg-white/10 px-1.5 py-0.5 rounded">F</span> Plein écran • <span className="text-white font-mono bg-white/10 px-1.5 py-0.5 rounded">G</span> Grille
          </div>
        </div>
      )}
    </>
  );
};
