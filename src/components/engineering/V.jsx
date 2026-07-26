"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const TOTAL_FRAMES = 257;

//ffmpeg -i SV.mp4 -start_number 1 -r 15 -q:v 1 frames/frame_%04d.jpg

export default function V() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const BREAKPOINT = 786;

    if (window.innerWidth < BREAKPOINT) {
      setIsSmallDevice(true);
    }
  }, []);

  useEffect(() => {
    const frameImages = [];
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames/frame_${String(i).padStart(4, "0")}.jpg`;
      frameImages.push(img);
    }
    setImages(frameImages);
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const scale = window.devicePixelRatio || 1;
    canvas.width = 1920 * scale;
    canvas.height = 1080 * scale;
    context.scale(scale, scale);

    const frameState = { frame: 0 };

    const render = () => {
      const img = images[frameState.frame];
      if (img?.complete) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          img,
          0,
          0,
          canvas.width / scale,
          canvas.height / scale,
        );
      }
    };

    gsap.to(frameState, {
      frame: TOTAL_FRAMES - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: isSmallDevice ? "top 50%" : "top 30%",
        end: "+=1500px",
        scrub: true,
      },
      onUpdate: render,
    });

    images[0].onload = render;
    if (images[0].complete) render();
  }, [images]);
  return (
    <div ref={containerRef} className="w-ful relative h-[2000px]">
      <div className="sticky top-0 flex h-screen items-center justify-center md:top-0">
        <canvas
          ref={canvasRef}
          // className="aspect-video max-h-[500px] w-full md:h-[50vh] md:w-auto"
          className="aspect-video max-h-[500px] w-[70vw] bg-red-300"
        />
      </div>
    </div>
  );
}
