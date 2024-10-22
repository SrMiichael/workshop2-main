export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-bold">Bienvenido a Nuestro Sitio</h1>
        <p className="mt-2">La mejor solución para tus necesidades</p>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        {/* Hero Section */}
        <section className="text-center my-12">
          <h2 className="text-4xl font-bold">Nuestra Misión</h2>
          <p className="mt-4 text-lg">
            Proveer productos de alta calidad a nuestros clientes
          </p>
        </section>

        {/* Features Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-center">Características</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="border rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold">Calidad</h3>
              <p className="mt-2">Productos de la más alta calidad</p>
            </div>
            <div className="border rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold">Servicio</h3>
              <p className="mt-2">Atención al cliente 24/7</p>
            </div>
            <div className="border rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold">Innovación</h3>
              <p className="mt-2">
                Tecnología de punta en todos nuestros productos
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-center">Testimonios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="border rounded-lg shadow-lg p-6">
              <p>"El mejor servicio que he recibido. Altamente recomendado!"</p>
              <p className="mt-4 font-bold">- Cliente Satisfecho</p>
            </div>
            <div className="border rounded-lg shadow-lg p-6">
              <p>
                "Productos de excelente calidad. Volveré a comprar sin duda."
              </p>
              <p className="mt-4 font-bold">- Cliente Feliz</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2023 Nuestro Sitio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
