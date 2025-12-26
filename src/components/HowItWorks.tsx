import React from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '1',
    title: 'Download & Open',
    description: 'Get PocketSay from the App Store and launch the app. No account needed!',
  },
  {
    number: '2',
    title: 'Type Your Message',
    description: 'Enter up to 68 characters of text. Keep it short and impactful.',
  },
  {
    number: '3',
    title: 'Customize & Style',
    description: 'Choose your font, background theme, animations, and day/night mode.',
  },
  {
    number: '4',
    title: 'Display & Share',
    description: 'Rotate to landscape mode and show your message. Perfect for long-distance communication!',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, fast, and intuitive. Get started in seconds.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Connector line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transform translate-x-4 z-0" />
              )}
              
              <div className="relative z-10 bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

