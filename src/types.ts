export interface Product {
  id: string;
  name: string;
  category: 'units' | 'handpieces' | 'orthodontics' | 'consumables' | 'imaging' | 'surgical';
  categoryLabel: string;
  subCategory: string;
  brand: string;
  sku: string;
  price?: number;
  priceFormatted?: string;
  isQuoteOnly: boolean;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery?: string[];
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specs: Record<string, string>;
  inStock: boolean;
  badge?: 'Best Seller' | 'New' | 'Featured' | 'ISO Certified' | 'Clinic Favorite';
  warranty: string;
  leadTime: string;
}

export interface Category {
  id: 'units' | 'handpieces' | 'orthodontics' | 'consumables' | 'imaging' | 'surgical';
  name: string;
  tagline: string;
  itemCount: number;
  image: string;
  popularItems: string[];
}

export interface QuoteItem {
  product: Product;
  quantity: number;
  clinicNotes?: string;
}

export interface FilterState {
  category: string;
  search: string;
  minPrice: number;
  maxPrice: number;
  brand: string;
  inStockOnly: boolean;
  sortBy: 'popularity' | 'price-asc' | 'price-desc' | 'name';
}

export interface ClinicInquiryForm {
  doctorName: string;
  clinicName: string;
  email: string;
  phone: string;
  preferredContact: 'whatsapp' | 'call' | 'email';
  categoryInterest: string;
  message: string;
}
