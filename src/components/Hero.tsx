import React from 'react';
import appIcon from '../assets/icon.png';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{background: 'linear-gradient(to bottom right, #ef4444, #f97316, #fbbf24, #3b82f6)'}}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        {/* App Icon */}
        <div className="mb-6 animate-slide-up flex justify-center">
          <img 
            src={appIcon} 
            alt="PocketSay App Icon" 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-3xl shadow-2xl"
          />
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-slide-up">
          PocketSay
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90 mb-4 animate-slide-up">
          Say it BIG when you can't say it loud
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto animate-slide-up">
          Display large, customizable text for visual communication across distances. 
          Perfect for when you need to be seen, not heard.
        </p>
        
        {/* App Store Badge Placeholder */}
        <div className="animate-slide-up">
          <a 
            href="https://apps.apple.com/app/pocketsay" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105"
            aria-label="Download PocketSay on the App Store"
          >
            <div className="bg-black/20 backdrop-blur-sm rounded-xl px-8 py-4 border-2 border-white/30 hover:border-white/50 transition-colors">
              <div className="flex items-center gap-3">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.18 8.85 6.38 8.56c.86-.05 1.41.33 2.08.6.77.3 1.58.62 2.54.62.9 0 1.66-.3 2.4-.62.84-.36 1.68-.75 2.83-.65 2.35.1 4.04 1.4 5.1 3.35-4.5 2.6-3.85 7.7-1.18 9.82zM13.03 3.5c.73.83 1.93 1.4 3.03 1.32.14-1.1-.33-2.27-1.05-3.08-.75-.85-1.98-1.47-3.05-1.35-.13 1.08.34 2.2 1.07 3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-white/70 uppercase tracking-wide">Download on the</div>
                  <div className="text-xl font-semibold text-white">App Store</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

