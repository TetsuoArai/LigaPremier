import { Target, Zap } from 'lucide-react'
import { topScorers, goals, teams } from '@/lib/data'
import { TeamBadge } from '@/features/teams/team-badge'
import { SectionHeading } from '@/shared/ui/section-heading'

function findTeamByName(teamName: string) {
  return teams.find((t) => t.name === teamName)
}

export function GoalsSection() {
  return (
    <section id="goles" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Estadísticas"
        title="Tabla de Goleadores"
        description="Los máximos artilleros oficiales de la Liga Premier Futsal."
      />

      <div className="rounded-3xl border border-border bg-card p-4 sm:p-6 md:p-8 shadow-xl overflow-x-hidden">
        {/* Scrollable Broadcast List: height set to 380px for a more compact vertical view */}
        <div className="max-h-[380px] overflow-y-auto overflow-x-hidden pr-2 space-y-3 custom-scrollbar">
          {topScorers.map((s) => {
            const team = findTeamByName(s.team)
            return (
              <div
                key={`${s.rank}-${s.player}`}
                className="group flex items-stretch gap-3 transition-transform duration-200 hover:scale-[1.005]"
              >
                {/* Rank Badge */}
                <div className="flex w-10 flex-shrink-0 items-center justify-center font-display text-base font-black text-muted-foreground -skew-x-12">
                  #{s.rank}
                </div>

                {/* Combined Skewed Player Card: Dark Logo Segment + White Player Info Segment */}
                <div className="flex flex-1 items-stretch overflow-hidden rounded-xl bg-slate-950 shadow-md -skew-x-12 transition-shadow group-hover:shadow-primary/20">
                  {/* Integrated Dark Logo Segment */}
                  <div className="flex flex-shrink-0 items-center justify-center bg-slate-950 px-3.5 py-2">
                    <div className="skew-x-12">
                      <TeamBadge
                        short={team?.short ?? 'LIGA'}
                        logo={team?.logo}
                        color={team?.color ?? '#6366f1'}
                        size="sm"
                      />
                    </div>
                  </div>

                  {/* White Player Info Segment */}
                  <div className="flex min-w-0 flex-1 items-center bg-white px-4 py-2">
                    <div className="min-w-0 skew-x-12">
                      <h4 className="truncate font-display text-sm md:text-base font-black uppercase tracking-tight text-slate-950">
                        {s.player}
                      </h4>
                      <p className="truncate text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                        {s.team}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Primary Theme Skewed Goals Box */}
                <div className="flex w-16 md:w-20 flex-shrink-0 items-center justify-center rounded-xl bg-primary font-display text-xl md:text-2xl font-black text-primary-foreground shadow-md -skew-x-12 border-2 border-primary/40 group-hover:bg-primary/90 transition-colors">
                  <span className="skew-x-12">{s.goals}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
