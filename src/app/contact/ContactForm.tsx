'use client';
import styles from './contact.module.css';

export default function ContactForm() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <div className="container-narrow section-pad">
        <p className="label" style={{ marginBottom: '0.6rem' }}>Get in Touch</p>
        <h1 className="heading-lg" style={{ marginBottom: '0.75rem' }}>Contact</h1>
        <p className={styles.sub}>Have a question about our products, ingredients, or your order? We&apos;re here.</p>

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
            <p className="label" style={{ marginBottom: '0.5rem' }}>Email</p>
            <a href="mailto:hello@neoselfmen.com" className={styles.infoLink}>hello@neoselfmen.com</a>
          </div>
          <div>
            <p className="label" style={{ marginBottom: '0.5rem' }}>Website</p>
            <a href="https://www.neoselfmen.com" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>www.neoselfmen.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
