'use client';
import React, { useEffect, useState } from 'react';
import productsData from '../../../data/producto.json';
import { useCartDispatchContext } from '../../../components/CartContext/CartContext'; 

export default function Page({ params }) {
  const [producto, setProducto] = useState(null);
  const dispatch = useCartDispatchContext(); 

  useEffect(() => {
    const foundProducto = productsData.find(item => item.id === +params.id);
    setProducto(foundProducto);
  }, [params.id]);

  if (!producto) {
    return <div className="text-center text-lg">Loading...</div>;
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
    <div className="max-w-lg mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{producto.title}</h1>
      <img src={producto.image} alt={producto.title} className="w-full h-64 object-cover rounded-md mb-4" />
      <p className="text-lg mb-2">{producto.description}</p>
      <p className="text-xl font-semibold">Price: <span className="text-orange-500">${producto.price}</span></p>
      <button 
        className="mt-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
