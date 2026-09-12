import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileStickyBar from './components/MobileStickyBar';
import BookingModal from './components/BookingModal';
import Toast from './components/Toast';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import LalKitab from './pages/LalKitab';
import Remedies from './pages/Remedies';
import Numerology from './pages/Numerology';
import Gemology from './pages/Gemology';
import Vastu from './pages/Vastu';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/lal-kitab" element={<LalKitab />} />
          <Route path="/remedies" element={<Remedies />} />
          <Route path="/numerology" element={<Numerology />} />
          <Route path="/gemology" element={<Gemology />} />
          <Route path="/vastu" element={<Vastu />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyBar />
        <BookingModal />
        <Toast />
      </BookingProvider>
    </BrowserRouter>
  );
}
