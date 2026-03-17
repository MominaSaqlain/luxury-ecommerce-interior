import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

import render1 from "../../assets/renders/render1.jpeg";
import render2 from "../../assets/renders/render2.jpeg";
import render3 from "../../assets/renders/render3.jpeg";

import interiorVideo from "../../assets/videos/interior-walkthrough.mp4";
import projectVideo from "../../assets/videos/project-tour.mp4";
import renderVideo from "../../assets/videos/render-animation.mp4";

function RenderGallery() {

  const renders = [
    { src: render1, title: "Luxury Penthouse", subtitle: "3D Visualization" },
    { src: render2, title: "Contemporary Villa", subtitle: "Photorealistic Render" },
    { src: render3, title: "Modern Apartment", subtitle: "Interior Visualization" },

    { type: "video", src: interiorVideo, poster: render1, title: "Interior Walkthrough", subtitle: "3D Video Tour" },
    { type: "video", src: projectVideo, poster: render2, title: "Project Tour", subtitle: "Video Presentation" },
    { type: "video", src: renderVideo, poster: render3, title: "Render Animation", subtitle: "3D Animation" }
  ];

  const [selectedRender, setSelectedRender] = useState(null);

  return (
    <div className="py-24 lg:py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 lg:mb-32"
        >
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light text-charcoal mb-6">
            3D Renders
          </h2>

          <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">
            Photorealistic visualizations bringing concepts to life
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          {renders.map((render, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
              onClick={() => setSelectedRender(render)}
            >

              <div className="relative w-full h-[450px]">

                {render.type === "video" ? (
                  <video
                    poster={render.poster}
                    className="w-full h-full object-cover"
                  >
                    <source src={render.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={render.src}
                    alt={render.title}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end p-8">

                  <div>
                    <h3 className="text-white text-2xl font-serif">
                      {render.title}
                    </h3>

                    <p className="text-gray-300 text-sm">
                      {render.subtitle}
                    </p>
                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

      {/* Modal */}
      <AnimatePresence>

        {selectedRender && (

          <Modal
            isOpen={true}
            onClose={() => setSelectedRender(null)}
            title={selectedRender.title}
          >

            {selectedRender.type === "video" ? (

              <video
                src={selectedRender.src}
                autoPlay
                controls
                className="w-full max-h-[70vh] object-contain"
              />

            ) : (

              <img
                src={selectedRender.src}
                alt={selectedRender.title}
                className="w-full max-h-[70vh] object-contain"
              />

            )}

          </Modal>

        )}

      </AnimatePresence>

    </div>
  );
}

export default RenderGallery;