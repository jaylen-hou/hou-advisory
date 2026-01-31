
import React from 'react';
import { PhoneCall, MessageSquare, Database, Layout, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "AI Receptionist",
    description: "Voice-capable AI that answers calls, books appointments, and captures leads in natural language.",
    icon: PhoneCall,
    color: "from-blue-500 to-sky-400",
    features: ["Natural Voice Synthesis", "CRM Integration", "Call Routing"]
  },
  {
    title: "Smart Chatbots",
    description: "Multilingual chatbots for your website and social media that handle support and sales simultaneously.",
    icon: MessageSquare,
    color: "from-indigo-600 to-purple-500",
    features: ["24/7 Availability", "Sentiment Analysis", "Lead Qualification"]
  },
  {
    title: "AI Knowledge Bases",
    description: "Train an internal brain on your documents, PDFs, and data for instant staff or customer answers.",
    icon: Database,
    color: "from-emerald-500 to-teal-400",
    features: ["Document Parsing", "Semantic Search", "Strict Privacy"]
  },
  {
    title: "Elite Web Design",
    description: "Conversion-optimized websites built for high performance, high speed, and maximum impact.",
    icon: Layout,
    color: "from-rose-500 to-pink-500",
    features: ["SEO Optimized", "Mobile First", "Interactive Experiences"]
  }
];

export const Services: React.FC = () => {
  const scrollToConsultant = () => {
    const element = document.getElementById('consultant');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-3">Our Expertise</h2>
            <p className="text-4xl md:text-5xl font-extrabold text-white">
              The Four Pillars of <br /> Modern Automation.
            </p>
          </div>
          <p className="text-gray-400 max-w-sm">
            We don't just provide tools. We architect complete business ecosystems powered by artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group relative glass p-8 md:p-10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`}></div>
              
              <div className="flex items-start justify-between mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                  <service.icon size={32} />
                </div>
                <button 
                  onClick={scrollToConsultant}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all active:scale-90"
                >
                  <ArrowUpRight size={20} />
                </button>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-sky-400 transition-colors">{service.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {service.features.map((feat, fIdx) => (
                  <span key={fIdx} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};