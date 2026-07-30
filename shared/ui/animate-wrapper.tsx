"use client"

import { useEffect, useRef, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimateWrapperProps {
  children: ReactNode
  type?: "fade" | "fade-up" | "fade-down" | "scale" | "reveal-left" | "reveal-right"
  duration?: number
  delay?: number
  stagger?: number
  once?: boolean
}

export function AnimateWrapper({
  children,
  type = "fade-up",
  duration = 0.8,
  delay = 0,
  stagger = 0.15,
  once = true
}: AnimateWrapperProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    let fromVars: gsap.TweenVars = {}

    switch (type) {
      case "fade-up":
        fromVars = { y: 40, opacity: 0 }
        break
      case "fade-down":
        fromVars = { y: -40, opacity: 0 }
        break
      case "scale":
        fromVars = { scale: 0.9, opacity: 0 }
        break
      case "reveal-left":
        fromVars = { x: -60, opacity: 0 }
        break
      case "reveal-right":
        fromVars = { x: 60, opacity: 0 }
        break
      case "fade":
      default:
        fromVars = { opacity: 0 }
        break
    }

    const childrenElements = el.children.length > 0 ? Array.from(el.children) : [el]

    // Set initial state to avoid FOUC (flash of unstyled content)
    gsap.set(childrenElements, fromVars)

    const animation = gsap.to(
      childrenElements,
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: duration,
        delay: delay,
        stagger: stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: once ? "play none none none" : "play reverse play reverse",
        }
      }
    )

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [type, duration, delay, stagger, once])

  return (
    <div ref={elementRef} className="w-full">
      {children}
    </div>
  )
}
