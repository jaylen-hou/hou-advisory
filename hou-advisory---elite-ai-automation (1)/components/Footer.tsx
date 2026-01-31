
import React from 'react';
import { Instagram } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Logo className="w-14 h-14" />
              <span className="text-2xl font-bold tracking-tight text-white">
                Hou Advisory
              </span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Hou Advisory empowers small business owners with high-end AI solutions that were previously only available to Silicon Valley giants. Scale faster, stress less.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/houadvisory?igsh=MzRlODBiNWFlZA==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent transition-all text-white group"
                aria-label="Instagram"
              >
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">AI Receptionist</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Smart Chatbots</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Knowledge Base</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Web Design</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Hou Advisory. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
