import React from 'react';
import { MessageSquare, Calendar, Code, ArrowRight } from 'lucide-react';

export default function ContactSection({ goldGradientStyle }) {
  // Helper to safely format direct URLs
  const createWhatsAppLink = (message) => {
    return `https://wa.me/923172018866?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050A08]">
      {/* Background Deep Gradient Overlay */}
      <div className="absolute inset-0 bg-[#080E0C]/40" />
      <div className="absolute top-1/2 right-0 w-500px h-500px bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Left-Aligned Premium Header Pattern */}
        <div className="space-y-4 max-w-xl text-left">
          <span className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">Direct Channels</span>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-none">
            Let's Initiate a Conversation
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Select an option below to forward your brief directly to my WhatsApp window. Available for worldwide collaborations.
          </p>
        </div>

        {/* Minimalistic Interactive Rows Block */}
        <div className="border-t border-b border-[#1C2D23] divide-y divide-[#1C2D23]">
          
          {/* Row 1: Islamic Speaker bookings */}
          <a 
            href={createWhatsAppLink("Assalamu Alaikum Hafiz Hassan Ahmed Qadri, I would like to check your availability for an upcoming Islamic seminar / conference.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row sm:items-center justify-between py-6 group cursor-pointer transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#111D17] border border-[#2D4A39]/40 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 mt-1 sm:mt-0 shrink-0">
                <Calendar size={18} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                  Islamic Seminars & Keynotes
                </h3>
                <p className="text-xs text-gray-400 mt-1">Bookings for university panels, dawah programs, and institutions.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] mt-4 sm:mt-0 opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
              <span>Connect Now</span>
              <ArrowRight size={14} />
            </div>
          </a>

          {/* Row 2: Software Consult */}
          <a 
            href={createWhatsAppLink("Assalamu Alaikum Hassan Bhai, I want to discuss a full-stack website / app development project and launch architecture.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row sm:items-center justify-between py-6 group cursor-pointer transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#111D17] border border-[#2D4A39]/40 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 mt-1 sm:mt-0 shrink-0">
                <Code size={18} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                  Full-Stack Tech & SaaS Consultation
                </h3>
                <p className="text-xs text-gray-400 mt-1">Architecture consults for multi-tenant apps, MERN logic, and Expo UI.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] mt-4 sm:mt-0 opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
              <span>Schedule Consult</span>
              <ArrowRight size={14} />
            </div>
          </a>

          {/* Row 3: General Enquiries */}
          <a 
            href={createWhatsAppLink("Assalamu Alaikum, I visited your digital portfolio and wanted to reach out to you directly.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row sm:items-center justify-between py-6 group cursor-pointer transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#111D17] border border-[#2D4A39]/40 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 mt-1 sm:mt-0 shrink-0">
                <MessageSquare size={18} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                  General Communication / Networking
                </h3>
                <p className="text-xs text-gray-400 mt-1">For general digital content discussions, reviews, or dropping a salam.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] mt-4 sm:mt-0 opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
              <span>Open Chat</span>
              <ArrowRight size={14} />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}