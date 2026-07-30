'use client';
import { useEffect, useRef } from 'react';
import styles from './WhyLampsy.module.css';

const PILLARS = [
  { num: '01', title: 'Donkey Milk Formula', desc: 'Enriched with natural Donkey Milk, naturally packed with vitamins A, B, C, D, and E to promote gentle skin renewal and radiant glow.' },
  { num: '02', title: 'SPF 50 PA++++ Shield', desc: 'Maximum broad-spectrum protection against UVA and UVB rays in a lightweight, non-greasy matte finish with zero white cast.' },
  { num: '03', title: 'Fragrance Free & Gentle', desc: 'Formulated without added fragrance or harsh chemicals to protect sensitive skin and support healthy, natural skin hydration.' },
  { num: '04', title: 'Safe & Patch Tested', desc: 'We prioritize skin safety with clear directions for use and patch testing recommendations for every skin type.' },
];

export default function WhyLampsy() {
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
    <section className={`section-pad ${styles.section}`} ref={ref}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <p className="label" style={{ marginBottom: '0.7rem' }}>Why LAMPSY</p>
          <h2 className="heading-lg">Purity & Protection.<br />Every Single Day.</h2>
        </div>
        <div className="divider" style={{ margin: '2.5rem 0 3.5rem' }} />
        <div className={styles.grid}>
          {PILLARS.map((p, i) => (
            <div key={p.num} className={`${styles.pillar} reveal reveal-delay-${i % 3 + 1}`}>
              <span className={styles.num}>{p.num}</span>
              <h3 className={`heading-sm ${styles.title}`}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
