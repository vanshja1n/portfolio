import React from 'react';
import { motion } from 'framer-motion';
import { indexItems, site } from '../data/content';
import '../styles/Hero.scss';

function Hero() {
  const headline = "VANSH JAIN".split('');

  const charVariants = {
    hidden: { opacity: 0, y: 150, rotate: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotate: 0,
      transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] } 
    }
  };

  return (
    <section className="newspaper-hero" id="home">
      
      {/* ── Massive Staggered Headline ── */}
      <div className="newspaper-hero__headline-wrapper">
        <motion.h1 
          className="newspaper-hero__headline"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08, delayChildren: 0.5 }}
        >
          {headline.map((char, index) => (
            <motion.span key={index} variants={charVariants} style={{ display: 'inline-block' }}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* ── Intense Irregular Grid ── */}
      <div className="newspaper-hero__grid">
        
        {/* Abstract / Intro */}
        <div className="newspaper-hero__col-text">
          <span className="editorial-label">Abstract — 01</span>
          <div className="editorial-rule" />
          <p className="newspaper-hero__abstract">
            <span className="newspaper-hero__dropcap">I</span>
            build fast, thoughtful digital products that combine clean engineering,
            editorial aesthetics, and intuitive user experiences—from concept to deployment.
          </p>
          <div className="newspaper-hero__meta-group">
            <span className="editorial-label">Est. Read Time</span>
            <span className="editorial-value">04 Minutes</span>
          </div>
        </div>

        {/* Tiny Framed Editorial Portrait */}
        <div className="newspaper-hero__col-image">
          <div className="newspaper-hero__frame">
            <div className="newspaper-hero__image-mask">
              <motion.img 
                src={site.profileImage} 
                alt="Vansh Jain" 
                className="newspaper-hero__image"
                initial={{ scale: 1.2, filter: 'blur(10px)' }}
                animate={{ scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
              />
            </div>
            
            <div className="newspaper-hero__caption">
              <span className="editorial-label">Fig. 01</span>
              <span className="editorial-label">Portrait &mdash; Vansh Jain</span>
            </div>
          </div>
        </div>

        {/* Secondary Metadata Column */}
        <div className="newspaper-hero__col-meta">
          <span className="editorial-label">Index</span>
          <div className="editorial-rule" />
          <ul className="newspaper-hero__index-list">
            {indexItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="newspaper-hero__index-link">
                  <span>{item.number}.</span> {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Hero;
