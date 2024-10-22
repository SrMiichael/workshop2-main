import { Perfil } from "../../components/Perfil/Perfil";
import Link from "next/link";
import Image from "next/image";

export default function Nosotros() {
  return (
<<<<<<< HEAD
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
=======
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1 className="text-2xl font-bold pb-5">Integrantes</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5"></div>
        <div className="border rounded-lg shadow-lg p-5"></div>

        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-r from-blue-50 to-white">
          <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start">
            {/* Introducción con efecto fade-in */}
            <div className="text-center sm:text-left animate-fadeIn">
              <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                Conoce Nuestro Equipo
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Somos un equipo dedicado a proporcionar productos de calidad,
                enfocados en brindar la mejor experiencia para nuestros
                clientes. Trabajamos juntos para crear algo único, apoyando
                tanto la innovación como las tradiciones.
              </p>
            </div>
          </main>
          {/* Sección de perfiles con sombra, bordes redondeados y animaciones */}
          <div className="w-full">
            <h2 className="text-3xl font-bold pb-5 text-gray-800">
              Colaboradores
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <img
                  src="/img/PErfil1.jpg"
                  alt="perfil1"
                  className="w-56 h-56 mx-auto rounded-full"
                />
                <Perfil
                  nombre="Diego Navarro"
                  email="diego.navarro2@utp.ac.pa"
                />
                <Perfil nombre="Diego Navarro" email="Diego123@gmail.com" />
              </div>
              <div className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <img
                  src="/img/PErfil2.jpg"
                  alt="perfil2"
                  className="w-56 h-56 mx-auto rounded-full"
                />
                <Perfil nombre="Freddy Pan" email="freddy.pan@utp.ac.pa" />
                <Perfil nombre="Freddy Pan" email="panfreddy326@gmail.com" />
              </div>
              <div className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <img
                  src="/img/PErfil.jpg"
                  alt="perfil"
                  className="w-56 h-56 mx-auto rounded-full"
                />
                <Perfil
                  nombre="Michael Aparicio"
                  email="maydanny2004@gmail.com"
                />
>>>>>>> 0c94ae51f61d80186822526700ef91f9bdd036be
              </div>
            </div>
          </div>

<<<<<<< HEAD
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
=======
          {/* Botón con Link */}
          <div>
            <Link href="/" passHref>
              <button className="bg-blue-500 text-white py-3 px-8 rounded-md transition-all transform hover:bg-gray-600 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                Volver al Inicio
              </button>
            </Link>
          </div>
>>>>>>> 0c94ae51f61d80186822526700ef91f9bdd036be
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}

>>>>>>> 0c94ae51f61d80186822526700ef91f9bdd036be
