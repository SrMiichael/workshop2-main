'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Image from 'next/image';

const ProductPanel = dynamic(() => import('../../components/ProductPanel'), {
  loading: () => (
    <div className="w-full h-64 flex items-center justify-center">
      <div className="animate-pulse text-amber-700">Cargando productos...</div>
    </div>
  ),
});

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    'All',
    'Artesanias',
    'Vestimenta tradicional',
    'Café y Cacao',
    'Gastronomía Típica',
    'Instrumentos musicales típicos',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-amber-900 to-amber-800 text-white py-16">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("/patterns/subtle-dots.png")',
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Nuestros Productos
          </h1>
          <p className="text-center text-amber-100 max-w-2xl mx-auto">
            Descubre nuestra selección de productos artesanales y tradicionales
          </p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? '' : category)}
              className={`px-4 py-2 rounded-full transition-all duration-300
                ${
                  selectedCategory === (category === 'All' ? '' : category)
                    ? 'bg-gradient-to-r from-amber-700 to-amber-600 text-white shadow-lg'
                    : 'bg-white text-amber-900 hover:bg-amber-50 border border-amber-200'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductPanel selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
}