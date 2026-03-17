import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const posts = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=85&fit=crop",
  "https://images.unsplash.com/photo-1600210492493-0946911123f7?w=500&q=85&fit=crop",
  "https://images.unsplash.com/photo-1558618047-3c8c76bbb17e?w=500&q=85&fit=crop",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=85&fit=crop",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500&q=85&fit=crop",
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=85&fit=crop",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&q=85&fit=crop",
  "https://images.unsplash.com/photo-1618221195710-dd2dabb60e5d?w=500&q=85&fit=crop",
  "https://images.unsplash.com/photo-1524758631624-e2822f0f6737?w=500&q=85&fit=crop"
]

function InstagramGallery() {
  const container = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  }

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-softCream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-block bg-gradient-to-r from-gold/30 via-beige/20 text-gold text-sm tracking-[0.4em] uppercase px-4 py-2 rounded-full mb-6">
@muqasinteriors
          </span>
          <h2 className="font-serif text-3xl lg:text-5xl text-forestGreen font-light mb-4">
            Follow Our Journey
          </h2>
          <p className="text-lg lg:text-xl text-forestGreen/70 max-w-xl mx-auto">
            Real homes, real clients, real transformations
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-beige/20 hover:shadow-glow/50 transition-all duration-700"
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative aspect-square overflow-hidden bg-gradient-to-br from-beige/20 to-gold/10 hover:from-gold/20 hover:to-beige/20 transition-all duration-500"
            >
              <img 
                src={post}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <div className="bg-white/90 backdrop-blur-sm text-center py-3 px-4 rounded-xl shadow-2xl w-full mx-2 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                  <p className="text-xs lg:text-sm font-medium text-forestGreen tracking-wide uppercase mb-1">
                    muqasinteriors
                  </p>
                  <p className="text-xs text-forestGreen/80 font-light">
                    {index + 1}h
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-24"
        >
          <Link
            to="/inspiration"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gold to-beige text-forestGreen px-8 py-4 lg:px-12 lg:py-5 rounded-2xl font-serif text-lg lg:text-xl font-medium uppercase tracking-wide shadow-xl hover:shadow-glow hover:scale-[1.02] ring-2 ring-gold/20 hover:ring-gold/40 transition-all duration-500 group"
          >
            See More Inspiration
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default InstagramGallery

