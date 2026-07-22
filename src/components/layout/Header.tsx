'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
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
          <nav className={styles.navLeft} aria-label="Primary">
            {NAV.slice(0, 2).map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>{l.label}</Link>
            ))}
          </nav>

          <Link href="/" className={styles.logo} aria-label="NeoSelf home">NeoSelf</Link>

          <div className={styles.navRight}>
            {NAV.slice(2).map((l) => (
              <Link key={l.href} href={l.href} className={styles.link}>{l.label}</Link>
            ))}
            <button className={styles.burger} onClick={() => setOpen(true)} aria-label="Open menu">
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu */}
      <div className={[styles.menu, open ? styles.menuOpen : ''].join(' ')} aria-hidden={!open}>
        <button className={styles.close} onClick={() => setOpen(false)} aria-label="Close">✕</button>
        <nav className={styles.menuNav}>
          {NAV.map((l, i) => (
            <Link key={l.href} href={l.href} className={styles.menuLink}
              style={{ transitionDelay: open ? `${i * 0.06 + 0.1}s` : '0s' }}
              onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
        <p className={`label ${styles.menuTagline}`}>Men&apos;s skincare, proven.</p>
      </div>
    </>
  );
}
