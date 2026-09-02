'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'En Vivo', href: '#en-vivo' },
  { label: 'Goles', href: '#goles' },
  { label: 'Tabla', href: '#tabla' },
  { label: 'Playoffs', href: '#cuartos' },
  { label: 'Equipos', href: '#equipos' },
  { label: 'Calendario', href: '#calendario' },
  { label: 'Social', href: '#social' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-border bg-background/80 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <img src="/LigaPremierFutsalDominicana.png" alt="Liga Premier Futsal Dominicana" className="h-9 w-auto transform scale-150" />
          <span className="font-display text-sm font-bold leading-none tracking-tight">
            LIGA PREMIER
            <span className="block text-[10px] font-medium tracking-[0.25em] text-muted-foreground">
              FUTSAL DOMINICANA
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://youtube.com/@ligapfd?si=ErDco62HAuMBql7c"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 text-sm font-bold transition-transform hover:scale-105 sm:inline-flex shadow-md shadow-red-600/25"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Ver en vivo
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
