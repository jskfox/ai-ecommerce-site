'use client';

import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { products } from '@/data/products';
import { ShoppingCart } from 'lucide-react';
import { useTranslations } from 'next-intl';

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
  const { dispatch } = useCart();
  const { toast } = useToast();
  const t = useTranslations();

  const handleAddToCart = async (product: any, cardElement: HTMLElement) => {
    // Get cart icon position
    const cartIcon = document.getElementById('cart-icon');
    if (!cartIcon || !cardElement) return;

    const cartRect = cartIcon.getBoundingClientRect();
    const cardRect = cardElement.getBoundingClientRect();

    // Create card clone for animation
    const clone = cardElement.cloneNode(true) as HTMLElement;
    clone.style.position = 'fixed';
    clone.style.top = `${cardRect.top}px`;
    clone.style.left = `${cardRect.left}px`;
    clone.style.width = `${cardRect.width}px`;
    clone.style.height = `${cardRect.height}px`;
    clone.style.zIndex = '50';
    clone.style.transition = 'all 0.5s ease-in-out';
    clone.style.pointerEvents = 'none';

    document.body.appendChild(clone);

    // Animate clone
    setTimeout(() => {
      clone.style.transform = `
        translate(
          ${cartRect.left - cardRect.left + (cartRect.width - cardRect.width) / 2}px,
          ${cartRect.top - cardRect.top + (cartRect.height - cardRect.height) / 2}px
        ) 
        scale(0.1)
      `;
      clone.style.opacity = '0';
    }, 0);

    // Remove clone after animation
    setTimeout(() => {
      clone.remove();
    }, 500);

    // Add to cart and show toast
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
      title: t('products.addedToCart'),
      description: t('products.addedToCartDesc', { productName: product.name }),
    });
  };

  const featuredProducts = products.slice(0, 6);
  const categories = [
    t('categories.smartphones'),
    t('categories.laptops'),
    t('categories.tablets'),
    t('categories.headphones')
  ];

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
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
        <motion.div 
          className="relative z-20 h-full flex items-center px-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">{t('hero.title')}</h1>
            <p className="text-xl mb-6">{t('hero.subtitle')}</p>
            <Link href="/producto">
              <Button size="lg">
                {t('hero.cta')}
              </Button>
            </Link>
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
          {t('categories.title')}
        </motion.h2>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 transition cursor-pointer"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = `/categoria/${category.toLowerCase()}`}
            >
              <h3 className="font-semibold">{category}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Products Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">{t('products.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden product-card relative transform transition-transform duration-300 hover:scale-105 group"
              style={{ transformOrigin: 'center center' }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`/producto/${product.id}`} className="hover:underline">
                    {product.name}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">${product.price}</span>
                  <div className="space-x-2 flex items-center">
                    <Link href={`/producto/${product.id}`}>
                      <Button 
                        variant="default" 
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
                      >
                        {t('products.viewDetails')}
                      </Button>
                    </Link>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={(e) => {
                        const target = e.target as HTMLElement;
                        const card = target.closest('.product-card') as HTMLElement;
                        if (card) {
                          handleAddToCart(product, card);
                        }
                      }}
                      className="hover:bg-blue-100 transition-colors"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
          <h3 className="font-semibold mb-2">{t('features.freeShipping.title')}</h3>
          <p className="text-gray-600">{t('features.freeShipping.description')}</p>
        </motion.div>
        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl mb-4">⭐</div>
          <h3 className="font-semibold mb-2">{t('features.quality.title')}</h3>
          <p className="text-gray-600">{t('features.quality.description')}</p>
        </motion.div>
        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl mb-4">💬</div>
          <h3 className="font-semibold mb-2">{t('features.support.title')}</h3>
          <p className="text-gray-600">{t('features.support.description')}</p>
        </motion.div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        className="bg-blue-600 text-white p-8 rounded-xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4">{t('newsletter.title')}</h2>
        <p className="mb-6">{t('newsletter.subtitle')}</p>
        <motion.form 
          className="flex max-w-md mx-auto"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <input
            type="email"
            placeholder={t('newsletter.placeholder')}
            className="flex-1 px-4 py-2 rounded-l text-black"
          />
          <motion.button 
            className="bg-gray-900 px-6 py-2 rounded-r hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('newsletter.button')}
          </motion.button>
        </motion.form>
      </motion.section>
    </div>
  );
}
