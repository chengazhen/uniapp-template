import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
import { defineConfig } from 'unocss/vite'
import transformerDirectives from '@unocss/transformer-directives'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

export default defineConfig({
  // @ts-expect-error for demo
  presets: [presetWeapp(), presetWeappAttributify()],
  transformers: [
    // @ts-expect-error for demo
    transformerAttributify({
      enforce: 'pre',
    }),
    // @ts-expect-error for demo
    transformerClass(),
    transformerDirectives(),
  ],
})
