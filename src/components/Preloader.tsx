'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setDone(true), 300);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  if (done) return null;

  return (
    <div className={`${styles.preloader} ${progress >= 100 ? styles.hidden : ''}`}>
      <div className={styles.content}>
        <Image
          src="/images/logo.png"
          alt="LAMPSY Skincare"
          width={180}
          height={60}
          style={{ objectFit: 'contain', marginBottom: '0.5rem' }}
          priority
        />
        <p className={styles.tagline}>Nourishing & Natural Skincare</p>
        <div className={styles.progressTrack}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
