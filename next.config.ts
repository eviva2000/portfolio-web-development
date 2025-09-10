/** @type {import('next').NextConfig} */

const nextConfig: {
  images: {
    remotePatterns: {
      protocol: string;
      hostname: string;
      port: string;
      pathname: string;
    }[];
    domains: string[];
  };
  experimental?: {
    swcPlugins: [string, Record<string, unknown>][];
  };
} = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eyqyeuaguwojbsavaovr.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
    domains: ['images.unsplash.com'],
  },
};


if (process.env.NEXT_PUBLIC_TEMPO) {
  nextConfig["experimental"] = {
    swcPlugins: [[require.resolve("tempo-devtools/swc/0.90"), {}]],
  } as { swcPlugins: [string, Record<string, unknown>][] }; // Explicit type assertion
}

module.exports = nextConfig;