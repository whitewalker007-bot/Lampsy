export interface ProductSize {
  size: string;
  price: number;
}

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
  images?: string[];
  badge?: string;
  benefits: string[];
  howToUse: string;
  importantNote?: string;
  ingredients: { name: string; benefit: string }[];
  description: string;
  size?: string;
  sizes?: ProductSize[];
}

export const products: Product[] = [
  {
    id: 'facewash-001',
    slug: 'donkey-milk-face-wash',
    name: 'Donkey Milk Face Wash',
    shortName: 'Donkey Milk Face Wash',
    category: 'Cleansing',
    categorySlug: 'cleansing',
    tagline: 'Moisturizing & skin brightening face wash with Vitamin C & Lactic Acid.',
    price: 270,
    size: '100ml',
    badge: 'Bestseller',
    image: '/images/facewash.png',
    images: ['/images/facewash.png', '/images/facewash-lifestyle.png'],
    description:
      'Formulated with genuine Donkey Milk extract, Vitamin C, and Lactic Acid. Delivers natural exfoliation, skin renewal, anti-ageing protection, and a spotless, glowing complexion while keeping your skin moisturized and soft.',
    benefits: [
      'Moisturizing properties',
      'Helps brightening and spotless glowing skin',
      'Helps in skin renewal',
      'Fights ageing',
      'Gives natural exfoliation',
    ],
    howToUse:
      'Apply a small amount of Donkey milk face wash on damp face. Work up a mild lather and scrub with lukewarm water or tap water and pat dry with a clean towel. You will feel fresh and soft skin.',
    importantNote:
      'Skincare results may vary from person to person, as every individual’s skin is different. We strongly recommend performing a patch test before applying the product to the entire face. Discontinue use if any irritation or adverse reaction occurs.',
    ingredients: [
      { name: 'Donkey Milk Extract', benefit: 'Rich in essential proteins, vitamins A to E, and natural skin renewal properties' },
      { name: 'Vitamin C', benefit: 'Potent antioxidant for bright, spotless, and radiant skin' },
      { name: 'Lactic Acid (AHA)', benefit: 'Gentle natural exfoliation and smoothing of skin texture' },
      { name: 'Moisturizing Complex', benefit: 'Deep hydrating agents to prevent over-drying' },
    ],
  },
  {
    id: 'soap-001',
    slug: 'donkey-milk-soap',
    name: 'Donkey Milk Soap',
    shortName: 'Donkey Milk Soap',
    category: 'Cleansing',
    categorySlug: 'cleansing',
    tagline: 'Gentle everyday cleansing bar enriched with moisturizing Donkey Milk.',
    price: 190,
    size: '100gm',
    badge: 'New',
    image: '/images/donkey-milk-soap.jpg',
    images: ['/images/donkey-milk-soap.jpg'],
    description:
      'LAMPSY Donkey Milk Soap is formulated for gentle everyday cleansing without excessive dryness. Enriched with natural Donkey Milk to leave skin soft, smooth, refreshed, and supple with a healthy-looking glow.',
    benefits: [
      'Helps cleanse skin gently without excessive dryness.',
      'Helps keep skin soft, smooth and moisturised.',
      'Supports a fresh, healthy-looking glow.',
      'Helps improve the appearance of rough, dry skin.',
      'Leaves skin feeling refreshed and supple.',
      'Suitable for everyday cleansing.',
    ],
    howToUse:
      'Wet the skin and soap, gently lather and massage over the body/face as appropriate. Rinse thoroughly with clean water and pat dry. For external use only.',
    importantNote:
      'Skincare results may vary from person to person, as every individual’s skin is different. We strongly recommend performing a patch test before applying the product to the entire face. Discontinue use if any irritation or adverse reaction occurs.',
    ingredients: [
      { name: 'Donkey Milk Extract', benefit: 'Rich in vitamins & natural moisturizers for skin softness' },
      { name: 'Natural Soap Base', benefit: 'Gentle everyday cleansing without stripping moisture' },
      { name: 'Hydrating Glycerin', benefit: 'Locks moisture and leaves skin supple and refreshed' },
    ],
  },
  {
    id: 'sunscreen-001',
    slug: 'matte-sunscreen-spf-50',
    name: 'Advanced Sunscreen SPF 50 PA++++',
    shortName: 'Sunscreen SPF 50',
    category: 'Sun Protection',
    categorySlug: 'sun-care',
    tagline: 'Enriched with Hyaluronic Acid & Vitamin E for maximum protection & non-greasy matte finish.',
    price: 699,
    size: '50gm',
    badge: 'SPF 50 PA++++',
    image: '/images/sunscreen.png',
    images: ['/images/sunscreen.png', '/images/sunscreen-back.png'],
    description:
      'LAMPSY Advanced Sunscreen SPF 50 PA++++ provides maximum broad-spectrum protection against UVA & UVB rays. Helps prevent sunburn, tanning, and premature aging with a matte, non-greasy finish. Enriched with Hyaluronic Acid and Vitamin E.',
    benefits: [
      'SPF 50 and PA++++ (Ensure maximum protection from sun exposure. Shields against UVA & UVB)',
      'Matte, Non-greasy finish (No oily or sticky feel)',
      'Hydrates skin and Locks moisture (Keep your skin soft and moisturised)',
      'Fragrance Free (Added no fragrance)',
    ],
    howToUse:
      'Apply generously and evenly to the face, neck, and other exposed areas 15–20 minutes before sun exposure. Reapply every 2 hours, and more frequently after sweating, swimming, or towel-drying. Use daily as the final step of your morning skincare routine.',
    importantNote:
      'Skincare results may vary from person to person, as every individual’s skin is different. We strongly recommend performing a patch test before applying the product to the entire face. Discontinue use if any irritation or adverse reaction occurs.',
    ingredients: [
      { name: 'UV Filter Matrix (Tinosorb S, Avobenzone, Octinoxate, Octocrylene)', benefit: 'Broad-spectrum defense against UVA & UVB rays' },
      { name: 'Hyaluronic Acid', benefit: 'Locks in deep skin moisture' },
      { name: 'Vitamin E', benefit: 'Antioxidant protection against free radicals' },
      { name: 'Silicone Elastomers Blend', benefit: 'Non-greasy, matte, silky smooth finish' },
    ],
  },
  {
    id: 'lipbalm-001',
    slug: 'nourishing-lip-balm',
    name: 'Nourishing Lip Balm',
    shortName: 'Lip Balm',
    category: 'Lip Care',
    categorySlug: 'lip-care',
    tagline: 'Deeply moisturizes and protects dry lips for long-lasting softness.',
    price: 250,
    size: '10gm',
    badge: 'Rose Infused',
    image: '/images/lipbalm.png',
    images: ['/images/lipbalm.png'],
    description:
      'Formulated to deeply moisturize dry lips, preventing chapping, flaking, and environmental damage. Keeps lips soft, smooth, supple, and naturally healthy-looking.',
    benefits: [
      'Deeply moisturises and nourishes dry lips',
      'Helps prevent dryness, chapping & flaking',
      'Keeps lips soft, smooth & supple',
      'Helps protect lips from environmental dryness',
      'Supports healthy-looking, naturally soft lips',
    ],
    howToUse:
      'Apply evenly over clean, dry lips. Reapply throughout the day as needed, especially after eating or drinking. Use regularly for soft, moisturised lips.',
    importantNote:
      'Skincare results may vary from person to person, as every individual’s skin is different. We strongly recommend performing a patch test before applying the product to the entire face. Discontinue use if any irritation or adverse reaction occurs.',
    ingredients: [
      { name: 'Rose & Botanical Extracts', benefit: 'Nourishes and soothes dry, delicate lip skin' },
      { name: 'Natural Oils & Butters', benefit: 'Provides deep moisture and prevents chapping' },
      { name: 'Beeswax Seal', benefit: 'Protects against environmental dryness' },
    ],
  },
  {
    id: 'nightcream-001',
    slug: 'overnight-renewal-night-cream',
    name: 'Overnight Renewal Night Cream',
    shortName: 'Night Cream',
    category: 'Overnight Care',
    categorySlug: 'overnight-care',
    tagline: 'Rejuvenate and repair your skin overnight for a youthful, glowing complexion.',
    price: 1499,
    size: '60gm',
    sizes: [
      { size: '20gm', price: 499 },
      { size: '30gm', price: 899 },
      { size: '60gm', price: 1499 },
    ],
    badge: 'Restorative Care',
    image: '/images/nightcream.jpg',
    images: ['/images/nightcream.jpg'],
    description:
      'An intensive overnight restorative cream engineered with rich Donkey Milk proteins, hydrating Peptides, and Ceramides. Rebuilds the skin barrier, boosts elasticity, locks in deep moisture, and restores natural radiance while you sleep.',
    benefits: [
      'Brightens dull skin and enhances natural radiance.',
      'Helps reduce the appearance of dark spots and pigmentation.',
      'Helps fade the appearance of acne marks and blemishes.',
      'Improves uneven skin tone and texture.',
      'Helps reduce the appearance of fine lines and early signs of ageing.',
    ],
    howToUse:
      'For night-time use only. Apply a small, even layer of the product over the face and leave it overnight.\n\nThere is no need to massage the product into the skin. Simply spread it evenly across the face. Wash thoroughly in the next morning .\n\nDuring the daytime, always use a broad-spectrum sunscreen with SPF 50 and reapply every 2 hours, especially when exposed to sunlight.',
    importantNote:
      'Skincare results may vary from person to person, as every individual’s skin is different. We strongly recommend performing a patch test before applying the product to the entire face. Discontinue use if any irritation or adverse reaction occurs.',
    ingredients: [
      { name: 'Donkey Milk & Peptide Complex', benefit: 'Accelerates collagen & cell regeneration' },
      { name: 'Hyaluronic Acid 2%', benefit: 'Multi-depth overnight hydration' },
      { name: 'Ceramides & Niacinamide', benefit: 'Restores skin barrier & evens tone' },
    ],
  },
];

export const bundles = [
  {
    id: 'bundle-glowing-duo',
    slug: 'glowing-day-duo',
    name: 'LAMPSY Daily Protection Duo',
    shortName: 'Face Wash + Sunscreen',
    tagline: 'Cleanse and shield your skin every morning.',
    price: 899,
    originalPrice: 969,
    badge: 'Popular',
    image: '/images/facewash.png',
    bundleProducts: ['facewash-001', 'sunscreen-001'],
    description:
      'Start your day with Donkey Milk Face Wash for spotless glow, followed by Advanced Sunscreen SPF 50 for all-day sun protection.',
  },
  {
    id: 'bundle-donkey-milk-duo',
    slug: 'donkey-milk-cleansing-duo',
    name: 'LAMPSY Donkey Milk Cleansing Duo',
    shortName: 'Face Wash + Soap',
    tagline: 'Double the natural nourishing power of Donkey Milk.',
    price: 430,
    originalPrice: 460,
    badge: 'Donkey Milk Duo',
    image: '/images/donkey-milk-soap.jpg',
    bundleProducts: ['facewash-001', 'soap-001'],
    description:
      'Pure natural cleansing duo featuring Donkey Milk Face Wash for facial brightening and Donkey Milk Soap for everyday body & face softness.',
  },
  {
    id: 'bundle-complete-system',
    slug: 'complete-lampsy-routine',
    name: 'LAMPSY Complete Routine Pack',
    shortName: 'Full Routine',
    tagline: 'Complete care for face, body, lips, and overnight repair.',
    price: 2699,
    originalPrice: 2908,
    badge: 'Best Value',
    image: '/images/hero-banner.png',
    bundleProducts: ['facewash-001', 'soap-001', 'sunscreen-001', 'nightcream-001', 'lipbalm-001'],
    description:
      'The ultimate LAMPSY routine: Donkey Milk Face Wash, Donkey Milk Soap, Advanced Sunscreen SPF 50, Nourishing Lip Balm, and Overnight Renewal Night Cream (60gm).',
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
