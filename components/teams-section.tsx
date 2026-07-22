'use client'

import { useState } from 'react'
import { X, Users, Shield, Award, Shirt } from 'lucide-react'
import { teams, type Team, type Player } from '@/lib/data'
import { TeamBadge } from '@/components/team-badge'
import { SectionHeading } from '@/components/section-heading'

const POSITION_ORDER: Player['position'][] = ['Portero', 'Cierre', 'Ala', 'Pívot', '']

export function TeamsSection() {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null)

  return (
    <section id="equipos" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Participantes"
        title="Equipos y plantillas"
        description="Haz clic en cualquier club para consultar su plantilla oficial de jugadores."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {teams.map((t) => (
          <article
            key={t.id}
            onClick={() => setSelectedTeam(t)}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
          >
            <div className="relative flex flex-col items-center gap-4 text-center">
              <TeamBadge short={t.short} logo={t.logo} color={t.color} size="xl" />
              <div>
                <h3 className="text-lg font-bold leading-tight text-foreground">{t.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">DT: {t.coach}</p>
              </div>

              <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-semibold transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Users className="h-3.5 w-3.5" />
                Ver Plantilla ({t.players?.length || 0})
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal de Plantilla */}
      {selectedTeam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card p-6 shadow-2xl md:p-8">
            <button
              type="button"
              onClick={() => setSelectedTeam(null)}
              className="absolute right-5 top-5 rounded-full bg-secondary p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Cerrar modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col items-center text-center pb-6 border-b border-border">
              <TeamBadge short={selectedTeam.short} logo={selectedTeam.logo} color={selectedTeam.color} size="xl" />
              <h2 className="mt-4 text-2xl font-bold font-display text-foreground">{selectedTeam.name}</h2>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1 font-medium">
                  <Shield className="h-3.5 w-3.5 text-primary" /> Director Técnico: <strong className="text-foreground">{selectedTeam.coach}</strong>
                </span>
                <span>•</span>
                <span>{selectedTeam.players?.length || 0} Jugadores registrados</span>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold flex items-center gap-2">
                  <Shirt className="h-5 w-5 text-primary" />
                  Plantilla Oficial 2026
                </h3>
              </div>

              <div className="space-y-6">
                {POSITION_ORDER.map((pos) => {
                  console.log(pos)
                  const posPlayers = selectedTeam.players?.filter((p) => p.position === pos) || []
                  if (posPlayers.length === 0) return null
                  return (
                    <div key={pos} className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {pos}s ({posPlayers.length})
                      </h4>
                      <div className="grid gap-2.5 sm:grid-cols-2">
                        {posPlayers.map((p) => (
                          <div
                            key={p.id}
                            className="flex items-center justify-between rounded-2xl border border-border/80 bg-secondary/40 px-4 py-3"
                          >
                            <div className="flex items-center gap-3">
                              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 font-display text-xs font-bold text-primary">
                                #{p.number}
                              </span>
                              <span className="text-sm font-semibold text-foreground">{p.name}</span>
                            </div>
                            {p.isCaptain && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-bold text-accent">
                                <Award className="h-3 w-3" /> C
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
