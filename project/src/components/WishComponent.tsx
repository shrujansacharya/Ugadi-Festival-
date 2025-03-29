import React, { useState } from 'react';
import { Star, Send, Sparkles } from 'lucide-react';

const WishComponent: React.FC = () => {
  const [wish, setWish] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (wish.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Make a Wish</h2>
          <p className="text-lg text-gray-600">
            Share your dreams for our beautiful year ahead
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 rounded-2xl blur-2xl opacity-30"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
              <textarea
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                placeholder="My wish for our year ahead is..."
                className="w-full h-40 p-4 rounded-xl border-2 border-orange-200 focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 resize-none transition-all duration-300"
              />
              <button
                type="submit"
                className="mt-4 w-full py-3 px-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send My Wish
              </button>
            </div>
          </form>
        ) : (
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 rounded-2xl blur-2xl opacity-30"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(3)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="w-8 h-8 text-yellow-500 animate-bounce"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Your wish has been sent to the stars! ✨
              </h3>
              <p className="text-lg text-gray-600">
                May all your dreams come true in this beautiful new year.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishComponent;