import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy } from "lucide-react";
import { careerHighlights } from "@/lib/data";

export function CareerTimeline() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Career Highlights Timeline</h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Tyson Timeline */}
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-red-900/50">
          <CardHeader>
            <CardTitle className="text-xl text-white flex items-center">
              <Award className="mr-2 h-5 w-5 text-red-500" />
              Mike Tyson&apos;s Journey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {careerHighlights.tyson.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Badge className="bg-red-900/50 text-red-400 min-w-[60px]">{highlight.year}</Badge>
                  <p className="text-zinc-300 text-sm">{highlight.achievement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mayweather Timeline */}
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-yellow-900/50">
          <CardHeader>
            <CardTitle className="text-xl text-white flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
              Floyd Mayweather&apos;s Legacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {careerHighlights.mayweather.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Badge className="bg-yellow-900/50 text-yellow-400 min-w-[60px]">{highlight.year}</Badge>
                  <p className="text-zinc-300 text-sm">{highlight.achievement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}