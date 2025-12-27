import React from 'react';
import portraitMountains from '../assets/screenshots/portrait mountains.PNG';
import babySleeping from '../assets/screenshots/baby sleeping.PNG';
import babySleepingNight from '../assets/screenshots/baby sleeping night.PNG';
import portraitNightMode from '../assets/screenshots/portrain night mode.PNG';
import canTalkDay from '../assets/screenshots/can talk day.PNG';
import heyWhatsUp from '../assets/screenshots/hey whats up.PNG';
import thankYou from '../assets/screenshots/thank you.PNG';
import timeToGoNight from '../assets/screenshots/time to go night.PNG';

const screenshots = [
  {
    image: portraitMountains,
    alt: 'PocketSay with Mountains background theme',
  },
  {
    image: babySleeping,
    alt: 'PocketSay day mode example',
  },
  {
    image: babySleepingNight,
    alt: 'PocketSay night mode example',
  },
  {
    image: portraitNightMode,
    alt: 'PocketSay portrait night mode',
  },
  {
    image: canTalkDay,
    alt: 'PocketSay day mode message',
  },
  {
    image: heyWhatsUp,
    alt: 'PocketSay casual message example',
  },
  {
    image: thankYou,
    alt: 'PocketSay thank you message',
  },
  {
    image: timeToGoNight,
    alt: 'PocketSay night mode message',
  },
];

const Screenshots: React.FC = () => {
  return (
    <section id="screenshots" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            See PocketSay in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real examples of how PocketSay helps you communicate visually.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={screenshot.image}
                alt={screenshot.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;

