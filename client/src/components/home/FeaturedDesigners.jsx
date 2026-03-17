import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const designers = [
  {
    id: 1,
    name: "Sarah Jenkins",
    style: "Modern Coastal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    reviews: 124
  },
  {
    id: 2,
    name: "Marcus Chen",
    style: "Minimalist & Scandinavian",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    rating: 5.0,
    reviews: 89
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    style: "Bohemian Chic",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    rating: 4.8,
    reviews: 215
  },
  {
    id: 4,
    name: "James Wilson",
    style: "Midcentury Modern",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    reviews: 156
  }
]

function FeaturedDesigners() {
  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              Meet Our Top Designers
            </h2>
            <p className="text-charcoal-light font-light text-lg">
              Our vetted professionals are ready to bring your vision to life.
            </p>
          </div>
          <Link to="/designers" className="text-charcoal font-medium border-b border-charcoal pb-1 hover:text-accent-gold hover:border-accent-gold transition-colors">
            View All Designers
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {designers.map((designer, index) => (
            <motion.div 
              key={designer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden mb-6 bg-primary-200">
                <img 
                  src={designer.image} 
                  alt={designer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
              </div>

              {/* Info */}
              <h3 className="font-serif text-xl text-charcoal font-medium mb-1">
                {designer.name}
              </h3>
              <p className="text-charcoal-light text-sm mb-3">
                {designer.style}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1.5 text-sm">
                <svg className="w-4 h-4 text-accent-gold fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium text-charcoal">{designer.rating}</span>
                <span className="text-charcoal-light">({designer.reviews} reviews)</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeaturedDesigners
