import React, { useState } from 'react';
import { Sparkles, Heart, Sun, Moon, Stars } from 'lucide-react';

interface Prediction {
  category: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const predictions: Prediction[] = [
  {
    category: 'Love',
    icon: Heart,
    title: 'A Year of Deep Connection',
    description: 'Your bond will grow stronger with each passing day. Expect romantic surprises and meaningful moments that will make your heart flutter.'
  },
  {
    category: 'Joy',
    icon: Sun,
    title: 'Radiant Happiness',
    description: 'The stars align to bring you countless reasons to smile. Your shared laughter will light up even the darkest days.'
  },
  {
    category: 'Dreams',
    icon: Moon,
    title: 'Wishes Coming True',
    description: 'Your shared dreams will begin to materialize. Keep believing in each other and watch the magic unfold.'
  },
  {
    category: 'Adventure',
    icon: Stars,
    title: 'New Horizons',
    description: 'Exciting adventures await you both. Embrace the unknown together and create unforgettable memories.'
  }
];

const Horoscope: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);

  const revealNext = () => {
    setIsRevealing(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % predictions.length);
      setIsRevealing(false);
    }, 500);
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Sparkles className="w-12 h-12 text-purple-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Love in the Stars
          </h2>
          <p className="text-lg text-gray-600">
            Discover what the cosmos has in store for your love story
          </p>
        </div>

        <div className="relative">
          {/* Decorative Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
            <div className={`transition-opacity duration-500 ${isRevealing ? 'opacity-0' : 'opacity-100'}`}>
              {predictions.map((prediction, index) => (
                index === activeIndex && (
                  <div key={prediction.category} className="text-center">
                    <prediction.icon className="w-16 h-16 mx-auto text-purple-500 mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {prediction.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-8">
                      {prediction.description}
                    </p>
                  </div>
                )
              ))}
            </div>

            <div className="flex justify-center gap-2 mb-8">
              {predictions.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-purple-500 w-4'
                      : 'bg-purple-200'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={revealNext}
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <Stars className="w-5 h-5 mr-2" />
              Reveal Next Prediction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horoscope;