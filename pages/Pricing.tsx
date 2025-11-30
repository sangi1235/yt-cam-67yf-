import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PRICING_PLANS } from '../constants';

export default function Pricing() {
  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the membership plan that fits your shopping habits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col ${
                plan.recommended ? 'ring-2 ring-primary-500 transform md:-translate-y-4' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 left-0 bg-primary-500 text-white text-xs font-bold uppercase tracking-widest text-center py-2">
                  Recommended
                </div>
              )}
              
              <div className="p-8 text-center border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  {!plan.price.includes('$0') && <span className="text-gray-500 dark:text-gray-400">/mo</span>}
                </div>
              </div>

              <div className="p-8 flex-1">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0">
                <button
                  className={`w-full py-3 px-4 rounded-xl font-bold transition-all ${
                    plan.recommended
                      ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-500/30'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}