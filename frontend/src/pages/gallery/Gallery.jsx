import React, { useState } from 'react';
import { Layout, Video, Calendar, Code, BookOpen, GraduationCap, ArrowUpRight, ShieldCheck, X, CheckCircle2 } from 'lucide-react';
import seminarPic from '../../assets/seminar.jpeg';
import stage from '../../assets/stage.jpeg';
import award from '../../assets/award.jpeg';
import online from '../../assets/online.jpeg';
import hero4 from '../../assets/hero4.jpg';
import hero1 from '../../assets/hero1.png';

export default function GalleryScreen({ goldGradientStyle }) {
  // 1. Active Filter and Selection State
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  // 2. DYNAMIC PORTFOLIO DATA HUB
  // Aap yahan apni pictures ke paths aur paragraphs asani se customize kar sakte hain
  const galleryItems = [
    {
      id: 1,
      category: 'events',
      title: "Annual Youth Islamic Summit",
      subtitle: "Keynote Speaking Engagement",
      date: "March 2026",
      icon: <Calendar size={16} />,
      metaLabel: "Lecture / Event",
      location: "Main Auditorium, Karachi",
      audience: "1,500+ University Students",

      // 1. AAPKI PICTURE KA PATH (Replace this link with your local asset or URL)
      imgUrl: seminarPic,

      // 2. AAPKA CUSTOM PARAGRAPH FOR THIS PICTURE
      longParagraph: "Is specific seminar me maine pure online youth community se direct communication ki. Aaj ke hyper-connected era me smartphone addiction aur digital distraction se kaise bacha jaye aur deen par kaise isteqamat ikhtiyar ki jaye, is par ek comprehensive framework share kiya. Audience ka response bohot overwhelming tha aur event ke baad kafi lambi Q&A evaluation chalti rahi.",

      deliverables: ["2-Hour Keynote Session", "Interactive Q&A Session Block", "Youth Mentorship Action Roadmap"],
      tags: ["Tazkiyah", "Youth Empowerment", "Contemporary Fiqh"]
    },
    {
      id: 2,
      category: "lectures",
      title: "Friday Congregational Bayan",
      subtitle: "Khutbah & Islamic Guidance",
      date: "February 2026",
      icon: <BookOpen size={16} />,
      metaLabel: "Islamic Lecture",
      location: "Central Mosque, Karachi",
      audience: "800+ Worshippers",

      imgUrl: hero4,

      longParagraph:
        "This Friday sermon focused on strengthening faith, developing righteous character, and encouraging Muslims to implement the teachings of the Qur'an and Sunnah in their daily lives. The session concluded with an interactive discussion addressing contemporary challenges faced by the Muslim community.",

      deliverables: [
        "Friday Khutbah",
        "Community Q&A",
        "Practical Islamic Guidance"
      ],

      tags: ["Khutbah", "Qur'an & Sunnah", "Community"]
    },
    {
      id: 3,
      category: "media",
      title: "Islamic Reminder Series",
      subtitle: "Digital Da'wah Initiative",
      date: "May 2026",
      icon: <Video size={16} />,
      metaLabel: "Media Production",
      location: "Online Platforms",
      audience: "Thousands of Online Viewers",

      imgUrl: online,

      longParagraph:
        "A series of short Islamic reminder videos created to inspire people through authentic teachings of Islam. Each episode focuses on practical lessons from the Qur'an and Sunnah, encouraging self-reflection, sincerity, and positive character development.",

      deliverables: [
        "Weekly Reminder Videos",
        "Short Educational Clips",
        "Islamic Social Media Content"
      ],

      tags: ["Digital Da'wah", "Islamic Media", "Reminder"]
    },
    {
      id: 4,
      category: "events",
      title: "Seerah Conference",
      subtitle: "Lessons from the Life of Prophet Muhammad ﷺ",
      date: "January 2026",
      icon: <Calendar size={16} />,
      metaLabel: "Islamic Conference",
      location: "Karachi, Pakistan",
      audience: "2,500+ Attendees",

      imgUrl: award,

      longParagraph:
        "This conference explored the timeless lessons from the blessed Seerah of Prophet Muhammad ﷺ and their relevance to modern life. The session emphasized sincere faith, noble character, compassion, leadership, and practical guidance inspired by the Qur'an and Sunnah. Attendees were encouraged to strengthen their relationship with Allah and adopt the Prophetic model in their personal, family, and social lives.",

      deliverables: [
        "Keynote Lecture",
        "Interactive Q&A Session",
        "Seerah Study Notes"
      ],

      tags: [
        "Seerah",
        "Prophetic Guidance",
        "Islamic Conference"
      ]
    },
    {
      id: 5,
      category: "education",
      title: "Islamic Educational Workshop",
      subtitle: "Knowledge & Character Development",
      date: "May 2026",
      icon: <GraduationCap size={16} />,
      metaLabel: "Islamic Education",
      location: "Community Learning Center",
      audience: "Students & Young Professionals",

      imgUrl: hero1,

      longParagraph:
        "This educational workshop emphasized the importance of seeking authentic Islamic knowledge alongside developing noble character. Participants explored practical ways to strengthen their relationship with Allah while applying Islamic principles in everyday life.",

      deliverables: [
        "Interactive Learning Sessions",
        "Question & Answer Forum",
        "Educational Notes"
      ],

      tags: ["Islamic Education", "Character Building", "Youth"]
    },

    {
      id: 6,
      category: "media",
      title: "Ramadan Reflections",
      subtitle: "Daily Islamic Reminder Series",
      date: "Ramadan 2026",
      icon: <Video size={16} />,
      metaLabel: "Ramadan Series",
      location: "Digital Platforms",
      audience: "Global Online Audience",

      imgUrl: stage,

      longParagraph:
        "A daily Ramadan reminder series designed to inspire hearts with authentic Islamic teachings. Each episode highlighted the virtues of fasting, sincere worship, patience, gratitude, and self-purification while encouraging viewers to make the most of the blessed month.",

      deliverables: [
        "30 Daily Ramadan Episodes",
        "Short Inspirational Reels",
        "Qur'an & Hadith Reflections"
      ],

      tags: ["Ramadan", "Daily Reminder", "Digital Da'wah"]
    }
  ];

  // Filtering Logic
  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="min-h-screen bg-[#050A08] py-28 relative overflow-hidden antialiased selection:bg-[#D4AF37] selection:text-black">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-600px h-600px bg-[#D4AF37]/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-600px h-600px bg-[#14291D]/40 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111D17] border border-[#1C2D23]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#D4AF37] uppercase">Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-medium text-white tracking-tight font-serif">
            Moments, Modules & Milestones
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
            A collection of inspiring lectures, Islamic education, and meaningful digital Da'wah dedicated to serving the Ummah.          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {[
            { id: 'all', label: 'All Projects', icon: <Layout size={13} /> },
            { id: 'events', label: 'Seminars & Events', icon: <Calendar size={13} /> },
            { id: 'tech', label: 'Tech & Engineering', icon: <Code size={13} /> },
            { id: 'media', label: 'Media & Production', icon: <Video size={13} /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase border transition-all duration-300 cursor-pointer ${activeFilter === tab.id
                ? 'bg-[#D4AF37] border-[#D4AF37] text-black shadow-[0_10px_25px_rgba(212,175,55,0.2)]'
                : 'bg-[#111D17]/60 border-[#1C2D23] text-gray-400 hover:text-white hover:border-[#D4AF37]/30 backdrop-blur-sm'
                }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-[#111D17]/40 border border-[#1C2D23] rounded-2xl overflow-hidden hover:border-[#D4AF37]/30 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] transition-all duration-500 relative flex flex-col cursor-pointer hover:-translate-y-1 backdrop-blur-md"
            >
              {/* REAL IMAGE RENDER CANVAS WINDOW */}
              <div className="w-full aspect-[4/3] bg-[#0A0F0D] border-b border-[#1C2D23]/60 relative overflow-hidden flex items-center justify-center">

                {/* Image element with smart hover pan animation */}
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    // Fallback visual placeholder if an image url fails to resolve or load
                    e.target.style.display = 'none';
                  }}
                />

                {/* Floating Meta Indicator Tag over Image */}
                <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded bg-[#050A08]/80 backdrop-blur-md border border-[#1C2D23] text-[9px] font-bold text-[#D4AF37] uppercase tracking-wider">
                  {item.category}
                </div>

                {/* Slick Luxury Hover Panel Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A08] via-[#050A08]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 z-10">
                  <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase flex items-center gap-1.5 translate-y-3 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    Examine Project Blueprint <ArrowUpRight size={13} className="text-[#D4AF37]" />
                  </span>
                </div>
              </div>

              {/* Card Meta Content Box */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between bg-gradient-to-b from-transparent to-[#0A100E]/90 relative">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
                      {item.metaLabel}
                    </span>
                    <span className="text-xs text-gray-500 font-medium font-serif">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed font-light">
                    {item.subtitle}
                  </p>
                </div>

                {/* Mini Tag Pills Row inside card footer */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="text-[9px] font-semibold text-gray-400 bg-[#16251E]/50 px-2 py-0.5 rounded border border-[#1F3529]/40">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Result Fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-[#111D17]/40 border border-[#1C2D23] rounded-3xl max-w-md mx-auto space-y-3 backdrop-blur-sm">
            <ShieldCheck size={32} className="mx-auto text-gray-600" />
            <p className="text-white font-medium tracking-wide">No Items Currently Active</p>
          </div>
        )}
      </div>

      {/* PREMIUM SLIDE-OVER METADATA DRAWER PANEL */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 ${selectedItem ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}>
        {/* Backdrop Dark Tint */}
        <div
          onClick={() => setSelectedItem(null)}
          className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500 ${selectedItem ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Sliding Panel Window Frame */}
        <div className={`absolute top-0 right-0 h-full w-full max-w-lg bg-[#070D0A] border-l border-[#1C2D23] p-8 overflow-y-auto shadow-[20px_0_60px_rgba(0,0,0,0.8)] transition-transform duration-500 ease-out transform ${selectedItem ? 'translate-x-0' : 'translate-x-full'}`}>
          {selectedItem && (
            <div className="h-full flex flex-col justify-between space-y-8">

              <div className="space-y-6">
                {/* Drawer Top Meta Bar */}
                <div className="flex items-center justify-between border-b border-[#1C2C24]/60 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#111D17] text-[#D4AF37] rounded-xl border border-[#1C2D23]">
                      {selectedItem.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">{selectedItem.metaLabel}</span>
                      <span className="text-xs text-gray-500">{selectedItem.date}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="p-2 rounded-xl bg-[#111D17] border border-[#1C2D23] text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Header Titles */}
                <div className="space-y-2 text-left">
                  <h2 className="text-2xl font-semibold text-white tracking-wide font-serif">
                    {selectedItem.title}
                  </h2>
                  <p className="text-sm font-medium text-[#D4AF37] opacity-90">
                    {selectedItem.subtitle}
                  </p>
                </div>

                {/* Structural Image Showcase in Drawer panel */}
                <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#1C2D23] bg-[#0A0F0D]">
                  <img src={selectedItem.imgUrl} alt={selectedItem.title} className="w-full h-full object-cover" />
                </div>

                {/* Metadata Context Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-[#111D17]/40 border border-[#1C2D23]/60 rounded-xl text-left text-xs">
                  <div>
                    <span className="text-gray-500 block uppercase tracking-wider text-[9px] font-bold mb-0.5">Deployment Venue</span>
                    <span className="text-gray-300 font-medium">{selectedItem.location}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block uppercase tracking-wider text-[9px] font-bold mb-0.5">Scope Target</span>
                    <span className="text-gray-300 font-medium">{selectedItem.audience}</span>
                  </div>
                </div>

                {/* THE CUSTOM PARAGRAPH COMPONENT - RENDERS THE UNIQUE PARAGRAPH */}
                <div className="space-y-2 text-left border-t border-[#1C2C24]/40 pt-4">
                  <span className="text-[#D4AF37] uppercase tracking-widest text-[10px] font-bold block">Detailed Record / Paragraph</span>
                  <p className="text-sm text-gray-300 leading-relaxed font-light">
                    {selectedItem.longParagraph}
                  </p>
                </div>

                {/* Bullet deliverables list */}
                <div className="space-y-3 text-left pt-2">
                  <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold block">Key Focus & Deliverables</span>
                  <div className="space-y-2.5">
                    {selectedItem.deliverables.map((detail, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <CheckCircle2 size={14} className="text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-light">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tags panel footer */}
              <div className="border-t border-[#1C2C24]/60 pt-5 text-left">
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag, idx) => (
                    <span key={idx} style={{ border: '1px solid rgba(212,175,55,0.15)' }} className="text-[10px] font-bold text-[#D4AF37] bg-[#111D17] px-3 py-1 rounded-lg">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>
      </div>

    </section>
  );
}