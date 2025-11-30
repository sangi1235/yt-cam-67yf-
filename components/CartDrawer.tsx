import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import CheckoutModal from './CheckoutModal';

export default function CartDrawer() {
  const { cart, isCartOpen, setCartOpen, removeFromCart, updateQuantity, cartTotal } = useStore();
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-y-0 right-0 max-w-md w-full flex"
            >
              <div className="h-full w-full bg-white dark:bg-gray-900 shadow-xl flex flex-col">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Shopping Cart</h2>
                  <button onClick={() => setCartOpen(false)} className="text-gray-400 hover:text-gray-500">
                    <X size={24} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 text-gray-400">
                        <Trash2 size={32} />
                      </div>
                      <p className="text-gray-500 dark:text-gray-400">Your cart is empty.</p>
                      <button 
                        onClick={() => setCartOpen(false)}
                        className="mt-4 text-primary-600 font-medium hover:underline"
                      >
                        Continue Shopping
                      </button>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                              <h3 className="line-clamp-1">{item.title}</h3>
                              <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 rounded-lg p-1">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:bg-white dark:hover:bg-gray-700 rounded-md shadow-sm transition-all"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="font-medium min-w-[1.5rem] text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:bg-white dark:hover:bg-gray-700 rounded-md shadow-sm transition-all"
                              >
                                <Plus size={14} />
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              className="font-medium text-red-600 hover:text-red-500 flex items-center gap-1"
                            >
                              <Trash2 size={16} /> Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="border-t border-gray-200 dark:border-gray-800 px-6 py-6">
                    <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white mb-4">
                      <p>Subtotal</p>
                      <p>${cartTotal.toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400 mb-6">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <button
                      onClick={handleCheckout}
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700 transition-colors"
                    >
                      Checkout
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setCheckoutOpen(false)} />
    </>
  );
}