import { createStore } from 'vuex'
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
  
})

export default store
