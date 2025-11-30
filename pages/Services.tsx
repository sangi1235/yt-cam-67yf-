import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Headphones, ShieldCheck, RefreshCw, Box, Globe, CreditCard, Award } from 'lucide-react';
import { SERVICES } from '../constants';

const icons: Record<string, React.ReactNode> = {
  Truck: <Truck size={32} />,
  Headphones: <Headphones size={32} />,
  ShieldCheck: <ShieldCheck size={32} />,
  RefreshCw: <RefreshCw size={32} />,
  Box: <Box size={32} />,
  Globe: <Globe size={32} />,
  CreditCard: <CreditCard size={32} />,
  Award: <Award size={32} />
};

export default function Services() {
  return (
    <div className="min-h-screen py-16 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Premium Services</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            We go beyond just selling products. We provide a complete luxury experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors group text-center"
            >
              <div className="w-16 h-16 mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center text-gray-400 group-hover:text-primary-600 group-hover:scale-110 transition-all duration-300 mb-6">
                {icons[service.icon] || <Box size={32} />}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
          
          {/* Extra generic services to fill the grid if needed, or leave as is based on constants */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors group text-center"
          >
             <div className="w-16 h-16 mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center text-gray-400 group-hover:text-primary-600 group-hover:scale-110 transition-all duration-300 mb-6">
                <Globe size={32} />
             </div>
             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Global Shipping</h3>
             <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
               We ship to over 100 countries worldwide with tracked delivery.
             </p>
          </motion.div>
          
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-colors group text-center"
          >
             <div className="w-16 h-16 mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center text-gray-400 group-hover:text-primary-600 group-hover:scale-110 transition-all duration-300 mb-6">
                <Award size={32} />
             </div>
             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Quality Guarantee</h3>
             <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
               Every item is authenticated and quality checked before shipping.
             </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}