'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CheckoutSuccess: React.FC = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold mb-4">¡Gracias por tu compra!</h1>
        <p className="text-gray-600 mb-8">
          Tu pedido ha sido procesado correctamente. Recibirás un correo electrónico con los detalles de tu compra.
        </p>
        <div className="space-y-4">
          <Button
            onClick={() => router.push('/')}
            className="w-full"
          >
            Volver a la tienda
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
