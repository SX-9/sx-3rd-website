import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
//  base: '/sx-3rd-website/',
  plugins: [
    vue(),
    Components(),
  ],
});
