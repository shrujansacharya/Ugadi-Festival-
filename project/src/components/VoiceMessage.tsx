import React, { useState } from 'react';
import { Music, Play, Pause, Heart } from 'lucide-react';

const VoiceMessage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulated audio duration in seconds
  const duration = 30;

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      simulatePlayback();
    }
  };

  const simulatePlayback = () => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsPlaying(false);
          return 0;
        }
        return prev + (100 / duration);
      });
    }, 1000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Music className="w-12 h-12 text-rose-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            A Special Message For You
          </h2>
          <p className="text-lg text-gray-600">
            Listen to my heart's melody
          </p>
        </div>

        <div className="relative">
          {/* Decorative Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-32 h-32 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Waveform visualization */}
            <div className="h-24 mb-8 flex items-center justify-center gap-1">
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 rounded-full transition-all duration-300 ${
                    isPlaying ? 'animate-sound-wave' : 'h-8'
                  }`}
                  style={{
                    height: `${Math.sin(i * 0.5) * 20 +
                      40}%`,
                    backgroundColor: progress > (i / 40) * 100 ? '#F43F5E' : '#E5E7EB',
                    animationDelay: `${i * 50}ms`
                  }}
                />
              ))}
            </div>

            {/* Playback controls */}
            <div className="flex flex-col items-center">
              <button
                onClick={togglePlay}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 mb-6"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8 ml-1" />
                )}
              </button>

              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  className="bg-gradient-to-r from-rose-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Time indicators */}
              <div className="w-full flex justify-between text-sm text-gray-600">
                <span>{formatTime((progress / 100) * duration)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Message preview */}
            <div className="mt-8 text-center">
              <Heart className="w-6 h-6 text-rose-500 mx-auto mb-4 animate-pulse" />
              <p className="text-gray-600 italic">
                "A message filled with love, just for you..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceMessage;