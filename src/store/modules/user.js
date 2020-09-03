/**
 * @description 异常捕获的状态拦截，请勿修改
 */

import axios from '@/utils/axios'
import baseUrl from '../../apiConfig/api'

const state = {getToken: ''}

const mutations = {
  commitData(state, param) {
    state[param.name] = param.data
  },
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
  getUserLists ({commit}, param) {
    console.log('111')
    return new Promise((resolve, reject) => {
      axios({
        url: baseUrl + '/index/userList',
        method: 'get'
      }).then(({data}) => {
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
export default {state, mutations, actions}
