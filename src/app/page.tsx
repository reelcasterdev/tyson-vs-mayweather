import { HeroSection } from "@/components/sections/HeroSection";
import { BettingOdds } from "@/components/sections/BettingOdds";
import { FighterComparison } from "@/components/sections/FighterComparison";
import { FightAnalysis } from "@/components/sections/FightAnalysis";
import { CareerTimeline } from "@/components/sections/CareerTimeline";
import { RecentPerformance } from "@/components/sections/RecentPerformance";
import { FightHighlights } from "@/components/sections/FightHighlights";
import { NewsSection } from "@/components/sections/NewsSection";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/sections/Footer";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        <header>
          <HeroSection />
        </header>
        
        <section id="betting-odds" aria-label="Betting Odds and Predictions">
          <BettingOdds />
        </section>
        
        <section id="fighter-comparison" aria-label="Fighter Statistics Comparison">
          <FighterComparison />
        </section>
        
        <section id="fight-analysis" aria-label="Fight Analysis and Key Factors">
          <FightAnalysis />
        </section>
        
        <section id="career-timeline" aria-label="Career Highlights Timeline">
          <CareerTimeline />
        </section>
        
        <section id="recent-performance" aria-label="Recent Fight Performance Analysis">
          <RecentPerformance />
        </section>
        
        <section id="fight-highlights" aria-label="Event Highlights">
          <FightHighlights />
        </section>
        
        <article id="news" aria-label="Latest News and Updates">
          <NewsSection />
        </article>
        
        <aside id="newsletter" aria-label="Newsletter Signup">
          <CallToAction />
        </aside>
        
        <Footer />
      </main>
    </>
  );
}