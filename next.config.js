/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Tambahkan domain di sini kalau gambar diambil dari luar (misal CDN)
    remotePatterns: [],
  },
};

module.exports = nextConfig;
