import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('react') || id.includes('react-dom')) {
            return 'vendor-react';
          }
          
          // Router
          if (id.includes('react-router')) {
            return 'vendor-router';
          }
          
          // UI Libraries
          if (id.includes('@material-tailwind') || id.includes('framer-motion')) {
            return 'vendor-ui';
          }
          
          // Particles and animation libraries
          if (id.includes('tsparticles') || id.includes('@tsparticles')) {
            return 'vendor-particles';
          }
          
          // Flowbite UI components
          if (id.includes('flowbite')) {
            return 'vendor-flowbite';
          }
          
          // Tailwind and CSS related
          if (id.includes('tailwind') || id.includes('clsx') || id.includes('class-variance-authority')) {
            return 'vendor-css';
          }
          
          // Other node_modules
          if (id.includes('node_modules')) {
            return 'vendor-misc';
          }
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop().replace(/\.(js|jsx|ts|tsx)$/, '') : 'chunk';
          return `js/${facadeModuleId}-[hash].js`;
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'framer-motion',
      '@material-tailwind/react',
    ],
    exclude: ['@tsparticles/react', 'tsparticles'],
  },
  // Enable experimental features for better image handling
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        return { js: `"${filename}"` }
      } else {
        return { relative: true }
      }
    }
  },
  // Configure static asset handling
  assetsInclude: ['**/*.avif', '**/*.webp'],
})
