import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Happy Clients", value: 500, suffix: "+" },
  { label: "Projects Completed", value: 1000, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Awards Won", value: 50, suffix: "+" }
];

function StatisticsCounter() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={containerRef}
      className="py-20 lg:py-24 bg-gradient-gold relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-8">
          {stats.map((stat, index) => (
            <Counter 
              key={index} 
              label={stat.label} 
              value={stat.value} 
              suffix={stat.suffix} 
              isInView={isInView} 
              delay={index * 0.1} 
            />
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-50 z-0"></div>
    </section>
  );
}

function Counter({ label, value, suffix, isInView, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        let start = 0;
        const end = value;
        const duration = 2000; // 2 seconds
        const incrementTime = Math.max(10, Math.floor(duration / end)); // Minimum 10ms
        
        const timer = setInterval(() => {
          start += end > 100 ? 5 : 1; // Increment faster for larger numbers
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, incrementTime);
        
        return () => clearInterval(timer);
      }, delay * 1000);
    }
  }, [isInView, value, delay]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="font-serif text-4xl lg:text-6xl text-white font-bold mb-2 tracking-tight">
        {count}{suffix}
      </div>
      <div className="font-sans text-sm lg:text-base text-white/90 uppercase tracking-widest font-semibold">
        {label}
      </div>
    </motion.div>
  );
}

export default StatisticsCounter;
