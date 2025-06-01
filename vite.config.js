// import { defineConfig } from 'vite';
// import tailwindcss from '@tailwindcss/vite';
// export default defineConfig({
//   plugins: [tailwindcss()],
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // plugin untuk React
import tailwindcss from '@tailwindcss/vite'; // plugin Tailwind (opsional, bisa pakai postcss juga)

export default defineConfig({
  plugins: [
    react(), // wajib untuk dukung JSX & React Fast Refresh
    tailwindcss(), // kalau kamu memang butuh plugin ini (tidak wajib, tergantung setup Tailwind-mu)
  ],
  server: {
    // ini agar saat akses manual ke /login, /dashboard, dll, tetap diarahkan ke index.html
    historyApiFallback: true,
  },
});
