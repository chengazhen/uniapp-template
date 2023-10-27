import { defineStore } from 'pinia'
interface UserInfo {
  name?: string
}
export const useUserStore = defineStore('user', {
  state: (): UserInfo => {
    return {
      name: ''
    }
  },
  actions: {
    loginOut() {
      this.name = ''
    }
  },
  getters: {
    userName: (state) => {
      return state.name || '未关联'
    }
  },
  persist: true,
})