
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type FactCardProps = {
  fact: string;
  isAnswered: boolean;
  onTrueClick: () => void;
  onFalseClick: () => void;
  className?: string;
};

const FactCard: React.FC<FactCardProps> = ({
  fact,
  isAnswered,
  onTrueClick,
  onFalseClick,
  className
}) => {
  return (
    <div className={cn(
      "glass-card p-6 max-w-2xl w-full mx-auto transition-all duration-500 animate-scale-in", 
      className
    )}>
      <div className="mb-8">
        <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
          Cow Fact
        </span>
        <h2 className="text-2xl font-medium leading-relaxed">{fact}</h2>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={onTrueClick}
          disabled={isAnswered}
          className="py-6 px-8 text-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none bg-green-500 hover:bg-green-600"
        >
          True
        </Button>
        <Button
          onClick={onFalseClick}
          disabled={isAnswered}
          className="py-6 px-8 text-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none bg-red-500 hover:bg-red-600"
        >
          False
        </Button>
      </div>
    </div>
  );
};

export default FactCard;
