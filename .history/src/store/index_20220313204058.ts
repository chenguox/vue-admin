import { createStore } from 'vuex'
import login from './login/login'
import { IRootState } from './types'

// 创建store对象
const store = createStore<IRootState>({
  state: () => {
    return {
      name: '哈哈',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(){
  
}

export default store
