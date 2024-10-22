import { Perfil } from "../../components/Perfil/Perfil";
import Link from "next/link";

export default function Nosotros() {
  return (
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
              </div>
            </div>
          </div>

          {/* Botón con Link */}
          <div>
            <Link href="/" passHref>
              <button className="bg-blue-500 text-white py-3 px-8 rounded-md transition-all transform hover:bg-gray-600 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                Volver al Inicio
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

