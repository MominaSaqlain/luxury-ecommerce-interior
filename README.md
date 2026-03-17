# 🛋️ Muqa's Interior - Luxury Furniture E-commerce

Complete full-stack store built with **React + Tailwind + Framer Motion** (frontend) & **Node/Express + MongoDB + Stripe + Cloudinary** (backend).

Premium UI inspired by Apple/high-end brands. Hero, categories, product grids, cart, Stripe checkout.

## 🚀 Quick Start

1. **Setup Environment**
```bash
cp .env.example .env
# Edit .env: MongoDB URI (Atlas free), Stripe test keys, Cloudinary
```

2. **Install Dependencies**
```bash
cd client && npm install
cd ../server && npm install
cd ..
```

3. **Seed Database (15 Premium Products)**
```bash
cd server
npm run seed
# Output: ✅ Seeded 15 products
```

4. **Run Development Servers**
```bash
# Terminal 1 (Frontend)
cd client
npm run dev
# http://localhost:5173

# Terminal 2 (Backend)  
cd server
npm run dev
# http://localhost:5000
```

**Or install concurrently globally** → Update client/package.json → `npm run dev` (both servers).

## 🧪 Test Full Flow
1. Browse [localhost:5173](http://localhost:5173) → Hero/Featured/Categories
2. Products grid → Add to cart (Zustand persists)
3. Cart page → Checkout form
4. **Stripe Test Card**: `4242 4242 4242 4242` (any future expiry/CVC)
5. Success page (order saved to MongoDB)

## 📱 Features
- **Responsive**: Mobile→Desktop (Tailwind)
- **Animations**: Framer Motion (hovers, staggers, taps)
- **State**: Zustand cart (localStorage)
- **Payments**: Stripe Checkout (test mode, webhooks)
- **Images**: Cloudinary/Unsplash placeholders
- **15 Luxury Products**: Realistic PKR pricing/dims/stock/Markdown

## 📁 Structure
```
muqqa-interiors-store/
├── client/          # React/Vite/Tailwind/Framer/Zustand
│   ├── src/
│   │   ├── components/ (layout/product/common/cart)
│   │   ├── pages/    (Home/Products/Detail/Cart/Checkout)
│   │   └── store/    (cartStore.js)
├── server/          # Express/Mongoose/Stripe/Cloudinary
│   ├── models/      (Product/Order/Cart)
│   ├── controllers/ (product/order/cart/stripe)
│   ├── routes/
│   └── seed.js      (15 products)
└── .env.example
```

## 🔧 Tech Stack (Exact Match)
**Frontend**: React 19 + Vite + Tailwind 3 + Framer Motion 12 + Zustand 5  
**Backend**: Node/Express + MongoDB/Mongoose + Stripe 17 + Cloudinary  
**Fonts**: Playfair Display (headings), Inter (body)

## ⚠️ Production Notes
- Add auth (JWT/NextAuth) for orders
- Image upload: POST /api/products (multer-cloudinary)
- Deploy: Vercel (client), Render Railway (server+Mongo)

**Enjoy building beautiful interiors! 🏠✨**

