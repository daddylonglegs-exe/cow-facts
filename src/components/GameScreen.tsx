
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

const BASE_POINTS = 50; // Base points per correct answer

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
  const isLastQuestion = currentFactIndex === facts.length - 1;
  
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
      // Calculate progressive multiplier: 3-5 correct = 2x, 6-8 correct = 4x, 9+ correct = 8x
      const multiplierValue = Math.pow(2, Math.floor(consecutiveCorrect / 3));
      setMultiplier(multiplierValue);
    } else {
      setMultiplier(1);
    }
  }, [consecutiveCorrect]);

  const handleAnswer = (userAnswer: boolean) => {
    if (isAnswered) return; // Prevent double answers
    
    setIsAnswered(true);
    const isAnswerCorrect = userAnswer === currentFact.isTrue;
    setIsCorrect(isAnswerCorrect);
    
    if (isAnswerCorrect) {
      // Update consecutive correct counter
      const newConsecutiveCorrect = consecutiveCorrect + 1;
      setConsecutiveCorrect(newConsecutiveCorrect);
      
      // Calculate new multiplier
      const newMultiplier = newConsecutiveCorrect >= 3 ? 
        Math.pow(2, Math.floor(newConsecutiveCorrect / 3)) : 1;
      
      // Apply points with multiplier
      const pointsToAdd = BASE_POINTS * newMultiplier;
      setScore(prev => prev + pointsToAdd);
      
      // Play random animation
      const randomIndex = Math.floor(Math.random() * correctAnimations.length);
      setCowAnimation(correctAnimations[randomIndex]);
      
      // Show appropriate toast message with multiplier info
      if (newMultiplier > 1) {
        toast.success(
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-yellow-500" />
            <div>
              <div className="font-bold">Correct! (x{newMultiplier} POINTS!)</div>
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
    
    // If this is the last question, trigger the game end after animation
    if (isLastQuestion) {
      const finalScore = score + (isAnswerCorrect ? BASE_POINTS * multiplier : 0);
      setTimeout(() => {
        onGameEnd(finalScore, facts.length);
      }, 1500);
    }
  };

  const handleAnimationComplete = () => {
    // No further action needed here, as we handle game end in handleAnswer
  };

  const handleNextFact = () => {
    // Move to next fact only if we're not at the last question
    if (currentFactIndex < facts.length - 1) {
      setCurrentFactIndex(prev => prev + 1);
      setIsAnswered(false);
      setIsCorrect(null);
      setCowAnimation('idle');
    }
  };

  // Check if we've somehow gone beyond our facts array
  if (currentFactIndex >= facts.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/157d82cf-97ee-428f-8233-67c2576a4d0b.png"
            alt="Farmland background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center glass-card p-8 max-w-lg w-full mx-auto animate-scale-in">
          <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
          <p className="text-xl mb-6">Your final score: {score}</p>
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
        
        {/* Question counter */}
        <div className="text-center mb-4">
          <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            Question {currentFactIndex + 1} of {facts.length}
          </span>
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
              
              {isAnswered && !isLastQuestion && (
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
