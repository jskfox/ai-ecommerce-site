'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { CheckoutForm } from '@/components/CheckoutForm';
import { OrderSummary } from '@/components/OrderSummary';
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";
import { motion } from 'framer-motion';

const Checkout = () => {
  const { state, dispatch } = useCart();
  const router = useRouter();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  if (!state.items || state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Carrito Vacío</h1>
          <p className="text-gray-600 mb-4">No hay productos en tu carrito</p>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    );
  }

  const handleCheckout = async (formData: any) => {
    console.log('Procesando checkout con datos:', formData);
    setIsProcessing(true);

    try {
      // Simular proceso de pago
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simular respuesta exitosa
      console.log('Pago exitoso');
      toast({
        title: "¡Pago exitoso!",
        description: "Tu pedido ha sido procesado correctamente.",
      });

      // Limpiar el carrito
      dispatch({ type: 'CLEAR_CART' });

      // Redirigir a página de éxito
      router.push('/checkout/success');
    } catch (error) {
      console.error('Error en el pago:', error);
      toast({
        title: "Error en el pago",
        description: "Hubo un problema al procesar tu pago. Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const total = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Información de Envío</h2>
            <CheckoutForm onSubmit={handleCheckout} isProcessing={isProcessing} />
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="sticky top-4">
            <OrderSummary items={state.items} total={total} />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Checkout;
