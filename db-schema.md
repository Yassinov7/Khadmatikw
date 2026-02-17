this is my current db 
# 📑 Database Schema Documentation

## Table: blog_posts
Stores articles or blog entries. Useful for SEO, news, or content marketing.  

| Column       | Type        | Description |
|--------------|-------------|-------------|
| id           | integer (PK)| Unique identifier for each post. |
| title        | text        | Title of the blog post. |
| cover_url    | text        | Optional cover image URL. |
| content      | text        | Main content/body of the article. |
| created_at   | timestamp   | Creation date (default: now()). |

---

## Table: categories
Defines product categories for grouping and navigation.  

| Column       | Type        | Description |
|--------------|-------------|-------------|
| id           | integer (PK)| Unique category identifier. |
| name         | text        | Category name (e.g. "Electronics"). |
| description  | text        | Optional category description. |

---

## Table: products
Main catalog of products. Linked to categories.  
⚠️ **Note:** For SEO and compliance, the schema should avoid direct price attributes.  

| Column        | Type        | Description |
|---------------|-------------|-------------|
| id            | integer (PK)| Unique product identifier. |
| name          | text        | Product name. |
| description   | text        | Detailed description of the product. |
| image_url     | text        | Image reference for display. |
| price         | numeric     | (⚠️ Deprecated: should be removed, no direct prices). |
| on_sale       | boolean     | (⚠️ Deprecated: tied to pricing logic). |
| sale_price    | numeric     | (⚠️ Deprecated: should be removed). |
| category_id   | integer (FK → categories.id) | Category of product. |
| created_at    | timestamp   | Creation date (default: now()). |
| contact_info  | jsonb       | Contact data (seller info, phone, etc). |

---

## Table: offers
Promotional offers connected to products.  
⚠️ **Note:** The `offers` table has been redesigned to avoid direct price or discount fields. Instead, focus on descriptive marketing attributes.  

| Column           | Type        | Description |
|------------------|-------------|-------------|
| id               | integer (PK)| Unique identifier for the offer. |
| title            | text        | Offer headline. |
| description      | text        | Offer description. |
| benefits         | text[]      | List of key benefits (array of strings). |
| features         | text[]      | List of features (array of strings). |
| start_date       | date        | Offer start date. |
| end_date         | date        | Offer end date. |
| image_url        | text        | Banner or promotional image URL. |
| product_id       | integer (FK → products.id) | Linked product (nullable if generic offer). |
| contact_info     | jsonb       | Contact details related to the offer. |
| created_at       | timestamp   | Offer creation date (default: UTC now). |

---

# 🔗 Relationships
- **products.category_id → categories.id**  
Each product belongs to one category.  

- **offers.product_id → products.id**  
Each offer is linked to a specific product.  

- **blog_posts** is independent but can be extended with tags, categories, or authors later.  

---

# 🚀 Redesign Recommendations
1. **Remove direct price attributes** (`price`, `sale_price`, `discount_percent`) to make the schema more flexible and SEO-friendly.  
2. **Add slug fields** for SEO-friendly URLs in `blog_posts`, `categories`, `products`, and `offers`.  
3. **Redesign offers** to highlight features like:
   - Marketing headline
   - Benefits or USP (Unique Selling Proposition)
   - Validity dates
   - Media assets (images, banners)
   - Contact channels  

This structure avoids price sensitivity while still supporting attractive promotional content.