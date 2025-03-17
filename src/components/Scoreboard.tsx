
import React from 'react';
import { cn } from '@/lib/utils';
import { Award, Star } from 'lucide-react';

type ScoreboardProps = {
  score: number;
  totalQuestions: number;
  multiplier?: number;
  streakCount?: number;
  className?: string;
};

const Scoreboard: React.FC<ScoreboardProps> = ({ 
  score, 
  totalQuestions,
  multiplier = 1,
  streakCount = 0,
  className
}) => {
  const progress = Math.min(streakCount / totalQuestions, 1) * 100;
  const showMultiplier = multiplier > 1;

  return (
    <div className={cn("glass-card p-4 animate-scale-in", className)}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-medium">Score</h3>
        
        {showMultiplier && (
          <div className="flex items-center gap-1 text-yellow-500 bg-yellow-100 px-2 py-1 rounded-full animate-pulse">
            <Award className="h-4 w-4" />
            <span className="font-bold">x{multiplier}</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold">{score}</span>
        <div className="ml-4 bg-gray-200 h-3 rounded-full w-32 overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      {/* Question counter */}
      <div className="mt-1 text-sm text-gray-600">
        Question {Math.min(streakCount, totalQuestions)} of {totalQuestions}
      </div>
      
      {/* Streak indicator */}
      {streakCount > 0 && (
        <div className="mt-2 flex items-center text-sm text-purple-700">
          <div className="flex">
            {[...Array(Math.min(streakCount, 5))].map((_, i) => (
              <Star 
                key={i} 
                className={cn(
                  "h-4 w-4 -ml-1 first:ml-0",
                  i < 3 ? "text-purple-400" : "text-yellow-500"
                )} 
                fill={i >= 2 ? "currentColor" : "none"} 
              />
            ))}
          </div>
          <span className="ml-2 font-medium">
            {streakCount} correct in a row
            {multiplier > 1 && ` - ${multiplier}x points!`}
          </span>
        </div>
      )}
    </div>
  );
};

export default Scoreboard;
