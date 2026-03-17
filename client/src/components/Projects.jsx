import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./common/Modal";

import bedroom1 from "../assets/projects/bedroom1.jpeg";
import kitchen1 from "../assets/projects/kitchen1.jpeg";
import livingroom1 from "../assets/projects/livingroom1.jpeg";

function Projects() {

  const projects = [
    {
      image: bedroom1,
      title: "Bedroom Interior",
      category: "Luxury Residential"
    },
    {
      image: kitchen1,
      title: "Kitchen Interior", 
      category: "Modern Design"
    },
    {
      image: livingroom1,
      title: "Living Room Interior",
      category: "Contemporary Living"
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section className="py-14 lg:py-22 bg-gradient-to-b from-cream/50 to-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">
            Our portfolio of luxury interior transformations
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -20,
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl hover:shadow-glow transition-all duration-500 cursor-pointer hover:-translate-y-2 border border-gray-50 hover:border-transparent"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative w-full h-[400px] lg:h-[450px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 lg:p-12">
                  <div className="text-white">
                    <h3 className="font-serif text-2xl lg:text-3xl font-light mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gold uppercase tracking-wider text-sm font-light">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        </div>
      </section>
      <AnimatePresence>
        {selectedProject && (
          <Modal 
            isOpen={true} 
            onClose={() => setSelectedProject(null)} 
            title={selectedProject.title}
          >
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title}
              className="w-full h-auto max-h-[70vh] object-contain rounded-xl shadow-2xl" 
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

export default Projects;

