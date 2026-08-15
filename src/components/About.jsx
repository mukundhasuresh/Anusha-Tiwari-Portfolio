import React from 'react';

const About = () => {
  return (
    <section className="slide bg-purple">
      <div style={{ position: 'absolute', top: '15%', zIndex: 1, width: '100%', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'var(--color-black)' }}>ABOUT ME</h2>
      </div>
      
      <div style={{ maxWidth: '1000px', width: '100%', textAlign: 'center', zIndex: 2, marginTop: 'clamp(3rem, 10vh, 8rem)' }}>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)', fontWeight: '800', lineHeight: '1.4', marginBottom: 'clamp(1rem, 3vh, 2rem)', color: 'var(--color-black)' }}>
          THE BEST <span className="highlight">IDEA</span> IS NOTHING WITHOUT THE RIGHT <span className="highlight">VOICE</span>.
        </p>
        
        <p style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.5rem)', fontWeight: '600', lineHeight: '1.5', maxWidth: '800px', margin: '0 auto clamp(0.5rem, 2vh, 1.5rem) auto' }}>
          I am an English Honours student at Gargi College, University of Delhi, with two years of hands-on experience in external outreach, stakeholder partnerships, and cross-functional project leadership.
        </p>

        <p style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.5rem)', fontWeight: '600', lineHeight: '1.5', maxWidth: '800px', margin: '0 auto clamp(0.5rem, 2vh, 1.5rem) auto' }}>
          As a confident public speaker and event anchor, I have a strong record in competitive research and multilingual communication (French A1).
        </p>

        <p style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.5rem)', fontWeight: '600', lineHeight: '1.5', maxWidth: '800px', margin: '0 auto' }}>
          I am currently seeking a PR internship to bring <span className="highlight">stakeholder engagement</span>, networking, and persuasive communication to real-world work.
        </p>
      </div>
    </section>
  );
};

export default About;
