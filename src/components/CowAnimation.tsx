
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type CowAnimationProps = {
  animationState: 'idle' | 'jump' | 'shake' | 'flip' | 'wrong';
  onAnimationComplete?: () => void;
};

export const CowAnimation: React.FC<CowAnimationProps> = ({
  animationState = 'idle',
  onAnimationComplete
}) => {
  const [animationClass, setAnimationClass] = useState<string>('');
  const [speechBubble, setSpeechBubble] = useState<string>('');
  const [isBubbleVisible, setIsBubbleVisible] = useState<boolean>(false);

  useEffect(() => {
    if (animationState === 'idle') {
      setAnimationClass('animate-float');
      setSpeechBubble('');
      setIsBubbleVisible(false);
      return;
    }

    // Set appropriate animation and speech bubble
    if (animationState === 'jump') {
      setAnimationClass('animate-cow-jump');
      setSpeechBubble('MOOOOO!');
    } else if (animationState === 'shake') {
      setAnimationClass('animate-cow-shake');
      setSpeechBubble('MOOOOO!');
    } else if (animationState === 'flip') {
      setAnimationClass('animate-cow-flip');
      setSpeechBubble('MOOOOO!');
    } else if (animationState === 'wrong') {
      setAnimationClass('animate-cow-shake');
      setSpeechBubble('No...');
    }

    // Show speech bubble
    setIsBubbleVisible(true);

    // Reset to idle after animation completes
    const timer = setTimeout(() => {
      setAnimationClass('animate-float');
      setIsBubbleVisible(false);
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [animationState, onAnimationComplete]);

  return (
    <div className="relative w-full max-w-xs mx-auto">
      {/* Speech bubble */}
      {isBubbleVisible && (
        <div className="absolute -top-16 left-0 right-0 mx-auto w-32 glass-card py-2 px-4 text-center animate-fade-in">
          <p className="font-bold text-lg">{speechBubble}</p>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white/70"></div>
        </div>
      )}
      
      {/* Cow image */}
      <div className={cn("relative w-full h-full transition-all duration-300", animationClass)}>
        <img 
          src="/lovable-uploads/cbcdaf46-1848-4f1c-afd6-b3fb35d358e4.png" 
          alt="Cartoon cow" 
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default CowAnimation;
