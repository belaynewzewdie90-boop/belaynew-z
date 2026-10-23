/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Load nodemailer from node_modules at runtime instead of bundling it (bundling breaks its SMTP sockets)
  serverExternalPackages: ["nodemailer"],
};

export default nextConfig;
