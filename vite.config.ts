import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    AutoImport({
      imports: ['vue'],
      dts: './typing/auto-imports.d.ts'
    }),
    Components({
      dirs: ['src/components/'],
      dts: './typing/components.d.ts',
    }),
    uni(),
  ],
});
