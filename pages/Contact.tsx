import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-16 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">
              Have questions about our products or your order? We're here to help. Fill out the form or reach us via email or phone.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">Email Us</h3>
                  <p className="text-gray-500 dark:text-gray-400">hello@luxemarket.com</p>
                  <p className="text-gray-500 dark:text-gray-400">support@luxemarket.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">Call Us</h3>
                  <p className="text-gray-500 dark:text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-gray-500 dark:text-gray-400">Mon - Fri: 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">Visit Us</h3>
                  <p className="text-gray-500 dark:text-gray-400">123 Fashion Street</p>
                  <p className="text-gray-500 dark:text-gray-400">Design District, NY 10012</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'submitting' || status === 'success'}
                  className={`flex-1 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                    status === 'success'
                      ? 'bg-green-500 text-white cursor-default'
                      : 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-primary-600/30'
                  }`}
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : status === 'success' ? (
                    <>Sent Successfully <CheckCircle size={20} /></>
                  ) : (
                    <>Send Message <Send size={20} /></>
                  )}
                </button>
              </div>
              
              {status === 'error' && (
                <p className="text-red-500 text-sm flex items-center gap-2 mt-2">
                  <AlertCircle size={16} /> Please fill in all fields correctly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}