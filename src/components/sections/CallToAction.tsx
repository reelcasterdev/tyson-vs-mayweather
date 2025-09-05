import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="bg-gradient-to-r from-red-950 to-yellow-950 border-none max-w-3xl mx-auto">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don&apos;t Miss This Historic Event
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
  );
}