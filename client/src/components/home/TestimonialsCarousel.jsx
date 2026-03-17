import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    project: "Modern Serenity Bedroom",
    rating: 5,
    text: "Muqa's Interior completely understood my vision and transformed our barren bedroom into the cozy, modern sanctuary we always dreamed of. The attention to detail in the custom millwork and fabric selection was extraordinary.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    project: "Luxe Penthouse Lounge",
    rating: 5,
    text: "Working with the team was a seamless experience. They elevated our living space far beyond our expectations. The balance of luxury materials with comfortable, livable pieces is exactly what we wanted for entertaining.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    project: "Monochrome Culinary Space",
    rating: 5,
    text: "Our kitchen renovation was handled with absolute professionalism. The 3D renders were photorealistic, but the final execution was even better. It's not just beautiful; it's incredibly functional.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "James Wentworth",
    project: "Bespoke Home Office",
    rating: 5,
    text: "As someone who works from home permanently, I needed an office that inspired creativity but maintained executive focus. Muqa's delivered precisely that. The custom desk is a masterpiece.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  }
];

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" }
    })
  };

  return (
    <section className="py-24 lg:py-32 bg-beige relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-gold uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">Client Praise</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-6">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </motion.div>

        <div className="relative h-[350px] md:h-[300px] flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full px-4"
            >
              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-xl md:text-2xl lg:text-3xl text-charcoal leading-relaxed mb-10 italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center justify-center gap-4">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="text-left">
                  <h4 className="font-sans font-semibold text-charcoal tracking-wide">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm font-light text-charcoal-light">
                    {testimonials[currentIndex].project}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gold w-8' 
                  : 'bg-stone-dark hover:bg-gold/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsCarousel;
