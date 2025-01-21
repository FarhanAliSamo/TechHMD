/** @type {import('next').NextConfig} */

const nextConfig = {
    
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "res.cloudinary.com",
          
        },
        
        
      ],
      
    },
  };
  
  export default nextConfig