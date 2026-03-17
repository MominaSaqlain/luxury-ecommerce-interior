import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import sofa1 from "../../assets/gallery/sofa1.jpeg"
import decor1 from "../../assets/gallery/decor1.jpeg"
import wallart1 from "../../assets/gallery/wallart1.jpeg"
import rug1 from "../../assets/gallery/decor1.jpeg" 

const categories = [
  {
    title: "Furniture",
    image: sofa1,
  },
  {
    title: "Decor",
    image: decor1,
  },
  {
    title: "Wall Arts",
    image: wallart1,
  },
  {
    title: "Rugs",
    image: rug1,
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
}

function RoomCategories() {
  return (
    <section className="py-40 lg:py-56 px-6 lg:px-24 max-w-7xl mx-auto bg-gradient-to-br from-beige/20 to-softCream">
      <motion.div
        className="text-center mb-24 lg:mb-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-forestGreen/60 uppercase tracking-[0.3em] text-sm lg:text-base mb-8">
          Browse Rooms
        </p>
        <h2 className="font-serif text-5xl lg:text-7xl xl:text-8xl font-normal leading-tight">
          Interior Spaces
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={item}
            whileHover={{ y: -16, scale: 1.05 }}
            className="group relative overflow-hidden rounded-3xl lg:rounded-[2rem] cursor-pointer shadow-2xl hover:shadow-glow hover:shadow-2xl transition-all duration-1000 bg-white/70 backdrop-blur-xl border border-beige/40 hover:border-gold/60 hover:-translate-y-8 hover:scale-[1.05]"
          >
to={`/products?category=${category.title.toLowerCase().replace(' ', '-')}`}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-1500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forestGreen/80 via-forestGreen/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 flex items-end p-12 lg:p-16">
                <div>
                  <motion.h3 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="font-serif text-4xl lg:text-5xl xl:text-6xl text-white drop-shadow-2xl font-light leading-tight mb-3 lg:mb-4"
                    transition={{ duration: 0.8 }}
                  >
                    {category.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-beige/90 text-lg lg:text-xl uppercase tracking-[0.1em] font-light"
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Explore Collection
                  </motion.p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default RoomCategories

