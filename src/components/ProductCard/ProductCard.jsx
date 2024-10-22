/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  useCartContext,
  useCartDispatchContext,
} from "../CartContext/CartContext";

export function ProductCard({ id, name, description, price, imageUrl, category}) {
  const { productos } = useCartContext();
  const dispatch = useCartDispatchContext();

  return (
    <div className="flex flex-col gap-4 border border-gray-300 shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-lg bg-white">
      <Link href={`/comercio/${id}`} className="flex flex-col items-center">
        
        <img src={imageUrl} className="w-40 h-40 object-cover rounded-lg" alt={`${name} image`} />
        <h1 className="text-xl font-semibold text-gray-800 line-clamp-1">{name}</h1>
        <div className="text-gray-800 font-bold">
          <span>Precio</span>
          <p>${price} USD</p>
        </div>
      </Link>
      <div className="flex flex-row gap-3">
        <button
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-500 transition-colors duration-200"
          onClick={(e) => {
            e.stopPropagation();
            dispatch({
              type: "ADD_PRODUCT",
              producto: { name, description, price, imageUrl},
            });
          }}
        >
          Agregar
        </button>
        {productos.filter((producto) => producto.name === name).length > 0 && (
          <button
            className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-500 transition-colors duration-200"
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
