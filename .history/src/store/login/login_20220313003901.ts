import { Module } from 'vuex'

import { accountLoginRequest, requestUserInfoById } from '@/service/login/login'

import { IAccount } from '@/service/login/type'
import { ILoginState } from './types'
import { IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token) {
      state.token = token
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1、 实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localStorage.setCache()

      // 2、请求用户信息
      const userInfo = await requestUserInfoById(id)
      console.log(userInfo)

      // 3、请求用户菜单
    }
  }
}

export default loginModule
