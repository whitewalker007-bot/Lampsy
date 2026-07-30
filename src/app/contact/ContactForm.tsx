'use client';
import styles from './contact.module.css';

export default function ContactForm() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <div className="container-narrow section-pad">
        <p className="label" style={{ marginBottom: '0.6rem' }}>Get in Touch</p>
        <h1 className="heading-lg" style={{ marginBottom: '0.75rem' }}>Contact LAMPSY</h1>
        <p className={styles.sub}>Have a question about our products, ingredients, patch testing, or your order? We&apos;re here to help.</p>

        <div className="divider" style={{ margin: '2.5rem 0' }} />

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="fname">First Name</label>
              <input id="fname" type="text" className={styles.input} placeholder="First name" />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="lname">Last Name</label>
              <input id="lname" type="text" className={styles.input} placeholder="Last name" />
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input id="email" type="email" className={styles.input} placeholder="your@email.com" />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="subject">Subject</label>
            <select id="subject" className={styles.input}>
              <option value="">Select a topic</option>
              <option value="product">Product Question</option>
              <option value="order">Order / Shipping</option>
              <option value="return">Returns</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea id="message" className={`${styles.input} ${styles.textarea}`}
              placeholder="Tell us how we can help..." rows={6} />
          </div>
          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
            Send Message
          </button>
        </form>

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
