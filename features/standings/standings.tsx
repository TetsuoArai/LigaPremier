import { teams } from '@/lib/data'
import { TeamBadge } from '@/features/teams/team-badge'
import { SectionHeading } from '@/shared/ui/section-heading'
import { cn } from '@/lib/utils'

export function Standings() {
  const sorted = [...teams].sort((a, b) => b.points - a.points || b.gf - b.ga - (a.gf - a.ga))
  const groupA = sorted.filter((t) => t.group === 'A')
  const groupB = sorted.filter((t) => t.group === 'B')

  const renderTable = (teams: typeof sorted) => (
    <table className="w-full min-w-[640px] text-base">
      <thead>
        <tr className="border-b border-border text-sm font-bold uppercase tracking-wider text-muted-foreground bg-secondary/30">
          <th className="px-4 py-4 text-left">#</th>
          <th className="px-4 py-4 text-left">Equipo</th>
          <th className="px-3.5 py-4 text-center">PJ</th>
          <th className="px-3.5 py-4 text-center">G</th>
          <th className="px-3.5 py-4 text-center">E</th>
          <th className="px-3.5 py-4 text-center">P</th>
          <th className="px-3.5 py-4 text-center">GF</th>
          <th className="px-3.5 py-4 text-center">GC</th>
          <th className="px-3.5 py-4 text-center">DIF</th>
          <th className="px-5 py-4 text-center font-extrabold text-foreground">PTS</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((t, i) => {
          const pos = i + 1
          const dif = t.gf - t.ga
          return (
            <tr key={t.id} className="group border-b border-border/60 transition-colors last:border-0 hover:bg-secondary/40">
              <td className="px-4 py-4">
                <span
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-xl font-display text-sm font-extrabold',
                    pos <= 4 ? 'bg-primary/20 text-primary border border-primary/30' : 'text-muted-foreground',
                  )}
                >
                  {pos}
                </span>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <TeamBadge short={t.short} logo={t.logo} color={t.color} size="md" />
                  <span className="font-bold text-base text-foreground">{t.name}</span>
                </div>
              </td>
              <td className="px-3.5 py-4 text-center font-bold text-base text-foreground/90">{t.played}</td>
              <td className="px-3.5 py-4 text-center font-bold text-base text-emerald-400">{t.won}</td>
              <td className="px-3.5 py-4 text-center font-bold text-base text-amber-400">{t.drawn}</td>
              <td className="px-3.5 py-4 text-center font-bold text-base text-rose-400">{t.lost}</td>
              <td className="px-3.5 py-4 text-center font-bold text-base text-foreground/90">{t.gf}</td>
              <td className="px-3.5 py-4 text-center font-bold text-base text-foreground/90">{t.ga}</td>
              <td className={cn('px-3.5 py-4 text-center font-bold text-base', dif > 0 ? 'text-primary' : dif < 0 ? 'text-destructive' : 'text-muted-foreground')}>
                {dif > 0 ? `+${dif}` : dif}
              </td>
              <td className="px-5 py-4 text-center font-display text-lg font-black text-primary">{t.points}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

  return (
    <section id="tabla" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Clasificación"
        title="Puntos por equipo"
        description="Tabla de posiciones oficial de la temporada 2026."
      />

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold">Grupo A</h2>
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="overflow-x-auto">{renderTable(groupA)}</div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-xl font-bold">Grupo B</h2>
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <div className="overflow-x-auto">{renderTable(groupB)}</div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded bg-primary" /> Zona de clasificación (Primeros 4)
        </span>
      </div>
    </section>
  )
}

