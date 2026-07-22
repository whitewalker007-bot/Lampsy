'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product, formatPrice } from '@/lib/products';
import styles from './ProductClient.module.css';

interface Props { product: Product }

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-item">
      <button className="accordion-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
        {title}
        <span className="accordion-icon" />
      </button>
      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
}

export default function ProductClient({ product }: Props) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Breadcrumb */}
      <div className="container">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/" className={styles.breadLink}>Home</Link>
          <span className={styles.breadSep}>/</span>
          <Link href="/shop" className={styles.breadLink}>Shop</Link>
          <span className={styles.breadSep}>/</span>
          <span className={styles.breadCurrent}>{product.shortName}</span>
        </nav>
      </div>

      {/* Product layout */}
      <div className={`container ${styles.layout}`}>
        {/* Image panel */}
        <div className={styles.imagePanel}>
          <div className={styles.mainImage}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width:900px) 100vw, 55vw"
            />
            {product.badge && (
              <span className={`badge ${styles.imageBadge}`}>{product.badge}</span>
            )}
          </div>
        </div>

        {/* Buy box — sticky */}
        <div className={styles.buyBox}>
          <p className="label" style={{ marginBottom: '0.8rem' }}>{product.category}</p>
          <h1 className={`heading-md ${styles.productTitle}`}>{product.name}</h1>
          <p className={styles.tagline}>{product.tagline}</p>

          <div className={styles.priceRow}>
            <span className={styles.price}>{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className={styles.originalPrice}>{formatPrice(product.originalPrice)}</span>
            )}
          </div>

          <p className={styles.description}>{product.description}</p>

          <button
            className={`btn btn-primary ${styles.addBtn}`}
            onClick={handleAdd}
            aria-label={added ? 'Added to cart' : 'Add to cart'}
          >
            {added ? '✓ Added to Cart' : 'Add to Cart'}
          </button>

          <div className={styles.trust}>
            {['Free shipping on orders above ₹1,499', 'Easy 30-day returns', 'Lab reports available on request'].map(t => (
              <p key={t} className={styles.trustItem}>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeOpacity=".4"/><path d="M4 7l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {t}
              </p>
            ))}
          </div>

          {/* Accordions */}
          <div className={styles.accordions}>
            <Accordion title="Benefits">
              <ul style={{ paddingLeft: '1rem' }}>
                {product.benefits.map((b) => (
                  <li key={b} style={{ marginBottom: '0.4rem', listStyle: 'disc' }}>{b}</li>
                ))}
              </ul>
            </Accordion>

            <Accordion title="How to Use">
              <p>{product.howToUse}</p>
            </Accordion>

            <Accordion title="Key Ingredients">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {product.ingredients.map((ing) => (
                  <div key={ing.name}>
                    <strong style={{ fontSize: '0.82rem', display: 'block', marginBottom: '0.15rem' }}>{ing.name}</strong>
                    <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>{ing.benefit}</span>
                  </div>
                ))}
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
