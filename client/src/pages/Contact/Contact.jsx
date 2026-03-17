import { motion } from "framer-motion";
import PageHeader from "../../components/common/PageHeader";
import heroImage from "../../assets/hero/hero2.jpeg";

function Contact() {
  return (
<div className="bg-white min-h-screen pt-16 pb-0">
       <PageHeader 
        title="Contact Us" 
        subtitle="We Would Love To Hear From You" 
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3"
          >
            <div className="mb-12">
              <span className="text-gold uppercase tracking-[0.2em] font-semibold text-xs mb-4 block">Get In Touch</span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">Our Studio</h2>
              <p className="text-charcoal-light font-light leading-relaxed">
                Whether you are looking to redesign a single room or seeking comprehensive architectural interior services, our team is ready to bring your vision to life.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cream flex items-center justify-center shrink-0 rounded-sm text-gold">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-charcoal mb-1">Location</h4>
                  <p className="text-charcoal-light font-light text-sm">123 Luxury Avenue,<br />Design District, NY 10001</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cream flex items-center justify-center shrink-0 rounded-sm text-gold">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-charcoal mb-1">Phone</h4>
                  <p className="text-charcoal-light font-light text-sm">+1 (555) 123-4567<br />Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cream flex items-center justify-center shrink-0 rounded-sm text-gold">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-charcoal mb-1">Email</h4>
                  <p className="text-charcoal-light font-light text-sm">hello@muqasinterior.com<br />press@muqasinterior.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-sans font-semibold text-sm uppercase tracking-wider text-charcoal mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-stone flex items-center justify-center text-charcoal hover:bg-gold hover:text-white hover:border-gold transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 border border-stone flex items-center justify-center text-charcoal hover:bg-gold hover:text-white hover:border-gold transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 border border-stone flex items-center justify-center text-charcoal hover:bg-gold hover:text-white hover:border-gold transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/3 bg-cream p-8 md:p-12 lg:p-16 border border-stone"
          >
            <h3 className="font-serif text-2xl text-charcoal mb-8">Send Us A Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs uppercase tracking-widest font-semibold text-charcoal mb-2">First Name *</label>
                  <input type="text" id="firstName" className="w-full bg-white border border-stone px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm text-charcoal" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs uppercase tracking-widest font-semibold text-charcoal mb-2">Last Name *</label>
                  <input type="text" id="lastName" className="w-full bg-white border border-stone px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm text-charcoal" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest font-semibold text-charcoal mb-2">Email Address *</label>
                  <input type="email" id="email" className="w-full bg-white border border-stone px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm text-charcoal" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-semibold text-charcoal mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-white border border-stone px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm text-charcoal" />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-xs uppercase tracking-widest font-semibold text-charcoal mb-2">Inquiry Type *</label>
                <select id="inquiryType" className="w-full bg-white border border-stone px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm text-charcoal appearance-none rounded-none" required>
                  <option value="">Select an option</option>
                  <option value="residential">Residential Design</option>
                  <option value="commercial">Commercial Design</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest font-semibold text-charcoal mb-2">Message *</label>
                <textarea id="message" rows="5" className="w-full bg-white border border-stone px-4 py-3 focus:outline-none focus:border-gold transition-colors text-sm text-charcoal resize-none" required></textarea>
              </div>

              <button type="submit" className="w-full bg-charcoal text-white hover:bg-gold py-4 uppercase tracking-widest text-sm font-semibold transition-colors duration-300">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map or Image Section */}
      <section className="w-full h-[400px] lg:h-[500px] relative overflow-hidden">
        <img src={heroImage} alt="Our Studio Location" className="w-full h-full object-cover grayscale opacity-80" />
        <div className="absolute inset-0 bg-gold mix-blend-multiply opacity-20 pointer-events-none"></div> 
        <div className="absolute inset-x-0 bottom-0 top-0 flex items-center justify-center p-6">
           <div className="bg-white p-8 max-w-md w-full text-center shadow-luxury">
              <h3 className="font-serif text-2xl text-charcoal mb-2">Visit Our Studio</h3>
              <p className="text-charcoal-light text-sm font-light mb-6">By appointment only.</p>
              <a href="#" className="inline-block border-b-2 border-gold pb-1 text-sm uppercase tracking-widest font-semibold text-charcoal hover:text-gold transition-colors">
                Get Directions
              </a>
           </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;
