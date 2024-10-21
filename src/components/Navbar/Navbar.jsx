"use client";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { useCartContext } from "../CartContext/CartContext";
import { useEffect, useState } from "react";

export function Navbar() {
  const { productos } = useCartContext();
  const [distinctProducts, setDistinctProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  useEffect(() => {
    setDistinctProducts(
      productos.filter(
        (producto, index, self) =>
          index === self.findIndex((p) => p.name === producto.name)
      )
    );
  }, [productos]);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center text-white">
          <div>My Ecommerce</div>
          <div>
            <div className="flex flex-row gap-5">
              <Link href="/">Inicio</Link>
              <Link href="/nosotros">Nosotros</Link>
              <Link href="/detalleCompra">Detalle compra</Link>
              <div className="relative">
                <button
                  onClick={toggleCart}
                  className="text-white hover:text-gray-400"
                >
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
                          <li
                            key={index}
                            className="border-b py-2 text-gray-800 flex justify-between"
                          >
                            <span>
                              {product.name}
                              {productos.filter(
                                (prod) => prod.name === product.name
                              ).length !== 0
                                ? ` x ${
                                    productos.filter(
                                      (prod) => prod.name === product.name
                                    ).length
                                  }`
                                : ""}
                            </span>
                            <span>
                              {productos
                                .filter((prod) => prod.name === product.name)
                                .map((prod) => prod.price)
                                .reduce(
                                  (acumulador, valorActual) =>
                                    acumulador + valorActual,
                                  0
                                )}
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
      </div>
    </nav>
  );
}
