import React, { useState } from 'react';
import { Heart, Stars, Sparkles, Clock, Music, Gift, Feather, MessageCircleHeart, ArrowLeft } from 'lucide-react';
import WelcomePage from './components/WelcomePage';
import MemoryLane from './components/MemoryLane';
import CountdownGame from './components/CountdownGame';
import LoveLetter from './components/LoveLetter';
import WishComponent from './components/WishComponent';
import TimeCapsule from './components/TimeCapsule';
import StarryWishSky from './components/StarryWishSky';
import Horoscope from './components/Horoscope';
import DanceOfLights from './components/DanceOfLights';
import VoiceMessage from './components/VoiceMessage';

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [name] = useState('Nehu Kutti');

  const pages = [
    { id: 'memories', title: 'Our Memories', icon: Sparkles },
    { id: 'countdown', title: 'Celebration Game', icon: Clock },
    { id: 'letter', title: 'Love Letter', icon: Feather },
    { id: 'wish', title: 'Make a Wish', icon: Stars },
    { id: 'timeCapsule', title: 'Time Capsule', icon: Gift },
    { id: 'starrysky', title: 'Starry Sky', icon: Stars },
    { id: 'horoscope', title: 'Our Future', icon: MessageCircleHeart },
    { id: 'lights', title: 'Light Show', icon: Sparkles },
    { id: 'voice', title: 'Special Message', icon: Music },
  ];

  const handleStart = () => {
    setCurrentPage('selectCelebration');
  };

  const handleBack = () => {
    setCurrentPage('selectCelebration');
  };

  const renderPage = () => {
    if (currentPage === 'welcome') {
      return <WelcomePage name={name} onStart={handleStart} />;
    }
    if (currentPage === 'selectCelebration') {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-400 via-orange-300 to-green-400 p-8 text-center relative">
          <button 
            onClick={() => setCurrentPage('welcome')} 
            className="absolute top-6 left-6 flex items-center text-yellow-900 hover:text-yellow-950 font-bold text-lg"
          >
            <ArrowLeft className="w-7 h-7 mr-2" /> Back
          </button>
          <h2 className="text-5xl font-extrabold text-green-900 mb-8 shadow-md bg-white px-6 py-3 rounded-full">
            🌸 Ugadi & New Year Celebration! 🎉
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-3xl">
            {pages.map(({ id, title, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setCurrentPage(id)}
                className="flex flex-col items-center bg-white shadow-2xl p-6 rounded-2xl hover:scale-110 transform transition-all border-4 border-yellow-500 hover:bg-yellow-200"
              >
                <Icon className="w-12 h-12 mb-4 text-green-800" />
                <span className="text-xl font-semibold text-orange-900">{title}</span>
              </button>
            ))}
          </div>
        </div>
      );
    }
    
    const PageComponent = {
      memories: MemoryLane,
      countdown: CountdownGame,
      letter: () => <LoveLetter name={name} />,
      wish: WishComponent,
      timeCapsule: TimeCapsule,
      starrysky: () => <StarryWishSky onBack={handleBack} />,
      horoscope: Horoscope,
      lights: () => <DanceOfLights onBack={handleBack} />,
      voice: VoiceMessage,
    }[currentPage];

    if (!PageComponent) return null;

    return (
      <div className="relative min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-green-100">
        <button 
          onClick={handleBack} 
          className="absolute top-6 left-6 flex items-center text-yellow-900 hover:text-yellow-950 font-bold text-lg"
        >
          <ArrowLeft className="w-7 h-7 mr-2" /> Back
        </button>
        <PageComponent />
      </div>
    );
  };

  return <div className="min-h-screen">{renderPage()}</div>;
}

export default App;