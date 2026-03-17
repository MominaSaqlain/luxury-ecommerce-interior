import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero/hero2.jpeg";

function BrandStory() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle Texture/Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cream -skew-x-12 translate-x-1/2 opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] relative">
              <img 
                src={heroImage} 
                alt="Luxury Interior Design" 
                className="w-full h-full object-cover shadow-luxury-lg z-10 relative"
              />
              {/* Elegant Frame Effect */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-beige z-0"></div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="mb-2">
              <span className="text-gold uppercase tracking-[0.2em] font-semibold text-xs">The Philosophy</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-8 leading-tight">
              About MUQA'S INTERIOR
            </h2>
            
            <div className="space-y-6 text-charcoal/80 font-light leading-relaxed mb-10">
              <p>
                At Muqa's Interior, we believe that your home should be a reflection of your highest aspirations. We go beyond mere decoration to craft environments that inspire, comfort, and elevate your daily experience.
              </p>
              <p>
                Founded on the principles of timeless elegance and immaculate craftsmanship, our studio brings together the finest materials, bespoke furnishings, and visionary design talent to deliver spaces of uncompromising quality.
              </p>
              <p>
                From sweeping architectural gestures to the minutest bespoke details, our approach is holistically attentive. We curate each element with a discerning eye, ensuring a harmonious balance that feels exclusively yours.
              </p>
            </div>

            <div className="flex items-center gap-6 mb-12 py-6 border-y border-stone">
              <div className="text-center">
                <span className="block font-serif text-2xl text-charcoal mb-1">10+</span>
                <span className="text-xs uppercase tracking-wider text-charcoal-light">Years Expr</span>
              </div>
              <div className="w-px h-10 bg-stone"></div>
              <div className="text-center">
                <span className="block font-serif text-2xl text-charcoal mb-1">500+</span>
                <span className="text-xs uppercase tracking-wider text-charcoal-light">Happy Clients</span>
              </div>
              <div className="w-px h-10 bg-stone"></div>
              <div className="text-center">
                <span className="block font-serif text-2xl text-charcoal mb-1">25+</span>
                <span className="text-xs uppercase tracking-wider text-charcoal-light">Awards</span>
              </div>
            </div>

            <div>
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 group text-charcoal font-semibold uppercase tracking-widest text-sm hover:text-gold transition-colors"
              >
                Learn More About Us
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BrandStory;
