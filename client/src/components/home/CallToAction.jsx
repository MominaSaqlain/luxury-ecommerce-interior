import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="py-32 lg:py-40 bg-gradient-gold text-white relative overflow-hidden">
      {/* Decorative Overlays */}
      <div className="absolute inset-0 bg-charcoal/10 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-sm">
            Ready To Transform Your Space?
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light mb-12 max-w-2xl mx-auto">
            Book a free consultation with our expert designers and begin the journey to your dream home.
          </p>
          
          <Link 
            to="/contact"
            className="inline-flex h-[64px] px-12 items-center justify-center bg-charcoal hover:bg-charcoal-light text-white font-semibold tracking-widest uppercase text-sm transition-all duration-300 shadow-luxury hover:-translate-y-1"
          >
            Get Started Today
          </Link>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm uppercase tracking-widest font-semibold text-white/80">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +92 XXX XXXXXXX
            </div>
            <div className="hidden md:block w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@muqasinterior.com
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CallToAction;
