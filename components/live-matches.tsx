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

      // Calculate match start and end time (each match lasts 1 hour: from scheduled time to scheduled time + 60 mins)
      const liveMatches = calendar.filter((m) => {
        if (m.status === 'finished') return false
        const startTime = parseMatchDateTime(m.date, m.time)
        const endTime = new Date(startTime.getTime() + 60 * 60 * 1000)
        return now >= startTime && now < endTime
      })

      let selectedMatches: any[] = []

      if (liveMatches.length > 0) {
        // Show active live match(es) in real-time
        selectedMatches = liveMatches.map((m) => {
          const startTime = parseMatchDateTime(m.date, m.time)
          const diffMs = now.getTime() - startTime.getTime()
          const currentMinute = Math.min(Math.floor(diffMs / (1000 * 60)), 50)
          return {
            id: m.id,
            home: m.home,
            away: m.away,
            status: 'live',
            minute: `${currentMinute}'`,
            date: m.date,
            time: m.time,
            homeScore: m.homeScore ?? 0,
            awayScore: m.awayScore ?? 0,
            viewers: `${Math.floor(Math.random() * 300) + 250}`
          }
        })
      } else {
        // If no match is currently live, find the very next upcoming match scheduled in the calendar
        const upcomingMatches = calendar.filter((m) => {
          if (m.status === 'finished') return false
          const startTime = parseMatchDateTime(m.date, m.time)
          return startTime.getTime() > now.getTime()
        })

        const matchesToShow = upcomingMatches.length > 0 ? upcomingMatches.slice(0, 2) : calendar.slice(-2)

        selectedMatches = matchesToShow.map((m) => ({
          id: m.id,
          home: m.home,
          away: m.away,
          status: 'upcoming',
          minute: '',
          date: m.date,
          time: m.time,
          homeScore: m.homeScore,
          awayScore: m.awayScore,
        }))
      }

      setActiveMatches(selectedMatches)
    }

    updateMatches()
    // Poll every 1 second to update minute counter and automatically transition when a match starts or ends
    const interval = setInterval(updateMatches, 1000)
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


