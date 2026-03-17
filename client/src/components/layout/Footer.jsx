import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-charcoal text-gold border-t border-charcoal-light pt-12 pb-6">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand Logo + Tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-3xl font-bold tracking-tight block mb-6 text-white">
              MUQA'S INTERIOR
            </Link>
            <p className="text-stone-dark mb-6 text-sm leading-relaxed font-light">
              Transforming spaces into timeless sanctuaries. Experience the art of premium luxury interior design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gold hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="text-gold hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.784c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.77 1.518 1.691 0 1.029-.652 2.567-.994 3.995-.283 1.194.599 2.169 1.776 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.56-5.418 5.207 0 1.031.397 2.14.893 2.739.1.115.083.345.083.345l-.333 1.359c-.053.22-.174.268-.403.161-1.495-.698-2.433-2.888-2.433-4.646 0-3.785 2.75-7.261 7.93-7.261 4.164 0 7.399 2.967 7.399 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.629-2.75-1.378l-.749 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.628 0 12-5.373 12-12S18.645 0 12.017 0z"/></svg>
              </a>
              <a href="#" className="text-gold hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-sans font-semibold mb-6 text-white uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm text-stone-dark font-light">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">Shop</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-sans font-semibold mb-6 text-white uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4 text-sm text-stone-dark font-light">
              <li><Link to="/services#residential" className="hover:text-gold transition-colors">Residential Design</Link></li>
              <li><Link to="/services#commercial" className="hover:text-gold transition-colors">Commercial Spaces</Link></li>
              <li><Link to="/services#3d" className="hover:text-gold transition-colors">3D Visualization</Link></li>
              <li><Link to="/services#consultation" className="hover:text-gold transition-colors">Design Consultation</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-sans font-semibold mb-6 text-white uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-4 text-sm text-stone-dark font-light">
              <li className="flex gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>123 Luxury Avenue, Design District, NY 10001</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>hello@muqasinterior.com</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Mon-Sat: 10AM - 8PM</span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-charcoal-light flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-dark font-light">
          <p>© {new Date().getFullYear()} MUQA'S INTERIOR. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

