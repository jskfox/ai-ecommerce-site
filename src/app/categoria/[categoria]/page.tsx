'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

const priceRanges = {
  'under500': (price: number) => price < 500,
  '500to1000': (price: number) => price >= 500 && price <= 1000,
  'over1000': (price: number) => price > 1000,
};

interface FilterState {
  price: string[];
  brand: string[];
}

export default function CategoryPage({ params }: { params: { categoria: string } }) {
  const { dispatch } = useCart();
  const { toast } = useToast();
  const t = useTranslations('category');
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    price: [],
    brand: [],
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filters = [
    {
      name: t('filters.price'),
      options: Object.keys(priceRanges).map(key => t(`filters.priceRanges.${key}`)),
    },
    {
      name: t('filters.brand'),
      options: ['Apple', 'Samsung', 'Sony', 'Dell', 'LG', 'DJI', 'Bose', 'Google'],
    },
  ];

  const sortOptions = [
    { name: t('sort.relevance'), value: 'relevance' },
    { name: t('sort.priceLowHigh'), value: 'price-asc' },
    { name: t('sort.priceHighLow'), value: 'price-desc' },
    { name: t('sort.nameAZ'), value: 'name-asc' },
    { name: t('sort.nameZA'), value: 'name-desc' },
  ];

  const categoryName = params.categoria.charAt(0).toUpperCase() + params.categoria.slice(1);

  // Filtrar y ordenar productos
  useEffect(() => {
    let result = products.filter(
      product => product.category.toLowerCase() === params.categoria.toLowerCase()
    );

    // Aplicar filtros de precio
    if (activeFilters.price.length > 0) {
      result = result.filter(product => 
        activeFilters.price.some(range => {
          const priceFilter = priceRanges[range as keyof typeof priceRanges];
          return priceFilter(product.price);
        })
      );
    }

    // Aplicar filtros de marca
    if (activeFilters.brand.length > 0) {
      result = result.filter(product =>
        activeFilters.brand.some(brand => 
          product.name.toLowerCase().includes(brand.toLowerCase())
        )
      );
    }

    // Aplicar ordenamiento
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    setFilteredProducts(result);
  }, [params.categoria, activeFilters, sortBy]);

  const handleFilterChange = (filterType: keyof FilterState, value: string) => {
    setActiveFilters(prev => {
      const currentFilters = prev[filterType];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter(item => item !== value)
        : [...currentFilters, value];
      
      return {
        ...prev,
        [filterType]: newFilters
      };
    });
  };

  const handleAddToCart = async (product: any, cardElement: Element) => {
    // Obtener la posición del carrito
    const cartIcon = document.getElementById('cart-icon');
    if (!cartIcon || !cardElement) return;

    const cartRect = cartIcon.getBoundingClientRect();
    const cardRect = cardElement.getBoundingClientRect();

    // Crear un clon de la tarjeta para la animación
    const clone = cardElement.cloneNode(true) as Element;
    clone.style.position = 'fixed';
    clone.style.top = `${cardRect.top}px`;
    clone.style.left = `${cardRect.left}px`;
    clone.style.width = `${cardRect.width}px`;
    clone.style.height = `${cardRect.height}px`;
    clone.style.zIndex = '50';
    clone.style.transition = 'all 0.5s ease-in-out';
    clone.style.pointerEvents = 'none';

    document.body.appendChild(clone);

    // Animar el clon
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

    // Eliminar el clon después de la animación
    setTimeout(() => {
      clone.remove();
    }, 500);

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
    <div className="flex flex-col space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{categoryName}</h1>
        
        <div className="flex items-center space-x-4">
          <select
            className="border rounded-lg px-4 py-2 bg-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar with filters */}
        <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="font-bold text-lg mb-4">{t('filters.title')}</h2>
          {filters.map((filter) => (
            <div key={filter.name} className="space-y-3">
              <h3 className="font-semibold">{filter.name}</h3>
              <div className="space-y-2">
                {filter.options.map((option) => {
                  const filterType = filter.name === t('filters.price') ? 'price' : 'brand';
                  const isChecked = activeFilters[filterType as keyof FilterState].includes(option);
                  
                  return (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleFilterChange(filterType, option)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-600">{option}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}

          {(activeFilters.price.length > 0 || activeFilters.brand.length > 0) && (
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={() => setActiveFilters({ price: [], brand: [] })}
            >
              {t('filters.clear')}
            </Button>
          )}
        </div>

        {/* Product grid */}
        <div className="md:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold text-gray-900">{t('filters.noProducts')}</h3>
              <p className="mt-2 text-gray-500">{t('filters.tryAdjusting')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden product-card relative"
                  style={{ transformOrigin: 'center center' }}
                >
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
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
                            {t('viewDetails')}
                          </Button>
                        </Link>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={(e) => {
                            const target = e.target as Element;
                            const card = target.closest('.product-card');
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
          )}
        </div>
      </div>
    </div>
  );
}
