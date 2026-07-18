import React, { useState } from 'react'
import { BookOpen, Video, Users, ArrowRight, MessageSquare, Menu, X, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/LOGO.png';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Premium Gold Gradient Style
    const goldGradientStyle = {
        background: 'linear-gradient(135deg, #D4AF37 0%, #AA7C11 100%)',
    };

    // Text Gold Gradient Style
    const textGoldGradientStyle = {
        background: 'linear-gradient(90deg, #FFFFFF 0%, #F0E6D2 50%, #D4AF37 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B120F]/80 backdrop-blur-md border-b border-[#1C2C24]">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                <div className="flex items-center gap-3 group cursor-pointer">
                    {/* Logo Image Master Container - Width increased for premium visibility */}
                    <div className="w-28 sm:w-36 h-14 sm:h-16 flex items-center justify-start overflow-hidden">
                        <img
                            src={LOGO}
                            alt="HAQ Branding Logo"
                            className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] group-hover:scale-102 transition-transform duration-500 ease-out"
                            onError={(e) => {
                                e.target.style.display = "none";
                            }}
                        />
                    </div>
                </div>

                {/* 2. DESKTOP LINKS NAVIGATION CONTAINER */}
                <div className="hidden md:flex items-center space-x-8">
                    {/* Home Link */}
                    <Link to="/" className="text-sm font-medium text-white hover:text-[#D4AF37] transition-colors duration-300">
                        Home
                    </Link>

                    {/* About Link */}
                    <Link to="/about" className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                        About
                    </Link>

                    {/* Media Gallery Link */}
                    <Link to="/gallery" className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                        Gallery
                    </Link>

                    {/* Get in Touch Button/Link */}
                    <Link
                        to="/contact"
                        style={goldGradientStyle}
                        className="px-5 py-2 text-sm font-semibold rounded-full text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 inline-block"
                    >
                        Get in Touch
                    </Link>
                </div>

                {/* 3. MOBILE HAMBURGER CONTROL ACTION BUTTON */}
                <button
                    className="md:hidden text-gray-400 hover:text-white cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* 4. MOBILE DROPDOWN LINKS PANEL OVERLAY */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#0C1612] border-b border-[#1C2C24] py-6 px-6 space-y-4 flex flex-col text-left">
                    <Link to="/" className="text-base font-medium text-white hover:text-[#D4AF37] transition-colors">Home</Link>
                    <Link to="/about" className="text-base font-medium text-white hover:text-[#D4AF37] transition-colors">About</Link>
                    <Link to="/gallery" className="text-base font-medium text-white hover:text-[#D4AF37] transition-colors">Gallery</Link>

                    <Link to="/contact" style={goldGradientStyle} className="block text-center py-2.5 rounded-lg text-black font-semibold">
                        Get in Touch
                    </Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar