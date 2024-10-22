/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "thepanamastorepty.com",
      "artesanosdepanama.com",
      "kalosh.com",
      "ofertasimple.com",
      "images.cdn-files-a.com",
      "encrypted-tbn0.gstatic.com",
      "cafeduran.com",
      "likershop.com",
      "scontent.fpac2-2.fna.fbcdn.net",
      "oromorenopanama.com",
      "pa.productoselantojo.com",
      "www.panamaamerica.com.pa",
      "www.happy-desserts.com",
      "www.melosadulce.com",
      "static.tvn-2.com",
      "www.ritmorapido.com",
      "musicshoppty.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "**",
        pathname: "/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
