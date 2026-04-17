/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'api.dicebear.com',
            },
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    experimental: {
        optimizePackageImports: [
            'lucide-react',
            'framer-motion',
            'gsap',
            'recharts',
            'lucide-react',
            '@radix-ui/react-icons',
            'shiki'
        ],
    },
    allowedDevOrigins: ["localhost:3000", "trist-laptop:3000", "192.168.0.179", "192.168.0.179:3000"],
    reactStrictMode: true,
    poweredByHeader: false,
}

export default nextConfig