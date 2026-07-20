export type Language = 'en' | 'sr' | 'ru';

export type MenuCategory = 'all' | 'coffee' | 'breakfast' | 'brunch' | 'pastries' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  serbianName: string;
  russianName?: string;
  category: 'coffee' | 'breakfast' | 'brunch' | 'pastries' | 'drinks';
  description: string;
  russianDescription?: string;
  serbianDescription?: string;
  priceRsd: number;
  originOrFarm?: string;
  tags?: ('Vegetarian' | 'Vegan' | 'Gluten-Free' | 'House Signature' | 'Seasonal')[];
  allergens?: string[];
  imageUrl?: string;
  calories?: string;
  isPopular?: boolean;
}

export type GalleryCategory = 'all' | 'interior' | 'coffee' | 'kitchen' | 'dorcol';

export interface GalleryItem {
  id: string;
  title: string;
  serbianName?: string;
  serbianTitle?: string;
  russianTitle?: string;
  category: 'interior' | 'coffee' | 'kitchen' | 'dorcol';
  description: string;
  serbianDescription?: string;
  russianDescription?: string;
  imageUrl: string;
  aspect: 'portrait' | 'landscape' | 'square';
  locationNote?: string;
}

export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  area: 'main-hall' | 'terrace' | 'barista-counter' | 'quiet-nook';
  occasion?: string;
  dietaryNotes?: string;
  agreeToPolicy: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  topic: 'general' | 'private-event' | 'catering' | 'coffee-wholesale' | 'press';
  message: string;
}

export interface FaqItem {
  question: string;
  serbianQuestion?: string;
  russianQuestion?: string;
  answer: string;
  serbianAnswer?: string;
  russianAnswer?: string;
  category: 'visiting' | 'coffee' | 'dining' | 'events';
}
