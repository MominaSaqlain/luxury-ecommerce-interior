import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../../assets/projects/bedroom1.jpeg";
import img2 from "../../assets/renders/render1.jpeg";
import img3 from "../../assets/projects/kitchen1.jpeg";
import img4 from "../../assets/renders/render2.jpeg";
import img5 from "../../assets/projects/livingroom1.jpeg";
import img6 from "../../assets/renders/render3.jpeg";

const projects = [
  { id: 1, image: img1, title: "Modern Serenity Bedroom", category: "Modern Bedroom", height: "h-[450px]" },
  { id: 2, image: img2, title: "Luxe Penthouse Lounge", category: "Contemporary Living", height: "h-[320px]" },
  { id: 3, image: img3, title: "Monochrome Culinary Space", category: "Luxury Kitchen", height: "h-[450px]" },
  { id: 4, image: img4, title: "Organic Modern Dining", category: "Dining Room", height: "h-[320px]" },
  { id: 5, image: img5, title: "Minimalist Living Area", category: "Contemporary Living", height: "h-[450px]" },
  { id: 6, image: img6, title: "Bespoke Home Office", category: "Home Office", height: "h-[320px]" }
];

function FeaturedProjects() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal text-white relative">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-gold uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">Portfolio</span>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">Our Latest Masterpieces</h2>
            <p className="text-stone-dark font-light leading-relaxed text-lg">
              Explore a curated selection of our finest completed projects and conceptual renders, each demonstrating our commitment to unparalleled luxury and design excellence.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              to="/portfolio"
              className="inline-flex items-center gap-3 text-gold uppercase tracking-widest text-sm font-semibold hover:text-white transition-colors group pb-2 border-b border-gold/30 hover:border-gold"
            >
              View All Projects
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Masonry Grid Simulation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <ProjectCard project={projects[0]} delay={0.1} />
            <ProjectCard project={projects[1]} delay={0.2} />
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:mt-16">
            <ProjectCard project={projects[2]} delay={0.3} />
            <ProjectCard project={projects[3]} delay={0.4} />
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:-mt-16">
            <ProjectCard project={projects[4]} delay={0.5} />
            <ProjectCard project={projects[5]} delay={0.6} />
          </div>
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`relative group overflow-hidden bg-charcoal-light w-full ${project.height}`}
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter group-hover:brightness-75"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-2 block">
            {project.category}
          </span>
          <h3 className="font-serif text-2xl text-white mb-4">
            {project.title}
          </h3>
          <Link 
            to={`/portfolio`} 
            className="inline-block border border-white/50 px-6 py-2 text-sm uppercase tracking-widest text-white hover:bg-white hover:text-charcoal transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedProjects;
