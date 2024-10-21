/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";
import {
  useCartContext,
  useCartDispatchContext,
} from "../CartContext/CartContext";

export function ProductCard({ name, description, price, imageUrl }) {
  const [productoSeleccionado, setProductoSeleccionado] = useState(false);
  const { productos } = useCartContext();
  const dispatch = useCartDispatchContext();

  return (
    <div className="flex flex-col gap-3 border border-gray-950 p-3 rounded-lg hover:bg-blue-50">
      {productoSeleccionado && (
        <div className="relative">
          <div className="absolute bg-orange-400 rounded-full w-fit p-3 ">
            <Image
              width={30}
              height={30}
              src="/assets/icon/check.svg"
              alt="checkIcon"
            />
          </div>
        </div>
      )}
      <img src={imageUrl} className="w-40 h-40 mx-auto" alt="pokemonImage" />
      <h1 className="text-2xl line-clamp-1">{name}</h1>
      <div>
        <span>Descripcion</span>
        <p className="line-clamp-3">{description}</p>
      </div>
      <div>
        <span>Precio</span>
        <p>${price} USD</p>
      </div>
      <div className="flex flex-row gap-3">
        <button
          className="bg-blue-500 text-white p-2 rounded-lg"
          onClick={() => {
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
            className="bg-red-500 text-white p-2 rounded-lg"
            onClick={() => {
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
