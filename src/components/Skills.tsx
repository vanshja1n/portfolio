import React from 'react';
import { motion } from 'framer-motion';
import { skillGroups } from '../data/content';
import '../styles/Skills.scss';

function Skills() {
  return (
    <section className="newspaper-skills" id="stack">
      
      <div className="newspaper-section-header">
        <span className="editorial-label">Column 03</span>
        <h2 className="newspaper-section-title">Stack</h2>
        <div className="editorial-rule" />
      </div>

      <div className="newspaper-skills__layout">
        
        <div className="newspaper-skills__abstract-col">
          <span className="editorial-dropcap">T</span>
          <p className="newspaper-skills__abstract">
            he technical foundation of this publication relies on a strict separation 
            of concerns. Utilizing modern web architecture to deliver high performance, 
            accessible, and beautifully crafted interfaces.
          </p>
        </div>

        <div className="newspaper-skills__grid">
          {skillGroups.map((group, gi) => (
            <motion.div 
              key={group.title}
              className="newspaper-skills__category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, delay: gi * 0.1 }}
            >
              <h3 className="newspaper-skills__cat-title">{group.title}</h3>
              <p className="newspaper-skills__cat-desc">{group.description}</p>
              
              <div className="editorial-rule editorial-rule--thin" />
              
              <ul className="newspaper-skills__list">
                {group.items.map((skill) => (
                  <li key={skill} className="newspaper-skills__item">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
