import { Heart, MessageCircle } from 'lucide-react'
import { InstagramIcon } from '@/components/social-icons'
import { instagramPosts } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function InstagramFeed() {
  return (
    <section id="social" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 md:px-8 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Redes sociales"
          title="Lo último en Instagram"
          description="Sigue cada jugada, gol y momento en @ligapremierfutsalrd."
        />
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          <InstagramIcon className="h-4 w-4" />
          Seguir
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {instagramPosts.map((p) => (
          <a
            key={p.id}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-border bg-card"
          >
            <img
              src={p.image || '/placeholder.svg'}
              alt={p.caption}
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="p-4">
                <p className="text-pretty text-xs font-medium leading-relaxed">{p.caption}</p>
                <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Heart className="h-3.5 w-3.5" /> {p.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" /> {p.comments}
                  </span>
                </div>
              </div>
            </div>
            <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/70 backdrop-blur">
              <InstagramIcon className="h-4 w-4" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
