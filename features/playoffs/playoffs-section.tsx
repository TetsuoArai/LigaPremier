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
}

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
      title={`${team.name} (${seed})`}
      className={cn(
        'group flex items-center gap-3 cursor-default transition-all duration-300',
        'h-12 md:h-16 justify-center md:justify-start',
        side === 'right' ? 'md:flex-row-reverse md:text-right' : 'md:flex-row md:text-left',
      )}
    >
      {/* Logo alone without outer borders */}
      <div className="relative flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center">
        <img
          src={team.logo}
          alt={team.name}
          className="h-10 w-10 md:h-14 md:w-14 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* Name + seed (Hidden on mobile, visible on desktop) */}
      <div className="hidden md:flex flex-col min-w-0 flex-1 justify-center">
        <p className="truncate text-sm font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
          {team.name}
        </p>
        <p
          className="text-[11px] font-semibold uppercase tracking-wider mt-0.5"
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
    <div className="flex flex-col gap-2">
      <TeamSlot teamId={match.teamA.id} seed={match.teamA.seed} side={side} />
      {/* Divider */}
      <div className="flex items-center gap-1 px-0.5">
        <div className="h-px flex-1 bg-border/40" />
        <span className="text-[8px] md:text-[9px] font-black tracking-wider text-muted-foreground/50 uppercase">
          vs
        </span>
        <div className="h-px flex-1 bg-border/40" />
      </div>
      <TeamSlot teamId={match.teamB.id} seed={match.teamB.seed} side={side} />
    </div>
  )
}

// ─── Bracket connector lines (SVG) ───────────────────────────────────────────
function LeftConnector() {
  return (
    <div className="relative flex h-full w-2.5 md:w-9 shrink-0 items-stretch">
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 36 200"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="25%" x2="50%" y2="25%" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
        <line x1="0" y1="75%" x2="50%" y2="75%" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
        <line x1="50%" y1="25%" x2="50%" y2="75%" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
        <line x1="50%" y1="50%" x2="100%" y2="50%" stroke="oklch(0.62 0.21 258 / 0.7)" strokeWidth="1.5" />
      </svg>
    </div>
  )
}

function RightConnector() {
  return (
    <div className="relative flex h-full w-2.5 md:w-9 shrink-0 items-stretch">
      <svg
        className="h-full w-full overflow-visible"
        viewBox="0 0 36 200"
        preserveAspectRatio="none"
      >
        <line x1="100%" y1="25%" x2="50%" y2="25%" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
        <line x1="100%" y1="75%" x2="50%" y2="75%" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
        <line x1="50%" y1="25%" x2="50%" y2="75%" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />
        <line x1="50%" y1="50%" x2="0%" y2="50%" stroke="oklch(0.62 0.21 258 / 0.7)" strokeWidth="1.5" />
      </svg>
    </div>
  )
}

// ─── SF slot (TBD placeholder) ────────────────────────────────────────────────
function SFSlot({ side }: { side: 'left' | 'right' }) {
  return (
    <div className="flex flex-col gap-2 my-auto">
      {/* Semi Slot A */}
      <div
        className={cn(
          'flex items-center gap-1.5 md:gap-3 h-12 md:h-16 justify-start',
          side === 'right' ? 'flex-row-reverse text-right' : 'flex-row text-left',
        )}
      >
        <div className="flex h-8 w-8 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-muted/20 border border-muted-foreground/20">
          <span className="text-xs md:text-lg font-bold text-muted-foreground/50">?</span>
        </div>
        <div className="flex flex-col min-w-0 flex-1 justify-center">
          <p className="truncate text-[9px] md:text-sm font-bold text-muted-foreground/70 leading-tight">
            Clasificado
          </p>
          <p className="truncate text-[7px] md:text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/40 mt-0.5">
            Por definir
          </p>
        </div>
      </div>

      {/* VS divider */}
      <div className="flex items-center gap-1 px-0.5">
        <div className="h-px flex-1 bg-border/30" />
        <span className="text-[8px] md:text-[9px] font-black tracking-wider text-muted-foreground/40 uppercase">vs</span>
        <div className="h-px flex-1 bg-border/30" />
      </div>

      {/* Semi Slot B */}
      <div
        className={cn(
          'flex items-center gap-1.5 md:gap-3 h-12 md:h-16 justify-start',
          side === 'right' ? 'flex-row-reverse text-right' : 'flex-row text-left',
        )}
      >
        <div className="flex h-8 w-8 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-muted/20 border border-muted-foreground/20">
          <span className="text-xs md:text-lg font-bold text-muted-foreground/50">?</span>
        </div>
        <div className="flex flex-col min-w-0 flex-1 justify-center">
          <p className="truncate text-[9px] md:text-sm font-bold text-muted-foreground/70 leading-tight">
            Clasificado
          </p>
          <p className="truncate text-[7px] md:text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/40 mt-0.5">
            Por definir
          </p>
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
      className="mx-auto max-w-7xl scroll-mt-24 px-3 py-12 md:px-8 md:py-24"
    >
      <SectionHeading
        eyebrow="Playoffs · 2026"
        title="Cuadro de Honor"
        description="Llave oficial de la fase eliminatoria. Los mejores 8 equipos se disputan el título de Liga Premier Futsal Dominicana."
      />

      {/* ── Bracket wrapper ── */}
      <div
        className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl border border-border/80 bg-[#121316] p-3 sm:p-6 md:p-10"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, oklch(1 0 0 / 0.03) 0%, transparent 60%), #121316',
        }}
      >
        {/* Phase labels */}
        <div className="mb-4 md:mb-8 grid grid-cols-[40px_10px_minmax(64px,1fr)_1fr_minmax(64px,1fr)_10px_40px] md:grid-cols-[1fr_36px_minmax(160px,1fr)_minmax(180px,1fr)_minmax(160px,1fr)_36px_1fr] items-center gap-1 md:gap-3 text-center">
          <p className="text-[9px] md:text-xs font-black uppercase tracking-wider md:tracking-[0.2em] text-muted-foreground">4TOS</p>
          <div />
          <p className="text-[9px] md:text-xs font-black uppercase tracking-wider md:tracking-[0.2em] text-muted-foreground">SEMIS</p>
          <p className="text-[9px] md:text-xs font-black uppercase tracking-wider md:tracking-[0.2em] text-blue-500 font-bold">FINAL</p>
          <p className="text-[9px] md:text-xs font-black uppercase tracking-wider md:tracking-[0.2em] text-muted-foreground">SEMIS</p>
          <div />
          <p className="text-[9px] md:text-xs font-black uppercase tracking-wider md:tracking-[0.2em] text-muted-foreground">4TOS</p>
        </div>

        {/* ── Full bracket row ── */}
        <div className="grid grid-cols-[40px_10px_minmax(64px,1fr)_1fr_minmax(64px,1fr)_10px_40px] md:grid-cols-[1fr_36px_minmax(160px,1fr)_minmax(180px,1fr)_minmax(160px,1fr)_36px_1fr] items-center gap-1 md:gap-3">

          {/* ── LEFT SIDE QFs ── */}
          <div className="flex flex-col gap-4 md:gap-6">
            {BRACKET.left.map((m) => (
              <QFMatchup key={m.id} match={m} side="left" />
            ))}
          </div>

          {/* ── LEFT CONNECTOR ── */}
          <LeftConnector />

          {/* ── LEFT SEMI ── */}
          <SFSlot side="left" />

          {/* ── CENTER FINAL ── */}
          <div className="flex flex-col items-center justify-center gap-1.5 md:gap-3 my-auto px-0.5 md:px-1 min-w-0">
            {/* Title */}
            <div className="text-center">
              <p className="text-[8px] md:text-xs font-black uppercase tracking-widest text-muted-foreground/80">
                COPA DE LA
              </p>
              <p className="font-display text-[10px] md:text-xl font-black uppercase tracking-wider text-foreground leading-tight">
                LIGA PREMIER
              </p>
            </div>

            {/* League logo - enlarged */}
            <div
              className="relative flex h-14 w-14 md:h-32 md:w-32 items-center justify-center rounded-full shrink-0"
              style={{
                background: 'radial-gradient(circle, oklch(0.62 0.21 258 / 0.25) 0%, transparent 70%)',
              }}
            >
              <img
                src="/LigaPremierFutsalDominicana.png"
                alt="Liga Premier Futsal Dominicana"
                className="h-12 w-12 md:h-28 md:w-28 object-contain drop-shadow-[0_0_16px_rgba(59,130,246,0.4)]"
              />
            </div>

            {/* Final glowing pill button */}
            <div
              className="rounded-full px-3 py-1 md:px-7 md:py-2 text-[8px] md:text-xs font-black uppercase tracking-widest text-white shadow-lg shrink-0"
              style={{
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                boxShadow: '0 0 20px rgba(37, 99, 235, 0.6), 0 0 35px rgba(124, 58, 237, 0.3)',
              }}
            >
              FINAL
            </div>
          </div>

          {/* ── RIGHT SEMI ── */}
          <SFSlot side="right" />

          {/* ── RIGHT CONNECTOR ── */}
          <RightConnector />

          {/* ── RIGHT SIDE QFs ── */}
          <div className="flex flex-col gap-4 md:gap-6">
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
    </section>
  )
}
