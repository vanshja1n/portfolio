import React from 'react';
import { site } from '../data/content';
import '../styles/Footer.scss';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="newspaper-footer">
      <div className="newspaper-footer__layout">
        
        <div className="newspaper-footer__colophon">
          <span className="editorial-label">Printed Publication</span>
          <p className="newspaper-footer__text">
            Designed and developed by {site.name}. <br />
            Typography set in DM Serif Display and DM Sans.
          </p>
        </div>

        <div className="newspaper-footer__meta">
          <span className="editorial-label">Edition Details</span>
          <p className="newspaper-footer__text">
            © {year} All Rights Reserved.<br />
            Vol. 1
          </p>
        </div>

        <div className="newspaper-footer__socials">
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="editorial-btn">
            LinkedIn
          </a>
          <a href={site.github} target="_blank" rel="noreferrer" className="editorial-btn">
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
