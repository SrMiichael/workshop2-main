/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  useCartContext,
  useCartDispatchContext,
} from "../CartContext/CartContext";

export function ProductCard({ id, name, description, price, imageUrl, category }) {
  const { productos } = useCartContext();
  const dispatch = useCartDispatchContext();

  return (
    <div className="flex flex-col gap-4 border border-gray-300 shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg bg-white">
      <Link href={`/comercio/${id}`} className="flex flex-col items-center">
        <img 
          src={imageUrl} 
          className="w-full h-40 object-contain rounded-lg" // 使用 object-contain 保证完整展示
          alt={`${name} image`} 
        />
        <h1 className="text-xl font-semibold text-gray-800 line-clamp-1 text-center">{name}</h1>
        <div className="text-gray-800 font-bold text-center">
          <br />
          <p className="text-lg">${price.toFixed(2)} USD</p>
        </div>
      </Link>
      <div className="flex flex-row gap-3 justify-center">
        <button
          className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          onClick={(e) => {
            e.stopPropagation();
            dispatch({
              type: "ADD_PRODUCT",
              producto: { name, description, price, imageUrl },
            });
          }}
        >
          Agregar
        </button>
        {productos.filter((producto) => producto.name === name).length > 0 && (
          <button
            className="bg-red-600 text-white p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({
                type: "REMOVE_PRODUCT",
                name: name,
              });
            }}
          >
            Remover
          </button>
        )}
      </div>
    </div>
  );
}
