import React, { useState } from 'react';
import { BookOpen, Video, Users, ArrowRight, MessageSquare, Menu, X, Play, Code, Cpu, Globe, GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import profileImg from '../../assets/hero1.png';
import ContactSection from '../../components/Contact';
import PremiumFooter from '../../components/Footer';
import { Link } from 'react-router-dom';
import HomeImageGrid from '../../components/Grid';
// and use: src={profileImg}

export default function HomePage() {
    const [isPlaying, setIsPlaying] = useState(false);

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
        <div className="min-h-screen bg-[#0B120F] text-[#E4E9E6] font-sans selection:bg-[#D4AF37] selection:text-black">



            {/* 2. HERO SECTION */}
            <section id="home" className="relative pt-32 pb-20 lg:pt-28 lg:pb-18 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-500px h-500px bg-[#163526]/30 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-10 left-1/4 w-300px h-300px bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#14261C] border border-[#234030] text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">
                                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                                Welcome to the Official Platform
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight text-white leading-tight">
                                Hafiz Hassan <br />
                                <span style={textGoldGradientStyle} className="font-bold">
                                    Ahmed Qadri
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl text-gray-400 font-medium tracking-wide">
                                Islamic Speaker <span className="text-[#D4AF37]">|</span> Educator <span className="text-[#D4AF37]">|</span> Software Engineer
                            </p>

                            <p className="text-gray-400 leading-relaxed max-w-xl text-sm sm:text-base">
                                Connecting hearts with the eternal beauty of Islamic wisdom. Empowering the youth with authentic modern education balanced with deep spiritual consciousness, straight from Karachi, Pakistan.
                            </p>

                            <div className="pt-4 flex flex-wrap gap-4">
                                <Link to="/contact"
                                    style={goldGradientStyle}

                                    className="px-8 py-3.5 rounded-full text-black font-bold tracking-wide hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 flex items-center gap-2 group"
                                >
                                    Get In Touch
                                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <a href="http://www.youtube.com/@hafizhassantalks" className="px-8 py-3.5 rounded-full bg-[#111D17] border border-[#234030] text-white hover:bg-[#162A20] transition-all duration-300 font-semibold tracking-wide">
                                    Watch Lectures
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex justify-center">
                            <div className="relative group">
                                {/* Glowing outline effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#1C2C24] rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-1000"></div>

                                <div className="relative w-280px h-380px sm:w-340px sm:h-460px bg-[#111D17] border border-[#2B4638] rounded-2xl overflow-hidden flex flex-col justify-between p-8">
                                    {/* Top Islamic Geometric Frame */}


                                    {/* --- IMAGE CONTAINER --- */}
                                    <div className="my-auto py-4 flex justify-center">
                                        <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-[#D4AF37]/60 shadow-[0_0_25px_rgba(212,175,55,0.2)]">
                                            <img
                                                src={profileImg} // <-- APNI IMAGE PATH YA URL YAHAIN LAGAEN
                                                alt="Hafiz Hassan Ahmed Qadri"
                                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                    {/* ----------------------- */}

                                    {/* Bottom Text Card */}
                                    <div className="bg-[#0B120F]/90 border border-[#234030] p-4 rounded-xl text-center">
                                        <p className="text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">Hafiz Hassan Ahmed Qadri</p>
                                        <p className="text-[11px] text-gray-400 mt-0.5">Karachi, Pakistan</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. ABOUT HIGHLIGHT */}
            <section id="about" className="py-20 bg-[#080E0C] border-y border-[#14231B]">
                <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
                    <p className="text-xs font-bold tracking-[0.25em] text-[#D4AF37] uppercase">My Mission</p>
                    <h2 className="text-2xl sm:text-4xl font-serif font-light text-white leading-relaxed">
                        Delivering profound spiritual truths with clarity, inspiring minds to understand Islam rationally, and shaping character with modern tools.
                    </h2>
                    <div className="w-20 h-1px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        Based in Karachi, Pakistan, I dedicate my life to making sacred Islamic knowledge accessible and relevant to our young, tech-savvy generation. Through interactive lectures, customized educational curricula, and high-impact digital media, I bridge the gap between tradition and modernity.
                    </p>
                </div>
            </section>


            {/* 4. CORE PILLARS (SERVICES) */}
            <section id="pillars" className="py-24 relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* Section Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <span className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase">Areas of Action</span>
                        <h2 className="text-3xl sm:text-4xl font-semibold text-white">How I Serve the Ummah & Industry</h2>
                        <p className="text-gray-400 text-sm">
                            Bridging the gap between sacred Islamic values, modern education, and cutting-edge technology.
                        </p>
                    </div>

                    {/* 6-Card Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Card 1: Islamic Speaker */}
                        <div className="bg-[#111D17] border border-[#1C2D23] rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300 group hover:-translate-y-2 flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-[#14261C] border border-[#2D4A39] flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Islamic Speaker</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Inspiring and informative bayans, seminars, and conferences addressing contemporary issues in the light of the Quran & Sunnah.
                                </p>
                            </div>

                        </div>

                        {/* Card 2: Educator */}
                        <div className="bg-[#111D17] border border-[#1C2D23] rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300 group hover:-translate-y-2 flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-[#14261C] border border-[#2D4A39] flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                                    <BookOpen size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Educator</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Providing structured modules in Fiqh, Seerah, Tajweed, and Islamic History tailored elegantly for teenagers, adults, and professionals.
                                </p>
                            </div>

                        </div>

                        {/* Card 3: Content Creator */}
                        <div className="bg-[#111D17] border border-[#1C2D23] rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300 group hover:-translate-y-2 flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-[#14261C] border border-[#2D4A39] flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                                    <Video size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Content Creator</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Creating high-quality short reels, video podcasts, and social media reminders to spread positive values across global digital mediums.
                                </p>
                            </div>

                        </div>

                        {/* Card 4: Software Engineering */}
                        <div className="bg-[#111D17] border border-[#1C2D23] rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300 group hover:-translate-y-2 flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-[#14261C] border border-[#2D4A39] flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                                    <Code size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Full-Stack Engineer</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Designing and engineering robust multi-tenant SaaS platforms, modern web apps, and native mobile apps using the MERN stack and Expo.
                                </p>
                            </div>

                        </div>

                        {/* Card 5: Tech Mentorship */}
                        <div className="bg-[#111D17] border border-[#1C2D23] rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300 group hover:-translate-y-2 flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-[#14261C] border border-[#2D4A39] flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                                    <Cpu size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Tech & AI Mentorship</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Guiding young minds and tech aspirants to master programming logic, modern system architecture, and ethical tech solutions.
                                </p>
                            </div>

                        </div>

                        {/* Card 6: Digital Halal Ecosystems */}
                        <div className="bg-[#111D17] border border-[#1C2D23] rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-all duration-300 group hover:-translate-y-2 flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-[#14261C] border border-[#2D4A39] flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                                    <Globe size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Halal Tech Solutions</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Building digital ecosystems, smart academy software, and interactive apps designed specifically to serve community needs ethically.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section id="education" className="py-24 relative overflow-hidden bg-[#050A08]">
                {/* Subtle Background Accent Lighting */}
                <div className="absolute top-1/2 left-1/4 w-500px h-500px bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute top-1/3 right-1/4 w-400px h-400px bg-[#111D17]/40 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <span className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">Academic Framework</span>
                        <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">
                            Education & Academic Credentials
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                            Bridging classical Islamic scholarship with complex computer science paradigms to engineer solutions for the global Ummah.
                        </p>
                    </div>

                    {/* Two-Column Structured Split Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* ================= LEFT COLUMN: SACRED ISLAMIC SCIENCES ================= */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 border-b border-[#1C2D23] pb-4">
                                <div className="w-10 h-10 rounded-lg bg-[#14261C] border border-[#2D4A39] flex items-center justify-center text-[#D4AF37]">
                                    <BookOpen size={20} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Islamic Scholarship</h3>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Tafseer, Fiqh & Traditional Sciences</p>
                                </div>
                            </div>

                            <div className="space-y-6 relative border-l-2 border-[#1C2D23] ml-5 pl-6">

                                {/* Item 1: Master's in Islamic Studies */}
                                <div className="relative group">
                                    {/* Timeline Bullet */}
                                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#050A08] border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] transition-all duration-300" />

                                    <div className="bg-[#111D17] border border-[#1C2D23] group-hover:border-[#D4AF37]/30 rounded-xl p-6 transition-all duration-300 space-y-2">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <h4 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                                                Master's in Islamic Studies (Dars-e-Nizami)
                                            </h4>
                                            <span className="text-[11px] bg-[#14261C] text-[#D4AF37] font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                                                <Calendar size={12} /> Alamiya Degree
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-400 leading-relaxed">
                                            Successfully completed the traditional Dars-e-Nizami curriculum, receiving comprehensive training in the foundational and advanced disciplines of Islamic scholarship, including Tafsir, Hadith, Fiqh, Usul al-Fiqh, Aqeedah, Arabic Grammar, Balaghah, Seerah, and other essential Islamic sciences.                                        </p>
                                    </div>
                                </div>

                                {/* Item 2: Hifz-e-Quran */}
                                <div className="relative group">
                                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#050A08] border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] transition-all duration-300" />

                                    <div className="bg-[#111D17] border border-[#1C2D23] group-hover:border-[#D4AF37]/30 rounded-xl p-6 transition-all duration-300 space-y-2">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <h4 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                                                Hifz-e-Quran Al-Kareem
                                            </h4>
                                            <span className="text-[11px] bg-[#14261C] text-[#D4AF37] font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                                                <Award size={12} /> Sanad
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-400 leading-relaxed">
                                            Rigorous certification in complete memorization of the Holy Quran, accompanied by foundational rules of Tajweed (art of pronunciation) and Qira'at verification.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* ================= RIGHT COLUMN: COMPUTER SCIENCE & TECH ================= */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 border-b border-[#1C2D23] pb-4">
                                <div className="w-10 h-10 rounded-lg bg-[#14261C] border border-[#2D4A39] flex items-center justify-center text-[#D4AF37]">
                                    <Code size={20} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Software Engineering</h3>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Full-Stack Development & Architecture</p>
                                </div>
                            </div>

                            <div className="space-y-6 relative border-l-2 border-[#1C2D23] ml-5 pl-6">

                                {/* Item 3: MERN Stack Development */}
                                <div className="relative group">
                                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#050A08] border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] transition-all duration-300" />

                                    <div className="bg-[#111D17] border border-[#1C2D23] group-hover:border-[#D4AF37]/30 rounded-xl p-6 transition-all duration-300 space-y-2">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <h4 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                                                Advanced Full-Stack Engineering (MERN)
                                            </h4>
                                            <span className="text-[11px] bg-[#14261C] text-[#D4AF37] font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                                                <Code size={12} /> Core Stack
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-400 leading-relaxed">
                                            Professionally trained in modern software engineering with a strong foundation in full-stack web development, scalable application architecture, API design, database management, and modern user experience principles. My work focuses on building secure, efficient, and maintainable digital solutions while striving to integrate ethical values and purposeful innovation                                        </p>
                                    </div>
                                </div>

                                {/* Item 4: Mobile App Architecture & Systems */}
                                <div className="relative group">
                                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#050A08] border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] transition-all duration-300" />

                                    <div className="bg-[#111D17] border border-[#1C2D23] group-hover:border-[#D4AF37]/30 rounded-xl p-6 transition-all duration-300 space-y-2">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <h4 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                                                Cross-Platform App Development
                                            </h4>
                                            <span className="text-[11px] bg-[#14261C] text-[#D4AF37] font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                                                <GraduationCap size={12} /> Mobile Ecosystems
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-400 leading-relaxed">
                                            Expertise in building native mobile applications using React Native and the Expo ecosystem, integrating advanced audio asset handling systems, real-time timers, and complex state management hooks.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* Bottom Core Proficiencies Subtext */}
                    <div className="mt-16 bg-[#111D17] border border-[#1C2D23] rounded-2xl p-6 flex flex-wrap items-center justify-around gap-6 text-center lg:text-left">
                        <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                            <CheckCircle2 size={16} className="text-[#D4AF37]" />
                            <span>Islamic Fiqh Research</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                            <CheckCircle2 size={16} className="text-[#D4AF37]" />
                            <span>Multi-Tenant SaaS Systems</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                            <CheckCircle2 size={16} className="text-[#D4AF37]" />
                            <span>Modern UI Architecture & Tailwind CSS</span>
                        </div>
                    </div>

                </div>
            </section>

            {/* 5. FEATURED VIDEO / MEDIA */}
            <section id="media" className="py-20 bg-[#080E0C]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        <div className="lg:col-span-5 space-y-6">
                            <span className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase">Latest Release</span>
                            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Watch Featured Lectures</h2>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                Stay connected with the latest digital dawah sessions. Discover insights into purifying the soul (Tazkiyah), parenting in the modern age, and living with purpose.
                            </p>
                            <div className="pt-2">
                                <a href="http://www.youtube.com/@hafizhassantalks" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:underline">
                                    Visit Official YouTube Channel <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="relative aspect-video w-full bg-[#111D17] border border-[#1C2C24] rounded-2xl overflow-hidden group shadow-2xl">

                                {isPlaying ? (
                                    /* React YouTube Embed Frame */
                                    <iframe
                                        className="w-full h-full absolute inset-0"
                                        src="https://www.youtube.com/embed/5bA9-j5rc64?si=ubjjfQvkEbXIDxfW" // <-- APNI YOUTUBE VIDEO ID YAHAIN LAGAEN
                                        title="Featured Lecture"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    /* Poster & Play Button Cover */
                                    <>
                                        <div
                                            className="absolute inset-0 flex items-center justify-center"
                                            style={{ background: 'linear-gradient(45deg, #0B120F 0%, #14261C 50%, #0B120F 100%)' }}
                                        >
                                            <div className="text-center p-6 space-y-2">
                                                <p className="text-[#D4AF37] text-[11px] tracking-widest font-bold uppercase">Featured Lecture</p>
                                                <p className="text-lg text-white font-serif max-w-md">Empowering the Ummah Through</p>
                                                <p className="text-xs text-gray-400">Hafiz Hassan Ahmed Qadri</p>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                                            <button
                                                onClick={() => setIsPlaying(true)}
                                                style={goldGradientStyle}
                                                className="w-16 h-16 rounded-full text-black flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-all duration-300 cursor-pointer"
                                            >
                                                <Play size={24} fill="black" className="ml-1" />
                                            </button>
                                        </div>
                                    </>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <HomeImageGrid />


        </div>
    );
}