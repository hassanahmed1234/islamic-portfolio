import React, { useState, useEffect } from 'react';
import {
    BookOpen, Code, Cpu, Play, ArrowRight, ArrowUpRight, Github, ExternalLink,
    GraduationCap, Award, CheckCircle2, Smartphone, Layers, Mic, Video, Menu as MenuIcon,
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import profileImg from '../../assets/hero1.jpeg';
import HomeImageGrid from '../../components/Grid';
import restaurantImg from '../../assets/restaurant.png';
import academyImg from '../../assets/academy.png';
import hidayatImg from '../../assets/hidayat.jpg';
import hospitalImg from '../../assets/hospital.png';

/* ------------------------------------------------------------------ */
/*  DESIGN TOKENS                                                      */
/*  Forest green + antique gold, kept from your original identity.     */
/*  Fraunces (display serif) + Manrope (body).                         */
/* ------------------------------------------------------------------ */
const display = { fontFamily: "'Fraunces', Georgia, serif" };
const goldBg = { background: 'linear-gradient(135deg, #D4AF37 0%, #AA7C11 100%)' };
const goldText = {
    background: 'linear-gradient(90deg, #F5EBD0 0%, #D4AF37 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
};

/* ------------------------------------------------------------------ */
/*  CONTENT — edit these arrays to update the page                     */
/* ------------------------------------------------------------------ */
const PROJECTS = [
    {
        title: 'Hospital Management System',
        kind: 'dashboard',
        image: hospitalImg, // Yahan import ki gayi variable pass karein
        categories: ['Web', 'SaaS'],
        summary: 'A multi-tenant platform where each school gets its own workspace for students, staff, fees and results.',
        features: ['Attendance & timetables', 'Fee collection & receipts', 'Result cards & parent portal'],
        stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
        live: 'https://smart-hospital-managment-bud6.vercel.app',
        code: '#',
    },
    {
        title: 'Restaurant Management',
        kind: 'menu',
        image: restaurantImg,
        categories: ['Web', 'SaaS'],
        summary: 'Point of sale and back-office tools for restaurants: orders, tables, kitchen flow and daily sales.',
        features: ['Table & order tracking', 'Kitchen display screen', 'Inventory & sales reports'],
        stack: ['React', 'Node.js', 'MongoDB'],
        live: 'https://your-restuarant.netlify.app/',
        code: '#',
    },
    {
        title: 'Islamic Online Academy',
        kind: 'course',
        image: academyImg,
        categories: ['Web'],
        summary: 'An online academy for Quran, Tajweed and Islamic studies, with courses, live classes and student progress.',
        features: ['Course & class scheduling', 'Student progress tracking', 'Teacher and admin dashboards'],
        stack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
        live: 'https://my-academy-y59r.vercel.app/',
        code: '#',
    },
    {
        title: 'Hidayat App',
        kind: 'mobile-app',
        image: hidayatImg,
        categories: ['React Native', 'Islamic'],
        summary: 'An Islamic mobile application providing Quran, prayer times, Qibla direction, digital Tasbeeh, authentic Duas, Hadith, Islamic quizzes and educational content for children.',
        features: [
            'Quran with Surah and Juz navigation',
            'Prayer times and Qibla direction',
            'Digital Tasbeeh and authentic Duas',
            'Hadith and Islamic learning resources',
            'Islamic quizzes and kids learning section',
            'Stars and rewards system'
        ],
        stack: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB'],
        live: '#',
        code: '#',
    },
];

const FILTERS = ['All', 'Web', 'SaaS', 'Mobile'];

const STACK = [
    'React', 'Node.js', 'Express', 'MongoDB', 'React Native', 'Expo', 'Tailwind CSS', 'REST APIs', 'JWT Auth', 'Git',
];

const DISCIPLINES = [
    {
        icon: BookOpen,
        title: 'Islamic scholar and speaker',
        text: 'Bayans, seminars and structured courses in Fiqh, Seerah, Tajweed and Islamic history for teenagers, adults and professionals.',
        points: ['Dars-e-Nizami (Alamiya)', 'Hafiz of the Quran with Sanad', 'Public speaking and content creation'],
    },
    {
        icon: Code,
        title: 'Full-stack engineer',
        text: 'Secure, maintainable web and mobile software, from database design to the interface people actually use.',
        points: ['MERN stack and API design', 'Multi-tenant SaaS systems', 'React Native with Expo'],
    },
];

const MOCK_ACCENT = '#D4AF37';

/* ------------------------------------------------------------------ */
/*  SMALL PIECES                                                       */
/* ------------------------------------------------------------------ */
function Mock({ kind }) {
    const bar = (w, o = 0.25) => (
        <div className="h-2 rounded-full" style={{ width: w, background: MOCK_ACCENT, opacity: o }} />
    );

    if (kind === 'phone') {
        return (
            <div className="h-full flex items-center justify-center gap-4 py-5">
                <div className="w-24 h-full rounded-2xl border border-[#2B4638] bg-[#0B120F] p-3 flex flex-col gap-2">
                    {bar('60%', 0.6)}
                    <div className="flex-1 rounded-lg bg-[#14261C] flex items-center justify-center">
                        <Play size={16} className="text-[#D4AF37]" />
                    </div>
                    {bar('90%')}
                    {bar('50%')}
                </div>
                <div className="w-24 h-[85%] rounded-2xl border border-[#2B4638] bg-[#0B120F] p-3 flex flex-col gap-2 translate-y-3">
                    <div className="mx-auto w-12 h-12 rounded-full border-2 border-[#D4AF37]/70" />
                    {bar('70%', 0.5)}
                    {bar('100%')}
                    {bar('40%')}
                </div>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#1C2D23]">
                <span className="w-2 h-2 rounded-full bg-[#2B4638]" />
                <span className="w-2 h-2 rounded-full bg-[#2B4638]" />
                <span className="w-2 h-2 rounded-full bg-[#2B4638]" />
                <span className="ml-3 h-2 w-24 rounded-full bg-[#14261C]" />
            </div>
            <div className="flex-1 flex gap-3 p-3">
                <div className="w-10 rounded-md bg-[#0B120F] p-1.5 flex flex-col gap-2">
                    {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="h-1.5 rounded-full" style={{ background: MOCK_ACCENT, opacity: i === 0 ? 0.8 : 0.2 }} />
                    ))}
                </div>
                <div className="flex-1 flex flex-col gap-3">
                    {kind === 'dashboard' && (
                        <>
                            <div className="grid grid-cols-3 gap-2">
                                {[0, 1, 2].map((i) => (
                                    <div key={i} className="rounded-md bg-[#14261C] p-2 space-y-1.5">
                                        {bar('50%', 0.6)}
                                        <div className="h-3 w-3/4 rounded bg-[#E4E9E6]/20" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex-1 rounded-md bg-[#14261C] p-2 flex items-end gap-1.5">
                                {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                                    <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: MOCK_ACCENT, opacity: 0.35 + i * 0.07 }} />
                                ))}
                            </div>
                        </>
                    )}
                    {kind === 'menu' && (
                        <div className="grid grid-cols-3 gap-2 flex-1">
                            {[0, 1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="rounded-md bg-[#14261C] p-2 flex flex-col justify-between">
                                    <div className="h-8 rounded bg-[#0B120F]" />
                                    {bar('70%', 0.5)}
                                </div>
                            ))}
                        </div>
                    )}
                    {kind === 'course' && (
                        <>
                            <div className="rounded-md bg-[#14261C] p-3 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full border-2 border-[#D4AF37]/70 flex items-center justify-center">
                                    <Play size={12} className="text-[#D4AF37]" />
                                </div>
                                <div className="flex-1 space-y-1.5">
                                    {bar('80%', 0.6)}
                                    {bar('50%')}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 flex-1">
                                {[0, 1, 2, 3].map((i) => (
                                    <div key={i} className="rounded-md bg-[#14261C] p-2 space-y-1.5">
                                        {bar('65%', 0.5)}
                                        {bar('90%')}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ project, index, featured }) {
    return (
        <article
            data-aos="fade-up"
            data-aos-delay={(index % 3) * 100}
            className={`group rounded-3xl bg-[#111D17] border border-[#1C2D23] overflow-hidden flex flex-col hover:border-[#D4AF37]/40 transition-all duration-500 ${featured ? 'lg:col-span-2 lg:flex-row' : ''
                }`}
        >
            {/* Project Image Container */}
            <div
                className={`${featured ? 'lg:w-1/2' : ''} h-60 sm:h-72 bg-[#0D1712] ${featured ? 'lg:h-auto lg:min-h-[360px]' : ''
                    } border-b lg:border-b-0 border-[#1C2D23] ${featured ? 'lg:border-r' : ''
                    } overflow-hidden relative`}
            >
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                ) : (
                    <Mock kind={project.kind} />
                )}
                {/* Subtle overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111D17]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
            </div>

            {/* Details Section */}
            <div className={`p-7 sm:p-8 flex flex-col ${featured ? 'lg:w-1/2 justify-center' : 'flex-1'}`}>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map((c) => (
                        <span key={c} className="text-xs font-semibold text-[#D4AF37] bg-[#14261C] border border-[#234030] px-2.5 py-1 rounded-full">
                            {c}
                        </span>
                    ))}
                </div>

                <h3 style={display} className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-md">{project.summary}</p>

                <ul className="space-y-2 mb-6">
                    {project.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
                            {f}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((s) => (
                        <span key={s} className="text-xs text-gray-400 border border-[#234030] bg-[#0E1712] rounded-md px-2.5 py-1">
                            {s}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex items-center gap-5 text-sm font-semibold pt-2 border-t border-[#1C2D23]">
                    {project.live && project.live !== '#' && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#D4AF37] hover:underline flex items-center gap-1.5"
                        >
                            Live Demo <ExternalLink size={14} />
                        </a>
                    )}
                    {project.code && project.code !== '#' && (
                        <a
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors"
                        >
                            Source Code <Github size={14} />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
export default function HomePage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [filter, setFilter] = useState('All');

    // Load fonts + AOS once
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href =
            'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700&display=swap';
        document.head.appendChild(link);

        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 80,
            disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        });

        return () => document.head.removeChild(link);
    }, []);

    // Re-measure after the project grid changes
    useEffect(() => {
        const t = setTimeout(() => AOS.refreshHard(), 50);
        return () => clearTimeout(t);
    }, [filter]);

    const visible = PROJECTS.filter((p) => filter === 'All' || p.categories.includes(filter));

    return (
        <div
            style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
            className="min-h-screen bg-[#0B120F] text-[#E4E9E6] selection:bg-[#D4AF37] selection:text-black overflow-x-hidden"
        >
            {/* ============ HERO ============ */}
            <section id="home" className="relative pt-32 pb-24 lg:pt-36 lg:pb-32">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#163526]/40 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
                    <div className="lg:col-span-7">
                        <p data-aos="fade-up" className="inline-flex items-center gap-2 text-sm text-[#D4AF37] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                            Karachi, Pakistan · Open to projects and speaking invitations
                        </p>

                        <h1
                            data-aos="fade-up"
                            data-aos-delay="100"
                            style={{ ...display, ...goldText }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
                        >
                            Hafiz Hassan Ahmed Qadri
                        </h1>

                        <p data-aos="fade-up" data-aos-delay="200" className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-xl leading-snug">
                            I teach Islam and build software, and I try to do both with the same care.
                        </p>

                        <p data-aos="fade-up" data-aos-delay="300" className="mt-5 text-gray-400 leading-relaxed max-w-xl">
                            Islamic speaker and educator, and a full-stack engineer who ships school, restaurant and academy platforms
                            for real businesses and communities.
                        </p>

                        <div data-aos="fade-up" data-aos-delay="400" className="mt-9 flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                style={goldBg}
                                className="px-7 py-3.5 rounded-full text-black font-bold hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-shadow duration-300 inline-flex items-center gap-2 group"
                            >
                                View my projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <Link
                                to="/contact"
                                className="px-7 py-3.5 rounded-full border border-[#2B4638] text-white font-semibold hover:bg-[#14261C] transition-colors duration-300"
                            >
                                Get in touch
                            </Link>
                            <a
                                href="http://www.youtube.com/@hafizhassantalks"
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-3.5 text-gray-400 font-semibold hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1.5"
                            >
                                Watch lectures <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Portrait */}
                    <div className="lg:col-span-5 flex justify-center" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                        <div className="relative">
                            <div className="absolute -inset-3 rounded-[2.5rem] border border-[#D4AF37]/25" />
                            <div className="relative w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] rounded-[2rem] overflow-hidden border border-[#2B4638] bg-[#111D17]">
                                <img src={profileImg} alt="Hafiz Hassan Ahmed Qadri" className="w-full h-full object-cover object-top" />
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0B120F] to-transparent" />
                            </div>

                            <div className="absolute -left-6 bottom-12 bg-[#111D17] border border-[#234030] rounded-2xl px-4 py-3 shadow-xl" data-aos="fade-right" data-aos-delay="600">
                                <p className="text-xs text-gray-400">Qualification</p>
                                <p className="text-sm font-bold text-white">Islamic Scholar · BBA</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ============ TECH STRIP ============ */}
            <section className="border-y border-[#14231B] bg-[#080E0C] py-6">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3" data-aos="fade-in">
                    {STACK.map((s) => (
                        <span key={s} className="text-sm font-semibold text-gray-500 hover:text-[#D4AF37] transition-colors">
                            {s}
                        </span>
                    ))}
                </div>
            </section>

            {/* ============ ABOUT ============ */}
            <section id="about" className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5" data-aos="fade-right">
                        <h2 style={display} className="text-3xl sm:text-5xl font-semibold text-white leading-tight">
                            Tradition and technology, in one workshop.
                        </h2>
                    </div>
                    <div className="lg:col-span-7 space-y-5 text-gray-400 leading-relaxed" data-aos="fade-left" data-aos-delay="100">
                        <p className="text-lg text-gray-300">
                            I make sacred knowledge easy to reach for a young, tech-savvy generation, and I build the digital tools
                            that help communities and businesses run better.
                        </p>
                        <p>
                            From interactive lectures and customised curricula to multi-tenant SaaS platforms and native mobile apps,
                            my work sits where classical Islamic learning meets modern engineering. Every product I build is held to the
                            same standard as every lecture I give: honest, clear and useful.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {DISCIPLINES.map((d, i) => (
                        <div
                            key={d.title}
                            data-aos="fade-up"
                            data-aos-delay={i * 150}
                            className="rounded-3xl bg-[#111D17] border border-[#1C2D23] p-8 sm:p-10"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#14261C] border border-[#2D4A39] flex items-center justify-center text-[#D4AF37] mb-6">
                                <d.icon size={22} />
                            </div>
                            <h3 style={display} className="text-2xl font-semibold text-white mb-3">{d.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">{d.text}</p>
                            <ul className="space-y-2">
                                {d.points.map((p) => (
                                    <li key={p} className="flex items-center gap-2 text-sm text-gray-300">
                                        <CheckCircle2 size={16} className="text-[#D4AF37]" /> {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* ============ PROJECTS ============ */}
            <section id="projects" className="py-24 bg-[#080E0C] border-y border-[#14231B]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
                        <div data-aos="fade-up" className="max-w-xl">
                            <h2 style={display} className="text-3xl sm:text-5xl font-semibold text-white leading-tight">
                                Software I have built
                            </h2>
                            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                                Real platforms for schools, restaurants and Islamic education. Filter by type to see what fits your need.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
                            {FILTERS.map((f) => (
                                <button
                                    key={f}
                                    role="tab"
                                    aria-selected={filter === f}
                                    onClick={() => setFilter(f)}
                                    className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${filter === f
                                        ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                                        : 'border-[#234030] text-gray-300 hover:bg-[#14261C]'
                                        }`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {visible.map((p, i) => (
                            <ProjectCard key={p.title + filter} project={p} index={i} featured={i === 0 && filter === 'All'} />
                        ))}
                    </div>

                    <p data-aos="fade-up" className="mt-12 text-center text-sm text-gray-500">
                        Have an idea like these?{' '}
                        <Link to="/contact" className="text-[#D4AF37] font-semibold hover:underline">
                            Let's talk about it
                        </Link>
                    </p>
                </div>
            </section>

            {/* ============ EDUCATION ============ */}
            <section id="education" className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl mb-14" data-aos="fade-up">
                        <h2 style={display} className="text-3xl sm:text-5xl font-semibold text-white leading-tight">
                            Education and credentials
                        </h2>
                        <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                            Classical Islamic scholarship alongside formal business administration and professional software engineering.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Islamic */}
                        <div data-aos="fade-right">
                            <h3 className="flex items-center gap-3 text-lg font-bold text-white pb-4 border-b border-[#1C2D23] mb-6">
                                <BookOpen size={20} className="text-[#D4AF37]" /> Islamic scholarship
                            </h3>
                            <div className="space-y-5">
                                <div className="rounded-2xl bg-[#111D17] border border-[#1C2D23] p-6">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <h4 className="text-base font-bold text-white">Master's in Islamic Studies (Dars-e-Nizami)</h4>
                                        <span className="text-xs bg-[#14261C] text-[#D4AF37] font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1">
                                            <GraduationCap size={12} /> Alamiya
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Completed the traditional curriculum covering Tafsir, Hadith, Fiqh, Usul al-Fiqh, Aqeedah, Arabic grammar, Balaghah and Seerah.
                                    </p>
                                </div>
                                <div className="rounded-2xl bg-[#111D17] border border-[#1C2D23] p-6">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <h4 className="text-base font-bold text-white">Hifz-e-Quran Al-Kareem</h4>
                                        <span className="text-xs bg-[#14261C] text-[#D4AF37] font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1">
                                            <Award size={12} /> Sanad
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Certified in complete memorisation of the Quran, with the foundational rules of Tajweed and Qira'at verification.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Tech & Business */}
                        <div data-aos="fade-left">
                            <h3 className="flex items-center gap-3 text-lg font-bold text-white pb-4 border-b border-[#1C2D23] mb-6">
                                <Cpu size={20} className="text-[#D4AF37]" /> Tech & Business Education
                            </h3>
                            <div className="space-y-5">
                                {/* BBA Card */}
                                <div className="rounded-2xl bg-[#111D17] border border-[#1C2D23] p-6">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <h4 className="text-base font-bold text-white">Bachelor of Business Administration (BBA)</h4>
                                        <span className="text-xs bg-[#14261C] text-[#D4AF37] font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1">
                                            <GraduationCap size={12} /> In Progress
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Focusing on business management, strategic planning, marketing, financial principles, and corporate governance.
                                    </p>
                                </div>

                                {/* MERN Card */}
                                <div className="rounded-2xl bg-[#111D17] border border-[#1C2D23] p-6">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                        <h4 className="text-base font-bold text-white">Full-stack engineering (MERN)</h4>
                                        <span className="text-xs bg-[#14261C] text-[#D4AF37] font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1">
                                            <Layers size={12} /> Core stack
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Scalable application architecture, API design, database management and modern UX, aimed at secure and maintainable products with ethical values built in.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ MEDIA ============ */}
            <section id="media" className="py-24 bg-[#080E0C] border-t border-[#14231B]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
                        <h2 style={display} className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
                            Watch a featured lecture
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                            Sessions on purifying the soul (Tazkiyah), parenting in the modern age, and living with purpose.
                        </p>
                        <div className="flex flex-wrap gap-5 text-sm text-gray-400">
                            <span className="inline-flex items-center gap-2"><Mic size={16} className="text-[#D4AF37]" /> Bayans</span>
                            <span className="inline-flex items-center gap-2"><Video size={16} className="text-[#D4AF37]" /> Video podcasts</span>
                        </div>
                        <a
                            href="http://www.youtube.com/@hafizhassantalks"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:underline"
                        >
                            Visit the YouTube channel <ArrowRight size={16} />
                        </a>
                    </div>

                    <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="100">
                        <div className="relative aspect-video w-full bg-[#111D17] border border-[#1C2C24] rounded-3xl overflow-hidden shadow-2xl">
                            {isPlaying ? (
                                <iframe
                                    className="w-full h-full absolute inset-0"
                                    src="https://www.youtube.com/embed/5bA9-j5rc64?si=ubjjfQvkEbXIDxfW&autoplay=1"
                                    title="Featured Lecture"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            ) : (
                                <div
                                    className="absolute inset-0 flex flex-col items-center justify-center gap-5"
                                    style={{ background: 'linear-gradient(45deg, #0B120F 0%, #14261C 50%, #0B120F 100%)' }}
                                >
                                    <div className="text-center px-6">
                                        <p style={display} className="text-xl sm:text-2xl text-white">Empowering the Ummah</p>
                                        <p className="text-xs text-gray-400 mt-1">Hafiz Hassan Ahmed Qadri</p>
                                    </div>
                                    <button
                                        onClick={() => setIsPlaying(true)}
                                        aria-label="Play featured lecture"
                                        style={goldBg}
                                        className="w-16 h-16 rounded-full text-black flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-110 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                    >
                                        <Play size={24} fill="black" className="ml-1" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <HomeImageGrid />

            {/* ============ CTA ============ */}
            <section className="py-24 px-6">
                <div
                    data-aos="zoom-in"
                    className="max-w-5xl mx-auto px-8 py-16 rounded-[2rem] border border-[#234030] text-center relative overflow-hidden flex flex-col items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #14261C 0%, #0B120F 100%)' }}
                >
                    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-[80px]" />

                    <h2
                        style={{ ...display, textAlign: 'center', width: '100%' }}
                        className="relative text-3xl sm:text-5xl font-semibold text-white leading-tight max-w-2xl mx-auto"
                    >
                        Need a platform built, or a speaker for your event?
                    </h2>

                    <p className="relative mt-5 text-gray-400 max-w-lg mx-auto text-sm sm:text-base text-center">
                        Tell me what you are working on. I reply to every message personally.
                    </p>

                    <Link
                        to="/contact"
                        style={goldBg}
                        className="relative mt-9 inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-black font-bold hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-shadow group"
                    >
                        Start a conversation
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>


        </div>
    );
}