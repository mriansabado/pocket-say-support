import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you'd send this to a backend
    // For now, we'll use mailto link
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:maunadigitalcontact@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20" style={{background: 'linear-gradient(to bottom right, #ef4444, #f97316, #fbbf24, #3b82f6)'}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-white/90">
            Need help? Have feedback? We'd love to hear from you!
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-semibold text-white mb-2">Thank you!</h3>
              <p className="text-white/90 mb-6">
                Your email client should open shortly. If not, you can reach us directly at:
              </p>
              <a
                href="mailto:maunadigitalcontact@gmail.com"
                className="inline-block bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors"
              >
                maunadigitalcontact@gmail.com
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/90 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/90 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/90 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-colors resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors shadow-lg"
              >
                Send Message
              </button>
            </form>
          )}
          
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-white/80 mb-2">Or contact us directly:</p>
            <a
              href="mailto:maunadigitalcontact@gmail.com"
              className="text-white font-semibold hover:text-white/80 transition-colors text-lg"
            >
              maunadigitalcontact@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

