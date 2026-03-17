import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Discover Your Style",
    description: "Take our interactive Style Quiz to help us understand your vision, aesthetic preferences, and the unique needs of your space.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    link: "/style-quiz",
    linkText: "Take Style Quiz"
  },
  {
    number: "02",
    title: "Expert Design",
    description: "Collaborate one-on-one with your dedicated designer to refine concepts, review 3D renderings, and finalize your bespoke room design.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    link: "/designers",
    linkText: "Meet Our Designers"
  },
  {
    number: "03",
    title: "Premium Execution",
    description: "Approve your final design and let us handle the rest—from ordering premium furnishings to white-glove delivery and installation.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    link: "/portfolio",
    linkText: "View Projects"
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">The Process</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-6">Your Dream Home In 3 Simple Steps</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
        >
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-30 z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white p-10 relative z-10 group shadow-sm hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-gold/20 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center text-gold mb-8 mx-auto relative group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-charcoal text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {step.number}
                </div>
              </div>
              
              <h3 className="font-serif text-2xl text-charcoal text-center mb-4">{step.title}</h3>
              <p className="text-charcoal-light font-light text-center leading-relaxed mb-8 flex-grow">
                {step.description}
              </p>
              
              <div className="text-center mt-auto">
                <Link 
                  to={step.link}
                  className="inline-block text-sm font-semibold tracking-widest uppercase text-charcoal group-hover:text-gold relative overflow-hidden"
                >
                  <span className="relative z-10">{step.linkText}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;
