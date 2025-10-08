import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [],
  images: {
		domains: ["t.me"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "t.me",
				port: "",
				pathname: "/u/**",
			},
		],
	},
};

export default nextConfig;
