"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  return (
    <>
      {/* Top Banner */}
      <div className="w-full bg-white text-center py-2 text-sm border-b">
        <p>Envío Gratis en Pedidos Mayores a $75 antes de impuestos y después de descuentos aplicables.</p>
        <a href="mailto:info@artesaniaspanama.com" className="absolute right-4 top-2 text-gray-600 hover:text-gray-800">
          info@artesaniaspanama.com
        </a>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white py-4 px-6 border-b">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <div className="flex flex-col">
              <span className="text-gray-800">PANAMA ARTESANAL</span>
              <span className="text-sm text-gray-500">ARTE & TRADICIÓN</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-800">Inicio</Link>
            <Link href="/nosotros" className="text-gray-600 hover:text-gray-800">Nosotros</Link>
            <Link href="/comercio" className="text-gray-600 hover:text-gray-800">Tienda</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contacto</Link>
            <Link href="/policies" className="text-gray-600 hover:text-gray-800">Políticas y Envíos</Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              🔍
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              👤
            </button>
            <button className="text-gray-600 hover:text-gray-800 relative">
              🛒
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}