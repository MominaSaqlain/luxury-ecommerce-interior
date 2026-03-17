import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../../store/cartStore";

function Cart() {
  const { items, removeItem, updateQuantity } = useCartStore();

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 500000 ? 0 : 15000;
  const total = subtotal + shipping;

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h1 className="font-serif text-4xl lg:text-5xl text-charcoal mb-12">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-20 border-t border-b border-stone">
             <h2 className="font-serif text-2xl text-charcoal mb-4">Your cart is currently empty.</h2>
             <p className="text-charcoal-light font-light mb-8">Discover our curated collection of luxury furnishings.</p>
             <Link to="/shop" className="inline-block bg-charcoal text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-gold transition-colors">
               Return To Shop
             </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Cart Items */}
            <div className="w-full lg:w-2/3">
              <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-stone text-xs uppercase tracking-widest font-semibold text-charcoal-light mb-8">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-3 text-right">Total</div>
                <div className="col-span-1"></div>
              </div>

              <div className="space-y-8">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-stone pb-8"
                    >
                      {/* Product Image & Name */}
                      <div className="col-span-1 md:col-span-6 flex gap-6 items-center">
                        <Link to={`/products/${item.id}`} className="w-24 h-24 sm:w-32 sm:h-32 bg-cream shrink-0 block">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </Link>
                        <div>
                           <h3 className="font-serif text-xl sm:text-2xl text-charcoal mb-2 hover:text-gold transition-colors">
                             <Link to={`/products/${item.id}`}>{item.name}</Link>
                           </h3>
                           <p className="text-gold font-medium mb-2 md:hidden">PKR {item.price.toLocaleString()}</p>
                           {/* Add options here if any, like color/size */}
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="col-span-1 md:col-span-2 flex justify-start md:justify-center">
                        <div className="border border-stone flex items-center w-28 h-10">
                          <button 
                            className="px-3 hover:text-gold transition-colors"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >−</button>
                          <input 
                            type="number" 
                            value={item.quantity} 
                            onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-full text-center focus:outline-none text-charcoal font-medium bg-transparent text-sm"
                          />
                          <button 
                            className="px-3 hover:text-gold transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >+</button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="hidden md:block col-span-3 text-right font-medium text-charcoal">
                        PKR {(item.price * item.quantity).toLocaleString()}
                      </div>

                      {/* Remove */}
                      <div className="absolute top-4 right-0 md:relative md:top-auto md:col-span-1 flex justify-end">
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-stone-dark hover:text-charcoal transition-colors p-2"
                          aria-label="Remove item"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-cream p-8 md:p-10 sticky top-32">
                 <h2 className="font-serif text-2xl text-charcoal mb-8">Order Summary</h2>
                 
                 <div className="space-y-4 text-charcoal mb-8 border-b border-stone pb-8">
                   <div className="flex justify-between items-center text-sm font-light">
                     <span>Subtotal</span>
                     <span>PKR {subtotal.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between items-center text-sm font-light">
                     <span>Shipping <span className="text-stone-dark block text-xs mt-1">(Free over 500k)</span></span>
                     <span>{shipping === 0 ? "Free" : `PKR ${shipping.toLocaleString()}`}</span>
                   </div>
                 </div>

                 <div className="flex justify-between items-center mb-10">
                   <span className="font-serif text-xl">Total</span>
                   <span className="font-medium text-gold text-2xl">PKR {total.toLocaleString()}</span>
                 </div>

                 <Link 
                   to="/checkout"
                   className="w-full block text-center bg-charcoal text-white py-4 uppercase tracking-widest text-sm font-semibold hover:bg-gold transition-colors shadow-luxury-sm hover:shadow-luxury hover:-translate-y-1 block duration-300"
                 >
                   Proceed to Checkout
                 </Link>

                 <div className="mt-6 text-center text-xs text-charcoal-light font-light flex items-center justify-center gap-2">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                   </svg>
                   Secure Checkout Process
                 </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;