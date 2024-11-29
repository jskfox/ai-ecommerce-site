'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { products } from '@/data/products';

export default function ProductPage({ params }: { params: { id: string } }) {
  const { dispatch } = useCart();
  const { toast } = useToast();
  const product = products.find(p => p.id === params.id);
  if (!product) return <div>Producto no encontrado</div>;

  const [selectedImage, setSelectedImage] = React.useState(product.images[0]);

  const handleAddToCart = () => {
    dispatch({ 
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description
      }
    });

    toast({
      title: "Producto agregado",
      description: `${product.name} se ha agregado al carrito`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Galería de imágenes */}
        <div className="space-y-4">
          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((img, index) => (
              <motion.div
                key={index}
                className={`relative h-24 rounded-md overflow-hidden cursor-pointer ${
                  selectedImage === img ? 'ring-2 ring-primary' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  fill
                  src={img}
                  alt={`${product.name} view ${index + 1}`}
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Información del producto */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-bold text-primary mt-2">${product.price}</p>
          </div>

          <p className="text-gray-600">{product.fullDescription}</p>

          <Card>
            <CardHeader>
              <CardTitle>Especificaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                {product.specs.map((spec, index) => (
                  <div key={index} className="grid grid-cols-2">
                    <dt className="font-medium">{spec.name}</dt>
                    <dd className="text-gray-600">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="flex gap-4">
              <Button size="lg" onClick={handleAddToCart} className="flex-1">
                Añadir al Carrito
              </Button>
              <Button size="lg" variant="outline">
                Comprar Ahora
              </Button>
            </div>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">🚚</div>
                  <div>
                    <p className="font-medium">Envío Gratis</p>
                    <p className="text-sm text-gray-600">Entrega estimada: 3-5 días hábiles</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </motion.div>

      {/* Productos relacionados */}
      <motion.section
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Aquí irían los productos relacionados */}
        </div>
      </motion.section>
    </div>
  );
}
