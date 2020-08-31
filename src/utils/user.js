import vueCookie from 'vue-cookie'

const TokenKey = 'token'

export function getToken () {
  return vueCookie.get(TokenKey)
}

export function setToken (token) {
  return vueCookie.set(TokenKey, token, 1)
}

export function removeToken () {
  return vueCookie.delete(TokenKey)
}
