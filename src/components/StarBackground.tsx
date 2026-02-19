import { useState, useEffect } from "react";
import { useKonamiCode } from "../hooks/useKonamiCode";

const Starfield = () => {
  const [isGalaxyMode, setIsGalaxyMode] = useState(false);
  const { triggered, setTriggered } = useKonamiCode();

  useEffect(() => {
    if (triggered) {
      console.log("KONAMI CODE ACTIVATED 🚀");
      setIsGalaxyMode((prev) => !prev);
      setTriggered(false);
    }
  }, [triggered, setTriggered]);

  const shootingStars = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${2 + Math.random() * 3}s`,
  }));

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black transition-colors duration-1000">
      {/* Galaxy Mode Container */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isGalaxyMode ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 stars-galaxy opacity-100" />

        {isGalaxyMode &&
          shootingStars.map((star) => (
            <div
              key={star.id}
              className="shooting-star"
              style={{
                top: star.top,
                left: star.left,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
            />
          ))}
      </div>

      {/* Static Stars Container */}
      <div
        className={`absolute inset-0 stars-static transition-opacity duration-1000 ${
          isGalaxyMode ? "opacity-0" : "opacity-60"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
    </div>
  );
};

export default Starfield;
