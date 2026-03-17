import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-24 bg-charcoal text-white text-center">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-medium leading-[1.2]">
            Ready to fall in love with your home?
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-xl mx-auto">
            Take our quick style quiz to get matched with the perfect interior designer for your project.
          </p>
          <div className="pt-4">
            <Link
              to="/style-quiz"
              className="inline-block bg-white text-charcoal px-10 py-4 text-sm font-medium tracking-wide hover:bg-primary-50 transition-colors shadow-lg shadow-black/20"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

