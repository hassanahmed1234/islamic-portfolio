import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LOGO from '../assets/LOGO.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Premium Gold Gradient Style
    const goldGradientStyle = {
        background: 'linear-gradient(135deg, #D4AF37 0%, #AA7C11 100%)',
    };

    // Helper to check active route
    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B120F]/85 backdrop-blur-md border-b border-[#1C2C24] transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* LOGO */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-28 sm:w-36 h-14 sm:h-16 flex items-center justify-start overflow-hidden">
                        <Link to="/">
                            <img
                                src={LOGO}
                                alt="HAQ Branding Logo"
                                className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300 ease-out"
                                onError={(e) => {
                                    e.target.style.display = "none";
                                }}
                            />
                        </Link>
                    </div>
                </div>

                {/* DESKTOP LINKS */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-medium transition-all duration-300 relative py-1 ${
                                isActive(link.path)
                                    ? 'text-[#D4AF37]'
                                    : 'text-gray-300 hover:text-[#D4AF37]'
                            }`}
                        >
                            {link.name}
                            {/* Bottom subtle glow underline on active/hover */}
                            <span
                                className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] rounded-full transition-transform duration-300 origin-left ${
                                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                                }`}
                            />
                        </Link>
                    ))}

                    {/* Get in Touch Button */}
                    <Link
                        to="/contact"
                        style={goldGradientStyle}
                        className="px-6 py-2.5 text-sm font-semibold rounded-full text-black hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 inline-block text-center"
                    >
                        Get in Touch
                    </Link>
                </div>

                {/* MOBILE HAMBURGER BUTTON */}
                <button
                    className="md:hidden text-gray-300 hover:text-[#D4AF37] p-2 transition-colors cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Navigation"
                >
                    {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* MOBILE DROPDOWN MENU */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#0C1612]/95 backdrop-blur-lg border-b border-[#1C2C24] py-6 px-6 space-y-4 flex flex-col text-left transition-all duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-base font-medium transition-colors py-1 ${
                                isActive(link.path) ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-[#D4AF37]'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        to="/contact"
                        style={goldGradientStyle}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-center py-3 rounded-xl text-black font-semibold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-98 transition-all"
                    >
                        Get in Touch
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;