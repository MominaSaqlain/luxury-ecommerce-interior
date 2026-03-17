import { motion } from "framer-motion"

const makeovers = [
  {
    before: "https://images.unsplash.com/photo-1600210492493-0946911123f7?w=800&q=85",
    after: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=85",
    title: "Living Room Transformation",
    description: "From dated to designed - complete room refresh"
  },
  {
    before: "https://images.unsplash.com/photo-1600607687939-dd696baa6876?w=800&q=85",
    after: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=85",
    title: "Bedroom Retreat",
    description: "Cozy luxury bedroom makeover"
  },
  {
    before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=85",
    after: "https://images.unsplash.com/photo-1618221195710-dd2dabb60e5d?w=800&q=85",
    title: "Kitchen Elegance",
    description: "Modern kitchen remodel with warm tones"
  }
]

function RoomMakeovers() {
  const container = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 }
  }

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-beige/20 to-softCream">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 lg:mb-28"
        >
          <span className="inline-block bg-gold/20 text-gold text-[10px] tracking-[0.45em] uppercase px-3 py-1 rounded-full mb-6">
            Transformations
          </span>
          <h2 className="font-serif text-4xl lg:text-6xl xl:text-7xl font-light text-forestGreen leading-tight mb-6">
            Room Makeovers
          </h2>
          <p className="text-xl lg:text-2xl text-forestGreen/70 max-w-3xl mx-auto">
            See the dramatic before & after transformations created by our design experts
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {makeovers.map((makeover, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative overflow-hidden rounded-3xl shadow-2xl bg-white/60 backdrop-blur-sm border border-beige/30 hover:shadow-glow/50 transition-all duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
              
              {/* Toggle Slider */}
              <div className="relative h-80 lg:h-96 cursor-pointer group-hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src={makeover.before}
                  alt={`${makeover.title} Before`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <img 
                  src={makeover.after}
                  alt={`${makeover.title} After`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                />
                
                {/* Toggle Handle */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl flex items-center justify-center z-10 border-4 border-white hover:scale-110 transition-all duration-300 group-hover:bg-gold/90">
                  <svg className="w-6 h-6 text-forestGreen group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 0h-4m4 0l-5-5" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 text-center">
                <h3 className="font-serif text-2xl lg:text-3xl text-forestGreen font-light mb-3 group-hover:text-gold transition-colors">
                  {makeover.title}
                </h3>
                <p className="text-forestGreen/70 leading-relaxed">
                  {makeover.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default RoomMakeovers

