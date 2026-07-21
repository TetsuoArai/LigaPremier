import { teams } from '@/lib/data'
import { TeamBadge } from '@/components/team-badge'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function Standings() {
  const sorted = [...teams].sort((a, b) => b.points - a.points || b.gf - b.ga - (a.gf - a.ga))

  return (
    <section id="tabla" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Clasificación"
        title="Puntos por equipo"
        description="Tabla de posiciones oficial de la temporada 2026."
      />

      <div className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                <th className="px-4 py-4 text-left font-medium">#</th>
                <th className="px-4 py-4 text-left font-medium">Equipo</th>
                <th className="px-3 py-4 text-center font-medium">PJ</th>
                <th className="px-3 py-4 text-center font-medium">G</th>
                <th className="px-3 py-4 text-center font-medium">E</th>
                <th className="px-3 py-4 text-center font-medium">P</th>
                <th className="px-3 py-4 text-center font-medium">GF</th>
                <th className="px-3 py-4 text-center font-medium">GC</th>
                <th className="px-3 py-4 text-center font-medium">DIF</th>
                <th className="px-4 py-4 text-center font-medium">PTS</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((t, i) => {
                const pos = i + 1
                const dif = t.gf - t.ga
                return (
                  <tr
                    key={t.id}
                    className="group border-b border-border/60 transition-colors last:border-0 hover:bg-secondary/40"
                  >
                    <td className="px-4 py-3">
                      <span
                        className={cn(
                          'flex h-7 w-7 items-center justify-center rounded-lg font-display text-xs font-bold',
                          pos <= 4
                            ? 'bg-primary/15 text-primary'
                            : pos >= sorted.length - 1
                              ? 'bg-destructive/15 text-destructive'
                              : 'text-muted-foreground',
                        )}
                      >
                        {pos}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <TeamBadge short={t.short} logo={t.logo} color={t.color} size="md" />
                        <span className="font-semibold">{t.name}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-center text-muted-foreground">{t.played}</td>
                    <td className="px-3 py-3 text-center">{t.won}</td>
                    <td className="px-3 py-3 text-center">{t.drawn}</td>
                    <td className="px-3 py-3 text-center">{t.lost}</td>
                    <td className="px-3 py-3 text-center text-muted-foreground">{t.gf}</td>
                    <td className="px-3 py-3 text-center text-muted-foreground">{t.ga}</td>
                    <td className={cn('px-3 py-3 text-center', dif > 0 ? 'text-primary' : dif < 0 ? 'text-destructive' : '')}>
                      {dif > 0 ? `+${dif}` : dif}
                    </td>
                    <td className="px-4 py-3 text-center font-display text-base font-bold">{t.points}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded bg-primary" /> Zona de clasificación
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded bg-destructive" /> Zona de descenso
        </span>
      </div>
    </section>
  )
}
