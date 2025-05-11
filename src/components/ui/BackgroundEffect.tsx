import React, { useEffect, useRef } from 'react';

const BackgroundEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas size
    const updateSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    // Particle properties
    const particleCount = Math.min(Math.floor(width * 0.03), 100);
    const particleSize = 2;
    const particleMinSpeed = 0.05;
    const particleMaxSpeed = 0.2;
    const particleColors = [
      'rgba(0, 102, 255, 0.8)',   // Blue
      'rgba(10, 255, 255, 0.8)',  // Turquoise
      'rgba(138, 43, 226, 0.8)'   // Purple
    ];
    const connectionDistance = 200;
    const connectionOpacity = 0.8;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
    }

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() * (particleMaxSpeed - particleMinSpeed) + particleMinSpeed) * (Math.random() > 0.5 ? 1 : -1),
        vy: (Math.random() * (particleMaxSpeed - particleMinSpeed) + particleMinSpeed) * (Math.random() > 0.5 ? 1 : -1),
        color: particleColors[Math.floor(Math.random() * particleColors.length)]
      });
    }

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particles
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * connectionOpacity;
            const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            gradient.addColorStop(0, p.color.replace('0.8', String(opacity)));
            gradient.addColorStop(1, p2.color.replace('0.8', String(opacity)));

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-50 z-0"
    />
  );
};

export default BackgroundEffect;