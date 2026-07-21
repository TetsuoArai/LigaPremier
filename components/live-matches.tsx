import { Play, Eye } from 'lucide-react'
import { liveMatches, teams } from '@/lib/data'
import { TeamBadge } from '@/components/team-badge'
import { SectionHeading } from '@/components/section-heading'

function findTeam(name: string) {
  return teams.find((t) => t.name === name)
}

export function LiveMatches() {
  return (
    <section id="en-vivo" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Transmisión"
        title="Partidos en vivo"
        description="Cobertura HD del 100% de los partidos con tecnología VAR."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {liveMatches.map((m) => {
          const home = findTeam(m.home)
          const away = findTeam(m.away)
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
                <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-foreground">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-foreground" />
                  En vivo · {m.minute}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Eye className="h-3.5 w-3.5" />
                  {m.viewers} viendo
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex flex-1 flex-col items-center gap-3 text-center">
                  <TeamBadge short={home?.short ?? '??'} logo={home?.logo} color={home?.color ?? '#fff'} size="xl" />
                  <span className="text-sm font-semibold leading-tight">{m.home}</span>
                </div>

                <div className="flex flex-col items-center px-4">
                  <div className="font-display text-4xl font-bold tracking-tight">
                    {m.homeScore}
                    <span className="mx-2 text-muted-foreground">:</span>
                    {m.awayScore}
                  </div>
                </div>

                <div className="flex flex-1 flex-col items-center gap-3 text-center">
                  <TeamBadge short={away?.short ?? '??'} logo={away?.logo} color={away?.color ?? '#fff'} size="xl" />
                  <span className="text-sm font-semibold leading-tight">{m.away}</span>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Play className="h-4 w-4 fill-current" />
                Ver transmisión HD
              </button>
            </article>
          )
        })}
      </div>
    </section>
  )
}
