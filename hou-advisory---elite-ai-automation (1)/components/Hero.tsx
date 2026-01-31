
import React from 'react';
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8 animate-in fade-in slide-in-from-bottom-2">
            <Sparkles size={14} />
            The Elite AI Advisory for Small Business
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Automate with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-[#1e3a8a] to-slate-400">
              Confidence.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            Hou Advisory integrates cutting-edge AI receptionists and intelligent automation workflows to help local leaders reclaim their time and scale without friction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <button 
              onClick={() => scrollToSection('consultant')}
              className="group px-8 py-4 rounded-full bg-[#1e3a8a] hover:bg-blue-700 text-white font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-900/30 active:scale-95"
            >
              Begin Transformation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-lg transition-all active:scale-95"
            >
              The Hou Method
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
          <div className="glass p-6 rounded-3xl group hover:border-blue-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">99% Faster Response</h3>
            <p className="text-gray-400 text-sm">Automate customer inquiries instantly with AI that learns your brand voice.</p>
          </div>
          <div className="glass p-6 rounded-3xl group hover:border-slate-400/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-slate-500/10 flex items-center justify-center text-slate-400 mb-4 group-hover:scale-110 transition-transform">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Operations</h3>
            <p className="text-gray-400 text-sm">Your business stays open while you sleep. No missed calls, ever.</p>
          </div>
          <div className="glass p-6 rounded-3xl group hover:border-blue-400/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-400/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Tailored Integration</h3>
            <p className="text-gray-400 text-sm">Custom-built solutions that fit into your existing workflow seamlessly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};