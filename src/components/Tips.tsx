import React from 'react';

const tips = [
  {
    icon: '📏',
    title: 'Keep Messages Short',
    description: 'Stay within the 68 character limit for maximum readability at a distance.',
  },
  {
    icon: '🎨',
    title: 'Use Contrasting Colors',
    description: 'Choose text and background colors that contrast well for better visibility.',
  },
  {
    icon: '🔤',
    title: 'Match Font to Tone',
    description: 'Try different font styles to match your message tone and personality.',
  },
  {
    icon: '🌙',
    title: 'Use Night Mode in Low Light',
    description: 'Switch to night mode in low-light environments for better viewing.',
  },
  {
    icon: '⚡',
    title: 'Save Frequent Messages',
    description: 'Use Quick Say to save your most-used messages for faster access.',
  },
  {
    icon: '✨',
    title: 'Add Personality',
    description: 'Experiment with animated themes to add personality and emphasis to your messages.',
  },
];

const Tips: React.FC = () => {
  return (
    <section id="tips" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Tips & Best Practices
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get the most out of PocketSay with these helpful tips.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">
                {tip.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-600">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;

