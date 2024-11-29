'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

function CartLink() {
  const { state } = useCart();
  
  return (
    <Link href="/carrito" className="relative">
      <span className="text-lg">🛒</span>
      {state.itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {state.itemCount}
        </span>
      )}
    </Link>
  );
}

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            TechStore
          </Link>
          <nav className="space-x-6">
            <Link href="/productos" className="hover:text-blue-600">
              Productos
            </Link>
            <CartLink />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4">Sobre Nosotros</h3>
              <p className="text-gray-600">
                TechStore es tu tienda de confianza para productos tecnológicos.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/productos" className="text-gray-600 hover:text-blue-600">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/carrito" className="text-gray-600 hover:text-blue-600">
                    Carrito
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contacto</h3>
              <p className="text-gray-600">
                Email: info@techstore.com<br />
                Teléfono: (123) 456-7890
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}