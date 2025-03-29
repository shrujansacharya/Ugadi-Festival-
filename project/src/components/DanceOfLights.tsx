import React, { useState, useEffect } from 'react';
import { Heart, Star, ArrowLeft } from 'lucide-react';

interface Light {
  id: number;
  x: number;
  y: number;
  color: string;
  scale: number;
}

interface DanceOfLightsProps {
  onBack: () => void;
}

const DanceOfLights: React.FC<DanceOfLightsProps> = ({ onBack }) => {
  const [lights, setLights] = useState<Light[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const colors = [
    'from-orange-400 to-red-400',
    'from-yellow-400 to-orange-400',
    'from-green-400 to-emerald-400',
    'from-pink-400 to-rose-400',
    'from-purple-400 to-indigo-400'
  ];

  const addLight = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDrawing) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newLight: Light = {
      id: Date.now(),
      x,
      y,
      color: colors[Math.floor(Math.random() * colors.length)],
      scale: Math.random() * 0.5 + 0.8
    };

    setLights(prev => [...prev, newLight]);

    // Check for heart after adding light
    if (lights.length > 30) {
      checkForHeart();
    }
  };

  const checkForHeart = () => {
    if (lights.length > 50 && !showMessage) {
      setMessage('I Love You! ❤️');
      setShowMessage(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDrawing) {
      addLight(e);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLights(prev =>
        prev.map(light => ({
          ...light,
          scale: Math.sin(Date.now() / 1000 + light.id) * 0.2 + 1
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 p-3 bg-white/30 rounded-full text-white hover:bg-white/40 transition-all duration-200 z-50 group"
        aria-label="Go back to celebration page"
      >
        <ArrowLeft className="w-6 h-6" />
        <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black/70 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Back to Celebration
        </span>
      </button>

      {/* Background stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Instructions */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white text-center z-10">
        <h2 className="text-3xl font-bold mb-4">Dance of Lights</h2>
        <p className="text-lg opacity-80">
          Click and drag to create magical lights
        </p>
      </div>

      {/* Drawing area */}
      <div
        className="relative min-h-screen"
        onMouseDown={() => setIsDrawing(true)}
        onMouseUp={() => setIsDrawing(false)}
        onMouseLeave={() => setIsDrawing(false)}
        onMouseMove={handleMouseMove}
      >
        {lights.map(light => (
          <div
            key={light.id}
            className="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
            style={{
              left: `${light.x}%`,
              top: `${light.y}%`,
              transform: `translate(-50%, -50%) scale(${light.scale})`
            }}
          >
            <div
              className={`w-full h-full rounded-full bg-gradient-to-r ${light.color} animate-pulse shadow-lg shadow-white/20`}
            />
          </div>
        ))}

        {/* Message reveal */}
        {showMessage && (
          <div className="absolute inset-0 flex items-center justify-center animate-fade-in">
            <div className="text-center">
              <Heart className="w-24 h-24 text-red-500 mx-auto mb-4 animate-pulse" />
              <h3 className="text-4xl font-bold text-white mb-4">{message}</h3>
              <div className="flex justify-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 animate-bounce"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Reset button */}
      <button
        onClick={() => {
          setLights([]);
          setShowMessage(false);
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
      >
        Clear Canvas
      </button>
    </div>
  );
};

export default DanceOfLights;