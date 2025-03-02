
import React from 'react';
import { cn } from '@/lib/utils';

type ScoreboardProps = {
  score: number;
  totalQuestions: number;
  className?: string;
};

const Scoreboard: React.FC<ScoreboardProps> = ({ 
  score, 
  totalQuestions,
  className
}) => {
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <div className={cn("glass-card p-4 animate-scale-in", className)}>
      <h3 className="text-xl font-medium mb-2">Score</h3>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold">{score} / {totalQuestions}</span>
        <div className="ml-4 bg-gray-200 h-3 rounded-full w-32 overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
