import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(
      {
        refTransform:true,
          reactivityTransform:true,
      }),
  ],
//   server:{
//    port:8000
// },
base:'./',
})

