import Link from "next/link";
import Image from "next/image";

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-amber-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/img/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-6 md:px-12 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text text-transparent">
              Conoce Nuestro Equipo
            </h1>
            <p className="text-lg md:text-xl text-amber-100 leading-relaxed">
              Somos un equipo dedicado a proporcionar productos de calidad, enfocados en brindar 
              la mejor experiencia para nuestros clientes. Trabajamos juntos para crear algo único, 
              apoyando tanto la innovación como las tradiciones.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-900">
          Nuestros Colaboradores
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Team Member 1 */}
          <div className="group relative">
            <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 transform group-hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/img/PErfil1.jpg"
                  alt="Diego Navarro"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">Diego Navarro</h3>
                <p className="text-amber-200">Diego123@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="group relative">
            <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 transform group-hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/img/PErfil2.jpg"
                  alt="Freddy Pan"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">Freddy Pan</h3>
                <p className="text-amber-200">panfreddy326@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="group relative">
            <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 transform group-hover:-translate-y-2">
              <div className="aspect-square relative">
                <Image
                  src="/img/PErfil.jpg"
                  alt="Michael Aparicio"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">Michael Aparicio</h3>
                <p className="text-amber-200">maydanny2004@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-16">
          <Link href="/" passHref>
            <button className="px-8 py-3 text-white rounded-lg font-semibold 
              bg-gradient-to-r from-amber-700 to-amber-500
              hover:from-amber-800 hover:to-amber-600
              transition-all duration-300 transform hover:scale-105
              shadow-lg hover:shadow-xl
              focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
              Volver al Inicio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
