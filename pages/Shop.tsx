import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, Star, ShoppingCart, Eye, X } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useStore } from '../context/StoreContext';
import { Product } from '../types';

export default function Shop() {
  const { addToCart } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Shop All Products</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Find exactly what you need</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2.5 w-full sm:w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={product.id}
                  className="group bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <button
                        onClick={() => addToCart(product)}
                        className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary-600 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                        title="Add to Cart"
                      >
                        <ShoppingCart size={20} />
                      </button>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary-600 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                        title="Quick View"
                      >
                        <Eye size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-xs text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider mb-1">
                      {product.category}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2 line-clamp-1">{product.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1">{product.description}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                      <span className="text-xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star size={14} fill="currentColor" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">No products found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden grid md:grid-cols-2"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 z-10 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="h-64 md:h-full bg-gray-100 dark:bg-gray-800">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                  {selectedProduct.category}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{selectedProduct.title}</h2>
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < Math.floor(selectedProduct.rating) ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">({selectedProduct.rating} / 5.0)</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {selectedProduct.description}
                  <br /><br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">${selectedProduct.price}</span>
                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary-600/30 flex items-center gap-2"
                  >
                    <ShoppingCart size={20} /> Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}