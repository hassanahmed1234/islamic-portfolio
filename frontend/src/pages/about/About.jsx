import React from 'react';
import { Award, Terminal, Calendar, ArrowUpRight } from 'lucide-react';
import profileImg from '../../assets/hero3.jpg';


export default function AboutSection({ goldGradientStyle }) {
    // Stats data array jo code ko clean rakhega
    const stats = [
        { label: "Years of Experience", value: "5+" },
        { label: "SaaS Platforms & Apps", value: "10+" },
        { label: "Lectures & Seminars", value: "100+" },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-[#050A08]">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#111D17]/40 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Column: Visual Portrait Column (45% Width on Large Screens) */}
                    <div className="lg:col-span-5 relative group flex justify-center lg:justify-start">
                        {/* Outer Rotating/Hover Metallic Border Accent */}
                        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-[#1C2D23] opacity-70 group-hover:opacity-100 transition-all duration-500 blur-[2px]" />

                        {/* Main Image Container */}
                        <div className="relative w-full max-w-400px aspect-4/5 rounded-2xl overflow-hidden bg-[#111D17] border border-[#1C2D23] p-3">
                            <div className="w-full h-full rounded-xl bg-[#0C1411] overflow-hidden relative flex items-center justify-center border border-[#D4AF37]/10">

                                {/* Agar Aapki Real Image Ho Toh Yahan Use Karein, Warna Placeholder Active Hai */}
                                <img src={profileImg} alt="Hafiz Hassan Ahmed Qadri" className="w-full h-full object-cover" />



                                {/* Dark Gradient Overlay over image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050A08] via-transparent to-transparent opacity-60" />
                            </div>
                        </div>

                        {/* Floating Accent Badge */}
                        <div className="absolute -bottom-6 -right-2 md:right-6 bg-[#111D17] border border-[#D4AF37]/30 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 backdrop-blur-md">
                            <div className="w-10 h-10 rounded-lg bg-[#14261C] flex items-center justify-center text-[#D4AF37] border border-[#2D4A39]">
                                <Award size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Identity</p>
                                <p className="text-xs font-semibold text-white">Islamic Scholar</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Detailed Bio & Stats (55% Width on Large Screens) */}
                    <div className="lg:col-span-7 space-y-8 text-left">
                        <div className="space-y-3">
                            <span className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">My Story</span>
                            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">
                                Hafiz Hassan Ahmed Qadri
                            </h2>
                            <p className="text-sm font-medium text-[#D4AF37]/90 tracking-wide">
                                Islamic Speaker, Full-Stack Software Engineer & Content Creator
                            </p>
                        </div>

                        <div className="space-y-5 text-gray-400 text-sm sm:text-base leading-relaxed font-normal">
                            <p>
                                My mission has always been to build a meaningful bridge between Sacred Islamic Knowledge and Modern Technology. Alhamdulillah, alongside delivering Islamic lectures, educational programs, and structured learning modules to spread the message of faith, guidance, and righteous character, I also dedicate myself to the field of software engineering.              </p>
                            <p>
                                As a Software Engineer, I specialize in modern application development using technologies such as MERN Stack and React Native (Expo Ecosystem), with a strong focus on scalable architectures and premium user experiences. My experience includes designing multi-tenant SaaS platforms, including Academy Management Systems, as well as healthcare software solutions, where I strive to build technology that is ethical, purposeful, and beneficial to society.                            </p>
                        </div>

                        {/* Quick Context Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {['Islamic Fiqh & Seerah', 'Full-Stack Development', 'SaaS Architecture', 'Youth Mentorship'].map((tag, idx) => (
                                <span key={idx} className="text-xs bg-[#111D17] border border-[#1C2D23] text-gray-300 px-4 py-2 rounded-full font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <hr className="border-[#1C2D23] my-8" />

                        {/* Interactive/Animated Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 sm:gap-8">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="space-y-1 group cursor-pointer">
                                    <p className="text-2xl sm:text-4xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                                        {stat.value}
                                    </p>
                                    <p className="text-[11px] sm:text-xs text-gray-500 font-medium tracking-wide uppercase group-hover:text-gray-400 transition-colors duration-300">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}