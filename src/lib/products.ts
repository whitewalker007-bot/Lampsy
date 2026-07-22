export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: string;
  categorySlug: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  benefits: string[];
  howToUse: string;
  ingredients: { name: string; benefit: string }[];
  description: string;
}

export const products: Product[] = [
  {
    id: 'sunscreen-001',
    slug: 'pigment-control-daily-sunscreen',
    name: 'Pigment-Control Daily Sunscreen',
    shortName: 'Daily Sunscreen SPF 50+',
    category: 'Pigment Defend',
    categorySlug: 'pigment-defend',
    tagline: 'Stop sun damage before it becomes pigmentation.',
    price: 849,
    badge: 'Best Seller',
    image: '/images/sunscreen.png',
    description:
      'Broad-spectrum SPF 50+ engineered specifically for Indian skin and the relentless Indian sun. Clinically dosed to prevent tanning, reduce dark spots, and protect your skin barrier — all without the white cast.',
    benefits: [
      'Powerful broad-spectrum UVA/UVB protection',
      'Helps prevent tanning and sun-induced darkening',
      'Helps reduce the appearance of dark spots over time',
      'Helps strengthen and soothe the skin barrier',
      'Lightweight, non-greasy, invisible finish',
      'Designed for hot and humid conditions',
    ],
    howToUse:
      'Apply two finger-lengths evenly across face & neck as the final step of your morning routine. Reapply every 4 hours — and after swimming, sweating or towel-drying.',
    ingredients: [
      { name: 'Filter System', benefit: 'Broad-spectrum UV defence' },
      { name: 'Butylresorcinol', benefit: 'Targeted pigment control' },
      { name: 'Niacinamide', benefit: 'Tone & barrier support' },
      { name: 'Panthenol', benefit: 'Hydration & recovery' },
      { name: 'Beta-Glucan', benefit: 'Calming hydration' },
    ],
  },
  {
    id: 'nightcream-001',
    slug: 'repair-night-cream',
    name: 'Repair Night Cream',
    shortName: 'Night Cream',
    category: 'Repair',
    categorySlug: 'repair',
    tagline: 'Rebuild your skin barrier while you sleep.',
    price: 999,
    badge: 'New',
    image: '/images/nightcream.png',
    description:
      "An evidence-backed night cream that works with your skin's natural repair cycle. Deep moisture, active repair, and barrier restoration — so you wake up to genuinely better skin.",
    benefits: [
      'Repairs and rebuilds the skin barrier overnight',
      'Delivers deep, long-lasting hydration',
      'Reduces appearance of uneven texture',
      'Calms post-sun inflammation',
      'Supports collagen synthesis',
    ],
    howToUse:
      'Apply a pea-sized amount to cleansed face and neck. Gently massage upwards until absorbed. Use every night as the last step of your evening routine.',
    ingredients: [
      { name: 'Retinol 0.1%', benefit: 'Accelerated cell renewal' },
      { name: 'Ceramide Complex', benefit: 'Barrier restoration' },
      { name: 'Hyaluronic Acid', benefit: 'Deep hydration' },
      { name: 'Peptides', benefit: 'Collagen support' },
      { name: 'Centella Asiatica', benefit: 'Soothing & repair' },
    ],
  },
  {
    id: 'facewash-001',
    slug: 'clean-face-wash',
    name: 'Clean Face Wash',
    shortName: 'Face Wash / Cleanser',
    category: 'Clean',
    categorySlug: 'clean',
    tagline: 'Clean without stripping. Every single time.',
    price: 499,
    image: '/images/facewash.png',
    description:
      "A pH-balanced cleanser formulated for men's naturally oilier skin. Removes dirt, sweat, and sunscreen efficiently without disrupting your skin's moisture barrier.",
    benefits: [
      'pH-balanced to protect skin barrier',
      'Removes sweat, sebum, and sunscreen effectively',
      'Prevents breakouts with salicylic acid',
      'Soothing botanical extracts prevent over-drying',
      'Suitable for daily use, morning and night',
    ],
    howToUse:
      'Wet face with lukewarm water. Apply a small amount to palms, lather, and massage gently for 30–60 seconds. Rinse thoroughly. Use twice daily.',
    ingredients: [
      { name: 'Salicylic Acid 0.5%', benefit: 'Pore clearing & breakout prevention' },
      { name: 'Aloe Vera', benefit: 'Soothing hydration' },
      { name: 'Niacinamide', benefit: 'Pore minimising' },
      { name: 'Glycerin', benefit: 'Moisture retention' },
      { name: 'Green Tea Extract', benefit: 'Antioxidant protection' },
    ],
  },
];

export const bundles = [
  {
    id: 'bundle-full',
    slug: 'complete-routine-bundle',
    name: 'Complete Routine Bundle',
    shortName: 'Defend + Repair + Clean',
    tagline: 'Everything your skin needs. Morning to night.',
    price: 1999,
    originalPrice: 2347,
    badge: 'Best Value',
    image: '/images/bundle-all.png',
    bundleProducts: ['sunscreen-001', 'nightcream-001', 'facewash-001'],
    description:
      'The full NeoSelf system — designed to work as a single, synergistic routine. Protect during the day, cleanse at night, repair while you sleep.',
  },
  {
    id: 'bundle-defend-repair',
    slug: 'defend-repair-bundle',
    name: 'Defend + Repair Bundle',
    shortName: 'Defend + Repair',
    tagline: 'Protect, repair, transform.',
    price: 1599,
    originalPrice: 1848,
    badge: 'Popular',
    image: '/images/bundle-all.png',
    bundleProducts: ['sunscreen-001', 'nightcream-001'],
    description:
      'Protection in the AM, repair in the PM. The two-step system for men battling pigmentation.',
  },
  {
    id: 'bundle-defend-clean',
    slug: 'defend-clean-bundle',
    name: 'Defend + Clean Bundle',
    shortName: 'Defend + Clean',
    tagline: 'The daily essentials.',
    price: 1199,
    originalPrice: 1348,
    image: '/images/bundle-all.png',
    bundleProducts: ['sunscreen-001', 'facewash-001'],
    description:
      'Start clean, stay protected. The daily duo for men who want a simple, effective skincare routine.',
  },
  {
    id: 'bundle-repair-clean',
    slug: 'repair-clean-bundle',
    name: 'Repair + Clean Bundle',
    shortName: 'Repair + Clean',
    tagline: 'Cleanse, restore, repeat.',
    price: 1299,
    originalPrice: 1498,
    image: '/images/bundle-all.png',
    bundleProducts: ['nightcream-001', 'facewash-001'],
    description:
      'For men who already use sunscreen. Add a proper cleanser and night cream to complete your routine.',
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug) || null;
}

export function getBundleBySlug(slug: string) {
  return bundles.find((b) => b.slug === slug) || null;
}

export function formatPrice(price: number) {
  return `\u20B9${price.toLocaleString('en-IN')}`;
}
