import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./common/Modal";

import decor1 from "../assets/gallery/decor1.jpeg";
import sofa1 from "../assets/gallery/sofa1.jpeg";
import wallart1 from "../assets/gallery/wallart1.jpeg";

import interiorVideo from "../assets/videos/interior-walkthrough.mp4";
import projectVideo from "../assets/videos/project-tour.mp4";
import renderVideo from "../assets/videos/render-animation.mp4";

function Gallery() {

  const images = [
    { src: decor1, title: "Decorative Elements", category: "Accessories" },
    { src: sofa1, title: "Modular Sofa System", category: "Seating" },
    { src: wallart1, title: "Statement Wall Art", category: "Art & Decor" },

    { type: "video", src: interiorVideo, poster: sofa1, title: "Interior Walkthrough", category: "Video Tour" },
    { type: "video", src: projectVideo, poster: decor1, title: "Project Tour", category: "Video Presentation" },
    { type: "video", src: renderVideo, poster: wallart1, title: "Render Animation", category: "3D Video" }
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onClick={() => setSelectedImage(image)}
            >

              {image.type === "video" ? (
                <video
                  poster={image.poster}
                  className="w-full h-[300px] object-cover"
                >
                  <source src={image.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-[300px] object-cover"
                />
              )}

              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">{image.title}</h3>
                <p className="text-gray-500 text-sm">{image.category}</p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>

      <AnimatePresence>

        {selectedImage && (
          <Modal
            isOpen={true}
            onClose={() => setSelectedImage(null)}
            title={selectedImage.title}
          >

            {selectedImage.type === "video" ? (
              <video
                src={selectedImage.src}
                autoPlay
                controls
                className="w-full h-auto max-h-[70vh] object-contain"
              >
                <source src={selectedImage.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            )}

          </Modal>
        )}

      </AnimatePresence>

    </section>
  );
}

export default Gallery;