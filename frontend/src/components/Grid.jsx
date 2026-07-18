import React from 'react';
import { Image, ArrowUpRight } from 'lucide-react';

// 1. TOP PAR APNI IMAGES IMPORT KAREIN
// Aapke real assets folder ka jo bhi naam aur path ho, yahan specify karein:
import seminarPic from '../assets/seminar.jpeg';
import stage from '../assets/stage.jpeg';
import award from '../assets/award.jpeg';
import online from '../assets/online.jpeg';
import hero4 from '../assets/hero4.jpg';

export default function HomeImageGrid() {

  // 2. DATA ARRAY ME IMPORTED VARIABLES KO ASSIGN KAREIN
  const picturesData = [
    {
      id: 1,
      gridClass: "md:col-span-8 md:row-span-2 aspect-[16/9] md:aspect-auto",
      title: "Mawlid-un-Nabi ﷺ Gathering",
      tag: "Islamic Speaker",
      imgUrl: award
    },
    {
      id: 2,
      gridClass: "md:col-span-4 md:row-span-1 aspect-square md:aspect-auto",
      title: "Delivering Friday Bayan",
      tag: "Khateeb & Educator",
      imgUrl: seminarPic
    },
    {
      id: 3,
      gridClass: "md:col-span-4 md:row-span-2 aspect-[3/4] md:aspect-auto",
      title: "Youth Islamic Guidance",
      tag: "Da'wah & Education",
      imgUrl: stage
    },
    {
      id: 4,
      gridClass: "md:col-span-4 md:row-span-1 aspect-square md:aspect-auto",
      title: "Islamic Content Creator",
      tag: "Spreading the Message of Islam",
      imgUrl: online
    },
    {
      id: 5,
      gridClass: "md:col-span-4 md:row-span-1 aspect-square md:aspect-auto",
      title: "Spreading the Message of Islam",
      tag: "Islamic Content Creator",
      imgUrl: hero4
    }
  ];

  return (
    <section id="media-grid" className="py-24 relative overflow-hidden bg-[#050A08]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-600px h-600px bg-[#D4AF37]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 text-left">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">Captured Moments</span>
            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">
              Visual Chronicles
            </h2>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Seminars, tech codebases, and digital dawah production frames captured across my professional journey.
            </p>
          </div>
          <div className="text-xs font-semibold text-[#D4AF37] tracking-wider uppercase border-b border-[#D4AF37]/30 pb-1 cursor-pointer hover:border-[#D4AF37] transition-all">
            Scroll to Explore
          </div>
        </div>

        {/* Dynamic Mosaic Image Grid Framework */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[220px] gap-6">
          {picturesData.map((pic) => (
            <div
              key={pic.id}
              className={`${pic.gridClass} group bg-[#111D17] border border-[#1C2D23] rounded-2xl overflow-hidden relative transition-all duration-500 hover:border-[#D4AF37]/40 shadow-[0_4px_30px_rgba(0,0,0,0.4)] cursor-pointer`}
            >

              {/* Image Handler Layer */}
              <div className="w-full h-full absolute inset-0 bg-[#0C1411] flex flex-col items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]">

                {pic.imgUrl ? (
                  <img
                    src={pic.imgUrl}
                    alt={pic.title}
                    className="w-full h-full object-cover transition-opacity duration-500 opacity-80 group-hover:opacity-95"
                  />
                ) : (
                  <div className="w-full h-full rounded-xl border border-dashed border-[#2D4A39] flex flex-col items-center justify-center text-gray-600 transition-colors duration-300 group-hover:border-[#D4AF37]/20 space-y-2">
                    <Image size={24} className="text-[#D4AF37]/30 group-hover:text-[#D4AF37]/60 transition-colors" />
                    <span className="text-[9px] tracking-widest uppercase font-bold text-gray-500">Frame {pic.id}</span>
                  </div>
                )}

                {/* Micro Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A08] via-[#050A08]/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
              </div>

              {/* Text Meta Content over image */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between z-20 text-left">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {pic.tag}
                  </span>
                  <h3 className="text-base font-bold text-white tracking-wide">
                    {pic.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#050A08]/80 border border-[#1C2D23] flex items-center justify-center text-white opacity-0 transform translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/30 transition-all duration-300 shrink-0">
                  <ArrowUpRight size={14} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}