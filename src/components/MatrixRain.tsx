import { useEffect, useRef } from "react";

// Amber "matrix rain" backdrop — Bitcoin/root themed falling glyphs.
// Rendered as a fixed full-viewport canvas that sits behind all content.
// Dimmed + paired with a vignette/scrim (see App.tsx) so page text stays readable.
// Honors prefers-reduced-motion by drawing a single static frame and not animating.
export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Glyph set: katakana + Bitcoin/Lightning marks + hex + root/runic flourishes.
    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン₿⚡01ルBTCROOT⌘✦◈⬡∞ΩΔ∇√∑".split("");
    const fontSize = 14;

    let columns = 0;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns)
        .fill(0)
        .map(() => (Math.random() * -canvas.height) / fontSize);
    };
    resize();

    // Amber palette — multiple shades give the rain depth.
    const colorFor = (b: number) => {
      if (b > 0.97) return "#fff8e7"; // bright flash
      if (b > 0.85) return "#e8b44a"; // gold
      if (b > 0.6) return "#c8832a"; // amber
      if (b > 0.3) return "#7a4a15"; // mid root
      return "#3a1f05"; // deep root shadow
    };

    const drawFrame = () => {
      // Translucent black fill creates the fading trail.
      ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px 'DM Mono', ui-monospace, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const y = drops[i] * fontSize;
        if (y >= 0 && y <= canvas.height + fontSize) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          const brightness = Math.random();
          ctx.fillStyle =
            Math.random() > 0.7 ? "#fff8e7" : colorFor(brightness);
          ctx.fillText(char, i * fontSize, y);
        }
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.4 + Math.random() * 0.3;
      }
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    if (reduced) {
      // Static: paint a handful of frames so the screen isn't empty, then stop.
      for (let n = 0; n < 60; n++) drawFrame();
    } else {
      const loop = () => {
        drawFrame();
        raf = requestAnimationFrame(loop);
      };
      loop();
      window.addEventListener("resize", resize);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-[0.7]"
    />
  );
}
