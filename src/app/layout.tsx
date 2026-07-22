import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'NeoSelf — Men\'s Skincare, Clinically Proven',
  description:
    'NeoSelf offers clinically dosed men\'s skincare formulated for Indian skin and the Indian sun. Sunscreen, night cream, and face wash — every claim backed by lab reports.',
  keywords: ['men skincare', 'Indian skincare', 'sunscreen for men', 'pigmentation control', 'NeoSelf'],
  openGraph: {
    title: 'NeoSelf — Men\'s Skincare, Clinically Proven',
    description: 'Skincare where every claim comes with the receipt.',
    url: 'https://www.neoselfmen.com',
    siteName: 'NeoSelf',
    images: [{ url: '/images/hero-banner.png', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
