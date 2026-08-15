import { motion } from 'framer-motion';
import { Mic, Megaphone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="slide bg-pink">

      
      {/* Floating Elements */}
      <motion.div 
        className="floating"
        style={{ 
          position: 'absolute', top: '10%', left: 'clamp(10px, 5%, 10%)', width: 'clamp(65px, 15vw, 100px)', height: 'clamp(65px, 15vw, 100px)', 
          background: 'var(--color-lime)', border: '4px solid black', borderRadius: '16px', 
          zIndex: 1, boxShadow: '8px 8px 0 black',
          display: 'flex', justifyContent: 'center', alignItems: 'center', transform: 'rotate(-5deg)'
        }}
      >
        <Megaphone size={50} strokeWidth={2.5} color="var(--color-black)" />
      </motion.div>
      <motion.div 
        className="floating-reverse"
        style={{ 
          position: 'absolute', bottom: 'calc(15% + 2rem)', right: '5%', width: 'clamp(60px, 15vw, 90px)', height: 'clamp(60px, 15vw, 90px)', 
          background: 'var(--color-white)', border: '4px solid black', borderRadius: '50%', 
          zIndex: 1, boxShadow: '8px 8px 0 black',
          display: 'flex', justifyContent: 'center', alignItems: 'center', transform: 'rotate(10deg)'
        }}
      >
        <Mic size={45} strokeWidth={2.5} color="var(--color-black)" />
      </motion.div>

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%', maxWidth: '1200px', padding: '0 1rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', letterSpacing: '4px', marginBottom: '1rem', color: 'var(--color-black)' }}>HI, I AM</h2>
        
        <h1 className="text-3d" style={{ fontSize: 'clamp(6rem, 18vw, 12rem)', lineHeight: '0.9', margin: '0 0 2.5rem 0' }}>
          ANUSHA<br />TIWARI
        </h1>
        
        <h3 style={{ fontSize: 'clamp(1.2rem, 4.5vw, 1.8rem)', color: 'var(--color-black)', lineHeight: '1.4' }}>
          <span className="highlight">ASPIRING PR & COMMUNICATIONS PROFESSIONAL</span>
        </h3>
      </div>
    </section>
  );
};

export default Hero;
