import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useCartStore } from "../../store/cartStore"
import { formatPKR } from "../../utils/formatPrice"

function CartSummary({ onCheckout, loading }) {
  const items = useCartStore((s) => s.items)
  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)

  return (
    <div className="bg-cream-dark border border-sand/40 p-6 sticky top-28">
      <h2 className="font-serif text-xl text-charcoal mb-6">Order Summary</h2>

      <div className="space-y-3 text-sm">
        {items.map((i) => (
          <div key={i.product._id} className="flex justify-between text-stone">
            <span className="truncate pr-4">{i.product.name} <span className="text-xs">×{i.quantity}</span></span>
            <span className="flex-shrink-0 font-medium text-charcoal">{formatPKR(i.product.price * i.quantity)}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-sand/40 mt-5 pt-5 flex justify-between items-baseline">
        <span className="text-[10px] tracking-widest uppercase text-stone">Total</span>
        <span className="font-serif text-2xl text-charcoal">{formatPKR(total)}</span>
      </div>

      <p className="text-xs text-stone mt-3 mb-6">Shipping & taxes calculated at checkout.</p>

      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={onCheckout}
        disabled={items.length === 0 || loading}
        className="w-full bg-charcoal text-cream py-4 text-sm tracking-widest uppercase font-medium hover:bg-charcoal/80 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Redirecting…" : "Proceed to Checkout"}
      </motion.button>

      <Link to="/products" className="block text-center text-xs text-stone hover:text-charcoal tracking-widest uppercase mt-4 transition-colors">
        ← Continue Shopping
      </Link>
    </div>
  )
}

export default CartSummary
