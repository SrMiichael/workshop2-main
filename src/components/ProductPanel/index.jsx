import { ProductCard } from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import productosData from "../../data/producto";

export default function ProductPanel({ selectedCategory }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(productosData);
  }, []);

  const filteredProducts = selectedCategory
    ? productos.filter(producto => producto.category === selectedCategory)
    : productos;

  return (
    <>
      {filteredProducts.map((producto) => (
        <ProductCard
          key={producto.id}
          id={producto.id}
          name={producto.title}
          description={producto.description}
          price={producto.price}
          imageUrl={producto.image}
          category={producto.category}
        />
      ))}
      {filteredProducts.length === 0 && <p>No products available for this category.</p>}
    </>
  );
}
