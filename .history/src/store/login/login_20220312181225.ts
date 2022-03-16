import { Module } from 'vuex'

import { accountLoginRequest } from '@/service/login/login'

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
  mutations: {},
  actions: {
    accountLoginRequest({commit},payload)
  }
}

export default loginModule
