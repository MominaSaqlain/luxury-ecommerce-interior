import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../../store/cartStore";

// Reusing assets for mock data
import sofa1 from "../../assets/gallery/sofa1.jpeg";
import decor1 from "../../assets/gallery/decor1.jpeg";
import wallart1 from "../../assets/gallery/wallart1.jpeg";
import hero2 from "../../assets/hero/hero2.jpeg";
import rend1 from "../../assets/renders/render1.jpeg";

const mockProduct = {
  id: "cloud-sofa",
  name: "The Cloud Sofa",
  price: 250000,
  description: "Experience unparalleled comfort with our signature Cloud Sofa. Designed with deep proportions and down-filled cushions that contour to your body, offering a sink-in lounging experience. The minimalist silhouette ensures it grounds any modern living space with understated elegance.",
  details: [
    "Kiln-dried hardwood frame",
    "High-resiliency foam core with feather blend wrap",
    "Performance linen blend fabric (stain resistant)",
    "Removable slipcovers for easy cleaning"
  ],
  dimensions: "W: 96\" x D: 42\" x H: 32\"",
  shipping: "In stock. White glove delivery within 2-3 weeks.",
  images: [sofa1, hero2, rend1],
  colors: [
    { name: "Oatmeal", class: "bg-[#e2dcd2]" },
    { name: "Charcoal", class: "bg-[#333333]" },
    { name: "Navy", class: "bg-[#1d2b45]" }
  ],
  related: [
    { id: 2, name: "Minimalist Ceramic Vase", price: 15000, image: decor1 },
    { id: 3, name: "Abstract Canvas Set", price: 45000, image: wallart1 }
  ]
};

function ProductDetail() {
  const { id } = useParams(); // In a real app, fetch based on id
  const addToCart = useCartStore((state) => state.addItem);
  
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("details");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: mockProduct.id,
      name: mockProduct.name,
      price: mockProduct.price,
      image: mockProduct.images[0],
      quantity: quantity
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Breadcrumbs */}
        <nav className="text-xs uppercase tracking-widest text-charcoal-light font-semibold mb-12">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{mockProduct.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Gallery */}
          <div className="w-full lg:w-3/5 flex gap-4 lg:gap-6">
            {/* Thumbnails */}
            <div className="hidden md:flex flex-col gap-4 w-24 shrink-0">
              {mockProduct.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-square overflow-hidden bg-cream transition-opacity ${
                    activeImage === idx ? 'ring-2 ring-gold opacity-100' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-cream relative aspect-square md:aspect-[4/3] overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  src={mockProduct.images[activeImage]} 
                  alt={mockProduct.name} 
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Mobile Thumbnails Overlay */}
              <div className="md:hidden absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {mockProduct.images.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-2 h-2 rounded-full transition-colors ${activeImage === idx ? 'bg-gold' : 'bg-white/50 border border-charcoal/20'}`}
                    onClick={() => setActiveImage(idx)}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="w-full lg:w-2/5 flex flex-col pt-4 lg:pt-10">
            <h1 className="font-serif text-4xl lg:text-5xl text-charcoal mb-4">
              {mockProduct.name}
            </h1>
            <p className="text-2xl text-gold font-medium mb-8">
              PKR {mockProduct.price.toLocaleString()}
            </p>
            
            <p className="text-charcoal-light font-light leading-relaxed mb-10">
              {mockProduct.description}
            </p>

            {/* Options */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-charcoal">
                  Fabric Color: <span className="font-light text-charcoal-light ml-2">{mockProduct.colors[selectedColor].name}</span>
                </h4>
              </div>
              <div className="flex gap-4">
                {mockProduct.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(idx)}
                    className={`w-10 h-10 rounded-full transition-all flex items-center justify-center ${
                      selectedColor === idx ? 'ring-2 ring-offset-2 ring-gold' : 'ring-1 ring-stone hover:ring-charcoal'
                    }`}
                    aria-label={`Select color ${color.name}`}
                  >
                    <span className={`w-8 h-8 rounded-full ${color.class} block border border-black/10`}></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-12">
              {/* Quantity */}
              <div className="border border-stone flex items-center w-32 shrink-0">
                <button 
                  className="px-4 py-3 text-charcoal-light hover:text-charcoal transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >−</button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full text-center focus:outline-none text-charcoal font-medium bg-transparent"
                />
                <button 
                  className="px-4 py-3 text-charcoal-light hover:text-charcoal transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >+</button>
              </div>

              {/* Add to Cart */}
              <button 
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center uppercase tracking-widest text-sm font-semibold transition-all duration-300 ${
                  isAdded 
                    ? 'bg-green-600 text-white' 
                    : 'bg-charcoal text-white hover:bg-gold hover:-translate-y-1 shadow-luxury'
                }`}
              >
                {isAdded ? 'Added To Cart' : 'Add To Cart'}
              </button>
            </div>

            {/* Accordion / Tabs for extra info */}
            <div className="border-t border-stone pt-8 space-y-6">
              <div className="flex gap-8 border-b border-stone pb-4">
                {['details', 'dimensions', 'shipping'].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-xs uppercase tracking-widest font-semibold pb-4 -mb-[17px] transition-colors ${
                      activeTab === tab ? 'text-gold border-b-2 border-gold' : 'text-charcoal-light hover:text-charcoal'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div className="min-h-[120px] text-sm text-charcoal-light font-light leading-relaxed">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeTab === 'details' && (
                      <ul className="list-disc pl-5 space-y-2">
                        {mockProduct.details.map((d, i) => <li key={i}>{d}</li>)}
                      </ul>
                    )}
                    {activeTab === 'dimensions' && (
                      <p>{mockProduct.dimensions}</p>
                    )}
                    {activeTab === 'shipping' && (
                      <p>{mockProduct.shipping}</p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Complete the Look Cross-Selling */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 mt-32">
        <div className="border-t border-stone pt-24 text-center mb-16">
          <span className="text-gold uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">Curated Pairings</span>
          <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">Complete The Look</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockProduct.related.map((item) => (
            <Link to={`/products/${item.id}`} key={item.id} className="group">
              <div className="aspect-square bg-cream overflow-hidden mb-6">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-lg text-charcoal mb-2 hover:text-gold transition-colors">{item.name}</h3>
                <p className="text-gold font-medium">PKR {item.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}

export default ProductDetail;