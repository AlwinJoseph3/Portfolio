import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SignalGlitch = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const triggerGlitch = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 150); // Glitch duration: 150ms
  };

  // Trigger on periodic interval (60 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      triggerGlitch();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // Trigger on navigation
  useEffect(() => {
    triggerGlitch();
  }, [location.pathname]);

  return (
    <div className={isActive ? "glitch-active" : ""}>
      {/* Visual Overlays */}
      <div className="glitch-overlay" />
      <div className="scanlines" />

      {/* SVG Filter for Chromatic Aberration */}
      <svg id="rgb-split-filter" xmlns="http://www.w3.org/2000/svg">
        <filter id="rgb-split">
          <feOffset in="SourceGraphic" dx="-2" dy="0" result="red" />
          <feOffset in="SourceGraphic" dx="2" dy="2" result="blue" />
          <feOffset in="SourceGraphic" dx="0" dy="-1" result="green" />
          <feColorMatrix
            in="red"
            type="matrix"
            values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            result="redOut"
          />
          <feColorMatrix
            in="blue"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0"
            result="blueOut"
          />
          <feColorMatrix
            in="green"
            type="matrix"
            values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"
            result="greenOut"
          />
          <feBlend in="redOut" in2="blueOut" mode="screen" result="rb" />
          <feBlend in="rb" in2="greenOut" mode="screen" />
        </filter>
      </svg>

      <style>
        {isActive
          ? `
          body {
            filter: url(#rgb-split);
            user-select: none;
            pointer-events: none;
          }
        `
          : ""}
      </style>
    </div>
  );
};

export default SignalGlitch;
