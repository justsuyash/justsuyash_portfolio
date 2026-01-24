/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true, // We want to migrate fast, fix lint later
    },
    images: {
        unoptimized: true, // Allow standard <img> tags if needed, or static export
    }
};

export default nextConfig;
