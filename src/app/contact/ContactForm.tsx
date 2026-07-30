'use client';
import { useState } from 'react';
import styles from './contact.module.css';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <div className="container-narrow section-pad">
        <p className="label" style={{ marginBottom: '0.6rem' }}>Get in Touch</p>
        <h1 className="heading-lg" style={{ marginBottom: '0.75rem' }}>Contact LAMPSY</h1>
        <p className={styles.sub}>Have a question about our products, ingredients, patch testing, or your order? We&apos;re here to help.</p>

        <div className="divider" style={{ margin: '2.5rem 0' }} />

        {submitted ? (
          <div style={{
            padding: '2rem',
            backgroundColor: 'rgba(34, 197, 94, 0.08)',
            border: '1px solid rgba(34, 197, 94, 0.2)',
            borderRadius: '4px',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: '#15803d' }}>
              Thank You!
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              Your message has been sent successfully. We will get back to you as soon as possible.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn btn-primary"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="fname">
                  First Name <span style={{ color: '#e11d48' }}>*</span>
                </label>
                <input id="fname" type="text" className={styles.input} placeholder="First name" required />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="lname">
                  Last Name <span style={{ color: '#e11d48' }}>*</span>
                </label>
                <input id="lname" type="text" className={styles.input} placeholder="Last name" required />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                Email <span style={{ color: '#e11d48' }}>*</span>
              </label>
              <input id="email" type="email" className={styles.input} placeholder="your@email.com" required />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="subject">
                Subject <span style={{ color: '#e11d48' }}>*</span>
              </label>
              <select id="subject" className={styles.input} required defaultValue="">
                <option value="" disabled>Select a topic</option>
                <option value="product">Product Question</option>
                <option value="order">Order / Shipping</option>
                <option value="return">Returns</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">
                Message <span style={{ color: '#e11d48' }}>*</span>
              </label>
              <textarea
                id="message"
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Tell us how we can help..."
                rows={6}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
              Send Message
            </button>
          </form>
        )}

        <div className="divider" style={{ margin: '3rem 0 2rem' }} />

        <div className={styles.info}>
          <div>
            <p className="label" style={{ marginBottom: '0.5rem' }}>Email Us</p>
            <a href="mailto:lampsystore2@gmail.com" className={styles.infoLink}>lampsystore2@gmail.com</a>
          </div>
          <div>
            <p className="label" style={{ marginBottom: '0.5rem' }}>Phone</p>
            <a href="tel:7356539382" className={styles.infoLink}>+91 7356539382</a>
          </div>
          <div>
            <p className="label" style={{ marginBottom: '0.5rem' }}>Store Address</p>
            <p className={styles.infoLink} style={{ color: 'var(--color-text)' }}>
              Ashoka Road, Kaloor<br />Kochi, Kerala, 682017
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
