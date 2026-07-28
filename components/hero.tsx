'use client'

import { useEffect, useState } from 'react'
import { Play, Trophy, Users, Video } from 'lucide-react'

const FOTO_GRUPAL_HERO_IMAGES = [
  '/fotoGrupal/DSC00729.jpg',
  '/fotoGrupal/DSC00734.jpg',
  '/fotoGrupal/DSC01272.jpg',
  '/fotoGrupal/DSC01283.jpg',
  '/fotoGrupal/DSC01781.jpg',
  '/fotoGrupal/DSC01784.jpg',
  '/fotoGrupal/DSC02133.jpg',
  '/fotoGrupal/DSC02139.jpg',
  '/fotoGrupal/DSC02559.jpg',
  '/fotoGrupal/DSC02564.jpg',
  '/fotoGrupal/DSC02840.jpg',
  '/fotoGrupal/DSC02845.jpg',
]

const stats = [
  { icon: Users, label: 'Equipos', value: '12' },
  { icon: Video, label: 'Partidos HD', value: '100%' },
  { icon: Trophy, label: 'Bolsa Campeón', value: 'RD$80K' },
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % FOTO_GRUPAL_HERO_IMAGES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, var(--color-primary), transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Temporada 2026 · Colegio Claret, Santo Domingo
          </div>

          <h1 className="mt-6 text-balance font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            El futsal <br />
            <span className="text-primary">como nunca</span> <br />
            lo has visto.
          </h1>

          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Goles, transmisiones en vivo en HD, tabla de posiciones y calendario oficial.
            La máxima expresión del futsal competitivo en República Dominicana, con VAR y
            cobertura del 100% de los partidos.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#en-vivo"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <Play className="h-4 w-4 fill-current" />
              Ver transmisión
            </a>
            <a
              href="#tabla"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              Ver tabla
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card/50 p-4 backdrop-blur">
                <s.icon className="h-5 w-5 text-primary" />
                <dd className="mt-3 font-display text-2xl font-bold tracking-tight">{s.value}</dd>
                <dt className="text-xs text-muted-foreground">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="animate-float-slow relative aspect-[4/5] min-h-[480px] md:min-h-[520px] w-full overflow-hidden rounded-3xl border border-border shadow-2xl">
            {/* Automatic FotoGrupal Slideshow with clean crossfade transitions */}
            {FOTO_GRUPAL_HERO_IMAGES.map((imgSrc, index) => {
              const isActive = index === currentImageIndex
              return (
                <img
                  key={imgSrc}
                  src={imgSrc}
                  alt="Equipo de futsal Liga Premier Dominicana"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
