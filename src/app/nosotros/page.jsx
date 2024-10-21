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
          <div className="flex flex-row gap-5">
            <div>
              <Perfil nombre="Andres Granda" email="agranda@rootstack.com" />
            </div>
            <div>
              <Perfil
                nombre="Yohendry Hurtado"
                email="yhurtado@rootstack.com"
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
