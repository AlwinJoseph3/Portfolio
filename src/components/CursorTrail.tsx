import { useEffect, useRef } from "react";

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const particles: (Particle | Comet)[] = [];
    const mouse = { x: 0, y: 0, moved: false };

    class Particle {
      x: number;
      y: number;
      size: number;
      baseSize: number;
      speedX: number;
      speedY: number;
      color: string;
      life: number;
      maxLife: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseSize = Math.random() * 2 + 1;
        this.size = this.baseSize;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;

        const colors = ["#007AFF", "#5fc3ff", "#ffffff", "#818cf8"];
        this.color = colors[Math.floor(Math.random() * colors.length)];

        this.maxLife = Math.random() * 30 + 20;
        this.life = this.maxLife;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        this.size = Math.max(0, (this.life / this.maxLife) * this.baseSize);
      }

      draw() {
        if (!ctx || this.size <= 0) return;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    class Comet {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      life: number;
      maxLife: number;
      history: { x: number; y: number }[];

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 2;
        // High speed "zip"
        const angle = Math.random() * Math.PI * 2;
        const force = 15 + Math.random() * 10;
        this.speedX = Math.cos(angle) * force;
        this.speedY = Math.sin(angle) * force;

        this.color = "#ffffff";
        this.maxLife = 40;
        this.life = this.maxLife;
        this.history = [];
      }

      update() {
        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > 10) this.history.shift();

        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
      }

      draw() {
        if (!ctx || this.life <= 0) return;

        // Draw tail
        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
        ctx.lineWidth = this.size;
        ctx.lineCap = "round";
        ctx.beginPath();
        if (this.history.length > 0) {
          ctx.moveTo(this.history[0].x, this.history[0].y);
          for (const p of this.history) {
            ctx.lineTo(p.x, p.y);
          }
        }
        ctx.stroke();

        // Draw head
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 20;
        ctx.shadowColor = "#007AFF";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.moved = true;

      for (let i = 0; i < 3; i++) {
        particles.push(new Particle(mouse.x, mouse.y));
      }

      // Rare chance for a comet
      if (Math.random() < 0.03) {
        particles.push(new Comet(mouse.x, mouse.y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none mix-blend-screen"
    />
  );
};

export default CursorTrail;
