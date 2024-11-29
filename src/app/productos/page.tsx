"use client";

import React, { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filter, setFilter] = useState('');

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductsPerPageChange = (value: string) => {
    setProductsPerPage(parseInt(value));
    setCurrentPage(1);
  };

  const handleSortOrderChange = (value: string) => {
    setSortOrder(value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    setCurrentPage(1);
  };

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(filter.toLowerCase()) ||
      product.description.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else if (sortOrder === 'desc') {
        return b.price - a.price;
      } else if (sortOrder === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-primary mb-2"
        >
          Productos
        </motion.h1>
        <p className="text-gray-600">Explora nuestra colección de productos</p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
      >
        <input
          type="text"
          placeholder="Buscar productos..."
          value={filter}
          onChange={handleFilterChange}
          className="w-full md:w-64 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
        />

        <div className="flex flex-col md:flex-row gap-4">
          <select 
            value={productsPerPage} 
            onChange={(e) => handleProductsPerPageChange(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="10">10 por página</option>
            <option value="20">20 por página</option>
            <option value="50">50 por página</option>
          </select>

          <select 
            value={sortOrder} 
            onChange={(e) => handleSortOrderChange(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="asc">Precio: Bajo a Alto</option>
            <option value="desc">Precio: Alto a Bajo</option>
            <option value="name">Nombre</option>
          </select>
        </div>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {currentProducts.map((product) => (
          <motion.div key={product.id} variants={item}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {totalPages > 1 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mt-8 gap-2"
        >
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-lg disabled:opacity-50 hover:bg-primary hover:text-white transition-colors"
          >
            Anterior
          </button>
          
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            if (
              pageNumber === 1 ||
              pageNumber === totalPages ||
              (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2)
            ) {
              return (
                <button
                  key={index}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-4 py-2 border rounded-lg transition-colors ${
                    currentPage === pageNumber ? 'bg-primary text-white' : 'hover:bg-primary/10'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            } else if (
              pageNumber === currentPage - 3 ||
              pageNumber === currentPage + 3
            ) {
              return <span key={index} className="px-2">...</span>;
            }
            return null;
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-lg disabled:opacity-50 hover:bg-primary hover:text-white transition-colors"
          >
            Siguiente
          </button>
        </motion.div>
      )}

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mt-4 text-gray-600"
      >
        Mostrando {indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, filteredProducts.length)} de {filteredProducts.length} productos
      </motion.p>
    </div>
  );
};

export default ProductsPage;
