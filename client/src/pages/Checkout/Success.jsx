import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Success() {
  return (
    <div className="bg-cream min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-12 lg:p-16 max-w-2xl w-full text-center border border-stone shadow-luxury"
      >
        <div className="w-20 h-20 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto mb-8 relative">
          <svg className="w-10 h-10 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {/* Subtle pulse effect */}
          <div className="absolute inset-0 rounded-full border border-gold animate-ping opacity-20"></div>
        </div>

        <span className="text-gold uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">Order Confirmed</span>
        <h1 className="font-serif text-3xl lg:text-4xl text-charcoal mb-6">Thank You For Your Purchase</h1>
        
        <p className="text-charcoal-light font-light leading-relaxed mb-10">
          Your order <strong className="font-medium text-charcoal">#MQ-{Math.floor(1000 + Math.random() * 9000)}-{new Date().getFullYear()}</strong> has been successfully placed. We have sent a confirmation email to you with the tracking details and estimated delivery time. 
        </p>

        <div className="bg-cream p-6 border border-stone mb-10 text-left">
          <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-charcoal mb-4">What happens next?</h4>
          <ul className="space-y-4 text-sm font-light text-charcoal-light">
            <li className="flex gap-3 items-start">
              <span className="text-gold">1.</span>
              <span>Our team verifies your order and prepares items for white-glove dispatch.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-gold">2.</span>
              <span>You will receive an SMS and email notification once your items are out for delivery.</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-gold">3.</span>
              <span>Our delivery partners will contact you to schedule a convenient installation time.</span>
            </li>
          </ul>
        </div>

        <Link 
          to="/"
          className="inline-block bg-charcoal text-white px-10 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-gold transition-colors duration-300 shadow-luxury-sm hover:-translate-y-1 block"
        >
          Return to Homepage
        </Link>
      </motion.div>
    </div>
  );
}

export default Success;