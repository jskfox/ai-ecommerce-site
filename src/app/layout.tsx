import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechStore - Tu tienda de electrónicos',
  description: 'Encuentra los mejores productos electrónicos al mejor precio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-800">TechStore</h1>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">Inicio</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">Productos</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">Ofertas</a>
                <a href="#" className="text-gray-600 hover:text-gray-800">Carrito</a>
              </div>
            </div>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Sobre Nosotros</h3>
                <p>Tu tienda de confianza para productos electrónicos</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-gray-300">Productos</a></li>
                  <li><a href="#" className="hover:text-gray-300">Ofertas</a></li>
                  <li><a href="#" className="hover:text-gray-300">Soporte</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Contacto</h3>
                <ul className="space-y-2">
                  <li>Email: contacto@techstore.com</li>
                  <li>Teléfono: (123) 456-7890</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="px-4 py-2 rounded-l text-black"
                  />
                  <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700">
                    Suscribir
                  </button>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
