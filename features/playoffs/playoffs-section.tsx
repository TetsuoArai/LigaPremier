'use client'

import { teams } from '@/lib/data'
import { SectionHeading } from '@/shared/ui/section-heading'
import { cn } from '@/lib/utils'

// ─── Bracket data ─────────────────────────────────────────────────────────────
// Left side: QF1 → SF1, QF2 → SF1  |  Right side: QF3 → SF2, QF4 → SF2
const BRACKET = {
  left: [
    {
      id: 'qf1',
      teamA: { id: 'joseo-a', seed: '1°A' },
      teamB: { id: 'sporting', seed: '4°B' },
    },
    {
      id: 'qf2',
      teamA: { id: 'mallixia', seed: '2°B' },
      teamB: { id: 'warriors', seed: '3°A' },
    },
  ],
  right: [
    {
      id: 'qf3',
      teamA: { id: 'joseo-b', seed: '1°B' },
      teamB: { id: 'lightning', seed: '4°A' },
    },
    {
      id: 'qf4',
      teamA: { id: 'space', seed: '2°A' },
      teamB: { id: 'union', seed: '3°B' },
    },
  ],
};

// ─── Team slot ────────────────────────────────────────────────────────────────
function TeamSlot({
  teamId,
  seed,
  side,
}: {
  teamId: string
  seed: string
  side: 'left' | 'right'
}) {
  const team = teams.find((t) => t.id === teamId)
  if (!team) return null

  return (
    <div
      className={cn(
        'group flex items-center gap-3 rounded-xl border border-border/60 bg-card/80 px-3 py-2.5',
        'transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-lg cursor-default',
        side === 'right' && 'flex-row-reverse',
      )}
      style={{
        boxShadow: `inset 0 0 0 1px ${team.color}00`,
      }}
      onMouseEnter={(e) => {
        ; (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 0 0 1px ${team.color}40, 0 4px 20px ${team.color}20`
      }}
      onMouseLeave={(e) => {
        ; (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 0 0 1px ${team.color}00`
      }}
    >
      {/* Logo */}
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full">
        <img
          src={team.logo}
          alt={team.name}
          className="h-14 w-14 object-contain"
        />
      </div>

      {/* Name + seed */}
      <div className={cn('min-w-0 flex-1', side === 'right' && 'text-right')}>
        <p className="truncate text-sm font-bold leading-tight text-foreground">
          {team.name}
        </p>
        <p
          className="text-[10px] font-semibold uppercase tracking-wider"
          style={{ color: team.color }}
        >
          {seed}
        </p>
      </div>
    </div>
  )
}

// ─── One quarter-final matchup (two slots stacked with a connector) ───────────
function QFMatchup({
  match,
  side,
}: {
  match: (typeof BRACKET.left)[number]
  side: 'left' | 'right'
}) {
  return (
    <div className="flex flex-col gap-1">
      <TeamSlot teamId={match.teamA.id} seed={match.teamA.seed} side={side} />
      {/* Divider */}
      <div className="flex items-center gap-2 px-1">
        <div className="h-px flex-1 bg-border/50" />
        <span className="text-[9px] font-black tracking-widest text-muted-foreground/50 uppercase">
          vs
        </span>
        <div className="h-px flex-1 bg-border/50" />
      </div>
      <TeamSlot teamId={match.teamB.id} seed={match.teamB.seed} side={side} />
    </div>
  )
}

// ─── Bracket connector lines (SVG) ───────────────────────────────────────────
function LeftConnector() {
  // Two horizontal lines → merge to one center → arrow right to SF
  return (
    <div className="relative flex h-full w-10 shrink-0 items-stretch">
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 40 200"
        preserveAspectRatio="none"
      >
        {/* Top horizontal from QF1 */}
        <line x1="0" y1="50" x2="20" y2="50" stroke="oklch(1 0 0 / 0.15)" strokeWidth="1.5" />
        {/* Bottom horizontal from QF2 */}
        <line x1="0" y1="150" x2="20" y2="150" stroke="oklch(1 0 0 / 0.15)" strokeWidth="1.5" />
        {/* Vertical joining both */}
        <line x1="20" y1="50" x2="20" y2="150" stroke="oklch(1 0 0 / 0.15)" strokeWidth="1.5" />
        {/* Horizontal to SF */}
        <line x1="20" y1="100" x2="40" y2="100" stroke="oklch(0.62 0.21 258 / 0.5)" strokeWidth="1.5" />
      </svg>
    </div>
  )
}

function RightConnector() {
  return (
    <div className="relative flex h-full w-10 shrink-0 items-stretch">
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 40 200"
        preserveAspectRatio="none"
      >
        <line x1="40" y1="50" x2="20" y2="50" stroke="oklch(1 0 0 / 0.15)" strokeWidth="1.5" />
        <line x1="40" y1="150" x2="20" y2="150" stroke="oklch(1 0 0 / 0.15)" strokeWidth="1.5" />
        <line x1="20" y1="50" x2="20" y2="150" stroke="oklch(1 0 0 / 0.15)" strokeWidth="1.5" />
        <line x1="20" y1="100" x2="0" y2="100" stroke="oklch(0.62 0.21 258 / 0.5)" strokeWidth="1.5" />
      </svg>
    </div>
  )
}

// ─── SF slot (TBD placeholder) ────────────────────────────────────────────────
function SFSlot({ side }: { side: 'left' | 'right' }) {
  return (
    <div className="flex flex-col gap-1">
      <div
        className={cn(
          'flex items-center gap-2.5 rounded-xl border border-dashed border-primary/30 bg-primary/5 px-3 py-2.5',
          side === 'right' && 'flex-row-reverse',
        )}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dashed border-primary/30">
          <span className="text-lg text-primary/40">?</span>
        </div>
        <div className={cn('min-w-0 flex-1', side === 'right' && 'text-right')}>
          <p className="text-sm font-bold text-muted-foreground/60">Clasificado</p>
          <p className="text-[10px] uppercase tracking-wider text-primary/50">Por definir</p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-1">
        <div className="h-px flex-1 bg-border/30" />
        <span className="text-[9px] font-black tracking-widest text-muted-foreground/30 uppercase">vs</span>
        <div className="h-px flex-1 bg-border/30" />
      </div>
      <div
        className={cn(
          'flex items-center gap-2.5 rounded-xl border border-dashed border-primary/30 bg-primary/5 px-3 py-2.5',
          side === 'right' && 'flex-row-reverse',
        )}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dashed border-primary/30">
          <span className="text-lg text-primary/40">?</span>
        </div>
        <div className={cn('min-w-0 flex-1', side === 'right' && 'text-right')}>
          <p className="text-sm font-bold text-muted-foreground/60">Clasificado</p>
          <p className="text-[10px] uppercase tracking-wider text-primary/50">Por definir</p>
        </div>
      </div>
    </div>
  )
}

// ─── Main bracket section ─────────────────────────────────────────────────────
export function PlayoffsSection() {
  return (
    <section
      id="cuartos"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 md:px-8 md:py-24"
    >
      <SectionHeading
        eyebrow="Playoffs · 2026"
        title="Cuadro de Honor"
        description="Llave oficial de la fase eliminatoria. Los mejores 8 equipos se disputan el título de Liga Premier Futsal Dominicana."
      />

      {/* ── Bracket wrapper ── */}
      <div
        className="relative hidden overflow-hidden rounded-3xl border border-border bg-card p-6 md:p-10 lg:block"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, oklch(1 0 0 / 0.03) 0%, transparent 60%), oklch(0.2 0 0)',
        }}
      >
        {/* Phase labels */}
        <div className="mb-6 grid grid-cols-[1fr_40px_minmax(180px,1fr)_minmax(200px,1fr)_minmax(180px,1fr)_40px_1fr] items-center gap-3">
          <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">4tos</p>
          <div />
          <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Semis</p>
          <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-primary">⚽ Final</p>
          <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Semis</p>
          <div />
          <p className="text-center text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">4tos</p>
        </div>

        {/* ── Full bracket row ── */}
        <div className="grid grid-cols-[1fr_40px_minmax(180px,1fr)_minmax(200px,1fr)_minmax(180px,1fr)_40px_1fr] items-center gap-3">

          {/* ── LEFT SIDE QFs ── */}
          <div className="flex flex-col gap-6">
            {BRACKET.left.map((m) => (
              <QFMatchup key={m.id} match={m} side="left" />
            ))}
          </div>

          {/* ── LEFT CONNECTOR ── */}
          <LeftConnector />

          {/* ── LEFT SEMI ── */}
          <SFSlot side="left" />

          {/* ── CENTER FINAL ── */}
          <div className="flex flex-col items-center justify-center gap-3 px-2">
            {/* Title */}
            <p className="text-center font-display text-xs font-black uppercase tracking-widest text-muted-foreground">
              Copa de la
            </p>
            <p className="text-center font-display text-lg font-black uppercase tracking-widest text-foreground leading-none">
              Liga Premier
            </p>

            {/* League logo - enlarged & full color */}
            <div
              className="relative flex h-48 w-48 items-center justify-center rounded-full"
              style={{
                background: 'radial-gradient(circle, oklch(0.62 0.21 258 / 0.15) 0%, transparent 70%)',
              }}
            >
              <img
                src="/LigaPremierFutsalDominicana.png"
                alt="Liga Premier Futsal Dominicana"
                className="h-40 w-40 object-contain"
              />
            </div>

            {/* Final label */}
            <div
              className="rounded-full px-6 py-2 text-xs font-black uppercase tracking-widest text-primary-foreground shadow-lg"
              style={{
                background: 'linear-gradient(135deg, oklch(0.62 0.21 258), oklch(0.55 0.25 290))',
                boxShadow: '0 4px 20px oklch(0.62 0.21 258 / 0.5), 0 0 15px oklch(0.62 0.21 258 / 0.3)',
              }}
            >
              Final
            </div>

            {/* Semi arrows */}
            <div className="flex w-full items-center justify-between px-1">
              <div className="h-px flex-1 bg-gradient-to-r from-border/60 to-transparent" />
              <div className="h-px flex-1 bg-gradient-to-l from-border/60 to-transparent" />
            </div>
          </div>

          {/* ── RIGHT SEMI ── */}
          <SFSlot side="right" />

          {/* ── RIGHT CONNECTOR ── */}
          <RightConnector />

          {/* ── RIGHT SIDE QFs ── */}
          <div className="flex flex-col gap-6">
            {BRACKET.right.map((m) => (
              <QFMatchup key={m.id} match={m} side="right" />
            ))}
          </div>
        </div>

        {/* Decorative subtle background elements */}
        <div
          className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full opacity-10 blur-3xl bg-muted-foreground/20"
        />
        <div
          className="pointer-events-none absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full opacity-10 blur-3xl bg-muted-foreground/20"
        />
      </div>

      {/* Mobile fallback: simple list (hidden on large screens) */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-widest text-muted-foreground">
            4tos — Llave Izquierda
          </p>
          <div className="flex flex-col gap-3">
            {BRACKET.left.map((m) => {
              const tA = teams.find((t) => t.id === m.teamA.id)!
              const tB = teams.find((t) => t.id === m.teamB.id)!
              return (
                <div key={m.id} className="rounded-2xl border border-border bg-card p-4">
                  <div className="flex items-center gap-3">
                    <img src={tA.logo} alt={tA.name} className="h-12 w-12 object-contain" />
                    <div className="flex-1">
                      <p className="text-sm font-bold">{tA.name}</p>
                      <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: tA.color }}>{m.teamA.seed}</p>
                    </div>
                  </div>
                  <p className="my-2 text-center text-xs font-black text-muted-foreground">VS</p>
                  <div className="flex items-center gap-3">
                    <img src={tB.logo} alt={tB.name} className="h-12 w-12 object-contain" />
                    <div className="flex-1">
                      <p className="text-sm font-bold">{tB.name}</p>
                      <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: tB.color }}>{m.teamB.seed}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-widest text-muted-foreground">
            4tos — Llave Derecha
          </p>
          <div className="flex flex-col gap-3">
            {BRACKET.right.map((m) => {
              const tA = teams.find((t) => t.id === m.teamA.id)!
              const tB = teams.find((t) => t.id === m.teamB.id)!
              return (
                <div key={m.id} className="rounded-2xl border border-border bg-card p-4">
                  <div className="flex items-center gap-3">
                    <img src={tA.logo} alt={tA.name} className="h-12 w-12 object-contain" />
                    <div className="flex-1">
                      <p className="text-sm font-bold">{tA.name}</p>
                      <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: tA.color }}>{m.teamA.seed}</p>
                    </div>
                  </div>
                  <p className="my-2 text-center text-xs font-black text-muted-foreground">VS</p>
                  <div className="flex items-center gap-3">
                    <img src={tB.logo} alt={tB.name} className="h-12 w-12 object-contain" />
                    <div className="flex-1">
                      <p className="text-sm font-bold">{tB.name}</p>
                      <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: tB.color }}>{m.teamB.seed}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

