import 'virtual:uno.css'
import { createSSRApp } from 'vue'
import uviewPlus from 'uview-plus'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import App from './App.vue'

export function createApp() {
  const pinia = createPinia()
  pinia.use(customStorage())
  const app = createSSRApp(App)
  app.use(uviewPlus)
  app.use(pinia)
  return {
    app,
    pinia,
  }
}

/**
 * @description 自定义pinia持久化api储存方式为 unisetStorageSync
 * @returns
 */
function customStorage() {
  return createPersistedState({
    storage: {
      getItem(key: string) {
        return uni.getStorageSync(key)
      },
      setItem(key: string, value: any) {
        uni.setStorageSync(key, value)
      },
    },
  })
}
