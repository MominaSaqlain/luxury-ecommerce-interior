import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      quote: "The transformation of our home is beyond words. Every detail reflects luxury and sophistication. MUQA'S INTERIORS team exceeded all expectations.",
      author: "Sarah Ahmed",
      role: "Private Residence, Lahore"
    },
    {
      quote: "Professional excellence from concept to completion. Their design vision brought our modern loft to life with stunning elegance.",
      author: "Ali Khan", 
      role: "Contemporary Loft Project"
    },
    {
      quote: "Flawless execution and impeccable taste. Our living spaces now feel like 5-star hotel suites. Highly recommended.",
      author: "Hassan Raza",
      role: "Luxury Villa Renovation"
    }
  ];

  return (
    <section className="py-32 lg:py-40 bg-gradient-to-b from-gray-50 to-cream/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 lg:mb-32"
        >
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light text-charcoal mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-charcoal/60 max-w-xl mx-auto">
            Trusted by discerning clients seeking luxury interiors
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
              }
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white/70 backdrop-blur-md p-10 lg:p-12 rounded-3xl border border-white/40 hover:border-gold/30 shadow-xl hover:shadow-2xl hover:shadow-glow-white transition-all duration-500 hover:bg-white"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-gold to-beige rounded-3xl flex items-center justify-center text-2xl text-white shadow-2xl">
                &ldquo;
              </div>
              
              <div className="relative z-10 text-center pt-4">
                <p className="text-charcoal/80 italic leading-relaxed text-lg lg:text-xl mb-8 font-light max-w-md mx-auto -tracking-wide">
                  "{testimonial.quote}"
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-serif text-xl lg:text-2xl font-light text-charcoal group-hover:text-gold transition-colors">
                    {testimonial.author}
                  </h4>
                  <p className="text-charcoal/60 uppercase tracking-wider text-xs font-light">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent -translate-x-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-700" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Testimonials;
