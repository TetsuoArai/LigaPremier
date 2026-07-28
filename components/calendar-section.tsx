'use client'

import { useMemo, useState } from 'react'
import { CalendarDays, Clock, MapPin } from 'lucide-react'
import { calendar, teams, parseMatchDateTime } from '@/lib/data'
import { TeamBadge } from '@/components/team-badge'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

function teamByShort(short: string) {
  return teams.find((t) => t.short === short)
}

export function CalendarSection() {
  const days = useMemo(() => Array.from(new Set(calendar.map((c) => c.date))), [])
  const [active, setActive] = useState(days[0])

  const matches = calendar.filter((c) => c.date === active)

  return (
    <section id="calendario" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Temporada 2026"
        title="Calendario y Resultados"
        description="Consulta las fechas y los marcadores oficiales de cada jornada."
      />

      <div className="mb-8 flex flex-wrap gap-3">
        {days.map((d) => {
          const day = calendar.find((c) => c.date === d)?.day
          return (
            <button
              key={d}
              type="button"
              onClick={() => setActive(d)}
              className={cn(
                'flex min-w-24 flex-col items-center rounded-2xl border px-5 py-3 transition-all',
                active === d
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground',
              )}
            >
              <span className="text-xs font-medium uppercase tracking-wide">{day}</span>
              <span className="font-display text-base font-bold">{d}</span>
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {matches.map((m) => {
          const home = teamByShort(m.homeShort)
          const away = teamByShort(m.awayShort)
          return (
            <article
              key={m.id}
              className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex flex-col items-center gap-1 border-r border-border pr-4">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-display text-sm font-bold">{m.time}</span>
              </div>

              <div className="flex flex-1 items-center justify-between gap-4 min-w-0">
                <div className="flex flex-1 items-center gap-4 min-w-0">
                  <TeamBadge short={m.homeShort} logo={home?.logo} color={home?.color ?? '#fff'} size="sm" className="flex-shrink-0" />
                  <span className="truncate text-sm font-semibold sm:text-base">{m.home}</span>
                </div>
                {m.status === 'finished' && m.homeScore !== undefined && m.awayScore !== undefined ? (
                  <span className="font-display text-sm font-extrabold text-primary px-3 py-1 bg-secondary/60 rounded-xl whitespace-nowrap">
                    {m.homeScore} – {m.awayScore}
                  </span>
                ) : (
                  <span className="font-display text-xs font-bold text-muted-foreground px-2">VS</span>
                )}
                <div className="flex flex-1 items-center justify-end gap-4 text-right min-w-0">
                  <span className="truncate text-sm font-semibold sm:text-base">{m.away}</span>
                  <TeamBadge short={m.awayShort} logo={away?.logo} color={away?.color ?? '#fff'} size="sm" className="flex-shrink-0" />
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
        <MapPin className="h-4 w-4 text-primary" />
        Todos los partidos se disputan en el Colegio Claret, Santo Domingo (Distrito Nacional).
        <CalendarDays className="ml-auto hidden h-4 w-4 sm:block" />
      </div>
    </section>
  )
}
