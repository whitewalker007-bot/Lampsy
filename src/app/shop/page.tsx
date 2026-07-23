import type { Metadata } from 'next';
import { Suspense } from 'react';
import ShopClient from './ShopClient';

export const metadata: Metadata = {
  title: 'Shop — NeoSelf Men\'s Skincare',
  description: 'Browse all NeoSelf products — clinically dosed sunscreen, night cream, and face wash formulated for Indian men\'s skin.',
};

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopClient />
    </Suspense>
  );
}
