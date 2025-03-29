import React from 'react';
import { Heart, Calendar } from 'lucide-react';

const memories = [
  {
    id: 1,
    title: "Our Ugadi Together",
    date: "2024",
    image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80",
    description: "The day we started our beautiful tradition together"
  },
  {
    id: 2,
    title: "Last New Year's Eve",
    date: "2024",
    image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&q=80",
    description: "Dancing under the stars as the clock struck midnight"
  },
  {
    id: 3,
    title: "Spring Festival",
    date: "2023",
    image: "https://images.unsplash.com/photo-1496861083958-175bb1bd5702?auto=format&fit=crop&q=80",
    description: "Celebrating new beginnings with rangoli and flowers"
  },
  {
    id: 4,
    title: "Beach Getaway",
    date: "2022",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80",
    description: "Our peaceful escape by the ocean"
  },
  {
    id: 5,
    title: "Valentine's Day",
    date: "2025",
    image: "https://images.unsplash.com/photo-1514672013381-c6d0df7f78f7?auto=format&fit=crop&q=80",
    description: "A day full of love and surprises"
  },
  {
    id: 6,
    title: "Anniversary Dinner",
    date: "2025",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80",
    description: "A romantic evening under the city lights"
  },
  {
    id: 7,
    title: "Road Trip Adventure",
    date: "202#",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
    description: "Exploring new places and making memories on the road"
  },
  {
    id: 8,
    title: "First Date",
    date: "2022",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&q=80",
    description: "The magical evening when it all began"
  }
];

const MemoryLane: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Beautiful Journey</h2>
          <p className="text-lg text-gray-600">Every moment with you is a treasure worth celebrating</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {memories.map((memory) => (
            <div
              key={memory.id}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 z-10"></div>
              <img
                src={memory.image}
                alt={memory.title}
                className="w-full h-64 object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <div className="flex items-center mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{memory.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{memory.title}</h3>
                <p className="text-sm opacity-90">{memory.description}</p>
              </div>
              <div className="absolute top-4 right-4 z-20">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoryLane;