import { motion } from "framer-motion"
import ProductGrid from "../product/ProductGrid"
import { useProducts } from "../../hooks/useProducts"
import { Link } from "react-router-dom"

function BestSellers() {
  const { products: bestSellers, loading } = useProducts({
    limit: 8,
    sort: "-sold",
    featured: true
  })

  const container = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  return (
py-24 lg:py-32 bg-white/50
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 lg:mb-36"
        >
          <span className="inline-block bg-gold/20 text-gold text-lg tracking-[0.35em] uppercase px-4 py-2 rounded-full mb-8 font-light shadow-lg">
            Top Sellers
          </span>
          <h2 className="font-serif text-5xl lg:text-7xl xl:text-8xl font-light text-forestGreen leading-tight mb-6">
            Best Sellers
          </h2>
          <p className="text-2xl lg:text-3xl text-forestGreen/70 max-w-3xl mx-auto font-light">
            Our most loved pieces that have found their way into homes worldwide
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="-m-6 lg:-m-8"
        >
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-[4/3] bg-beige/30 animate-pulse rounded-3xl" />
              ))}
            </div>
          ) : (
            <ProductGrid products={bestSellers} />
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-24 lg:mt-36"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-forestGreen to-forestGreen/90 text-white px-12 py-6 lg:px-16 lg:py-8 rounded-3xl font-serif text-2xl lg:text-3xl font-medium uppercase tracking-wide shadow-2xl hover:shadow-havenly-lg hover:scale-[1.02] ring-2 ring-forestGreen/20 hover:ring-forestGreen/40 transition-all duration-700 group"
          >
            Shop Best Sellers
            <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BestSellers

