/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	transpilePackages: ["ui", "utils"],
	experimental: {
		serverActions: true,
		serverComponentsExternalPackages: ["antd"],
	},
};

module.exports = nextConfig;
