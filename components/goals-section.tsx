import { Target, Zap } from 'lucide-react'
import { topScorers, goals, teams } from '@/lib/data'
import { TeamBadge } from '@/components/team-badge'
import { SectionHeading } from '@/components/section-heading'

function teamByShort(short: string) {
  return teams.find((t) => t.short === short)
}

export function GoalsSection() {
  const maxGoals = topScorers[0]?.goals
  return (
    <section id="goles" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Estadísticas"
        title="Goles y goleadores"
        description="Los máximos artilleros del torneo y los últimos goles de la jornada."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-3xl border border-border bg-card p-6 lg:col-span-3">
          <div className="mb-6 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            <h3 className="font-display text-lg font-bold">Tabla de goleadores</h3>
          </div>
          <ul className="space-y-4">
            {topScorers.map((s) => (
              <li key={s.rank} className="flex items-center gap-4">
                <span className="w-5 text-center font-display text-lg font-bold text-muted-foreground">
                  {s.rank}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <span className="truncate text-sm font-semibold">{s.player}</span>
                    <span className="font-display text-sm font-bold text-primary">{s.goals} goles</span>
                  </div>
                  <p className="truncate text-xs text-muted-foreground">{s.team}</p>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${(s.goals / maxGoals) * 100}%` }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 lg:col-span-2">
          <div className="mb-6 flex items-center gap-2">
            <Zap className="h-5 w-5 text-accent" />
            <h3 className="font-display text-lg font-bold">Últimos goles</h3>
          </div>
          <ul className="space-y-3">
            {goals.map((g) => {
              const t = teamByShort(g.team)
              return (
                <li
                  key={g.id}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/30 p-3"
                >
                  <TeamBadge short={g.team} logo={t?.logo} color={t?.color ?? '#fff'} size="sm" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{g.scorer}</p>
                    <p className="truncate text-xs text-muted-foreground">{g.type}</p>
                  </div>
                  <span className="font-display text-sm font-bold text-primary">{g.minute}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
