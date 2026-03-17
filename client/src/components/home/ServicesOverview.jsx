import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "RESIDENTIAL DESIGN",
    description: "Transform your house into a bespoke sanctuary. Comprehensive design for single rooms to complete home renovations.",
    price: "Starting at PKR 50,000",
    buttonText: "Learn More",
    buttonLink: "/services",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "COMMERCIAL SPACES",
    description: "Elevate your brand with sophisticated retail, hospitality, or office interiors designed to engage and inspire.",
    price: "Custom Pricing",
    buttonText: "Get Quote",
    buttonLink: "/contact",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8" />
      </svg>
    ),
    highlight: true // Makes this card pop visually
  },
  {
    title: "3D VISUALIZATION",
    description: "See your space before it's built with photorealistic 3D rendering and immersive virtual reality walkthroughs.",
    price: "Starting at PKR 25,000",
    buttonText: "See Samples",
    buttonLink: "/portfolio",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    )
  }
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">Our Expertise</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-6">Premium Services Tailored For You</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className={`p-10 lg:p-12 flex flex-col group transition-all duration-500 border ${
                service.highlight 
                  ? 'bg-charcoal text-white border-charcoal shadow-luxury-lg lg:-translate-y-4' 
                  : 'bg-white text-charcoal border-stone hover:border-gold hover:shadow-luxury'
              }`}
            >
              <div className={`mb-8 transition-transform duration-500 group-hover:scale-110 ${
                service.highlight ? 'text-gold' : 'text-charcoal'
              }`}>
                {service.icon}
              </div>
              
              <h3 className={`font-serif text-2xl mb-4 ${
                service.highlight ? 'text-white' : 'text-charcoal'
              }`}>
                {service.title}
              </h3>
              
              <p className={`font-light leading-relaxed mb-10 flex-grow ${
                service.highlight ? 'text-stone-dark' : 'text-charcoal-light'
              }`}>
                {service.description}
              </p>
              
              <div className="mt-auto">
                <span className={`block uppercase tracking-widest text-xs font-semibold mb-6 ${
                  service.highlight ? 'text-gold' : 'text-gold'
                }`}>
                  {service.price}
                </span>
                
                <Link
                  to={service.buttonLink}
                  className={`w-full py-4 px-6 flex items-center justify-center uppercase tracking-widest text-sm font-semibold transition-all duration-300 ${
                    service.highlight
                      ? 'bg-gold text-white hover:bg-white hover:text-charcoal'
                      : 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
                  }`}
                >
                  {service.buttonText}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default ServicesOverview;
