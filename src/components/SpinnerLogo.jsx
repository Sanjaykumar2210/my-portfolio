import { cn } from "@/lib/utils";

export const SpinnerLogo = ({ className }) => {
  return (
    <div className={cn("relative w-12 h-12 flex items-center justify-center group", className)}>
      {/* Outer ring with dashes */}
      <div className="absolute inset-0 animate-[spin_6s_linear_infinite]">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-3 bg-primary/80"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 30}deg) translateY(-20px)`,
              transformOrigin: '50% 50%',
              opacity: (1 - (i % 3) * 0.2),
            }}
          />
        ))}
      </div>

      {/* Middle rotating hexagon */}
      <div className="absolute inset-[4px] animate-[spin_8s_linear_infinite_reverse]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-full"
            style={{
              transform: `rotate(${i * 60}deg)`,
            }}
          >
            <div className="absolute top-0 left-1/2 w-1 h-1/2 bg-gradient-to-b from-primary/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Inner pulsing core */}
      <div className="absolute inset-[8px]">
        <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
        <div className="absolute inset-[2px] rounded-full bg-background" />
        <div className="absolute inset-[4px] rounded-full bg-gradient-to-tr from-primary/40 to-transparent animate-[spin_4s_linear_infinite]" />
      </div>

      {/* Energy rings */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-primary/30 animate-ping"
          style={{
            inset: `${-4 * (i + 1)}px`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: '2s',
          }}
        />
      ))}

      {/* Corner accents */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2"
          style={{
            top: i < 2 ? '-4px' : 'auto',
            bottom: i >= 2 ? '-4px' : 'auto',
            left: i % 2 === 0 ? '-4px' : 'auto',
            right: i % 2 === 1 ? '-4px' : 'auto',
          }}
        >
          <div 
            className="w-full h-full bg-primary/40 animate-pulse"
            style={{
              animationDelay: `${i * 0.2}s`,
              clipPath: 'polygon(0 0, 100% 0, 100% 2px, 2px 2px, 2px 100%, 0 100%)',
            }}
          />
        </div>
      ))}

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500" />
    </div>
  );
}; 