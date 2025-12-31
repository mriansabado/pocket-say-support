import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: December 29, 2024
          </p>
          <p className="text-lg text-gray-600">
            Developer: Mauna Digital LLC
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              PocketSay ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how PocketSay handles information when you use our mobile application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Data Collection</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              PocketSay does not collect, store, transmit, or share any personal information or user data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Don't Collect</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Personal information (name, email, phone number, etc.)</li>
              <li>Device information or identifiers</li>
              <li>Location data</li>
              <li>Usage analytics or tracking data</li>
              <li>User-generated content (messages you type)</li>
              <li>Any other data from your device</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Don't Do</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>We do not use analytics or tracking services</li>
              <li>We do not display advertisements</li>
              <li>We do not require user accounts or registration</li>
              <li>We do not transmit data to external servers</li>
              <li>We do not share data with third parties</li>
              <li>We do not use cookies or similar technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Local Data Storage</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              PocketSay stores data only on your device using local storage:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Saved Messages:</strong> If you choose to save messages for quick access, they are stored locally on your device using iOS's local storage system</li>
              <li><strong>App Settings:</strong> Your preferences (theme selections, font choices, etc.) are stored locally on your device</li>
              <li><strong>No Cloud Sync:</strong> This data never leaves your device and is not synced to any cloud service</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can delete this local data at any time by:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Deleting individual saved messages within the app</li>
              <li>Uninstalling the app (which removes all local data)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Network Activity</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              PocketSay works entirely offline. The only network activity is:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>App Updates:</strong> The app may check for updates through Apple's App Store update mechanism (standard iOS behavior)</li>
              <li><strong>No Custom Network Requests:</strong> PocketSay does not make any custom network requests or connect to external servers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Permissions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              PocketSay does not request or require any sensitive permissions:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>No camera access</li>
              <li>No microphone access</li>
              <li>No location services</li>
              <li>No contacts access</li>
              <li>No photo library access</li>
              <li>No calendar access</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The app only uses standard iOS permissions required for basic app functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              PocketSay is suitable for users of all ages, including children. We do not collect any information from anyone, including children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              PocketSay does not integrate with any third-party services that collect data. The app uses only standard iOS frameworks and does not include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Analytics services</li>
              <li>Advertising networks</li>
              <li>Social media integrations</li>
              <li>Cloud storage services</li>
              <li>Payment processors (if the app is paid, transactions are handled entirely by Apple)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Since we don't collect or transmit any data, there is no risk of data breaches or unauthorized access to your information. All data stored locally on your device is protected by your device's built-in security features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Since we don't collect contact information, we cannot notify you directly of changes, but we encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Since PocketSay does not collect any data, there is no data to access, modify, or delete. You have complete control over:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>The messages you create (stored locally on your device)</li>
              <li>Your app settings (stored locally on your device)</li>
              <li>Whether to use the app at all</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <p className="text-gray-700 font-semibold mb-2">Mauna Digital LLC</p>
              <p className="text-gray-700 mb-2">
                Email: <a href="mailto:maunadigitalcontact@gmail.com" className="text-purple-600 hover:text-purple-700 underline">maunadigitalcontact@gmail.com</a>
              </p>
              <p className="text-gray-700">
                Support: <a href="https://pocket-say-support.vercel.app/" className="text-purple-600 hover:text-purple-700 underline" target="_blank" rel="noopener noreferrer">https://pocket-say-support.vercel.app/</a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Consent</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using PocketSay, you acknowledge that you have read and understood this Privacy Policy. Since we don't collect any data, your use of the app does not involve sharing any information with us.
            </p>
          </section>

          {/* Summary Box */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mt-12">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p className="text-lg leading-relaxed">
              PocketSay is a privacy-first application. We don't collect data, show ads, or track users. Everything stays on your device. Your privacy is protected by design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

