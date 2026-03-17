import { motion } from "framer-motion"

const tips = [
  {
    icon: "🎨",
    title: "Layer Your Lighting",
    description: "Combine ambient, task, and accent lighting for depth and mood control in every space."
  },
  {
    icon: "🌿",
    title: "Bring Nature In",
    description: "Use organic materials, plants, and natural textures to create calming, grounded environments."
  },
  {
    icon: "⚖️",
    title: "Balance Is Key",
    description: "Mix bold statement pieces with simple elements to avoid overwhelming the eye."
  },
  {
    icon: "📏",
    title: "Scale Matters",
    description: "Choose furniture proportions that fit the room's dimensions for harmonious flow."
  }
]

function DesignTips() {
  const container = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-r from-softCream to-beige/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 lg:mb-28"
        >
          <span className="inline-block bg-gold/20 text-gold text-[10px] tracking-[0.45em] uppercase px-3 py-1 rounded-full mb-6">
            Expert Advice
          </span>
          <h2 className="font-serif text-4xl lg:text-6xl xl:text-7xl font-light text-forestGreen leading-tight mb-6">
            Design Tips
          </h2>
          <p className="text-xl lg:text-2xl text-forestGreen/70 max-w-3xl mx-auto">
            Professional insights to elevate your interior design game
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-white/60 backdrop-blur-sm p-10 lg:p-12 rounded-3xl border border-beige/30 shadow-xl hover:shadow-glow hover:-translate-y-4 hover:scale-[1.02] transition-all duration-700 cursor-pointer hover:bg-white/80"
            >
              <div className="text-4xl lg:text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                {tip.icon}
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl text-forestGreen font-light mb-6 group-hover:text-gold transition-colors">
                {tip.title}
              </h3>
              <p className="text-lg text-forestGreen/70 leading-relaxed group-hover:text-forestGreen/90 transition-colors">
                {tip.description}
              </p>
              <div className="mt-8 pt-8 border-t border-beige/30">
                <span className="inline-block bg-gradient-to-r from-gold/20 to-beige/20 text-gold text-sm uppercase tracking-wider px-4 py-2 rounded-full group-hover:bg-gold/30 transition-all duration-500">
                  Learn More →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-20 lg:mt-28"
        >
          <a
            href="/inspiration"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-forestGreen to-forestGreen/90 text-white px-10 py-5 lg:px-12 lg:py-6 rounded-2xl font-serif text-xl lg:text-2xl font-medium uppercase tracking-wide shadow-2xl hover:shadow-havenly-lg hover:scale-[1.02] ring-2 ring-forestGreen/20 hover:ring-forestGreen/40 transition-all duration-500 group"
          >
            View Inspiration
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default DesignTips

