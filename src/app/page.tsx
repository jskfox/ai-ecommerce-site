'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'MacBook Pro M2',
    description: 'La laptop más potente de Apple con el nuevo chip M2',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=400&fit=crop',
    category: 'Laptops',
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    description: 'El último iPhone con cámara profesional',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=400&fit=crop',
    category: 'Smartphones',
  },
  {
    id: 3,
    name: 'Sony WH-1000XM4',
    description: 'Auriculares con cancelación de ruido premium',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=400&fit=crop',
    category: 'Auriculares',
  },
  {
    id: 4,
    name: 'iPad Pro',
    description: 'Tablet profesional para creativos',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=400&fit=crop',
    category: 'Tablets',
  },
  {
    id: 5,
    name: 'Samsung QLED 4K TV',
    description: 'Smart TV con calidad de imagen excepcional',
    price: 1499.99,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=400&fit=crop',
    category: 'TVs',
  },
  {
    id: 6,
    name: 'DJI Mini 3 Pro',
    description: 'Drone compacto con cámara 4K',
    price: 749.99,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=400&fit=crop',
    category: 'Drones',
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.section 
        className="relative h-96 bg-gray-900 rounded-xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&h=600&fit=crop"
          alt="Hero Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
        <motion.div 
          className="relative z-20 h-full flex items-center px-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Las mejores ofertas en tecnología</h1>
            <p className="text-xl mb-6">Descubre nuestra selección de productos premium a precios increíbles</p>
            <motion.button 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Ofertas
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* Categories Section */}
      <section>
        <motion.h2 
          className="text-2xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Categorías Populares
        </motion.h2>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {['Smartphones', 'Laptops', 'Tablets', 'Auriculares'].map((category) => (
            <motion.div
              key={category}
              className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 transition cursor-pointer"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="font-semibold">{category}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Products */}
      <section>
        <motion.h2 
          className="text-2xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Productos Destacados
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">${product.price}</span>
                  <motion.button 
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Añadir al Carrito
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 p-8 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl mb-4">🚚</div>
          <h3 className="font-semibold mb-2">Envío Gratis</h3>
          <p className="text-gray-600">En pedidos superiores a $99</p>
        </motion.div>
        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl mb-4">⭐</div>
          <h3 className="font-semibold mb-2">Garantía de Calidad</h3>
          <p className="text-gray-600">30 días de garantía en todos los productos</p>
        </motion.div>
        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl mb-4">💬</div>
          <h3 className="font-semibold mb-2">Soporte 24/7</h3>
          <p className="text-gray-600">Asistencia técnica disponible todo el día</p>
        </motion.div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        className="bg-blue-600 text-white p-8 rounded-xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4">¡Suscríbete a nuestro Newsletter!</h2>
        <p className="mb-6">Recibe las últimas ofertas y novedades directamente en tu correo</p>
        <motion.form 
          className="flex max-w-md mx-auto"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <input
            type="email"
            placeholder="Tu email"
            className="flex-1 px-4 py-2 rounded-l text-black"
          />
          <motion.button 
            className="bg-gray-900 px-6 py-2 rounded-r hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Suscribir
          </motion.button>
        </motion.form>
      </motion.section>
    </div>
  );
}
