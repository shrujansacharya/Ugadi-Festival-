import React, { useState, useEffect } from 'react';
import { Heart, Play, Pause } from 'lucide-react';

interface WelcomePageProps {
  name: string;
  onStart: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ name, onStart }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(
    new Audio('https://example.com/roshni-hi-roshni-hai.mp3') // Replace with actual URL or local file path
  );

  useEffect(() => {
    return () => {
      audio.pause(); // Cleanup audio on component unmount
    };
  }, [audio]);

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => console.error('Audio playback error:', err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-amber-100 via-orange-100 to-red-100">
      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 0.9; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0.4; }
        }
        @keyframes sway {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(20px); }
        }
      `}</style>

      {/* Falling Flowers Animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={`flower-${i}`}
            className="absolute animate-[fall_10s_linear_infinite,sway_4s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * -100}vh`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 25 + 15}px`,
              height: `${Math.random() * 25 + 15}px`,
            }}
          >
            <div
              className="w-full h-full bg-contain bg-no-repeat opacity-80"
              style={{
                backgroundImage: `url('https://example.com/flower.png')`, // Replace with actual flower image URL
              }}
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <h1 className="text-5xl md:text-7xl font-[cursive] bg-gradient-to-r from-orange-600 via-yellow-500 to-red-500 text-transparent bg-clip-text">
          Happy Ugadi & New Year
        </h1>
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">My Beloved {name}</h2>
        <p className="text-lg md:text-xl font-light text-gray-700 mb-12 italic">
          Let’s Celebrate New Beginnings with Love and Light
        </p>

        {/* Start Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onStart();
          }}
          className="relative z-20 px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 rounded-full hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-300"
        >
          Begin Our Journey
        </button>
      </div>

      {/* Play/Pause Button */}
      <div className="absolute bottom-4 right-4 z-20">
        <button
          onClick={toggleAudio}
          className="p-2 bg-white/30 backdrop-blur-sm rounded-full hover:bg-white/50 transition-all flex items-center justify-center"
        >
          {isPlaying ? <Pause className="w-5 h-5 text-red-500" /> : <Play className="w-5 h-5 text-green-500" />}
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
