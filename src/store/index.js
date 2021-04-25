// import axios from 'axios'
import { createStore } from 'vuex'
import alertModules from '@/store/modules/alertMessage'

export default createStore({
  strict: true, // Vuex 語法嚴謹模式
  state: {
    navActive: 'homeActive', // Navbar 樣式狀態停留
    userData: [] // (撈取失敗) localStorage 裡的 "登入使用者" 資訊
  },
  actions: { // 執行 "非同步"
    setNavActive (context, active) {
      context.commit('SET_NAV_Active', active)
    },
    getUserData (context) {
      const getUser = JSON.parse(localStorage.getItem('userData')) || []
      context.commit('SET_USER_DATA', getUser)
    }
  },
  mutations: { // 透過 mutations 改變 state 資料狀態 (資料一定要在 mutations 運作)，把資料寫入
    SET_NAV_Active (state, payload) {
      state.navActive = payload
    },
    SET_USER_DATA (state, payload) {
      state.userData = payload
    }
  },
  getters: {
    navActive: (state) => state.navActive,
    userData: (state) => state.userData
  },
  modules: {
    alertModules
  }
})
