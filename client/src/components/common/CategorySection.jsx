import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const categories = [
  {
    label: "Living Room",
    description: "Sofas, tables & lounge",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=75",
  },
  {
    label: "Bedroom",
    description: "Beds, nightstands & wardrobes",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=75",
  },
  {
    label: "Workspace",
    description: "Desks, chairs & shelving",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=75",
  },
  {
    label: "Decor",
    description: "Vases, art & accessories",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=75",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

function CategorySection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-stone text-[10px] tracking-[0.45em] uppercase mb-4">Browse by room</p>
        <div className="flex items-center gap-6">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-medium">Shop Categories</h2>
          <div className="flex-1 h-px bg-sand/50 hidden sm:block" />
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {categories.map((cat) => (
          <motion.div key={cat.label} variants={item}>
            <Link
              to={`/products?category=${encodeURIComponent(cat.label)}`}
              className="group block relative overflow-hidden aspect-[3/4] bg-sand/20"
            >
              <img
                src={cat.image}
                alt={cat.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-5">
                <p className="text-white font-serif text-xl leading-tight mb-0.5">{cat.label}</p>
                <p className="text-white/60 text-xs tracking-wide">{cat.description}</p>
              </div>

              {/* Arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-charcoal">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default CategorySection
