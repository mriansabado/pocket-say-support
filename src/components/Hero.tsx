import React from 'react';
import appIcon from '../assets/icon.png';
import itsPocketSay from '../assets/screenshots/its-pocketsay.PNG';

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
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-3xl shadow-2xl"
          />
        </div>
        {/* Screenshot */}
        <div className="mb-8 animate-slide-up flex justify-center">
          <img 
            src={itsPocketSay} 
            alt="PocketSay app screenshot" 
            className="w-80 sm:w-96 md:w-[28rem] lg:w-[32rem] rounded-2xl shadow-2xl border-4 border-white/20"
          />
        </div>
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90 mb-4 animate-slide-up">
          Say it BIG when you can't say it loud
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 max-w-2xl mx-auto animate-slide-up">
          Display large, customizable text for visual communication across distances. 
          Perfect for when you need to be seen, not heard.
        </p>
        
        {/* Key Benefits Banner */}
        <div className="mb-8 animate-slide-up">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 sm:p-6 border-2 border-white/30 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-2">💳</div>
                <div className="text-sm sm:text-base font-semibold text-white">Pay Once</div>
                <div className="text-xs sm:text-sm text-white/90">$0.99 One-Time</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-2">🔒</div>
                <div className="text-sm sm:text-base font-semibold text-white">No Data Collection</div>
                <div className="text-xs sm:text-sm text-white/90">Completely Private</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-2">🚫</div>
                <div className="text-sm sm:text-base font-semibold text-white">No Ads Ever</div>
                <div className="text-xs sm:text-sm text-white/90">No Subscriptions</div>
              </div>
            </div>
          </div>
        </div>
        
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
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
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

