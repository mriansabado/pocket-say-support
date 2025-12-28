import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About PocketSay
          </h2>
        </div>
        
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            PocketSay lets you display large, bold text from your phone to communicate from a distance. 
            Use it to get attention across a room, at events, or anywhere you need to send a clear message.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Getting Started
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Open PocketSay</h4>
                <p className="text-gray-700">Launch the app from your home screen.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Type Your Message</h4>
                <p className="text-gray-700">Enter your message (up to 68 characters).</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Tap "Enter" or Submit</h4>
                <p className="text-gray-700">Press Enter or tap the submit button to display your message.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">View Your Message</h4>
                <p className="text-gray-700">Your text displays in large, bold letters on a full-screen results page.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

