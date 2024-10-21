"use client";
import dynamic from "next/dynamic";

const ProductPanel = dynamic(() => import("../components/ProductPanel"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-4 gap-6 row-start-2 items-center sm:items-start">
        <ProductPanel />
      </main>
    </div>
  );
}
