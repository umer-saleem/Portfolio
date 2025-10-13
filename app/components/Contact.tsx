// src/app/components/Contact.tsx
'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/umersaleem1/', icon: '/logos/linkedin.PNG' },
  { name: 'GitHub', url: 'https://github.com/umer-saleem', icon: '/logos/github.PNG' },
  { name: 'Email', url: 'mailto:umersaleem64200@hotmail.com', icon: '/logos/email.PNG' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_5zdtz1y',    // Replace with your EmailJS service ID
      'template_j510sz2',   // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'SisP2-mnZHVBgqkwd' // Replace with your EmailJS public key
    )
    .then(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    })
    .catch((err) => {
      console.error('Failed to send email:', err);
      alert('Oops! Something went wrong. Please try again.');
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Let's connect</h3>
              <p className="text-gray-600 mb-6">
                I'm always interested in new opportunities, collaborations, or just chatting about data science!
                Feel free to reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-700">Find me online:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <img src={social.icon} alt={social.name} className="w-8 h-8 mb-2" />
                    <span className="font-medium text-gray-700">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <h4 className="font-semibold text-blue-800 mb-3">Quick Response</h4>
              <p className="text-blue-700 text-sm">
                I usually respond to emails within 24 hours. For urgent inquiries or collaborations, please feel free to reach out on my Email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
