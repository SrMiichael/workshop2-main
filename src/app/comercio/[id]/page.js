'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import productsData from '../../../data/producto.json';
import { useCartDispatchContext } from '../../../components/CartContext/CartContext';

export default function ProductDetail({ params }) {
  const [producto, setProducto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useCartDispatchContext();

  useEffect(() => {
    const foundProducto = productsData.find(item => item.id === +params.id);
    setProducto(foundProducto);
    setIsLoading(false);
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-amber-700">Cargando producto...</div>
      </div>
    );
  }

  if (!producto) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Producto no encontrado</div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_PRODUCT',
      producto: {
        name: producto.title,
        description: producto.description,
        price: producto.price,
        imageUrl: producto.image
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Imagen del producto */}
            <div className="md:w-1/2 relative">
              <div className="aspect-square relative group">
                <Image
                  src={producto.image}
                  alt={producto.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Detalles del producto */}
            <div className="md:w-1/2 p-8 flex flex-col">
              <div className="flex-grow">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {producto.title}
                </h1>
                <div className="mb-6">
                  <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                    {producto.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {producto.description}
                </p>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-amber-900">
                    ${producto.price.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="w-full py-4 px-6 rounded-lg text-white font-semibold
                    bg-gradient-to-r from-amber-700 to-amber-500
                    hover:from-amber-800 hover:to-amber-600
                    transition-all duration-300 transform hover:scale-[1.02]
                    focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50
                    shadow-lg hover:shadow-xl"
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}