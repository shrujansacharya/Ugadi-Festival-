import React, { useState } from 'react';
import { Star, Moon, CloudMoon, ArrowLeft } from 'lucide-react';

interface WishingStar {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  wish?: string;
}

interface StarryWishSkyProps {
  onBack: () => void; // Add prop for navigation
}

const StarryWishSky: React.FC<StarryWishSkyProps> = ({ onBack }) => {
  const [stars, setStars] = useState<WishingStar[]>([]);
  const [currentWish, setCurrentWish] = useState('');
  const [showWishInput, setShowWishInput] = useState(false);
  const [selectedStar, setSelectedStar] = useState<number | null>(null);

  const handleStarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    const newStar: WishingStar = {
      id: Date.now(),
      x,
      y,
      size: Math.random() * 1 + 1,
      rotation: Math.random() * 360,
    };

    setStars([...stars, newStar]);
    setSelectedStar(newStar.id);
    setShowWishInput(true);
  };

  const handleWishSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentWish.trim() && selectedStar !== null) {
      setStars(stars.map(star =>
        star.id === selectedStar
          ? { ...star, wish: currentWish }
          : star
      ));
      setCurrentWish('');
      setShowWishInput(false);
      setSelectedStar(null);
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 overflow-hidden">
      {/* Back Button */}
      <button
        onClick={onBack} // Use prop instead of window.history.back()
        className="absolute top-6 left-6 p-3 bg-white/30 rounded-full text-white hover:bg-white/40 transition-all duration-200 z-50 group"
        title="Go Back"
      >
        <ArrowLeft className="w-6 h-6" />
        <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black/70 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Back to Celebration
        </span>
      </button>
      
      {/* Stars background */}
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
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <div className="absolute top-8 right-8">
        <Moon className="w-16 h-16 text-yellow-100" />
      </div>

      {/* Clouds */}
      <div className="absolute bottom-0 left-0 right-0">
        <CloudMoon className="w-24 h-24 text-purple-300/20" />
      </div>

      {/* Interactive area */}
      <div
        className="relative min-h-screen"
        onClick={handleStarClick}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-white/50 text-lg">Click anywhere to place a star</p>
        </div>

        {/* Placed stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute group"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              transform: `rotate(${star.rotation}deg)`,
            }}
          >
            <Star
              className="w-6 h-6 text-yellow-300 fill-yellow-300 animate-pulse cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
              style={{
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
            {star.wish && (
              <div className="absolute left-6 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white text-sm min-w-[200px] pointer-events-none">
                {star.wish}
              </div>
            )}
          </div>
        ))}

        {/* Wish input modal */}
        {showWishInput && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-md w-full mx-4">
              <form onSubmit={handleWishSubmit}>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Make a Wish Upon Your Star ✨
                </h3>
                <textarea
                  value={currentWish}
                  onChange={(e) => setCurrentWish(e.target.value)}
                  placeholder="Write your wish here..."
                  className="w-full h-32 p-4 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 resize-none"
                />
                <div className="flex gap-4 mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowWishInput(false);
                      setSelectedStar(null);
                      if (selectedStar !== null) {
                        setStars(stars.filter(star => star.id !== selectedStar));
                      }
                    }}
                    className="flex-1 py-2 px-4 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 px-4 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium hover:shadow-lg transition-all duration-300"
                  >
                    Make Wish
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StarryWishSky;