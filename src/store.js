import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import camelCase from 'lodash/camelCase'

Vue.use(Vuex)

const state = {
  ajaxCalls: {}
}

const mutations = {
  SET_ACTION (state, { action }) {
    state.ajaxCalls = { ...state.ajaxCalls, 
      [action.type]: { ...action, pending: true }
    }
  },

  SET_PENDING (state, { type, pending }) {
    state.ajaxCalls[type].pending = false
    delete state.ajaxCalls[type]
  },

  SLOW_CALL_SUCCESS (state, { result }) {
  },
  
  MEDIUM_CALL_SUCCESS (state, { result }) {

  },

  FAST_CALL_SUCCESS (state, { result }) {

  }
}

const actions = {
  slowCall ({ commit }) {
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => commit('SLOW_CALL_SUCCESS', res))
    }, 500)
  },

  mediumCall ({ commit }) {
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts/2')
      .then(res => commit('MEDIUM_CALL_SUCCESS', res))
    }, 1400)
  },
  
  fastCall ({ commit }) {
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts/3')
      .then(res => commit('FAST_CALL_SUCCESS', res))
    }, 4000)
  }
}

const getters = {
  pendingCalls: state => Object.keys(state.ajaxCalls).filter(x => state.ajaxCalls[x].pending === true).length
}

const store = new Vuex.Store({ 
  strict: true, 
  state, 
  mutations, 
  actions,
  getters
})

store.subscribe((mutation, state) => {
  if (mutation.type.includes('SUCCESS')) {
    let type = camelCase(mutation.type.substring(0, mutation.type.indexOf('SUCCESS') - 1))
    store.commit('SET_PENDING', { type, pending: false })
  }
})

store.subscribeAction(action => {
  store.commit('SET_ACTION', { action })
})

export default store
