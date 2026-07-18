import React from 'react';
import { MessageSquare, Calendar, Code, ArrowUpRight, Mail, Clock, Globe } from 'lucide-react';

export default function ContactScreen({ goldGradientStyle }) {
    // Helper function to safely encode dynamic WhatsApp strings
    const createWhatsAppLink = (message) => {
        return `https://wa.me/923172018866?text=${encodeURIComponent(message)}`;
    };

    return (
        <main className="min-h-screen bg-[#050A08] pt-32 pb-24 relative overflow-hidden flex items-center">
            {/* Structural Glass Radial Backdrops */}
            <div className="absolute top-1/3 left-1/4 w-600px h-600px bg-[#D4AF37]/3 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-0 right-10 w-500px h-500px bg-[#111D17]/60 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

                    {/* LEFT AREA: Integrated Corporate Identity (5 Columns) */}
                    <div className="lg:col-span-5 bg-[#111D17]/30 border border-[#1C2D23] rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-12 backdrop-blur-md">

                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#14261C] border border-[#2D4A39]/60">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Availability Live</span>
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">
                                    Let's Connect
                                </h1>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    I'm honored to connect with you. Select your inquiry below, and we'll continue the conversation on WhatsApp.                                </p>
                            </div>
                        </div>

                        {/* Core Metadata Block */}
                        <div className="space-y-5 pt-6 border-t border-[#1C2D23]/60">
                            <div className="flex items-center gap-3.5 group">
                                <div className="w-9 h-9 rounded-xl bg-[#111D17] border border-[#1C2D23] flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37]/30 transition-colors">
                                    <Mail size={14} />
                                </div>
                                <a href="mailto:info@hassanahmedqadri.com" className="text-xs text-gray-400 hover:text-white transition-colors font-semibold tracking-wide">
                                    hafizhassanahmedqadri123@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center gap-3.5">
                                <div className="w-9 h-9 rounded-xl bg-[#111D17] border border-[#1C2D23] flex items-center justify-center text-[#D4AF37]">
                                    <Globe size={14} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-300">Based in Karachi, Pakistan</p>
                                    <p className="text-[10px] text-gray-500 mt-0.5">Available for regional & international travel</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT AREA: Geometric Bento Block Modules (7 Columns) */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">

                        {/* Box 1: Islamic Seminars Keynote Block */}
                        <a
                            href={createWhatsAppLink("Assalamu Alaikum Hafiz Hassan Ahmed Qadri, I would like to initiate a formal booking discussion for an upcoming seminar / speaking event.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sm:col-span-2 bg-[#111D17]/40 border border-[#1C2D23] hover:border-[#D4AF37]/30 rounded-3xl p-8 transition-all duration-300 group flex flex-col justify-between gap-8 cursor-pointer hover:-translate-y-1 relative overflow-hidden backdrop-blur-sm"
                        >
                            <div className="flex justify-between items-start z-10">
                                <div className="w-12 h-12 rounded-2xl bg-[#14261C] border border-[#2D4A39]/60 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500 shadow-inner">
                                    <Calendar size={20} />
                                </div>
                                <div className="w-8 h-8 rounded-full bg-[#050A08]/80 border border-[#1C2D23] flex items-center justify-center text-gray-500 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/20 group-hover:rotate-45 transition-all duration-300">
                                    <ArrowUpRight size={14} />
                                </div>
                            </div>
                            <div className="space-y-2 z-10 text-left">
                                <h3 className="text-lg font-bold text-white tracking-wide">Islamic Lectures & Keynotes</h3>
                                <p className="text-xs text-gray-400 leading-relaxed max-w-xl">
                                    Choose the purpose of your inquiry below. Whether you're inviting me for a lecture, planning an event, or seeking collaboration, each option opens a pre-filled WhatsApp message for a smooth and convenient conversation.                               </p>
                            </div>
                        </a>

                        {/* Box 2: Full-Stack Consulting Module */}
                        <a
                            href={createWhatsAppLink("Assalamu Alaikum Hassan Bhai, I am planning an enterprise product development and want to lock a tech architecture consultation window.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#111D17]/40 border border-[#1C2D23] hover:border-[#D4AF37]/30 rounded-3xl p-8 transition-all duration-300 group flex flex-col justify-between gap-12 cursor-pointer hover:-translate-y-1 backdrop-blur-sm"
                        >
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-2xl bg-[#14261C] border border-[#2D4A39]/60 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                                    <Code size={20} />
                                </div>
                                <div className="w-8 h-8 rounded-full bg-[#050A08]/80 border border-[#1C2D23] flex items-center justify-center text-gray-500 group-hover:text-[#D4AF37] group-hover:rotate-45 transition-all duration-300">
                                    <ArrowUpRight size={14} />
                                </div>
                            </div>
                            <div className="space-y-1.5 text-left">
                                <h3 className="text-base font-bold text-white tracking-wide">Tech Architecture & SaaS</h3>
                                <p className="text-[11px] text-gray-400 leading-relaxed">
                                    Full-stack system modeling, high-load MERN applications data layers, and native Expo components development consultations.
                                </p>
                            </div>
                        </a>

                        {/* Box 3: General Operations / Networking Module */}
                        <a
                            href={createWhatsAppLink("Assalamu Alaikum, I just went through your digital portfolio and wanted to establish a general professional connection with you.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#111D17]/40 border border-[#1C2D23] hover:border-[#D4AF37]/30 rounded-3xl p-8 transition-all duration-300 group flex flex-col justify-between gap-12 cursor-pointer hover:-translate-y-1 backdrop-blur-sm"
                        >
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-2xl bg-[#14261C] border border-[#2D4A39]/60 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                                    <MessageSquare size={20} />
                                </div>
                                <div className="w-8 h-8 rounded-full bg-[#050A08]/80 border border-[#1C2D23] flex items-center justify-center text-gray-500 group-hover:text-[#D4AF37] group-hover:rotate-45 transition-all duration-300">
                                    <ArrowUpRight size={14} />
                                </div>
                            </div>
                            <div className="space-y-1.5 text-left">
                                <h3 className="text-base font-bold text-white tracking-wide">General Communication</h3>
                                <p className="text-[11px] text-gray-400 leading-relaxed">
                                    Collaboration requests for cross-platform digital media content creations, media podcast panels, or dropping a professional networking salam.
                                </p>
                            </div>
                        </a>

                    </div>

                </div>
            </div>
        </main>
    );
}