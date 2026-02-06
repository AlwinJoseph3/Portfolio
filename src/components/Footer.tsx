import { useEffect, useRef } from "react";

const TerminalFooter = ({ isDark }: { isDark: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  return (
    <footer className="relative w-full h-[400px] bg-white dark:bg-[#0a0a0a] border-t border-zinc-200 dark:border-zinc-800 overflow-hidden cursor-terminal transition-colors duration-500">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40 dark:opacity-30"
      />
    </footer>
  );
};

export default TerminalFooter;
