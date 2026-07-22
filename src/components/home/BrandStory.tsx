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
          <Image src="/images/about-brand.png" alt="NeoSelf — lab & ingredients" fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width:900px) 100vw, 50vw" />
        </div>
        <div className={`${styles.content} reveal reveal-delay-2`}>
          <p className="label" style={{ marginBottom: '1rem' }}>Our Story</p>
          <h2 className={`heading-lg ${styles.title}`}>
            Where every claim<br />comes with the receipt.
          </h2>
          <p className={styles.body}>
            Men&apos;s skin deserved better than borrowed formulas and blind trust.
            So we built NeoSelf — skincare where every claim comes with the receipt.
          </p>
          <p className={styles.body}>
            My own struggle with pigmentation taught me how much of skincare is marketing — 
            and how little is evidence. NeoSelf exists to flip that ratio: clinically dosed actives, 
            formulas built for men&apos;s skin and the Indian sun, and lab reports you can actually read.
          </p>
          <blockquote className={styles.quote}>
            &ldquo;Products that work, prove it, and let your skin do the talking.&rdquo;
          </blockquote>
          <Link href="/about" className="btn btn-outline" style={{ marginTop: '2rem', alignSelf: 'flex-start' }}>
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
