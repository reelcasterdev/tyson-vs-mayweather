import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, Star } from "lucide-react";

export function HeroSection() {
  return (
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
  );
}