
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy, Medal, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface LeaderboardEntry {
  date: string;
  score: number;
  total: number;
  questionsCount: number;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ entries }) => {
  const sortedEntries = [...entries].sort((a, b) => {
    // Sort by score percentage (higher first), then by raw score (higher first)
    const aPercent = (a.score / a.total) * 100;
    const bPercent = (b.score / b.total) * 100;
    
    if (bPercent !== aPercent) {
      return bPercent - aPercent;
    }
    return b.score - a.score;
  });

  // Get rank icon based on position
  const getRankIcon = (position: number) => {
    switch (position) {
      case 0:
        return <Trophy className="h-5 w-5 text-yellow-500" fill="gold" />;
      case 1:
        return <Medal className="h-5 w-5 text-gray-300" fill="silver" />;
      case 2:
        return <Medal className="h-5 w-5 text-amber-600" fill="#cd7f32" />;
      default:
        return <Award className="h-5 w-5 text-purple-400" />;
    }
  };

  // Calculate star rating based on percentage
  const getStarRating = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    const stars = Math.ceil(percentage / 20); // 5 stars max, one star per 20%
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={cn(
          "h-4 w-4 inline-block", 
          i < stars ? "text-yellow-500" : "text-gray-300"
        )} 
        fill={i < stars ? "currentColor" : "none"} 
      />
    ));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-110"
        >
          <Trophy className="h-5 w-5 text-yellow-500" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto bg-gradient-to-b from-white to-purple-50 border-l-purple-200">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
            🏆 Your High Scores 🏆
          </SheetTitle>
        </SheetHeader>
        
        {entries.length === 0 ? (
          <div className="mt-8 text-center text-muted-foreground p-8 border-2 border-dashed border-purple-200 rounded-xl">
            <Trophy className="h-12 w-12 mx-auto mb-4 text-purple-200" strokeWidth={1.5} />
            <p className="text-lg font-medium text-purple-400">No scores yet!</p>
            <p className="text-sm mt-2">Play a game to see your results here</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Top score highlight box */}
            {sortedEntries.length > 0 && (
              <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-4 rounded-xl shadow-sm border border-purple-200 animate-float">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
                      Top Score
                    </div>
                    <div className="text-3xl font-bold text-purple-700">{sortedEntries[0].score}</div>
                    <div className="flex mt-1">
                      {getStarRating(sortedEntries[0].score, sortedEntries[0].total)}
                    </div>
                  </div>
                  <Trophy className="h-12 w-12 text-yellow-500" fill="gold" strokeWidth={1} />
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Achieved on {sortedEntries[0].date} • {sortedEntries[0].questionsCount} questions
                </div>
              </div>
            )}

            {/* Scores table */}
            <div className="rounded-xl overflow-hidden shadow-sm border border-purple-100">
              <Table>
                <TableHeader className="bg-purple-50">
                  <TableRow className="hover:bg-purple-100/50">
                    <TableHead className="w-12 text-purple-700">Rank</TableHead>
                    <TableHead className="text-purple-700">Date</TableHead>
                    <TableHead className="text-right text-purple-700">Score</TableHead>
                    <TableHead className="text-right text-purple-700">Questions</TableHead>
                    <TableHead className="text-right text-purple-700">Rating</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedEntries.map((entry, index) => (
                    <TableRow 
                      key={index} 
                      className={cn(
                        "transition-colors",
                        index === 0 ? "bg-yellow-50" : "",
                        index === 1 ? "bg-gray-50" : "",
                        index === 2 ? "bg-amber-50" : ""
                      )}
                    >
                      <TableCell className="font-medium flex items-center">
                        <div className="mr-2">{getRankIcon(index)}</div>
                        {index + 1}
                      </TableCell>
                      <TableCell>{entry.date}</TableCell>
                      <TableCell className="text-right font-bold">{entry.score}</TableCell>
                      <TableCell className="text-right">{entry.questionsCount}</TableCell>
                      <TableCell className="text-right">
                        {((entry.score / entry.total) * 100).toFixed(0)}%
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {/* Additional stats or empty state for future enhancements */}
            {sortedEntries.length > 1 && (
              <div className="text-center text-sm text-purple-400 mt-4">
                {sortedEntries.length} games played • Keep improving your cow knowledge!
              </div>
            )}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Leaderboard;
