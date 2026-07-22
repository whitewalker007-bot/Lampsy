'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image src="/images/hero-banner.png" alt="NeoSelf hero" fill priority
          style={{ objectFit: 'cover', objectPosition: 'right center' }} />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={`${styles.text} ${loaded ? styles.loaded : ''}`}>
          <p className={`label ${styles.eyebrow}`}>Men&apos;s Skincare · Clinically Proven</p>
          <h1 className={`heading-xl ${styles.h1}`}>
            Skin that works.<br />Proof you can read.
          </h1>
          <p className={styles.sub}>
            Formulated for men&apos;s skin and the Indian sun.<br />
            Every claim backed by lab reports.
          </p>
          <div className={styles.ctas}>
            <Link href="/shop" className="btn btn-white">Shop Now</Link>
            <Link href="/about" className={`btn ${styles.outlineWhite}`}>Our Story</Link>
          </div>
        </div>
        <div className={styles.scrollHint}>
          <span className={styles.line} />
          <span className="label" style={{ color: 'rgba(255,255,255,0.45)' }}>Scroll</span>
        </div>
      </div>
    </section>
  );
}
