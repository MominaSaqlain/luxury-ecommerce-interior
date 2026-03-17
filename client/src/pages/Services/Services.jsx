import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHeader from "../../components/common/PageHeader";

const services = [
  {
    id: "mini",
    title: "Online Mini Package",
    subtitle: "Perfect for a quick room refresh",
    price: "PKR 15,000 / room",
    features: [
      "1 Initial Concept Board",
      "Color Palette Selection",
      "Shoppable Furniture Links",
      "1 Round of Revisions",
      "2 Weeks Delivery"
    ],
    recommended: false
  },
  {
    id: "full",
    title: "Online Full Design",
    subtitle: "Complete room transformation",
    price: "PKR 35,000 / room",
    features: [
      "2 Initial Concept Boards",
      "Photorealistic 3D Renderings",
      "Floor Plan & Spatial Layout",
      "Shoppable Furniture Links",
      "Paint & Material Sourcing",
      "3 Rounds of Revisions",
      "3-4 Weeks Delivery"
    ],
    recommended: true
  },
  {
    id: "in-person",
    title: "In-Person Design",
    subtitle: "Our signature white-glove service",
    price: "Custom Quote",
    features: [
      "In-Home Consultation",
      "Comprehensive 3D Renderings",
      "Custom Millwork Design",
      "Dedicated Project Manager",
      "Contractor Coordination",
      "White-Glove Installation",
      "Unlimited Revisions"
    ],
    recommended: false
  },
  {
    id: "commercial",
    title: "Commercial Spaces",
    subtitle: "Elevating your brand experience",
    price: "Custom Quote",
    features: [
      "Brand Identity Translation",
      "Optimized Traffic Flow Layouts",
      "Commercial Grade Sourcing",
      "Lighting & Acoustic Design",
      "Custom Displays & Millwork",
      "Code Compliance Review",
      "Full Project Management"
    ],
    recommended: false
  }
];

function Services() {
  return (
<div className="bg-cream min-h-screen pt-16 pb-0">
      <PageHeader 
        title="Design Services" 
        subtitle="Tailored Solutions For Every Space" 
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg text-charcoal-light font-light leading-relaxed"
          >
            Whether you need a quick styling refresh or a complete architectural overhaul, our tiered services are designed to meet you exactly where you are in your design journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 border hover:shadow-luxury-lg transition-all duration-300 ${
                service.recommended 
                  ? 'bg-charcoal text-white border-charcoal lg:-translate-y-4' 
                  : 'bg-white text-charcoal border-stone hover:border-gold'
              }`}
            >
              {service.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-serif text-2xl mb-2">{service.title}</h3>
                <p className={`text-sm ${service.recommended ? 'text-stone' : 'text-charcoal-light'}`}>
                  {service.subtitle}
                </p>
              </div>

              <div className="mb-8 pb-8 border-b border-opacity-20 border-current">
                <span className={`text-xl font-medium tracking-wide ${service.recommended ? 'text-gold' : 'text-charcoal'}`}>
                  {service.price}
                </span>
              </div>

              <ul className="flex-grow space-y-4 mb-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className={`w-5 h-5 shrink-0 ${service.recommended ? 'text-gold' : 'text-charcoal-light'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm font-light ${service.recommended ? 'text-stone' : 'text-charcoal'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link
                  to={service.recommended ? "/style-quiz" : "/contact"}
                  className={`w-full py-4 flex items-center justify-center text-sm uppercase tracking-widest font-semibold transition-colors ${
                    service.recommended
                      ? 'bg-gold text-white hover:bg-white hover:text-charcoal'
                      : 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
                  }`}
                >
                  {service.recommended ? "Take Style Quiz" : "Inquire Now"}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* FAQ Section or Process Section could go here */}

    </div>
  );
}

export default Services;
