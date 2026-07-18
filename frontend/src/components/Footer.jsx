import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import LOGO from '../assets/LOGO.png';

import { Mail, Calendar, Code, Linkedin, Facebook, Youtube, MessageCircle,Instagram } from 'lucide-react';



export default function PremiumFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050A08] border-t border-[#14261C] pt-10 pb-10 relative overflow-hidden">
            {/* Structural Ambient Background Light */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-400px h-200px bg-[#D4AF37]/3 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-6">

                {/* Top Segment: Architecture Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-4">

                    {/* Column 1: Core Brand Identity (Takes 6 cols) */}
                    <div className="md:col-span-6 space-y-4 text-left">
    <div className="space-y-3">
        {/* BRAND LOGO IMAGE PLACEHOLDER */}
        <div className="w-28 sm:w-32 h-12  flex items-center justify-start overflow-hidden mb-2">
            <img
                src={LOGO}
                alt="HAQ Branding Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                onError={(e) => {
                    e.target.style.display = "none";
                }}
            />
        </div>

        {/* Name and Tagline */}
        <div className="space-y-1">
            <h3 className="text-lg font-bold tracking-tight text-white">
                Hafiz Hassan Ahmed Qadri
            </h3>
            <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-[0.15em]">
                Islamic Speaker & Full-Stack Engineer
            </p>
        </div>
    </div>
    
    <p className="text-xs text-gray-400 max-w-sm leading-relaxed font-normal">
        Empowering lives through authentic Islamic knowledge and purposeful technology.
    </p>
    
    <div className="inline-flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
        <span>From Karachi, Pakistan</span>
    </div>
</div>

                    {/* Column 2: Navigation Directory (Takes 3 cols) */}
                    <div className="md:col-span-3 space-y-4 text-left">
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest border-l-2 border-[#D4AF37] pl-2">
                            Links
                        </h4>
                        <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
                            <li>
                                <Link to="/" className="hover:text-[#D4AF37] transition-colors duration-200 flex items-center gap-1 group">
                                    Home <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-[#D4AF37] transition-colors duration-200 flex items-center gap-1 group">
                                    About Journey <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>

                            <li>
                                <Link to="/gallery" className="hover:text-[#D4AF37] transition-colors duration-200 flex items-center gap-1 group">
                                    Media & Portfolio <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Professional Consultation Paths (Takes 3 cols) */}
                    <div className="md:col-span-3 space-y-6 text-left">
                        {/* Official Channels Block */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-l-2 border-[#D4AF37] pl-2">
                                Social Links
                            </h4>

                        </div>

                        {/* Premium Social Handles Link Block */}
                        <div className="space-y-3 pt-2">

                            <div className="flex items-center gap-2.5">
                                {/* LinkedIn Profile */}
                                <a
                                    href="https://www.facebook.com/hafizhassan.qadri.9" // Replace with real URL
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-lg bg-[#111D17] border border-[#1C2D23] flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                                    title="Facebook Profile"
                                >
                                    <Facebook size={14} />
                                </a>

                                {/* Facebook Profile */}
                              

                                {/* Instagram Profile */}
                                <a
                                    href="https://instagram.com/hafizhassan_talks" // Replace with your real Instagram handle
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-lg bg-[#111D17] border border-[#1C2D23] flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                                    title="Instagram Profile"
                                >
                                    <Instagram size={14} />
                                </a>


                                {/* YouTube Channel */}
                                <a
                                    href="https://www.youtube.com/@hafizhassantalks" // Replace with real URL
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-lg bg-[#111D17] border border-[#1C2D23] flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                                    title="YouTube Media Channel"
                                >
                                    <Youtube size={14} />
                                </a>

                                {/* WhatsApp Immediate Sync */}
                                <a
                                    href="https://wa.me/923172018866"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-lg bg-[#111D17] border border-[#1C2D23] flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                                    title="Direct WhatsApp Messenger"
                                >
                                    <MessageCircle size={14} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Segment: Thin Legal Border Layer */}
                <div className="border-t border-[#14261C] pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

                    {/* Copyright Legal Block */}
                    <div className="text-center sm:text-left space-y-0.5">
                        <p className="text-xs text-gray-500 font-normal">
                            &copy; {currentYear} <span className="text-gray-300 font-medium">Hafiz Hassan Ahmed Qadri</span>. All rights reserved.
                        </p>
                        <p className="text-[10px] text-gray-600">
                            Dedicated to spreading authentic Islamic knowledge with wisdom and sincerity.
                        </p>
                    </div>

                    {/* Regulatory / Compliance Links */}

                </div>

            </div>
        </footer>
    );
}