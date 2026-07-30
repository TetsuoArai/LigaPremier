import { NextResponse } from 'next/server'

// Fallback posts if API token or behold feed is not configured yet
const FALLBACK_POSTS = [
  {
    id: 'ig1',
    image: '/ig-1.png',
    caption: '¡Arrancamos con todo la Temporada 2026 de la Liga Premier Futsal Dominicana! 🔥⚽',
    likes: '1.2k',
    comments: '84',
    permalink: 'https://www.instagram.com/lpfdom',
  },
  {
    id: 'ig2',
    image: '/ig-2.png',
    caption: 'Highlights de la primera jornada en el Colegio Claret. ¡Puro talento en la cancha! 🏆',
    likes: '956',
    comments: '62',
    permalink: 'https://www.instagram.com/lpfdom',
  },
  {
    id: 'ig3',
    image: '/ig-3.png',
    caption: 'El apoyo de la fanaticada es incondicional. ¡Gracias por llenar las gradas! 🙌🔥',
    likes: '2.1k',
    comments: '143',
    permalink: 'https://www.instagram.com/lpfdom',
  },
  {
    id: 'ig4',
    image: '/ig-4.png',
    caption: 'Tabla de goleadores encendida tras los primeros encuentros oficiales. ⚽💥',
    likes: '1.8k',
    comments: '97',
    permalink: 'https://www.instagram.com/lpfdom',
  },
]

export const dynamic = 'force-dynamic'

export async function GET() {
  const beholdUrl = process.env.BEHOLD_URL || process.env.NEXT_PUBLIC_BEHOLD_URL
  const instagramToken = process.env.INSTAGRAM_ACCESS_TOKEN

  try {
    // 1. Try Behold.so feed URL if provided
    if (beholdUrl) {
      const res = await fetch(beholdUrl, { cache: 'no-store' })
      if (res.ok) {
        const data = await res.json()
        const posts = data.slice(0, 4).map((p: any) => {
          const isVideo = p.mediaType === 'VIDEO' || p.media_type === 'VIDEO' || !!p.thumbnailUrl || !!p.thumbnail_url
          const safeImage = p.thumbnailUrl || p.thumbnail_url || p.sizes?.medium?.mediaUrl || p.mediaUrl || '/ig-1.png'

          return {
            id: p.id,
            mediaType: isVideo ? 'VIDEO' : 'IMAGE',
            image: safeImage.includes('.mp4') ? '/ig-1.png' : safeImage,
            mediaUrl: p.mediaUrl || p.media_url,
            caption: p.caption || 'Publicación en @lpfdom',
            likes: p.likeCount ? `${p.likeCount}` : '❤️',
            comments: p.commentsCount ? `${p.commentsCount}` : '💬',
            permalink: p.permalink || 'https://www.instagram.com/lpfdom',
          }
        })
        return NextResponse.json(posts)
      }
    }

    // 2. Try Instagram Graph API Token if provided
    if (instagramToken) {
      const graphUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count&access_token=${instagramToken}`
      const res = await fetch(graphUrl, { cache: 'no-store' })
      if (res.ok) {
        const data = await res.json()
        const posts = (data.data || []).slice(0, 4).map((p: any) => {
          const isVideo = p.media_type === 'VIDEO' || p.media_type === 'REELS' || !!p.thumbnail_url || (p.media_url && p.media_url.includes('.mp4'))
          const safeImage = p.thumbnail_url || (p.media_url && !p.media_url.includes('.mp4') ? p.media_url : '/ig-1.png')

          return {
            id: p.id,
            mediaType: isVideo ? 'VIDEO' : (p.media_type || 'IMAGE'),
            image: safeImage,
            mediaUrl: p.media_url,
            caption: p.caption || 'Publicación en @lpfdom',
            likes: p.like_count ? `${p.like_count}` : '❤️',
            comments: p.comments_count ? `${p.comments_count}` : '💬',
            permalink: p.permalink || 'https://www.instagram.com/lpfdom',
          }
        })
        return NextResponse.json(posts)
      }
    }
  } catch (error) {
    console.error('Error fetching live Instagram posts:', error)
  }

  // Fallback if APIs are not configured
  return NextResponse.json(FALLBACK_POSTS)
}
