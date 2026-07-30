import { teams } from '@/lib/data'
import { cn } from '@/lib/utils'

export function TeamBadge({
  short,
  logo,
  color,
  size = 'md',
  className,
}: {
  short?: string
  logo?: string
  color?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const team = teams.find((t) => t.short === short || t.id === short || t.name === short)
  const logoUrl = logo || team?.logo
  const badgeColor = color || team?.color || '#ffffff'
  const teamName = team?.name || short || 'Equipo'

  const sizes = {
    sm: 'h-16 w-16',
    md: 'h-24 w-24',
    lg: 'h-32 w-32',
    xl: 'h-44 w-44',
  }

  const isSmallLogo =
    team?.id === 'alpha' ||
    team?.id === 'sporting' ||
    short === 'AFC' ||
    short === 'SPO' ||
    logoUrl?.toLowerCase().includes('alpha') ||
    logoUrl?.toLowerCase().includes('sporting')

  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center',
        sizes[size],
        className,
      )}
      aria-hidden="true"
    >
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={teamName}
          className="h-full w-full object-contain"
          style={isSmallLogo ? { transform: 'scale(1.9)' } : undefined}
        />
      ) : (
        <span className="font-display font-bold text-foreground">{short}</span>
      )}
    </span>
  )
}
