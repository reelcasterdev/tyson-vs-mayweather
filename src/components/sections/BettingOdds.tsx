import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DollarSign, Target } from "lucide-react";
import { bettingData } from "@/lib/data";

export function BettingOdds() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Betting Odds & Expert Predictions</h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
        {/* Current Odds */}
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-green-900/50">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center">
              <DollarSign className="mr-2 h-6 w-6 text-green-500" />
              Current Betting Lines
            </CardTitle>
            <CardDescription className="text-zinc-400">via BetOnline.ag</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-zinc-900/50 rounded-lg">
                <span className="text-zinc-300">Floyd Mayweather</span>
                <Badge className="bg-green-600 text-white text-lg px-3">{bettingData.mayweatherOdds}</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-zinc-900/50 rounded-lg">
                <span className="text-zinc-300">Mike Tyson</span>
                <Badge variant="outline" className="border-zinc-600 text-zinc-300 text-lg px-3">{bettingData.tysonOdds}</Badge>
              </div>
              <Separator className="bg-zinc-800" />
              <div className="text-sm text-zinc-500">
                <p className="mb-2">Fight Happens by June 2026:</p>
                <div className="flex gap-4">
                  <span>Yes: {bettingData.fightHappensOdds}</span>
                  <span>No: {bettingData.fightCancelledOdds}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Expert Predictions */}
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-blue-900/50">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center">
              <Target className="mr-2 h-6 w-6 text-blue-500" />
              Expert Analysis
            </CardTitle>
            <CardDescription className="text-zinc-400">Professional predictions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {bettingData.expertPredictions.map((pred, index) => (
                <div key={index} className="p-3 bg-zinc-900/50 rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold text-white text-sm">{pred.expert}</span>
                    <Badge variant="outline" className="text-xs">{pred.confidence}</Badge>
                  </div>
                  <p className="text-yellow-400 text-sm mb-1">{pred.prediction}</p>
                  <p className="text-zinc-500 text-xs">{pred.reasoning}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}