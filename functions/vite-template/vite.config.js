// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })




// const { defineConfig } = require('vite');
// const react = require('@vitejs/plugin-react');

// module.exports = defineConfig({
//   base: "./", 
//   plugins: [react()],
// });



const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom', 'react-beautiful-dnd'], // ✅ 둘 다 명시!
    },
  },
});