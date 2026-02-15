export default function Noise() {
  return (
    <div
      className="fixed inset-0 z-[5] pointer-events-none opacity-[0.03] text-transparent"
      style={{
        backgroundImage: "url('/noise.png')", 
        backgroundSize: "200px 200px",
      }}
    >
        {/* Fallback pattern if image is missing using CSS radial noise trick or just simple repeating gradient */}
        <div 
            className="absolute inset-0 w-full h-full"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
                width: '100%',
                height: '100%',
                opacity: 1
            }}
        />
    </div>
  );
}
