'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import LampsyLogo from '@/components/common/LampsyLogo';
import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';

const NAV = [
  { label: 'Shop', href: '/shop' },
  { label: 'Bundles', href: '/bundles' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { totalCount, openCart } = useCart();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={[styles.header, scrolled ? styles.scrolled : ''].join(' ')}>
        <div className={styles.inner}>
          {/* Navigation Left */}
          <nav className={styles.navLeft} aria-label="Primary Left">
            {NAV.slice(0, 2).map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>{l.label}</Link>
            ))}
          </nav>

          {/* Prominent SVG Logo Center */}
          <Link href="/" className={styles.logo} aria-label="LAMPSY home">
            <LampsyLogo height={60} showText={true} />
          </Link>

          {/* Navigation Right */}
          <div className={styles.navRight}>
            {NAV.slice(2).map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>{l.label}</Link>
            ))}

            {/* Cart Button */}
            <button className={styles.cartBtn} onClick={openCart} aria-label="Shopping Cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span className={styles.cartBadge}>{totalCount}</span>
            </button>

            <button className={styles.burger} onClick={() => setOpen(true)} aria-label="Open menu">
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu */}
      <div className={[styles.menu, open ? styles.menuOpen : ''].join(' ')} aria-hidden={!open}>
        <button className={styles.close} onClick={() => setOpen(false)} aria-label="Close">✕</button>

        <LampsyLogo height={72} showText={true} style={{ marginBottom: '2rem' }} />

        <nav className={styles.menuNav}>
          {NAV.map((l, i) => (
            <Link key={l.href} href={l.href} className={styles.menuLink}
              style={{ transitionDelay: open ? `${i * 0.06 + 0.1}s` : '0s' }}
              onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
        <p className={`label ${styles.menuTagline}`}>LAMPSY — Natural & Effective Skincare.</p>
      </div>
    </>
  );
}
