import type { Metadata } from 'next';
import { Suspense } from 'react';
import ShopClient from './ShopClient';

export const metadata: Metadata = {
  title: 'Shop — LAMPSY Skincare',
  description: 'Browse the complete LAMPSY skincare collection — Donkey Milk Face Wash, Advanced Sunscreen SPF 50 PA++++, Nourishing Lip Balm, and Overnight Renewal Night Cream.',
};

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopClient />
    </Suspense>
  );
}
