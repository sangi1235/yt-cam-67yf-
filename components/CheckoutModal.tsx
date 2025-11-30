import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, CheckCircle, Loader } from 'lucide-react';
import { useStore } from '../context/StoreContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { cartTotal, clearCart } = useStore();
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    card: '',
    expiry: '',
    cvv: ''
  });

  useEffect(() => {
    if (isOpen) setStep('form');
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    
    // Simulate payment delay
    setTimeout(() => {
      setStep('success');
      clearCart();
    }, 2000);
  };

  const handleClose = () => {
    if (step === 'success') {
      onClose();
    } else {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {step === 'success' ? 'Order Confirmed!' : 'Secure Checkout'}
            </h3>
            <button onClick={handleClose} className="text-gray-400 hover:text-gray-500">
              <X size={24} />
            </button>
          </div>

          <AnimatePresence mode='wait'>
            {step === 'form' && (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Amount</span>
                  <span className="text-xl font-bold text-primary-600 dark:text-primary-400">${cartTotal.toFixed(2)}</span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cardholder Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Card Number</label>
                  <div className="relative">
                    <input
                      required
                      type="text"
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
                      placeholder="0000 0000 0000 0000"
                      maxLength={19}
                      value={formData.card}
                      onChange={e => setFormData({...formData, card: e.target.value})}
                    />
                    <CreditCard className="absolute left-3 top-2.5 text-gray-400" size={18} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Expiry</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
                      placeholder="MM/YY"
                      maxLength={5}
                      value={formData.expiry}
                      onChange={e => setFormData({...formData, expiry: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">CVV</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
                      placeholder="123"
                      maxLength={3}
                      value={formData.cvv}
                      onChange={e => setFormData({...formData, cvv: e.target.value})}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors mt-6"
                >
                  Pay Now
                </button>
              </motion.form>
            )}

            {step === 'processing' && (
              <motion.div
                key="processing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-12"
              >
                <Loader className="w-16 h-16 text-primary-600 animate-spin mb-4" />
                <p className="text-gray-600 dark:text-gray-400 font-medium">Processing payment...</p>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Payment Successful!</h4>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                  Thank you for your purchase. A confirmation email has been sent to you.
                </p>
                <button
                  onClick={onClose}
                  className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold rounded-lg transition-colors"
                >
                  Close
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}