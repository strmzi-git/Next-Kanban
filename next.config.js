/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: "https://ijgrrenmbmlvkgljmbpb.supabase.co",
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqZ3JyZW5tYm1sdmtnbGptYnBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExNzcxNDQsImV4cCI6MjAwNjc1MzE0NH0.AP5y-5QEU0LXUwxMsUYCfGQ-oit5Vg1DH_BcgksJEdg",
  },
};

module.exports = nextConfig;
