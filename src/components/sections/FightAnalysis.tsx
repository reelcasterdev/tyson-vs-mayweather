import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Swords } from "lucide-react";
import { fightAnalysis } from "@/lib/data";

export function FightAnalysis() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Fight Analysis & Key Factors</h2>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Tyson Advantages */}
        <Card className="bg-gradient-to-br from-red-950/30 to-zinc-950 border-red-900/50">
          <CardHeader>
            <CardTitle className="text-xl text-white flex items-center">
              <Zap className="mr-2 h-5 w-5 text-red-500" />
              Tyson&apos;s Advantages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {fightAnalysis.tysonAdvantages.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-zinc-300 text-sm">{advantage}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Mayweather Advantages */}
        <Card className="bg-gradient-to-br from-yellow-950/30 to-zinc-950 border-yellow-900/50">
          <CardHeader>
            <CardTitle className="text-xl text-white flex items-center">
              <Shield className="mr-2 h-5 w-5 text-yellow-500" />
              Mayweather&apos;s Advantages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {fightAnalysis.mayweatherAdvantages.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span className="text-zinc-300 text-sm">{advantage}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Key Factors */}
        <Card className="bg-gradient-to-br from-purple-950/30 to-zinc-950 border-purple-900/50">
          <CardHeader>
            <CardTitle className="text-xl text-white flex items-center">
              <Swords className="mr-2 h-5 w-5 text-purple-500" />
              Key Factors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {fightAnalysis.keyFactors.map((factor, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-zinc-300 text-sm">{factor}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}