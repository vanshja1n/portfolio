import React from 'react';
import { motion } from 'framer-motion';
import { navItems, site } from '../data/content';
import { useWeather } from '../hooks/useWeather';
import '../styles/Navigation.scss';

interface NavigationProps {
  visible: boolean;
}

function Navigation({ visible }: NavigationProps) {
  const date = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const weather = useWeather();
  
  return (
    <motion.nav 
      className="newspaper-masthead"
      initial={{ y: -100, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 1 }}
    >
      <div className="newspaper-masthead__layout">
        
        {/* ── Top Bar: Intense Metadata ── */}
        <div className="newspaper-masthead__top">
          <div className="newspaper-masthead__meta">
            <span>Edition 01</span>
            <div className="newspaper-masthead__divider" />
            <span>Vol. 1</span>
          </div>
          
          <div className="newspaper-masthead__meta">
            <span>{date}</span>
            <div className="newspaper-masthead__divider" />
            <span>{site.location}</span>
          </div>
          
          <div className="newspaper-masthead__meta">
            <span>Weather: {weather.loading || weather.error ? '--°C' : `${weather.temperature}°C`} | {weather.loading || weather.error ? '--' : weather.city}</span>
          </div>
        </div>

        {/* ── Mobile Weather Bar ── */}
        <div className="newspaper-masthead__mobile-weather">
          <span>Weather: {weather.loading || weather.error ? '--°C' : `${weather.temperature}°C`} | {weather.loading || weather.error ? '--' : weather.city}</span>
        </div>

        {/* ── Main Nav & Title ── */}
        <div className="newspaper-masthead__bottom">
          <ul className="newspaper-masthead__links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <a href="#home" className="newspaper-masthead__logo">
            VANSH JAIN
          </a>
        </div>

      </div>
    </motion.nav>
  );
}

export default Navigation;
