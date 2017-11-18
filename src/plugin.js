import camelCase from 'lodash/camelCase'

export default store => {
  store.subscribe((mutation, state) => {
    if (mutation.type.includes('SUCCESS')) {
      let type = camelCase(mutation.type.substring(0, mutation.type.indexOf('SUCCESS') - 1))
      store.commit('SET_PENDING', { type, pending: false })
    }
  })

  store.subscribeAction(action => {
    if (action.payload && action.payload.isAjax === true)
      store.commit('SET_ACTION', { action })
  })
}
