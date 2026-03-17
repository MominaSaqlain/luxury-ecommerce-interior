import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import PageHeader from "../../components/common/PageHeader";

import hero1 from "../../assets/hero/hero1.jpeg";
import hero2 from "../../assets/hero/hero2.jpeg";
import aboutBg from "../../assets/headers/about.jpg"; // ✅ NEW

const team = [
  {
    name: "Eleanor Vance",
    role: "Founder & Lead Designer",
    specialty: "Luxury Residential & Heritage Restoration",
    bio: "With over 15 years in luxury design, Eleanor's aesthetic blends classical proportions with contemporary restraint.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&fit=crop"
  },
  {
    name: "Marcus Chen",
    role: "Senior Architect",
    specialty: "Modern Minimalism & Spatial Planning",
    bio: "Marcus brings architectural rigor to our interior projects, ensuring every space flows perfectly before finishes are applied.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&fit=crop"
  },
  {
    name: "Isabella Rossi",
    role: "Design Director",
    specialty: "Color Theory & Bespoke Furnishings",
    bio: "Isabella's background in fine arts informs her incredible eye for color palettes, textures, and custom furniture curation.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&fit=crop"
  }
];

const milestones = [
  { year: "2010", title: "The Beginning", text: "Founded in a small downtown studio by Eleanor Vance." },
  { year: "2014", title: "First Major Award", text: "Won the 'Architectural Digest Emerging Designer' award." },
  { year: "2018", title: "Studio Expansion", text: "Moved into our current 5,000 sq ft design headquarters and showroom." },
  { year: "2023", title: "International Reach", text: "Completed our first international resort project in the Maldives." }
];

function About() {
  return (
    <div className="bg-white min-h-screen pt-28 lg:pt-32"> {/* ✅ FIXED SPACING */}

      {/* ✅ FIXED HEADER */}
      <PageHeader 
        title="Our Story" 
        subtitle="Crafting Timeless Sanctuaries Since 2010"
        bgImage={aboutBg}
      />
      

      

      {/* Mission */}
       <section className="mt-20 lg:mt-28 max-w-4xl mx-auto px-6 lg:px-12 text-center mb-24 lg:mb-32">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <span className="text-gold uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">The Mission</span>
          
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8 leading-relaxed">
            "To elevate the human experience by crafting environments that are as profoundly functional as they are breathtakingly beautiful."
          </h2>

          <div className="w-16 h-1 bg-gold mx-auto mb-8"></div>

          <div className="space-y-6 text-charcoal/70 font-light text-lg"> {/* ✅ FIX */}
            <p>
              Muqa's Interior was born from a simple belief: your environment deeply impacts your quality of life.
            </p>
            <p>
              We create homes that feel like true sanctuaries away from the noise of the world.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Team */}
      <section className="bg-cream py-24 lg:py-32 border-y border-stone">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.2em] text-xs mb-4 block">The Talent</span>
            <h2 className="font-serif text-4xl text-charcoal">Meet the Designers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer transition-all duration-300 hover:-translate-y-2" // ✅ FIX
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 relative rounded-xl">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>

                <h3 className="font-serif text-2xl text-charcoal mb-1">{member.name}</h3>
                <p className="text-gold text-xs mb-3">{member.role}</p>
                <p className="text-charcoal/60 text-sm mb-3">{member.specialty}</p>
                <p className="text-charcoal/70 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-12">
         <div className="flex flex-col lg:flex-row gap-16 items-center">

            <div className="w-full lg:w-1/2">
                <span className="text-gold uppercase text-xs mb-4 block">Our History</span>
                <h2 className="font-serif text-4xl text-charcoal mb-10">A Legacy of Excellence</h2>

                <div className="space-y-6">
                  {milestones.map((item, index) => (
                    <div key={index} className="border-l-2 border-gold pl-6">
                      <h4 className="font-serif text-lg">{item.year} — {item.title}</h4>
                      <p className="text-charcoal/70 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
            </div>

            <div className="w-full lg:w-1/2">
               <img src={hero2} className="w-full h-full object-cover rounded-2xl shadow-xl" />
            </div>

         </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-center py-24 px-6">
        <h2 className="font-serif text-3xl text-white mb-6">Want to join our journey?</h2>
        <p className="text-white/70 mb-8">We are always looking for passionate designers.</p>

        <Link 
          to="/contact" 
          className="border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-white transition-all"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
}

export default About;