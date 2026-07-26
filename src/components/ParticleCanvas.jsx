"use client";
import React, { useRef, useEffect } from "react";

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null, radius: 120 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const initCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      initParticles();
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 1.5;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        // this.color = "#208BC9";
        this.color = "#fff";

        // Life Cycle Properties
        this.opacity = 0;
        this.maxOpacity = 0.6;
        this.fadeSpeed = 0.005 + Math.random() * 0.005;
        this.life = 0;
        this.maxLife = 200 + Math.random() * 400; // Total frames
        this.state = "fadeIn"; // fadeIn, active, fadeOut
      }

      draw() {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;

        ctx.shadowBlur = 7;
        ctx.shadowColor = this.color;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      update() {
        // Handle Life Cycle States
        if (this.state === "fadeIn") {
          this.opacity += this.fadeSpeed;
          if (this.opacity >= this.maxOpacity) {
            this.opacity = this.maxOpacity;
            this.state = "active";
          }
        } else if (this.state === "active") {
          this.life++;
          if (this.life >= this.maxLife) {
            this.state = "fadeOut";
          }
        } else if (this.state === "fadeOut") {
          this.opacity -= this.fadeSpeed;
          if (this.opacity <= 0) {
            this.reset();
          }
        }

        // Movement
        this.x += this.vx;
        this.y += this.vy;

        // Mouse Repel
        if (mouse.current.x !== null) {
          const dx = this.x - mouse.current.x;
          const dy = this.y - mouse.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.current.radius) {
            const force =
              (mouse.current.radius - distance) / mouse.current.radius;
            const strength = 3.0;
            this.x += (dx / distance) * force * strength;
            this.y += (dy / distance) * force * strength;
          }
        }

        // Wrap
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
    }

    const initParticles = () => {
      particles.current = [];
      const numberOfParticles = 60; // Slightly more to account for fading
      for (let i = 0; i < numberOfParticles; i++) {
        const p = new Particle();
        // Stagger initial life to prevent them all fading at once
        p.life = Math.random() * p.maxLife;
        if (p.life > p.maxLife * 0.8) p.state = "fadeOut";
        else {
          p.state = "active";
          p.opacity = p.maxOpacity;
        }
        particles.current.push(p);
      }
    };

    const animate = () => {
      // ctx.fillStyle = "#000000";
      // ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    const handleMouseOut = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    window.addEventListener("resize", initCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    initCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", initCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        overflow: "hidden",
        // optional: make this transparent so it doesn't add a black block
        background: "transparent",
        pointerEvents: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default ParticleCanvas;
