import { motion } from "framer-motion"

const inspirations = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85&fit=crop",
    caption: "Modern Living Haven",
  },
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd9120788e5f?w=800&q=85&fit=crop",
    caption: "Serene Bedroom Retreat",
  },
  {
    image: "https://images.unsplash.com/photo-1558618047-3c8c76bbb17e?w=800&q=85&fit=crop",
    caption: "Elegant Dining Space",
  },
  {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=85&fit=crop",
    caption: "Creative Office Studio",
  },
  {
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=85&fit=crop",
    caption: "Warm Kitchen Glow",
  },
  {
    image: "https://images.unsplash.com/photo-1600214641476-f1154406d4cf?w=800&q=85&fit=crop",
    caption: "Luxury Bathroom Escape",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
}

function InspirationGallery() {
  return (
    <section className="py-32 px-6 lg:px-24 max-w-7xl mx-auto">
      
      {/* Header */}
      <motion.div
        className="text-center mb-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-charcoal/60 uppercase tracking-[0.3em] text-sm mb-8">
          Gallery
        </p>
        <h2 className="font-serif text-5xl lg:text-6xl font-normal leading-tight">
          Interior Inspiration
        </h2>
      </motion.div>

      {/* Masonry Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6"
      >
        {inspirations.map((inspiration, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.02, y: -4 }}
            className="break-inside-avoid mb-6 group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 relative"
          >
            <img
              src={inspiration.image}
              alt={inspiration.caption}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8">
              <h3 className="font-serif text-2xl text-white drop-shadow-lg group-hover:translate-x-4 transition-all duration-700 font-light">
                {inspiration.caption}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default InspirationGallery

