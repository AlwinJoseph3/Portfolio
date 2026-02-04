import { useEffect, useRef, useState } from "react";

const TERMINAL_LINES = [
  "> Initialising...",
  "> loading core modules... done",
  "> establishing secure connection...done",
  "> analyzing user metrics...done",
  "> location: KOCHI, KERALA , INDIA",
  "> reach out via: alwinjoseph1403@gmail.com",
];

const TerminalFooter = ({ isDark }: { isDark: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayText, setDisplayText] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 400;

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}/_+$";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      // Background clear color based on theme
      ctx.fillStyle = isDark
        ? "rgba(10, 10, 10, 0.1)"
        : "rgba(255, 255, 255, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#007AFFFF";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(
          Math.floor(Math.random() * characters.length),
        );
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, [isDark]); // Re-run effect when theme changes

  const startTyping = () => {
    if (isTyping) return;
    setIsTyping(true);
    setDisplayText([]);

    let lineIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < TERMINAL_LINES.length) {
        setDisplayText((prev) => [...prev, TERMINAL_LINES[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(interval);
      }
    }, 400);
  };

  return (
    <footer
      className="relative w-full h-[400px] bg-white dark:bg-[#0a0a0a] border-t border-zinc-200 dark:border-zinc-800 overflow-hidden cursor-terminal transition-colors duration-500"
      onClick={startTyping}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40 dark:opacity-30"
      />

      <div className="relative z-10 p-8 md:p-12 max-w-7xl mx-auto h-full font-mono flex flex-col justify-end">
        <div className="space-y-2 bg-zinc-100/80 dark:bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-zinc-200 dark:border-white/5 inline-block self-start shadow-2xl transition-colors">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-[#007AFF]/50" />
          </div>

          {displayText.map((line, idx) => (
            <p
              key={idx}
              className="text-[#007AFF] text-sm md:text-base leading-relaxed tracking-wider"
            >
              {line}
              {idx === displayText.length - 1 && (
                <span className="inline-block w-2 h-5 bg-[#007AFF] animate-pulse ml-2 align-middle" />
              )}
            </p>
          ))}

          {displayText.length === 0 && (
            <p className="text-zinc-400 dark:text-zinc-600 text-sm animate-pulse">
              [ CLICK TO INITIALIZE ]
            </p>
          )}
        </div>

        <div className="mt-12 flex justify-between items-center text-[10px] text-zinc-400 dark:text-zinc-700 uppercase tracking-[0.4em]">
          <span>Designed & Built by Alwin</span>
          <span>© 2026 Version 1.0.0</span>
        </div>
      </div>
    </footer>
  );
};

export default TerminalFooter;
