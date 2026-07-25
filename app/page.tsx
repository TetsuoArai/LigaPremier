import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { GoalTicker } from '@/components/goal-ticker'
import { LiveMatches } from '@/components/live-matches'
import { GoalsSection } from '@/components/goals-section'
import { Standings } from '@/components/standings'
import { TeamsSection } from '@/components/teams-section'
import { CalendarSection } from '@/components/calendar-section'
import { InstagramFeed } from '@/components/instagram-feed'
import { SiteFooter } from '@/components/site-footer'
import { Preloader } from '@/components/preloader'
import { LightningBackground } from '@/components/lightning-background'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Preloader />
      <SiteHeader />
      <Hero />
      <GoalTicker />

      {/* Body sections with floating stars background */}
      <div className="relative overflow-hidden">
        <LightningBackground />
        <div className="relative z-10">
          <LiveMatches />
          <GoalsSection />
          <Standings />
          <TeamsSection />
          <CalendarSection />
          <InstagramFeed />
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}

