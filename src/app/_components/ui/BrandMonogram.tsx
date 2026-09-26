"use client";

interface BrandMonogramProps {
  size?: number;
  className?: string;
  showGlow?: boolean;
}

export function BrandMonogram({
  size = 32,
  className = "",
  showGlow = true,
}: BrandMonogramProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Interactive hover glow */}
      {showGlow && (
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[22%] bg-maroon/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
      )}

      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full"
      >
        <defs>
          {/* Background Radial Glow */}
          <radialGradient id="monoBgRadial" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#4E121A" />
            <stop offset="55%" stopColor="#24070B" />
            <stop offset="100%" stopColor="#120305" />
          </radialGradient>

          {/* Outer Border Gold Gradient */}
          <linearGradient id="monoBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F7EEDD" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#D8C5A5" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#A8906E" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#5A171F" stopOpacity="0.4" />
          </linearGradient>

          {/* Primary Monogram Gold Gradient */}
          <linearGradient id="monoMfGold" x1="15%" y1="20%" x2="85%" y2="85%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#F5E8D2" />
            <stop offset="60%" stopColor="#D8C5A5" />
            <stop offset="100%" stopColor="#B39366" />
          </linearGradient>

          {/* F Crossbar Ember Accent Gradient */}
          <linearGradient id="monoFAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5E8D2" />
            <stop offset="60%" stopColor="#D8C5A5" />
            <stop offset="100%" stopColor="#E07A5F" />
          </linearGradient>

          {/* Drop Shadow for 3D Monogram Depth */}
          <filter id="monoDropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.7" />
            <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#7B232E" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Base Plate: Architectural Rounded Square */}
        <rect
          x="6"
          y="6"
          width="88"
          height="88"
          rx="20"
          fill="url(#monoBgRadial)"
          stroke="url(#monoBorderGrad)"
          strokeWidth="2"
        />

        {/* Subtle Geometric Inner Watermark Grid */}
        <rect
          x="11"
          y="11"
          width="78"
          height="78"
          rx="15"
          fill="none"
          stroke="#D8C5A5"
          strokeWidth="0.8"
          strokeDasharray="2 3"
          opacity="0.25"
        />

        {/* 4 Architectural Precision Corner Brackets */}
        <g stroke="#D8C5A5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.65">
          <path d="M 12 21 L 12 12 L 21 12" />
          <path d="M 79 12 L 88 12 L 88 21" />
          <path d="M 12 79 L 12 88 L 21 88" />
          <path d="M 79 88 L 88 88 L 88 79" />
        </g>

        {/* The MF Interlocking Monogram Geometry */}
        <g filter="url(#monoDropShadow)">
          {/* Letter M Core Path: Left Stem -> Center Vertex -> Right Stem */}
          <path
            d="M 24 73 L 24 27 L 44 51 L 64 27 L 64 73"
            fill="none"
            stroke="url(#monoMfGold)"
            strokeWidth="7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Letter F Top Horizontal Beam */}
          <path
            d="M 64 27 L 81 27"
            fill="none"
            stroke="url(#monoMfGold)"
            strokeWidth="7.5"
            strokeLinecap="round"
          />

          {/* Letter F Middle Horizontal Cantilever */}
          <path
            d="M 64 50 L 76 50"
            fill="none"
            stroke="url(#monoFAccent)"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Central Diamond Talisman Keystone */}
          <polygon
            points="44,46 48,51 44,56 40,51"
            fill="#FFF9F0"
          />

          {/* Subtle Terminal Accent Dot on F Beam */}
          <circle cx="76" cy="50" r="1.5" fill="#FFF5E5" />
        </g>
      </svg>
    </div>
  );
}
