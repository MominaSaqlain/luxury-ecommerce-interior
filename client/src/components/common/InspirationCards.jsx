import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const rooms = [
  {
    title: "Living Room",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=85&fit=crop",
  },
  {
    title: "Bedroom",
    image: "https://images.unsplash.com/photo-1618221195710-dd9120788e5f?w=800&q=85&fit=crop",
  },
  {
    title: "Dining Room",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76bbb17e?w=800&q=85&fit=crop",
  },
  {
    title: "Office",
    image: "https://images.unsplash.com/photo-1524758631624-e2822f6054b7?w=800&q=85&fit=crop",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" } },
}

function InspirationCards() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        className="text-center mb-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-stone/60 uppercase tracking-[0.3em] text-sm mb-4 font-light">
          Inspiration
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
          Room Ideas
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
      >
        {rooms.map((room, index) => (
          <motion.div
            key={room.title}
            variants={item}
            whileHover={{ y: -12, scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer"
          >
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <motion.h3 
                layout
                className="font-serif text-3xl md:text-4xl text-white font-light drop-shadow-lg group-hover:translate-x-4 transition-transform duration-700"
              >
                {room.title}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default InspirationCards

