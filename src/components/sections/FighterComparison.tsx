import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { fighterStats } from "@/lib/data";

export function FighterComparison() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Fighter Comparison</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Tyson Card */}
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-red-900/50">
          <CardHeader className="text-center">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarFallback className="bg-red-600 text-white text-2xl font-bold">MT</AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl text-white">{fighterStats.tyson.name}</CardTitle>
            <CardDescription className="text-red-400">&quot;{fighterStats.tyson.nickname}&quot;</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-zinc-300">
              <div className="flex justify-between">
                <span className="text-zinc-500">Age</span>
                <span className="font-semibold">{fighterStats.tyson.age}</span>
              </div>
              <Separator className="bg-zinc-800" />
              <div className="flex justify-between">
                <span className="text-zinc-500">Record</span>
                <span className="font-semibold">{fighterStats.tyson.record} ({fighterStats.tyson.ko} KOs)</span>
              </div>
              <Separator className="bg-zinc-800" />
              <div className="flex justify-between">
                <span className="text-zinc-500">Weight</span>
                <span className="font-semibold">{fighterStats.tyson.weight}</span>
              </div>
              <Separator className="bg-zinc-800" />
              <div className="flex justify-between">
                <span className="text-zinc-500">Height</span>
                <span className="font-semibold">{fighterStats.tyson.height}</span>
              </div>
              <Separator className="bg-zinc-800" />
              <div className="flex justify-between">
                <span className="text-zinc-500">Reach</span>
                <span className="font-semibold">{fighterStats.tyson.reach}</span>
              </div>
              <Separator className="bg-zinc-800" />
              <div className="flex justify-between">
                <span className="text-zinc-500">Last Fight</span>
                <span className="font-semibold text-sm">{fighterStats.tyson.lastFight}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mayweather Card */}
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-yellow-900/50">
          <CardHeader className="text-center">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarFallback className="bg-yellow-600 text-white text-2xl font-bold">FM</AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl text-white">{fighterStats.mayweather.name}</CardTitle>
            <CardDescription className="text-yellow-400">&quot;{fighterStats.mayweather.nickname}&quot;</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-zinc-300">
              <div className="flex justify-between">
                <span className="text-zinc-500">Age</span>
                <span className="font-semibold">{fighterStats.mayweather.age}</span>
              </div>
              <Separator className="bg-zinc-800" />
              <div className="flex justify-between">
                <span className="text-zinc-500">Record</span>
                <span className="font-semibold text-green-400">{fighterStats.mayweather.record} ({fighterStats.mayweather.ko} KOs)</span>
              </div>
              <Separator className="bg-zinc-800" />
              <div className="flex justify-between">
                <span className="text-zinc-500">Weight</span>
                <span className="font-semibold">{fighterStats.mayweather.weight}</span>
              </div>
              <Separator className="bg-zinc-800" />
              <div className="flex justify-between">
                <span className="text-zinc-500">Height</span>
                <span className="font-semibold">{fighterStats.mayweather.height}</span>
              </div>
              <Separator className="bg-zinc-800" />
              <div className="flex justify-between">
                <span className="text-zinc-500">Reach</span>
                <span className="font-semibold">{fighterStats.mayweather.reach}</span>
              </div>
              <Separator className="bg-zinc-800" />
              <div className="flex justify-between">
                <span className="text-zinc-500">Last Fight</span>
                <span className="font-semibold text-sm">{fighterStats.mayweather.lastFight}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}