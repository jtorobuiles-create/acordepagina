/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Necesario para la exportación estática con imágenes externas
  },
}

module.exports = nextConfig