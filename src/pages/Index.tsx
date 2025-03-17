
import React, { useState, useEffect } from 'react';
import StartScreen from '@/components/StartScreen';
import GameScreen from '@/components/GameScreen';
import { getShuffledFacts } from '@/data/cowFacts';
import { Toaster } from '@/components/ui/sonner';

enum GameState {
  START,
  PLAYING,
  END
}

const Index = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [facts, setFacts] = useState(getShuffledFacts());
  const [finalScore, setFinalScore] = useState({ score: 0, total: 0 });
  
  const handleStartGame = () => {
    setGameState(GameState.PLAYING);
    setFacts(getShuffledFacts()); // Get 10 random facts each game
  };
  
  const handleGameEnd = (score: number, total: number) => {
    setFinalScore({ score, total });
    setGameState(GameState.START); // Go back to start after game ends
  };

  // Preload the background image
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/157d82cf-97ee-428f-8233-67c2576a4d0b.png";
    
    const cowImg = new Image();
    cowImg.src = "/lovable-uploads/cbcdaf46-1848-4f1c-afd6-b3fb35d358e4.png";
  }, []);
  
  return (
    <div className="min-h-screen w-full">
      <Toaster position="top-center" />
      
      {gameState === GameState.START && (
        <StartScreen onStart={handleStartGame} />
      )}
      
      {gameState === GameState.PLAYING && (
        <GameScreen 
          facts={facts} 
          onGameEnd={handleGameEnd} 
        />
      )}
    </div>
  );
};

export default Index;
