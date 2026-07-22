import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { bundles, formatPrice } from '@/lib/products';
import styles from './bundles.module.css';

export const metadata: Metadata = {
  title: 'Bundles — NeoSelf Men\'s Skincare',
  description: 'Shop NeoSelf skincare bundles and save. Complete routine bundles designed to work together.',
};

export default function BundlesPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <div className={styles.pageHeader}>
        <div className="container">
          <p className="label" style={{ marginBottom: '0.6rem' }}>Save More</p>
          <h1 className="heading-lg">Bundles</h1>
          <p className={styles.headerSub}>
            Every NeoSelf product is formulated to work together.<br />
            Bundle for a complete routine — and save.
          </p>
        </div>
      </div>
      <div className="divider" />

      <div className="container section-pad">
        <div className={styles.grid}>
          {bundles.map((b) => {
            const savings = b.originalPrice ? b.originalPrice - b.price : 0;
            return (
              <div key={b.id} className={styles.card}>
                <div className={styles.cardImage}>
                  <Image src={b.image} alt={b.name} fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width:900px) 100vw, 50vw" />
                  {b.badge && <span className={`badge ${b.badge === 'Best Value' ? 'badge-warm' : ''}`}
                    style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 2 }}>
                    {b.badge}
                  </span>}
                </div>
                <div className={styles.cardContent}>
                  <p className="label" style={{ marginBottom: '0.5rem' }}>{b.shortName}</p>
                  <h2 className={`heading-sm ${styles.cardTitle}`}>{b.name}</h2>
                  <p className={styles.cardDesc}>{b.description}</p>
                  <div className={styles.cardPrice}>
                    <span className={styles.price}>{formatPrice(b.price)}</span>
                    {b.originalPrice && <span className={styles.original}>{formatPrice(b.originalPrice)}</span>}
                    {savings > 0 && <span className={styles.save}>Save {formatPrice(savings)}</span>}
                  </div>
                  <Link href="/shop" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Add Bundle to Cart
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
