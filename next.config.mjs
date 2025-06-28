/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/cedarhouse.github.io",
  assetPrefix: "/cedarhouse.github.io",
  images: {
    unoptimized: true,
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
