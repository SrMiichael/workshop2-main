import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // 导入 Link 组件
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
    { id: 4, title: "Pollera miniatura", price: 30.00, image: "/img/pollera.webp" },
    { id: 6, title: "Sombrero Pintado", price: 40.00, image: "/img/sombrero.webp" },
    { id: 7, title: "Tembleques", price: 25.00, image: "/img/Tembleques.webp" },
  ];

  const categoryCircles = [
    "Textiles", "Cerámicas", "Máscaras", "Joyería", "Instrumentos", "Tembleques"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
<<<<<<< HEAD
      <div className="relative bg-purple-100 h-[500px] flex items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Descubre la Belleza de Panamá
            </h1>
            <p className="text-lg mb-6">
              Artesanías únicas que cuentan nuestra historia
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800">
              Comprar Ahora
            </button>
          </div>
          <div className="w-1/2">
=======
      <div className="relative bg-gradient-to-r from-purple-200 via-purple-100 to-purple-50 h-[600px] flex items-center shadow-lg overflow-hidden">
        <div className="container mx-auto px-8 flex justify-between items-center space-x-8">
          <div className="w-2/3 space-y-6">
            {/* Efecto en el título con gradiente y animación */}
            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text animate-gradientMove mb-6">
              Equipo: Tres Tristes Triggers
            </h1>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6 animate-flicker">
              Descubre la Belleza de Panamá
            </h1>

            {/* Efecto de escritura en el texto */}
            <p className="text-xl text-gray-700 mb-8 animate-typewriter leading-relaxed">
              Cada producto cuenta una historia única, creada por manos panameñas, reflejando nuestras raíces y tradiciones.
              Al apoyar este comercio, no solo adquieres piezas exclusivas, sino que también contribuyes a mantener vivas las
              costumbres y el talento de los pueblos originarios.
            </p>

            {/* Botón con efecto de hover con borde y glow */}
            <Link href="/comercio">
              <button className="relative bg-black text-white px-10 py-4 rounded-md transition-all transform hover:scale-105 hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(0,0,0,0.8)] border-2 border-black hover:border-gray-800">
                Comprar Ahora
              </button>
            </Link>
          </div>
          <div className="w-1/3 animate-bounceIn">
>>>>>>> 54da772cb32a97910d42955273f9021aff98ed97
            <Image
              src="/img/pollera-Utp.png"
              alt="Artesanías Panameñas"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl hover:shadow-purple-300 transition-shadow"
            />
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======




>>>>>>> 54da772cb32a97910d42955273f9021aff98ed97
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

<<<<<<< HEAD
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
                      <h3 className="text-white text-2xl font-semibold">
                        {category.title}
                      </h3>
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
=======

>>>>>>> 54da772cb32a97910d42955273f9021aff98ed97

      {/* Best Sellers */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Más Vendidos</h2>
          <div className="grid grid-cols-3 gap-8">
            {bestSellers.map((product, index) => (
              <Link key={index} href={`/comercio/${product.id}`} passHref>
                <div className="group cursor-pointer">
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
              </Link>
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
          <h2 className="text-2xl font-bold mb-4">
            Más que una Tienda de Artesanías
          </h2>
          <p className="mb-6">
            Únete a nuestra newsletter para descubrir la cultura panameña
          </p>
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
          <h2 className="text-3xl font-bold text-center mb-8">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4" />
                  <div>
                    <h4 className="font-semibold">Cliente Feliz</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-amber-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Excelente calidad en las artesanías. Representan
                  perfectamente nuestra cultura."
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
