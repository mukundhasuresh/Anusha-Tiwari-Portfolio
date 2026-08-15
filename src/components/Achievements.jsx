import React from 'react';

const Achievements = () => {
  return (
    <section className="slide bg-pink" style={{ padding: 'clamp(1rem, 5vw, 2rem)' }}>
      <div style={{ position: 'absolute', top: 'clamp(5rem, 12vh, 15%)', zIndex: 1, textAlign: 'center', width: '100%' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', color: 'var(--color-black)', margin: 0 }}>THE WINS.</h2>
      </div>

      <div className="wins-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2rem', 
        width: '100%', 
        maxWidth: '1200px', 
        marginTop: 'clamp(4rem, 15vh, 8rem)',
        zIndex: 2 
      }}>
        <div className="bg-white border-black shadow-hard win-card" style={{ padding: 'clamp(0.8rem, 3vw, 2rem)' }}>
          <h3 style={{ fontSize: 'clamp(1.2rem, 5vw, 2rem)', marginBottom: 'clamp(0.2rem, 1vw, 1rem)' }}>TOP 6</h3>
          <p style={{ fontWeight: '600', fontSize: 'clamp(0.8rem, 3vw, 1rem)', margin: 0 }}>Out of 100+ teams in Research & Data Competition (Valfee, 2022).</p>
        </div>
        
        <div className="bg-lime border-black shadow-hard win-card" style={{ padding: 'clamp(0.8rem, 3vw, 2rem)' }}>
          <h3 style={{ fontSize: 'clamp(1.2rem, 5vw, 2rem)', marginBottom: 'clamp(0.2rem, 1vw, 1rem)' }}>2X MEDALIST</h3>
          <p style={{ fontWeight: '600', fontSize: 'clamp(0.8rem, 3vw, 1rem)', margin: 0 }}>Silver medalist in French Olympiad. A1 Certified, working toward A2.</p>
        </div>
        
        <div className="bg-beige border-black shadow-hard win-card" style={{ padding: 'clamp(0.8rem, 3vw, 2rem)' }}>
          <h3 style={{ fontSize: 'clamp(1.2rem, 5vw, 2rem)', marginBottom: 'clamp(0.2rem, 1vw, 1rem)' }}>1ST PLACE</h3>
          <p style={{ fontWeight: '600', fontSize: 'clamp(0.8rem, 3vw, 1rem)', margin: 0 }}>Enactovate by Enactus Kirori Mal in Networking Mixer category.</p>
        </div>
        
        <div className="bg-white border-black shadow-hard win-card" style={{ padding: 'clamp(0.8rem, 3vw, 2rem)' }}>
          <h3 style={{ fontSize: 'clamp(1.2rem, 5vw, 2rem)', marginBottom: 'clamp(0.2rem, 1vw, 1rem)' }}>200/200</h3>
          <p style={{ fontWeight: '600', fontSize: 'clamp(0.8rem, 3vw, 1rem)', margin: 0 }}>Perfect score in Business Studies (CUET 2024). President of Literary Club.</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
