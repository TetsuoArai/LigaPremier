import { teams } from '@/lib/data'
import { TeamBadge } from '@/components/team-badge'

export function GoalTicker() {
  const items = [...teams, ...teams]
  return (
    <div className="relative overflow-hidden border-y border-border bg-secondary/30 py-3">
      <div className="flex w-max animate-marquee items-center gap-8">
        {items.map((t, i) => (
          <div key={`${t.id}-${i}`} className="flex items-center gap-3 whitespace-nowrap px-2">
            <TeamBadge short={t.short} logo={t.logo} color={t.color} size="sm" />
            <span className="text-sm font-semibold">{t.name}</span>
            <span className="text-border">|</span>
          </div>
        ))}
      </div>
    </div>
  )
}
