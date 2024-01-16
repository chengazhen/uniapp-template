import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import Components from '@uni-helper/vite-plugin-uni-components'

// vite.config.ts
import { uniPolyfill } from './vite/uni-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'uni-app', '@vueuse/core'],
      dts: './typing/auto-imports.d.ts',
    }),
    Components({
      dirs: ['src/components/'],
      dts: './typing/components.d.ts',
    }),
    uniPolyfill(),
    uni(),
  ],
})
