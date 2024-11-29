'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const products = [
  {
    id: '1',
    name: 'MacBook Pro M2',
    description: 'La laptop más potente de Apple con el nuevo chip M2',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=400&fit=crop',
    category: 'laptops',
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    description: 'El último iPhone con cámara profesional',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=400&fit=crop',
    category: 'smartphones',
  },
  // Añadir más productos aquí
];

const filters = [
  {
    name: 'Precio',
    options: ['Menos de $500', '$500 - $1000', 'Más de $1000'],
  },
  {
    name: 'Marca',
    options: ['Apple', 'Samsung', 'Sony', 'Dell'],
  },
  {
    name: 'Valoración',
    options: ['4 estrellas o más', '3 estrellas o más'],
  },
];

const sortOptions = [
  { name: 'Más relevantes', value: 'relevance' },
  { name: 'Precio: Menor a mayor', value: 'price-asc' },
  { name: 'Precio: Mayor a menor', value: 'price-desc' },
  { name: 'Más nuevos', value: 'newest' },
];

export default function CategoryPage({ params }: { params: { categoria: string } }) {
  const categoryName = params.categoria.charAt(0).toUpperCase() + params.categoria.slice(1);
  const categoryProducts = products.filter(p => p.category === params.categoria);

  const staggerAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-2">{categoryName}</h1>
        <p className="text-gray-600">Explora nuestra selección de {categoryName}</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filtros */}
        <motion.aside
          className="lg:col-span-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Filtros</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {filters.map((filter) => (
                  <div key={filter.name} className="space-y-2">
                    <h3 className="font-medium">{filter.name}</h3>
                    <div className="space-y-1">
                      {filter.options.map((option) => (
                        <label key={option} className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span className="text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.aside>

        {/* Productos */}
        <div className="lg:col-span-3">
          {/* Ordenar */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    Mostrando {categoryProducts.length} productos
                  </p>
                  <select className="border rounded-md px-2 py-1">
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Grid de productos */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="initial"
            animate="animate"
          >
            {categoryProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={staggerAnimation}
              >
                <Link href={`/producto/${product.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded-t-xl"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{product.description}</p>
                      <p className="text-xl font-bold mt-2">${product.price}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Añadir al Carrito</Button>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
