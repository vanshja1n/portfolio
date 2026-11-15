import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { site } from '../data/content';
import '../styles/Contact.scss';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [fields, setFields] = useState({ from_name: '', from_email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fields.from_name || !fields.from_email || !fields.message) return;
    if (!formRef.current) return;

    setSending(true);
    setError(false);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setSending(false);
        setSubmitted(true);
        setFields({ from_name: '', from_email: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS submission failed:', err);
        setSending(false);
        setError(true);
      });
  };

  return (
    <section className="newspaper-contact" id="contact">
      
      <div className="newspaper-section-header">
        <span className="editorial-label">Column 04</span>
        <h2 className="newspaper-section-title">Footnotes & Contact</h2>
        <div className="editorial-rule" />
      </div>

      <div className="newspaper-contact__layout">
        
        {/* ── Left — Editorial Intro ── */}
        <div className="newspaper-contact__intro">
          <h2 className="newspaper-contact__headline">
            Correspond<br />
            <span className="italic">With The Editor</span>
          </h2>

          <p className="newspaper-contact__sub">
            Currently accepting inquiries for software engineering internships, 
            full-stack roles, and interesting digital collaborations.
          </p>

          <div className="newspaper-contact__details">
            <span className="editorial-label">Direct Line</span>
            <a href={`mailto:${site.email}`} className="editorial-value">
              {site.email}
            </a>
            
            <div className="editorial-rule editorial-rule--thin" />
            
            <span className="editorial-label">Based In</span>
            <span className="editorial-value">{site.location}</span>
          </div>
        </div>

        {/* ── Right — Print Form ── */}
        <div className="newspaper-contact__form-section">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                ref={formRef}
                key="form"
                className="newspaper-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <div className="newspaper-form__row">
                  <div className="newspaper-form__group">
                    <label>Name</label>
                    <input type="text" name="from_name" value={fields.from_name} onChange={handleChange} required />
                  </div>
                  <div className="newspaper-form__group">
                    <label>Email</label>
                    <input type="email" name="from_email" value={fields.from_email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="newspaper-form__group">
                  <label>Message</label>
                  <textarea name="message" value={fields.message} onChange={handleChange} required rows={5} />
                </div>

                {error && (
                  <p className="newspaper-form__error" role="alert">
                    Transmission failed. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  className="editorial-btn editorial-btn--submit"
                  disabled={sending}
                >
                  {sending ? 'Transmitting...' : 'Send Message'}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className="newspaper-success"
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              >
                <h3 className="newspaper-success__title">Delivered.</h3>
                <p className="newspaper-success__sub">
                  Your correspondence has been received. I will reply shortly.
                </p>
                <button
                  type="button"
                  className="editorial-btn"
                  onClick={() => { setSubmitted(false); setError(false); }}
                >
                  Draft Another
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

export default Contact;
