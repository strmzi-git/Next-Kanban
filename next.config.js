/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SUPABASE_URL: "http://localhost:3000",
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqZ3JyZW5tYm1sdmtnbGptYnBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExNzcxNDQsImV4cCI6MjAwNjc1MzE0NH0.AP5y-5QEU0LXUwxMsUYCfGQ-oit5Vg1DH_BcgksJEdg",
  },
};

module.exports = nextConfig;
