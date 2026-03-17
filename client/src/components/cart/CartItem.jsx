import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useCartStore } from "../../store/cartStore"
import { formatPKR } from "../../utils/formatPrice"

function CartItem({ item }) {
  const { product, quantity } = item
  const { updateQty, removeItem } = useCartStore()
  const image = product.images?.[0]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 16, height: 0 }}
      transition={{ duration: 0.35 }}
      className="flex gap-5 py-6 border-b border-sand/40"
    >
      {/* Image */}
      <Link to={`/products/${product._id}`} className="block flex-shrink-0 w-24 h-24 md:w-28 md:h-28 overflow-hidden bg-sand/20">
        {image ? (
          <img src={image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full bg-sand/30" />
        )}
      </Link>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-4">
          <div>
            <span className="text-[10px] text-stone tracking-widest uppercase">{product.category}</span>
            <Link to={`/products/${product._id}`}>
              <h3 className="font-serif text-lg text-charcoal leading-snug hover:opacity-70 transition-opacity">{product.name}</h3>
            </Link>
            {product.material && (
              <p className="text-stone text-xs mt-0.5">{product.material}</p>
            )}
          </div>

          <button
            onClick={() => removeItem(product._id)}
            className="text-stone hover:text-charcoal transition-colors flex-shrink-0 mt-1"
            aria-label="Remove item"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">
          {/* Qty control */}
          <div className="flex items-center border border-sand/60">
            <button
              onClick={() => updateQty(product._id, quantity - 1)}
              className="w-8 h-8 flex items-center justify-center text-stone hover:text-charcoal hover:bg-sand/20 transition-colors"
            >−</button>
            <span className="w-8 text-center text-sm text-charcoal">{quantity}</span>
            <button
              onClick={() => updateQty(product._id, quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-stone hover:text-charcoal hover:bg-sand/20 transition-colors"
            >+</button>
          </div>

          <span className="font-serif text-lg text-charcoal">{formatPKR(product.price * quantity)}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default CartItem
