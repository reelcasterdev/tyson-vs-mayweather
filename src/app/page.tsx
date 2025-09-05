"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin, Trophy, Users, TrendingUp, Clock, AlertCircle, Star } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    title: "Boxing Legends Agree to Historic Exhibition Match",
    source: "ESPN",
    date: "September 4, 2025",
    category: "Breaking News",
    content: "Mike Tyson and Floyd Mayweather Jr. have officially agreed to compete in an exhibition match in spring 2026. The event will be organized by CSI Sports/Fight Sports.",
    featured: true,
  },
  {
    id: 2,
    title: "Tyson: 'It's Going to Be Detrimental to His Health'",
    source: "Sky Sports",
    date: "September 4, 2025",
    category: "Fighter Statement",
    content: "Mike Tyson expressed surprise that Floyd Mayweather agreed to the fight, warning it could be 'detrimental to his health' while confirming the match is signed and happening.",
    featured: false,
  },
  {
    id: 3,
    title: "Mayweather Confident: 'No Fighter Can Tarnish My Legacy'",
    source: "CBS Sports",
    date: "September 5, 2025",
    category: "Fighter Statement",
    content: "Floyd Mayweather remains undefeated in confidence, stating that after 30 years in boxing, no fighter can tarnish his perfect 50-0 legacy.",
    featured: false,
  },
  {
    id: 4,
    title: "Exhibition Set to Break All Streaming Records",
    source: "TMZ Sports",
    date: "September 5, 2025",
    category: "Business",
    content: "Promoters predict the Tyson vs Mayweather exhibition will break all broadcast, streaming and economic records set by Mike Tyson's fight with Jake Paul in 2024.",
    featured: false,
  },
  {
    id: 5,
    title: "Weight Class Differences Present Unique Challenge",
    source: "Boxing News 24",
    date: "September 5, 2025",
    category: "Analysis",
    content: "With Mayweather traditionally fighting at middleweight (147-154 lbs) and Tyson as a heavyweight, the weight difference presents an intriguing dynamic for the exhibition.",
    featured: false,
  },
  {
    id: 6,
    title: "Location and Broadcast Details Still Under Wraps",
    source: "CNN Sports",
    date: "September 5, 2025",
    category: "Updates",
    content: "While the fight is confirmed for spring 2026, the exact date, venue, and broadcast platform remain to be announced by CSI Sports/Fight Sports.",
    featured: false,
  },
];

const fighterStats = {
  tyson: {
    name: "Mike Tyson",
    nickname: "Iron Mike",
    age: 59,
    record: "50-6",
    height: "5'10\"",
    reach: "71\"",
    stance: "Orthodox",
    lastFight: "vs Jake Paul (2024)",
  },
  mayweather: {
    name: "Floyd Mayweather Jr.",
    nickname: "Money",
    age: 48,
    record: "50-0",
    height: "5'8\"",
    reach: "72\"",
    stance: "Orthodox",
    lastFight: "vs John Gotti III (2024)",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-yellow-600/20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600/10 rounded-full filter blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 pt-16 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-red-600 text-white border-red-600">SPRING 2026 • EXHIBITION MATCH</Badge>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent mb-6">
              TYSON VS MAYWEATHER
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-8">
              Two Legends. One Ring. History in the Making.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
                <AlertCircle className="mr-2 h-5 w-5" />
                Get Fight Updates
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                <Star className="mr-2 h-5 w-5" />
                Set Reminder
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Fighter Comparison */}
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
              <CardDescription className="text-red-400">"{fighterStats.tyson.nickname}"</CardDescription>
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
                  <span className="font-semibold">{fighterStats.tyson.record}</span>
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
              <CardDescription className="text-yellow-400">"{fighterStats.mayweather.nickname}"</CardDescription>
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
                  <span className="font-semibold text-green-400">{fighterStats.mayweather.record}</span>
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

      {/* Key Highlights */}
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

      {/* Latest News Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Latest News & Updates</h2>
        
        {/* Featured News */}
        {newsArticles.filter(article => article.featured).map(article => (
          <Card key={article.id} className="bg-gradient-to-r from-red-950/50 to-yellow-950/50 border-yellow-900/50 mb-8 max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-red-600 text-white">{article.category}</Badge>
                <span className="text-sm text-zinc-400 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {article.date}
                </span>
              </div>
              <CardTitle className="text-2xl text-white">{article.title}</CardTitle>
              <CardDescription className="text-zinc-400">Source: {article.source}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-300 leading-relaxed">{article.content}</p>
            </CardContent>
          </Card>
        ))}

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {newsArticles.filter(article => !article.featured).map(article => (
            <Card key={article.id} className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors backdrop-blur">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="border-zinc-700 text-zinc-300">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-zinc-500">{article.date}</span>
                </div>
                <CardTitle className="text-lg text-white line-clamp-2">{article.title}</CardTitle>
                <CardDescription className="text-zinc-500">{article.source}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-400 line-clamp-3">{article.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-red-950 to-yellow-950 border-none max-w-3xl mx-auto">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Don't Miss This Historic Event
            </h3>
            <p className="text-zinc-300 mb-6">
              Be the first to know when tickets go on sale and get exclusive updates about the fight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
                Sign Up for Updates
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Follow on Social Media
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-zinc-500">
            <p className="mb-2">© 2025 Tyson vs Mayweather Fight Hub. Unofficial Fan Site.</p>
            <p className="text-sm">All fight information subject to official confirmation by CSI Sports/Fight Sports.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}