import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section className="slide bg-pink" style={{ textAlign: 'center' }}>
      <div style={{ position: 'absolute', top: '15%', zIndex: 1, width: '100%', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'var(--color-black)' }}>CONTACT</h2>
      </div>

      <div style={{ zIndex: 2, maxWidth: '800px', width: '100%', marginTop: 'clamp(2rem, 10vh, 6rem)' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.1', color: 'var(--color-black)', marginBottom: '1.5rem' }}>
          LET'S MAKE AN <span className="highlight-lime" style={{ position: 'relative', display: 'inline-block', zIndex: 1 }}>
            <span style={{ position: 'absolute', top: '10%', left: '-2%', right: '-2%', bottom: '10%', backgroundColor: 'var(--color-lime)', zIndex: -1, transform: 'rotate(-1deg)', borderRadius: '4px' }}></span>
            IMPACT.
          </span>
        </h2>
        
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', fontWeight: '600', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          I'm currently looking for PR internship opportunities and open to exciting collaborations. Let's chat!
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', alignItems: 'center' }}>
          <a href="mailto:anusha@example.com" className="contact-btn" style={{ 
            textDecoration: 'none', color: 'var(--color-black)', fontSize: '1.2rem', fontWeight: '900',
            border: '4px solid black', padding: '1rem 2rem', background: 'var(--color-white)',
            boxShadow: '6px 6px 0 var(--color-black)', display: 'flex', alignItems: 'center', gap: '0.8rem',
            transition: 'transform 0.1s, box-shadow 0.1s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translate(-4px, -4px)'; e.currentTarget.style.boxShadow = '10px 10px 0 var(--color-black)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translate(0, 0)'; e.currentTarget.style.boxShadow = '6px 6px 0 var(--color-black)'; }}
          >
            <Mail strokeWidth={3} /> EMAIL ME
          </a>

          <a href="https://www.linkedin.com/in/anusha-tiwari-b36725333/" target="_blank" rel="noreferrer" className="contact-btn" style={{ 
            textDecoration: 'none', color: 'white', fontSize: '1.2rem', fontWeight: '900',
            border: '4px solid black', padding: '1rem 2rem', background: '#111111',
            boxShadow: '6px 6px 0 var(--color-black)', display: 'flex', alignItems: 'center', gap: '0.8rem',
            transition: 'transform 0.1s, box-shadow 0.1s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translate(-4px, -4px)'; e.currentTarget.style.boxShadow = '10px 10px 0 var(--color-black)'; e.currentTarget.style.boxShadow = '10px 10px 0 var(--color-white)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translate(0, 0)'; e.currentTarget.style.boxShadow = '6px 6px 0 var(--color-black)'; }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> LINKEDIN
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
