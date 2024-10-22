"use client";
import React, { useEffect, useState, useRef } from 'react';
import Link from "next/link";
import { ShoppingCartIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useCartContext } from "../CartContext/CartContext";
import { useRouter } from "next/navigation";

const hideNavbarRoutes = ["/login", "/register"];

export function Navbar() {
  const { productos } = useCartContext();
  const [distinctProducts, setDistinctProducts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartRef = useRef(null);
  const router = useRouter();
  const pathname = router.pathname;

  const isHiddenRoute = hideNavbarRoutes.includes(pathname);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

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
  }, []);

  if (isHiddenRoute) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    router.push("/login");
  };

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <>
      {/* Top Banner */}
      <div className="w-full bg-white text-center py-2 text-xs md:text-sm border-b relative">
        <p className="px-4">
          Envío Gratis en Pedidos Mayores a $75 antes de impuestos y después de
          descuentos aplicables.
        </p>
        <a
          href="mailto:info@artesaniaspanama.com"
          className="hidden md:block absolute right-4 top-2 text-gray-600 hover:text-gray-800"
        >
          info@artesaniaspanama.com
        </a>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white py-2 md:py-4 px-4 md:px-6 border-b">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-lg md:text-xl font-bold">
              <div className="flex flex-col">
                <span className="text-gray-800">PANAMA ARTESANAL</span>
                <span className="text-xs md:text-sm text-gray-500">ARTE & TRADICIÓN</span>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? 
                <XMarkIcon className="h-6 w-6" /> : 
                <Bars3Icon className="h-6 w-6" />
              }
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-800">Inicio</Link>
              <Link href="/nosotros" className="text-gray-600 hover:text-gray-800">Nosotros</Link>
              <Link href="/comercio" className="text-gray-600 hover:text-gray-800">Tienda</Link>
            </div>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-800">
                <MagnifyingGlassIcon className="w-6 h-6" />
              </button>
              
              <Link href="/login" className="text-gray-600 hover:text-gray-800">
                <UserIcon className="w-6 h-6" />
              </Link>

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
                    className="ml-4 text-gray-600 hover:text-gray-800"
                  >
                    Salir
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Menu Icons */}
            <div className="flex md:hidden items-center space-x-2">
              <Link href="/login" className="text-gray-600 hover:text-gray-800">
                <UserIcon className="w-6 h-6" />
              </Link>
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
                  className="text-gray-600 hover:text-gray-800"
                >
                  Salir
                </button>
              )}
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-600 hover:text-gray-800">Inicio</Link>
                <Link href="/nosotros" className="text-gray-600 hover:text-gray-800">Nosotros</Link>
                <Link href="/comercio" className="text-gray-600 hover:text-gray-800">Tienda</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Cart Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-gray-900 opacity-50 z-40" onClick={() => setIsCartOpen(false)}></div>
      )}

      {/* Cart Sidebar */}
      <div 
        className={`fixed right-0 top-0 w-64 md:w-80 h-screen bg-white shadow-lg p-4 transition-transform transform ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
      >
        <h2 className="text-lg font-bold mb-4 bg-amber-500 text-white p-2 rounded">Carrito de compra</h2>
        <div className="max-h-[70vh] overflow-y-auto">
          {distinctProducts.length > 0 ? (
            <ul>
              {distinctProducts.map((product, index) => {
                const productCount = productos.filter(prod => prod.name === product.name).length;
                const productTotalPrice = productos
                  .filter((prod) => prod.name === product.name)
                  .reduce((acc, prod) => acc + prod.price, 0);

                return (
                  <li key={index} className="border-b py-2 text-gray-800 flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={product.imageUrl} alt={product.name} className="w-10 h-10 mr-2" />
                      <span>{product.name} x {productCount}</span>
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
              .reduce((acc, prod) => acc + prod.price, 0)
              .toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;