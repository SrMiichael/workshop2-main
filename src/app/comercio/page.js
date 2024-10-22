"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const ProductPanel = dynamic(() => import("../../components/ProductPanel"), {
  loading: () => <p>Loading...</p>,
});

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "All",
    "Artesanias",
    "Vestimenta tradicional",
    "Café y Cacao",
    "Gastronomía Típica",
    "Instrumentos musicales típicos",
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === "All" ? "" : category);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="mb-4 flex gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryChange(category)}
            className={`border rounded p-2 text-white ${
              selectedCategory === (category === "All" ? "" : category)
                ? "bg-blue-600"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
          >
            {category}
          </button>
        ))}
      </header>

      <main className="grid grid-cols-4 gap-6 row-start-2 items-center sm:items-start">
        <ProductPanel selectedCategory={selectedCategory} />
      </main>
    </div>
  );
}
