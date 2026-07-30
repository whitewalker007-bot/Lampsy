'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { products, formatPrice } from '@/lib/products';
import styles from './FeaturedProducts.module.css';

export default function FeaturedProducts() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach((en) => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className={`section-pad ${styles.section}`} ref={ref}>
      <div className="container">
        <div className={`${styles.sectionHeader} reveal`}>
          <div>
            <p className="label" style={{ marginBottom: '0.6rem' }}>The Collection</p>
            <h2 className="heading-lg">Featured Skincare</h2>
          </div>
          <Link href="/shop" className="btn btn-ghost">View All</Link>
        </div>
        <div className="divider" style={{ margin: '2rem 0 2.5rem' }} />
        <div className={styles.grid}>
          {products.map((p, i) => (
            <Link key={p.id} href={`/product/${p.slug}`}
              className={`product-card reveal reveal-delay-${i + 1}`}>
              <div className="product-card__image-wrap">
                <Image src={p.image} alt={p.name} fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width:600px) 50vw, (max-width:1200px) 33vw, 25vw" />
                {p.badge && <span className={`badge ${styles.badge}`}>{p.badge}</span>}
                <div className="product-card__actions">View Details</div>
              </div>
              <div className="product-card__info">
                <p className="product-card__category">{p.category} {p.size ? `· ${p.size}` : ''}</p>
                <h3 className="product-card__name">{p.name}</h3>
                <p className="product-card__price">
                  {p.sizes ? `From ${formatPrice(Math.min(...p.sizes.map(s => s.price)))}` : formatPrice(p.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
