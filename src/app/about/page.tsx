import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About — LAMPSY Skincare',
  description: 'The story behind LAMPSY — natural & effective skincare combining Donkey Milk, SPF 50 protection, and overnight peptide renewal.',
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <div className={styles.heroWrap}>
        <Image src="/images/hero-banner.png" alt="LAMPSY brand story" fill
          style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <p className="label" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>Our Story</p>
          <h1 className={`heading-xl ${styles.heroH1}`}>
            Nourishing skincare<br />crafted for your natural glow.
          </h1>
        </div>
      </div>

      {/* Story */}
      <div className="container-narrow section-pad">
        <div className={styles.storyBlock}>
          <p className={styles.storyText}>
            LAMPSY was founded with a clear vision: creating pure, effective, and deeply nourishing skincare products that yield visible results.
          </p>
          <p className={styles.storyText}>
            From our signature <strong>Donkey Milk Face Wash</strong> enriched with Vitamin C and Lactic Acid to our <strong>Advanced Sunscreen SPF 50 PA++++</strong> with Hyaluronic Acid and Vitamin E, every formulation is meticulously developed to protect, renew, and moisturize your skin.
          </p>
          <p className={styles.storyText}>
            Whether it is daily lip care with our <strong>Nourishing Lip Balm</strong> or night recovery with our <strong>Overnight Renewal Night Cream</strong>, LAMPSY provides clean, fragrance-free, and safe skincare solutions for all skin types.
          </p>
          <p className={styles.storyText}>
            Based in Kochi, Kerala, we ensure every batch adheres to strict quality standards. We strongly recommend performing a patch test before first use to ensure full compatibility with your unique skin type.
          </p>
        </div>
      </div>

      <div className="divider" />

      {/* Values */}
      <div className="container section-pad-sm">
        <div className={styles.valuesGrid}>
          {[
            { title: 'Donkey Milk Renewal', desc: 'Packed with vitamins A, B, C, D, and E to promote skin brightening, renewal, and natural exfoliation.' },
            { title: 'SPF 50 PA++++ Defense', desc: 'Maximum broad-spectrum protection shielding against UVA (ageing) and UVB (burning) rays.' },
            { title: 'Matte & Fragrance Free', desc: 'Non-greasy formulas added with zero fragrance for clean, comfortable daily wear.' },
            { title: 'Patch Test Safety', desc: 'Promoting individual skin care awareness with clear directions for use and patch test guidelines.' },
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
        <Image src="/images/hero-banner.png" alt="LAMPSY ingredients" fill
          style={{ objectFit: 'cover' }} />
        <div className={styles.labOverlay} />
        <div className={`container ${styles.labContent}`}>
          <h2 className={`heading-lg ${styles.labTitle}`}>Discover radiant skin<br />with LAMPSY.</h2>
          <Link href="/shop" className="btn btn-white">Shop the Collection</Link>
        </div>
      </div>
    </div>
  );
}
