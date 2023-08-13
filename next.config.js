/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'appwrite.niklas.tech',
                port: '443',
                pathname: '/v1/storage/buckets/64b6f78890ebd08b8d99/files/**'
            },
        ],
        domains: ['appwrite.niklas.tech']
    }
}

module.exports = nextConfig
