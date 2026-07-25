"use client"

import { useMemo } from "react"

export function LightningBackground() {
  // Generate random positions and animation properties for stars
  const stars = useMemo(() => {
    return Array.from({ length: 140 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1.5, // size between 1.5px and 4.5px
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 4 + 2}s`, // duration between 2s and 6s
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.7 + 0.3,
    }))
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            animationDuration: `${Math.random() * 6 + 4}s`, // duration between 4s and 10s
            animationDelay: star.delay,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
          }}
        />
      ))}
    </div>
  )
}
