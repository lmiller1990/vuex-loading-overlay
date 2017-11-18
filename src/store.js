import Vue from 'vue'
import Vuex from 'vuex'
import progressiveLoader from './plugin'

Vue.use(Vuex)

const state = {
  ajaxCalls: {}
}

const mutations = {
  SET_ACTION (state, { action }) {
    state.ajaxCalls = { ...state.ajaxCalls, [action.type]: { ...action, pending: true }
    }
  },

  SET_PENDING (state, { type, pending }) {
    state.ajaxCalls[type].pending = false
  },

  FIRST_CALL_SUCCESS (state) {
  },
  
  SECOND_CALL_SUCCESS (state) {
  },

  THIRD_CALL_SUCCESS (state) {
  }
}

const actions = {
  firstCall ({ commit }) {
    setTimeout(() => {
      commit('FIRST_CALL_SUCCESS')
    }, 1000)
  },

  secondCall ({ commit }) {
    setTimeout(() => {
      commit('SECOND_CALL_SUCCESS')
    }, 2500)
  },
  
  thirdCall ({ commit }) {
    setTimeout(() => {
      commit('THIRD_CALL_SUCCESS')
    }, 4000)
  }
}

const getters = {
  pendingCalls: state => Object.keys(state.ajaxCalls).filter(x => state.ajaxCalls[x].pending === true).length,
  total: state => Object.keys(state.ajaxCalls).length
}

const store = new Vuex.Store({ 
  strict: true, 
  state, 
  mutations, 
  actions,
  getters,
  plugins: [progressiveLoader]
})

export default store
