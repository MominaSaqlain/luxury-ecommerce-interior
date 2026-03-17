import { motion } from "framer-motion"

const designers = [
  {
    name: "Ayesha Khan",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=85&fit=crop",
    roomImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=85&fit=crop",
  },
  {
    name: "Omar Rahman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85&fit=crop",
    roomImage: "https://images.unsplash.com/photo-1618221195710-dd9120788e5f?w=800&q=85&fit=crop",
  },
  {
    name: "Sara Malik",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&q=85&fit=crop",
    roomImage: "https://images.unsplash.com/photo-1558618047-3c8c76bbb17e?w=800&q=85&fit=crop",
  },
  {
    name: "Hassan Ali",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=85&fit=crop",
    roomImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=85&fit=crop",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

function DesignerPortfolio() {
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
          Portfolio
        </p>
        <h2 className="font-serif text-5xl lg:text-6xl font-normal leading-tight">
          Our Designers
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8"
      >
        {designers.map((designer, index) => (
          <motion.div
            key={designer.name}
            variants={item}
            whileHover={{ y: -12 }}
            className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700 bg-gradient-to-br from-white/80 to-cream/80 backdrop-blur-sm hover:bg-gradient-to-br hover:from-gold/20 hover:to-beige/20 border border-beige/30"
          >
            <div className="absolute inset-0">
              <img
                src={designer.roomImage}
                alt={designer.name}
                className="w-full h-[400px] lg:h-[450px] object-cover group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Designer info */}
            <div className="absolute bottom-8 left-8 right-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="text-white drop-shadow-2xl"
              >
                <img 
                  src={designer.image}
                  alt={designer.name}
                  className="w-20 h-20 rounded-2xl object-cover mb-4 shadow-2xl border-4 border-white/80 group-hover:border-gold/80 transition-colors"
                />
                <h3 className="font-serif text-2xl font-light group-hover:translate-x-2 transition-all duration-500">
                  {designer.name}
                </h3>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default DesignerPortfolio

