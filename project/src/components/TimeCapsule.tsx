import React, { useState } from 'react';
import { Gift, Lock, Calendar, Image as ImageIcon, PenTool } from 'lucide-react';

interface Memory {
  type: 'text' | 'image';
  content: string;
}

const TimeCapsule: React.FC = () => {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [currentMemory, setCurrentMemory] = useState('');
  const [isSealed, setIsSealed] = useState(false);

  const addMemory = (type: 'text' | 'image') => {
    if (currentMemory.trim()) {
      setMemories([...memories, { type, content: currentMemory }]);
      setCurrentMemory('');
    }
  };

  const sealCapsule = () => {
    if (memories.length > 0) {
      setIsSealed(true);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Gift className="w-12 h-12 text-purple-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Time Capsule</h2>
          <p className="text-lg text-gray-600">
            Create a magical collection of memories to revisit next Ugadi
          </p>
        </div>

        {!isSealed ? (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-blue-200 to-green-200 rounded-2xl blur-2xl opacity-30"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
              <div className="mb-6">
                <textarea
                  value={currentMemory}
                  onChange={(e) => setCurrentMemory(e.target.value)}
                  placeholder="Write a message, goal, or memory..."
                  className="w-full h-32 p-4 rounded-xl border-2 border-purple-200 focus:border-purple-400 focus:ring focus:ring-purple-200 focus:ring-opacity-50 resize-none transition-all duration-300"
                />
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => addMemory('text')}
                    className="flex-1 py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  >
                    <PenTool className="w-5 h-5 mr-2" />
                    Add Message
                  </button>
                  <button
                    onClick={() => addMemory('image')}
                    className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  >
                    <ImageIcon className="w-5 h-5 mr-2" />
                    Add Image
                  </button>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {memories.map((memory, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50"
                  >
                    {memory.type === 'text' ? (
                      <PenTool className="w-5 h-5 text-purple-500 mb-2" />
                    ) : (
                      <ImageIcon className="w-5 h-5 text-blue-500 mb-2" />
                    )}
                    <p className="text-gray-800">{memory.content}</p>
                  </div>
                ))}
              </div>

              {memories.length > 0 && (
                <button
                  onClick={sealCapsule}
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <Lock className="w-5 h-5 mr-2" />
                  Seal Time Capsule
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-blue-200 to-green-200 rounded-2xl blur-2xl opacity-30"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center">
              <Lock className="w-16 h-16 text-purple-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Time Capsule Sealed! 🎁
              </h3>
              <div className="flex items-center justify-center gap-2 text-lg text-gray-600 mb-6">
                <Calendar className="w-5 h-5" />
                <span>Opens next Ugadi</span>
              </div>
              <p className="text-gray-600">
                Your precious memories are safely stored. We'll revisit them together
                when we celebrate next year! ✨
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeCapsule;