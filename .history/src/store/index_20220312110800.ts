import { createStore } from 'vuex'
import { IRootState } from './types'

// 创建store对象
const store = createStore({
  state: () => {
    return {
      name: '哈哈'
    }
  },
  mutations: {},
  getters: {},
  actions: {}
})

export default store
