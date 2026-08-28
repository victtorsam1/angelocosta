import React from 'react';

interface PsolLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'badge';
  lightText?: boolean;
}

export const PsolLogo: React.FC<PsolLogoProps> = ({ 
  className = "h-8", 
  variant = 'full',
  lightText = false 
}) => {
  return (
    <div className={`inline-flex items-center gap-1.5 select-none ${className}`} id="psol-branding-badge">
      {/* Sun SVG */}
      <svg 
        viewBox="0 0 100 100" 
        className="h-full aspect-square text-amber-400 drop-shadow-sm" 
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sun rays */}
        <circle cx="50" cy="50" r="28" fill="#FACC15" stroke="#EAB308" strokeWidth="2"/>
        
        {/* Rays around circle */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
          <line
            key={angle}
            x1="50"
            y1="12"
            x2="50"
            y2="4"
            stroke="#FACC15"
            strokeWidth="5"
            strokeLinecap="round"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}

        {/* Happy eyes & smile */}
        <circle cx="41" cy="45" r="3.5" fill="#451a03" />
        <circle cx="59" cy="45" r="3.5" fill="#451a03" />
        <path 
          d="M 39 56 Q 50 67 61 56" 
          stroke="#451a03" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          fill="none" 
        />
        {/* Cheerful cheeks */}
        <ellipse cx="34" cy="53" rx="3" ry="2" fill="#FB923C" opacity="0.6"/>
        <ellipse cx="66" cy="53" rx="3" ry="2" fill="#FB923C" opacity="0.6"/>
      </svg>

      {variant !== 'icon' && (
        <span className={`font-black tracking-tight uppercase text-lg leading-none ${lightText ? 'text-white' : 'text-slate-900'}`}>
          PSOL
        </span>
      )}
    </div>
  );
};
