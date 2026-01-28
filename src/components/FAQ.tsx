import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Is my data collected?',
    answer: 'No, absolutely not! PocketSay is completely offline and private. We collect zero data, track nothing, and your messages never leave your device.',
  },
  {
    question: 'Do I need an account?',
    answer: 'No login required! PocketSay works immediately after download. No accounts, no sign-ups, no hassle.',
  },
  {
    question: 'Does this work on iPad?',
    answer: 'Yes! PocketSay works on all iOS devices including iPhone and iPad. The landscape display mode is optimized for maximum visibility.',
  },
  {
    question: "What's the character limit?",
    answer: 'You can display up to 68 characters per message. This keeps your messages clear, readable, and impactful at a distance.',
  },
  {
    question: 'Are there subscriptions or ads?',
    answer: 'Absolutely not! PocketSay is a single one-time purchase of $0.99. Pay once and it\'s yours. No subscriptions, no recurring fees, no hidden costs, and never any ads. What you pay is what you get.',
  },
  {
    question: 'Can I customize the display?',
    answer: 'Absolutely! Choose from 10 font styles (Default, Modern, Sleek, Cartoon, Elegant, Futuristic, Handwritten, Retro, Minimalist, Bold), 7 animated backgrounds (Mountains, Tropical, Galaxy, Rainbow, Sunset, 80s Pop, Blossom), 12 animated themes (Wave, Happy, Love, Funny, Good, Thanks, Sorry, Sad, Angry, Think, Ask, Alert), custom photo backgrounds (use your own photos), custom background colors (8 colors for day/night modes), text color customization (8 colors for day/night modes), and toggle between day/night modes. Plus, you can add drawing overlays and save messages with Quick Say!',
  },
  {
    question: 'Text not displaying?',
    answer: 'Ensure your message is under 68 characters and that you\'ve tapped "Enter" or the submit button.',
  },
  {
    question: 'Background not showing?',
    answer: 'Make sure you\'ve selected a background from Settings. Try toggling day/night mode to refresh the display.',
  },
  {
    question: 'Landscape not working?',
    answer: 'The results page automatically switches to landscape. If it doesn\'t, try rotating your device manually.',
  },
  {
    question: 'Colors not changing?',
    answer: 'Make sure you\'ve selected colors in Settings. Remember that day and night modes have separate color settings, so you need to configure each mode individually.',
  },
  {
    question: 'Is my data private?',
    answer: 'Yes! PocketSay does not collect, store, or transmit any personal data. All messages are displayed locally on your device and are not saved or shared. Complete privacy guaranteed.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

