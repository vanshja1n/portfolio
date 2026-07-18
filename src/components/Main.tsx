import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import HeroScene from './HeroScene';
// Note: This legacy component is not used in App.tsx but kept for reference.

function Main() {
  const heroCopyRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const elements = heroCopyRef.current?.querySelectorAll<HTMLElement>('.hero-animate');
    if (elements && elements.length) {
      gsap.fromTo(
        elements,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, stagger: 0.12, ease: 'power3.out' }
      );
    }
  }, []);

  const handleProfileMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientY - bounds.top) / bounds.height - 0.5;
    const y = (event.clientX - bounds.left) / bounds.width - 0.5;
    setTilt({ x: x * 5, y: y * 5 });
  };

  return (
    <div className="hero-shell">
      <motion.section
        className="hero-section"
        id="hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="hero-copy" ref={heroCopyRef}>
          <div className="hero-animate social_icons">
            <a href="https://github.com/vanshja1n/" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/thisisvanshjain/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
          <div className="profile-frame-wrapper hero-animate">
            <div className="profile-glass-ring" />
            <div className="profile-glow" />
            <div
              className="profile-frame"
              onMouseMove={handleProfileMove}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
              style={{ transform: `perspective(900px) rotateX(${-tilt.x}deg) rotateY(${tilt.y}deg)` }}
            >
              <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnI191t0Ani99WH29zx9kxYrranvv4RKKAvdkgp1OA1P9Iun-exQIrHeK8juY5oI_PmbrfQBf9A5FBWmxZsPrHxi3qorCFXNSm6jVvV1MqmGK3Kt9Ifox0x77fm9QHIgsqavO16sPmtIDZE4k2wCxGQmdp0IDfnbQZNnsvBBkYC82EQo4yAPHRwIzo_XU/s1090/-png-%C3%97--06-08-2025_04_30_AM.png" alt="Vansh Jain" />
            </div>
          </div>
          <div className="hero-animate badge">Available for software engineering internships • full-stack roles</div>
          <h1 className="hero-animate">Vansh Jain</h1>
          <p className="hero-animate profile-role">Student • Developer</p>
          <p className="hero-animate">I build polished web experiences with clean architecture, thoughtful product design, and a strong focus on performance.</p>
          <div className="hero-actions hero-animate">
            <a className="btn btn-primary" href="#projects">Explore projects <ArrowOutwardIcon /></a>
            <a className="btn btn-secondary" href="#contact">Let&apos;s connect</a>
          </div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
        >
          <HeroScene />
        </motion.div>
      </motion.section>

      <motion.section
        className="about-card"
        id="about"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <div>
          <p className="section-label">About</p>
          <h2>Designing calm digital products that feel premium, intuitive, and fast.</h2>
        </div>
        <div>
          <p>I’m a developer who enjoys turning product ideas into responsive, accessible web experiences. My work blends modern React interfaces, thoughtful UX, and robust full-stack implementation with an eye on detail and scale.</p>
          <p>My focus is building products that feel effortless to use, from the first interaction to deployment.</p>
        </div>
      </motion.section>
    </div>
  );
}

export default Main;
