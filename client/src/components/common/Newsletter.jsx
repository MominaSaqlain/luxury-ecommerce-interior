import { motion } from "framer-motion"

function Newsletter() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-r from-forestGreen to-forestGreen/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
      
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/20 backdrop-blur-2xl rounded-3xl border border-gold/30 shadow-2xl p-12 lg:p-16 lg:rounded-[3rem] shadow-glow/50"
        >
          <div className="text-white mb-8">
            <span className="inline-block bg-gold/30 text-gold text-sm lg:text-base tracking-[0.3em] uppercase px-4 py-2 rounded-full mb-6 font-light">
              Exclusive Access
            </span>
            <h2 className="font-serif text-4xl lg:text-6xl xl:text-7xl font-light leading-tight mb-6">
              Join Our Newsletter
            </h2>
            <p className="text-2xl lg:text-3xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              New arrivals, design inspiration, and exclusive offers delivered to your inbox
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/30 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-5 lg:py-6 text-lg text-white placeholder-white/60 focus:ring-4 focus:ring-gold/30 focus:border-gold/50 outline-none transition-all duration-500 hover:shadow-inner-lg"
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gold/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.27 7.27c.883.883 2.335.883 3.218 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-gold via-beige to-gold text-forestGreen px-8 py-5 lg:py-6 rounded-2xl font-serif text-xl lg:text-2xl font-semibold uppercase tracking-wide shadow-2xl hover:shadow-glow-lg hover:shadow-2xl transition-all duration-500 ring-2 ring-gold/30 hover:ring-gold/50 font-medium"
            >
              Subscribe Now
            </motion.button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, delay: 0.3 }}
            className="mt-8 text-white/70 text-sm lg:text-base tracking-wide"
          >
            No spam. Unsubscribe anytime. See our{' '}
            <a href="#" className="underline hover:text-gold transition-colors">privacy policy</a>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter

