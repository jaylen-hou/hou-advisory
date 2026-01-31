
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`${className} bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden border border-slate-200 transition-all duration-300`}>
      <img 
        src="https://msgsndr-private.storage.googleapis.com/companyPhotos/2250894d-b52b-42b3-bb2f-e70ee2e2d21d.jpg" 
        alt="Hou Advisory Logo" 
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback if the specific URL is unavailable
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-[#1e3a8a] flex items-center justify-center text-white font-bold text-lg">H</div>';
        }}
      />
    </div>
  );
};
