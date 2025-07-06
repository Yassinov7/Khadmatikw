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

// export type Offer = {
//   id: number;
//   title: string;
//   description?: string;
//   discount_percent?: number;
//   start_date?: string;
//   end_date?: string;
//   product?: { name: string; image_url?: string; category_id?: number };
//   contact_info?: {
//     phone?: string;
//     whatsapp?: string;
//     [key: string]: string | undefined;
//   };
// };

export type Blog = {
  id: number;
  title: string;
  cover_url?: string;
  content: string;
  created_at: string;
  // category_id?: number; // لدعم التصنيفات مستقبلاً
};