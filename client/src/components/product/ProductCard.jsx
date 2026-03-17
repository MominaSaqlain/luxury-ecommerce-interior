import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useCartStore } from "../../store/cartStore"
import { useState } from "react"
import { formatPKR } from "../../utils/formatPrice"

function ProductCard({ product }) {
  const addItem = useCartStore((s) => s.addItem)
  const image = product.images?.[0]
  const [isInWishlist, setIsInWishlist] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ 
        y: -12,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
className="group bg-white/85 rounded-3xl overflow-hidden shadow-2xl hover:shadow-glow hover:shadow-2xl hover:shadow-xl transition-all duration-700 flex flex-col border border-beige/30 hover:border-gold/40 ring-1 ring-transparent hover:ring-gold/20 hover:scale-[1.02] hover:-translate-y-3"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-beige/20 to-gold/5">
        <Link to={`/products/${product._id}`} className="block h-full w-full">
          {image ? (
            <img
              src={image}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-beige/20">
              <span className="text-forestGreen/40 text-sm">Preview</span>
            </div>
          )}
        </Link>

        {/* Category badge */}
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
className="absolute top-4 left-4 bg-white/95 text-forestGreen text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 font-medium rounded-full shadow-lg ring-1 ring-gold/30"
        >
          {product.category}
        </motion.span>

{product.stock === 0 && (
          <motion.span 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute top-4 right-4 bg-gradient-to-r from-forestGreen to-forestGreen/70 text-white text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full font-medium shadow-lg ring-1 ring-forestGreen/50"
          >
            Sold Out
          </motion.span>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsInWishlist(!isInWishlist);
          }}
          className="absolute top-4 right-4 p-2 bg-white/95 hover:bg-white rounded-full shadow-lg ring-1 ring-stone/50 hover:ring-gold/40 transition-all duration-200 hover:scale-110 z-10"
          title="Add to Wishlist"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={isInWishlist ? "#D4A017" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-charcoal hover:text-gold transition-colors"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 lg:p-7">
        <Link to={`/products/${product._id}`} className="hover:opacity-80 transition-opacity mb-3 block">
          <h3 className="font-serif text-xl lg:text-2xl leading-tight text-forestGreen group-hover:text-gold/90 mb-1.5">
            {product.name}
          </h3>
        </Link>

        {product.material && (
          <p className="text-forestGreen/70 text-xs lg:text-sm tracking-wide uppercase mb-5 font-light">
            {product.material}
          </p>
        )}

        <div className="flex items-end justify-between mt-auto">
          <div>
            <span className="text-[11px] text-forestGreen/60 tracking-[0.2em] uppercase block mb-1 font-light">Starting From</span>
            <span className="font-serif text-2xl lg:text-3xl text-forestGreen font-medium tracking-tight">
              {formatPKR(product.price)}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              addItem(product)
            }}
            disabled={product.stock === 0}
            className="ml-auto group/add flex items-center gap-2.5 px-5 py-3 bg-gradient-to-r from-gold/90 to-beige text-forestGreen text-xs tracking-[0.25em] uppercase font-semibold rounded-2xl shadow-xl hover:shadow-glow hover:shadow-2xl hover:-translate-y-px transition-all duration-400 hover:from-gold hover:to-gold/90 ring-2 ring-gold/20 hover:ring-gold/40 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none disabled:from-gold/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover/add:translate-x-px transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span>Add</span>
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}

export default ProductCard

