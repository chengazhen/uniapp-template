import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
import { defineConfig } from 'unocss/vite'
import transformerDirectives from '@unocss/transformer-directives'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()


export default defineConfig({
  //@ts-ignore
  presets: [presetWeapp(), presetWeappAttributify()],
  transformers: [
    //@ts-ignore
    transformerAttributify(),
    //@ts-ignore
    transformerClass(),
    transformerDirectives(),
  ],
})