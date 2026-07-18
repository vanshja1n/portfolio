import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLenis } from './hooks/useLenis';
import './index.scss';

function App() {
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  // Initialise Lenis smooth scroll for the editorial experience
  useLenis();

  const handleLoadComplete = () => {
    setLoading(false);
    requestAnimationFrame(() => setReady(true));
  };

  return (
    <div className="editorial-app">
      {/* Editorial loader */}
      {loading && <Loader onComplete={handleLoadComplete} />}

      {/* Floating navigation (table of contents style) */}
      <Navigation visible={!loading} />

      <main className={`editorial-main ${ready ? 'editorial-main--ready' : ''}`}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
