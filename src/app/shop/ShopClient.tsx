'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { products, formatPrice } from '@/lib/products';
import styles from './ShopClient.module.css';

const FILTERS = ['All', 'Cleansing', 'Sun Protection', 'Lip Care', 'Overnight Care'];

export default function ShopClient() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get('cat');
  const [active, setActive] = useState<string>('All');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialCat) {
      const match = FILTERS.find(f => f.toLowerCase().replace(' ','-') === initialCat);
      if (match) setActive(match);
    }
  }, [initialCat]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach((en) => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [active]);

  const filtered = active === 'All' ? products : products.filter(p => p.category === active);

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Page header */}
      <div className={styles.pageHeader}>
        <div className="container">
          <p className="label" style={{ marginBottom: '0.6rem' }}>All Products</p>
          <h1 className="heading-lg">Shop LAMPSY Collection</h1>
        </div>
      </div>
      <div className="divider" />

      {/* Filters */}
      <div className={styles.filterBar}>
        <div className="container">
          <div className={styles.filters}>
            {FILTERS.map(f => (
              <button key={f}
                className={[styles.filter, active === f ? styles.filterActive : ''].join(' ')}
                onClick={() => setActive(f)}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="divider" />

      {/* Grid */}
      <div className="container section-pad" ref={ref}>
        <div className={styles.grid}>
          {filtered.map((p, i) => (
            <Link key={p.id} href={`/product/${p.slug}`}
              className={`product-card reveal reveal-delay-${(i % 3) + 1}`}>
              <div className="product-card__image-wrap">
                <Image src={p.image} alt={p.name} fill style={{ objectFit: 'contain', background: '#fafafa' }}
                  sizes="(max-width:600px) 50vw, (max-width:1200px) 33vw, 25vw" />
                {p.badge && <span className="badge" style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 2 }}>{p.badge}</span>}
              </div>
              <div className="product-card__info">
                <p className="product-card__category">{p.category} {p.size ? `· ${p.size}` : ''}</p>
                <h2 className="product-card__name">{p.name}</h2>
                <p className="product-card__price">
                  {p.sizes ? `From ${formatPrice(Math.min(...p.sizes.map(s => s.price)))}` : formatPrice(p.price)}
                </p>
              </div>
              <div className="product-card__actions">View Product</div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', padding: '4rem 0' }}>
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
