import { useState, useCallback } from "react";

const PixelSandbox = ({}: { isDark: boolean }) => {
  const [pixels, setPixels] = useState<Record<string, boolean>>({});
  const [isDrawing, setIsDrawing] = useState(false);

  const togglePixel = useCallback((id: string, state: boolean) => {
    setPixels((prev) => ({ ...prev, [id]: state }));
  }, []);

  const handleMouseEnter = (id: string) => {
    if (isDrawing) togglePixel(id, true);
  };

  const clearCanvas = () => setPixels({});

  return (
    <div
      className="w-full h-full bg-zinc-50 dark:bg-zinc-950 rounded-[2.5rem] overflow-hidden relative border border-zinc-200 dark:border-zinc-800 group cursor-crosshair transition-colors duration-500"
      onMouseDown={() => setIsDrawing(true)}
      onMouseUp={() => setIsDrawing(false)}
      onMouseLeave={() => setIsDrawing(false)}
    >
      <div className="absolute inset-0 grid grid-cols-12 md:grid-cols-20 gap-px p-1 opacity-60 dark:opacity-40">
        {Array.from({ length: 240 }).map((_, i) => {
          const id = `pixel-${i}`;
          return (
            <div
              key={id}
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseDown={() => togglePixel(id, true)}
              className={`w-full aspect-square rounded-sm transition-all duration-300 ${
                pixels[id]
                  ? "bg-[#007AFF] shadow-[0_0_15px_#007AFF] scale-90"
                  : "bg-zinc-200 dark:bg-zinc-900 group-hover:bg-zinc-300 dark:group-hover:bg-zinc-800"
              }`}
            />
          );
        })}
      </div>

      <div className="relative z-10 p-8 pointer-events-none">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-[#007AFF] rounded-full animate-pulse" />
          <span className="text-[10px] font-mono text-[#007AFF] uppercase tracking-widest font-bold">
            Interactive_Canvas.v1
          </span>
        </div>
        <h3 className="text-2xl font-black text-black dark:text-white uppercase tracking-tighter transition-colors">
          Pixel <br /> Playground
        </h3>
      </div>

      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center z-20">
        <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase pointer-events-none">
          Click & Drag to Draw
        </span>
        <button
          onClick={clearCanvas}
          className="text-[10px] font-mono text-[#007AFF] uppercase border border-[#007AFF]/30 px-3 py-1 rounded-full hover:bg-[#007AFF] hover:text-white transition-all active:scale-90"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default PixelSandbox;
