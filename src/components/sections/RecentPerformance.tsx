import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Activity, TrendingDown, Star } from "lucide-react";

export function RecentPerformance() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="bg-gradient-to-r from-zinc-900 via-red-950/20 to-zinc-900 border-red-900/50 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-white flex items-center">
            <Activity className="mr-3 h-6 w-6 text-red-500" />
            Tyson&apos;s Last Fight Analysis - vs Jake Paul (Nov 2024)
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Performance concerns that could impact the Mayweather bout
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <TrendingDown className="mr-2 h-4 w-4 text-red-500" />
                Performance Issues
              </h4>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li>• Lost via unanimous decision (80-72, 79-73, 79-73)</li>
                <li>• Threw only 97 punches, landed just 18</li>
                <li>• Showed fatigue by round 2</li>
                <li>• Legs appeared compromised per Roy Jones Jr.</li>
                <li>• Lacked explosive movement from prime years</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <Star className="mr-2 h-4 w-4 text-yellow-500" />
                Key Statistics
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between p-2 bg-zinc-900/50 rounded">
                  <span className="text-zinc-400">Event Viewership</span>
                  <span className="text-green-400 font-semibold">65M viewers</span>
                </div>
                <div className="flex justify-between p-2 bg-zinc-900/50 rounded">
                  <span className="text-zinc-400">Tyson&apos;s Weight</span>
                  <span className="text-zinc-300 font-semibold">228.4 lbs</span>
                </div>
                <div className="flex justify-between p-2 bg-zinc-900/50 rounded">
                  <span className="text-zinc-400">Age at Fight</span>
                  <span className="text-zinc-300 font-semibold">58 years</span>
                </div>
                <div className="flex justify-between p-2 bg-zinc-900/50 rounded">
                  <span className="text-zinc-400">Purse</span>
                  <span className="text-green-400 font-semibold">$20 million</span>
                </div>
              </div>
            </div>
          </div>
          <Separator className="bg-zinc-800 my-4" />
          <p className="text-zinc-400 text-sm italic">
            &quot;I didn&apos;t prove nothing to anybody, only to myself&quot; - Mike Tyson post-fight
          </p>
        </CardContent>
      </Card>
    </div>
  );
}