
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, BrainCircuit } from 'lucide-react';
import { getAIConsultation } from '../services/gemini';
import { Logo } from './Logo';

interface Message {
  role: 'bot' | 'user';
  content: string;
}

export const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: "Hello! I'm your Hou Advisory Strategist. Tell me about your business, and I'll build you a custom automation roadmap." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getAIConsultation(userMsg);
    
    setMessages(prev => [...prev, { role: 'bot', content: response || "I'm unable to process that right now." }]);
    setIsLoading(false);
  };

  return (
    <section id="consultant" className="py-24 bg-[#050a14] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <BrainCircuit size={14} />
            Live Strategy Preview
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Meet Your <span className="text-blue-500">Hou Strategist.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience our technology firsthand. Ask how we can transform your specific industry or business workflow.
          </p>
        </div>

        <div className="glass rounded-[2.5rem] border-white/5 overflow-hidden shadow-2xl flex flex-col h-[650px]">
          {/* Chat Header */}
          <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between bg-white/5">
            <div className="flex items-center gap-4">
              <Logo className="w-10 h-10 border-none shadow-none" />
              <div>
                <p className="text-sm font-bold text-white leading-none">Hou Advisory Expert</p>
                <p className="text-[10px] text-blue-400 uppercase tracking-widest mt-1">Ready for Strategy</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">System Active</span>
            </div>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-black/20">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden ${msg.role === 'user' ? 'bg-[#1e3a8a]' : 'bg-white'}`}>
                    {msg.role === 'user' ? <User size={14} className="text-white" /> : <Logo className="w-full h-full border-none shadow-none" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-[#1e3a8a] text-white rounded-tr-none shadow-lg' 
                      : 'bg-white/5 border border-white/5 text-gray-300 rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Logo className="w-full h-full border-none shadow-none" />
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-gray-400 italic text-sm flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    Analyzing market data...
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 bg-white/5 border-t border-white/5">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask our AI strategist about your business..."
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 pr-16 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-2 bottom-2 px-4 rounded-xl bg-[#1e3a8a] text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
