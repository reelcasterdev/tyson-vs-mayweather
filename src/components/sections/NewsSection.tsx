import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { newsArticles } from "@/lib/data";

export function NewsSection() {
  return (
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
  );
}