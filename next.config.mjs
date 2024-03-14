/** @type {import('next').NextConfig} */
import { defineConfig } from 'vite-plugin-windicss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const nextConfig = defineConfig({
    plugins: [
        tailwindcss,
        autoprefixer,
    ],
});

export default nextConfig;
