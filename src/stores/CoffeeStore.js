import { defineStore } from 'pinia'

export const useCoffeeStore = defineStore('coffee', {
    // state
    state() {
        return {
            coffee: 0
        }
    },

    // actions
    actions: {
        increment() {
            this.coffee++
        }
    },

    // getters (computed)
    getters: {
        showCount() {
            return this.coffee
        }
    }
})