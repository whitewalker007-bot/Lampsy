import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.values}>
        <div className="container">
          <div className={styles.valuesInner}>
            {['Clinically Dosed Actives', 'Formulated for Indian Skin', 'Lab Reports You Can Read', 'No Filler Ingredients'].map((v) => (
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
            <Link href="/" className={styles.logo}>NeoSelf</Link>
            <p className={styles.tagline}>Men&apos;s skincare where every claim<br />comes with the receipt.</p>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.ig} aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              Instagram
            </a>
          </div>

          <div className={styles.cols}>
            <div>
              <p className={styles.colHead}>Shop</p>
              <ul>
                {[['All Products','/shop'],['Pigment Defend','/shop?cat=pigment-defend'],['Repair','/shop?cat=repair'],['Clean','/shop?cat=clean'],['Bundles','/bundles']].map(([l,h])=>(
                  <li key={h}><Link href={h} className={styles.colLink}>{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className={styles.colHead}>Company</p>
              <ul>
                {[['About Us','/about'],['Contact','/contact'],['neoselfmen.com','https://www.neoselfmen.com']].map(([l,h])=>(
                  <li key={h}><Link href={h} className={styles.colLink}>{l}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className={styles.colHead}>Policies</p>
              <ul>
                {[['Shipping','/shipping'],['Returns','/returns'],['Privacy Policy','/privacy'],['Terms','/terms']].map(([l,h])=>(
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
          <p className={styles.copy}>© {new Date().getFullYear()} NeoSelf. All rights reserved.</p>
          <p className={styles.domain}>www.neoselfmen.com</p>
        </div>
      </div>
    </footer>
  );
}
