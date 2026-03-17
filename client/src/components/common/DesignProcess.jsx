import { motion } from "framer-motion"

const steps = [
  {
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Consultation",
    desc: "Personalized discovery session to understand your vision, space requirements, and lifestyle preferences."
  },
  {
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    title: "Concept Design",
    desc: "Creative moodboards and initial concepts tailored to your style, blending functionality and elegance."
  },
  {
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "3D Visualization",
    desc: "Photorealistic 3D renders allowing you to experience your new space before installation begins."
  },
  {
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "Final Styling",
    desc: "Meticulous installation and styling with premium furnishings and decor for flawless execution."
  }
]

function DesignProcess() {
  return (
    <section className="py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 lg:mb-28"
        >
          <motion.p 
            className="inline-block bg-forestGreen/10 text-forestGreen text-sm uppercase px-4 py-2 rounded-full tracking-[0.3em] mb-8 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Process
          </motion.p>
          <motion.h2 
            className="font-serif text-4xl lg:text-6xl xl:text-7xl font-light text-forestGreen leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Seamless Design Journey
          </motion.h2>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
              className="group relative bg-white/50 backdrop-blur-sm rounded-2xl p-10 lg:p-12 border border-beige/30 hover:border-gold/50 hover:bg-white/80 hover:shadow-glow transition-all duration-500 cursor-pointer text-center"
            >
              <div className="w-20 h-20 mx-auto mb-8 bg-gold/10 group-hover:bg-gold/20 rounded-2xl flex items-center justify-center text-gold group-hover:scale-110 transition-all duration-500 border-2 border-gold/20 group-hover:border-gold/40">
                {step.icon}
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-light uppercase tracking-[0.1em] text-forestGreen mb-6 group-hover:text-gold transition-colors">
                {step.title}
              </h3>
              <p className="text-forestGreen/70 leading-relaxed max-w-sm mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default DesignProcess
