
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="absolute top-4 right-4 z-20 bg-white/80 hover:bg-white">
          <Trophy className="h-5 w-5 text-yellow-500" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-center text-xl">Your High Scores</SheetTitle>
        </SheetHeader>
        
        {entries.length === 0 ? (
          <div className="mt-8 text-center text-muted-foreground">
            No scores yet. Play a game to see your results here!
          </div>
        ) : (
          <Table className="mt-4">
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">#</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Score</TableHead>
                <TableHead className="text-right">Questions</TableHead>
                <TableHead className="text-right">Percentage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedEntries.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell className="text-right">{entry.score}/{entry.total}</TableCell>
                  <TableCell className="text-right">{entry.questionsCount}</TableCell>
                  <TableCell className="text-right">{((entry.score / entry.total) * 100).toFixed(0)}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Leaderboard;
