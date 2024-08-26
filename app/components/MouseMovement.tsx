"use client";

import { useState, useEffect } from 'react';

export default function MouseMovement() {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none w-44 h-44 rounded-full bg-white opacity-50 mix-blend-overlay z-50 transition-transform duration-100 ease-out"
      style={{
        top: position.y - 78, // centering
        left: position.x - 78,
        background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)',
      }}
    />
  );
}
