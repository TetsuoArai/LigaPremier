import { SiteHeader } from '@/features/layout/site-header'
import { Hero } from '@/features/layout/hero'
import { GoalTicker } from '@/features/scorers/goal-ticker'
import { LiveMatches } from '@/features/matches/live-matches'
import { GoalsSection } from '@/features/scorers/goals-section'
import { Standings } from '@/features/standings/standings'
import { TeamsSection } from '@/features/teams/teams-section'
import { CalendarSection } from '@/features/calendar/calendar-section'
import { InstagramFeed } from '@/features/social/instagram-feed'
import { SiteFooter } from '@/features/layout/site-footer'
import { Preloader } from '@/features/layout/preloader'
import { LightningBackground } from '@/features/layout/lightning-background'

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

