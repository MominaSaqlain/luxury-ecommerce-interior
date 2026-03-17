import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Take Style Quiz",
    description: "Answer a few questions about your space, style, and budget.",
    icon: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100&q=85",
  },
  {
    number: "02",
    title: "Match With Designer",
    description: "Get paired with a top interior designer who understands your vision.",
    icon: "https://images.unsplash.com/photo-1611710215411-5c8e194ab5c1?w=100&q=85",
  },
  {
    number: "03",
    title: "Get Your Dream Room",
    description: "Receive custom 3D designs and shoppable furniture recommendations.",
    icon: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&q=85",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

function HowItWorks() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-cream-dark">
      
      {/* Header */}
      <motion.div
        className="text-center mb-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sand-dark uppercase tracking-[0.3em] text-sm mb-8 font-light">
          How it works
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white">
          Simple. Beautiful. Yours.
        </h2>
      </motion.div>

      {/* Steps */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8"
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            variants={item}
            whileHover={{ y: -8 }}
            className="group cursor-default"
          >
            {/* Number */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-sand-dark/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-sand-dark/40 transition-all duration-500">
                <span className="font-serif text-2xl font-medium text-white">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-light text-white group-hover:text-sand-dark transition-colors">
                  {step.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/80 text-lg leading-relaxed group-hover:text-sand-dark/90 transition-colors mb-8">
              {step.description}
            </p>

            {/* Icon */}
            <div className="w-20 h-20 bg-sand-dark/10 rounded-xl flex items-center justify-center group-hover:bg-sand-dark/20 transition-all duration-500">
              <img src={step.icon} alt="" className="w-12 h-12 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default HowItWorks

