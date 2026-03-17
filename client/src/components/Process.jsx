import { motion } from "framer-motion";

function Process() {

  const steps = [
    {
      number: "01",
      title: "Consultation",
      desc: "We understand your vision, lifestyle and design preferences."
    },
    {
      number: "02",
      title: "Concept Design",
      desc: "Our designers create mood boards, layouts and design concepts."
    },
    {
      number: "03",
      title: "Implementation",
      desc: "We bring the concept to life with furniture, lighting and decor."
    },
    {
      number: "04",
      title: "Final Styling",
      desc: "Final touches that transform the space into a luxury interior."
    }
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-semibold text-center mb-16">
          Our Design Process
        </h2>

<motion.div 
          className="relative overflow-hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
              }
            }
          }}
        >
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-24 right-24 h-1 bg-gradient-to-r from-gold via-beige to-gold bg-[length:200%_100%] animate-gradient-x rounded-full opacity-20 lg:opacity-40" />
          
          {/* Steps */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 lg:space-x-12 lg:items-center justify-center">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  show: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.6 }
                  }
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.4 }
                }}
                className="group relative flex flex-col items-center text-center lg:basis-1/4 p-8 lg:p-12 bg-white/60 backdrop-blur-md rounded-3xl border border-white/30 hover:border-gold/50 hover:bg-white shadow-xl hover:shadow-2xl hover:shadow-glow-gold transition-all duration-500 z-10 lg:hover:-translate-y-2 mx-auto lg:mx-0"
              >
                {/* Step Number */}
                <motion.div 
                  className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-gold via-beige to-gold rounded-3xl flex items-center justify-center text-2xl lg:text-3xl font-bold text-white shadow-2xl mb-6 group-hover:scale-110 transition-all duration-500 relative overflow-hidden"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span>{step.number}</span>
                  <div className="absolute inset-0 bg-white/20 -rotate-45 -translate-x-[100%] group-hover:translate-x-[100vw] transition-transform duration-1000" />
                </motion.div>
                
                {/* Content */}
                <h3 className="font-serif text-2xl lg:text-2xl font-light text-charcoal mb-4 group-hover:text-gold transition-colors">
                  {step.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed max-w-xs lg:max-w-none">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Process;