import React from 'react';
import Image from 'next/image';
import { ShoppingCart, Truck, RefreshCcw, Shield, Star } from 'lucide-react';

export default function Home() {
  const benefits = [
    { icon: <Truck className="w-8 h-8 text-amber-500" />, title: "Envío Gratis", description: "En pedidos mayores a $75" },
    { icon: <RefreshCcw className="w-8 h-8 text-amber-500" />, title: "Política de Devolución", description: "15 días de garantía" },
    { icon: <ShoppingCart className="w-8 h-8 text-amber-500" />, title: "Pago Seguro", description: "100% Seguro" },
    { icon: <Shield className="w-8 h-8 text-amber-500" />, title: "Protección", description: "Garantía de calidad" },
  ];

  const categories = [
    { title: "Artesanías", image: "/api/placeholder/300/400" },
    { title: "Mola Kuna", image: "/api/placeholder/300/400" },
    { title: "Sombreros Pintados", image: "/api/placeholder/300/400" },
  ];

  const bestSellers = [
    { title: "Pollera Panameña", price: 299.99, image: "/api/placeholder/300/400" },
    { title: "Sombrero Pintado", price: 89.99, image: "/api/placeholder/300/400" },
    { title: "Mola Tradicional", price: 45.00, image: "/api/placeholder/300/400" },
  ];

  const categoryCircles = [
    "Textiles", "Cerámicas", "Máscaras", "Joyería", "Instrumentos", "Tembleques"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-purple-100 h-[500px] flex items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-4">Descubre la Belleza de Panamá</h1>
            <p className="text-lg mb-6">Artesanías únicas que cuentan nuestra historia</p>
            <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800">
              Comprar Ahora
            </button>
          </div>
          <div className="w-1/2">
            <Image 
              src="/api/placeholder/500/500"
              alt="Artesanías Panameñas"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {benefit.icon}
              <h3 className="mt-4 font-semibold">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="relative h-[400px] overflow-hidden rounded-lg">
                  <Image
                    src={category.image}
                    alt={category.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-white text-2xl font-semibold">{category.title}</h3>
                      <button className="mt-4 bg-white text-black px-6 py-2 rounded-md">
                        Comprar Ahora
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best Sellers */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Más Vendidos</h2>
          <div className="grid grid-cols-3 gap-8">
            {bestSellers.map((product, index) => (
              <div key={index} className="group">
                <div className="relative h-[300px] mb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-lg">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Circles */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            {categoryCircles.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-2 mx-auto flex items-center justify-center">
                  <Image
                    src="/api/placeholder/50/50"
                    alt={category}
                    width={50}
                    height={50}
                  />
                </div>
                <p className="text-sm">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="py-12 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Más que una Tienda de Artesanías</h2>
          <p className="mb-6">Únete a nuestra newsletter para descubrir la cultura panameña</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-2 border rounded-md"
            />
            <button className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600">
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4" />
                  <div>
                    <h4 className="font-semibold">Cliente Feliz</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Excelente calidad en las artesanías. Representan perfectamente nuestra cultura."
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}