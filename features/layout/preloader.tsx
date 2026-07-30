"use client"

import { useEffect, useState } from "react"

export function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700">
      {/* Animated glowing container for league logo */}
      <div className="relative flex items-center justify-center">
        {/* Pulsing rings behind logo */}
        <div className="absolute h-72 w-72 rounded-full bg-primary/20 animate-ping opacity-75" />
        <div className="absolute h-60 w-60 rounded-full bg-accent/25 animate-pulse blur-2xl" />

        {/* League Logo with larger size and glowing scale animation */}
        <img
          src="/LigaPremierFutsalDominicana.png"
          alt="Liga Premier Futsal Dominicana Logo"
          className="relative h-48 sm:h-56 md:h-64 w-auto animate-bounce duration-1000 object-contain drop-shadow-[0_0_35px_rgba(63,184,255,0.7)]"
        />
      </div>
    </div>
  )
}
