import React from 'react';
import { motion } from 'framer-motion';
import { about, stats } from '../data/content';
import '../styles/About.scss';

function About() {
  return (
    <section className="newspaper-editor-note" id="about">

      {/* ── Section Header ── */}
      <div className="newspaper-section-header">
        <span className="editorial-label">Column 01</span>
        <h2 className="newspaper-section-title">Editor's Note</h2>
        <div className="editorial-rule" />
      </div>

      <div className="newspaper-editor-note__layout">

        <div className="newspaper-editor-note__content">
          
          {/* ── Left Sidenote & Photo ── */}
          <aside className="newspaper-editor-note__sidebar">
            <div className="newspaper-editor-note__photo-mask">
              {/* Secondary photo crop to mimic author portrait */}
              <img 
                src={about.photo || 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-56ANOOlO_3WhTroS22B09t9zhwV-seeVsjF5o1i9lTpyC1WkcGMurGwZyQEqIF6ZOtjDxnk4lskh3_gWpSUe9XaLFYbmllwGhEvaAr4bpaYx43pbLm5iJNZe6qImx8UB04kPTHHDQDCOrmYlizxkJ9paq4qHgj2gE5LSqbXRzvFRyDP6d2xElonx6AI/s1152/Gemini_Generated_Image_verbw9verbw9verb.png'} 
                alt="Author"
                className="newspaper-editor-note__photo"
              />
            </div>
            <div className="newspaper-editor-note__photo-caption">
              <span className="editorial-label">Chief Editor</span>
              <span className="editorial-value">Vansh Jain</span>
            </div>
            
            <div className="editorial-rule" />
            
            <span className="editorial-label">Note Details</span>
            <p className="newspaper-editor-note__sidenote-text">
              Written to document the philosophy behind my engineering and design approach.
              Emphasizing performance and architecture.
            </p>
          </aside>

          {/* ── Main Letter Columns ── */}
          <div className="newspaper-editor-note__columns">
            <motion.h3 
              className="newspaper-editor-note__headline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
            >
              {about.headline}
            </motion.h3>

            <div className="newspaper-editor-note__body">
              {about.paragraphs.map((paragraph, index) => (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  {index === 0 ? (
                    <>
                      <span className="newspaper-dropcap">{paragraph.charAt(0)}</span>
                      {paragraph.slice(1)}
                    </>
                  ) : (
                    paragraph
                  )}
                </motion.p>
              ))}
            </div>
            
            {/* ── Publisher Stats ── */}
            <div className="newspaper-editor-note__stats">
              <div className="editorial-rule" />
              <ul>
                {stats.map((stat) => (
                  <li key={stat.label}>
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-value">{stat.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
