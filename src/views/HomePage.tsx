import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeaturedCategories } from '../components/FeaturedCategories';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { Category, Product } from '../types';

interface HomePageProps {
  categories: Category[];
  products: Product[];
  onShopCatalog: (category?: string) => void;
  onRequestQuote: () => void;
  onQuickView: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  quoteProductIds: Set<string>;
}

export const HomePage: React.FC<HomePageProps> = ({
  categories,
  products,
  onShopCatalog,
  onRequestQuote,
  onQuickView,
  onAddToQuote,
  quoteProductIds,
}) => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <HeroSection
        onShopCatalog={() => onShopCatalog()}
        onRequestQuote={onRequestQuote}
        onSelectCategory={(catId) => onShopCatalog(catId === 'all' ? undefined : catId)}
      />

      {/* Featured Categories Grid */}
      <FeaturedCategories
        categories={categories}
        onSelectCategory={(catId) => onShopCatalog(catId === 'all' ? undefined : catId)}
      />

      {/* Why Choose Us / Trust Markers */}
      <WhyChooseUs />

      {/* Featured Products / Best Sellers */}
      <FeaturedProducts
        products={products}
        onQuickView={onQuickView}
        onAddToQuote={onAddToQuote}
        quoteProductIds={quoteProductIds}
        onNavigateToCatalog={(cat) => onShopCatalog(cat)}
      />

      {/* Practitioner Testimonials */}
      <TestimonialsSection />
    </div>
  );
};
