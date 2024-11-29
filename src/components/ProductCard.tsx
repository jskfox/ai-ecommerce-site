import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface Product {
  id: string | number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const t = useTranslations();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-accent/20">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary">
          <Link href={`/producto/${product.id}`} className="hover:text-primary-light transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-secondary-dark font-medium mt-2">
          ${product.price.toFixed(2)}
        </p>
        <Link href={`/producto/${product.id}`}>
          <button className="mt-3 w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition-colors">
            {t('products.viewDetails')}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
