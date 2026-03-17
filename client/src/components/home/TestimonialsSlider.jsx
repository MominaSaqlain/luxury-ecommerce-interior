import { motion } from "framer-motion"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    text: "My designer completely completely understood my vision and transformed our barren living room into the cozy, modern space I always dreamed of. The process was so easy and the 3D renders helped me buy with confidence.",
    author: "Jessica T.",
    location: "Austin, TX",
    projectType: "Living Room",
    image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "I was overwhelmed by all the choices out there. Muqqa's made it simple by curating pieces that fit my exact style and budget. I love walking into my bedroom now.",
    author: "Michael R.",
    location: "New York, NY",
    projectType: "Master Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "The best investment we made for our new house. The designer listened to our needs for kid-friendly but stylish furniture and delivered an incredible design.",
    author: "Sarah & David M.",
    location: "Chicago, IL",
    projectType: "Full Home",
    image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=800&auto=format&fit=crop"
  }
]

function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            Hear From Our Clients
          </h2>
          <div className="flex justify-center text-accent-gold mb-2">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-charcoal-light font-medium tracking-wide">
            Over 10,000 5-star reviews
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Image Side */}
            <motion.div 
              key={`img-${currentIndex}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="aspect-square md:aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img 
                src={testimonials[currentIndex].image} 
                alt="Client Project" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content Side */}
            <motion.div 
              key={`content-${currentIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="px-4 md:px-12 py-8"
            >
              <svg className="w-12 h-12 text-primary-200 mb-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="font-serif text-2xl md:text-3xl text-charcoal leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <p className="font-medium text-charcoal text-lg">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-charcoal-light text-sm">
                  {testimonials[currentIndex].location} • {testimonials[currentIndex].projectType}
                </p>
              </div>

              {/* Controls */}
              <div className="flex gap-4 mt-12">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-primary-300 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white hover:border-charcoal transition-all"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-primary-300 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white hover:border-charcoal transition-all"
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default TestimonialsSlider
