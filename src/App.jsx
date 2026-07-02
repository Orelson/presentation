import React, { useState, useEffect } from 'react';
import { slidesData } from './data/slides';
import { SlideShell } from './components/SlideShell';
import { SlideContent } from './components/SlideContent';
import { Navigation } from './components/Navigation';
import { ProgressBar } from './components/ProgressBar';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);

  // Initialize from URL hash if present (e.g., #slide-5)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#slide-')) {
        const slideNum = parseInt(hash.replace('#slide-', ''), 10);
        if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= slidesData.length) {
          setCurrentSlide(slideNum);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update URL hash when slide changes
  const handleNavigate = (newSlideNum) => {
    if (newSlideNum >= 1 && newSlideNum <= slidesData.length) {
      setCurrentSlide(newSlideNum);
      window.history.pushState(null, '', `#slide-${newSlideNum}`);
    }
  };

  const currentSlideData = slidesData.find((s) => s.id === currentSlide) || slidesData[0];

  return (
    <div className="min-h-screen bg-gray-950 font-sans text-gray-800 antialiased selection:bg-camept-orange selection:text-white relative overflow-hidden">
      {/* Top Animated Progress Bar */}
      <ProgressBar currentSlide={currentSlide} totalSlides={slidesData.length} />

      {/* Main 16:9 Slide Shell & Content */}
      <main className="w-full h-screen">
        <SlideShell slide={currentSlideData}>
          <SlideContent slide={currentSlideData} />
        </SlideShell>
      </main>

      {/* Navigation Controls (Arrows, Sommaire, Export PDF, Fullscreen) */}
      <Navigation
        currentSlide={currentSlide}
        onNavigate={handleNavigate}
        onJump={handleNavigate}
      />
    </div>
  );
}
