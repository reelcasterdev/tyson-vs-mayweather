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

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      <HeroSection />
      <BettingOdds />
      <FighterComparison />
      <FightAnalysis />
      <CareerTimeline />
      <RecentPerformance />
      <FightHighlights />
      <NewsSection />
      <CallToAction />
      <Footer />
    </div>
  );
}