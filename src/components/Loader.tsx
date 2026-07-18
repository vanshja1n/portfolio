import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Loader.scss';

interface LoaderProps {
  onComplete: () => void;
}

function Loader({ onComplete }: LoaderProps) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // The paper sits there for a brief moment, then folds open
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 1500); // Wait for the physical fold animation
    }, 800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Physical paper folding variants using 3D perspective
  const leftFold = {
    visible: { rotateY: 0 },
    hidden: { 
      rotateY: -110, 
      transition: { duration: 1.4, ease: [0.77, 0, 0.175, 1] } 
    }
  };

  const rightFold = {
    visible: { rotateY: 0 },
    hidden: { 
      rotateY: 110, 
      transition: { duration: 1.4, ease: [0.77, 0, 0.175, 1] } 
    }
  };

  return (
    <AnimatePresence>
      {isAnimating && (
        <div className="newspaper-fold-container">
          {/* Left Page Fold */}
          <motion.div 
            className="newspaper-fold newspaper-fold--left"
            variants={leftFold}
            initial="visible"
            exit="hidden"
            style={{ transformOrigin: "left center" }}
          >
            <div className="newspaper-fold__content newspaper-fold__content--left">
              <span className="newspaper-fold__masthead">THE VANSH JAIN</span>
              <span className="newspaper-fold__issue">ISSUE 01</span>
            </div>
            <div className="newspaper-fold__crease" />
          </motion.div>

          {/* Right Page Fold */}
          <motion.div 
            className="newspaper-fold newspaper-fold--right"
            variants={rightFold}
            initial="visible"
            exit="hidden"
            style={{ transformOrigin: "right center" }}
          >
            <div className="newspaper-fold__content newspaper-fold__content--right">
              <span className="newspaper-fold__masthead">PORTFOLIO</span>
              <span className="newspaper-fold__issue">EST. 2024</span>
            </div>
            <div className="newspaper-fold__crease" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
