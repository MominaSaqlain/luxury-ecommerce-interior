import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../../components/common/PageHeader";

// Import all available images for a rich portfolio
import hero1 from "../../assets/hero/hero1.jpeg";
import hero2 from "../../assets/hero/hero2.jpeg";
import hero3 from "../../assets/hero/hero3.jpeg";

import bed1 from "../../assets/projects/bedroom1.jpeg";
import kitch1 from "../../assets/projects/kitchen1.jpeg";
import liv1 from "../../assets/projects/livingroom1.jpeg";

import rend1 from "../../assets/renders/render1.jpeg";
import rend2 from "../../assets/renders/render2.jpeg";
import rend3 from "../../assets/renders/render3.jpeg";

import dec1 from "../../assets/gallery/decor1.jpeg";
import sofa1 from "../../assets/gallery/sofa1.jpeg";
import wall1 from "../../assets/gallery/wallart1.jpeg";

const categories = ["All", "Residential", "Commercial", "3D Renders", "Styling"];

const portfolioItems = [
  { id: 1, image: liv1, title: "Modern Serenity", category: "Residential", colSpan: "col-span-12 md:col-span-8", rowSpan: "row-span-2" },
  { id: 2, image: rend1, title: "Luxe Penthouse", category: "3D Renders", colSpan: "col-span-12 md:col-span-4", rowSpan: "row-span-1" },
  { id: 3, image: kitch1, title: "Monochrome Culinary", category: "Residential", colSpan: "col-span-12 md:col-span-4", rowSpan: "row-span-1" },
  { id: 4, image: hero2, title: "Heritage Revival", category: "Commercial", colSpan: "col-span-12 md:col-span-6", rowSpan: "row-span-1" },
  { id: 5, image: rend2, title: "Organic Dining", category: "3D Renders", colSpan: "col-span-12 md:col-span-6", rowSpan: "row-span-1" },
  { id: 6, image: dec1, title: "Curated Details", category: "Styling", colSpan: "col-span-12 md:col-span-4", rowSpan: "row-span-1" },
  { id: 7, image: bed1, title: "Minimalist Master", category: "Residential", colSpan: "col-span-12 md:col-span-8", rowSpan: "row-span-2" },
  { id: 8, image: hero3, title: "Executive Suite", category: "Commercial", colSpan: "col-span-12 md:col-span-4", rowSpan: "row-span-1" },
  { id: 9, image: rend3, title: "Open Concept Loft", category: "3D Renders", colSpan: "col-span-12 md:col-span-8", rowSpan: "row-span-1" },
  { id: 10, image: sofa1, title: "Bespoke Furnishings", category: "Styling", colSpan: "col-span-12 md:col-span-4", rowSpan: "row-span-1" },
  { id: 11, image: wall1, title: "Art Integration", category: "Styling", colSpan: "col-span-12 md:col-span-4", rowSpan: "row-span-1" },
  { id: 12, image: hero1, title: "Flagship Showroom", category: "Commercial", colSpan: "col-span-12 md:col-span-8", rowSpan: "row-span-1" },
];

function Projects() {

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeCategory);

  return (
<div className="bg-white min-h-screen pt-16 pb-0">

      <PageHeader
        title="Our Portfolio"
        subtitle="A Curated Exhibition of Masterful Design"
      />

      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-24">

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm uppercase tracking-widest font-semibold px-4 py-2 border-b-2 transition-colors duration-300 ${
                activeCategory === category
                  ? "border-gold text-charcoal"
                  : "border-transparent text-charcoal-light hover:text-charcoal hover:border-stone"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-12 gap-4 lg:gap-6 auto-rows-[250px] md:auto-rows-[300px]"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (

              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`${item.colSpan} ${item.rowSpan} relative group overflow-hidden cursor-pointer`}
                onClick={() => setSelectedImage(item)}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:brightness-50"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent pointer-events-none"> 

                  <span className="text-gold uppercase tracking-widest text-xs font-semibold mb-2 block">
                    {item.category}
                  </span>

                  <h3 className="font-serif text-2xl lg:text-3xl text-white">
                    {item.title}
                  </h3>

                </div>

              </motion.div>

            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-24 text-charcoal-light font-light text-lg">
            No projects found in this category.
          </div>
        )}

      </section>

      {/* Lightbox */}
      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-4 md:p-12 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >

            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl max-h-[90vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain shadow-2xl"
              />

              <div className="mt-6 text-center">
                <h3 className="font-serif text-3xl text-white mb-2">
                  {selectedImage.title}
                </h3>

                <span className="text-gold uppercase tracking-widest text-sm font-semibold">
                  {selectedImage.category}
                </span>
              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}

export default Projects;