
import { LeaderboardEntry } from '@/components/Leaderboard';

const STORAGE_KEY = 'cow-quiz-leaderboard';

export const saveScore = (score: number, total: number, questionsCount: number): void => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  
  const entry: LeaderboardEntry = {
    date: formattedDate,
    score,
    total,
    questionsCount,
  };
  
  const existingEntries = getLeaderboardEntries();
  const newEntries = [...existingEntries, entry];
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newEntries));
};

export const getLeaderboardEntries = (): LeaderboardEntry[] => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (!storedData) return [];
  
  try {
    return JSON.parse(storedData) as LeaderboardEntry[];
  } catch (error) {
    console.error('Error parsing leaderboard data:', error);
    return [];
  }
};

export const clearLeaderboard = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
