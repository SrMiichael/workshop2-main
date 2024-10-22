

export default function Home() {
  const benefits = [
    { icon: <Truck className="w-8 h-8 text-amber-500" />, title: "Envío Gratis", description: "En pedidos mayores a $75" },
    { icon: <RefreshCcw className="w-8 h-8 text-amber-500" />, title: "Política de Devolución", description: "15 días de garantía" },
    { icon: <ShoppingCart className="w-8 h-8 text-amber-500" />, title: "Pago Seguro", description: "100% Seguro" },
    { icon: <Shield className="w-8 h-8 text-amber-500" />, title: "Protección", description: "Garantía de calidad" },
  ];

  const categories = [
    { title: "Artesanías", image: "/api/placeholder/300/400" },
    { title: "Mola Kuna", image: "/api/placeholder/300/400" },
    { title: "Sombreros Pintados", image: "/api/placeholder/300/400" },
  ];

  const bestSellers = [
    { title: "Pollera Panameña", price: 299.99, image: "/api/placeholder/300/400" },
    { title: "Sombrero Pintado", price: 89.99, image: "/api/placeholder/300/400" },
    { title: "Mola Tradicional", price: 45.00, image: "/api/placeholder/300/400" },
  ];

  const categoryCircles = [
    "Textiles", "Cerámicas", "Máscaras", "Joyería", "Instrumentos", "Tembleques"
  ];

  return (
    <div>
      INICIO
    </div>
  );
}