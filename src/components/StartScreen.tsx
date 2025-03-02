
import React from 'react';
import { Button } from '@/components/ui/button';
import CowAnimation from './CowAnimation';

type StartScreenProps = {
  onStart: () => void;
};

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/157d82cf-97ee-428f-8233-67c2576a4d0b.png"
          alt="Farmland background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Game Title and Start Button */}
      <div className="relative z-10 text-center max-w-lg w-full mx-auto glass-card p-8 animate-scale-in">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white bg-black/60 p-4 rounded-lg shadow-lg font-title">
          Does Viya know these facts about cows?
        </h1>
        
        <div className="w-48 mx-auto mb-8">
          <CowAnimation animationState="idle" />
        </div>
        
        <Button 
          onClick={onStart}
          className="py-4 px-8 text-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 bg-primary hover:bg-primary/90"
        >
          Start Game
        </Button>
      </div>
    </div>
  );
};

export default StartScreen;
