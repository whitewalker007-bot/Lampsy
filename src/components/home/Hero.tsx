'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Subtle ambient gold particle shimmer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: -Math.random() * 0.35 - 0.15,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140, 115, 75, ${p.alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#8c734b';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className={styles.hero}>
      {/* Clear Vibrant Background Image & Canvas */}
      <div className={styles.bg}>
        <canvas ref={canvasRef} className={styles.videoCanvas} />
        <Image
          src="/images/hero-banner.png"
          alt="LAMPSY Skincare Products"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={`${styles.text} ${loaded ? styles.loaded : ''}`}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowSymbol}>✦</span>
            Nourishing & Natural Skincare
            <span className={styles.eyebrowSymbol}>✦</span>
          </p>

          <h1 className={`heading-xl ${styles.h1}`}>
            Glow. Nourish.<br />
            <span className={styles.h1Italic}>Protect. Repeat.</span>
          </h1>

          <p className={styles.sub}>
            Discover skincare designed to bring out your skin’s natural radiance while keeping it beautifully cared for. 🌿✨
          </p>

          <div className={styles.ctas}>
            <Link href="/shop" className={`btn ${styles.primaryDark}`}>
              Shop Collection
            </Link>
            <Link href="/about" className={`btn ${styles.outlineDark}`}>
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className={styles.scrollHint}>
          <span className={styles.line} />
          <span className="label" style={{ color: '#111111', opacity: 0.75, letterSpacing: '0.18em' }}>Scroll</span>
        </div>
      </div>
    </section>
  );
}
