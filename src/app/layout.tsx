import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Preloader from '@/components/Preloader';
import { CartProvider } from '@/context/CartContext';
import CartDrawer from '@/components/cart/CartDrawer';

export const metadata: Metadata = {
  title: 'LAMPSY — Natural & Effective Skincare',
  description:
    'LAMPSY offers gentle, effective skincare products formulated with Donkey Milk, SPF 50 PA++++, Peptides, and natural botanicals for soft, radiant, and renewed skin.',
  keywords: ['LAMPSY', 'Donkey Milk Soap', 'Donkey Milk Face Wash', 'SPF 50 Sunscreen', 'Lip Balm', 'Night Cream', 'Natural Skincare'],
  openGraph: {
    title: 'LAMPSY — Natural & Effective Skincare',
    description: 'Donkey Milk Soap, Face Wash, SPF 50 Sunscreen, Nourishing Lip Balm & Overnight Renewal Night Cream.',
    url: 'https://lampsystore2.com',
    siteName: 'LAMPSY',
    images: [{ url: '/images/hero-banner.png', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Preloader />
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
