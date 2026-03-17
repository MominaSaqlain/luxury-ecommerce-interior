import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../../components/common/PageHeader";
import { useWishlistStore } from "../../store/wishlistStore";
import { useCartStore } from "../../store/cartStore";
// Furniture
import sofa from "../../assets/products/furniture/sofa.jpg";
import chair from "../../assets/products/furniture/chair.jpg";
import table from "../../assets/products/furniture/table.jpg";
import bed from "../../assets/products/furniture/bed.jpg";

// Lighting
import floorlamp from "../../assets/products/lighting/floorlamp.jpg";
import pendantlight from "../../assets/products/lighting/pendantlight.jpg";
import tablelamp from "../../assets/products/lighting/tablelamp.jpg";

// Decor
import vase from "../../assets/products/decor/vase.jpg";
import decorobject from "../../assets/products/decor/decorobject.jpg";
import tray from "../../assets/products/decor/tray.jpg";

// Rugs
import rug1 from "../../assets/products/rugs/rug1.jpg";
import rug2 from "../../assets/products/rugs/rug2.jpg";
import rug3 from "../../assets/products/rugs/rug3.jpg";
import rug4 from "../../assets/products/rugs/rug4.jpg";

// Art
import abstractart from "../../assets/products/art/abstractart.jpg";
import modernart from "../../assets/products/art/modernart.jpg";
import wallart from "../../assets/products/art/wallart.jpg";

const categories = ["All", "Furniture", "Lighting", "Decor", "Rugs", "Art"];

const mockProducts = [
  // Furniture
  { id: 1, name: "Luxury Sofa", category: "Furniture", price: 180000, image: sofa },
  { id: 2, name: "Modern Chair", category: "Furniture", price: 45000, image: chair },
  { id: 3, name: "Wood Dining Table", category: "Furniture", price: 120000, image: table },
  { id: 4, name: "King Size Bed", category: "Furniture", price: 220000, image: bed },

  // Lighting
  { id: 5, name: "Floor Lamp", category: "Lighting", price: 18000, image: floorlamp },
  { id: 6, name: "Pendant Light", category: "Lighting", price: 22000, image: pendantlight },
  { id: 7, name: "Table Lamp", category: "Lighting", price: 12000, image: tablelamp },

  // Decor
  { id: 8, name: "Ceramic Vase", category: "Decor", price: 8000, image: vase },
  { id: 9, name: "Decor Object", category: "Decor", price: 9500, image: decorobject },
  { id: 10, name: "Tray Set", category: "Decor", price: 7000, image: tray },

  // Rugs
  { id: 11, name: "Modern Rug", category: "Rugs", price: 35000, image: rug1 },
  { id: 12, name: "Persian Rug", category: "Rugs", price: 55000, image: rug2 },
  { id: 13, name: "Boho Rug", category: "Rugs", price: 30000, image: rug3 },
  { id: 14, name: "Neutral Rug", category: "Rugs", price: 28000, image: rug4 },

  // Art
  { id: 15, name: "Abstract Art", category: "Art", price: 20000, image: abstractart },
  { id: 16, name: "Modern Wall Art", category: "Art", price: 18000, image: modernart },
  { id: 17, name: "Framed Wall Art", category: "Art", price: 22000, image: wallart },
];

function HeartIcon({ filled }) {
  return (
    <svg
      className={`w-5 h-5 transition-all duration-200 ${filled ? "fill-red-500 stroke-red-500" : "fill-none stroke-current"}`}
      viewBox="0 0 24 24"
      strokeWidth={1.8}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function ProductCard({ product }) {
  const toggle = useWishlistStore((s) => s.toggle);
  const isWishlisted = useWishlistStore((s) => s.isWishlisted(product.id));

  return (
    <motion.div
      layout
      key={product.id}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2 border border-stone/40 hover:border-gold/30"
    >
      {/* Wishlist button */}
      <button
        onClick={() => toggle(product.id)}
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        className={`absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
          isWishlisted
            ? "bg-white text-red-500 scale-110"
            : "bg-white/80 text-charcoal/50 hover:text-red-400 hover:bg-white hover:scale-110"
        }`}
      >
        <HeartIcon filled={isWishlisted} />
      </button>

      {/* Image */}
      <div className="relative h-72 overflow-hidden bg-stone/20">
        <Link to={`/products/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
          <div className="w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Link
              to={`/products/${product.id}`}
              className="block w-full text-center py-2.5 bg-white/90 hover:bg-white text-charcoal text-sm font-medium tracking-wide rounded-xl transition-colors duration-200"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="text-[10px] uppercase tracking-widest text-gold font-medium mb-1">{product.category}</p>
        <h3 className="font-serif text-base font-semibold text-charcoal mb-2 leading-snug">{product.name}</h3>
        <p className="text-sm font-medium text-charcoal/80">PKR {product.price.toLocaleString()}</p>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("featured");
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
  fetch("http://localhost:5000/api/products")
    .then((res) => res.json())
    .then((data) => {
      console.log("BACKEND:", data);
      setProductsData(data);
    })
    .catch((err) => console.log(err));
}, []);
const dataSource = productsData.length > 0 ? productsData : mockProducts;
 const filtered = dataSource
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .sort((a, b) => {
      if (sortOrder === "price-low") return a.price - b.price;
      if (sortOrder === "price-high") return b.price - b.price;
      return 0;
    });

  const catBtnClass = (cat) =>
    `text-xs uppercase tracking-widest w-full text-left py-2.5 px-4 rounded-lg transition-all duration-200 border ${
      activeCategory === cat
        ? "bg-gold/10 text-gold border-gold/30 font-semibold ring-1 ring-gold/20"
        : "text-charcoal/60 hover:text-gold hover:bg-gold/5 border-stone/20 hover:border-gold/30"
    }`;

  const sortBtnClass = (order) =>
    `text-xs w-full text-left py-2.5 px-4 rounded-lg transition-all duration-200 border ${
      sortOrder === order
        ? "bg-gold/10 text-gold border-gold/30 font-semibold ring-1 ring-gold/20"
        : "text-charcoal/60 hover:text-gold hover:bg-gold/5 border-stone/20 hover:border-gold/30"
    }`;

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        title="The Collection"
        subtitle="Curated furnishings & bespoke objects for refined living"
        bgImage={sofa}
      />

      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-24 lg:mt-32 py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* Sidebar */}
          <aside className="w-full lg:w-56 shrink-0">
            <div className="sticky top-28 space-y-8">
              <div>
                <h3 className="font-serif text-lg mb-4 pb-3 border-b border-stone text-charcoal">
                  Categories
                </h3>
                <ul className="space-y-1">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button onClick={() => setActiveCategory(cat)} className={catBtnClass(cat)}>
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-lg mb-4 pb-3 border-b border-stone text-charcoal">
                  Sort By
                </h3>
                <div className="space-y-1">
                  <button onClick={() => setSortOrder("featured")} className={sortBtnClass("featured")}>Featured</button>
                  <button onClick={() => setSortOrder("price-low")} className={sortBtnClass("price-low")}>Price: Low to High</button>
                  <button onClick={() => setSortOrder("price-high")} className={sortBtnClass("price-high")}>Price: High to Low</button>
                </div>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="font-serif text-xl text-charcoal">
                <span className="text-gold font-bold">{filtered.length}</span>{" "}
                {activeCategory === "All" ? "pieces" : activeCategory.toLowerCase() + " pieces"}
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-serif text-2xl text-charcoal/40">No products found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10">
                <AnimatePresence mode="popLayout">
                  {filtered.map((product) => (
  <ProductCard key={product._id || product.id} product={product} />
))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
