import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import projectVideo from "../../assets/videos/project-tour.mp4";

function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-white" ref={containerRef}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">The Experience</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-6">Experience Our Craftsmanship</h2>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video w-full max-w-6xl mx-auto rounded-sm overflow-hidden shadow-luxury-lg group cursor-pointer"
          onClick={togglePlay}
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted={false}
            playsInline
            onEnded={() => setIsPlaying(false)}
          >
            <source src={projectVideo} type="video/mp4" />
          </video>

          {/* Custom Overlay & Play Button */}
          <div className={`absolute inset-0 bg-charcoal/40 transition-opacity duration-500 flex items-center justify-center ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 bg-white/20 backdrop-blur-md border px-4 border-white/50 rounded-full flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-colors shadow-[0_0_30px_rgba(255,255,255,0.3)] relative"
            >
              {/* Pulsing ring */}
              {!isPlaying && (
                <div className="absolute inset-0 rounded-full border border-white animate-ping opacity-50"></div>
              )}
              {isPlaying ? (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center mt-12"
        >
          <p className="text-charcoal-light font-light text-lg leading-relaxed">
            Step inside our recent flagship project where modern minimalism meets organic textures. Every detail, from the custom millwork to the curated art pieces, was meticulously planned to perfectly align with our client's lifestyle.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default VideoShowcase;
