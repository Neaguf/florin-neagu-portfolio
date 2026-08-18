"use client";

import { useEffect, useRef, useState } from "react";

// Loads the source image, then strips near-black background pixels to
// transparency on a canvas so only the device + neon glow float on the page.
export function DeviceCutout({
  src,
  width,
  height,
  alt = "",
  className,
}: {
  src: string;
  width: number;
  height: number;
  alt?: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      if (cancelled) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);

      const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = data.data;
      // Only strip near-pure-black background; the device chassis itself is
      // dark grey and must stay fully opaque or it reads as faded/washed out.
      const darkCutoff = 4;
      const featherCutoff = 10;

      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const luma = 0.299 * r + 0.587 * g + 0.114 * b;

        if (luma <= darkCutoff) {
          pixels[i + 3] = 0;
        } else if (luma < featherCutoff) {
          const t = (luma - darkCutoff) / (featherCutoff - darkCutoff);
          pixels[i + 3] = Math.round(pixels[i + 3] * t);
        }
      }

      ctx.putImageData(data, 0, 0);
      if (!cancelled) setReady(true);
    };
    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={alt}
      width={width}
      height={height}
      className={className}
      style={{ opacity: ready ? 1 : 0, width: "100%", height: "auto", display: "block" }}
    />
  );
}
