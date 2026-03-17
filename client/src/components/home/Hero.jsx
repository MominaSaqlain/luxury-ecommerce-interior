import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import heroVideo from "../../assets/videos/interior-walkthrough.mp4";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Video with Parallax */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center w-full mt-16"
      >
        <motion.div 
          variants={fadeUp}
          className="overflow-hidden mb-6"
        >
          <span className="font-serif text-gold text-lg md:text-xl italic tracking-widest uppercase">
            Muqa's Interior
          </span>
        </motion.div>

        <motion.h1 
          variants={fadeUp}
          className="font-serif text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 max-w-5xl text-shadow-lg"
        >
          Transform Your Space Into A Masterpiece
        </motion.h1>

        <motion.p 
          variants={fadeUp}
          className="text-stone font-light text-lg md:text-xl lg:text-2xl max-w-2xl mb-12 text-shadow-sm"
        >
          Luxury Interior Design & Premium Home Furnishings
        </motion.p>

        <motion.div 
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center justify-center"
        >
          <Link
            to="/portfolio"
            className="w-full sm:w-auto px-10 h-[60px] flex items-center justify-center bg-gold hover:bg-gold-dark text-white font-semibold tracking-widest uppercase text-sm transition-all duration-300 shadow-glow-gold hover:shadow-none hover:-translate-y-1"
          >
            Explore Our Portfolio
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-10 h-[60px] flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-charcoal font-semibold tracking-widest uppercase text-sm transition-all duration-300 hover:-translate-y-1"
          >
            Book Consultation
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/70 text-xs tracking-[0.3em] uppercase font-semibold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gold"
        />
      </motion.div>

    </section>
  );
}

export default Hero;
