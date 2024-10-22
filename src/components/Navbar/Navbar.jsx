"use client";

import React, { useEffect, useState, useRef } from 'react';
import Link from "next/link";
import { ShoppingCartIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/20/solid";
import { useCartContext } from "../CartContext/CartContext";
import { useRouter } from "next/navigation";

const accessLink = ["/", "/comercio", "/detalleCompra", "/nosotros"];

export function Navbar() {
  const { productos } = useCartContext();
  const [distinctProducts, setDistinctProducts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    router.push("/login");
  };

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [cartRef]);

  useEffect(() => {
    const publicPaths = ["/", "/login", "/favicon.ico", "/globals.css"];
    const pathIsPublic = publicPaths.includes(router.pathname);
  }, [router.pathname, router]);

  return (
    <>
      <nav className="bg-white py-4 px-6 border-b">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <div className="flex flex-col">
              <span className="text-gray-800">PANAMA ARTESANAL</span>
              <span className="text-sm text-gray-500">ARTE & TRADICIÓN</span>
            </div>
          </Link>

          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className="text-gray-600 hover:text-gray-800"
            >
              Nosotros
            </Link>
            <Link
              href="/comercio"
              className="text-gray-600 hover:text-gray-800"
            >
              Tienda
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>

            {!isAuthenticated && (
              <Link href="/login" className="text-gray-600 hover:text-gray-800">
                <UserIcon className="w-6 h-6" />
              </Link>
            )}

            <div className="relative" ref={cartRef}>
              <button
                onClick={toggleCart}
                className="text-gray-600 hover:text-gray-800 relative"
              >
                <ShoppingCartIcon className="w-6 h-6" />
                {productos.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {productos.length}
                  </span>
                )}
              </button>
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600 ml-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}

              {isCartOpen && (
                <div
                  className="fixed inset-0 bg-gray-900 opacity-50 z-40"
                  onClick={toggleCart}
                ></div>
              )}

              {/* Carrito */}
              <div
                className={`fixed right-0 top-0 w-64 h-screen bg-white shadow-lg p-4 transition-transform transform ${
                  isCartOpen ? "translate-x-0" : "translate-x-full"
                } z-50`}
              >
                <h2 className="text-lg font-bold mb-4 bg-amber-500 text-white p-2 rounded">
                  Carrito de compra
                </h2>

                {/*Pestaña de carrito*/}
                <div className="max-h-[70vh] overflow-y-auto">
                  {distinctProducts.length > 0 ? (
                    <ul>
                      {distinctProducts.map((product, index) => {
                        const productCount = productos.filter(
                          (prod) => prod.name === product.name
                        ).length;
                        const productTotalPrice = productos
                          .filter((prod) => prod.name === product.name)
                          .reduce((acc, prod) => acc + prod.price, 0);

                        return (
                          <li
                            key={index}
                            className="border-b py-2 text-gray-800 flex justify-between items-center"
                          >
                            <div className="flex items-center">
                              <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-10 h-10 mr-2"
                              />
                              <span>
                                {product.name} x {productCount}
                              </span>
                            </div>
                            <span>${productTotalPrice.toFixed(2)}</span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="text-gray-600">Carrito vacío</p>
                  )}
                </div>
                <div className="mt-4">
                  <p className="font-bold text-gray-800 text-2xl">
                    <br />
                    Subtotal: <br />$
                    {productos
                      .map((prod) => prod.price)
                      .reduce((acc, valorActual) => acc + valorActual, 0)
                      .toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;