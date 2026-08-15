import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, ChevronLeft, ChevronRight, VolumeX } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 6;

  // Simple scroll spy to update the current slide number
  useEffect(() => {
    const handleScroll = (e) => {
      const container = e.target;
      const slideHeight = window.innerHeight;
      const scrolled = container.scrollTop;
      const newSlide = Math.round(scrolled / slideHeight) + 1;
      if (newSlide !== currentSlide) {
        setCurrentSlide(newSlide);
      }
    };
    
    const container = document.getElementById('deck-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentSlide]);

  const scrollToSlide = (direction) => {
    const container = document.getElementById('deck-container');
    if (!container) return;
    
    const slideHeight = window.innerHeight;
    const targetScroll = direction === 'next' 
      ? container.scrollTop + slideHeight 
      : container.scrollTop - slideHeight;
      
    container.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app-wrapper" style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      
      {/* Scrollable Container */}
      <div className="top-logo">ANUSHA</div>
      <div id="deck-container" className="deck-container">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Contact />
      </div>

      {/* Global Presenter Notes / Navigation Footer */}
      <div className="footer-wrapper">

        
        <div className="footer-nav-row">
          <button onClick={() => scrollToSlide('prev')} className="nav-btn">
            <ChevronLeft size={20} strokeWidth={3} /> PREV
          </button>
          
          <button className="menu-btn">
            <Menu size={24} strokeWidth={3} />
          </button>
          
          <button onClick={() => scrollToSlide('next')} className="nav-btn">
            NEXT <ChevronRight size={20} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
