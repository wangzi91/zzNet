/**
 * @description 异常捕获的状态拦截，请勿修改
 */

const state = {getToken: ''}

const mutations = {
  getTokens (state, data) {
    state.getToken = data
  }
}
const actions = {
  addErrorLog ({commit}, errorLog) {
    commit('addErrorLog', errorLog)
  },
  clearErrorLog ({commit}) {
    commit('clearErrorLog')
  },
}
export default {state, getters, mutations, actions}
