import { motion } from "framer-motion"

const brands = [
  "West Elm", "Pottery Barn", "Crate & Barrel", "CB2", "Article", "Joybird", "Rejuvenation", "Lulu & Georgia"
]

function PartnerBrands() {
  return (
    <section className="py-16 bg-white border-t border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-charcoal-light mb-8">
          Shop Top Furniture Brands In One Place
        </p>
        
        {/* Infinite Scroll Marquee Effect (simplified with flex wrap for now) */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="font-serif text-2xl font-medium tracking-tight text-charcoal"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerBrands
