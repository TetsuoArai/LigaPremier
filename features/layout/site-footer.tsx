import { Radio } from 'lucide-react'
import { InstagramIcon, YoutubeIcon } from '@/shared/ui/social-icons'

export function SiteFooter() {
  const socialLinks = [
    { Icon: InstagramIcon, href: "https://www.instagram.com/lpfdom?igsh=MWlvdmhlOGtydHkycA==", label: "Instagram" },
    { Icon: YoutubeIcon, href: "https://youtube.com/@ligapfd?si=ErDco62HAuMBql7c", label: "YouTube" }
  ]

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <img src="/LigaPremierFutsalDominicana.png" alt="Liga Premier Futsal Dominicana" className="h-9 w-auto transform scale-150 mr-2" />
              <span className="font-display text-sm font-bold leading-none tracking-tight">
                LIGA PREMIER
                <span className="block text-[10px] font-medium tracking-[0.25em] text-muted-foreground">
                  FUTSAL DOMINICANA
                </span>
              </span>
            </div>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h4 className="font-display text-sm font-bold">Liga</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#en-vivo" className="hover:text-foreground">En vivo</a></li>
                <li><a href="#tabla" className="hover:text-foreground">Tabla</a></li>
                <li><a href="#calendario" className="hover:text-foreground">Calendario</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-bold">Clubes</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#equipos" className="hover:text-foreground">Equipos</a></li>
                <li><a href="#goles" className="hover:text-foreground">Goleadores</a></li>
                <li><a href="#" className="hover:text-foreground">Inscripción</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-bold">Contacto</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li>Pres. Giampiero Di Tonto</li>
                <li>Vicepres. Luis Estévez</li>
                <li>Santo Domingo, R.D.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Liga Premier Futsal Dominicana. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
