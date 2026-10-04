module.exports = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/api/chat": ["./src/data/ai/knowledge-index.json", "./.cache/transformers/**/*"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
};
