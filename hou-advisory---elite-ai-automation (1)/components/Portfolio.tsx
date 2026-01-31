
import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Vanguard Law",
    category: "AI Receptionist + Web Design",
    image: "https://picsum.photos/800/600?random=1",
    result: "85% decrease in missed lead calls"
  },
  {
    title: "Prime Health",
    category: "Internal Knowledge Base",
    image: "https://picsum.photos/800/600?random=2",
    result: "40% faster staff onboarding"
  },
  {
    title: "EcoServe HVAC",
    category: "Smart Booking Chatbot",
    image: "https://picsum.photos/800/600?random=3",
    result: "2.4x increase in after-hours bookings"
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-3">Our Work</h2>
            <p className="text-4xl md:text-5xl font-extrabold text-white">
              Proven results for <br /> local leaders.
            </p>
          </div>
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white font-bold flex items-center gap-2 group active:scale-95 transition-transform"
          >
            See All Case Studies
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ExternalLink size={14} />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="bg-sky-500 text-white text-xs font-bold py-1 px-3 rounded-full w-fit mb-2">
                    {proj.result}
                  </div>
                </div>
              </div>
              <p className="text-sky-400 text-sm font-bold uppercase tracking-widest mb-2">{proj.category}</p>
              <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">{proj.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};