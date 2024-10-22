"use client";
import { Perfil } from "../../components/Perfil/Perfil";
import { useRouter } from "next/navigation";

export default function Nosotros() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1 className="text-2xl font-bold pb-5">Este es mi ecommerce</h1>
          <p>Estamos comprometidos con la calidad de nuestros productos</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold pb-5">Integrantes</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="border rounded-lg shadow-lg p-5">
              <img
                src="/img/PErfil1.jpg"
                alt="perfil1"
                className="w-56 h-56 mx-auto"
              />
              <Perfil nombre="Diego Navarro" email="agranda@rootstack.com" />
            </div>
            <div className="border rounded-lg shadow-lg p-5">
              <img
                src="/img/PErfil2.jpg"
                alt="perfil1"
                className="w-56 h-56 mx-auto"
              />
              <Perfil nombre="Freddy Pan" email="yhurtado@rootstack.com" />
            </div>
            <div className="border rounded-lg shadow-lg p-5">
              <img
                src="/img/PErfil.jpg"
                alt="perfil"
                className="w-56 h-56 mx-auto"
              />
              <Perfil
                nombre="Michael Aparicio"
                email="maydanny2004@gmail.com"
              />
            </div>
          </div>
        </div>
        <div>
          <button onClick={handleClick}>Volver al inicio</button>
        </div>
      </main>
    </div>
  );
}
