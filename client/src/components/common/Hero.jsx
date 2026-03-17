import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      
      {/* Background Image - Luxury Interior */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury living room interior" 
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle overlay for text readability, but keeping it light and airy like Havenly */}
        <div className="absolute inset-0 bg-white/20 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/70 sm:via-white/50 sm:to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl md:max-w-2xl text-left bg-white/80 sm:bg-transparent p-8 sm:p-0 backdrop-blur-md sm:backdrop-blur-none rounded-lg"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-charcoal border border-charcoal/20 bg-white/50 px-3 py-1 mr-4 rounded-full">
              Leading Design Service
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal leading-[1.1] mb-6"
          >
            Transform Your Space Into Your Dream Home
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-charcoal-light font-light max-w-lg mb-10 leading-relaxed"
          >
            Work directly with expert interior designers to create a home that reflects your unique style and budget.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/style-quiz" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 bg-charcoal text-white text-sm font-medium tracking-wide hover:bg-charcoal-light transition-colors shadow-lg shadow-charcoal/20">
                Take Style Quiz
              </button>
            </Link>
            
            <Link to="/designers" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 bg-white text-charcoal border border-primary-300 text-sm font-medium tracking-wide hover:bg-primary-50 hover:border-charcoal transition-colors">
                Meet Designers
              </button>
            </Link>
          </motion.div>
          
          {/* Trust indicator */}
          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-2 text-sm text-charcoal-light">
            <div className="flex text-accent-gold">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-medium text-charcoal">4.9/5</span> from 10,000+ happy clients
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero

