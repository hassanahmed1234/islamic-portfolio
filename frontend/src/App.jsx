import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';




import HomePage from './pages/home/HomePage';
import Navbar from './components/Navbar';
import AboutSection from './pages/about/About';
import GalleryScreen from './pages/gallery/Gallery';
import ContactScreen from './pages/contact/Contact';
import PremiumFooter from './components/Footer';

export default function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/gallery" element={<GalleryScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
      <PremiumFooter/>
    </>

  );
}