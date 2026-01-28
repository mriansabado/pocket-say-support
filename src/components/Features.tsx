import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '🎨',
    title: '7 Animated Backgrounds',
    description: 'Mountains, Tropical, Galaxy, Rainbow, Sunset, 80s Pop, and Blossom themes. All support day and night modes.',
  },
  {
    icon: '📷',
    title: 'Custom Photo Backgrounds',
    description: 'Use your own photos as backgrounds. Select from your photo library to personalize your messages.',
  },
  {
    icon: '🎨',
    title: 'Custom Background Colors',
    description: 'Choose from 8 colors (White, Red, Green, Blue, Yellow, Cyan, Magenta, Black) for both day and night modes.',
  },
  {
    icon: '🔤',
    title: 'Text Color Customization',
    description: 'Pick from 8 primary colors to match your background. Separate settings for day and night modes.',
  },
  {
    icon: '✍️',
    title: '10 Font Styles',
    description: 'Default, Modern, Sleek, Cartoon, Elegant, Futuristic, Handwritten, Retro, Minimalist, and Bold.',
  },
  {
    icon: '✨',
    title: '12 Animated Themes',
    description: 'Wave, Happy, Love, Funny, Good, Thanks, Sorry, Sad, Angry, Think, Ask, and Alert animations to add personality to your messages.',
  },
  {
    icon: '🌓',
    title: 'Day/Night Modes',
    description: 'Toggle between modes with separate background and text color settings for optimal visibility.',
  },
  {
    icon: '⚡',
    title: 'Quick Say Feature',
    description: 'Save frequently used messages for quick access. Add new sayings or select saved ones instantly.',
  },
  {
    icon: '✏️',
    title: 'Drawing Mode',
    description: 'Draw on the screen with your finger to add emphasis or annotations. Clear with the trash icon.',
  },
  {
    icon: '📱',
    title: 'Landscape Display',
    description: 'Automatically switches to landscape for maximum visibility. Mountains background zooms to show animated clouds.',
  },
  {
    icon: '🔒',
    title: 'Completely Private',
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
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Pay Once, Own It</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-4xl mb-2">💳</div>
                <div className="text-xl font-bold mb-1">$0.99 One-Time</div>
                <div className="text-sm opacity-90">No subscriptions • No recurring fees</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-4xl mb-2">🔒</div>
                <div className="text-xl font-bold mb-1">Zero Data Collection</div>
                <div className="text-sm opacity-90">Completely offline • Your privacy protected</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-4xl mb-2">🚫</div>
                <div className="text-xl font-bold mb-1">No Ads Ever</div>
                <div className="text-sm opacity-90">Clean experience • Always ad-free</div>
              </div>
            </div>
            <p className="text-lg md:text-xl opacity-95 font-semibold">
              Completely private, completely yours. Your data stays on your device, always.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

