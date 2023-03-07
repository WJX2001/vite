import { defineConfig } from 'vite'
// require vue@3.x
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({

  // 你要用vue 就需要引入vue的插件，这样vue就可以使用
  plugins: [vue()],
})
