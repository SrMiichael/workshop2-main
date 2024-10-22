"use client";
import Link from "next/link";
import { ShoppingCartIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/20/solid"; 
import { useCartContext } from "../CartContext/CartContext";
import { useAuthContext } from "../CartContext/AuthContext";
import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const protectedRoutes = ["/comercio", "/detalleCompra", "/nosotros"];
const accessLink = ["/", "/comercio", "/detalleCompra", "/nosotros"];


export function Navbar() {
  const { productos } = useCartContext();
  const { isAuthenticated } = useAuthContext();
  const [distinctProducts, setDistinctProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const cartRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const toggleCart = () => setIsCartOpen((prev) => !prev);

  useEffect(() => {
    setDistinctProducts(
      productos.filter(
        (producto, index, self) =>
          index === self.findIndex((p) => p.name === producto.name)
      )
    );
  }, [productos]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartRef]);

  useEffect(() => {
    console.log("isAuthenticated:", isAuthenticated);
    const publicPaths = ["/login", "/favicon.ico", "/globals.css"];
    const pathIsPublic = publicPaths.includes(router.pathname);

    if (!isAuthenticated && !pathIsProtected) {
      router.push("/login");
    }
  }, [pathname, router, isAuthenticated]);

  if (!accessLink.includes(pathname) && !pathname.startsWith("/comercio")) return null;

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      const productFound = distinctProducts.find(product => product.name.toLowerCase() === searchTerm.toLowerCase());
      if (productFound) {
        router.push(`/comercio/${productFound.id}`);
      } else {
        console.log("Product not found");
      }
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center text-white">
          <div>My Ecommerce</div>

          <div className="flex flex-row gap-5">
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/comercio">Productos</Link>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                className="bg-gray-700 text-white rounded-md p-2 pr-10"
              />
              <MagnifyingGlassIcon className="absolute right-2 top-2 w-5 h-5 text-gray-400" />
            </div>

            <div className="flex items-center ml-4">
              <Link
                href="/login"
                className="flex items-center text-white hover:text-gray-400"
              >
                <UserIcon className="w-6 h-6 mr-1" />
                Login
              </Link>
            </div>

            <div className="relative ml-4" ref={cartRef}>
              <button
                onClick={toggleCart}
                className="text-white hover:text-gray-400"
              >
                <ShoppingCartIcon className="w-6 h-6" />
                {productos.length > 0 && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-5 h-5">
                    {productos.length}
                  </span>
                )}
              </button>

              {isCartOpen && (
                <div className="fixed inset-0 bg-gray-900 opacity-50 z-40" onClick={toggleCart}></div>
              )}

              <div className={`fixed right-0 top-0 w-64 h-screen bg-white shadow-lg p-4 transition-transform transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
                <h2 className="text-lg font-bold mb-4 bg-black text-white p-2 rounded">Carrito de compra</h2>
                <div className="max-h-[70vh] overflow-y-auto">
                  {distinctProducts.length > 0 ? (
                    <ul>
                      {distinctProducts.map((product, index) => {
                        const productCount = productos.filter(prod => prod.name === product.name).length;
                        const productTotalPrice = productos
                          .filter((prod) => prod.name === product.name)
                          .reduce((acc, prod) => acc + prod.price, 0);

                        return (
                          <li key={index} className="border-b py-2 text-gray-800 flex justify-between items-center">
                            <div className="flex items-center">
                              <img src={product.imageUrl} alt={product.name} className="w-10 h-10 mr-2" />
                              <span>{product.name} x {productCount}</span>
                            </div>
                            <span>${productTotalPrice.toFixed(2)}</span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="text-gray-600">Carrito vacío</p>
                  )}
                </div>
                <div className="mt-4">
                  <p className="font-bold text-black text-2xl"><br />
                    Subtotal: <br />$ 
                    {productos
                      .map((prod) => prod.price)
                      .reduce((acc, valorActual) => acc + valorActual, 0)
                      .toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
