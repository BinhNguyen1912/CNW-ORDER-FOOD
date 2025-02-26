import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true //Giúp debug CSS dễ hơn bằng cách hiển thị đường dẫn file gốc trong DevTools.
    //Nếu không bật, DevTools có thể chỉ hiển thị file CSS sau khi build (index.css) thay vì file gốc (src/index.css)
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist'
  }
})
