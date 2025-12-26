import React from 'react';
import maunaLogo from '../assets/mauna-digital-splash screen.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img 
                src={maunaLogo} 
                alt="Mauna Digital" 
                className="h-12 w-auto mb-3"
              />
            </div>
            <h3 className="text-white text-xl font-bold mb-4">PocketSay</h3>
            <p className="text-gray-400">
              Say it BIG when you can't say it loud. Display large, customizable text for visual communication.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Privacy First</h3>
            <p className="text-gray-400">
              PocketSay collects zero data. No tracking, no analytics, no login required. Your privacy is our priority.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src={maunaLogo} 
              alt="Mauna Digital" 
              className="h-8 w-auto opacity-80"
            />
          </div>
          <p className="text-gray-400 mb-2">
            © {currentYear} Mauna Digital. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            PocketSay collects zero data • Completely offline • No subscriptions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

