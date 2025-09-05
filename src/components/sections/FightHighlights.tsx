import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Trophy, TrendingUp, Users } from "lucide-react";

export function FightHighlights() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Fight Highlights</h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur">
          <CardContent className="pt-6">
            <Calendar className="h-8 w-8 text-red-500 mb-3" />
            <h3 className="font-semibold text-white mb-1">Spring 2026</h3>
            <p className="text-sm text-zinc-400">Exhibition match date</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur">
          <CardContent className="pt-6">
            <Trophy className="h-8 w-8 text-yellow-500 mb-3" />
            <h3 className="font-semibold text-white mb-1">Exhibition Rules</h3>
            <p className="text-sm text-zinc-400">No official records affected</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur">
          <CardContent className="pt-6">
            <TrendingUp className="h-8 w-8 text-green-500 mb-3" />
            <h3 className="font-semibold text-white mb-1">Record Breaking</h3>
            <p className="text-sm text-zinc-400">Expected to break all PPV records</p>
          </CardContent>
        </Card>
        <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur">
          <CardContent className="pt-6">
            <Users className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="font-semibold text-white mb-1">Global Event</h3>
            <p className="text-sm text-zinc-400">Worldwide streaming planned</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}