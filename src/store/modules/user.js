/**
 * @description 异常捕获的状态拦截，请勿修改
 */

import axios from '@/utils/axios'
import baseUrl from '../../apiConfig/api'

const state = {getToken: ''}

const mutations = {
  commitData (state, param) {
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
  },
  addUserLists ({commit}, param) {
    return new Promise((resolve, reject) => {
      axios({
        url: baseUrl + '/index/addUser',
        method: 'post',
        data: param
      }).then(({data}) => {
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  deleteUser ({commit}, param) {
    return new Promise((resolve, reject) => {
      axios({
        url: baseUrl + '/index/deleteUser',
        method: 'post',
        data: param
      }).then(({data}) => {
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    })
  },
  editUser ({commit}, param) {
    return new Promise((resolve, reject) => {
      axios({
        url: baseUrl + '/index/editUser',
        method: 'post',
        data: param
      }).then(({data}) => {
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}
export default {state, mutations, actions}
