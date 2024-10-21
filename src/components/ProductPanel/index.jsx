import { ProductCard } from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

export default function ProductPanel() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((response) => response.json())
      .then((productos) => setProductos(productos));
  }, []);

  return (
    <>
      {productos.map((producto, index) => (
        <ProductCard
          key={index}
          name={producto.title}
          description={producto.description}
          price={producto.price}
          imageUrl={producto.image}
        />
      ))}
    </>
  );
}
