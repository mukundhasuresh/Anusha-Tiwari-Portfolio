import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Skills = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  
  const cards = [
    {
      title: "COMMUNICATION",
      desc: "Public speaking, anchoring, persuasive writing, multilingual (French A1).",
      rotation: "-5deg"
    },
    {
      title: "RELATIONSHIPS",
      desc: "Networking, external outreach, partnership development.",
      rotation: "2deg"
    },
    {
      title: "EXECUTION",
      desc: "Event coordination, project management, sustainability campaigns.",
      rotation: "6deg"
    }
  ];

  const nextCard = () => {
    setActiveIdx((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setActiveIdx((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className="slide bg-lime" style={{ padding: '0' }}>
      <div style={{ position: 'absolute', top: '10%', zIndex: 1, width: '100%', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'var(--color-black)' }}>SKILLS</h2>
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: 'clamp(1rem, 5vw, 4rem)', 
        zIndex: 2, 
        marginTop: '3rem', 
        width: '100vw', 
        padding: '2rem'
      }}>
        
        <button 
          onClick={prevCard} 
          style={{ 
            background: 'white', border: '3px solid black', borderRadius: '50%', 
            width: '50px', height: '50px', display: 'flex', justifyContent: 'center', 
            alignItems: 'center', cursor: 'pointer', zIndex: 3, flexShrink: 0 
          }}
        >
          <ChevronLeft size={24} strokeWidth={3} />
        </button>

        <div 
          className="border-black shadow-hard bg-beige"
          style={{
            width: '80vw',
            maxWidth: '350px',
            height: 'clamp(280px, 50vh, 400px)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            transform: `rotate(${cards[activeIdx].rotation})`,
            transition: 'transform 0.3s ease',
            cursor: 'default',
            position: 'relative',
            zIndex: 2
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✦</div>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{cards[activeIdx].title}</h3>
          <p style={{ fontSize: '1rem', fontWeight: '600' }}>{cards[activeIdx].desc}</p>
        </div>

        <button 
          onClick={nextCard} 
          style={{ 
            background: 'white', border: '3px solid black', borderRadius: '50%', 
            width: '50px', height: '50px', display: 'flex', justifyContent: 'center', 
            alignItems: 'center', cursor: 'pointer', zIndex: 3, flexShrink: 0 
          }}
        >
          <ChevronRight size={24} strokeWidth={3} />
        </button>
        
      </div>
    </section>
  );
};

export default Skills;
