import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../../store/cartStore";

function Checkout() {
  const { items, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Review

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 500000 ? 0 : 15000;
  const total = subtotal + shipping;

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      // Final submit
      clearCart();
      navigate('/success');
    }
  };

  if (items.length === 0 && step !== 3) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Checkout Header / Progress */}
        <div className="border-b border-stone pb-8 mb-12">
          <h1 className="font-serif text-3xl lg:text-4xl text-charcoal mb-8 text-center">Secure Checkout</h1>
          <div className="flex justify-center items-center max-w-2xl mx-auto">
            <StepIndicator current={step} target={1} label="Shipping" />
            <div className={`flex-1 h-px mx-4 ${step > 1 ? 'bg-gold' : 'bg-stone'}`}></div>
            <StepIndicator current={step} target={2} label="Payment" />
            <div className={`flex-1 h-px mx-4 ${step > 2 ? 'bg-gold' : 'bg-stone'}`}></div>
            <StepIndicator current={step} target={3} label="Review" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Main Checkout Form Area */}
          <div className="w-full lg:w-3/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <form id="checkout-form" onSubmit={handleNextStep}>
                  
                  {/* STEP 1: SHIPPING */}
                  {step === 1 && (
                    <div className="space-y-8">
                      <h2 className="font-serif text-2xl text-charcoal border-b border-stone pb-4 mb-6">Shipping Address</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs uppercase tracking-widest font-semibold text-charcoal mb-2">First Name *</label>
                          <input type="text" className="w-full bg-cream border border-stone px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm text-charcoal" required />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-widest font-semibold text-charcoal mb-2">Last Name *</label>
                          <input type="text" className="w-full bg-cream border border-stone px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm text-charcoal" required />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest font-semibold text-charcoal mb-2">Address *</label>
                        <input type="text" className="w-full bg-cream border border-stone px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm text-charcoal" required />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs uppercase tracking-widest font-semibold text-charcoal mb-2">City *</label>
                          <input type="text" className="w-full bg-cream border border-stone px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm text-charcoal" required />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-widest font-semibold text-charcoal mb-2">Postal Code *</label>
                          <input type="text" className="w-full bg-cream border border-stone px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm text-charcoal" required />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest font-semibold text-charcoal mb-2">Phone Number *</label>
                        <input type="tel" className="w-full bg-cream border border-stone px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm text-charcoal" required />
                      </div>
                    </div>
                  )}

                  {/* STEP 2: PAYMENT */}
                  {step === 2 && (
                    <div className="space-y-8">
                      <h2 className="font-serif text-2xl text-charcoal border-b border-stone pb-4 mb-6">Payment Method</h2>
                      <div className="border border-stone bg-cream p-6">
                        <label className="flex items-center gap-4 cursor-pointer mb-6">
                           <input type="radio" name="payment" className="w-4 h-4 text-gold focus:ring-gold" defaultChecked />
                           <span className="font-semibold text-charcoal">Credit / Debit Card</span>
                        </label>
                        
                        <div className="space-y-6">
                          <div>
                            <label className="block text-xs uppercase tracking-widest font-semibold text-charcoal mb-2">Card Number *</label>
                            <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-white border border-stone px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm text-charcoal" required />
                          </div>
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <label className="block text-xs uppercase tracking-widest font-semibold text-charcoal mb-2">Expiry Date *</label>
                              <input type="text" placeholder="MM/YY" className="w-full bg-white border border-stone px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm text-charcoal" required />
                            </div>
                            <div>
                              <label className="block text-xs uppercase tracking-widest font-semibold text-charcoal mb-2">CVC *</label>
                              <input type="text" placeholder="XXX" className="w-full bg-white border border-stone px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm text-charcoal" required />
                            </div>
                          </div>
                          <div>
                             <label className="block text-xs uppercase tracking-widest font-semibold text-charcoal mb-2">Name on Card *</label>
                             <input type="text" className="w-full bg-white border border-stone px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm text-charcoal" required />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: REVIEW */}
                  {step === 3 && (
                    <div className="space-y-8">
                       <h2 className="font-serif text-2xl text-charcoal border-b border-stone pb-4 mb-6">Review Your Order</h2>
                       <p className="text-charcoal-light font-light text-lg mb-8">Please review your items and shipping details before placing the final order.</p>
                       <div className="bg-cream border border-stone p-6">
                          <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-charcoal mb-4">Shipping To</h4>
                          <p className="text-charcoal-light font-light text-sm">
                            Eleanor Vance<br/>
                            123 Luxury Avenue<br/>
                            Design District, NY 10001<br/>
                            +1 (555) 123-4567
                          </p>
                       </div>
                    </div>
                  )}

                  <div className="mt-12 flex justify-between items-center border-t border-stone pt-8">
                    {step > 1 ? (
                      <button 
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="text-sm uppercase tracking-widest font-semibold text-charcoal hover:text-gold transition-colors"
                      >
                        Back
                      </button>
                    ) : (
                      <Link to="/cart" className="text-sm uppercase tracking-widest font-semibold text-charcoal hover:text-gold transition-colors">
                        Return to Cart
                      </Link>
                    )}
                    
                    <button 
                      type="submit" 
                      form="checkout-form"
                      className="bg-charcoal text-white px-10 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-gold hover:-translate-y-1 transition-all duration-300 shadow-luxury"
                    >
                      {step === 3 ? "Place Order" : "Continue"}
                    </button>
                  </div>
                </form>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Order Summary Sidebar */}
          <div className="w-full lg:w-2/5">
            <div className="bg-cream p-8 sticky top-32">
              <h3 className="font-serif text-2xl text-charcoal mb-6 border-b border-stone pb-4">Order Summary</h3>
              
              <div className="space-y-4 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="w-16 h-16 bg-white shrink-0 relative">
                       <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                       <div className="absolute -top-2 -right-2 w-5 h-5 bg-charcoal text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                         {item.quantity}
                       </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-charcoal">{item.name}</h4>
                      <p className="text-xs text-charcoal-light font-light">PKR {item.price.toLocaleString()}</p>
                    </div>
                    <div className="text-sm font-medium text-charcoal">
                      PKR {(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm text-charcoal mb-6 border-t border-stone pt-6">
                <div className="flex justify-between font-light">
                  <span>Subtotal</span>
                  <span>PKR {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-light">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `PKR ${shipping.toLocaleString()}`}</span>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-stone pt-6 mb-2">
                <span className="font-serif text-xl">Total</span>
                <span className="font-medium text-gold text-2xl">PKR {total.toLocaleString()}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function StepIndicator({ current, target, label }) {
  const isCompleted = current > target;
  const isActive = current === target;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-500 ${
        isActive ? 'bg-charcoal text-white' : 
        isCompleted ? 'bg-gold text-white' : 'bg-cream border border-stone text-stone-dark'
      }`}>
        {isCompleted ? (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <span className="text-sm font-bold">{target}</span>
        )}
      </div>
      <span className={`text-[10px] uppercase tracking-widest font-semibold ${isActive ? 'text-charcoal' : 'text-charcoal-light'}`}>
        {label}
      </span>
    </div>
  );
}

export default Checkout;