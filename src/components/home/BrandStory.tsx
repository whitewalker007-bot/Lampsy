'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from './BrandStory.module.css';

export default function BrandStory() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach((en) => en.isIntersecting && en.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.grid}>
        <div className={`${styles.imageWrap} reveal`}>
          <Image src="/images/about-brand.png" alt="LAMPSY ingredients & care" fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width:900px) 100vw, 50vw" />
        </div>
        <div className={`${styles.content} reveal reveal-delay-2`}>
          <p className="label" style={{ marginBottom: '1rem' }}>Our Story</p>
          <h2 className={`heading-lg ${styles.title}`}>
            Skincare rooted in<br />nature & purity.
          </h2>
          <p className={styles.body}>
            Your skin deserves thoughtful formulation without compromises.
            LAMPSY was created to combine the age-old nourishing benefits of Donkey Milk with modern UV protection and overnight peptide renewal.
          </p>
          <p className={styles.body}>
            From our Donkey Milk Face Wash to SPF 50 PA++++ Sunscreen, Nourishing Lip Balm, and Overnight Renewal Night Cream, every product is designed to keep your skin soft, moisturized, radiant, and spotless.
          </p>
          <blockquote className={styles.quote}>
            &ldquo;Thoughtfully crafted skincare designed to bring out your skin&apos;s natural beauty and radiance.&rdquo;
          </blockquote>
          <Link href="/about" className="btn btn-outline" style={{ marginTop: '2rem', alignSelf: 'flex-start' }}>
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
