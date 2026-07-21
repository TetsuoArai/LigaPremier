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

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <GoalTicker />
      <LiveMatches />
      <GoalsSection />
      <Standings />
      <TeamsSection />
      <CalendarSection />
      <InstagramFeed />
      <SiteFooter />
    </main>
  )
}
