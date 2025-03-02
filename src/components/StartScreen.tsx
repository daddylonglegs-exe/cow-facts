
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import CowAnimation from './CowAnimation';

type StartScreenProps = {
  onStart: () => void;
};

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Add delay for animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background image with blur loading */}
      <div 
        className="absolute inset-0 blur-load z-0"
        style={{ backgroundImage: "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAAIAAoBAREA/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAZEAEBAAMBAAAAAAAAAAAAAAABAwQREiH/2gAIAQEAAD8ARuvKblTcYaP/2Q==)" }}
      >
        <img 
          src="/lovable-uploads/157d82cf-97ee-428f-8233-67c2576a4d0b.png"
          alt="Farmland background" 
          className="w-full h-full object-cover"
          onLoad={() => {
            const parentElement = document.querySelector('.blur-load');
            if (parentElement) parentElement.classList.add('loaded');
          }}
        />
      </div>
      
      {/* Content */}
      <div className={`relative z-10 text-center transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-800">
            Does Viya know these facts about cows?
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Test your knowledge of cow facts! Guess whether each fact is true or false.
          </p>
        </div>
        
        <div className="w-64 mx-auto mb-10">
          <CowAnimation animationState="idle" />
        </div>
        
        <Button 
          onClick={onStart}
          className="py-6 px-10 text-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95 bg-primary hover:bg-primary/90"
        >
          Start Game
        </Button>
      </div>
    </div>
  );
};

export default StartScreen;
