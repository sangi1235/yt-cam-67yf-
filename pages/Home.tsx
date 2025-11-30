import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Clock } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useStore } from '../context/StoreContext';

export default function Home() {
  const { addToCart } = useStore();
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.1),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
              New Collection 2024
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Discover Luxury <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-500">
                Redefined
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Shop the latest trends in electronics, fashion, and home decor. curated for the modern lifestyle.
            </p>
            <div className="flex gap-4">
              <Link
                to="/shop"
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-primary-600/30 flex items-center gap-2"
              >
                Shop Now <ArrowRight size={20} />
              </Link>
              <Link
                to="/gallery"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              >
                View Gallery
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-purple-500/20 rounded-full filter blur-3xl transform translate-x-10 translate-y-10" />
            <img 
              src="https://picsum.photos/600/600?random=50" 
              alt="Hero" 
              className="relative z-10 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-transform duration-500"
            />
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -left-8 top-20 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl z-20 flex items-center gap-3"
            >
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600">
                <Shield size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Guarantee</p>
                <p className="font-bold text-gray-900 dark:text-white">Lifetime Warranty</p>
              </div>
            </motion.div>
            
            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ repeat: Infinity, duration: 5, delay: 1 }}
               className="absolute -right-8 bottom-20 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl z-20 flex items-center gap-3"
            >
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600">
                <Star size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Rating</p>
                <p className="font-bold text-gray-900 dark:text-white">4.9/5 Stars</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Products</h2>
          <p className="text-gray-600 dark:text-gray-400">Hand-picked selection just for you</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button
                   onClick={() => addToCart(product)}
                   className="absolute bottom-4 right-4 bg-white dark:bg-gray-900 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-primary-600 hover:text-primary-700"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-1">{product.title}</h3>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                    <Star size={12} fill="currentColor" /> {product.rating}
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary-600 dark:text-primary-400">${product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/shop" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all">
            View All Products <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Truck size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Free Shipping</h3>
              <p className="text-gray-500 dark:text-gray-400">On all orders over $50. Global delivery available.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Secure Payment</h3>
              <p className="text-gray-500 dark:text-gray-400">100% secure payment processing with top-tier encryption.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
              <p className="text-gray-500 dark:text-gray-400">Our dedicated team is here to help you anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}