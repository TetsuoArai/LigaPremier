import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Liga Premier Futsal Dominicana',
  description:
    'La máxima expresión del futsal competitivo en República Dominicana. Goles, transmisiones en vivo, tabla de posiciones, equipos y calendario oficial.',
  generator: 'v0.app',
  icons: {
    icon: '/LigaPremierFutsalDominicana.png',
    shortcut: '/LigaPremierFutsalDominicana.png',
    apple: '/LigaPremierFutsalDominicana.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a12',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
