
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import CowAnimation from './CowAnimation';
import { motion } from 'framer-motion';
import { Sparkles, ListFilter } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

type StartScreenProps = {
  onStart: (questionCount: 10 | 20) => void;
};

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [hovering, setHovering] = useState(false);
  const [questionCount, setQuestionCount] = useState<10 | 20>(10);
  
  // Add a subtle floating animation effect to the elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };
  
  // Smoother title animation with longer duration and gentler movement
  const titleAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 6,  // Longer duration for smoother movement
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  // Sparkle animation for the button
  const buttonVariants = {
    idle: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 0px 12px rgba(255,255,255,0.6)",
      transition: { 
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  const handleQuestionCountChange = (value: string) => {
    setQuestionCount(parseInt(value) as 10 | 20);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-400/30 to-transparent mix-blend-overlay"></div>
        <img 
          src="/lovable-uploads/157d82cf-97ee-428f-8233-67c2576a4d0b.png"
          alt="Farmland background" 
          className="w-full h-full object-cover"
        />
        
        {/* Floating particles for a dynamic feel */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white/20 backdrop-blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Game Title and Start Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-lg w-full mx-auto glass-card p-8 backdrop-blur-md bg-white/60 border border-white/40 rounded-2xl shadow-2xl"
      >
        <motion.h1 
          animate={titleAnimation}  // Using the smoother title animation
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white bg-gradient-to-r from-purple-600 to-pink-500 p-4 rounded-lg shadow-lg font-title"
        >
          Does Viya know these facts about cows?
        </motion.h1>
        
        <motion.div 
          className="w-48 mx-auto mb-8"
          animate={floatingAnimation}
          custom={1}
        >
          <CowAnimation animationState="idle" />
        </motion.div>
        
        <div className="mb-6">
          <div className="flex items-center justify-center gap-4">
            <ListFilter className="text-purple-700" />
            <Select value={questionCount.toString()} onValueChange={handleQuestionCountChange}>
              <SelectTrigger className="w-40 bg-white/50 border-purple-300">
                <SelectValue placeholder="Question count" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10 Questions</SelectItem>
                <SelectItem value="20">20 Questions</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <motion.div
          whileHover="hover"
          variants={buttonVariants}
          onHoverStart={() => setHovering(true)}
          onHoverEnd={() => setHovering(false)}
        >
          <Button 
            onClick={() => onStart(questionCount)}
            className="py-4 px-8 text-lg font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-lg transition-all duration-300"
          >
            <Sparkles className={`mr-2 ${hovering ? 'animate-pulse' : ''}`} />
            Start Game
          </Button>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-sm text-purple-700 font-medium"
        >
          Test your knowledge with cow facts!
        </motion.p>
      </motion.div>
      
      {/* Floating cow silhouettes in the background */}
      <div className="absolute bottom-10 right-10 opacity-20 w-24 h-24 -rotate-12">
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img 
            src="/lovable-uploads/cbcdaf46-1848-4f1c-afd6-b3fb35d358e4.png" 
            alt="" 
            className="w-full h-full" 
          />
        </motion.div>
      </div>
    </div>
  );
};

export default StartScreen;
