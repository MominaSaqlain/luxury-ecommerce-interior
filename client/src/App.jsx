import { Routes, Route, Navigate } from "react-router-dom";

import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Success from "./pages/Checkout/Success";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import ProjectsPage from "./pages/Projects/Projects";
import ServicesPage from "./pages/Services/Services";
import GalleryPage from "./pages/Gallery/Gallery";
import RendersPage from "./pages/Renders/Renders";
import StyleQuiz from "./pages/StyleQuiz/StyleQuiz";

function App() {
  return (
    <div className="bg-cream min-h-screen font-sans flex flex-col">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 pt-20 lg:pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/style-quiz" element={<StyleQuiz />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/renders" element={<RendersPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/collections" element={<Navigate to="/shop" />} />
          <Route path="/inspiration" element={<Navigate to="/portfolio" />} />
          <Route path="/get-started" element={<Navigate to="/contact" />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/portfolio" element={<ProjectsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;