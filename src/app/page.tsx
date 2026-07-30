import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import BrandStory from '@/components/home/BrandStory';
import WhyLampsy from '@/components/home/WhyLampsy';
import BundlesCTA from '@/components/home/BundlesCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <BrandStory />
      <WhyLampsy />
      <BundlesCTA />
    </>
  );
}
