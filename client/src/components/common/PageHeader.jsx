import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, bgImage }) => {
  return (
    <section 
      className="relative pt-28 lg:pt-32 pb-16 lg:pb-20 flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* LIGHT OVERLAY (FIXED) */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 text-base md:text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>

      </div>
    </section>
  );
};

export default PageHeader;