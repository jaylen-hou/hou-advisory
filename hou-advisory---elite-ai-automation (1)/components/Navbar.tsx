
import React from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Logo className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Hou Advisory
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Services</button>
          <button onClick={() => scrollToSection('consultant')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">AI Consultant</button>
          <button onClick={() => scrollToSection('work')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Our Work</button>
          <a 
            href="tel:+19252383722"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 active:scale-95 shadow-lg shadow-white/5"
          >
            <Phone size={14} />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300 md:hidden">
          <button onClick={() => scrollToSection('services')} className="text-left text-lg font-medium text-white">Services</button>
          <button onClick={() => scrollToSection('consultant')} className="text-left text-lg font-medium text-white">AI Consultant</button>
          <button onClick={() => scrollToSection('work')} className="text-left text-lg font-medium text-white">Our Work</button>
          <a 
            href="tel:+19252383722"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            Call Us Today
          </a>
        </div>
      )}
    </nav>
  );
};