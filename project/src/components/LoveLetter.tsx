import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface LoveLetterProps {
  name: string;
}

const LoveLetter: React.FC<LoveLetterProps> = ({ name }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-orange-50 via-pink-50 to-red-50">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Decorative Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-32 h-32 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <Heart className="w-12 h-12 text-red-500 animate-pulse" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                My Dearest {name}
              </h2>
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(3)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="w-6 h-6 text-yellow-500 animate-bounce"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
            </div>

            {!isRevealed ? (
              <div className="text-center">
                <button
                  onClick={() => setIsRevealed(true)}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Open My Heart
                </button>
              </div>
            ) : (
              <div className="space-y-6 animate-fade-in">
                <p className="text-lg text-gray-800 leading-relaxed">
                  As we celebrate this Ugadi and welcome the New Year together, my heart overflows with love and gratitude for having you in my life. Each moment with you is a blessing, a treasure I cherish deeply.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Like the six tastes of Ugadi Pachadi, our love is a beautiful blend of experiences - sweet memories, bitter challenges we've overcome, and the excitement of new adventures ahead. You make every flavor of life more meaningful.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  This new year, I promise to:
                </p>
                <ul className="space-y-4 pl-6">
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Love you more deeply with each passing day</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Create countless beautiful memories together</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Be your strength, your comfort, and your biggest cheerleader</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-800 leading-relaxed mt-6">
                  Here's to another year of love, laughter, and endless joy with you, my beloved.
                </p>
                <div className="text-right mt-8">
                  <p className="text-lg font-medium text-gray-900">Forever Yours,</p>
                  <p className="text-xl font-bold text-red-500">Your Hubby Shrujan ❤️</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;