import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/content';
import '../styles/Projects.scss';

function Projects() {
  return (
    <section className="newspaper-projects" id="work">
      
      {/* ── Section Header ── */}
      <div className="newspaper-section-header">
        <span className="editorial-label">Column 02</span>
        <h2 className="newspaper-section-title">Work</h2>
        <div className="editorial-rule" />
      </div>

      <div className="newspaper-projects__feed">
        {projects.map((project, index) => {
          const issueNumber = String(index + 1).padStart(2, '0');
          
          return (
            <article key={project.id} className="newspaper-article">
              <div className="newspaper-article__grid">
                
                {/* ── Left Column: Editorial Content ── */}
                <div className="newspaper-article__content">
                  <div className="newspaper-article__meta-bar">
                    <span className="editorial-label">Project {issueNumber}</span>
                    <span className="editorial-label">{project.type}</span>
                  </div>

                  <a href={project.link} target="_blank" rel="noreferrer" className="newspaper-article__title-link">
                    <h3 className="newspaper-article__headline">{project.title}</h3>
                  </a>
                  
                  <blockquote className="newspaper-article__pull-quote">
                    {project.tagline}
                  </blockquote>
                  
                  <p className="newspaper-article__summary">{project.description}</p>
                  
                  <div className="newspaper-article__tech-list">
                    <span className="editorial-label">Built With</span>
                    <p className="editorial-value">{project.tech.join(' • ')}</p>
                  </div>
                  
                  <div className="newspaper-article__links">
                    <a href={project.link} target="_blank" rel="noreferrer" className="editorial-text-link" aria-label={`Live Website for ${project.title}`}>
                      LIVE WEBSITE &rarr;
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="editorial-text-link" aria-label={`GitHub Repository for ${project.title}`}>
                      GITHUB &rarr;
                    </a>
                  </div>
                </div>

                {/* ── Right Column: Standardized Crisp Image ── */}
                <div className="newspaper-article__image-column">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="newspaper-article__image-link"
                    aria-label={`View ${project.title}`}
                  >
                    <div className="newspaper-article__image-mask">
                      <motion.img 
                        src={project.image} 
                        alt={project.title}
                        initial={{ scale: 1.05 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: '-10%' }}
                        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                        loading="lazy"
                      />
                    </div>
                  </a>
                  <div className="newspaper-article__image-caption">
                    <span className="editorial-label">Fig. {issueNumber}</span>
                    <span className="editorial-label">Project Preview</span>
                  </div>
                </div>

              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
