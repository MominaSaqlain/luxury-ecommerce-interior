import { motion } from "framer-motion"

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=85&fit=crop",
    title: "Monte Carlo Residence",
    location: "Lahore, Pakistan",
    category: "Luxury Villa",
    size: "650 sqm"
  },
  {
    image: "https://images.unsplash.com/photo-1600210492493-0946911123f7?w=2000&q=85&fit=crop",
    title: "Pearl Tower Penthouse", 
    location: "Karachi, Pakistan",
    category: "High-rise Apartment",
    size: "420 sqm"
  },
  {
    image: "https://images.unsplash.com/photo-1558618047-3c8c76bbb17e?w=2000&q=85&fit=crop",
    title: "Heritage Manor",
    location: "Islamabad, Pakistan",
    category: "Historic Renovation",
    size: "820 sqm"
  },
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=2000&q=85&fit=crop",
    title: "Seaview Estate", 
    location: "Gwadar, Pakistan",
    category: "Beachfront Residence",
    size: "580 sqm"
  }
]

function LuxuryPortfolio() {
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
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1 }
  }

  return (
    <section className="py-32 lg:py-48 bg-gradient-to-br from-forestGreen/5 via-white to-beige/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 lg:mb-36"
        >
          <span className="inline-block bg-gradient-to-r from-gold/30 via-beige/20 text-gold text-lg tracking-[0.3em] uppercase px-6 py-3 rounded-full mb-8 font-light shadow-lg">
            Portfolio
          </span>
          <h2 className="font-serif text-5xl lg:text-7xl xl:text-8xl font-light text-forestGreen leading-none mb-8">
            Luxury <br className="hidden lg:inline" />
            <span className="bg-gradient-to-r from-gold via-beige/60 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-2xl lg:text-3xl text-forestGreen/70 max-w-3xl mx-auto font-light">
            Select residential projects completed by our design team
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12"
        >
          {portfolioItems.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group cursor-pointer relative overflow-hidden rounded-3xl shadow-2xl bg-white/80 backdrop-blur-sm border border-beige/40 hover:border-gold/50 hover:shadow-glow hover:shadow-2xl hover:scale-[1.02] transition-all duration-1000 hover:-translate-y-6"
            >
              <div className="relative h-80 lg:h-96">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-serif text-3xl lg:text-4xl text-white font-light mb-3 leading-tight"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-beige/90 text-lg font-medium mb-2">{project.location}</p>
                  <div className="flex items-center gap-6 text-beige/80 text-sm uppercase tracking-wider font-light">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.size}</span>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="p-8 border-t border-white/20 bg-gradient-to-r from-white/50 to-beige/20 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-serif font-bold text-gold mb-1">98%</div>
                    <div className="text-xs uppercase tracking-wider text-forestGreen/80">Client Satisfaction</div>
                  </div>
                  <div className="h-12 w-px bg-gold/30" />
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-serif font-bold text-gold mb-1">12 weeks</div>
                    <div className="text-xs uppercase tracking-wider text-forestGreen/80">Avg Completion</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default LuxuryPortfolio

