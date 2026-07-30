'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product, ProductSize, formatPrice } from '@/lib/products';
import { useCart } from '@/context/CartContext';
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
  const { addItem } = useCart();
  const [activeImg, setActiveImg] = useState<string>(
    product.images && product.images.length > 0 ? product.images[0] : product.image
  );
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(
    product.sizes && product.sizes.length > 0 ? product.sizes[product.sizes.length - 1] : null
  );

  const currentPrice = selectedSize ? selectedSize.price : product.price;

  const handleAdd = () => {
    addItem(product, selectedSize?.size, currentPrice);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const gallery = product.images && product.images.length > 0 ? product.images : [product.image];

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
              src={activeImg}
              alt={product.name}
              fill
              priority
              style={{ objectFit: 'contain', objectPosition: 'center', background: '#fafafa' }}
              sizes="(max-width:900px) 100vw, 55vw"
            />
            {product.badge && (
              <span className={`badge ${styles.imageBadge}`}>{product.badge}</span>
            )}
          </div>

          {/* Gallery Thumbnails */}
          {gallery.length > 1 && (
            <div className={styles.thumbnails}>
              {gallery.map((img, idx) => (
                <button
                  key={img + idx}
                  className={`${styles.thumbBtn} ${activeImg === img ? styles.thumbBtnActive : ''}`}
                  onClick={() => setActiveImg(img)}
                  type="button"
                  aria-label={`View image ${idx + 1}`}
                >
                  <Image src={img} alt={`${product.name} thumb ${idx + 1}`} fill style={{ objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Buy box */}
        <div className={styles.buyBox}>
          <p className="label" style={{ marginBottom: '0.8rem' }}>{product.category}</p>
          <h1 className={`heading-md ${styles.productTitle}`}>{product.name}</h1>
          <p className={styles.tagline}>{product.tagline}</p>

          <div className={styles.priceRow}>
            <span className={styles.price}>{formatPrice(currentPrice)}</span>
            {product.size && !selectedSize && (
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginLeft: '-0.5rem' }}>
                ({product.size})
              </span>
            )}
            {product.originalPrice && (
              <span className={styles.originalPrice}>{formatPrice(product.originalPrice)}</span>
            )}
          </div>

          {/* Size Variant Selector if available */}
          {product.sizes && product.sizes.length > 0 && (
            <div className={styles.sizeSelector}>
              <span className={styles.sizeLabel}>Select Size:</span>
              <div className={styles.sizeGrid}>
                {product.sizes.map((sz) => {
                  const isActive = selectedSize?.size === sz.size;
                  return (
                    <button
                      key={sz.size}
                      className={`${styles.sizeBtn} ${isActive ? styles.sizeBtnActive : ''}`}
                      onClick={() => setSelectedSize(sz)}
                      type="button"
                    >
                      <span className={styles.sizeText}>{sz.size}</span>
                      <span className={styles.sizePrice}>{formatPrice(sz.price)}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <p className={styles.description}>{product.description}</p>

          <button
            className={`btn btn-primary ${styles.addBtn}`}
            onClick={handleAdd}
            aria-label={added ? 'Added to bag' : 'Add to cart'}
          >
            {added ? '✓ Added to Bag' : `Add to Cart — ${formatPrice(currentPrice)}`}
          </button>

          <div className={styles.trust}>
            {['Free shipping on orders above ₹499', '100% Authentic & Fresh Formulation', 'Patch test recommended'].map(t => (
              <p key={t} className={styles.trustItem}>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeOpacity=".4"/><path d="M4 7l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {t}
              </p>
            ))}
          </div>

          {/* Important Note Box */}
          {product.importantNote && (
            <div className={styles.importantNoteBox}>
              <div className={styles.importantNoteTitle}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                Important Note
              </div>
              <p className={styles.importantNoteText}>{product.importantNote}</p>
            </div>
          )}

          {/* Accordions */}
          <div className={styles.accordions}>
            <Accordion title="Benefits">
              <ul style={{ paddingLeft: '1rem' }}>
                {product.benefits.map((b) => (
                  <li key={b} style={{ marginBottom: '0.4rem', listStyle: 'disc' }}>{b}</li>
                ))}
              </ul>
            </Accordion>

            <Accordion title="Direction for Use">
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
