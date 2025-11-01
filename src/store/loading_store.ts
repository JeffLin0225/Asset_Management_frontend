import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', {
  state: () => ({
    active: false
  }),
  actions: {
    show() { this.active = true },
    hide() { this.active = false }
  }
})
