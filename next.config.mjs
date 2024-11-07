/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      // Allowed domains for images
      remotePatterns: [
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
        },
        {
          protocol: "https",
          hostname: "utfs.io",
        },
        
      ],
    },
  };
  
  export default nextConfig;