// types.ts

export type Category = {
  id: number;
  name: string;
  description?: string | null
};

export type Product = {
  id: number;
  name: string;
  description?: string;
  image_url?: string;
  price?: number;
  on_sale?: boolean;
  sale_price?: number;
  category_id?: number; // يجب أن يكون هنا!
  category?: { name: string };
  contact_info?: {
    phone?: string;
    whatsapp?: string;
    [key: string]: string | undefined;
  };
};

export type Offer = {
  id: number;
  title: string;
  description?: string;
  // Remove direct price attributes to avoid price sensitivity
  // Instead focus on benefits and features
  benefits?: string[]; // List of key benefits
  features?: string[]; // List of features
  start_date?: string;
  end_date?: string;
  image_url?: string; // Banner or promotional image
  product?: {
    id: number;
    name: string;
    image_url?: string;
    category_id?: number;
    category?: { name: string };
  };
  contact_info?: {
    phone?: string;
    whatsapp?: string;
    [key: string]: string | undefined;
  };
  // SEO fields removed - using slug generation with ID instead
};

export type Blog = {
  id: number;
  title: string;
  cover_url?: string;
  content: string;
  created_at: string;
};