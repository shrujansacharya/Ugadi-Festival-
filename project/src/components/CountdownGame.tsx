import React, { useState, useEffect } from 'react';
import { Clock, Check, Star } from 'lucide-react';

interface Ingredient {
  id: number;
  name: string;
  taste: string;
  icon: string;
  added: boolean;
}

const CountdownGame: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: 1, name: 'Jaggery', taste: 'Sweet', icon: '🍯', added: false },
    { id: 2, name: 'Neem Flowers', taste: 'Bitter', icon: '🌸', added: false },
    { id: 3, name: 'Raw Mango', taste: 'Sour', icon: '🥭', added: false },
    { id: 4, name: 'Tamarind', taste: 'Tangy', icon: '🌿', added: false },
    { id: 5, name: 'Salt', taste: 'Salty', icon: '🧂', added: false }
  ]);
  
  const [gameComplete, setGameComplete] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const addIngredient = (id: number) => {
    setIngredients(prev => prev.map(ing => 
      ing.id === id ? { ...ing, added: true } : ing
    ));

    if (ingredients.filter(ing => !ing.added).length === 1) {
      setGameComplete(true);
      startCountdown();
    }
  };

  const startCountdown = () => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-yellow-50 via-orange-50 to-green-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Create Your Ugadi Pachadi (Select all to proceed)
          </h2>
          <p className="text-lg text-gray-600">
            Add all ingredients to welcome the New Year with all its flavors!
          </p>
        </div>

        {!gameComplete ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ingredients.map((ingredient) => (
              <div
                key={ingredient.id}
                className={`relative p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 ${
                  ingredient.added
                    ? 'opacity-50 cursor-default'
                    : 'hover:scale-105 cursor-pointer'
                }`}
                onClick={() => !ingredient.added && addIngredient(ingredient.id)}
              >
                <div className="text-4xl mb-4">{ingredient.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{ingredient.name}</h3>
                <p className="text-gray-600">{ingredient.taste}</p>
                {ingredient.added && (
                  <div className="absolute top-4 right-4">
                    <Check className="w-6 h-6 text-green-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <div className="mb-8">
              <Clock className="w-16 h-16 mx-auto text-orange-500 mb-4" />
              <div className="text-6xl font-bold text-orange-500 mb-4">
                {countdown}
              </div>
              <p className="text-xl text-gray-700">
                Preparing your special New Year moment...
              </p>
            </div>
            {countdown === 0 && (
              <div className="animate-fade-in">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-8 h-8 text-yellow-500 animate-bounce"
                      style={{ animationDelay: `${i * 200}ms` }}
                    />
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Happy New Year, My Love!
                </h3>
                <p className="text-xl text-gray-600">
                  Here's to a year filled with sweetness, excitement, and endless love ❤️
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CountdownGame;