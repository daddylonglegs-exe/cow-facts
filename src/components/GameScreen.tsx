
import React, { useState, useEffect } from 'react';
import CowAnimation from './CowAnimation';
import FactCard from './FactCard';
import Scoreboard from './Scoreboard';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { CowFact } from '@/data/cowFacts';
import { Award } from 'lucide-react';

type GameScreenProps = {
  facts: CowFact[];
  onGameEnd: (score: number, total: number) => void;
};

const GameScreen: React.FC<GameScreenProps> = ({ facts, onGameEnd }) => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [cowAnimation, setCowAnimation] = useState<'idle' | 'jump' | 'shake' | 'flip' | 'wrong'>('idle');
  const [isLoaded, setIsLoaded] = useState(false);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  
  const currentFact = facts[currentFactIndex];
  const isGameOver = currentFactIndex >= facts.length;
  
  // Random animations for correct answers
  const correctAnimations: ('jump' | 'shake' | 'flip')[] = ['jump', 'shake', 'flip'];
  
  useEffect(() => {
    // Add delay for animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Update multiplier based on consecutive correct answers
  useEffect(() => {
    if (consecutiveCorrect >= 3) {
      setMultiplier(2);
    } else {
      setMultiplier(1);
    }
  }, [consecutiveCorrect]);

  const handleAnswer = (userAnswer: boolean) => {
    setIsAnswered(true);
    const isAnswerCorrect = userAnswer === currentFact.isTrue;
    setIsCorrect(isAnswerCorrect);
    
    if (isAnswerCorrect) {
      // Update consecutive correct counter
      const newConsecutiveCorrect = consecutiveCorrect + 1;
      setConsecutiveCorrect(newConsecutiveCorrect);
      
      // Apply multiplier for 3+ consecutive correct answers
      const pointsToAdd = newConsecutiveCorrect >= 3 ? 2 : 1;
      setScore(prev => prev + pointsToAdd);
      
      // Play random animation
      const randomIndex = Math.floor(Math.random() * correctAnimations.length);
      setCowAnimation(correctAnimations[randomIndex]);
      
      // Show appropriate toast message
      if (newConsecutiveCorrect >= 3) {
        toast.success(
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-yellow-500" />
            <div>
              <div className="font-bold">Correct! (x2 POINTS!)</div>
              <div className="text-sm">{newConsecutiveCorrect} correct in a row!</div>
            </div>
          </div>
        );
      } else {
        toast.success("Correct! That's right!");
      }
    } else {
      // Reset consecutive correct counter
      setConsecutiveCorrect(0);
      setCowAnimation('wrong');
      toast.error(`Incorrect! The correct answer is: ${currentFact.isTrue ? 'True' : 'False'}`);
    }
  };

  const handleAnimationComplete = () => {
    // If we've reached the end of the game, notify the parent
    if (currentFactIndex === facts.length - 1) {
      // Small delay before ending game
      setTimeout(() => {
        onGameEnd(score + (isCorrect ? (multiplier > 1 ? 2 : 1) : 0), facts.length);
      }, 1000);
    }
  };

  const handleNextFact = () => {
    // Move to next fact
    setCurrentFactIndex(prev => prev + 1);
    setIsAnswered(false);
    setIsCorrect(null);
    setCowAnimation('idle');
  };

  if (isGameOver) {
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
        
        {/* Content */}
        <div className="relative z-10 text-center glass-card p-8 max-w-lg w-full mx-auto animate-scale-in">
          <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
          <p className="text-xl mb-6">Your final score: {score} out of {facts.length}</p>
          <div className="w-48 mx-auto mb-8">
            <CowAnimation animationState="idle" />
          </div>
          <Button 
            onClick={() => onGameEnd(score, facts.length)}
            className="py-4 px-8 text-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 bg-primary hover:bg-primary/90"
          >
            Play Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col p-4 relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/157d82cf-97ee-428f-8233-67c2576a4d0b.png"
          alt="Farmland background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Game Content */}
      <div className={`game-container relative z-10 flex flex-col h-full transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Header with scoreboard and multiplier */}
        <div className="mt-6 mb-8">
          <Scoreboard 
            score={score} 
            totalQuestions={facts.length} 
            multiplier={multiplier}
            streakCount={consecutiveCorrect}
            className="max-w-xs mx-auto" 
          />
        </div>
        
        {/* Fact card and cow animation */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto items-center">
            <div className="flex justify-center order-2 md:order-1">
              <CowAnimation 
                animationState={cowAnimation} 
                onAnimationComplete={handleAnimationComplete}
              />
            </div>
            
            <div className="order-1 md:order-2">
              <FactCard 
                fact={currentFact.text}
                isAnswered={isAnswered}
                onTrueClick={() => handleAnswer(true)}
                onFalseClick={() => handleAnswer(false)}
              />
              
              {isAnswered && currentFactIndex < facts.length - 1 && (
                <div className="mt-4 text-center">
                  <Button 
                    onClick={handleNextFact}
                    className="bg-black/70 hover:bg-black/80 text-white py-2 px-6 rounded-full transition-all"
                  >
                    Next Fact
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
