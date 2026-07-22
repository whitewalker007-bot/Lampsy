'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { bundles, formatPrice } from '@/lib/products';
import styles from './BundlesCTA.module.css';

export default function BundlesCTA() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach((en) => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const featuredBundle = bundles[0];

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.imageWrap} reveal`}>
          <Image src="/images/morning-routine.png" alt="NeoSelf bundle" fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width:900px) 100vw, 55vw" />
        </div>
        <div className={`${styles.content} reveal reveal-delay-2`}>
          <span className="badge badge-warm">{featuredBundle.badge}</span>
          <h2 className={`heading-lg ${styles.title}`}>{featuredBundle.name}</h2>
          <p className={styles.sub}>{featuredBundle.description}</p>
          <div className={styles.priceRow}>
            <span className={styles.price}>{formatPrice(featuredBundle.price)}</span>
            {featuredBundle.originalPrice && (
              <span className={styles.originalPrice}>{formatPrice(featuredBundle.originalPrice)}</span>
            )}
            {featuredBundle.originalPrice && (
              <span className={styles.saving}>
                Save {formatPrice(featuredBundle.originalPrice - featuredBundle.price)}
              </span>
            )}
          </div>
          <div className={styles.actions}>
            <Link href={`/bundles`} className="btn btn-primary">Shop Bundle</Link>
            <Link href="/bundles" className="btn btn-ghost">See All Bundles</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
