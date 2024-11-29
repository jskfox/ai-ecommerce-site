import React from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/router';

const Checkout: React.FC = () => {
  const { state } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    // Aquí podrías integrar un sistema de pago
    alert('Pago realizado con éxito!');
    router.push('/');
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <ul>
        {state.products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.quantity} x ${product.price}
          </li>
        ))}
      </ul>
      <div>
        Total: $
        {state.products.reduce((total, product) => total + product.price * product.quantity, 0)}
      </div>
      <button onClick={handleCheckout} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Realizar Pago
      </button>
    </div>
  );
};

export default Checkout;
