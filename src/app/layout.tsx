import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { CartProvider } from '../context/CartContext';
import { Toaster } from "@/components/ui/toaster";
import ClientLayout from '@/components/ClientLayout';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechStore - Tu tienda de tecnología',
  description: 'Las mejores ofertas en productos tecnológicos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/digilap.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
