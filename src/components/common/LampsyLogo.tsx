'use client';

interface Props {
  color?: string;
  height?: number;
  showText?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function LampsyLogo({ color = 'currentColor', height = 54, showText = true, className, style }: Props) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: color,
        textDecoration: 'none',
        ...style,
      }}
    >
      <svg
        height={height}
        viewBox="0 0 180 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', height: `${height}px`, width: 'auto' }}
      >
        {/* Arch Frame */}
        <path
          d="M 45 92 V 50 A 45 45 0 0 1 135 50 V 92 Z"
          stroke="currentColor"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Vertical Center Sun Ray */}
        <line x1="90" y1="12" x2="90" y2="65" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />

        {/* Diagonal Sun Rays */}
        <line x1="90" y1="50" x2="58" y2="22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="90" y1="50" x2="122" y2="22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="90" y1="60" x2="48" y2="48" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="90" y1="60" x2="132" y2="48" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="90" y1="72" x2="46" y2="74" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <line x1="90" y1="72" x2="134" y2="74" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />

        {/* Lotus Petals Base */}
        {/* Center Petal */}
        <path
          d="M 90 92 C 76 74 90 52 90 52 C 90 52 104 74 90 92 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Left Petal */}
        <path
          d="M 90 92 C 68 80 64 58 64 58 C 64 58 84 70 90 92 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />

        {/* Right Petal */}
        <path
          d="M 90 92 C 112 80 116 58 116 58 C 116 58 96 70 90 92 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />

        {/* Base Line */}
        <line x1="40" y1="92" x2="140" y2="92" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" />

        {/* Wordmark (Text) */}
        {showText && (
          <text
            x="90"
            y="124"
            textAnchor="middle"
            fill="currentColor"
            fontFamily="'Cinzel', 'Didot', 'Bodoni MT', 'Times New Roman', serif"
            fontSize="24"
            fontWeight="700"
            letterSpacing="7"
          >
            LAMPSY
            <tspan fontSize="11" dy="-10" dx="2">TM</tspan>
          </text>
        )}
      </svg>
    </div>
  );
}
