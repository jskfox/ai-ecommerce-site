'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId } });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity: newQuantity } });
    }
  };

  const removeFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId } });
  };

  const total = state.items.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  if (state.items.length === 0) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-4">Tu carrito está vacío</h2>
        <p className="text-gray-600 mb-6">¡Agrega algunos productos para comenzar!</p>
        <Link href="/producto" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Ver Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {state.items.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
        >
          <div className="flex items-center space-x-4">
            {product.image && (
              <Image
                src={product.image}
                alt={product.name}
                width={80}
                height={80}
                className="rounded-md"
              />
            )}
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(product.id, product.quantity - 1)}
                className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
              >
                -
              </button>
              <span className="w-8 text-center">{product.quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, product.quantity + 1)}
                className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(product.id)}
              className="text-red-500 hover:text-red-700"
            >
              Eliminar
            </button>
          </div>
        </motion.div>
      ))}
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-2xl font-bold">${total.toFixed(2)}</span>
        </div>
        <Link
          href="/checkout"
          className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Proceder al Pago
        </Link>
      </div>
    </div>
  );
};

export default Cart;
