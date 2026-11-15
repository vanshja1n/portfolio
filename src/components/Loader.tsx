import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Loader.scss';

interface LoaderProps {
  onComplete: () => void;
}

function Loader({ onComplete }: LoaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // The paper sits folded for a brief moment, then swings open
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 800);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2250); // 800ms initial hold + 1450ms physical fold animation

    return () => {
      clearTimeout(openTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Physical paper folding variants using 3D perspective
  const leftFold = {
    closed: { rotateY: 0 },
    open: { 
      rotateY: -115, 
      transition: { duration: 1.4, ease: [0.77, 0, 0.175, 1] as [number, number, number, number] } 
    }
  };

  const rightFold = {
    closed: { rotateY: 0 },
    open: { 
      rotateY: 115, 
      transition: { duration: 1.4, ease: [0.77, 0, 0.175, 1] as [number, number, number, number] } 
    }
  };

  return (
    <div className={`newspaper-fold-container ${isOpen ? 'newspaper-fold-container--open' : ''}`}>
      {/* Left Page Fold */}
      <motion.div 
        className="newspaper-fold newspaper-fold--left"
        variants={leftFold}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        style={{ transformOrigin: "left center" }}
      >
        <div className="newspaper-fold__content newspaper-fold__content--left">
          <div className="newspaper-fold__masthead">
            <span className="newspaper-fold__masthead-pre">THE</span>
            <span className="newspaper-fold__masthead-title">VANSH JAIN</span>
          </div>
          <span className="newspaper-fold__issue">ISSUE 01</span>
        </div>
        <div className="newspaper-fold__crease" />
      </motion.div>

      {/* Right Page Fold */}
      <motion.div 
        className="newspaper-fold newspaper-fold--right"
        variants={rightFold}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        style={{ transformOrigin: "right center" }}
      >
        <div className="newspaper-fold__content newspaper-fold__content--right">
          <div className="newspaper-fold__masthead">
            <span className="newspaper-fold__masthead-pre newspaper-fold__masthead-pre--ghost" aria-hidden="true">&nbsp;</span>
            <span className="newspaper-fold__masthead-title">PORTFOLIO</span>
          </div>
          <span className="newspaper-fold__issue">EST. {currentYear}</span>
        </div>
        <div className="newspaper-fold__crease" />
      </motion.div>
    </div>
  );
}

export default Loader;
