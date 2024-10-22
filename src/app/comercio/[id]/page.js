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
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg space-x-0 md:space-x-4">

      <div className="md:w-1/2 mb-4 md:mb-0">
        <img 
          src={producto.image} 
          alt={producto.title} 
          className="w-full h-full object-contain"  
        />
      </div>
 
      <div className="md:w-1/2 md:pl-4 flex flex-col justify-between">
        <div className="mb-6"> 
          <h1 className="text-3xl font-bold mb-2">{producto.title}</h1>
          <p className="text-lg text-gray-700 mb-2">Categoría: <span className="font-semibold">{producto.category}</span></p><br/>
          <span className="block mb-4">Descripción:</span>
          <p className="text-lg mb-4">{producto.description}</p> 
        </div>
        <div>
          <p className="text-xl font-semibold mb-2">
            Price: <span className="text-orange-500">${producto.price.toFixed(2)}</span>
          </p>
          <button 
            className="w-full mt-4 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
