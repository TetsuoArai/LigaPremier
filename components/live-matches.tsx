"use client"

import { Play, Eye } from 'lucide-react'
import { getActiveLiveMatches, teams, calendar, parseMatchDateTime } from '@/lib/data'
import { TeamBadge } from '@/components/team-badge'
import { SectionHeading } from '@/components/section-heading'
import { useEffect, useState } from 'react'

function findTeam(name: string) {
  return teams.find((t) => t.name === name)
}

export function LiveMatches() {
  const [activeMatches, setActiveMatches] = useState<any[]>([])

  useEffect(() => {
    const updateMatches = () => {
      const now = new Date()
      // We will show the first 2 matches from the calendar.
      // If a match's scheduled time is active (now is between matchTime and matchTime + 2 hours), we mark it as "live".
      // Otherwise, it is "upcoming".
      const firstMatches = calendar.slice(0, 2).map((m) => {
        const matchTime = parseMatchDateTime(m.date, m.time)
        const diffMs = now.getTime() - matchTime.getTime()
        const diffHours = diffMs / (1000 * 60 * 60)
        const isLive = diffHours >= 0 && diffHours < 2

        let status: 'live' | 'upcoming' | 'finished' = 'upcoming'
        let minute = ''
        if (isLive) {
          status = 'live'
          const currentMinute = Math.min(Math.floor(diffMs / (1000 * 60)), 90)
          minute = `${currentMinute}'`
        } else if (diffHours >= 2) {
          status = 'finished'
        }

        return {
          id: m.id,
          home: m.home,
          away: m.away,
          status,
          minute,
          date: m.date,
          time: m.time,
          viewers: isLive ? `${Math.floor(Math.random() * 500) + 150}` : undefined
        }
      })
      setActiveMatches(firstMatches)
    }

    updateMatches()
    const interval = setInterval(updateMatches, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="en-vivo" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Transmisión"
        title="Partidos en vivo"
        description="Cobertura HD del 100% de los partidos con tecnología VAR."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {activeMatches.map((m) => {
          const home = findTeam(m.home)
          const away = findTeam(m.away)
          const isLive = m.status === 'live'

          return (
            <article
              key={m.id}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div
                className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)' }}
                aria-hidden="true"
              />
              <div className="flex items-center justify-between">
                {isLive ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-foreground">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-foreground" />
                    En vivo · {m.minute}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                    Próximamente
                  </span>
                )}
                {isLive ? (
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Eye className="h-3.5 w-3.5" />
                    {m.viewers} viendo
                  </span>
                ) : (
                  <span className="text-xs text-muted-foreground bg-secondary/50 px-2.5 py-1 rounded-full">
                    {m.date} · {m.time}
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex flex-1 flex-col items-center gap-3 text-center">
                  <TeamBadge short={home?.short ?? '??'} logo={home?.logo} color={home?.color ?? '#fff'} size="xl" />
                  <span className="text-sm font-semibold leading-tight">{m.home}</span>
                </div>
                <div className="flex flex-col items-center px-4">
                  <div className="font-display text-4xl font-bold tracking-tight">
                    VS
                  </div>
                </div>

                <div className="flex flex-1 flex-col items-center gap-3 text-center">
                  <TeamBadge short={away?.short ?? '??'} logo={away?.logo} color={away?.color ?? '#fff'} size="xl" />
                  <span className="text-sm font-semibold leading-tight">{m.away}</span>
                </div>
              </div>

              <a
                href="https://kick.com/ligapfd"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Play className="h-4 w-4 fill-current" />
                {isLive ? 'Ver transmisión HD' : 'Ir al canal de Kick'}
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}


