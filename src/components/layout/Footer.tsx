import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.values}>
        <div className="container">
          <div className={styles.valuesInner}>
            {['Dermatologically Tested', 'Formulated for All Skin Types', 'Clean & Natural Ingredients', 'Patch Test Recommended'].map((v) => (
              <span key={v} className={styles.value}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeOpacity=".35"/><path d="M4 7l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="container">
        <div className={styles.main}>
          <div className={styles.brand}>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '1rem' }}>
              <Image
                src="/images/logo.png"
                alt="LAMPSY Skincare"
                width={150}
                height={50}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <p className={styles.tagline}>Nourishing & effective skincare<br />designed to renew your natural glow.</p>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.ig} aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              Instagram
            </a>
          </div>

          <div className={styles.cols}>
            <div>
              <p className={styles.colHead}>Shop</p>
              <ul>
                {[
                  ['All Products', '/shop'],
                  ['Donkey Milk Face Wash', '/product/donkey-milk-face-wash'],
                  ['Matte Sunscreen SPF 50', '/product/matte-sunscreen-spf-50'],
                  ['Nourishing Lip Balm', '/product/nourishing-lip-balm'],
                  ['Night Cream', '/product/overnight-renewal-night-cream'],
                  ['Bundles', '/bundles'],
                ].map(([l, h]) => (
                  <li key={h}><Link href={h} className={styles.colLink}>{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className={styles.colHead}>Company & Contact</p>
              <ul>
                <li><Link href="/about" className={styles.colLink}>About Us</Link></li>
                <li><Link href="/contact" className={styles.colLink}>Contact Us</Link></li>
                <li style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                  <strong>Email:</strong> <a href="mailto:lampsystore2@gmail.com" style={{ color: 'inherit' }}>lampsystore2@gmail.com</a>
                </li>
                <li style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                  <strong>Address:</strong> Ashoka Road, Kaloor, Kochi, Kerala, 682017
                </li>
              </ul>
            </div>
            <div>
              <p className={styles.colHead}>Policies</p>
              <ul>
                {[
                  ['Shipping', '/shipping'],
                  ['Returns', '/returns'],
                  ['Privacy Policy', '/privacy'],
                  ['Terms of Service', '/terms'],
                ].map(([l, h]) => (
                  <li key={h}><Link href={h} className={styles.colLink}>{l}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="divider" />
      <div className="container">
        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} LAMPSY Skincare. All rights reserved.</p>
          <p className={styles.domain}>Ashoka Road, Kaloor, Kochi, Kerala, 682017</p>
        </div>
      </div>
    </footer>
  );
}
