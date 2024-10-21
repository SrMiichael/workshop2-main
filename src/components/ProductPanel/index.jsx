import { ProductCard } from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import productosData from "../../data/producto"

export default function ProductPanel() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    setProductos(productosData);
  }, []);

  return (
    <>
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          id={producto.id}
          name={producto.title}
          description={producto.description}
          price={producto.price}
          imageUrl={producto.image}
        />
      ))}
    </>
  );
}
