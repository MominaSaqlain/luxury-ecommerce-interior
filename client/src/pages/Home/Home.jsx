import { motion } from "framer-motion";
import Hero from "../../components/home/Hero";
import BrandStory from "../../components/home/BrandStory";
import HowItWorks from "../../components/home/HowItWorks";
import FeaturedProjects from "../../components/home/FeaturedProjects";
import ServicesOverview from "../../components/home/ServicesOverview";
import VideoShowcase from "../../components/home/VideoShowcase";
import TestimonialsCarousel from "../../components/home/TestimonialsCarousel";
import StatisticsCounter from "../../components/home/StatisticsCounter";
import GalleryFeed from "../../components/home/GalleryFeed";
import CallToAction from "../../components/home/CallToAction";

function Home() {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className="flex-1"
    >
      <Hero />
      <BrandStory />
      <HowItWorks />
      <FeaturedProjects />
      <ServicesOverview />
      <VideoShowcase />
      <TestimonialsCarousel />
      <StatisticsCounter />
      <GalleryFeed />
      <CallToAction />
    </motion.main>
  );
}

export default Home;