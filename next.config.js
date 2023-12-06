const { v4: uuidv4 } = require("uuid");

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  generateBuildId: async () => {
    const randomBuildId = uuidv4();
    return randomBuildId;
  },
};

module.exports = nextConfig;
