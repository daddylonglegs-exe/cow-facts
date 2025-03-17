
import React, { useState, useEffect } from 'react';
import StartScreen from '@/components/StartScreen';
import GameScreen from '@/components/GameScreen';
import { getShuffledFacts } from '@/data/cowFacts';
import { Toaster } from '@/components/ui/sonner';
import Leaderboard from '@/components/Leaderboard';
import { getLeaderboardEntries, saveScore } from '@/utils/leaderboardUtils';

enum GameState {
  START,
  PLAYING,
  END
}

const Index = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [facts, setFacts] = useState(getShuffledFacts());
  const [finalScore, setFinalScore] = useState({ score: 0, total: 0 });
  const [leaderboardEntries, setLeaderboardEntries] = useState(getLeaderboardEntries());
  const [questionsCount, setQuestionsCount] = useState<10 | 20>(10);
  
  const handleStartGame = (count: 10 | 20) => {
    setQuestionsCount(count);
    setGameState(GameState.PLAYING);
    setFacts(getShuffledFacts(count)); // Get specified number of random facts
  };
  
  const handleGameEnd = (score: number, total: number) => {
    setFinalScore({ score, total });
    saveScore(score, total, questionsCount);
    setLeaderboardEntries(getLeaderboardEntries());
    setGameState(GameState.START); // Go back to start after game ends
  };

  // Load leaderboard data on mount
  useEffect(() => {
    setLeaderboardEntries(getLeaderboardEntries());
  }, []);

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
      <Leaderboard entries={leaderboardEntries} />
      
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
