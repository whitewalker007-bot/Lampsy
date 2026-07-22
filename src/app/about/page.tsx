import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About — NeoSelf Men\'s Skincare',
  description: 'The story behind NeoSelf — men\'s skincare built on clinical evidence, transparency, and formulas designed for Indian skin.',
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <div className={styles.heroWrap}>
        <Image src="/images/hero-man.png" alt="NeoSelf brand story" fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <p className="label" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>Our Story</p>
          <h1 className={`heading-xl ${styles.heroH1}`}>
            Built for skin<br />that deserved better.
          </h1>
        </div>
      </div>

      {/* Story */}
      <div className="container-narrow section-pad">
        <div className={styles.storyBlock}>
          <p className={styles.storyText}>
            Men&apos;s skin deserved better than borrowed formulas and blind trust. 
            So we built NeoSelf — skincare where every claim comes with the receipt.
          </p>
          <p className={styles.storyText}>
            My own struggle with pigmentation taught me how much of skincare is marketing — 
            and how little is evidence. Every product I tried either did nothing, or stung, 
            or left a white cast I had to wipe off before stepping outside.
          </p>
          <p className={styles.storyText}>
            NeoSelf exists to flip that ratio: clinically dosed actives, formulas built for 
            men&apos;s skin and the Indian sun, and lab reports you can actually read. 
            No proprietary blends to hide ineffective dosing. No fragrance to mask poor formulation.
          </p>
          <p className={styles.storyText}>
            I hope these become the quiet essentials on your shelf — products that work, 
            prove it, and let your skin do the talking.
          </p>
        </div>
      </div>

      <div className="divider" />

      {/* Values */}
      <div className="container section-pad-sm">
        <div className={styles.valuesGrid}>
          {[
            { title: 'Clinically Dosed', desc: 'Every active is at the concentration backed by research — not just enough to put it on the label.' },
            { title: 'Built for India', desc: 'Hot climate, humid air, melanin-rich skin. Our formulas are engineered for the conditions you actually live in.' },
            { title: 'Radically Transparent', desc: 'Lab reports on request. No proprietary blends. No hidden ingredient percentages.' },
            { title: 'Evidence Only', desc: 'If the science doesn\'t exist, the ingredient doesn\'t go in. Every formula starts and ends with data.' },
          ].map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <h3 className="heading-sm" style={{ marginBottom: '0.75rem' }}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* Lab image */}
      <div className={styles.labSection}>
        <Image src="/images/ingredients-texture.png" alt="NeoSelf ingredients" fill
          style={{ objectFit: 'cover' }} />
        <div className={styles.labOverlay} />
        <div className={`container ${styles.labContent}`}>
          <h2 className={`heading-lg ${styles.labTitle}`}>The proof is in<br />the formula.</h2>
          <Link href="/shop" className="btn btn-white">Shop the Collection</Link>
        </div>
      </div>
    </div>
  );
}
