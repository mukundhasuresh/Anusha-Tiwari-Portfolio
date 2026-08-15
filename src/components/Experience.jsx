import React from 'react';

const Experience = () => {
  return (
    <section className="slide bg-beige" style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 'clamp(0.5rem, 2vw, 4rem)', padding: 'clamp(1rem, 5vw, 2rem)' }}>
      <div style={{ flex: '1 1 300px', zIndex: 2, marginTop: 'clamp(0rem, 2vh, 2rem)' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: '1', color: 'var(--color-black)', marginBottom: '0.5rem' }}>
          MY <br />
          <span className="highlight">EXPERIENCE</span>
        </h2>
        <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', fontWeight: '600', maxWidth: '400px' }}>
          Real-world execution, stakeholder outreach, and project leadership.
        </p>
      </div>

      <div style={{ flex: '1 1 400px', position: 'relative', zIndex: 2, marginTop: '0', paddingBottom: 'clamp(0rem, 2vh, 1rem)' }}>
        {/* Red Thumbtack */}
        <div style={{ 
          position: 'absolute', top: '-15px', right: 'clamp(10px, 5vw, 40px)', 
          width: '30px', height: '30px', background: '#e53935', 
          borderRadius: '50%', boxShadow: '4px 4px 0 rgba(0,0,0,0.2)', zIndex: 10 
        }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', width: '10px', height: '10px', background: 'white', borderRadius: '50%', transform: 'translate(-50%, -50%)', opacity: 0.5 }}></div>
        </div>

        {/* Paper Container */}
        <div className="bg-white border-black shadow-hard" style={{ padding: 'clamp(1rem, 3vw, 2.5rem)', transform: 'rotate(1deg)' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 'clamp(0.85rem, 2.2vw, 1.2rem)', fontWeight: 'bold', display: 'flex', flexDirection: 'column', gap: 'clamp(0.6rem, 1.5vw, 1.5rem)' }}>
            <li>
              <span style={{ color: 'var(--color-pink)', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', marginRight: '10px' }}>1.</span> 
              ENACTUS GARGI: NGO outreach, secured sponsorships, managed 600+ footfall event.
            </li>
            <li>
              <span style={{ color: 'var(--color-pink)', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', marginRight: '10px' }}>2.</span> 
              VALFEE: Marketing Project Manager. Placed Top 6 across 100+ teams.
            </li>
            <li>
              <span style={{ color: 'var(--color-pink)', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', marginRight: '10px' }}>3.</span> 
              ECO CLUB: Sustainability initiatives & campaigns.
            </li>
            <li>
              <span style={{ color: 'var(--color-pink)', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', marginRight: '10px' }}>4.</span> 
              SESSION ANCHOR: English Dept. Hosted multiple sessions, strong stage presence.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
