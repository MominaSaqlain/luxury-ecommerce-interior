import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const faqs = [
  {
    question: "How long does delivery take?",
    answer: "Standard delivery takes 5-10 business days across Pakistan. Express options available for major cities (2-4 days)."
  },
  {
    question: "What is your return policy?",
    answer: "30-day return window for unused items in original packaging. Custom orders are final sale. Free returns within 50km of Lahore."
  },
  {
    question: "Do you offer design consultations?",
    answer: "Yes! Free 30-minute virtual consultations. Premium in-person design services start at PKR 25,000."
  },
  {
    question: "Are your products sustainable?",
    answer: "We prioritize FSC-certified woods, recycled materials, and low-VOC finishes. 80% of our collection is sustainably sourced."
  },
  {
    question: "How do I care for my furniture?",
    answer: "Use soft cloth with mild soap solution. Avoid harsh chemicals. Wood oils recommended annually for natural finishes."
  }
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-24 lg:py-32 bg-softCream">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 lg:mb-28"
        >
          <span className="inline-block bg-gold/20 text-gold text-[10px] tracking-[0.45em] uppercase px-3 py-1 rounded-full mb-6">
            Frequently Asked
          </span>
          <h2 className="font-serif text-4xl lg:text-6xl xl:text-7xl font-light text-forestGreen leading-tight mb-6">
            Questions
          </h2>
          <p className="text-xl lg:text-2xl text-forestGreen/70 max-w-2xl mx-auto">
            Everything you need to know before choosing MUQA'S INTERIORS
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: "auto" }}
              viewport={{ once: true }}
className="bg-white/85 rounded-2xl border border-beige/30 overflow-hidden shadow-lg hover:shadow-glow hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 text-left flex items-center justify-between group-hover:text-forestGreen transition-colors"
              >
                <span className="font-serif text-xl font-light text-forestGreen group-hover:text-gold">
                  {faq.question}
                </span>
                <motion.svg 
                  className={`w-6 h-6 text-gold/70 transition-transform duration-300 ml-4 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-2">
                      <p className="text-forestGreen/80 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

