import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Truck, RefreshCcw, Shield, Star } from "lucide-react";
import productsData from "../data/producto.json";

export default function Home() {
  const benefits = [
    {
      icon: <Truck className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />,
      title: "Envío Gratis",
      description: "En pedidos mayores a $75",
    },
    {
      icon: <RefreshCcw className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />,
      title: "Política de Devolución",
      description: "15 días de garantía",
    },
    {
      icon: <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />,
      title: "Pago Seguro",
      description: "100% Seguro",
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />,
      title: "Protección",
      description: "Garantía de calidad",
    },
  ];

  const bestSellers = [
    {
      id: 4,
      title: "Pollera miniatura",
      price: 30.0,
      image: "/img/pollera.webp",
    },
    {
      id: 6,
      title: "Sombrero Pintado",
      price: 40.0,
      image: "/img/sombrero.webp",
    },
    { id: 7, title: "Tembleques", price: 25.0, image: "/img/Tembleques.webp" },
  ];

  const categories = [
    {
      name: "Artesanias",
      image: "https://kalosh.com/cdn/shop/articles/Mola_Kalosh_1200x1200.jpg",
    },
    {
      name: "Vestimenta",
      image: "https://ofertasimple.com/uploads/extra/FolkEstudio.png",
    },
    {
      name: "Café y Cacao",
      image:
        "https://cafeduran.com/wp-content/uploads/2022/06/Geisha-molido.jpg",
    },
    {
      name: "Gastronomía\nTípica",
      image:
        "https://pa.productoselantojo.com/cdn/shop/products/tortillademaizgrande2.jpg",
    },
    {
      name: "Instrumentos",
      image:
        "https://artesanosdepanama.com/cdn/shop/products/96-TB03A_400x.png",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[400px] md:h-[600px] flex items-start overflow-hidden py-8 md:py-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/img/pollera-Utp.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center 15%"
            className="object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
<<<<<<< HEAD
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-48 md:pt-56">
        <div className="w-full md:w-2/3 relative">
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-rose-300 animate-gradientMove mb-4 md:mb-6">
              Equipo: Tres Tristes Triggers
            </h1>
            <h1 className="text-3xl md:text-5xl font-extrabold text-blue-200 mb-4 md:mb-6 animate-flicker">
              Descubre la Belleza de Panamá
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 md:mb-10 animate-typewriter leading-relaxed text-justify">
              Cada producto cuenta una historia única, creada por manos panameñas, reflejando nuestras raíces y tradiciones.
              Al apoyar este comercio, no solo adquieres piezas exclusivas, sino que también contribuyes a mantener vivas las
              costumbres y el talento de los pueblos originarios.
            </p>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 md:right-[-375px]">
            <Link href="/comercio">
              <button className="relative bg-rose-100 text-gray-800 px-6 md:px-10 py-3 md:py-4 rounded-md transition-all transform hover:scale-105 hover:bg-rose-200 hover:shadow-[0_0_20px_rgba(254,205,211,0.8)] border-2 border-rose-200">
                Comprar Ahora
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
=======

        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-48 md:pt-56">
          <div className="w-full md:w-2/3 relative">
            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold text-rose-300 animate-gradientMove mb-4 md:mb-6">
                Equipo: Tres Tristes Triggers
              </h1>
              <h1 className="text-3xl md:text-5xl font-extrabold text-blue-200 mb-4 md:mb-6 animate-flicker">
                Descubre la Belleza de Panamá
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8 md:mb-10 animate-typewriter leading-relaxed text-justify">
                Cada producto cuenta una historia única, creada por manos
                panameñas, reflejando nuestras raíces y tradiciones. Al apoyar
                este comercio, no solo adquieres piezas exclusivas, sino que
                también contribuyes a mantener vivas las costumbres y el talento
                de los pueblos originarios.
              </p>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 md:right-[-375px]">
              <Link href="/comercio">
                <button className="relative bg-rose-100 text-gray-800 px-6 md:px-10 py-3 md:py-4 rounded-md transition-all transform hover:scale-105 hover:bg-rose-200 hover:shadow-[0_0_20px_rgba(254,205,211,0.8)] border-2 border-rose-200">
                  Comprar Ahora
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
>>>>>>> 689ee14c7b3ec83a99c618c8ecbc4c511962bf69

      {/* Benefits Section */}
      <div className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              {benefit.icon}
              <h3 className="mt-3 md:mt-4 font-semibold text-sm md:text-base">
                {benefit.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

<<<<<<< HEAD
=======
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

>>>>>>> 689ee14c7b3ec83a99c618c8ecbc4c511962bf69
      {/* Best Sellers */}
      <div className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
            Más Vendidos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {bestSellers.map((product, index) => (
              <Link key={index} href={`/comercio/${product.id}`} passHref>
                <div className="group cursor-pointer overflow-hidden rounded-lg">
                  <div className="relative h-[250px] md:h-[300px] mb-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:brightness-90"
                    />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base">
                    {product.title}
                  </h3>
                  <p className="text-base md:text-lg">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Category Circles - Updated sizes */}
      <div className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center gap-4 overflow-x-auto pb-4 md:pb-0">
            {categories.map((category, index) => (
              <div
                key={index}
                className="text-center flex-shrink-0 group cursor-pointer"
              >
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white shadow-md mb-2 mx-auto overflow-hidden relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                    unoptimized
                  />
                </div>
                <p className="text-xs md:text-sm font-medium text-gray-800 whitespace-pre-line">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="py-8 md:py-12 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
<<<<<<< HEAD
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Más que una Tienda de Artesanías</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-base">Únete a nuestra newsletter para descubrir la cultura panameña</p>
          <div className="max-w-md mx-auto flex flex-col md:flex-row gap-3 md:gap-4">
=======
          <h2 className="text-2xl font-bold mb-4">
            Más que una Tienda de Artesanías
          </h2>
          <p className="mb-6">
            Únete a nuestra newsletter para descubrir la cultura panameña
          </p>
          <div className="max-w-md mx-auto flex gap-4">
>>>>>>> 689ee14c7b3ec83a99c618c8ecbc4c511962bf69
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-2 border rounded-md text-sm md:text-base"
            />
            <button className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600 text-sm md:text-base">
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-8 md:py-12">
        <div className="container mx-auto px-4">
<<<<<<< HEAD
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Lo que dicen nuestros clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
=======
          <h2 className="text-3xl font-bold text-center mb-8">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid grid-cols-3 gap-8">
>>>>>>> 689ee14c7b3ec83a99c618c8ecbc4c511962bf69
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="p-4 md:p-6 bg-white rounded-lg shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 mr-3 md:mr-4 overflow-hidden group">
                    <Image
                      src="/img/PErfil.jpg"
                      alt="Cliente"
                      width={48}
                      height={48}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base">
                      Cliente Feliz
                    </h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
<<<<<<< HEAD
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-amber-500 fill-current" />
=======
                        <Star
                          key={i}
                          className="w-4 h-4 text-amber-500 fill-current"
                        />
>>>>>>> 689ee14c7b3ec83a99c618c8ecbc4c511962bf69
                      ))}
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
                <p className="text-gray-600 text-sm md:text-base">
                  "Excelente calidad en las artesanías. Representan perfectamente nuestra cultura."
=======
                <p className="text-gray-600">
                  &quot;Excelente calidad en las artesanías. Representan
                  perfectamente nuestra cultura.&quot;
>>>>>>> 689ee14c7b3ec83a99c618c8ecbc4c511962bf69
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
