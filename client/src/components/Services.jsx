import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Services() {

  const services = [
    {
      title: "Interior Design",
      desc: "Comprehensive luxury interior design for residential and commercial spaces, tailored to your unique vision and lifestyle."
    },
    {
      title: "Space Planning",
      desc: "Intelligent spatial layouts that optimize flow, functionality and aesthetic harmony in every environment."
    },
    {
      title: "Custom Furniture",
      desc: "Bespoke furniture pieces and millwork crafted to perfectly complement your interior design vision."
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-cream/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light text-charcoal mb-6">
            Our Services
          </h2>
          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">
            Expert design solutions for every aspect of your interior transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -15,
                transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
              className="group relative bg-white/85 p-10 lg:p-12 rounded-3xl border border-white/30 hover:border-gold/40 hover:bg-white shadow-xl hover:shadow-2xl hover:shadow-glow-gold transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="font-serif text-3xl lg:text-3xl font-light text-charcoal mb-6 group-hover:text-gold transition-colors duration-500 leading-tight">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed text-lg max-w-md mb-8">
                  {service.desc}
                </p>
                <Link to="/services" className="inline-block bg-gradient-to-r from-gold to-beige text-forestGreen px-8 py-4 rounded-2xl font-light uppercase tracking-wider text-sm hover:shadow-glow-gold hover:scale-105 hover:from-gold hover:to-gold/90 ring-2 ring-gold/20 hover:ring-gold/40 transition-all font-serif mt-4">
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <Link to="/services" className="mt-12 block mx-auto w-fit bg-gradient-to-r from-forestGreen via-charcoal text-white px-12 py-6 rounded-3xl text-xl font-light uppercase tracking-wider shadow-2xl hover:shadow-glow-gold hover:scale-105 transition-all font-serif">
          View All Services
        </Link>

      </div>
    </section>
  );
}

export default Services;

