import React from 'react';
import Link from 'next/link';
import { products } from '@/data/products';

const CategoriesPage = () => {
  const categories = Array.from(new Set(products.map(product => product.category)));

  const categoryImages = categories.reduce((acc, category) => {
    const product = products.find(p => p.category === category);
    if (product) {
      acc[category] = product.image;
    }
    return acc;
  }, {} as Record<string, string>);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">Categorías</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link key={category} href={`/categoria/${category.toLowerCase()}`} className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <img src={categoryImages[category] || 'https://via.placeholder.com/800x600'} alt={category} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-primary">{category}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
