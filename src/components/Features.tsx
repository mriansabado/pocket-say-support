import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '🔤',
    title: '10 Font Styles',
    description: 'Choose from a variety of fonts to match your style and improve readability.',
  },
  {
    icon: '🎨',
    title: '4 Animated Backgrounds',
    description: 'Mountains, Tropical, Galaxy, and Ocean themes to make your messages stand out.',
  },
  {
    icon: '🌓',
    title: 'Day/Night Modes',
    description: 'Switch between light and dark modes for optimal visibility in any environment.',
  },
  {
    icon: '✨',
    title: '7 Theme Animations',
    description: 'Wave, Alert, Party, Happy, Sad, Thinking, and Love animations to express yourself.',
  },
  {
    icon: '✏️',
    title: 'Drawing Overlay',
    description: 'Add drawings and sketches directly on your messages for extra creativity.',
  },
  {
    icon: '🔒',
    title: '100% Private',
    description: 'No data collection, no login required, completely offline. Your privacy is guaranteed.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to communicate clearly, beautifully, and privately.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-purple-200 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Highlight Box */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Pay Once, Own Forever</h3>
            <p className="text-xl mb-2">
              Single purchase of $0.99 • No monthly fees • No subscriptions
            </p>
            <p className="text-lg opacity-90">
              Completely private and offline. Your data stays on your device, always.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

