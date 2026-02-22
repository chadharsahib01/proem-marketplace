/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['olpelphzuuzaunvgaapx.supabase.co'], // Allowing Supabase image hosting
  },
  // Strict production checks
  typescript: {
    ignoreBuildErrors: false, 
  },
  eslint: {
    ignoreDuringBuilds: false,
  }
};

export default nextConfig;
