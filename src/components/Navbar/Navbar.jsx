"use client";
import Link from "next/link";
import { ShoppingCartIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/20/solid"; 
import { useCartContext } from "../CartContext/CartContext";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

const accessLink = ["/", "/comercio", "/detalleCompra", "/nosotros"];

export function Navbar() {
  const { productos } = useCartContext();
  const [distinctProducts, setDistinctProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const cartRef = useRef(null);
  
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  useEffect(() => {
    setDistinctProducts(
      productos.filter(
        (producto, index, self) =>
          index === self.findIndex((p) => p.name === producto.name)
      )
    );
  }, [productos]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartRef]);

  const pathname = usePathname();
  if (!accessLink.includes(pathname) && !pathname.startsWith("/comercio")) return null;

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Searching for:", searchTerm);
      //saltar a x pestana
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center text-white">
          <div>My Ecommerce</div>

          <div className="flex flex-row gap-5">
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/comercio">Productos</Link>
            <Link href="/detalleCompra">Detalle compra</Link>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                className="bg-gray-700 text-white rounded-md p-2 pr-10"
              />
              <MagnifyingGlassIcon className="absolute right-2 top-2 w-5 h-5 text-gray-400" />
            </div>

            <div className="flex items-center ml-4">
              <Link href="/login" className="flex items-center text-white hover:text-gray-400">
                <UserIcon className="w-6 h-6 mr-1" /> 
                Login
              </Link>
            </div>

            <div className="relative ml-4" ref={cartRef}> 
              <button onClick={toggleCart} className="text-white hover:text-gray-400">
                <ShoppingCartIcon className="w-6 h-6" />
                {productos.length > 0 && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-5 h-5">
                    {productos.length}
                  </span>
                )}
              </button>
              {isCartOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
                  {distinctProducts.length > 0 ? (
                    <ul>
                      {distinctProducts.map((product, index) => (
                        <li key={index} className="border-b py-2 text-gray-800 flex justify-between">
                          <span>
                            {product.name}
                            {productos.filter((prod) => prod.name === product.name).length !== 0
                              ? ` x ${productos.filter((prod) => prod.name === product.name).length}`
                              : ""}
                          </span>
                          <span>
                            {productos
                              .filter((prod) => prod.name === product.name)
                              .map((prod) => prod.price)
                              .reduce((acumulador, valorActual) => acumulador + valorActual, 0)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">No tienes productos</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
