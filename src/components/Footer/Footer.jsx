"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
    return (
      <footer className="bg-gray-50 py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="text-center md:text-left">
              <h2 className="text-lg md:text-xl font-bold mb-2">PANAMA ARTESANAL</h2>
              <p className="text-gray-600 mb-4">Arte & Tradición</p>
              <p className="text-sm text-gray-500">
                Somos más que una tienda de artesanías, somos guardianes de la tradición panameña
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-gray-800">Sobre Nosotros</Link></li>
                <li><Link href="/shipping" className="text-gray-600 hover:text-gray-800">Envíos y Devoluciones</Link></li>
                <li><Link href="/store-policy" className="text-gray-600 hover:text-gray-800">Política de la Tienda</Link></li>
                <li><Link href="/privacy" className="text-gray-600 hover:text-gray-800">Política de Privacidad</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-800">Contacto</Link></li>
              </ul>
            </div>
  
            {/* Address */}
            <div className="text-center md:text-left">
              <h3 className="font-bold mb-4">Dirección</h3>
              <p className="text-gray-600 mb-2">Ciudad de Panamá, Panamá</p>
              <p className="text-gray-600 mb-4">info@artesaniaspanama.com</p>
            </div>
  
            {/* Opening Hours */}
            <div className="text-center md:text-left">
              <h3 className="font-bold mb-4">Horario de Atención</h3>
              <p className="text-gray-600">Lun - Vie: 9AM - 6PM</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a href="https://instagram.com" className="text-gray-600 hover:text-gray-800" target="_blank" rel="noopener noreferrer">
                  📷
                </a>
                <a href="https://facebook.com" className="text-gray-600 hover:text-gray-800" target="_blank" rel="noopener noreferrer">
                  📘
                </a>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t mt-8 md:mt-12 pt-8 text-center text-gray-500">
            <p className="text-sm md:text-base">© {new Date().getFullYear()} por Panama Artesanal - Arte & Tradición</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;