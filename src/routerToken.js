import router from './router'
import {getToken} from './utils/user'

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.path === '/login') {
    next()
  } else {
    if (getToken()) {
      next()
    } else {
      next({path: '/login'})
    }
  }
})
