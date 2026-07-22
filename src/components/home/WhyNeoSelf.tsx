'use client';
import { useEffect, useRef } from 'react';
import styles from './WhyNeoSelf.module.css';

const PILLARS = [
  { num: '01', title: 'Clinically Dosed', desc: 'Every active in every formula is at the concentration backed by clinical research — not just enough to list it on the label.' },
  { num: '02', title: 'Built for India', desc: 'Formulas engineered for hot and humid conditions, darker skin tones, and the specific pigmentation challenges of the Indian sun.' },
  { num: '03', title: 'Radical Transparency', desc: 'We publish our lab reports. Full ingredient percentages. No proprietary blends used to hide ineffective dosing.' },
  { num: '04', title: 'Only What Works', desc: 'No filler ingredients. No fragrance for the sake of it. No marketing trends without science behind them.' },
];

export default function WhyNeoSelf() {
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
          <p className="label" style={{ marginBottom: '0.7rem' }}>Why NeoSelf</p>
          <h2 className="heading-lg">Science first.<br />Always.</h2>
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
