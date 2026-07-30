'use client'

import { useEffect, useState } from 'react'
import { Heart, MessageCircle, Play } from 'lucide-react'
import { InstagramIcon } from '@/shared/ui/social-icons'
import { instagramPosts as fallbackPosts } from '@/lib/data'
import { SectionHeading } from '@/shared/ui/section-heading'

interface InstagramPost {
  id: string
  mediaType?: string
  image: string
  mediaUrl?: string
  caption: string
  likes: string
  comments: string
  permalink?: string
}

function InstagramCardItem({ p }: { p: InstagramPost }) {
  const isVideo = p.mediaType === 'VIDEO' || (p.mediaUrl && (p.mediaUrl.includes('.mp4') || p.mediaUrl.includes('video')))
  const [videoFailed, setVideoFailed] = useState(false)

  return (
    <a
      href={p.permalink || "https://www.instagram.com/lpfdom?igsh=MWlvdmhlOGtydHkycA=="}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-card shadow-md transition-all duration-300 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10"
    >
      {isVideo && p.mediaUrl && !videoFailed ? (
        <video
          src={p.mediaUrl}
          poster={p.image && p.image !== '/ig-1.png' ? p.image : undefined}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <img
          src={p.image || '/ig-1.png'}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement
            target.onerror = null
            target.src = '/ig-1.png'
          }}
        />
      )}

      {/* Text Overlay: Hidden by default (opacity-0), reveals on HOVER */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="line-clamp-2 text-pretty text-xs font-medium leading-relaxed text-white">
          {p.caption}
        </p>
        <div className="mt-2.5 flex items-center gap-4 text-xs text-white/80">
          <span className="flex items-center gap-1 font-semibold">
            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" /> {p.likes}
          </span>
          <span className="flex items-center gap-1 font-semibold">
            <MessageCircle className="h-3.5 w-3.5 text-white" /> {p.comments}
          </span>
        </div>
      </div>

      {/* Top right Badge */}
      <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur border border-white/10 transition-transform group-hover:scale-110">
        {isVideo ? (
          <Play className="h-3.5 w-3.5 fill-white text-white ml-0.5" />
        ) : (
          <InstagramIcon className="h-4 w-4" />
        )}
      </span>
    </a>
  )
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>(fallbackPosts)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchInstagramPosts() {
      try {
        const res = await fetch('/api/instagram')
        if (res.ok) {
          const data = await res.json()
          if (Array.isArray(data) && data.length > 0) {
            setPosts(data)
          }
        }
      } catch (err) {
        console.error('Error loading Instagram feed:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchInstagramPosts()
  }, [])

  return (
    <section id="social" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 md:px-8 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Redes sociales"
          title="Lo último en Instagram"
          description="Sigue cada jugada, gol y momento en @lpfdom."
        />
        <a
          href="https://www.instagram.com/lpfdom?igsh=MWlvdmhlOGtydHkycA=="
          target="_blank"
          rel="noopener noreferrer"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          <InstagramIcon className="h-4 w-4" />
          Seguir
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((p) => (
          <InstagramCardItem key={p.id} p={p} />
        ))}
      </div>
    </section>
  )
}


